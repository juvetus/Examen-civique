const DEFAULT_PRACTICE_QUESTION_COUNT = 250;
const DEFAULT_EXAM_QUESTION_COUNT = 40;
const QUESTION_TIMER_SECONDS = 30;
const EXAM_TIMER_SECONDS = 35 * 60;
const DEFAULT_EXAM_PASS_PERCENT = 70;
const PAYPAL_SUPPORT_URL = "https://www.paypal.com/donate/?hosted_button_id=38BSH6AAMPFXG";

const state = {
  mode: null,
  timerType: "question",
  questions: [],
  index: 0,
  score: 0,
  answered: false,
  selectedAnswer: null,
  timerId: null,
  timeLeft: 0,
};

const els = {
  practiceBtn: document.getElementById("practiceBtn"),
  examBtn: document.getElementById("examBtn"),
  timerTypeSelect: document.getElementById("timerTypeSelect"),
  passThresholdSelect: document.getElementById("passThresholdSelect"),
  paypalSupportBtn: document.getElementById("paypalSupportBtn"),
  quizPanel: document.getElementById("quizPanel"),
  resultPanel: document.getElementById("resultPanel"),
  currentIndex: document.getElementById("currentIndex"),
  themeValue: document.getElementById("themeValue"),
  totalCount: document.getElementById("totalCount"),
  scoreValue: document.getElementById("scoreValue"),
  timerValue: document.getElementById("timerValue"),
  progressBar: document.getElementById("progressBar"),
  questionText: document.getElementById("questionText"),
  answersList: document.getElementById("answersList"),
  feedback: document.getElementById("feedback"),
  nextBtn: document.getElementById("nextBtn"),
  restartBtn: document.getElementById("restartBtn"),
  resultText: document.getElementById("resultText"),
  historyText: document.getElementById("historyText"),
  retryExamBtn: document.getElementById("retryExamBtn"),
  backHomeBtn: document.getElementById("backHomeBtn"),
};

function getExamQuestionCount() {
  return Math.min(DEFAULT_EXAM_QUESTION_COUNT, QUESTION_BANK.length);
}

function getPracticeQuestionCount() {
  return DEFAULT_PRACTICE_QUESTION_COUNT;
}

function getExamTimerSeconds() {
  return EXAM_TIMER_SECONDS;
}

function getExamPassPercent() {
  const selected = Number.parseInt(els.passThresholdSelect.value, 10);
  return Number.isFinite(selected) ? selected : DEFAULT_EXAM_PASS_PERCENT;
}

function getExamPassScore(totalQuestions, passPercent) {
  return Math.ceil((totalQuestions * passPercent) / 100);
}

function getThemeLabel(theme) {
  if (!theme) {
    return "General";
  }
  return theme.charAt(0).toUpperCase() + theme.slice(1);
}

function toOfficialExplanation(item) {
  const base = (item.explanation || "Consulte les notions correspondantes.").trim();
  const normalized = /[.!?]$/.test(base) ? base : `${base}.`;
  return `Reference officielle (${getThemeLabel(item.theme)}): ${normalized}`;
}

function buildPracticeQuestionSet(targetCount) {
  if (QUESTION_BANK.length === 0 || targetCount <= 0) {
    return [];
  }

  const questions = [];
  while (questions.length < targetCount) {
    questions.push(...shuffle(QUESTION_BANK));
  }
  return questions.slice(0, targetCount);
}

function configureModeLabels() {
  const practiceCount = getPracticeQuestionCount();
  const examCount = getExamQuestionCount();
  const examMinutes = Math.round(getExamTimerSeconds() / 60);

  els.practiceBtn.textContent = `Mode entraînement (${practiceCount} questions)`;
  els.examBtn.textContent = `Mode examen (${examCount} questions)`;

  const examTimerOption = els.timerTypeSelect.querySelector('option[value="exam"]');
  if (examTimerOption) {
    examTimerOption.textContent = `Par examen (${examMinutes} min)`;
  }
}

function configureSupportLink() {
  if (els.paypalSupportBtn) {
    els.paypalSupportBtn.href = PAYPAL_SUPPORT_URL;
  }
}

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function formatDuration(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function updateTimerDisplay() {
  if (state.timerType === "off") {
    els.timerValue.textContent = "--:--";
    return;
  }
  els.timerValue.textContent = formatDuration(Math.max(0, state.timeLeft));
}

function stopTimer() {
  if (state.timerId) {
    clearInterval(state.timerId);
    state.timerId = null;
  }
}

function handleTimeExpired() {
  if (state.timerType === "question") {
    const item = state.questions[state.index];
    if (!item || state.answered) {
      return;
    }

    state.answered = true;
    const buttons = Array.from(els.answersList.querySelectorAll(".answer-btn"));
    buttons.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === item.answer) {
        btn.classList.add("correct");
      }
    });
    els.feedback.textContent = "Temps écoulé. Passe à la question suivante.";
    els.feedback.className = "feedback no";
    els.nextBtn.disabled = false;
    return;
  }

  // In exam timer mode, the whole session ends when time reaches zero.
  stopTimer();
  els.feedback.textContent = "Temps de l'examen écoulé.";
  els.feedback.className = "feedback no";
  showResult();
}

function startTimer() {
  stopTimer();
  if (state.timerType === "off") {
    updateTimerDisplay();
    return;
  }

  state.timerId = setInterval(() => {
    if (state.timeLeft <= 0) {
      stopTimer();
      handleTimeExpired();
      return;
    }
    state.timeLeft -= 1;
    updateTimerDisplay();
    if (state.timeLeft <= 0) {
      stopTimer();
      handleTimeExpired();
    }
  }, 1000);
}

function initQuiz(mode) {
  stopTimer();
  state.mode = mode;
  state.timerType = els.timerTypeSelect.value;
  state.index = 0;
  state.score = 0;
  state.answered = false;
  state.selectedAnswer = null;

  if (mode === "exam") {
    const source = shuffle(QUESTION_BANK);
    state.questions = source.slice(0, getExamQuestionCount());
  } else {
    state.questions = buildPracticeQuestionSet(getPracticeQuestionCount());
  }

  els.scoreValue.textContent = "0";
  els.totalCount.textContent = String(state.questions.length);
  els.resultPanel.classList.add("hidden");
  els.quizPanel.classList.remove("hidden");

  if (state.timerType === "exam") {
    state.timeLeft = getExamTimerSeconds();
  }
  updateTimerDisplay();
  startTimer();

  renderQuestion();
}

function renderQuestion() {
  const item = state.questions[state.index];
  if (!item) {
    return;
  }

  state.answered = false;
  state.selectedAnswer = null;

  els.currentIndex.textContent = String(state.index + 1);
  els.themeValue.textContent = item.theme || "général";
  els.questionText.textContent = item.question;
  els.feedback.textContent = "";
  els.feedback.className = "feedback";
  els.nextBtn.disabled = true;

  if (state.timerType === "question") {
    state.timeLeft = QUESTION_TIMER_SECONDS;
    updateTimerDisplay();
    startTimer();
  }

  const ratio = ((state.index + 1) / state.questions.length) * 100;
  els.progressBar.style.width = `${ratio}%`;

  els.answersList.innerHTML = "";
  item.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.type = "button";
    btn.textContent = opt;
    btn.addEventListener("click", () => handleAnswer(idx));
    els.answersList.appendChild(btn);
  });
}

function handleAnswer(choiceIndex) {
  if (state.answered) {
    return;
  }

  if (state.timerType === "question") {
    stopTimer();
  }

  state.answered = true;
  state.selectedAnswer = choiceIndex;

  const item = state.questions[state.index];
  const buttons = Array.from(els.answersList.querySelectorAll(".answer-btn"));
  const goodIndex = item.answer;

  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === goodIndex) {
      btn.classList.add("correct");
    }
    if (idx === choiceIndex && idx !== goodIndex) {
      btn.classList.add("wrong");
    }
  });

  const isCorrect = choiceIndex === goodIndex;
  const officialNote = toOfficialExplanation(item);
  if (isCorrect) {
    state.score += 1;
    els.scoreValue.textContent = String(state.score);
    els.feedback.textContent = "Reponse correcte. " + officialNote;
    els.feedback.classList.add("ok");
  } else {
    els.feedback.textContent = "Reponse incorrecte. " + officialNote;
    els.feedback.classList.add("no");
  }

  els.nextBtn.disabled = false;
}

function showResult() {
  stopTimer();
  const total = state.questions.length;
  const percent = Math.round((state.score / total) * 100);
  const isExam = state.mode === "exam";

  els.quizPanel.classList.add("hidden");
  els.resultPanel.classList.remove("hidden");

  let resultMessage = `Tu as obtenu ${state.score}/${total} (${percent}%).`;
  if (isExam) {
    const passPercent = getExamPassPercent();
    const passScore = getExamPassScore(total, passPercent);
    const passed = state.score >= passScore;
    const status = passed ? "Seuil atteint." : "Seuil non atteint.";
    resultMessage += ` Seuil de reussite: ${passScore}/${total} (${passPercent}%). ${status}`;
  }
  els.resultText.textContent = resultMessage;

  const history = JSON.parse(localStorage.getItem("civiqueExamHistory") || "[]");
  history.unshift({
    date: new Date().toISOString(),
    score: state.score,
    total,
    mode: state.mode,
  });
  const trimmed = history.slice(0, 5);
  localStorage.setItem("civiqueExamHistory", JSON.stringify(trimmed));

  if (trimmed.length > 0) {
    const latest = trimmed.map((h) => {
      const d = new Date(h.date).toLocaleDateString("fr-FR");
      return `${d}: ${h.score}/${h.total} (${h.mode})`;
    });
    els.historyText.textContent = `Dernières tentatives: ${latest.join(" | ")}`;
  }
}

function goNext() {
  if (!state.answered) {
    return;
  }

  if (state.index >= state.questions.length - 1) {
    showResult();
    return;
  }

  state.index += 1;
  renderQuestion();
}

function backHome() {
  stopTimer();
  state.mode = null;
  state.timerType = els.timerTypeSelect.value;
  state.questions = [];
  state.index = 0;
  state.score = 0;
  state.answered = false;
  state.selectedAnswer = null;
  state.timeLeft = 0;

  els.quizPanel.classList.add("hidden");
  els.resultPanel.classList.add("hidden");
  els.progressBar.style.width = "0";
  els.themeValue.textContent = "-";
  updateTimerDisplay();
}

els.practiceBtn.addEventListener("click", () => initQuiz("practice"));
els.examBtn.addEventListener("click", () => initQuiz("exam"));
els.nextBtn.addEventListener("click", goNext);
els.restartBtn.addEventListener("click", () => initQuiz(state.mode || "practice"));
els.retryExamBtn.addEventListener("click", () => initQuiz("exam"));
els.backHomeBtn.addEventListener("click", backHome);

configureModeLabels();
configureSupportLink();
