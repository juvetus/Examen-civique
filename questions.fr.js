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
  },
  {
    id: 101,
    theme: "geographie",
    question: "Quelle est la capitale de la France ?",
    options: ["Lyon", "Marseille", "Paris", "Lille"],
    answer: 2,
    explanation: "La capitale de la France est Paris."
  },
  {
    id: 102,
    theme: "geographie",
    question: "Quel fleuve traverse Paris ?",
    options: ["La Loire", "Le Rhône", "La Seine", "La Garonne"],
    answer: 2,
    explanation: "La Seine traverse Paris."
  },
  {
    id: 103,
    theme: "geographie",
    question: "Combien de régions administratives compte la France métropolitaine ?",
    options: ["11", "13", "15", "18"],
    answer: 1,
    explanation: "La France métropolitaine compte 13 régions administratives."
  },
  {
    id: 104,
    theme: "geographie",
    question: "Quelle est la plus haute montagne de France ?",
    options: ["Le Puy de Dôme", "Le mont Blanc", "Le Canigou", "Le Vercors"],
    answer: 1,
    explanation: "Le mont Blanc est le plus haut sommet de France."
  },
  {
    id: 105,
    theme: "geographie",
    question: "Quel est le plus long fleuve de France ?",
    options: ["La Seine", "Le Rhône", "La Loire", "Le Rhin"],
    answer: 2,
    explanation: "La Loire est le plus long fleuve de France."
  },
  {
    id: 106,
    theme: "geographie",
    question: "Quel est l'océan à l'ouest de la France métropolitaine ?",
    options: ["Océan Indien", "Océan Atlantique", "Océan Arctique", "Océan Pacifique"],
    answer: 1,
    explanation: "La façade ouest de la France métropolitaine donne sur l'océan Atlantique."
  },
  {
    id: 107,
    theme: "geographie",
    question: "Quel département est également une région d'outre-mer ?",
    options: ["La Corse", "La Réunion", "La Savoie", "Le Var"],
    answer: 1,
    explanation: "La Réunion est à la fois un département et une région d'outre-mer."
  },
  {
    id: 108,
    theme: "geographie",
    question: "Quel pays ne partage PAS de frontière avec la France ?",
    options: ["L'Espagne", "L'Italie", "Le Portugal", "La Belgique"],
    answer: 2,
    explanation: "Le Portugal ne partage pas de frontière avec la France."
  },
  {
    id: 109,
    theme: "geographie",
    question: "Quelle ville est traversée par la Garonne ?",
    options: ["Toulouse", "Nice", "Dijon", "Grenoble"],
    answer: 0,
    explanation: "La Garonne traverse notamment Toulouse."
  },
  {
    id: 110,
    theme: "geographie",
    question: "Quel est le chef-lieu de la région Provence-Alpes-Côte d'Azur ?",
    options: ["Marseille", "Nice", "Toulon", "Avignon"],
    answer: 0,
    explanation: "Le chef-lieu de la région Provence-Alpes-Côte d'Azur est Marseille."
  },
  {
    id: 111,
    theme: "culture",
    question: "Quel musée parisien abrite la Joconde ?",
    options: ["Le musée d'Orsay", "Le Louvre", "Le Centre Pompidou", "Le musée Rodin"],
    answer: 1,
    explanation: "La Joconde est exposée au musée du Louvre."
  },
  {
    id: 112,
    theme: "culture",
    question: "Qui est l'auteur des Misérables ?",
    options: ["Albert Camus", "Émile Zola", "Victor Hugo", "Molière"],
    answer: 2,
    explanation: "Victor Hugo est l'auteur des Misérables."
  },
  {
    id: 113,
    theme: "culture",
    question: "Quel est le principal festival de cinéma en France ?",
    options: ["Festival de Deauville", "Festival de Cannes", "Festival d'Angoulême", "Festival d'Avignon"],
    answer: 1,
    explanation: "Le Festival de Cannes est le principal festival de cinéma en France."
  },
  {
    id: 114,
    theme: "culture",
    question: "Quel dramaturge français est l'auteur de Tartuffe ?",
    options: ["Racine", "Corneille", "Molière", "Beaumarchais"],
    answer: 2,
    explanation: "Tartuffe est une pièce de Molière."
  },
  {
    id: 115,
    theme: "culture",
    question: "Quelle institution protège et valorise la langue française ?",
    options: ["L'Académie française", "Le Sénat", "Le Conseil d'État", "La Cour de cassation"],
    answer: 0,
    explanation: "L'Académie française joue un rôle de référence pour la langue française."
  },
  {
    id: 116,
    theme: "culture",
    question: "Quel monument est situé à Paris sur le Champ-de-Mars ?",
    options: ["L'Arc de Triomphe", "La tour Eiffel", "Le Panthéon", "Notre-Dame"],
    answer: 1,
    explanation: "La tour Eiffel est située sur le Champ-de-Mars à Paris."
  },
  {
    id: 117,
    theme: "culture",
    question: "Quelle chanson est l'hymne national français ?",
    options: ["Le Chant du départ", "La Marseillaise", "Le Temps des cerises", "La Carmagnole"],
    answer: 1,
    explanation: "L'hymne national français est La Marseillaise."
  },
  {
    id: 118,
    theme: "culture",
    question: "Quel écrivain français a obtenu le prix Nobel de littérature en 1957 ?",
    options: ["André Malraux", "Jean-Paul Sartre", "Albert Camus", "Romain Gary"],
    answer: 2,
    explanation: "Albert Camus a reçu le prix Nobel de littérature en 1957."
  },
  {
    id: 119,
    theme: "culture",
    question: "Dans quelle ville se déroule le Festival d'Avignon ?",
    options: ["Marseille", "Lyon", "Avignon", "Montpellier"],
    answer: 2,
    explanation: "Le Festival d'Avignon se déroule à Avignon."
  },
  {
    id: 120,
    theme: "culture",
    question: "Quel est le nom de la fête nationale célébrée le 14 juillet ?",
    options: ["Fête de la République", "Fête nationale française", "Fête de la Constitution", "Fête civique"],
    answer: 1,
    explanation: "Le 14 juillet correspond à la fête nationale française."
  },
  {
    id: 121,
    theme: "histoire",
    question: "En quelle année a eu lieu la prise de la Bastille ?",
    options: ["1958", "1944", "1940", "1789"],
    answer: 3,
    explanation: "La prise de la Bastille a eu lieu en 1789."
  },
  {
    id: 122,
    theme: "histoire",
    question: "Quel fait historique majeur est associé à l'année 1789 ?",
    options: ["La Déclaration des droits de l'homme et du citoyen", "La Constitution de la Ve République", "Le droit de vote des femmes en France", "La prise de la Bastille"],
    answer: 3,
    explanation: "En histoire de France, l'année 1789 est associée à la prise de la Bastille."
  },
  {
    id: 123,
    theme: "histoire",
    question: "En quelle année a eu lieu la Déclaration des droits de l'homme et du citoyen ?",
    options: ["1789", "1940", "1905", "1944"],
    answer: 0,
    explanation: "La Déclaration des droits de l'homme et du citoyen a eu lieu en 1789."
  },
  {
    id: 124,
    theme: "histoire",
    question: "Quel fait historique majeur est associé à l'année 1789 ?",
    options: ["La Déclaration des droits de l'homme et du citoyen", "L'appel du 18 juin", "La loi de séparation des Églises et de l'État", "Le droit de vote des femmes en France"],
    answer: 0,
    explanation: "En histoire de France, l'année 1789 est associée à la Déclaration des droits de l'homme et du citoyen."
  },
  {
    id: 125,
    theme: "histoire",
    question: "En quelle année a eu lieu la Constitution de la Ve République ?",
    options: ["1944", "1958", "1905", "1940"],
    answer: 1,
    explanation: "La Constitution de la Ve République a eu lieu en 1958."
  },
  {
    id: 126,
    theme: "histoire",
    question: "Quel fait historique majeur est associé à l'année 1958 ?",
    options: ["La loi de séparation des Églises et de l'État", "La Constitution de la Ve République", "La fin des combats de la Première Guerre mondiale (armistice)", "L'abolition de la peine de mort"],
    answer: 1,
    explanation: "En histoire de France, l'année 1958 est associée à la Constitution de la Ve République."
  },
  {
    id: 127,
    theme: "histoire",
    question: "En quelle année a eu lieu le droit de vote des femmes en France ?",
    options: ["1905", "1940", "1944", "1981"],
    answer: 2,
    explanation: "Le droit de vote des femmes en France a eu lieu en 1944."
  },
  {
    id: 128,
    theme: "histoire",
    question: "Quel fait historique majeur est associé à l'année 1944 ?",
    options: ["La proclamation de la Deuxième République", "La fin des combats de la Première Guerre mondiale (armistice)", "Le droit de vote des femmes en France", "Le sacre de Napoléon Ier"],
    answer: 2,
    explanation: "L'année 1944 est notamment associée au droit de vote des femmes en France."
  },
  {
    id: 129,
    theme: "histoire",
    question: "En quelle année a eu lieu l'appel du 18 juin ?",
    options: ["1981", "1918", "1905", "1940"],
    answer: 3,
    explanation: "L'appel du 18 juin a eu lieu en 1940."
  },
  {
    id: 130,
    theme: "histoire",
    question: "Quel fait historique majeur est associé à l'année 1940 ?",
    options: ["La bataille de Verdun", "La Libération de Paris", "Le sacre de Napoléon Ier", "L'appel du 18 juin"],
    answer: 3,
    explanation: "En histoire de France, l'année 1940 est associée à l'appel du 18 juin."
  },
  {
    id: 131,
    theme: "histoire",
    question: "En quelle année a eu lieu la loi de séparation des Églises et de l'État ?",
    options: ["1905", "1848", "1918", "1981"],
    answer: 0,
    explanation: "La loi de séparation des Églises et de l'État a eu lieu en 1905."
  },
  {
    id: 132,
    theme: "histoire",
    question: "Quel fait historique majeur est associé à l'année 1905 ?",
    options: ["La loi de séparation des Églises et de l'État", "La naissance de la Cinquième République (mise en oeuvre)", "La création de la Communauté économique européenne (traité de Rome)", "La Libération de Paris"],
    answer: 0,
    explanation: "En histoire de France, l'année 1905 est associée à la loi de séparation des Églises et de l'État."
  },
  {
    id: 133,
    theme: "histoire",
    question: "En quelle année a eu lieu l'abolition de la peine de mort ?",
    options: ["1918", "1804", "1981", "1848"],
    answer: 2,
    explanation: "L'abolition de la peine de mort a eu lieu en 1981."
  },
  {
    id: 134,
    theme: "histoire",
    question: "Quel fait historique majeur est associé à l'année 1981 ?",
    options: ["La naissance de la Cinquième République (mise en oeuvre)", "La majorité civile à 18 ans en France", "L'abolition de la peine de mort", "L'élection du président de la République au suffrage universel direct (référendum)"],
    answer: 2,
    explanation: "En histoire de France, l'année 1981 est associée à l'abolition de la peine de mort."
  },
  {
    id: 135,
    theme: "histoire",
    question: "En quelle année a eu lieu la fin des combats de la Première Guerre mondiale (armistice) ?",
    options: ["1804", "1848", "1918", "1916"],
    answer: 2,
    explanation: "La fin des combats de la Première Guerre mondiale (armistice) a eu lieu en 1918."
  },
  {
    id: 136,
    theme: "institutions",
    question: "Quel est le rôle principal du président de la République ?",
    options: ["il détermine et conduit la politique de la Nation", "elle vote la loi et contrôle l'action du Gouvernement", "il dirige l'action du Gouvernement", "il garantit le fonctionnement régulier des pouvoirs publics et représente la Nation"],
    answer: 3,
    explanation: "Pour le président de la République, la mission principale est : il garantit le fonctionnement régulier des pouvoirs publics et représente la Nation."
  },
  {
    id: 137,
    theme: "institutions",
    question: "Quelle institution correspond à la mission suivante : il garantit le fonctionnement régulier des pouvoirs publics et représente la Nation ?",
    options: ["Le Gouvernement", "L'Assemblée nationale", "Le Premier ministre", "Le président de la République"],
    answer: 3,
    explanation: "Cette mission correspond principalement au président de la République."
  },
  {
    id: 138,
    theme: "institutions",
    question: "Quel est le rôle principal du Premier ministre ?",
    options: ["il dirige l'action du Gouvernement", "il contrôle la conformité des lois à la Constitution", "il vote la loi et contrôle le Gouvernement", "il participe au vote de la loi et représente les collectivités territoriales"],
    answer: 0,
    explanation: "Pour le Premier ministre, la mission principale est : il dirige l'action du Gouvernement."
  },
  {
    id: 139,
    theme: "institutions",
    question: "Quelle institution correspond à la mission suivante : il dirige l'action du Gouvernement ?",
    options: ["Le Premier ministre", "La Cour de cassation", "Le Conseil d'État", "Le Conseil constitutionnel"],
    answer: 0,
    explanation: "Cette mission correspond principalement au Premier ministre."
  },
  {
    id: 140,
    theme: "institutions",
    question: "Quel est le rôle principal du Gouvernement ?",
    options: ["il conseille le Gouvernement et juge les litiges administratifs", "elle contrôle l'emploi des fonds publics", "il détermine et conduit la politique de la Nation", "elle vérifie la bonne application du droit par les tribunaux judiciaires"],
    answer: 2,
    explanation: "Pour le Gouvernement, la mission principale est : il détermine et conduit la politique de la Nation."
  },
  {
    id: 141,
    theme: "institutions",
    question: "Quelle institution correspond à la mission suivante : il détermine et conduit la politique de la Nation ?",
    options: ["Le Défenseur des droits", "Le préfet", "Le Gouvernement", "Le maire"],
    answer: 2,
    explanation: "Cette mission correspond principalement au Gouvernement."
  },
  {
    id: 142,
    theme: "institutions",
    question: "Quel est le rôle principal de l'Assemblée nationale ?",
    options: ["il veille au respect des droits et libertés par les administrations", "il contribue à l'indépendance de l'autorité judiciaire", "elle vote la loi et contrôle l'action du Gouvernement", "il administre la commune et exerce des fonctions d'officier d'état civil"],
    answer: 2,
    explanation: "Pour l'Assemblée nationale, la mission principale est : elle vote la loi et contrôle l'action du Gouvernement."
  },
  {
    id: 143,
    theme: "institutions",
    question: "Quelle institution correspond à la mission suivante : elle vote la loi et contrôle l'action du Gouvernement ?",
    options: ["L'Assemblée nationale", "Le Conseil des ministres", "La région", "Le référendum"],
    answer: 0,
    explanation: "Cette mission correspond principalement à l'Assemblée nationale."
  },
  {
    id: 144,
    theme: "institutions",
    question: "Quel est le rôle principal du Sénat ?",
    options: ["elle gère les services de proximité et la vie locale", "il exerce des compétences de solidarité sociale et territoriale", "il représente l'État dans le département ou la région", "il participe au vote de la loi et représente les collectivités territoriales"],
    answer: 3,
    explanation: "Pour le Sénat, la mission principale est : il participe au vote de la loi et représente les collectivités territoriales."
  },
  {
    id: 145,
    theme: "institutions",
    question: "Quelle institution correspond à la mission suivante : il participe au vote de la loi et représente les collectivités territoriales ?",
    options: ["Le décret", "La justice judiciaire", "La justice administrative", "Le Sénat"],
    answer: 3,
    explanation: "Cette mission correspond principalement au Sénat."
  },
  {
    id: 146,
    theme: "institutions",
    question: "Quel est le rôle principal du Parlement ?",
    options: ["il vote la loi et contrôle le Gouvernement", "il permet aux citoyens de se prononcer directement sur un texte", "il réunit les ministres autour du président pour adopter des textes majeurs", "elle agit notamment sur les transports, l'économie et les lycées"],
    answer: 0,
    explanation: "Pour le Parlement, la mission principale est : il vote la loi et contrôle le Gouvernement."
  },
  {
    id: 147,
    theme: "institutions",
    question: "Quelle institution correspond à la mission suivante : il vote la loi et contrôle le Gouvernement ?",
    options: ["La Commission nationale de l'informatique et des libertés (CNIL)", "La Haute Autorité pour la transparence de la vie publique", "Le Parlement", "Le juge des enfants"],
    answer: 2,
    explanation: "Cette mission correspond principalement au Parlement."
  },
  {
    id: 148,
    theme: "institutions",
    question: "Quel est le rôle principal du Conseil constitutionnel ?",
    options: ["elle fixe l'organisation des pouvoirs publics et les principes fondamentaux", "il est un acte réglementaire pris par l'exécutif", "il contrôle la conformité des lois à la Constitution", "elle est votée par le Parlement"],
    answer: 2,
    explanation: "Pour le Conseil constitutionnel, la mission principale est : il contrôle la conformité des lois à la Constitution."
  },
  {
    id: 149,
    theme: "institutions",
    question: "Quelle institution correspond à la mission suivante : il contrôle la conformité des lois à la Constitution ?",
    options: ["La Commission européenne", "Le décret", "Le Conseil constitutionnel", "La Banque centrale européenne"],
    answer: 2,
    explanation: "Cette mission correspond principalement au Conseil constitutionnel."
  },
  {
    id: 150,
    theme: "institutions",
    question: "Quel est le rôle principal du Conseil d'État ?",
    options: ["il conseille le Gouvernement et juge les litiges administratifs", "elle règle les conflits entre personnes et sanctionne les infractions", "elle tranche les litiges impliquant l'administration", "elle recherche les infractions et leurs auteurs sous l'autorité de la justice"],
    answer: 0,
    explanation: "Pour le Conseil d'État, la mission principale est : il conseille le Gouvernement et juge les litiges administratifs."
  },
  {
    id: 151,
    theme: "valeurs",
    question: "Dans les valeurs républicaines, que recouvre le principe de la laïcité ?",
    options: ["l'application des mêmes règles de droit à toutes les personnes", "la solidarité entre les membres de la communauté nationale", "le droit d'exprimer ses opinions dans le respect de la loi", "la neutralité de l'État à l'égard des religions et la liberté de conscience"],
    answer: 3,
    explanation: "La laïcité correspond à la neutralité de l'État à l'égard des religions et la liberté de conscience."
  },
  {
    id: 152,
    theme: "valeurs",
    question: "Quel principe républicain correspond à la définition suivante : la neutralité de l'État à l'égard des religions et la liberté de conscience ?",
    options: ["la liberté d'expression", "la fraternité", "l'égalité devant la loi", "la laïcité"],
    answer: 3,
    explanation: "Cette définition correspond à la laïcité."
  },
  {
    id: 153,
    theme: "valeurs",
    question: "Dans les valeurs républicaines, que recouvre le principe de la liberté d'expression ?",
    options: ["le droit d'exprimer ses opinions dans le respect de la loi", "la participation collective à la protection des plus vulnérables", "le respect de chaque personne sans humiliation ni traitement dégradant", "la solidarité entre les membres de la communauté nationale"],
    answer: 0,
    explanation: "La liberté d'expression renvoie au droit d'exprimer ses opinions dans le respect de la loi."
  },
  {
    id: 154,
    theme: "valeurs",
    question: "Quel principe républicain correspond à la définition suivante : le droit d'exprimer ses opinions dans le respect de la loi ?",
    options: ["la souveraineté nationale", "le suffrage universel", "la liberté d'expression", "la solidarité nationale"],
    answer: 2,
    explanation: "Cette définition correspond à la liberté d'expression."
  },
  {
    id: 155,
    theme: "valeurs",
    question: "Dans les valeurs républicaines, que recouvre le principe de l'égalité devant la loi ?",
    options: ["la participation collective à la protection des plus vulnérables", "le droit de vote reconnu à tous les citoyens majeurs selon les conditions légales", "l'application des mêmes règles de droit à toutes les personnes", "le pouvoir appartient au peuple qui l'exerce par ses représentants et le référendum"],
    answer: 2,
    explanation: "L'égalité devant la loi correspond à l'application des mêmes règles de droit à toutes les personnes."
  },
  {
    id: 156,
    theme: "valeurs",
    question: "Quel principe républicain correspond à la définition suivante : l'application des mêmes règles de droit à toutes les personnes ?",
    options: ["le pluralisme", "la mixité", "l'égalité devant la loi", "la non-discrimination"],
    answer: 2,
    explanation: "Cette définition correspond à l'égalité devant la loi."
  },
  {
    id: 157,
    theme: "valeurs",
    question: "Dans les valeurs républicaines, que recouvre le principe de la fraternité ?",
    options: ["la solidarité entre les membres de la communauté nationale", "toute personne est considérée innocente tant que sa culpabilité n'est pas établie", "le droit de vote reconnu à tous les citoyens majeurs selon les conditions légales", "la coexistence de différentes opinions politiques, philosophiques et sociales"],
    answer: 0,
    explanation: "La fraternité correspond à la solidarité entre les membres de la communauté nationale."
  },
  {
    id: 158,
    theme: "valeurs",
    question: "Quel principe républicain correspond à la définition suivante : la solidarité entre les membres de la communauté nationale ?",
    options: ["la fraternité", "la citoyenneté", "la tolérance", "l'intérêt général"],
    answer: 0,
    explanation: "Cette définition correspond à la fraternité."
  },
  {
    id: 159,
    theme: "valeurs",
    question: "Dans les valeurs républicaines, que recouvre le principe de la dignité de la personne humaine ?",
    options: ["la coexistence de différentes opinions politiques, philosophiques et sociales", "la participation conjointe des femmes et des hommes dans les espaces sociaux", "l'interdiction de traiter différemment une personne pour un motif prohibé par la loi", "le respect de chaque personne sans humiliation ni traitement dégradant"],
    answer: 3,
    explanation: "La dignité de la personne humaine renvoie au respect de chaque personne sans humiliation ni traitement dégradant."
  },
  {
    id: 160,
    theme: "valeurs",
    question: "Quel principe républicain correspond à la définition suivante : le respect de chaque personne sans humiliation ni traitement dégradant ?",
    options: ["la liberté de conscience", "la liberté de la presse", "la liberté d'association", "la dignité de la personne humaine"],
    answer: 3,
    explanation: "Cette définition correspond à la dignité de la personne humaine."
  },
  {
    id: 161,
    theme: "valeurs",
    question: "Dans les valeurs républicaines, que recouvre le principe de la solidarité nationale ?",
    options: ["la recherche d'un équilibre de représentation entre les femmes et les hommes", "l'acceptation des différences dans le respect des règles communes", "la participation collective à la protection des plus vulnérables", "la participation conjointe des femmes et des hommes dans les espaces sociaux"],
    answer: 2,
    explanation: "La solidarité nationale correspond à la participation collective à la protection des plus vulnérables."
  },
  {
    id: 162,
    theme: "valeurs",
    question: "Quel principe républicain correspond à la définition suivante : la participation collective à la protection des plus vulnérables ?",
    options: ["l'État de droit", "la protection de l'environnement", "la solidarité nationale", "la séparation des pouvoirs"],
    answer: 2,
    explanation: "Cette définition correspond à la solidarité nationale."
  },
  {
    id: 163,
    theme: "valeurs",
    question: "Dans les valeurs républicaines, que recouvre le principe de la souveraineté nationale ?",
    options: ["la priorité donnée au bien commun plutôt qu'aux intérêts particuliers", "le pouvoir appartient au peuple qui l'exerce par ses représentants et le référendum", "l'acceptation des différences dans le respect des règles communes", "la participation à la vie démocratique avec des droits et des devoirs"],
    answer: 1,
    explanation: "La souveraineté nationale signifie que le pouvoir appartient au peuple qui l'exerce par ses représentants et le référendum."
  },
  {
    id: 164,
    theme: "valeurs",
    question: "Quel principe républicain correspond à la définition suivante : le pouvoir appartient au peuple qui l'exerce par ses représentants et le référendum ?",
    options: ["l'égalité femmes-hommes", "la souveraineté nationale", "le droit à l'instruction", "la protection sociale"],
    answer: 1,
    explanation: "Cette définition correspond à la souveraineté nationale."
  },
  {
    id: 165,
    theme: "valeurs",
    question: "Dans les valeurs républicaines, que recouvre le principe de le suffrage universel ?",
    options: ["le droit de vote reconnu à tous les citoyens majeurs selon les conditions légales", "la priorité donnée au bien commun plutôt qu'aux intérêts particuliers", "la possibilité de pratiquer sa religion dans le respect de l'ordre public", "la possibilité de croire, de ne pas croire ou de changer de conviction"],
    answer: 0,
    explanation: "Le suffrage universel renvoie au droit de vote reconnu à tous les citoyens majeurs selon les conditions légales."
  },
  {
    id: 166,
    theme: "histoire",
    question: "Quel fait historique majeur est associé à l'année 1918 ?",
    options: ["La fin des combats de la Première Guerre mondiale (armistice)", "L'instauration de l'école primaire obligatoire (lois Ferry)", "La majorité civile à 18 ans en France", "La loi autorisant l'IVG (loi Veil)"],
    answer: 0,
    explanation: "En histoire de France, l'année 1918 est associée à la fin des combats de la Première Guerre mondiale (armistice)."
  },
  {
    id: 167,
    theme: "histoire",
    question: "En quelle année a eu lieu la proclamation de la Deuxième République ?",
    options: ["1916", "1944", "1804", "1848"],
    answer: 3,
    explanation: "La proclamation de la Deuxième République a eu lieu en 1848."
  },
  {
    id: 168,
    theme: "histoire",
    question: "Quel fait historique majeur est associé à l'année 1848 ?",
    options: ["La loi autorisant l'IVG (loi Veil)", "La chute du mur de Berlin", "La première élection du Parlement européen au suffrage universel", "La proclamation de la Deuxième République"],
    answer: 3,
    explanation: "En histoire de France, l'année 1848 est associée à la proclamation de la Deuxième République."
  },
  {
    id: 169,
    theme: "histoire",
    question: "En quelle année a eu lieu le sacre de Napoléon Ier ?",
    options: ["1804", "1957", "1944", "1916"],
    answer: 0,
    explanation: "Le sacre de Napoléon Ier a eu lieu en 1804."
  },
  {
    id: 170,
    theme: "histoire",
    question: "Quel fait historique majeur est associé à l'année 1804 ?",
    options: ["Le traité de Maastricht", "La mise en circulation de l'euro fiduciaire", "Le sacre de Napoléon Ier", "La chute du mur de Berlin"],
    answer: 2,
    explanation: "L'année 1804 est notamment associée au sacre de Napoléon Ier."
  },
  {
    id: 171,
    theme: "histoire",
    question: "En quelle année se situe la bataille de Verdun ?",
    options: ["1944", "1958", "1916", "1957"],
    answer: 2,
    explanation: "La bataille de Verdun se situe en 1916."
  },
  {
    id: 172,
    theme: "histoire",
    question: "Quel événement historique français est associé à l'année 1916 ?",
    options: ["La création de l'ONU", "La bataille de Verdun", "La mise en circulation de l'euro fiduciaire", "L'abolition de l'esclavage en France (Deuxième République)"],
    answer: 1,
    explanation: "L'année 1916 est notamment associée à la bataille de Verdun."
  },
  {
    id: 173,
    theme: "histoire",
    question: "En quelle année se situe la Libération de Paris ?",
    options: ["1944", "1962", "1958", "1974"],
    answer: 0,
    explanation: "La Libération de Paris se situe en 1944."
  },
  {
    id: 174,
    theme: "histoire",
    question: "Quel événement historique français est associé à l'année 1944 ?",
    options: ["La Libération de Paris", "La capitulation de l'Allemagne nazie en Europe", "La création de l'ONU", "L'armistice de 1940 entre la France et l'Allemagne"],
    answer: 0,
    explanation: "L'année 1944 est notamment associée à la Libération de Paris."
  },
  {
    id: 175,
    theme: "histoire",
    question: "En quelle année se situe la création de la Communauté économique européenne (traité de Rome) ?",
    options: ["1958", "1974", "1962", "1957"],
    answer: 3,
    explanation: "La création de la Communauté économique européenne (traité de Rome) se situe en 1957."
  },
  {
    id: 176,
    theme: "histoire",
    question: "Quel événement historique français est associé à l'année 1957 ?",
    options: ["L'armistice de 1940 entre la France et l'Allemagne", "La loi sur la parité en politique", "La création du Conseil constitutionnel", "La création de la Communauté économique européenne (traité de Rome)"],
    answer: 3,
    explanation: "L'année 1957 est notamment associée à la création de la Communauté économique européenne (traité de Rome)."
  },
  {
    id: 177,
    theme: "histoire",
    question: "En quelle année se situe la naissance de la Cinquième République (mise en oeuvre) ?",
    options: ["1882", "1975", "1958", "1974"],
    answer: 2,
    explanation: "La naissance de la Cinquième République (mise en oeuvre) se situe en 1958."
  },
  {
    id: 178,
    theme: "histoire",
    question: "Quel événement historique français est associé à l'année 1958 ?",
    options: ["L'inscription de la Charte de l'environnement dans le bloc de constitutionnalité", "La commémoration du bicentenaire de la Révolution française", "La naissance de la Cinquième République (mise en oeuvre)", "La loi sur la parité en politique"],
    answer: 2,
    explanation: "L'année 1958 est notamment associée à la naissance de la Cinquième République (mise en oeuvre)."
  },
  {
    id: 179,
    theme: "histoire",
    question: "En quelle année se situe l'élection du président de la République au suffrage universel direct (référendum) ?",
    options: ["1975", "1962", "1974", "1882"],
    answer: 1,
    explanation: "L'élection du président de la République au suffrage universel direct (référendum) se situe en 1962."
  },
  {
    id: 180,
    theme: "histoire",
    question: "Quel événement historique français est associé à l'année 1962 ?",
    options: ["Le Front populaire au pouvoir", "L'élection du président de la République au suffrage universel direct (référendum)", "La commémoration du bicentenaire de la Révolution française", "La création de la Sécurité sociale"],
    answer: 1,
    explanation: "L'année 1962 est notamment associée à l'élection du président de la République au suffrage universel direct (référendum)."
  },
  {
    id: 181,
    theme: "histoire",
    question: "En quelle année se situe la majorité civile à 18 ans en France ?",
    options: ["1974", "1882", "1975", "1979"],
    answer: 0,
    explanation: "La majorité civile à 18 ans en France se situe en 1974."
  },
  {
    id: 182,
    theme: "histoire",
    question: "Quel événement historique français est associé à l'année 1974 ?",
    options: ["La majorité civile à 18 ans en France", "Le Front populaire au pouvoir", "La Commune de Paris", "La loi ouvrant le mariage aux couples de même sexe"],
    answer: 0,
    explanation: "L'année 1974 est notamment associée à la majorité civile à 18 ans en France."
  },
  {
    id: 183,
    theme: "histoire",
    question: "En quelle année se situe l'instauration de l'école primaire obligatoire (lois Ferry) ?",
    options: ["1975", "1979", "1989", "1882"],
    answer: 3,
    explanation: "L'instauration de l'école primaire obligatoire (lois Ferry) se situe en 1882."
  },
  {
    id: 184,
    theme: "histoire",
    question: "Quel événement historique français est associé à l'année 1882 ?",
    options: ["La loi ouvrant le mariage aux couples de même sexe", "L'abolition de l'esclavage en France (Deuxième République)", "La création de l'ONU", "L'instauration de l'école primaire obligatoire (lois Ferry)"],
    answer: 3,
    explanation: "L'année 1882 est notamment associée à l'instauration de l'école primaire obligatoire (lois Ferry)."
  },
  {
    id: 185,
    theme: "institutions",
    question: "Quel acteur institutionnel correspond le mieux à cette mission: il conseille le Gouvernement et juge les litiges administratifs ?",
    options: ["Le Conseil d'État", "Le Sénat", "L'Assemblée nationale", "Le Parlement"],
    answer: 0,
    explanation: "Cette mission correspond principalement au Conseil d'État."
  },
  {
    id: 186,
    theme: "institutions",
    question: "Quel est le rôle principal de la Cour de cassation ?",
    options: ["il défend les intérêts de la société et conduit l'action publique", "elle protège les données personnelles", "il intervient pour protéger les mineurs en danger et juger les mineurs délinquants", "elle vérifie la bonne application du droit par les tribunaux judiciaires"],
    answer: 3,
    explanation: "Pour la Cour de cassation, la mission attendue est: elle vérifie la bonne application du droit par les tribunaux judiciaires."
  },
  {
    id: 187,
    theme: "institutions",
    question: "Quel acteur institutionnel correspond le mieux à cette mission: elle vérifie la bonne application du droit par les tribunaux judiciaires ?",
    options: ["La Cour des comptes", "Le Défenseur des droits", "Le Conseil supérieur de la magistrature", "La Cour de cassation"],
    answer: 3,
    explanation: "Cette mission correspond principalement à la Cour de cassation."
  },
  {
    id: 188,
    theme: "institutions",
    question: "Quel est le rôle principal de la Cour des comptes ?",
    options: ["il conseille les pouvoirs publics et représente la société civile organisée", "il participe à l'adoption des lois européennes", "elle contrôle l'emploi des fonds publics", "elle contrôle certaines déclarations d'intérêts des responsables publics"],
    answer: 2,
    explanation: "Pour la Cour des comptes, la mission attendue est: elle contrôle l'emploi des fonds publics."
  },
  {
    id: 189,
    theme: "institutions",
    question: "Quel acteur institutionnel correspond le mieux à cette mission: elle contrôle l'emploi des fonds publics ?",
    options: ["Le département", "La région", "La Cour des comptes", "La commune"],
    answer: 2,
    explanation: "Cette mission correspond principalement à la Cour des comptes."
  },
  {
    id: 190,
    theme: "institutions",
    question: "Quel est le rôle principal du Conseil supérieur de la magistrature ?",
    options: ["elle règle les conflits entre personnes et sanctionne les infractions", "il contribue à l'indépendance de l'autorité judiciaire", "elle propose les textes européens et veille à l'application des traités", "elle conduit la politique monétaire de la zone euro"],
    answer: 1,
    explanation: "Pour le Conseil supérieur de la magistrature, la mission attendue est: il contribue à l'indépendance de l'autorité judiciaire."
  },
  {
    id: 191,
    theme: "institutions",
    question: "Quel acteur institutionnel correspond le mieux à cette mission: il contribue à l'indépendance de l'autorité judiciaire ?",
    options: ["Le décret", "Le Conseil supérieur de la magistrature", "La Constitution", "La loi"],
    answer: 1,
    explanation: "Cette mission correspond principalement au Conseil supérieur de la magistrature."
  },
  {
    id: 192,
    theme: "institutions",
    question: "Quel est le rôle principal du Défenseur des droits ?",
    options: ["il veille au respect des droits et libertés par les administrations", "il dirige l'action du Gouvernement", "il détermine et conduit la politique de la Nation", "elle vote la loi et contrôle l'action du Gouvernement"],
    answer: 0,
    explanation: "Pour le Défenseur des droits, la mission attendue est: il veille au respect des droits et libertés par les administrations."
  },
  {
    id: 193,
    theme: "institutions",
    question: "Quel acteur institutionnel correspond le mieux à cette mission: il veille au respect des droits et libertés par les administrations ?",
    options: ["Le Défenseur des droits", "La police judiciaire", "Le procureur de la République", "Le juge des enfants"],
    answer: 0,
    explanation: "Cette mission correspond principalement au Défenseur des droits."
  },
  {
    id: 194,
    theme: "institutions",
    question: "Quel est le rôle principal du maire ?",
    options: ["il participe au vote de la loi et représente les collectivités territoriales", "il vote la loi et contrôle le Gouvernement", "il contrôle la conformité des lois à la Constitution", "il administre la commune et exerce des fonctions d'officier d'état civil"],
    answer: 3,
    explanation: "Pour le maire, la mission attendue est: il administre la commune et exerce des fonctions d'officier d'état civil."
  },
  {
    id: 195,
    theme: "institutions",
    question: "Quel acteur institutionnel correspond le mieux à cette mission: il administre la commune et exerce des fonctions d'officier d'état civil ?",
    options: ["Le Conseil économique, social et environnemental", "Le Parlement européen", "La Commission européenne", "Le maire"],
    answer: 3,
    explanation: "Cette mission correspond principalement au maire."
  },
  {
    id: 196,
    theme: "institutions",
    question: "Quel est le rôle principal du préfet ?",
    options: ["il représente l'État dans le département ou la région", "elle vérifie la bonne application du droit par les tribunaux judiciaires", "elle contrôle l'emploi des fonds publics", "il conseille le Gouvernement et juge les litiges administratifs"],
    answer: 0,
    explanation: "Pour le préfet, la mission attendue est: il représente l'État dans le département ou la région."
  },
  {
    id: 197,
    theme: "institutions",
    question: "Quel acteur institutionnel correspond le mieux à cette mission: il représente l'État dans le département ou la région ?",
    options: ["Le préfet", "Le Gouvernement", "L'Assemblée nationale", "Le Premier ministre"],
    answer: 0,
    explanation: "Cette mission correspond principalement au préfet."
  },
  {
    id: 198,
    theme: "institutions",
    question: "Quel est le rôle principal de la commune ?",
    options: ["il administre la commune et exerce des fonctions d'officier d'état civil", "elle gère les services de proximité et la vie locale", "il contribue à l'indépendance de l'autorité judiciaire", "il veille au respect des droits et libertés par les administrations"],
    answer: 1,
    explanation: "Pour la commune, la mission attendue est: elle gère les services de proximité et la vie locale."
  },
  {
    id: 199,
    theme: "institutions",
    question: "Quel acteur institutionnel correspond le mieux à cette mission: elle gère les services de proximité et la vie locale ?",
    options: ["Le Conseil constitutionnel", "La commune", "La Cour de cassation", "Le Conseil d'État"],
    answer: 1,
    explanation: "Cette mission correspond principalement à la commune."
  },
  {
    id: 200,
    theme: "institutions",
    question: "Quel est le rôle principal du département ?",
    options: ["il exerce des compétences de solidarité sociale et territoriale", "il représente l'État dans le département ou la région", "elle gère les services de proximité et la vie locale", "elle agit notamment sur les transports, l'économie et les lycées"],
    answer: 0,
    explanation: "Pour le département, la mission attendue est: il exerce des compétences de solidarité sociale et territoriale."
  },
  {
    id: 201,
    theme: "institutions",
    question: "Quel acteur institutionnel correspond le mieux à cette mission: il exerce des compétences de solidarité sociale et territoriale ?",
    options: ["Le maire", "Le Défenseur des droits", "Le département", "Le préfet"],
    answer: 2,
    explanation: "Cette mission correspond principalement au département."
  },
  {
    id: 202,
    theme: "institutions",
    question: "Quel est le rôle principal de la région ?",
    options: ["il réunit les ministres autour du président pour adopter des textes majeurs", "il permet aux citoyens de se prononcer directement sur un texte", "elle fixe l'organisation des pouvoirs publics et les principes fondamentaux", "elle agit notamment sur les transports, l'économie et les lycées"],
    answer: 3,
    explanation: "Pour la région, la mission attendue est: elle agit notamment sur les transports, l'économie et les lycées."
  },
  {
    id: 203,
    theme: "valeurs",
    question: "Quel principe républicain correspond à cette définition: le droit de vote reconnu à tous les citoyens majeurs selon les conditions légales ?",
    options: ["le suffrage universel", "la continuité du service public", "l'accessibilité du service public", "la responsabilité"],
    answer: 0,
    explanation: "Cette définition correspond au suffrage universel."
  },
  {
    id: 204,
    theme: "valeurs",
    question: "Que signifie principalement la présomption d'innocence dans le cadre républicain ?",
    options: ["la possibilité de croire, de ne pas croire ou de changer de conviction", "la possibilité de créer ou rejoindre un groupement légal", "la possibilité d'informer et d'être informé sans censure préalable", "toute personne est considérée innocente tant que sa culpabilité n'est pas établie"],
    answer: 3,
    explanation: "La présomption d'innocence renvoie à toute personne est considérée innocente tant que sa culpabilité n'est pas établie."
  },
  {
    id: 205,
    theme: "valeurs",
    question: "Quel principe républicain correspond à cette définition: toute personne est considérée innocente tant que sa culpabilité n'est pas établie ?",
    options: ["la laïcité", "la liberté d'expression", "l'égalité devant la loi", "la présomption d'innocence"],
    answer: 3,
    explanation: "Cette définition correspond à la présomption d'innocence."
  },
  {
    id: 206,
    theme: "valeurs",
    question: "Que signifie principalement le pluralisme dans le cadre républicain ?",
    options: ["l'obligation de se conformer aux règles adoptées démocratiquement", "la répartition du pouvoir entre exécutif, législatif et judiciaire", "la coexistence de différentes opinions politiques, philosophiques et sociales", "la possibilité d'informer et d'être informé sans censure préalable"],
    answer: 2,
    explanation: "Le pluralisme renvoie à la coexistence de différentes opinions politiques, philosophiques et sociales."
  },
  {
    id: 207,
    theme: "valeurs",
    question: "Quel principe républicain correspond à cette définition: la coexistence de différentes opinions politiques, philosophiques et sociales ?",
    options: ["le pluralisme", "la solidarité nationale", "la souveraineté nationale", "la dignité de la personne humaine"],
    answer: 0,
    explanation: "Cette définition correspond au pluralisme."
  },
  {
    id: 208,
    theme: "valeurs",
    question: "Que signifie principalement la non-discrimination dans le cadre républicain ?",
    options: ["la préservation des ressources et des écosystèmes pour les générations futures", "l'interdiction de traiter différemment une personne pour un motif prohibé par la loi", "la répartition du pouvoir entre exécutif, législatif et judiciaire", "la soumission de tous, y compris les pouvoirs publics, à la règle de droit"],
    answer: 1,
    explanation: "La non-discrimination renvoie à l'interdiction de traiter différemment une personne pour un motif prohibé par la loi."
  },
  {
    id: 209,
    theme: "valeurs",
    question: "Quel principe républicain correspond à cette définition: l'interdiction de traiter différemment une personne pour un motif prohibé par la loi ?",
    options: ["la présomption d'innocence", "la non-discrimination", "la mixité", "le pluralisme"],
    answer: 1,
    explanation: "Cette définition correspond à la non-discrimination."
  },
  {
    id: 210,
    theme: "valeurs",
    question: "Que signifie principalement la mixité dans le cadre républicain ?",
    options: ["la participation conjointe des femmes et des hommes dans les espaces sociaux", "la préservation des ressources et des écosystèmes pour les générations futures", "le droit de défendre collectivement ses intérêts professionnels", "l'accès de tous à l'éducation"],
    answer: 0,
    explanation: "La mixité renvoie à la participation conjointe des femmes et des hommes dans les espaces sociaux."
  },
  {
    id: 211,
    theme: "valeurs",
    question: "Quel principe républicain correspond à cette définition: la participation conjointe des femmes et des hommes dans les espaces sociaux ?",
    options: ["la citoyenneté", "la tolérance", "la mixité", "l'intérêt général"],
    answer: 2,
    explanation: "Cette définition correspond à la mixité."
  },
  {
    id: 212,
    theme: "valeurs",
    question: "Que signifie principalement la parité dans le cadre républicain ?",
    options: ["l'accès de tous à l'éducation", "l'organisation collective des aides face aux risques de la vie", "l'égalité des droits et des opportunités entre les sexes", "la recherche d'un équilibre de représentation entre les femmes et les hommes"],
    answer: 3,
    explanation: "La parité renvoie à la recherche d'un équilibre de représentation entre les femmes et les hommes."
  },
  {
    id: 213,
    theme: "valeurs",
    question: "Quel principe républicain correspond à cette définition: la recherche d'un équilibre de représentation entre les femmes et les hommes ?",
    options: ["la liberté d'association", "la liberté de la presse", "la liberté de conscience", "la parité"],
    answer: 3,
    explanation: "Cette définition correspond à la parité."
  },
  {
    id: 214,
    theme: "valeurs",
    question: "Que signifie principalement la tolérance dans le cadre républicain ?",
    options: ["l'acceptation des différences dans le respect des règles communes", "l'absence de traitement partisan ou religieux dans l'action publique", "le fonctionnement régulier des services essentiels à la population", "l'égalité des droits et des opportunités entre les sexes"],
    answer: 0,
    explanation: "La tolérance renvoie à l'acceptation des différences dans le respect des règles communes."
  },
  {
    id: 215,
    theme: "valeurs",
    question: "Quel principe républicain correspond à cette définition: l'acceptation des différences dans le respect des règles communes ?",
    options: ["la tolérance", "l'État de droit", "la protection de l'environnement", "la séparation des pouvoirs"],
    answer: 0,
    explanation: "Cette définition correspond à la tolérance."
  },
  {
    id: 216,
    theme: "valeurs",
    question: "Que signifie principalement la citoyenneté dans le cadre républicain ?",
    options: ["le fonctionnement régulier des services essentiels à la population", "la participation à la vie démocratique avec des droits et des devoirs", "l'obligation d'assumer les conséquences de ses actes", "la possibilité pour tous les usagers d'accéder aux services publics"],
    answer: 1,
    explanation: "La citoyenneté renvoie à la participation à la vie démocratique avec des droits et des devoirs."
  },
  {
    id: 217,
    theme: "valeurs",
    question: "Quel principe républicain correspond à cette définition: la participation à la vie démocratique avec des droits et des devoirs ?",
    options: ["le droit à l'instruction", "la citoyenneté", "l'égalité femmes-hommes", "la protection sociale"],
    answer: 1,
    explanation: "Cette définition correspond à la citoyenneté."
  },
  {
    id: 218,
    theme: "valeurs",
    question: "Que signifie principalement l'intérêt général dans le cadre républicain ?",
    options: ["le respect des autres et des règles de vie en société", "l'obligation d'assumer les conséquences de ses actes", "la priorité donnée au bien commun plutôt qu'aux intérêts particuliers", "l'organisation collective des aides face aux risques de la vie"],
    answer: 2,
    explanation: "L'intérêt général renvoie à la priorité donnée au bien commun plutôt qu'aux intérêts particuliers."
  },
  {
    id: 219,
    theme: "valeurs",
    question: "Quel principe républicain correspond à cette définition: la priorité donnée au bien commun plutôt qu'aux intérêts particuliers ?",
    options: ["l'accessibilité du service public", "la continuité du service public", "l'intérêt général", "la responsabilité"],
    answer: 2,
    explanation: "Cette définition correspond à l'intérêt général."
  },
  {
    id: 220,
    theme: "valeurs",
    question: "Que signifie principalement la liberté de culte dans le cadre républicain ?",
    options: ["le droit d'exprimer ses opinions dans le respect de la loi", "l'application des mêmes règles de droit à toutes les personnes", "la neutralité de l'État à l'égard des religions et la liberté de conscience", "la possibilité de pratiquer sa religion dans le respect de l'ordre public"],
    answer: 3,
    explanation: "La liberté de culte renvoie à la possibilité de pratiquer sa religion dans le respect de l'ordre public."
  },
  {
    id: 221,
    theme: "geographie",
    question: "Quelle chaîne de montagnes sépare principalement la France de l'Espagne ?",
    options: ["Les Alpes", "Le Jura", "Les Pyrénées", "Les Vosges"],
    answer: 2,
    explanation: "Les Pyrénées forment la frontière naturelle principale entre la France et l'Espagne."
  },
  {
    id: 222,
    theme: "geographie",
    question: "Quel fleuve traverse la ville de Paris ?",
    options: ["Le Rhône", "La Seine", "La Loire", "La Garonne"],
    answer: 1,
    explanation: "Paris est traversée par la Seine."
  },
  {
    id: 223,
    theme: "geographie",
    question: "Quelle mer borde la côte sud-est de la France métropolitaine ?",
    options: ["La mer Baltique", "La mer Méditerranée", "La mer Noire", "La mer Rouge"],
    answer: 1,
    explanation: "Le littoral sud-est français donne sur la Méditerranée."
  },
  {
    id: 224,
    theme: "geographie",
    question: "Quelle ville est la capitale administrative de la région Auvergne-Rhône-Alpes ?",
    options: ["Lyon", "Grenoble", "Clermont-Ferrand", "Saint-Étienne"],
    answer: 0,
    explanation: "Lyon est le chef-lieu de la région Auvergne-Rhône-Alpes."
  },
  {
    id: 225,
    theme: "geographie",
    question: "Quel est le plus long fleuve de France ?",
    options: ["La Seine", "Le Rhône", "La Loire", "La Meuse"],
    answer: 2,
    explanation: "La Loire est le plus long fleuve de France."
  },
  {
    id: 226,
    theme: "geographie",
    question: "Quel territoire est un département et une région d'outre-mer ?",
    options: ["Mayotte", "La Réunion", "La Martinique", "La Guadeloupe"],
    answer: 1,
    explanation: "La Réunion est à la fois département et région d'outre-mer."
  },
  {
    id: 227,
    theme: "geographie",
    question: "Quelle ville est souvent surnommée la cité phocéenne ?",
    options: ["Bordeaux", "Marseille", "Nice", "Toulouse"],
    answer: 1,
    explanation: "Marseille est surnommée la cité phocéenne."
  },
  {
    id: 228,
    theme: "geographie",
    question: "Quel massif culmine au mont Blanc ?",
    options: ["Le Massif central", "Le massif alpin", "Le massif vosgien", "Le Jura"],
    answer: 1,
    explanation: "Le mont Blanc appartient aux Alpes."
  },
  {
    id: 229,
    theme: "geographie",
    question: "Quelle région française est insulaire en Méditerranée ?",
    options: ["La Bretagne", "La Corse", "La Normandie", "Les Pays de la Loire"],
    answer: 1,
    explanation: "La Corse est une île en Méditerranée."
  },
  {
    id: 230,
    theme: "geographie",
    question: "Quel océan borde la façade ouest de la France métropolitaine ?",
    options: ["L'océan Atlantique", "L'océan Indien", "L'océan Arctique", "L'océan Pacifique"],
    answer: 0,
    explanation: "La façade ouest de la France métropolitaine donne sur l'Atlantique."
  },
  {
    id: 231,
    theme: "culture",
    question: "Quel écrivain est l'auteur de Notre-Dame de Paris ?",
    options: ["Victor Hugo", "Émile Zola", "Guy de Maupassant", "Marcel Proust"],
    answer: 0,
    explanation: "Victor Hugo a écrit Notre-Dame de Paris."
  },
  {
    id: 232,
    theme: "culture",
    question: "Quel musée parisien est consacré principalement à l'art du XIXe siècle ?",
    options: ["Le Louvre", "Le musée d'Orsay", "Le musée Rodin", "Le Centre Pompidou"],
    answer: 1,
    explanation: "Le musée d'Orsay présente notamment l'art du XIXe siècle."
  },
  {
    id: 233,
    theme: "culture",
    question: "Quelle institution culturelle organise chaque année le Festival de Cannes ?",
    options: ["Le CNC et la ville de Cannes", "Le ministère des Armées", "Le Conseil constitutionnel", "Le Sénat"],
    answer: 0,
    explanation: "Le Festival de Cannes est organisé localement avec les acteurs du cinéma, dont le CNC."
  },
  {
    id: 234,
    theme: "culture",
    question: "Quel compositeur français est l'auteur du Boléro ?",
    options: ["Claude Debussy", "Maurice Ravel", "Gabriel Fauré", "Camille Saint-Saëns"],
    answer: 1,
    explanation: "Le Boléro est une oeuvre de Maurice Ravel."
  },
  {
    id: 235,
    theme: "culture",
    question: "Quel dramaturge est associé à la Comédie-Française au XVIIe siècle ?",
    options: ["Molière", "Voltaire", "Diderot", "Beaumarchais"],
    answer: 0,
    explanation: "Molière est une figure majeure du théâtre classique français."
  },
  {
    id: 236,
    theme: "culture",
    question: "Quel monument parisien accueille la tombe de personnalités comme Victor Hugo ?",
    options: ["Le Panthéon", "Les Invalides", "La Conciergerie", "L'Opéra Garnier"],
    answer: 0,
    explanation: "Le Panthéon accueille de grandes figures de la Nation."
  },
  {
    id: 237,
    theme: "culture",
    question: "Quelle chanson est l'hymne national de la République française ?",
    options: ["Le Temps des cerises", "La Marseillaise", "Le Chant du départ", "Aux Champs-Élysées"],
    answer: 1,
    explanation: "La Marseillaise est l'hymne national français."
  },
  {
    id: 238,
    theme: "culture",
    question: "Quel auteur a écrit Le Petit Prince ?",
    options: ["Antoine de Saint-Exupéry", "Jules Verne", "Albert Camus", "André Gide"],
    answer: 0,
    explanation: "Le Petit Prince est l'oeuvre d'Antoine de Saint-Exupéry."
  },
  {
    id: 239,
    theme: "culture",
    question: "Quel festival est une référence majeure du théâtre en France ?",
    options: ["Le Festival d'Avignon", "Les Francofolies", "Solidays", "Le Printemps de Bourges"],
    answer: 0,
    explanation: "Le Festival d'Avignon est un événement phare du théâtre."
  },
  {
    id: 240,
    theme: "culture",
    question: "Quel musée parisien est célèbre pour sa pyramide de verre ?",
    options: ["Le Grand Palais", "Le Louvre", "Le Petit Palais", "Le musée Jacquemart-André"],
    answer: 1,
    explanation: "La pyramide de verre est à l'entrée du Louvre."
  },
  {
    id: 241,
    theme: "histoire",
    question: "En quelle année se situe la loi autorisant l'IVG (loi Veil) ?",
    options: ["1975", "1989", "1992", "1979"],
    answer: 0,
    explanation: "La loi autorisant l'IVG (loi Veil) se situe en 1975."
  },
  {
    id: 242,
    theme: "histoire",
    question: "Quel événement historique français est associé à l'année 1975 ?",
    options: ["La loi autorisant l'IVG (loi Veil)", "La Constitution de la Ve République", "Le droit de vote des femmes en France", "La Déclaration des droits de l'homme et du citoyen"],
    answer: 0,
    explanation: "L'année 1975 est notamment associée à la loi autorisant l'IVG (loi Veil)."
  },
  {
    id: 243,
    theme: "histoire",
    question: "En quelle année se situe la première élection du Parlement européen au suffrage universel ?",
    options: ["2002", "1979", "1989", "1992"],
    answer: 1,
    explanation: "La première élection du Parlement européen au suffrage universel se situe en 1979."
  },
  {
    id: 244,
    theme: "histoire",
    question: "Quel événement historique français est associé à l'année 1979 ?",
    options: ["Le droit de vote des femmes en France", "La première élection du Parlement européen au suffrage universel", "La loi de séparation des Églises et de l'État", "L'appel du 18 juin"],
    answer: 1,
    explanation: "L'année 1979 est notamment associée à la première élection du Parlement européen au suffrage universel."
  },
  {
    id: 245,
    theme: "histoire",
    question: "En quelle année se situe la chute du mur de Berlin ?",
    options: ["1989", "1992", "2002", "1848"],
    answer: 0,
    explanation: "La chute du mur de Berlin se situe en 1989."
  },
  {
    id: 246,
    theme: "histoire",
    question: "Quel événement historique français est associé à l'année 1989 ?",
    options: ["L'abolition de la peine de mort", "La loi de séparation des Églises et de l'État", "La chute du mur de Berlin", "La fin des combats de la Première Guerre mondiale (armistice)"],
    answer: 2,
    explanation: "L'année 1989 est notamment associée à la chute du mur de Berlin."
  },
  {
    id: 247,
    theme: "histoire",
    question: "En quelle année se situe le traité de Maastricht ?",
    options: ["2002", "1848", "1945", "1992"],
    answer: 3,
    explanation: "Le traité de Maastricht se situe en 1992."
  },
  {
    id: 248,
    theme: "histoire",
    question: "Quel événement historique français est associé à l'année 1992 ?",
    options: ["La proclamation de la Deuxième République", "Le sacre de Napoléon Ier", "La fin des combats de la Première Guerre mondiale (armistice)", "Le traité de Maastricht"],
    answer: 3,
    explanation: "L'année 1992 est notamment associée au traité de Maastricht."
  },
  {
    id: 249,
    theme: "histoire",
    question: "En quelle année se situe la mise en circulation de l'euro fiduciaire ?",
    options: ["2002", "1945", "1945", "1848"],
    answer: 0,
    explanation: "La mise en circulation de l'euro fiduciaire se situe en 2002."
  },
  {
    id: 250,
    theme: "histoire",
    question: "Quel événement historique français est associé à l'année 2002 ?",
    options: ["La mise en circulation de l'euro fiduciaire", "La Libération de Paris", "La bataille de Verdun", "Le sacre de Napoléon Ier"],
    answer: 0,
    explanation: "L'année 2002 est notamment associée à la mise en circulation de l'euro fiduciaire."
  },
  {
    id: 251,
    theme: "histoire",
    question: "En quelle année se situe l'abolition de l'esclavage en France (Deuxième République) ?",
    options: ["1945", "1848", "1958", "1940"],
    answer: 1,
    explanation: "L'abolition de l'esclavage en France (Deuxième République) se situe en 1848."
  },
  {
    id: 252,
    theme: "histoire",
    question: "Quel événement historique français est associé à l'année 1848 ?",
    options: ["La Libération de Paris", "L'abolition de l'esclavage en France (Deuxième République)", "La naissance de la Cinquième République (mise en oeuvre)", "La création de la Communauté économique européenne (traité de Rome)"],
    answer: 1,
    explanation: "L'année 1848 est notamment associée à l'abolition de l'esclavage en France (Deuxième République)."
  },
  {
    id: 253,
    theme: "histoire",
    question: "En quelle année se situe la création de l'ONU ?",
    options: ["1958", "1940", "1945", "2000"],
    answer: 2,
    explanation: "La création de l'ONU se situe en 1945."
  },
  {
    id: 254,
    theme: "histoire",
    question: "Quel événement historique français est associé à l'année 1945 ?",
    options: ["L'élection du président de la République au suffrage universel direct (référendum)", "La naissance de la Cinquième République (mise en oeuvre)", "La création de l'ONU", "La majorité civile à 18 ans en France"],
    answer: 2,
    explanation: "L'année 1945 est notamment associée à la création de l'ONU."
  },
  {
    id: 255,
    theme: "histoire",
    question: "En quelle année se situe la capitulation de l'Allemagne nazie en Europe ?",
    options: ["2000", "2005", "1958", "1945"],
    answer: 3,
    explanation: "La capitulation de l'Allemagne nazie en Europe se situe en 1945."
  },
  {
    id: 256,
    theme: "institutions",
    question: "Quel acteur institutionnel correspond le mieux à cette mission: elle agit notamment sur les transports, l'économie et les lycées ?",
    options: ["Le référendum", "La Constitution", "Le Conseil des ministres", "La région"],
    answer: 3,
    explanation: "Cette mission correspond principalement à la région."
  },
  {
    id: 257,
    theme: "institutions",
    question: "Quel est le rôle principal du Conseil des ministres ?",
    options: ["il réunit les ministres autour du président pour adopter des textes majeurs", "il est un acte réglementaire pris par l'exécutif", "elle tranche les litiges impliquant l'administration", "elle est votée par le Parlement"],
    answer: 0,
    explanation: "Pour le Conseil des ministres, la mission attendue est: il réunit les ministres autour du président pour adopter des textes majeurs."
  },
  {
    id: 258,
    theme: "institutions",
    question: "Quel acteur institutionnel correspond le mieux à cette mission: il réunit les ministres autour du président pour adopter des textes majeurs ?",
    options: ["Le Conseil des ministres", "La justice judiciaire", "La police judiciaire", "La justice administrative"],
    answer: 0,
    explanation: "Cette mission correspond principalement au Conseil des ministres."
  },
  {
    id: 259,
    theme: "institutions",
    question: "Quel est le rôle principal du référendum ?",
    options: ["elle règle les conflits entre personnes et sanctionne les infractions", "il permet aux citoyens de se prononcer directement sur un texte", "il défend les intérêts de la société et conduit l'action publique", "elle recherche les infractions et leurs auteurs sous l'autorité de la justice"],
    answer: 1,
    explanation: "Pour le référendum, la mission attendue est: il permet aux citoyens de se prononcer directement sur un texte."
  },
  {
    id: 260,
    theme: "institutions",
    question: "Quel acteur institutionnel correspond le mieux à cette mission: il permet aux citoyens de se prononcer directement sur un texte ?",
    options: ["La Commission nationale de l'informatique et des libertés (CNIL)", "Le référendum", "Le Conseil économique, social et environnemental", "La Haute Autorité pour la transparence de la vie publique"],
    answer: 1,
    explanation: "Cette mission correspond principalement au référendum."
  },
  {
    id: 261,
    theme: "institutions",
    question: "Quel est le rôle principal de la Constitution ?",
    options: ["elle protège les données personnelles", "il intervient pour protéger les mineurs en danger et juger les mineurs délinquants", "elle fixe l'organisation des pouvoirs publics et les principes fondamentaux", "elle contrôle certaines déclarations d'intérêts des responsables publics"],
    answer: 2,
    explanation: "Pour la Constitution, la mission attendue est: elle fixe l'organisation des pouvoirs publics et les principes fondamentaux."
  },
  {
    id: 262,
    theme: "institutions",
    question: "Quel acteur institutionnel correspond le mieux à cette mission: elle fixe l'organisation des pouvoirs publics et les principes fondamentaux ?",
    options: ["Le président de la République", "La Banque centrale européenne", "La Constitution", "Le Premier ministre"],
    answer: 2,
    explanation: "Cette mission correspond principalement à la Constitution."
  },
  {
    id: 263,
    theme: "institutions",
    question: "Quel est le rôle principal de la loi ?",
    options: ["il participe à l'adoption des lois européennes", "elle propose les textes européens et veille à l'application des traités", "il conseille les pouvoirs publics et représente la société civile organisée", "elle est votée par le Parlement"],
    answer: 3,
    explanation: "Pour la loi, la mission attendue est: elle est votée par le Parlement."
  },
  {
    id: 264,
    theme: "institutions",
    question: "Quel acteur institutionnel correspond le mieux à cette mission: elle est votée par le Parlement ?",
    options: ["Le Parlement", "Le Conseil constitutionnel", "Le Sénat", "La loi"],
    answer: 3,
    explanation: "Cette mission correspond principalement à la loi."
  },
  {
    id: 265,
    theme: "institutions",
    question: "Quel est le rôle principal du décret ?",
    options: ["il est un acte réglementaire pris par l'exécutif", "il dirige l'action du Gouvernement", "il garantit le fonctionnement régulier des pouvoirs publics et représente la Nation", "elle conduit la politique monétaire de la zone euro"],
    answer: 0,
    explanation: "Pour le décret, la mission attendue est: il est un acte réglementaire pris par l'exécutif."
  },
  {
    id: 266,
    theme: "institutions",
    question: "Quel acteur institutionnel correspond le mieux à cette mission: il est un acte réglementaire pris par l'exécutif ?",
    options: ["Le décret", "Le Défenseur des droits", "Le Conseil supérieur de la magistrature", "La Cour des comptes"],
    answer: 0,
    explanation: "Cette mission correspond principalement au décret."
  },
  {
    id: 267,
    theme: "institutions",
    question: "Quel est le rôle principal de la justice administrative ?",
    options: ["il détermine et conduit la politique de la Nation", "il participe au vote de la loi et représente les collectivités territoriales", "elle tranche les litiges impliquant l'administration", "elle vote la loi et contrôle l'action du Gouvernement"],
    answer: 2,
    explanation: "Pour la justice administrative, la mission attendue est: elle tranche les litiges impliquant l'administration."
  },
  {
    id: 268,
    theme: "institutions",
    question: "Quel acteur institutionnel correspond le mieux à cette mission: elle tranche les litiges impliquant l'administration ?",
    options: ["La commune", "La région", "La justice administrative", "Le département"],
    answer: 2,
    explanation: "Cette mission correspond principalement à la justice administrative."
  },
  {
    id: 269,
    theme: "institutions",
    question: "Quel est le rôle principal de la justice judiciaire ?",
    options: ["elle règle les conflits entre personnes et sanctionne les infractions", "il contrôle la conformité des lois à la Constitution", "il vote la loi et contrôle le Gouvernement", "il conseille le Gouvernement et juge les litiges administratifs"],
    answer: 0,
    explanation: "Pour la justice judiciaire, la mission attendue est: elle règle les conflits entre personnes et sanctionne les infractions."
  },
  {
    id: 270,
    theme: "institutions",
    question: "Quel acteur institutionnel correspond le mieux à cette mission: elle règle les conflits entre personnes et sanctionne les infractions ?",
    options: ["La justice judiciaire", "La loi", "La Constitution", "Le décret"],
    answer: 0,
    explanation: "Cette mission correspond principalement à la justice judiciaire."
  },
  {
    id: 271,
    theme: "valeurs",
    question: "Quel principe républicain correspond à cette définition: la possibilité de pratiquer sa religion dans le respect de l'ordre public ?",
    options: ["la liberté d'expression", "l'égalité devant la loi", "la laïcité", "la liberté de culte"],
    answer: 3,
    explanation: "Cette définition correspond à la liberté de culte."
  },
  {
    id: 272,
    theme: "valeurs",
    question: "Que signifie principalement la liberté de conscience dans le cadre républicain ?",
    options: ["la possibilité de croire, de ne pas croire ou de changer de conviction", "le respect de chaque personne sans humiliation ni traitement dégradant", "la solidarité entre les membres de la communauté nationale", "l'application des mêmes règles de droit à toutes les personnes"],
    answer: 0,
    explanation: "La liberté de conscience renvoie à la possibilité de croire, de ne pas croire ou de changer de conviction."
  },
  {
    id: 273,
    theme: "valeurs",
    question: "Quel principe républicain correspond à cette définition: la possibilité de croire, de ne pas croire ou de changer de conviction ?",
    options: ["la liberté de conscience", "la souveraineté nationale", "la solidarité nationale", "la dignité de la personne humaine"],
    answer: 0,
    explanation: "Cette définition correspond à la liberté de conscience."
  },
  {
    id: 274,
    theme: "valeurs",
    question: "Que signifie principalement la liberté d'association dans le cadre républicain ?",
    options: ["le respect de chaque personne sans humiliation ni traitement dégradant", "le pouvoir appartient au peuple qui l'exerce par ses représentants et le référendum", "la possibilité de créer ou rejoindre un groupement légal", "la participation collective à la protection des plus vulnérables"],
    answer: 2,
    explanation: "La liberté d'association renvoie à la possibilité de créer ou rejoindre un groupement légal."
  },
  {
    id: 275,
    theme: "valeurs",
    question: "Quel principe républicain correspond à cette définition: la possibilité de créer ou rejoindre un groupement légal ?",
    options: ["la présomption d'innocence", "la non-discrimination", "la liberté d'association", "le pluralisme"],
    answer: 2,
    explanation: "Cette définition correspond à la liberté d'association."
  },
  {
    id: 276,
    theme: "valeurs",
    question: "Que signifie principalement la liberté de la presse dans le cadre républicain ?",
    options: ["la possibilité d'informer et d'être informé sans censure préalable", "le droit de vote reconnu à tous les citoyens majeurs selon les conditions légales", "le pouvoir appartient au peuple qui l'exerce par ses représentants et le référendum", "toute personne est considérée innocente tant que sa culpabilité n'est pas établie"],
    answer: 0,
    explanation: "La liberté de la presse renvoie à la possibilité d'informer et d'être informé sans censure préalable."
  },
  {
    id: 277,
    theme: "valeurs",
    question: "Quel principe républicain correspond à cette définition: la possibilité d'informer et d'être informé sans censure préalable ?",
    options: ["la liberté de la presse", "la tolérance", "la parité", "la citoyenneté"],
    answer: 0,
    explanation: "Cette définition correspond à la liberté de la presse."
  },
  {
    id: 278,
    theme: "valeurs",
    question: "Que signifie principalement le respect de la loi dans le cadre républicain ?",
    options: ["toute personne est considérée innocente tant que sa culpabilité n'est pas établie", "l'interdiction de traiter différemment une personne pour un motif prohibé par la loi", "la coexistence de différentes opinions politiques, philosophiques et sociales", "l'obligation de se conformer aux règles adoptées démocratiquement"],
    answer: 3,
    explanation: "Le respect de la loi renvoie à l'obligation de se conformer aux règles adoptées démocratiquement."
  },
  {
    id: 279,
    theme: "valeurs",
    question: "Quel principe républicain correspond à cette définition: l'obligation de se conformer aux règles adoptées démocratiquement ?",
    options: ["la liberté de culte", "la liberté d'association", "la liberté de conscience", "le respect de la loi"],
    answer: 3,
    explanation: "Cette définition correspond au respect de la loi."
  },
  {
    id: 280,
    theme: "valeurs",
    question: "Que signifie principalement la séparation des pouvoirs dans le cadre républicain ?",
    options: ["la répartition du pouvoir entre exécutif, législatif et judiciaire", "la recherche d'un équilibre de représentation entre les femmes et les hommes", "la participation conjointe des femmes et des hommes dans les espaces sociaux", "l'interdiction de traiter différemment une personne pour un motif prohibé par la loi"],
    answer: 0,
    explanation: "La séparation des pouvoirs renvoie à la répartition du pouvoir entre exécutif, législatif et judiciaire."
  },
  {
    id: 281,
    theme: "valeurs",
    question: "Quel principe républicain correspond à cette définition: la répartition du pouvoir entre exécutif, législatif et judiciaire ?",
    options: ["l'État de droit", "la protection de l'environnement", "la séparation des pouvoirs", "le respect de la loi"],
    answer: 2,
    explanation: "Cette définition correspond à la séparation des pouvoirs."
  },
  {
    id: 282,
    theme: "valeurs",
    question: "Que signifie principalement l'État de droit dans le cadre républicain ?",
    options: ["la recherche d'un équilibre de représentation entre les femmes et les hommes", "la participation à la vie démocratique avec des droits et des devoirs", "la soumission de tous, y compris les pouvoirs publics, à la règle de droit", "l'acceptation des différences dans le respect des règles communes"],
    answer: 2,
    explanation: "L'État de droit renvoie à la soumission de tous, y compris les pouvoirs publics, à la règle de droit."
  },
  {
    id: 283,
    theme: "valeurs",
    question: "Quel principe républicain correspond à cette définition: la soumission de tous, y compris les pouvoirs publics, à la règle de droit ?",
    options: ["l'égalité femmes-hommes", "l'État de droit", "le droit à l'instruction", "la protection sociale"],
    answer: 1,
    explanation: "Cette définition correspond à l'État de droit."
  },
  {
    id: 284,
    theme: "valeurs",
    question: "Que signifie principalement la protection de l'environnement dans le cadre républicain ?",
    options: ["la préservation des ressources et des écosystèmes pour les générations futures", "la priorité donnée au bien commun plutôt qu'aux intérêts particuliers", "la participation à la vie démocratique avec des droits et des devoirs", "la possibilité de pratiquer sa religion dans le respect de l'ordre public"],
    answer: 0,
    explanation: "La protection de l'environnement renvoie à la préservation des ressources et des écosystèmes pour les générations futures."
  },
  {
    id: 285,
    theme: "valeurs",
    question: "Quel principe républicain correspond à cette définition: la préservation des ressources et des écosystèmes pour les générations futures ?",
    options: ["la protection de l'environnement", "la continuité du service public", "l'accessibilité du service public", "la responsabilité"],
    answer: 0,
    explanation: "Cette définition correspond à la protection de l'environnement."
  },
  {
    id: 286,
    theme: "histoire",
    question: "Quel événement historique français est associé à l'année 1945 ?",
    options: ["L'instauration de l'école primaire obligatoire (lois Ferry)", "La loi autorisant l'IVG (loi Veil)", "La majorité civile à 18 ans en France", "La capitulation de l'Allemagne nazie en Europe"],
    answer: 3,
    explanation: "L'année 1945 est notamment associée à la capitulation de l'Allemagne nazie en Europe."
  },
  {
    id: 287,
    theme: "histoire",
    question: "En quelle année se situe l'armistice de 1940 entre la France et l'Allemagne ?",
    options: ["1940", "1989", "2005", "2000"],
    answer: 0,
    explanation: "L'armistice de 1940 entre la France et l'Allemagne se situe en 1940."
  },
  {
    id: 288,
    theme: "histoire",
    question: "Quel événement historique français est associé à l'année 1940 ?",
    options: ["L'armistice de 1940 entre la France et l'Allemagne", "La chute du mur de Berlin", "La première élection du Parlement européen au suffrage universel", "La loi autorisant l'IVG (loi Veil)"],
    answer: 0,
    explanation: "L'année 1940 est notamment associée à l'armistice de 1940 entre la France et l'Allemagne."
  },
  {
    id: 289,
    theme: "histoire",
    question: "En quelle année se situe la création du Conseil constitutionnel ?",
    options: ["1989", "1936", "1958", "1945"],
    answer: 2,
    explanation: "La création du Conseil constitutionnel se situe en 1958."
  },
  {
    id: 290,
    theme: "histoire",
    question: "Quel événement historique français est associé à l'année 1958 ?",
    options: ["La chute du mur de Berlin", "La mise en circulation de l'euro fiduciaire", "La création du Conseil constitutionnel", "Le traité de Maastricht"],
    answer: 2,
    explanation: "L'année 1958 est notamment associée à la création du Conseil constitutionnel."
  },
  {
    id: 291,
    theme: "histoire",
    question: "En quelle année se situe la loi sur la parité en politique ?",
    options: ["2000", "1989", "2005", "1945"],
    answer: 0,
    explanation: "La loi sur la parité en politique se situe en 2000."
  },
  {
    id: 292,
    theme: "histoire",
    question: "Quel événement historique français est associé à l'année 2000 ?",
    options: ["La loi sur la parité en politique", "L'abolition de l'esclavage en France (Deuxième République)", "La mise en circulation de l'euro fiduciaire", "La création de l'ONU"],
    answer: 0,
    explanation: "L'année 2000 est notamment associée à la loi sur la parité en politique."
  },
  {
    id: 293,
    theme: "histoire",
    question: "En quelle année se situe l'inscription de la Charte de l'environnement dans le bloc de constitutionnalité ?",
    options: ["1989", "1936", "1945", "2005"],
    answer: 3,
    explanation: "L'inscription de la Charte de l'environnement dans le bloc de constitutionnalité se situe en 2005."
  },
  {
    id: 294,
    theme: "histoire",
    question: "Quel événement historique français est associé à l'année 2005 ?",
    options: ["La création de l'ONU", "L'armistice de 1940 entre la France et l'Allemagne", "La capitulation de l'Allemagne nazie en Europe", "L'inscription de la Charte de l'environnement dans le bloc de constitutionnalité"],
    answer: 3,
    explanation: "L'année 2005 est notamment associée à l'inscription de la Charte de l'environnement dans le bloc de constitutionnalité."
  },
  {
    id: 295,
    theme: "histoire",
    question: "En quelle année se situe la commémoration du bicentenaire de la Révolution française ?",
    options: ["1871", "2013", "1989", "1936"],
    answer: 2,
    explanation: "La commémoration du bicentenaire de la Révolution française se situe en 1989."
  },
  {
    id: 296,
    theme: "histoire",
    question: "Quel événement historique français est associé à l'année 1989 ?",
    options: ["La création du Conseil constitutionnel", "La loi sur la parité en politique", "La commémoration du bicentenaire de la Révolution française", "L'armistice de 1940 entre la France et l'Allemagne"],
    answer: 2,
    explanation: "L'année 1989 est notamment associée à la commémoration du bicentenaire de la Révolution française."
  },
  {
    id: 297,
    theme: "histoire",
    question: "En quelle année se situe la création de la Sécurité sociale ?",
    options: ["2013", "1905", "1945", "1940"],
    answer: 2,
    explanation: "La création de la Sécurité sociale se situe en 1945."
  },
  {
    id: 298,
    theme: "histoire",
    question: "Quel événement historique français est associé à l'année 1945 ?",
    options: ["La commémoration du bicentenaire de la Révolution française", "La création de la Sécurité sociale", "La loi sur la parité en politique", "L'inscription de la Charte de l'environnement dans le bloc de constitutionnalité"],
    answer: 1,
    explanation: "L'année 1945 est notamment associée à la création de la Sécurité sociale."
  },
  {
    id: 299,
    theme: "histoire",
    question: "En quelle année se situe le Front populaire au pouvoir ?",
    options: ["1936", "2013", "1871", "1981"],
    answer: 0,
    explanation: "Le Front populaire au pouvoir se situe en 1936."
  },
  {
    id: 300,
    theme: "histoire",
    question: "Quel événement historique français est associé à l'année 1936 ?",
    options: ["Le Front populaire au pouvoir", "La commémoration du bicentenaire de la Révolution française", "La création de la Sécurité sociale", "La Commune de Paris"],
    answer: 0,
    explanation: "L'année 1936 est notamment associée au Front populaire au pouvoir."
  },
  {
    id: 301,
    theme: "histoire",
    question: "En quelle année se situe la Commune de Paris ?",
    options: ["2013", "1918", "1981", "1871"],
    answer: 3,
    explanation: "La Commune de Paris se situe en 1871."
  },
  {
    id: 302,
    theme: "histoire",
    question: "Quel événement historique français est associé à l'année 1871 ?",
    options: ["Le Front populaire au pouvoir", "La loi ouvrant le mariage aux couples de même sexe", "La loi de séparation des Églises et de l'État", "La Commune de Paris"],
    answer: 3,
    explanation: "L'année 1871 est notamment associée à la Commune de Paris."
  },
  {
    id: 303,
    theme: "histoire",
    question: "En quelle année se situe la loi ouvrant le mariage aux couples de même sexe ?",
    options: ["1789", "1958", "2013", "1789"],
    answer: 2,
    explanation: "La loi ouvrant le mariage aux couples de même sexe se situe en 2013."
  },
  {
    id: 304,
    theme: "histoire",
    question: "Quel événement historique français est associé à l'année 2013 ?",
    options: ["La Déclaration des droits de l'homme et du citoyen", "La Constitution de la Ve République", "La loi ouvrant le mariage aux couples de même sexe", "La prise de la Bastille"],
    answer: 2,
    explanation: "L'année 2013 est notamment associée à la loi ouvrant le mariage aux couples de même sexe."
  },
  {
    id: 305,
    theme: "institutions",
    question: "Quel est le rôle principal de la police judiciaire ?",
    options: ["elle vérifie la bonne application du droit par les tribunaux judiciaires", "il contribue à l'indépendance de l'autorité judiciaire", "elle contrôle l'emploi des fonds publics", "elle recherche les infractions et leurs auteurs sous l'autorité de la justice"],
    answer: 3,
    explanation: "Pour la police judiciaire, la mission attendue est: elle recherche les infractions et leurs auteurs sous l'autorité de la justice."
  },
  {
    id: 306,
    theme: "institutions",
    question: "Quel acteur institutionnel correspond le mieux à cette mission: elle recherche les infractions et leurs auteurs sous l'autorité de la justice ?",
    options: ["Le procureur de la République", "La Commission nationale de l'informatique et des libertés (CNIL)", "Le juge des enfants", "La police judiciaire"],
    answer: 3,
    explanation: "Cette mission correspond principalement à la police judiciaire."
  },
  {
    id: 307,
    theme: "institutions",
    question: "Quel est le rôle principal du procureur de la République ?",
    options: ["il défend les intérêts de la société et conduit l'action publique", "il représente l'État dans le département ou la région", "il administre la commune et exerce des fonctions d'officier d'état civil", "il veille au respect des droits et libertés par les administrations"],
    answer: 0,
    explanation: "Pour le procureur de la République, la mission attendue est: il défend les intérêts de la société et conduit l'action publique."
  },
  {
    id: 308,
    theme: "institutions",
    question: "Quel acteur institutionnel correspond le mieux à cette mission: il défend les intérêts de la société et conduit l'action publique ?",
    options: ["La Commission européenne", "La Banque centrale européenne", "Le procureur de la République", "Le Parlement européen"],
    answer: 2,
    explanation: "Cette mission correspond principalement au procureur de la République."
  },
  {
    id: 309,
    theme: "institutions",
    question: "Quel est le rôle principal du juge des enfants ?",
    options: ["elle gère les services de proximité et la vie locale", "elle agit notamment sur les transports, l'économie et les lycées", "il intervient pour protéger les mineurs en danger et juger les mineurs délinquants", "il exerce des compétences de solidarité sociale et territoriale"],
    answer: 2,
    explanation: "Pour le juge des enfants, la mission attendue est: il intervient pour protéger les mineurs en danger et juger les mineurs délinquants."
  },
  {
    id: 310,
    theme: "institutions",
    question: "Quel acteur institutionnel correspond le mieux à cette mission: il intervient pour protéger les mineurs en danger et juger les mineurs délinquants ?",
    options: ["Le Sénat", "Le juge des enfants", "Le Gouvernement", "L'Assemblée nationale"],
    answer: 1,
    explanation: "Cette mission correspond principalement au juge des enfants."
  },
  {
    id: 311,
    theme: "institutions",
    question: "Quel est le rôle principal de la Commission nationale de l'informatique et des libertés (CNIL) ?",
    options: ["elle protège les données personnelles", "il permet aux citoyens de se prononcer directement sur un texte", "il réunit les ministres autour du président pour adopter des textes majeurs", "elle fixe l'organisation des pouvoirs publics et les principes fondamentaux"],
    answer: 0,
    explanation: "Pour la Commission nationale de l'informatique et des libertés (CNIL), la mission attendue est: elle protège les données personnelles."
  },
  {
    id: 312,
    theme: "institutions",
    question: "Quel acteur institutionnel correspond le mieux à cette mission: elle protège les données personnelles ?",
    options: ["La Commission nationale de l'informatique et des libertés (CNIL)", "Le Conseil d'État", "La Cour de cassation", "La Cour des comptes"],
    answer: 0,
    explanation: "Cette mission correspond principalement à la Commission nationale de l'informatique et des libertés (CNIL)."
  },
  {
    id: 313,
    theme: "institutions",
    question: "Quel est le rôle principal de la Haute Autorité pour la transparence de la vie publique ?",
    options: ["elle est votée par le Parlement", "elle tranche les litiges impliquant l'administration", "il est un acte réglementaire pris par l'exécutif", "elle contrôle certaines déclarations d'intérêts des responsables publics"],
    answer: 3,
    explanation: "Pour la Haute Autorité pour la transparence de la vie publique, la mission attendue est: elle contrôle certaines déclarations d'intérêts des responsables publics."
  },
  {
    id: 314,
    theme: "institutions",
    question: "Quel acteur institutionnel correspond le mieux à cette mission: elle contrôle certaines déclarations d'intérêts des responsables publics ?",
    options: ["Le maire", "La commune", "Le préfet", "La Haute Autorité pour la transparence de la vie publique"],
    answer: 3,
    explanation: "Cette mission correspond principalement à la Haute Autorité pour la transparence de la vie publique."
  },
  {
    id: 315,
    theme: "institutions",
    question: "Quel est le rôle principal du Conseil économique, social et environnemental ?",
    options: ["elle recherche les infractions et leurs auteurs sous l'autorité de la justice", "il défend les intérêts de la société et conduit l'action publique", "il conseille les pouvoirs publics et représente la société civile organisée", "elle règle les conflits entre personnes et sanctionne les infractions"],
    answer: 2,
    explanation: "Pour le Conseil économique, social et environnemental, la mission attendue est: il conseille les pouvoirs publics et représente la société civile organisée."
  },
  {
    id: 316,
    theme: "institutions",
    question: "Quel acteur institutionnel correspond le mieux à cette mission: il conseille les pouvoirs publics et représente la société civile organisée ?",
    options: ["Le référendum", "La Constitution", "Le Conseil économique, social et environnemental", "Le Conseil des ministres"],
    answer: 2,
    explanation: "Cette mission correspond principalement au Conseil économique, social et environnemental."
  },
  {
    id: 317,
    theme: "institutions",
    question: "Quel est le rôle principal du Parlement européen ?",
    options: ["elle contrôle certaines déclarations d'intérêts des responsables publics", "il participe à l'adoption des lois européennes", "il intervient pour protéger les mineurs en danger et juger les mineurs délinquants", "elle protège les données personnelles"],
    answer: 1,
    explanation: "Pour le Parlement européen, la mission attendue est: il participe à l'adoption des lois européennes."
  },
  {
    id: 318,
    theme: "institutions",
    question: "Quel acteur institutionnel correspond le mieux à cette mission: il participe à l'adoption des lois européennes ?",
    options: ["La police judiciaire", "Le Parlement européen", "La justice administrative", "La justice judiciaire"],
    answer: 1,
    explanation: "Cette mission correspond principalement au Parlement européen."
  },
  {
    id: 319,
    theme: "institutions",
    question: "Quel est le rôle principal de la Commission européenne ?",
    options: ["elle propose les textes européens et veille à l'application des traités", "il conseille les pouvoirs publics et représente la société civile organisée", "il participe à l'adoption des lois européennes", "elle conduit la politique monétaire de la zone euro"],
    answer: 0,
    explanation: "Pour la Commission européenne, la mission attendue est: elle propose les textes européens et veille à l'application des traités."
  },
  {
    id: 320,
    theme: "institutions",
    question: "Quel acteur institutionnel correspond le mieux à cette mission: elle propose les textes européens et veille à l'application des traités ?",
    options: ["La Commission européenne", "La Commission nationale de l'informatique et des libertés (CNIL)", "La Haute Autorité pour la transparence de la vie publique", "Le Conseil économique, social et environnemental"],
    answer: 0,
    explanation: "Cette mission correspond principalement à la Commission européenne."
  },
  {
    id: 321,
    theme: "institutions",
    question: "Quel est le rôle principal de la Banque centrale européenne ?",
    options: ["il garantit le fonctionnement régulier des pouvoirs publics et représente la Nation", "il dirige l'action du Gouvernement", "il détermine et conduit la politique de la Nation", "elle conduit la politique monétaire de la zone euro"],
    answer: 3,
    explanation: "Pour la Banque centrale européenne, la mission attendue est: elle conduit la politique monétaire de la zone euro."
  },
  {
    id: 322,
    theme: "institutions",
    question: "Quel acteur institutionnel correspond le mieux à cette mission: elle conduit la politique monétaire de la zone euro ?",
    options: ["Le président de la République", "Le Premier ministre", "Le Gouvernement", "La Banque centrale européenne"],
    answer: 3,
    explanation: "Cette mission correspond principalement à la Banque centrale européenne."
  },
  {
    id: 323,
    theme: "valeurs",
    question: "Que signifie principalement la liberté syndicale dans le cadre républicain ?",
    options: ["la possibilité de pratiquer sa religion dans le respect de l'ordre public", "la possibilité de créer ou rejoindre un groupement légal", "la possibilité de croire, de ne pas croire ou de changer de conviction", "le droit de défendre collectivement ses intérêts professionnels"],
    answer: 3,
    explanation: "La liberté syndicale renvoie au droit de défendre collectivement ses intérêts professionnels."
  },
  {
    id: 324,
    theme: "valeurs",
    question: "Quel principe républicain correspond à cette définition: le droit de défendre collectivement ses intérêts professionnels ?",
    options: ["la laïcité", "l'égalité devant la loi", "la liberté d'expression", "la liberté syndicale"],
    answer: 3,
    explanation: "Cette définition correspond à la liberté syndicale."
  },
  {
    id: 325,
    theme: "valeurs",
    question: "Que signifie principalement le droit à l'instruction dans le cadre républicain ?",
    options: ["la possibilité d'informer et d'être informé sans censure préalable", "l'obligation de se conformer aux règles adoptées démocratiquement", "l'accès de tous à l'éducation", "la possibilité de créer ou rejoindre un groupement légal"],
    answer: 2,
    explanation: "Le droit à l'instruction renvoie à l'accès de tous à l'éducation."
  },
  {
    id: 326,
    theme: "valeurs",
    question: "Quel principe républicain correspond à cette définition: l'accès de tous à l'éducation ?",
    options: ["la solidarité nationale", "la souveraineté nationale", "le droit à l'instruction", "la dignité de la personne humaine"],
    answer: 2,
    explanation: "Cette définition correspond au droit à l'instruction."
  },
  {
    id: 327,
    theme: "valeurs",
    question: "Que signifie principalement la protection sociale dans le cadre républicain ?",
    options: ["la soumission de tous, y compris les pouvoirs publics, à la règle de droit", "l'organisation collective des aides face aux risques de la vie", "l'obligation de se conformer aux règles adoptées démocratiquement", "la répartition du pouvoir entre exécutif, législatif et judiciaire"],
    answer: 1,
    explanation: "La protection sociale renvoie à l'organisation collective des aides face aux risques de la vie."
  },
  {
    id: 328,
    theme: "valeurs",
    question: "Quel principe républicain correspond à cette définition: l'organisation collective des aides face aux risques de la vie ?",
    options: ["la non-discrimination", "la protection sociale", "la présomption d'innocence", "le pluralisme"],
    answer: 1,
    explanation: "Cette définition correspond à la protection sociale."
  },
  {
    id: 329,
    theme: "valeurs",
    question: "Que signifie principalement l'égalité femmes-hommes dans le cadre républicain ?",
    options: ["l'égalité des droits et des opportunités entre les sexes", "la soumission de tous, y compris les pouvoirs publics, à la règle de droit", "la préservation des ressources et des écosystèmes pour les générations futures", "le droit de défendre collectivement ses intérêts professionnels"],
    answer: 0,
    explanation: "L'égalité femmes-hommes renvoie à l'égalité des droits et des opportunités entre les sexes."
  },
  {
    id: 330,
    theme: "valeurs",
    question: "Quel principe républicain correspond à cette définition: l'égalité des droits et des opportunités entre les sexes ?",
    options: ["l'égalité femmes-hommes", "la parité", "la tolérance", "la citoyenneté"],
    answer: 0,
    explanation: "Cette définition correspond à l'égalité femmes-hommes."
  },
  {
    id: 331,
    theme: "valeurs",
    question: "Que signifie principalement la neutralité du service public dans le cadre républicain ?",
    options: ["le droit de défendre collectivement ses intérêts professionnels", "l'accès de tous à l'éducation", "l'organisation collective des aides face aux risques de la vie", "l'absence de traitement partisan ou religieux dans l'action publique"],
    answer: 3,
    explanation: "La neutralité du service public renvoie à l'absence de traitement partisan ou religieux dans l'action publique."
  },
  {
    id: 332,
    theme: "valeurs",
    question: "Quel principe républicain correspond à cette définition: l'absence de traitement partisan ou religieux dans l'action publique ?",
    options: ["la liberté de culte", "la liberté de conscience", "la liberté d'association", "la neutralité du service public"],
    answer: 3,
    explanation: "Cette définition correspond à la neutralité du service public."
  },
  {
    id: 333,
    theme: "valeurs",
    question: "Que signifie principalement la continuité du service public dans le cadre républicain ?",
    options: ["le fonctionnement régulier des services essentiels à la population", "l'égalité des droits et des opportunités entre les sexes", "l'absence de traitement partisan ou religieux dans l'action publique", "l'organisation collective des aides face aux risques de la vie"],
    answer: 0,
    explanation: "La continuité du service public renvoie au fonctionnement régulier des services essentiels à la population."
  },
  {
    id: 334,
    theme: "valeurs",
    question: "Quel principe républicain correspond à cette définition: le fonctionnement régulier des services essentiels à la population ?",
    options: ["la continuité du service public", "la séparation des pouvoirs", "l'État de droit", "le respect de la loi"],
    answer: 0,
    explanation: "Cette définition correspond à la continuité du service public."
  },
  {
    id: 335,
    theme: "valeurs",
    question: "Que signifie principalement l'accessibilité du service public dans le cadre républicain ?",
    options: ["l'absence de traitement partisan ou religieux dans l'action publique", "la possibilité pour tous les usagers d'accéder aux services publics", "l'obligation d'assumer les conséquences de ses actes", "le fonctionnement régulier des services essentiels à la population"],
    answer: 1,
    explanation: "L'accessibilité du service public renvoie à la possibilité pour tous les usagers d'accéder aux services publics."
  },
  {
    id: 336,
    theme: "valeurs",
    question: "Quel principe républicain correspond à cette définition: la possibilité pour tous les usagers d'accéder aux services publics ?",
    options: ["la liberté syndicale", "l'accessibilité du service public", "la protection sociale", "le droit à l'instruction"],
    answer: 1,
    explanation: "Cette définition correspond à l'accessibilité du service public."
  },
  {
    id: 337,
    theme: "valeurs",
    question: "Que signifie principalement la responsabilité dans le cadre républicain ?",
    options: ["le respect des autres et des règles de vie en société", "la possibilité pour tous les usagers d'accéder aux services publics", "l'obligation d'assumer les conséquences de ses actes", "la coexistence de différentes opinions politiques, philosophiques et sociales"],
    answer: 2,
    explanation: "La responsabilité renvoie à l'obligation d'assumer les conséquences de ses actes."
  },
  {
    id: 338,
    theme: "valeurs",
    question: "Quel principe républicain correspond à cette définition: l'obligation d'assumer les conséquences de ses actes ?",
    options: ["la continuité du service public", "la neutralité du service public", "la responsabilité", "l'accessibilité du service public"],
    answer: 2,
    explanation: "Cette définition correspond à la responsabilité."
  },
  {
    id: 339,
    theme: "valeurs",
    question: "Que signifie principalement la civilité dans le cadre républicain ?",
    options: ["la neutralité de l'État à l'égard des religions et la liberté de conscience", "le droit d'exprimer ses opinions dans le respect de la loi", "l'application des mêmes règles de droit à toutes les personnes", "le respect des autres et des règles de vie en société"],
    answer: 3,
    explanation: "La civilité renvoie au respect des autres et des règles de vie en société."
  },
  {
    id: 340,
    theme: "valeurs",
    question: "Quel principe républicain correspond à cette définition: le respect des autres et des règles de vie en société ?",
    options: ["la liberté d'expression", "l'égalité devant la loi", "la laïcité", "la civilité"],
    answer: 3,
    explanation: "Cette définition correspond à la civilité."
  },
  {
    id: 341,
    theme: "geographie",
    question: "Quelle ville est traversée par la Garonne ?",
    options: ["Bordeaux", "Lille", "Nantes", "Metz"],
    answer: 0,
    explanation: "La Garonne traverse notamment Bordeaux."
  },
  {
    id: 342,
    theme: "geographie",
    question: "Quel est le chef-lieu de la région Nouvelle-Aquitaine ?",
    options: ["Poitiers", "Bordeaux", "Limoges", "Pau"],
    answer: 1,
    explanation: "Bordeaux est le chef-lieu de Nouvelle-Aquitaine."
  },
  {
    id: 343,
    theme: "geographie",
    question: "Le Rhin marque une partie de la frontière entre la France et quel pays ?",
    options: ["L'Italie", "La Suisse", "L'Allemagne", "La Belgique"],
    answer: 2,
    explanation: "Le Rhin sert de frontière naturelle avec l'Allemagne sur certains tronçons."
  },
  {
    id: 344,
    theme: "geographie",
    question: "Quelle ville est le chef-lieu de la région Grand Est ?",
    options: ["Metz", "Nancy", "Strasbourg", "Reims"],
    answer: 2,
    explanation: "Strasbourg est le chef-lieu de la région Grand Est."
  },
  {
    id: 345,
    theme: "geographie",
    question: "Quel département d'outre-mer se situe en Amérique du Sud ?",
    options: ["La Martinique", "La Guyane", "La Guadeloupe", "La Réunion"],
    answer: 1,
    explanation: "La Guyane française se situe en Amérique du Sud."
  },
  {
    id: 346,
    theme: "geographie",
    question: "Quel est le principal fleuve qui traverse Lyon ?",
    options: ["Le Rhin", "La Seine", "Le Rhône", "La Dordogne"],
    answer: 2,
    explanation: "Le Rhône traverse Lyon (avec la Saône)."
  },
  {
    id: 347,
    theme: "geographie",
    question: "Quel pays ne partage pas de frontière terrestre avec la France ?",
    options: ["Le Luxembourg", "Le Portugal", "L'Espagne", "La Belgique"],
    answer: 1,
    explanation: "Le Portugal ne partage pas de frontière terrestre avec la France."
  },
  {
    id: 348,
    theme: "geographie",
    question: "Quelle grande plaine agricole occupe une partie du nord du Bassin parisien ?",
    options: ["La Beauce", "La Crau", "La Bresse", "Le Lauragais"],
    answer: 0,
    explanation: "La Beauce est une grande plaine céréalière du Bassin parisien."
  },
  {
    id: 349,
    theme: "geographie",
    question: "Quel port méditerranéen est le plus important de France en volume ?",
    options: ["Sète", "Toulon", "Marseille-Fos", "Nice"],
    answer: 2,
    explanation: "Le port de Marseille-Fos est un des premiers ports français."
  },
  {
    id: 350,
    theme: "geographie",
    question: "Quel archipel du Pacifique est une collectivité française ?",
    options: ["Les Açores", "La Polynésie française", "Les Canaries", "Madère"],
    answer: 1,
    explanation: "La Polynésie française est une collectivité d'outre-mer du Pacifique."
  }
];
