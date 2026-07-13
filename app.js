const DEFAULT_PRACTICE_QUESTION_COUNT = 250;
const DEFAULT_EXAM_QUESTION_COUNT = 40;
const DEFAULT_TARGETED_QUESTION_COUNT = 120;
const DEFAULT_FREQUENT_ERRORS_QUESTION_COUNT = 80;
const QUESTION_TIMER_SECONDS = 30;
const EXAM_TIMER_SECONDS = 35 * 60;
const DEFAULT_EXAM_PASS_PERCENT = 70;
const PAYPAL_SUPPORT_URL = "https://www.paypal.com/donate/?hosted_button_id=38BSH6AAMPFXG";
const HISTORY_STORAGE_KEY = "civiqueExamHistory";
const ERROR_STATS_STORAGE_KEY = "civiqueExamErrorStats";
const PERSONAL_PROGRESS_STORAGE_KEY = "civiqueExamPersonalThemeBest";

const state = {
  mode: null,
  timerType: "question",
  questions: [],
  index: 0,
  score: 0,
  themeStats: {},
  answered: false,
  selectedAnswer: null,
  timerId: null,
  timeLeft: 0,
};

const els = {
  practiceBtn: document.getElementById("practiceBtn"),
  examBtn: document.getElementById("examBtn"),
  targetedBtn: document.getElementById("targetedBtn"),
  frequentErrorsBtn: document.getElementById("frequentErrorsBtn"),
  timerTypeSelect: document.getElementById("timerTypeSelect"),
  passThresholdSelect: document.getElementById("passThresholdSelect"),
  paypalSupportBtn: document.getElementById("paypalSupportBtn"),
  personalProgressEmpty: document.getElementById("personalProgressEmpty"),
  personalProgressList: document.getElementById("personalProgressList"),
  resetPersonalProgressBtn: document.getElementById("resetPersonalProgressBtn"),
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
  themeScoreText: document.getElementById("themeScoreText"),
  historyText: document.getElementById("historyText"),
  retryExamBtn: document.getElementById("retryExamBtn"),
  backHomeBtn: document.getElementById("backHomeBtn"),
};

function getExamQuestionCount() {
  return Math.min(DEFAULT_EXAM_QUESTION_COUNT, QUESTION_BANK.length);
}

function getPracticeQuestionCount() {
  return QUESTION_BANK.length;
}

function getTargetedQuestionCount() {
  return DEFAULT_TARGETED_QUESTION_COUNT;
}

function getFrequentErrorsQuestionCount() {
  return DEFAULT_FREQUENT_ERRORS_QUESTION_COUNT;
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

function getModeLabel(mode) {
  if (mode === "exam") {
    return "Mode examen";
  }
  if (mode === "revision-targeted") {
    return "Revision ciblee";
  }
  if (mode === "errors-frequent") {
    return "Erreurs frequentes";
  }
  return "Mode entrainement";
}

function toOfficialExplanation(item) {
  const base = (item.explanation || "Consulte les notions correspondantes.").trim();
  const normalized = /[.!?]$/.test(base) ? base : `${base}.`;
  return `Reference officielle (${getThemeLabel(item.theme)}): ${normalized}`;
}

function buildPracticeQuestionSet(targetCount) {
  return buildLoopedQuestionSet(QUESTION_BANK, targetCount);
}

function buildLoopedQuestionSet(source, targetCount) {
  if (!Array.isArray(source) || source.length === 0 || targetCount <= 0) {
    return [];
  }

  const questions = [];
  while (questions.length < targetCount) {
    questions.push(...shuffle(source));
  }
  return questions.slice(0, targetCount);
}

function isTargetedTheme(theme) {
  const normalized = String(theme || "").toLowerCase();
  return normalized === "histoire" || normalized === "valeurs";
}

function buildTargetedQuestionSet(targetCount) {
  const targetedPool = QUESTION_BANK.filter((item) => isTargetedTheme(item.theme));
  return buildLoopedQuestionSet(targetedPool, targetCount);
}

function getLocalStorageObject(key) {
  try {
    const parsed = JSON.parse(localStorage.getItem(key) || "{}");
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function saveLocalStorageObject(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getErrorStats() {
  return getLocalStorageObject(ERROR_STATS_STORAGE_KEY);
}

function saveErrorStats(stats) {
  saveLocalStorageObject(ERROR_STATS_STORAGE_KEY, stats);
}

function getPersonalProgress() {
  return getLocalStorageObject(PERSONAL_PROGRESS_STORAGE_KEY);
}

function savePersonalProgress(progress) {
  saveLocalStorageObject(PERSONAL_PROGRESS_STORAGE_KEY, progress);
}

function clearPersonalProgress() {
  localStorage.removeItem(PERSONAL_PROGRESS_STORAGE_KEY);
}

function updatePersonalProgressFromSession() {
  const progress = getPersonalProgress();
  const sessionEntries = Object.entries(state.themeStats);

  sessionEntries.forEach(([theme, values]) => {
    if (!values || values.total <= 0) {
      return;
    }

    const percent = Math.round((values.correct / values.total) * 100);
    const currentBest = progress[theme];
    const shouldUpdate =
      !currentBest ||
      percent > currentBest.percent ||
      (percent === currentBest.percent && values.total > currentBest.total);

    if (shouldUpdate) {
      progress[theme] = {
        percent,
        correct: values.correct,
        total: values.total,
        updatedAt: new Date().toISOString(),
      };
    }
  });

  savePersonalProgress(progress);
}

function renderPersonalProgress() {
  if (!els.personalProgressList || !els.personalProgressEmpty) {
    return;
  }

  const progress = getPersonalProgress();
  const entries = Object.entries(progress)
    .filter(([, values]) => values && Number.isFinite(values.percent) && values.total > 0)
    .sort((a, b) => {
      if (b[1].percent !== a[1].percent) {
        return b[1].percent - a[1].percent;
      }
      return a[0].localeCompare(b[0], "fr");
    });

  if (entries.length === 0) {
    els.personalProgressEmpty.classList.remove("hidden");
    els.personalProgressList.classList.add("hidden");
    els.personalProgressList.innerHTML = "";
    return;
  }

  els.personalProgressEmpty.classList.add("hidden");
  els.personalProgressList.classList.remove("hidden");
  els.personalProgressList.innerHTML = "";

  entries.forEach(([theme, values]) => {
    const li = document.createElement("li");
    li.className = "personal-progress-item";

    const label = document.createElement("span");
    label.className = "personal-progress-label";
    label.textContent = theme;

    const value = document.createElement("span");
    value.className = "personal-progress-value";
    value.textContent = `${values.percent}% (${values.correct}/${values.total})`;

    li.appendChild(label);
    li.appendChild(value);
    els.personalProgressList.appendChild(li);
  });
}

function recordQuestionOutcome(questionItem, isCorrect) {
  if (!questionItem || questionItem.id == null) {
    return;
  }

  const stats = getErrorStats();
  const id = String(questionItem.id);
  const current = stats[id] || { attempts: 0, wrong: 0, correct: 0 };

  current.attempts += 1;
  if (isCorrect) {
    current.correct += 1;
  } else {
    current.wrong += 1;
  }

  stats[id] = current;
  saveErrorStats(stats);
}

function buildFrequentErrorQuestionSet(targetCount) {
  const stats = getErrorStats();
  const ranked = QUESTION_BANK.map((item) => {
    const current = stats[String(item.id)] || null;
    return { item, stats: current };
  })
    .filter((entry) => entry.stats && entry.stats.wrong > 0)
    .sort((a, b) => {
      if (b.stats.wrong !== a.stats.wrong) {
        return b.stats.wrong - a.stats.wrong;
      }
      const aRate = a.stats.wrong / Math.max(1, a.stats.attempts);
      const bRate = b.stats.wrong / Math.max(1, b.stats.attempts);
      return bRate - aRate;
    })
    .map((entry) => entry.item);

  if (ranked.length === 0) {
    return [];
  }

  const computedCount = Math.max(ranked.length, Math.min(targetCount, ranked.length * 3));
  return buildLoopedQuestionSet(ranked, computedCount);
}

function resetThemeStats() {
  state.themeStats = {};
}

function recordThemeOutcome(theme, isCorrect) {
  const label = getThemeLabel(theme);
  if (!state.themeStats[label]) {
    state.themeStats[label] = { correct: 0, total: 0 };
  }
  state.themeStats[label].total += 1;
  if (isCorrect) {
    state.themeStats[label].correct += 1;
  }
}

function getThemeScoreText() {
  const entries = Object.entries(state.themeStats);
  if (entries.length === 0) {
    return "Scores par theme: pas encore de donnees.";
  }

  entries.sort((a, b) => a[0].localeCompare(b[0], "fr"));
  const parts = entries.map(([theme, values]) => {
    const percent = values.total > 0 ? Math.round((values.correct / values.total) * 100) : 0;
    return `${theme} ${percent}% (${values.correct}/${values.total})`;
  });

  return `Scores par theme: ${parts.join(" | ")}`;
}

function configureModeLabels() {
  const practiceCount = getPracticeQuestionCount();
  const examCount = getExamQuestionCount();
  const targetedCount = getTargetedQuestionCount();
  const frequentCount = getFrequentErrorsQuestionCount();
  const examMinutes = Math.round(getExamTimerSeconds() / 60);

  els.practiceBtn.textContent = `Mode entraînement (${practiceCount} questions)`;
  els.examBtn.textContent = `Mode examen (${examCount} questions)`;
  if (els.targetedBtn) {
    els.targetedBtn.textContent = `Revision ciblee Histoire/Valeurs (${targetedCount} questions)`;
  }
  if (els.frequentErrorsBtn) {
    els.frequentErrorsBtn.textContent = `Erreurs frequentes (${frequentCount} max)`;
  }

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
    recordThemeOutcome(item.theme, false);
    recordQuestionOutcome(item, false);
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
  resetThemeStats();
  state.answered = false;
  state.selectedAnswer = null;

  if (mode === "exam") {
    const source = shuffle(QUESTION_BANK);
    state.questions = source.slice(0, getExamQuestionCount());
  } else if (mode === "revision-targeted") {
    state.questions = buildTargetedQuestionSet(getTargetedQuestionCount());
  } else if (mode === "errors-frequent") {
    state.questions = buildFrequentErrorQuestionSet(getFrequentErrorsQuestionCount());
  } else {
    state.questions = buildPracticeQuestionSet(getPracticeQuestionCount());
  }

  if (state.questions.length === 0) {
    els.quizPanel.classList.add("hidden");
    els.resultPanel.classList.add("hidden");
    if (mode === "errors-frequent") {
      window.alert("Aucune erreur frequente enregistree pour l'instant. Lance d'abord un entrainement ou un examen.");
    } else {
      window.alert("Aucune question disponible pour ce mode.");
    }
    return;
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
  els.themeValue.textContent = getThemeLabel(item.theme);
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
  recordThemeOutcome(item.theme, isCorrect);
  recordQuestionOutcome(item, isCorrect);

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
  const percent = total > 0 ? Math.round((state.score / total) * 100) : 0;
  const isExam = state.mode === "exam";

  els.quizPanel.classList.add("hidden");
  els.resultPanel.classList.remove("hidden");

  let resultMessage = `${getModeLabel(state.mode)}: tu as obtenu ${state.score}/${total} (${percent}%).`;
  if (isExam) {
    const passPercent = getExamPassPercent();
    const passScore = getExamPassScore(total, passPercent);
    const passed = state.score >= passScore;
    const status = passed ? "Seuil atteint." : "Seuil non atteint.";
    resultMessage += ` Seuil de reussite: ${passScore}/${total} (${passPercent}%). ${status}`;
  }
  els.resultText.textContent = resultMessage;
  els.themeScoreText.textContent = getThemeScoreText();
  updatePersonalProgressFromSession();
  renderPersonalProgress();

  const history = JSON.parse(localStorage.getItem(HISTORY_STORAGE_KEY) || "[]");
  history.unshift({
    date: new Date().toISOString(),
    score: state.score,
    total,
    mode: state.mode,
  });
  const trimmed = history.slice(0, 5);
  localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(trimmed));

  if (trimmed.length > 0) {
    const latest = trimmed.map((h) => {
      const d = new Date(h.date).toLocaleDateString("fr-FR");
      return `${d}: ${h.score}/${h.total} (${getModeLabel(h.mode)})`;
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
  resetThemeStats();
  state.answered = false;
  state.selectedAnswer = null;
  state.timeLeft = 0;

  els.quizPanel.classList.add("hidden");
  els.resultPanel.classList.add("hidden");
  els.progressBar.style.width = "0";
  els.themeValue.textContent = "-";
  els.themeScoreText.textContent = "";
  updateTimerDisplay();
}

function resetPersonalProgress() {
  clearPersonalProgress();
  renderPersonalProgress();
}

els.practiceBtn.addEventListener("click", () => initQuiz("practice"));
els.examBtn.addEventListener("click", () => initQuiz("exam"));
if (els.targetedBtn) {
  els.targetedBtn.addEventListener("click", () => initQuiz("revision-targeted"));
}
if (els.frequentErrorsBtn) {
  els.frequentErrorsBtn.addEventListener("click", () => initQuiz("errors-frequent"));
}
els.nextBtn.addEventListener("click", goNext);
els.restartBtn.addEventListener("click", () => initQuiz(state.mode || "practice"));
els.retryExamBtn.addEventListener("click", () => initQuiz("exam"));
els.backHomeBtn.addEventListener("click", backHome);
if (els.resetPersonalProgressBtn) {
  els.resetPersonalProgressBtn.addEventListener("click", resetPersonalProgress);
}

configureModeLabels();
configureSupportLink();
renderPersonalProgress();
