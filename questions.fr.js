const QUESTION_BANK = [
  {
    id: 1,
    theme: "histoire",
    question: "Quel événement de 1789 marque le début symbolique de la Révolution française ?",
    options: ["La bataille de Verdun", "La prise de la Bastille", "Le sacre de Napoléon", "La Commune de Paris"],
    answer: 1,
    explanation: "La prise de la Bastille, le 14 juillet 1789, est un symbole majeur de la Révolution."
  },
  {
    id: 2,
    theme: "histoire",
    question: "En quelle année la Déclaration des droits de l'homme et du citoyen est-elle adoptée ?",
    options: ["1789", "1799", "1848", "1905"],
    answer: 0,
    explanation: "La DDHC est adoptée en 1789."
  },
  {
    id: 3,
    theme: "histoire",
    question: "En quelle année la loi Ferry rend-elle l'école primaire obligatoire ?",
    options: ["1789", "1882", "1905", "1944"],
    answer: 1,
    explanation: "La loi de 1882 rend l'instruction primaire obligatoire."
  },
  {
    id: 4,
    theme: "histoire",
    question: "Que célèbre principalement le 14 juillet ?",
    options: ["La fin de la Seconde Guerre mondiale", "La prise de la Bastille en 1789", "Le début de la Ve République", "La déclaration Schuman"],
    answer: 1,
    explanation: "Le 14 juillet renvoie à la prise de la Bastille et à la fête de la Fédération."
  },
  {
    id: 5,
    theme: "histoire",
    question: "Quel texte de 1789 est fondamental pour les droits en France ?",
    options: ["Le code Napoléon", "La Déclaration des droits de l'homme et du citoyen", "Le traité de Maastricht", "La charte de l'environnement"],
    answer: 1,
    explanation: "La DDHC de 1789 est un texte fondateur des libertés."
  },
  {
    id: 6,
    theme: "histoire",
    question: "En quelle année la Ve République est-elle instaurée ?",
    options: ["1946", "1958", "1962", "1981"],
    answer: 1,
    explanation: "La Constitution de la Ve République date de 1958."
  },
  {
    id: 7,
    theme: "histoire",
    question: "En quelle année les femmes obtiennent-elles le droit de vote en France ?",
    options: ["1936", "1944", "1958", "1968"],
    answer: 1,
    explanation: "Le droit de vote des femmes est reconnu en 1944."
  },
  {
    id: 8,
    theme: "histoire",
    question: "Quel appel est prononcé par le général de Gaulle en 1940 ?",
    options: ["L'appel du 1er mai", "L'appel du 18 juin", "L'appel de Verdun", "L'appel de la Bastille"],
    answer: 1,
    explanation: "L'appel du 18 juin 1940 marque la Résistance."
  },
  {
    id: 9,
    theme: "histoire",
    question: "La loi de 1905 établit :",
    options: ["Le service militaire obligatoire", "La séparation des Églises et de l'État", "Le vote à 18 ans", "La création des régions"],
    answer: 1,
    explanation: "La loi de 1905 fonde la séparation des Églises et de l'État."
  },
  {
    id: 10,
    theme: "histoire",
    question: "En quelle année la peine de mort est-elle abolie en France ?",
    options: ["1945", "1968", "1981", "1992"],
    answer: 2,
    explanation: "La peine de mort est abolie en 1981."
  },
  {
    id: 11,
    theme: "histoire",
    question: "Quand l'euro devient-il la monnaie fiduciaire en France ?",
    options: ["1992", "1999", "2002", "2005"],
    answer: 2,
    explanation: "Les pièces et billets en euro circulent à partir de 2002."
  },
  {
    id: 12,
    theme: "histoire",
    question: "Quel événement marque la fin de la Première Guerre mondiale ?",
    options: ["L'armistice du 11 novembre 1918", "Le traité de Rome", "La déclaration Schuman", "La chute du mur de Berlin"],
    answer: 0,
    explanation: "L'armistice du 11 novembre 1918 met fin aux combats."
  },
  {
    id: 13,
    theme: "histoire",
    question: "Qui symbolise la République française dans l'iconographie officielle ?",
    options: ["Jeanne d Arc", "Marianne", "Napoléon", "Victor Hugo"],
    answer: 1,
    explanation: "Marianne est la figure allégorique de la République."
  },
  {
    id: 14,
    theme: "histoire",
    question: "La fête nationale française est célèbre le :",
    options: ["1er mai", "8 mai", "14 juillet", "11 novembre"],
    answer: 2,
    explanation: "La fête nationale est le 14 juillet."
  },
  {
    id: 15,
    theme: "histoire",
    question: "Quelle bataille de 1916 est un symbole majeur de la Première Guerre mondiale ?",
    options: ["Austerlitz", "Verdun", "Waterloo", "Bouvines"],
    answer: 1,
    explanation: "La bataille de Verdun (1916) est un symbole de la Grande Guerre."
  },
  {
    id: 16,
    theme: "institutions",
    question: "Combien de chambres compose le Parlement français ?",
    options: ["Une", "Deux", "Trois", "Quatre"],
    answer: 1,
    explanation: "Le Parlement est composé de l'Assemblée nationale et du Sénat."
  },
  {
    id: 17,
    theme: "institutions",
    question: "Quel document fixe les règles de la Ve République ?",
    options: ["Le code civil", "La Constitution", "Le règlement du Sénat", "Le code électoral"],
    answer: 1,
    explanation: "La Constitution fixe l'organisation des pouvoirs publics."
  },
  {
    id: 18,
    theme: "institutions",
    question: "Qui est le chef de l'État en France ?",
    options: ["Le Premier ministre", "Le Président de la République", "Le président du Sénat", "Le préfet"],
    answer: 1,
    explanation: "Le Président de la République est le chef de l'État."
  },
  {
    id: 19,
    theme: "institutions",
    question: "Quel est le rôle principal du Premier ministre ?",
    options: ["Diriger le Gouvernement", "Présider le Conseil constitutionnel", "Diriger le Sénat", "Rendre la justice"],
    answer: 0,
    explanation: "Le Premier ministre dirige l'action du Gouvernement."
  },
  {
    id: 20,
    theme: "institutions",
    question: "Quelle institution contrôle la conformité des lois à la Constitution ?",
    options: ["Le Conseil constitutionnel", "La Cour de cassation", "Le Conseil d'État", "La Cour des comptes"],
    answer: 0,
    explanation: "Le Conseil constitutionnel contrôle la constitutionnalité des lois."
  },
  {
    id: 21,
    theme: "institutions",
    question: "La Cour de cassation appartient à quel ordre de juridiction ?",
    options: ["Administratif", "Judiciaire", "Constitutionnel", "Européen"],
    answer: 1,
    explanation: "La Cour de cassation est la plus haute juridiction de l'ordre judiciaire."
  },
  {
    id: 22,
    theme: "institutions",
    question: "Le Conseil d'État est principalement la plus haute juridiction de quel ordre ?",
    options: ["Judiciaire", "Administratif", "Pénal", "Constitutionnel"],
    answer: 1,
    explanation: "Le Conseil d'État est la plus haute juridiction administrative."
  },
  {
    id: 23,
    theme: "institutions",
    question: "Quel est le rôle du maire ?",
    options: ["Administrer la commune", "Diriger la région", "Voter les lois nationales", "Commander l'armée"],
    answer: 0,
    explanation: "Le maire administre la commune avec le conseil municipal."
  },
  {
    id: 24,
    theme: "institutions",
    question: "Qui représente l'État dans le département ?",
    options: ["Le maire", "Le préfet", "Le procureur", "Le député"],
    answer: 1,
    explanation: "Le préfet représente l'État dans le département."
  },
  {
    id: 25,
    theme: "institutions",
    question: "Quel niveau de collectivité est dirigé par un conseil régional ?",
    options: ["La commune", "Le département", "La région", "L arrondissement"],
    answer: 2,
    explanation: "Le conseil régional gère la collectivité régionale."
  },
  {
    id: 26,
    theme: "institutions",
    question: "Les députés siègent principalement à :",
    options: ["L'Assemblée nationale", "Le Sénat", "Le Conseil constitutionnel", "Le Conseil d'État"],
    answer: 0,
    explanation: "Les députés siègent à l'Assemblée nationale."
  },
  {
    id: 27,
    theme: "institutions",
    question: "Les sénateurs représentent en particulier :",
    options: ["Les entreprises", "Les collectivités territoriales", "Les syndicats", "Les universités"],
    answer: 1,
    explanation: "Le Sénat assure notamment la représentation des collectivités territoriales."
  },
  {
    id: 28,
    theme: "institutions",
    question: "Le Parlement vote principalement :",
    options: ["Les décrets", "Les lois", "Les circulaires", "Les arrêtés municipaux"],
    answer: 1,
    explanation: "Le Parlement discute et vote les lois."
  },
  {
    id: 29,
    theme: "institutions",
    question: "Un référendum national permet :",
    options: ["De nommer les maires", "De consulter directement les citoyens", "De juger les litiges", "De fixer les impôts locaux"],
    answer: 1,
    explanation: "Le référendum permet une décision directe du corps électoral."
  },
  {
    id: 30,
    theme: "institutions",
    question: "Quel âge faut-il avoir pour voter en France ?",
    options: ["16 ans", "17 ans", "18 ans", "21 ans"],
    answer: 2,
    explanation: "Le droit de vote s'exerce à partir de 18 ans."
  },
  {
    id: 31,
    theme: "valeurs",
    question: "Quelle est la devise de la République française ?",
    options: ["Liberté, Égalité, Fraternité", "Ordre, Travail, Nation", "Justice, Paix, Unite", "Solidarite, Travail, Meritocratie"],
    answer: 0,
    explanation: "La devise républicaine est Liberté, Égalité, Fraternité."
  },
  {
    id: 32,
    theme: "valeurs",
    question: "Que garantit principalement la laïcité ?",
    options: ["Une religion d'État", "La neutralité de l'État et la liberté de conscience", "L'interdiction de toute religion", "Le financement automatique des cultes"],
    answer: 1,
    explanation: "La laïcité protège la neutralité de l'État et la liberté de conscience."
  },
  {
    id: 33,
    theme: "valeurs",
    question: "Le principe d'égalité devant la loi signifie que :",
    options: ["La loi est differente selon la religion", "La loi est la meme pour tous", "La loi ne concerne que les électeurs", "La loi depend de la région"],
    answer: 1,
    explanation: "L'égalité devant la loi implique l'application des mêmes règles à tous."
  },
  {
    id: 34,
    theme: "valeurs",
    question: "La fraternité renvoie notamment à :",
    options: ["La concurrence entre citoyens", "L'entraide et la solidarité", "Le refus de la diversité", "La censure d opinion"],
    answer: 1,
    explanation: "La fraternité encourage l'entraide et la cohésion sociale."
  },
  {
    id: 35,
    theme: "valeurs",
    question: "La langue de la République est :",
    options: ["Le latin", "Le français", "L anglais", "Le français et l anglais"],
    answer: 1,
    explanation: "Selon la Constitution, la langue de la République est le français."
  },
  {
    id: 36,
    theme: "valeurs",
    question: "Quel est un devoir du citoyen ?",
    options: ["Ignorer les lois", "Respecter les lois", "Ne jamais voter", "Refuser l'état civil"],
    answer: 1,
    explanation: "Le respect de la loi est un devoir fondamental du citoyen."
  },
  {
    id: 37,
    theme: "valeurs",
    question: "La liberté d'expression en France :",
    options: ["Est absolue sans limite", "Existe dans le cadre de la loi", "Est interdite", "Est réservée aux elus"],
    answer: 1,
    explanation: "La liberté d'expression est protégée mais encadrée par la loi."
  },
  {
    id: 38,
    theme: "valeurs",
    question: "Que signifie être citoyen français ?",
    options: ["Avoir uniquement des droits", "Avoir des droits et des devoirs", "Ne pas payer d impôts", "Ne pas voter"],
    answer: 1,
    explanation: "La citoyenneté implique des droits et des devoirs."
  },
  {
    id: 39,
    theme: "valeurs",
    question: "Quel est le rôle principal de l'école de la République ?",
    options: ["Former à la citoyenneté et transmettre les savoirs", "Choisir une religion", "Remplacer la famille", "Voter les lois"],
    answer: 0,
    explanation: "L'école transmet des connaissances et les valeurs républicaines."
  },
  {
    id: 40,
    theme: "valeurs",
    question: "Lutte contre les discriminations signifie que :",
    options: ["Certaines discriminations sont normales", "Nul ne doit être traité différemment en raison de son origine, sexe ou religion", "Seuls les employeurs sont concernés", "Cela ne concerne pas le logement"],
    answer: 1,
    explanation: "Le principe d'égalité interdit les discriminations."
  },
  {
    id: 41,
    theme: "valeurs",
    question: "La solidarité nationale repose notamment sur :",
    options: ["Aucune contribution", "La contribution de tous selon les règles", "Le volontariat uniquement", "Les dons privés uniquement"],
    answer: 1,
    explanation: "La solidarité nationale s appuie sur des mécanismes collectifs, dont les contributions obligatoires."
  },
  {
    id: 42,
    theme: "valeurs",
    question: "Le drapeau français comporte :",
    options: ["Deux couleurs", "Trois couleurs", "Quatre couleurs", "Une couleur"],
    answer: 1,
    explanation: "Le drapeau tricolore est bleu, blanc, rouge."
  },
  {
    id: 43,
    theme: "valeurs",
    question: "Quel est l'hymne national français ?",
    options: ["La Carmagnole", "Le Chant des partisans", "La Marseillaise", "Le Bolero"],
    answer: 2,
    explanation: "L'hymne national est La Marseillaise."
  },
  {
    id: 44,
    theme: "valeurs",
    question: "L'exercice du droit de vote est :",
    options: ["Interdit en France", "Réservé aux fonctionnaires", "Un droit civique majeur", "Obligatoire des 16 ans"],
    answer: 2,
    explanation: "Le vote est un droit civique essentiel de la citoyenneté."
  },
  {
    id: 45,
    theme: "valeurs",
    question: "Le principe de laïcité à l'école publique implique :",
    options: ["L'enseignement d'une religion obligatoire", "La neutralité du service public d'éducation", "L'interdiction de toutes convictions privées", "Le remplacement des programmes nationaux"],
    answer: 1,
    explanation: "La laïcité implique la neutralité du service public de l education."
  },
  {
    id: 46,
    theme: "histoire",
    question: "Quelle année marque le début de la Première Guerre mondiale ?",
    options: ["1912", "1914", "1916", "1918"],
    answer: 1,
    explanation: "La Première Guerre mondiale débute en 1914."
  },
  {
    id: 47,
    theme: "histoire",
    question: "Quelle année marque la fin de la Seconde Guerre mondiale en Europe ?",
    options: ["1940", "1944", "1945", "1948"],
    answer: 2,
    explanation: "La Seconde Guerre mondiale prend fin en Europe en 1945."
  },
  {
    id: 48,
    theme: "histoire",
    question: "Qui était le principal auteur de l'abolition de la peine de mort en 1981 ?",
    options: ["Simone Veil", "Robert Badinter", "Jean Moulin", "René Cassin"],
    answer: 1,
    explanation: "Robert Badinter, garde des Sceaux, a porté cette réforme en 1981."
  },
  {
    id: 49,
    theme: "histoire",
    question: "Quel traité est signé en 1957 et fonde la CEE ?",
    options: ["Le traité de Versailles", "Le traité de Maastricht", "Le traité de Rome", "Le traité de Lisbonne"],
    answer: 2,
    explanation: "Le traité de Rome (1957) fonde la CEE."
  },
  {
    id: 50,
    theme: "histoire",
    question: "Quel est l un des symboles de la Résistance française ?",
    options: ["La Croix de Lorraine", "Le lys royal", "Le bonnet rouge", "Le faisceau"],
    answer: 0,
    explanation: "La Croix de Lorraine est un symbole de la France libre et de la Résistance."
  },
  {
    id: 51,
    theme: "histoire",
    question: "Qui est à l'origine de l'appel du 18 juin 1940 ?",
    options: ["Georges Clemenceau", "Charles de Gaulle", "Jean Jaurès", "François Mitterrand"],
    answer: 1,
    explanation: "L'appel du 18 juin est lance par le général de Gaulle."
  },
  {
    id: 52,
    theme: "histoire",
    question: "Que commémore le 11 novembre en France ?",
    options: ["L'armistice de 1918", "La Libération de Paris", "La chute du mur de Berlin", "Le début de la Ve République"],
    answer: 0,
    explanation: "Le 11 novembre commémore l'armistice de 1918."
  },
  {
    id: 53,
    theme: "histoire",
    question: "Que commémore le 8 mai en France ?",
    options: ["La victoire de 1945", "La Révolution de 1789", "L'abolition de la peine de mort", "La loi de 1905"],
    answer: 0,
    explanation: "Le 8 mai célèbre la victoire de 1945."
  },
  {
    id: 54,
    theme: "histoire",
    question: "Quel homme politique est associé à la fondation de la Ve République ?",
    options: ["Georges Pompidou", "Charles de Gaulle", "Léon Blum", "Aristide Briand"],
    answer: 1,
    explanation: "Charles de Gaulle est associé à la mise en place de la Ve République en 1958."
  },
  {
    id: 55,
    theme: "histoire",
    question: "Sous quel régime la Constitution actuelle a-t-elle été adoptée ?",
    options: ["IVe République", "IIIe République", "Ve République", "Monarchie de Juillet"],
    answer: 2,
    explanation: "La Constitution actuelle est celle de la Ve République."
  },
  {
    id: 56,
    theme: "histoire",
    question: "Dans quelle ville est signé l'armistice de 1918 ?",
    options: ["Reims", "Compiègne", "Verdun", "Metz"],
    answer: 1,
    explanation: "L'armistice du 11 novembre 1918 est signé à Compiègne."
  },
  {
    id: 57,
    theme: "histoire",
    question: "Quel est le nom de la période révolutionnaire française commencée en 1789 ?",
    options: ["La Commune", "La Révolution française", "La Restauration", "Le Consulat"],
    answer: 1,
    explanation: "La Révolution française commence en 1789."
  },
  {
    id: 58,
    theme: "histoire",
    question: "Qui a rédigé la Déclaration universelle des droits de l'homme de 1948 côté français ?",
    options: ["René Cassin", "Jean Monnet", "Raymond Aron", "André Malraux"],
    answer: 0,
    explanation: "René Cassin a joué un rôle majeur dans la rédaction de la DUDH."
  },
  {
    id: 59,
    theme: "histoire",
    question: "Quelle est la date de la loi de séparation des Églises et de l'État ?",
    options: ["1882", "1901", "1905", "1910"],
    answer: 2,
    explanation: "La loi de séparation est votée en 1905."
  },
  {
    id: 60,
    theme: "histoire",
    question: "Quelle ville est la capitale de la France ?",
    options: ["Lille", "Paris", "Bordeaux", "Toulouse"],
    answer: 1,
    explanation: "La capitale de la France est Paris."
  },
  {
    id: 61,
    theme: "histoire",
    question: "Quel était le régime politique de la France avant 1789 ?",
    options: ["République", "Monarchie absolue", "Empire fédéral", "Dictature militaire"],
    answer: 1,
    explanation: "Avant 1789, la France était une monarchie absolue."
  },
  {
    id: 62,
    theme: "histoire",
    question: "Quel est le nom du texte qui abolit l'esclavage en France en 1848 ?",
    options: ["Le décret Schoelcher", "Le code noir", "La loi Ferry", "La loi Waldeck"],
    answer: 0,
    explanation: "Le décret du 27 avril 1848, porté par Victor Schoelcher, abolit l'esclavage."
  },
  {
    id: 63,
    theme: "histoire",
    question: "Quel personnage est associé à l'unification de l'Europe après 1945 ?",
    options: ["Jean Monnet", "Louis XIV", "Napoléon III", "Jules Ferry"],
    answer: 0,
    explanation: "Jean Monnet est l un des pères fondateurs de la construction européenne."
  },
  {
    id: 64,
    theme: "histoire",
    question: "A quelle date la Bastille est-elle prise ?",
    options: ["14 juillet 1789", "4 août 1789", "26 août 1789", "10 août 1792"],
    answer: 0,
    explanation: "La prise de la Bastille a lieu le 14 juillet 1789."
  },
  {
    id: 65,
    theme: "institutions",
    question: "Qui nomme le Premier ministre ?",
    options: ["Le Président de la République", "Le Sénat", "Le Conseil constitutionnel", "Le préfet de région"],
    answer: 0,
    explanation: "Le Premier ministre est nommé par le Président de la République."
  },
  {
    id: 66,
    theme: "institutions",
    question: "Le pouvoir législatif est exercé principalement par :",
    options: ["Le Gouvernement", "Le Parlement", "Le Conseil d'État", "Le Président"],
    answer: 1,
    explanation: "Le Parlement exerce le pouvoir législatif."
  },
  {
    id: 67,
    theme: "institutions",
    question: "Le pouvoir exécutif est principalement exercé par :",
    options: ["Le Président et le Gouvernement", "Le Parlement", "Les tribunaux", "Le Conseil constitutionnel"],
    answer: 0,
    explanation: "Le pouvoir exécutif est exercé par le Président et le Gouvernement."
  },
  {
    id: 68,
    theme: "institutions",
    question: "Qui vote le budget de l'État ?",
    options: ["Le Parlement", "Le Conseil d'État", "Les maires", "Le Conseil constitutionnel"],
    answer: 0,
    explanation: "Le budget est voté par le Parlement."
  },
  {
    id: 69,
    theme: "institutions",
    question: "Quelle est la durée du mandat présidentiel en France ?",
    options: ["4 ans", "5 ans", "6 ans", "7 ans"],
    answer: 1,
    explanation: "Le mandat présidentiel est de 5 ans."
  },
  {
    id: 70,
    theme: "institutions",
    question: "Quel est le nom de la chambre haute du Parlement ?",
    options: ["Assemblee nationale", "Sénat", "Conseil économique", "Conseil national"],
    answer: 1,
    explanation: "La chambre haute est le Sénat."
  },
  {
    id: 71,
    theme: "institutions",
    question: "Quel est le nom de la chambre basse du Parlement ?",
    options: ["Sénat", "Assemblee nationale", "Conseil d'État", "Cour des comptes"],
    answer: 1,
    explanation: "La chambre basse est l'Assemblée nationale."
  },
  {
    id: 72,
    theme: "institutions",
    question: "Qui peut dissoudre l'Assemblée nationale ?",
    options: ["Le Premier ministre", "Le Président de la République", "Le président du Sénat", "Le ministre de la Justice"],
    answer: 1,
    explanation: "Le Président peut dissoudre l'Assemblée nationale."
  },
  {
    id: 73,
    theme: "institutions",
    question: "Quelle institution vérifie les comptes publics ?",
    options: ["La Cour des comptes", "Le Conseil constitutionnel", "Le Sénat", "Le Conseil d'État"],
    answer: 0,
    explanation: "La Cour des comptes contrôle les comptes publics."
  },
  {
    id: 74,
    theme: "institutions",
    question: "Quel est l échelon territorial le plus proche des habitants ?",
    options: ["La commune", "Le département", "La région", "L'État"],
    answer: 0,
    explanation: "La commune est l échelon de proximité."
  },
  {
    id: 75,
    theme: "institutions",
    question: "Qui dirige une commune ?",
    options: ["Le président du conseil départemental", "Le maire", "Le préfet", "Le député"],
    answer: 1,
    explanation: "Une commune est dirigée par le maire."
  },
  {
    id: 76,
    theme: "institutions",
    question: "Qui peut proposer une loi en France ?",
    options: ["Le Gouvernement et les parlementaires", "Les maires seulement", "Les juges seulement", "Les préfets seulement"],
    answer: 0,
    explanation: "Les projets viennent du Gouvernement et les propositions des parlementaires."
  },
  {
    id: 77,
    theme: "institutions",
    question: "Quel est le rôle principal du Conseil constitutionnel ?",
    options: ["Juger les crimes", "Vérifier la conformité des lois à la Constitution", "Gérer les impôts", "Représenter la France à l'étranger"],
    answer: 1,
    explanation: "Il contrôle la constitutionnalité des lois."
  },
  {
    id: 78,
    theme: "institutions",
    question: "À quel âge peut-on se présenter à l'élection présidentielle ?",
    options: ["18 ans", "21 ans", "24 ans", "30 ans"],
    answer: 0,
    explanation: "Il faut avoir au moins 18 ans pour être candidat à la présidentielle."
  },
  {
    id: 79,
    theme: "institutions",
    question: "Quel est le rôle du préfet ?",
    options: ["Représenter l'État dans les territoires", "Voter les lois", "Rendre les décisions de justice", "Diriger le Parlement"],
    answer: 0,
    explanation: "Le préfet représente l'État dans les territoires."
  },
  {
    id: 80,
    theme: "institutions",
    question: "Les élections législatives servent à élire :",
    options: ["Les sénateurs", "Les députés", "Les maires", "Les eurodéputés"],
    answer: 1,
    explanation: "Les législatives élisent les députés."
  },
  {
    id: 81,
    theme: "institutions",
    question: "Le Sénat est renouvelé :",
    options: ["En totalité tous les 5 ans", "Par moitié environ tous les 3 ans", "Chaque année", "Jamais"],
    answer: 1,
    explanation: "Le Sénat est renouvelé partiellement environ tous les 3 ans."
  },
  {
    id: 82,
    theme: "institutions",
    question: "Quel est l'ordre de juridiction pour un litige avec l administration ?",
    options: ["Judiciaire", "Administratif", "Constitutionnel", "Européen"],
    answer: 1,
    explanation: "Les litiges avec l administration relèvent de l'ordre administratif."
  },
  {
    id: 83,
    theme: "valeurs",
    question: "La devise Liberté, Égalité, Fraternité exprime :",
    options: ["Les valeurs républicaines", "Une devise régionale", "Un slogan sportif", "Une devise européenne"],
    answer: 0,
    explanation: "Elle exprime les valeurs de la République française."
  },
  {
    id: 84,
    theme: "valeurs",
    question: "La liberté de conscience signifie :",
    options: ["Imposer une religion", "Pouvoir croire ou ne pas croire", "Interdire les convictions", "Obliger une pratique religieuse"],
    answer: 1,
    explanation: "Chacun est libre de ses convictions, religieuses ou non."
  },
  {
    id: 85,
    theme: "valeurs",
    question: "Le respect d'autrui est :",
    options: ["Optionnel", "Une valeur essentielle du vivre-ensemble", "Réservé aux adultes", "Une contrainte religieuse"],
    answer: 1,
    explanation: "Le respect d'autrui est essentiel à la cohésion sociale."
  },
  {
    id: 86,
    theme: "valeurs",
    question: "L'égalité femmes-hommes en France est :",
    options: ["Un objectif prive", "Un principe juridique", "Une option locale", "Une tradition non ecrite"],
    answer: 1,
    explanation: "L'égalité femmes-hommes est un principe inscrit dans le droit."
  },
  {
    id: 87,
    theme: "valeurs",
    question: "La laïcité interdit-elle les religions ?",
    options: ["Oui", "Non", "Seulement dans les lieux privés", "Seulement dans les campagnes"],
    answer: 1,
    explanation: "La laïcité n interdit pas les religions; elle garantit la neutralité de l'État."
  },
  {
    id: 88,
    theme: "valeurs",
    question: "Un citoyen doit participer à la vie démocratique notamment en :",
    options: ["Votant", "Refusant les elections", "Évitant le débat public", "Ignorant les lois"],
    answer: 0,
    explanation: "Le vote est une forme importante de participation démocratique."
  },
  {
    id: 89,
    theme: "valeurs",
    question: "La fraternité implique :",
    options: ["L'individualisme absolu", "L'entraide entre les personnes", "La concurrence permanente", "Le refus de la solidarité"],
    answer: 1,
    explanation: "La fraternité favorise l'entraide et la solidarité."
  },
  {
    id: 90,
    theme: "valeurs",
    question: "La discrimination est :",
    options: ["Autorisée", "Interdite par la loi", "Tolérée dans l'emploi", "Permise dans le logement"],
    answer: 1,
    explanation: "La discrimination est interdite en France."
  },
  {
    id: 91,
    theme: "valeurs",
    question: "Le service public doit être :",
    options: ["Neutre", "Religieux", "Partisan", "Réservé à certains groupes"],
    answer: 0,
    explanation: "Le service public est soumis au principe de neutralité."
  },
  {
    id: 92,
    theme: "valeurs",
    question: "La solidarité nationale finance notamment :",
    options: ["La protection sociale", "Seulement des activités sportives", "Uniquement les transports privés", "Les campagnes électorales"],
    answer: 0,
    explanation: "La solidarité nationale contribue au financement de la protection sociale."
  },
  {
    id: 93,
    theme: "valeurs",
    question: "Le principe de légalité signifie que :",
    options: ["Chacun fait ses propres règles", "Tous doivent respecter la loi", "La loi ne concerne que l'État", "La loi est facultative"],
    answer: 1,
    explanation: "Le principe de légalité impose le respect de la loi par tous."
  },
  {
    id: 94,
    theme: "valeurs",
    question: "La citoyenneté française donne accès :",
    options: ["Aux droits civiques et politiques", "Seulement au permis de conduire", "Uniquement à un emploi public", "Aucune responsabilité"],
    answer: 0,
    explanation: "La citoyenneté ouvre des droits civiques et politiques."
  },
  {
    id: 95,
    theme: "valeurs",
    question: "Le respect de la dignité humaine est :",
    options: ["Une valeur fondamentale", "Un principe secondaire", "Optionnel", "Limité à la vie privée"],
    answer: 0,
    explanation: "La dignité humaine est une valeur fondamentale de la République."
  },
  {
    id: 96,
    theme: "valeurs",
    question: "L'école de la République transmet :",
    options: ["Des savoirs et des valeurs communes", "Une religion d'État", "Des consignes partisanes", "Seulement des compétences sportives"],
    answer: 0,
    explanation: "L'école transmet les savoirs et les valeurs communes."
  },
  {
    id: 97,
    theme: "valeurs",
    question: "Le pluralisme en democratie signifie :",
    options: ["Une seule opinion autorisee", "La coexistence de plusieurs opinions", "L'interdiction des partis", "Le vote unique"],
    answer: 1,
    explanation: "Le pluralisme garantit la diversité des opinions."
  },
  {
    id: 98,
    theme: "valeurs",
    question: "La liberté de la presse est :",
    options: ["Un principe démocratique", "Interdite", "Réservée aux administrations", "Sans aucune responsabilité légale"],
    answer: 0,
    explanation: "La liberté de la presse est un pilier démocratique, encadre par la loi."
  },
  {
    id: 99,
    theme: "valeurs",
    question: "Payer l'impôt sert notamment à :",
    options: ["Financer les services publics", "Financer uniquement des entreprises privées", "Éviter les elections", "Remplacer les lois"],
    answer: 0,
    explanation: "L impot contribue au financement des services publics."
  },
  {
    id: 100,
    theme: "valeurs",
    question: "Le principe républicain de fraternité encourage :",
    options: ["Le repli sur soi", "L'aide et l'entraide", "L'exclusion", "L indifférence"],
    answer: 1,
    explanation: "La fraternité encourage l'entraide entre toutes les personnes."
  }
];





