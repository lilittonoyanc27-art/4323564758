export const TU_META = {
  titleEs: "¿Qué hiciste? — Preguntas y respuestas",
  titleHy: "Ի՞նչ արեցիր — Հարցեր և պատասխաններ (Դու → Ես)",
  level: "Tú (yo)",
  subtitleHy:
    "Անցյալ ժամանակների լսողական պրակտիկա (Tú)։ Ուսուցիչը հարցը տալիս է իսպաներենով, աշակերտը պատասխանում է առաջին դեմքով՝ yo։ Սկզբում կարճ հարցեր, ապա ավելի երկար։ Օգտագործում ենք Indefinido, Perfecto, Imperfecto և Pluscuamperfecto։",
  tipTitleHy: "Խորհուրդ ուսուցչին",
  tipHy:
    "Հարցից առաջ աշակերտին մի՛ ասեք քերականական ժամանակը։ Թող նա ինքը համատեքստից որոշի այն և պատասխանի անմիջապես՝ առանց գրավոր նախապատրաստության։",
  parts: [
    { id: 1, labelEs: "Parte 1 — Preguntas fáciles (1–15)", labelHy: "Մաս 1 · Հեշտ հարցեր (1–15)" },
    { id: 2, labelEs: "Parte 2 — Cuando eras pequeño (16–25)", labelHy: "Մաս 2 · Երբ փոքր էիր (16–25)" },
    { id: 3, labelEs: "Parte 3 — ¿Qué habías hecho antes? (26–35)", labelHy: "Մաս 3 · Ի՞նչ էիր արել առաջ (26–35)" },
    { id: 4, labelEs: "Parte 4 — Preguntas más largas (36–50)", labelHy: "Մաս 4 · Ավելի երկար հարցեր (36–50)" },
    { id: 5, labelEs: "Reto extra — Preguntas inesperadas (1–10)", labelHy: "Լրացուցիչ մարտահրավեր · Անսպասելի հարցեր" }
  ]
};

export const TU_QUESTIONS = [
  {
    id: 1,
    part: 1,
    tenses: ["Indefinido"],
    qEs: "¿Qué hiciste ayer?",
    qHy: "Ի՞նչ արեցիր երեկ։",
    aEs: "Ayer fui al parque con mis amigos.",
    aHy: "Երեկ ընկերներիս հետ գնացի զբոսայգի։"
  },
  {
    id: 2,
    part: 1,
    tenses: ["Indefinido"],
    qEs: "¿A qué hora te despertaste ayer?",
    qHy: "Ժամը քանիսի՞ն արթնացար երեկ։",
    aEs: "Me desperté a las ocho de la mañana.",
    aHy: "Արթնացա առավոտյան ժամը ութին։"
  },
  {
    id: 3,
    part: 1,
    tenses: ["Indefinido", "Perfecto"],
    qEs: "¿Qué desayunaste esta mañana?",
    qHy: "Ի՞նչ նախաճաշեցիր այսօր առավոտյան։",
    aEs: "Esta mañana he desayunado huevos y pan.",
    aHy: "Այսօր առավոտյան ձու և հաց եմ նախաճաշել։"
  },
  {
    id: 4,
    part: 1,
    tenses: ["Indefinido"],
    qEs: "¿Adónde fuiste el sábado?",
    qHy: "Ո՞ւր գնացիր շաբաթ օրը։",
    aEs: "El sábado fui al centro comercial.",
    aHy: "Շաբաթ օրը գնացի առևտրի կենտրոն։"
  },
  {
    id: 5,
    part: 1,
    tenses: ["Indefinido"],
    qEs: "¿Con quién hablaste ayer?",
    qHy: "Ո՞ւմ հետ խոսեցիր երեկ։",
    aEs: "Ayer hablé con mi mejor amigo.",
    aHy: "Երեկ խոսեցի իմ լավագույն ընկերոջ հետ։"
  },
  {
    id: 6,
    part: 1,
    tenses: ["Perfecto"],
    qEs: "¿Qué has comido hoy?",
    qHy: "Ի՞նչ ես կերել այսօր։",
    aEs: "Hoy he comido arroz con pollo.",
    aHy: "Այսօր կերել եմ բրինձ՝ հավով։"
  },
  {
    id: 7,
    part: 1,
    tenses: ["Indefinido"],
    qEs: "¿A qué hora te acostaste anoche?",
    qHy: "Ժամը քանիսի՞ն պառկեցիր քնելու անցած գիշեր։",
    aEs: "Anoche me acosté a las once.",
    aHy: "Անցած գիշեր պառկեցի քնելու ժամը տասնմեկին։"
  },
  {
    id: 8,
    part: 1,
    tenses: ["Indefinido"],
    qEs: "¿Qué película viste la semana pasada?",
    qHy: "Ի՞նչ ֆիլմ դիտեցիր անցած շաբաթ։",
    aEs: "Vi una película de aventuras.",
    aHy: "Արկածային ֆիլմ դիտեցի։"
  },
  {
    id: 9,
    part: 1,
    tenses: ["Indefinido"],
    qEs: "¿Qué compraste ayer?",
    qHy: "Ի՞նչ գնեցիր երեկ։",
    aEs: "Ayer compré una camiseta nueva.",
    aHy: "Երեկ նոր վերնաշապիկ գնեցի։"
  },
  {
    id: 10,
    part: 1,
    tenses: ["Perfecto"],
    qEs: "¿Has hecho los deberes hoy?",
    qHy: "Այսօր արե՞լ ես տնային առաջադրանքները։",
    aEs: "Sí, ya he hecho los deberes.",
    aHy: "Այո՛, արդեն արել եմ տնային առաջադրանքները։"
  },
  {
    id: 11,
    part: 1,
    tenses: ["Indefinido"],
    qEs: "¿Jugaste al fútbol el domingo?",
    qHy: "Կիրակի օրը ֆուտբոլ խաղացի՞ր։",
    aEs: "Sí, jugué al fútbol con mis amigos.",
    aHy: "Այո՛, ընկերներիս հետ ֆուտբոլ խաղացի։"
  },
  {
    id: 12,
    part: 1,
    tenses: ["Indefinido"],
    qEs: "¿Qué bebiste ayer por la tarde?",
    qHy: "Ի՞նչ խմեցիր երեկ կեսօրից հետո։",
    aEs: "Bebí un vaso de zumo de naranja.",
    aHy: "Մի բաժակ նարնջի հյութ խմեցի։"
  },
  {
    id: 13,
    part: 1,
    tenses: ["Indefinido"],
    qEs: "¿A quién visitaste el fin de semana pasado?",
    qHy: "Ո՞ւմ այցելեցիր անցած հանգստյան օրերին։",
    aEs: "Visité a mis abuelos.",
    aHy: "Այցելեցի տատիկիս ու պապիկիս։"
  },
  {
    id: 14,
    part: 1,
    tenses: ["Perfecto"],
    qEs: "¿Qué has aprendido hoy?",
    qHy: "Ի՞նչ ես սովորել այսօր։",
    aEs: "Hoy he aprendido nuevas palabras en español.",
    aHy: "Այսօր սովորել եմ նոր բառեր իսպաներենով։"
  },
  {
    id: 15,
    part: 1,
    tenses: ["Indefinido"],
    qEs: "¿Cómo te sentiste ayer?",
    qHy: "Ինչպե՞ս էիր քեզ զգում երեկ։",
    aEs: "Me sentí muy bien porque tuve un día divertido.",
    aHy: "Շատ լավ էի զգում, որովհետև զվարճալի օր ունեցա։"
  },
  {
    id: 16,
    part: 2,
    tenses: ["Imperfecto"],
    qEs: "¿Dónde vivías cuando eras pequeño?",
    qHy: "Որտե՞ղ էիր ապրում, երբ փոքր էիր։",
    aEs: "Cuando era pequeño, vivía en una ciudad pequeña.",
    aHy: "Երբ փոքր էի, ապրում էի մի փոքր քաղաքում։"
  },
  {
    id: 17,
    part: 2,
    tenses: ["Imperfecto"],
    qEs: "¿A qué jugabas cuando tenías siete años?",
    qHy: "Ի՞նչ էիր խաղում, երբ յոթ տարեկան էիր։",
    aEs: "Jugaba al fútbol con mis amigos.",
    aHy: "Ընկերներիս հետ ֆուտբոլ էի խաղում։"
  },
  {
    id: 18,
    part: 2,
    tenses: ["Imperfecto"],
    qEs: "¿Qué dibujos animados veías de pequeño?",
    qHy: "Ի՞նչ մուլտֆիլմեր էիր դիտում փոքր ժամանակ։",
    aEs: "Veía dibujos animados de aventuras.",
    aHy: "Արկածային մուլտֆիլմեր էի դիտում։"
  },
  {
    id: 19,
    part: 2,
    tenses: ["Imperfecto"],
    qEs: "¿Qué hacías después del colegio?",
    qHy: "Ի՞նչ էիր անում դպրոցից հետո։",
    aEs: "Normalmente hacía los deberes y después salía a jugar.",
    aHy: "Սովորաբար անում էի տնային առաջադրանքները, իսկ հետո դուրս էի գալիս խաղալու։"
  },
  {
    id: 20,
    part: 2,
    tenses: ["Imperfecto"],
    qEs: "¿Tenías alguna mascota cuando eras pequeño?",
    qHy: "Ունեի՞ր որևէ ընտանի կենդանի, երբ փոքր էիր։",
    aEs: "Sí, tenía un perro pequeño que se llamaba Max.",
    aHy: "Այո՛, մի փոքրիկ շուն ունեի, որի անունը Մաքս էր։"
  },
  {
    id: 21,
    part: 2,
    tenses: ["Imperfecto"],
    qEs: "¿Cómo era tu mejor amigo de la infancia?",
    qHy: "Ինչպիսի՞ն էր քո մանկության լավագույն ընկերը։",
    aEs: "Era muy simpático, divertido y siempre me ayudaba.",
    aHy: "Նա շատ համակրելի էր, զվարճալի և միշտ օգնում էր ինձ։"
  },
  {
    id: 22,
    part: 2,
    tenses: ["Imperfecto"],
    qEs: "¿Qué comida no te gustaba cuando eras pequeño?",
    qHy: "Ի՞նչ ուտելիք չէիր սիրում, երբ փոքր էիր։",
    aEs: "No me gustaban las verduras.",
    aHy: "Չէի սիրում բանջարեղենը։"
  },
  {
    id: 23,
    part: 2,
    tenses: ["Imperfecto"],
    qEs: "¿Qué hacías normalmente durante las vacaciones de verano?",
    qHy: "Ի՞նչ էիր սովորաբար անում ամառային արձակուրդների ընթացքում։",
    aEs: "Iba a la playa con mi familia y nadaba todos los días.",
    aHy: "Ընտանիքիս հետ գնում էի լողափ և ամեն օր լողում էի։"
  },
  {
    id: 24,
    part: 2,
    tenses: ["Imperfecto"],
    qEs: "¿Te gustaba ir al colegio cuando tenías ocho años?",
    qHy: "Սիրո՞ւմ էիր դպրոց գնալ, երբ ութ տարեկան էիր։",
    aEs: "Sí, me gustaba porque tenía muchos amigos.",
    aHy: "Այո՛, սիրում էի, որովհետև շատ ընկերներ ունեի։"
  },
  {
    id: 25,
    part: 2,
    tenses: ["Imperfecto"],
    qEs: "¿Cómo celebrabas tus cumpleaños cuando eras pequeño?",
    qHy: "Ինչպե՞ս էիր նշում քո ծննդյան օրերը, երբ փոքր էիր։",
    aEs: "Invitaba a mis amigos, comíamos tarta y jugábamos juntos.",
    aHy: "Հրավիրում էի ընկերներիս, տորթ էինք ուտում և միասին խաղում էինք։"
  },
  {
    id: 26,
    part: 3,
    tenses: ["Pluscuamperfecto"],
    qEs: "¿Qué habías hecho antes de salir de casa ayer?",
    qHy: "Ի՞նչ էիր արել երեկ տնից դուրս գալուց առաջ։",
    aEs: "Había desayunado y me había vestido.",
    aHy: "Նախաճաշել էի և հագնվել էի։"
  },
  {
    id: 27,
    part: 3,
    tenses: ["Pluscuamperfecto"],
    qEs: "¿Habías terminado los deberes antes de cenar ayer?",
    qHy: "Ավարտե՞լ էիր տնային առաջադրանքները երեկվա ընթրիքից առաջ։",
    aEs: "Sí, ya había terminado los deberes antes de cenar.",
    aHy: "Այո՛, արդեն ավարտել էի տնային առաջադրանքները ընթրելուց առաջ։"
  },
  {
    id: 28,
    part: 3,
    tenses: ["Pluscuamperfecto"],
    qEs: "¿Qué habías preparado antes de tus últimas vacaciones?",
    qHy: "Ի՞նչ էիր պատրաստել քո վերջին արձակուրդից առաջ։",
    aEs: "Había preparado mi maleta y había comprado algunas cosas.",
    aHy: "Պատրաստել էի ճամպրուկս և գնել էի որոշ իրեր։"
  },
  {
    id: 29,
    part: 3,
    tenses: ["Pluscuamperfecto"],
    qEs: "¿Habías visitado Madrid antes de tu último viaje a España?",
    qHy: "Այցելե՞լ էիր Մադրիդ Իսպանիա կատարած քո վերջին ճամփորդությունից առաջ։",
    aEs: "No, nunca había visitado Madrid antes de ese viaje.",
    aHy: "Ոչ, երբեք չէի այցելել Մադրիդ այդ ճամփորդությունից առաջ։"
  },
  {
    id: 30,
    part: 3,
    tenses: ["Pluscuamperfecto"],
    qEs: "¿Qué habías comido antes de ir al entrenamiento ayer?",
    qHy: "Ի՞նչ էիր կերել երեկ մարզման գնալուց առաջ։",
    aEs: "Había comido arroz y pollo.",
    aHy: "Կերել էի բրինձ և հավ։"
  },
  {
    id: 31,
    part: 3,
    tenses: ["Pluscuamperfecto"],
    qEs: "¿Habías estudiado español antes de empezar estas clases?",
    qHy: "Սովորե՞լ էիր իսպաներեն այս դասերը սկսելուց առաջ։",
    aEs: "Sí, había aprendido algunas palabras y expresiones.",
    aHy: "Այո՛, սովորել էի մի քանի բառեր և արտահայտություններ։"
  },
  {
    id: 32,
    part: 3,
    tenses: ["Pluscuamperfecto"],
    qEs: "¿Qué habías hecho antes de acostarte anoche?",
    qHy: "Ի՞նչ էիր արել անցած գիշեր քնելուց առաջ։",
    aEs: "Había visto una película y me había lavado los dientes.",
    aHy: "Ֆիլմ էի դիտել և լվացել էի ատամներս։"
  },
  {
    id: 33,
    part: 3,
    tenses: ["Indefinido", "Pluscuamperfecto"],
    qEs: "¿Alguna vez llegaste tarde porque te habías despertado demasiado tarde?",
    qHy: "Երբևէ ուշացե՞լ ես, որովհետև չափազանց ուշ էիր արթնացել։",
    aEs: "Sí, una vez llegué tarde al colegio porque me había despertado a las nueve.",
    aHy: "Այո՛, մի անգամ ուշացա դպրոցից, որովհետև արթնացել էի ժամը իննին։"
  },
  {
    id: 34,
    part: 3,
    tenses: ["Pluscuamperfecto"],
    qEs: "¿Habías probado alguna comida española antes de visitar España?",
    qHy: "Փորձե՞լ էիր որևէ իսպանական ուտեստ Իսպանիա այցելելուց առաջ։",
    aEs: "Sí, ya había probado la paella.",
    aHy: "Այո՛, արդեն փորձել էի պաելյան։"
  },
  {
    id: 35,
    part: 3,
    tenses: ["Pluscuamperfecto"],
    qEs: "¿Qué habías aprendido antes de tu último examen?",
    qHy: "Ի՞նչ էիր սովորել քո վերջին քննությունից առաջ։",
    aEs: "Había aprendido las reglas gramaticales y había repasado todos los ejercicios.",
    aHy: "Սովորել էի քերականական կանոնները և կրկնել էի բոլոր վարժությունները։"
  },
  {
    id: 36,
    part: 4,
    tenses: ["Imperfecto"],
    qEs: "¿Qué estabas haciendo ayer a las siete de la tarde?",
    qHy: "Ի՞նչ էիր անում երեկ երեկոյան ժամը յոթին։",
    aEs: "Ayer a las siete estaba haciendo los deberes mientras mi hermano veía la televisión.",
    aHy: "Երեկ ժամը յոթին տնային առաջադրանքներն էի անում, մինչ եղբայրս հեռուստացույց էր դիտում։"
  },
  {
    id: 37,
    part: 4,
    tenses: ["Indefinido"],
    qEs: "¿Qué hiciste el último fin de semana y con quién pasaste el tiempo?",
    qHy: "Ի՞նչ արեցիր վերջին հանգստյան օրերին և ո՞ւմ հետ անցկացրիր ժամանակը։",
    aEs: "El sábado fui al parque con mis amigos y el domingo estuve en casa con mi familia.",
    aHy: "Շաբաթ օրը ընկերներիս հետ գնացի զբոսայգի, իսկ կիրակի օրը տանն էի՝ ընտանիքիս հետ։"
  },
  {
    id: 38,
    part: 4,
    tenses: ["Indefinido"],
    qEs: "¿Qué fue lo más interesante que te pasó la semana pasada?",
    qHy: "Ի՞նչն էր ամենահետաքրքիրը, որ պատահեց քեզ անցած շաբաթ։",
    aEs: "Lo más interesante fue que participé en un partido de fútbol y marqué dos goles.",
    aHy: "Ամենահետաքրքիրն այն էր, որ մասնակցեցի ֆուտբոլի խաղի և երկու գոլ խփեցի։"
  },
  {
    id: 39,
    part: 4,
    tenses: ["Perfecto", "Indefinido"],
    qEs: "¿Alguna vez has perdido algo importante? ¿Qué pasó?",
    qHy: "Երբևէ կորցրե՞լ ես որևէ կարևոր բան։ Ի՞նչ պատահեց։",
    aEs: "Sí, una vez perdí mi teléfono, pero después lo encontré debajo de la cama.",
    aHy: "Այո՛, մի անգամ կորցրի հեռախոսս, բայց հետո գտա մահճակալի տակ։"
  },
  {
    id: 40,
    part: 4,
    tenses: ["Imperfecto"],
    qEs: "¿Qué hacías normalmente los domingos cuando eras pequeño?",
    qHy: "Ի՞նչ էիր սովորաբար անում կիրակի օրերին, երբ փոքր էիր։",
    aEs: "Me levantaba tarde, desayunaba con mi familia y después iba al parque.",
    aHy: "Ուշ էի արթնանում, նախաճաշում էի ընտանիքիս հետ, իսկ հետո գնում էի զբոսայգի։"
  },
  {
    id: 41,
    part: 4,
    tenses: ["Indefinido"],
    qEs: "¿Qué hiciste la última vez que estuviste enfermo?",
    qHy: "Ի՞նչ արեցիր վերջին անգամ, երբ հիվանդ էիր։",
    aEs: "Me quedé en casa, descansé y bebí mucho té.",
    aHy: "Մնացի տանը, հանգստացա և շատ թեյ խմեցի։"
  },
  {
    id: 42,
    part: 4,
    tenses: ["Perfecto", "Indefinido", "Pluscuamperfecto"],
    qEs: "¿Alguna vez has llegado tarde a una clase? ¿Por qué?",
    qHy: "Երբևէ ուշացե՞լ ես դասից։ Ինչո՞ւ։",
    aEs: "Sí, una vez llegué tarde porque había perdido el autobús.",
    aHy: "Այո՛, մի անգամ ուշացա, որովհետև բաց էի թողել ավտոբուսը։"
  },
  {
    id: 43,
    part: 4,
    tenses: ["Imperfecto", "Indefinido"],
    qEs: "¿Qué estabas haciendo la última vez que empezó a llover de repente?",
    qHy: "Ի՞նչ էիր անում վերջին անգամ, երբ հանկարծակի անձրև սկսվեց։",
    aEs: "Estaba caminando por la calle y tuve que entrar en una tienda para no mojarme.",
    aHy: "Քայլում էի փողոցով և ստիպված եղա մտնել խանութ՝ չթրջվելու համար։"
  },
  {
    id: 44,
    part: 4,
    tenses: ["Indefinido"],
    qEs: "¿Cómo fue tu último cumpleaños? ¿Qué hiciste y qué regalos recibiste?",
    qHy: "Ինչպե՞ս անցավ քո վերջին ծննդյան օրը։ Ի՞նչ արեցիր և ի՞նչ նվերներ ստացար։",
    aEs: "Fue un día muy especial. Celebré mi cumpleaños con mi familia y recibí unos auriculares nuevos.",
    aHy: "Շատ հատուկ օր էր։ Նշեցի ծննդյանս օրը ընտանիքիս հետ և նոր ականջակալներ ստացա։"
  },
  {
    id: 45,
    part: 4,
    tenses: ["Indefinido"],
    qEs: "¿Qué hiciste ayer después de terminar tus deberes?",
    qHy: "Ի՞նչ արեցիր երեկ՝ տնային առաջադրանքներդ ավարտելուց հետո։",
    aEs: "Después de terminar los deberes, salí a jugar con mis amigos y luego volví a casa.",
    aHy: "Տնային առաջադրանքներն ավարտելուց հետո դուրս եկա ընկերներիս հետ խաղալու, իսկ հետո վերադարձա տուն։"
  },
  {
    id: 46,
    part: 4,
    tenses: ["Indefinido"],
    qEs: "¿Cuál fue el último lugar interesante que visitaste y qué hiciste allí?",
    qHy: "Ո՞րն էր վերջին հետաքրքիր վայրը, որն այցելեցիր, և ի՞նչ արեցիր այնտեղ։",
    aEs: "El último lugar interesante que visité fue un museo. Vi muchas cosas antiguas y saqué algunas fotos.",
    aHy: "Վերջին հետաքրքիր վայրը, որն այցելեցի, թանգարան էր։ Շատ հին իրեր տեսա և մի քանի լուսանկար արեցի։"
  },
  {
    id: 47,
    part: 4,
    tenses: ["Pluscuamperfecto", "Imperfecto", "Indefinido"],
    qEs: "¿Qué habías planeado hacer el fin de semana pasado y qué hiciste finalmente?",
    qHy: "Ի՞նչ էիր պլանավորել անել անցած հանգստյան օրերին և ի՞նչ արեցիր վերջում։",
    aEs: "Había planeado ir a la piscina, pero hacía frío, así que decidí quedarme en casa.",
    aHy: "Պլանավորել էի գնալ լողավազան, բայց ցուրտ էր, ուստի որոշեցի մնալ տանը։"
  },
  {
    id: 48,
    part: 4,
    tenses: ["Imperfecto", "Indefinido"],
    qEs: "¿Qué estabas haciendo cuando recibiste la última llamada de un amigo?",
    qHy: "Ի՞նչ էիր անում, երբ վերջին անգամ զանգ ստացար ընկերոջիցդ։",
    aEs: "Estaba viendo una película cuando mi amigo me llamó para invitarme a jugar al fútbol.",
    aHy: "Ֆիլմ էի դիտում, երբ ընկերս զանգահարեց՝ ինձ ֆուտբոլ խաղալու հրավիրելու։"
  },
  {
    id: 49,
    part: 4,
    tenses: ["Perfecto", "Imperfecto", "Indefinido"],
    qEs: "¿Alguna vez has conocido a alguien interesante durante un viaje? ¿Dónde estabas y qué pasó?",
    qHy: "Երբևէ ծանոթացե՞լ ես հետաքրքիր մարդու հետ ճամփորդության ընթացքում։ Որտե՞ղ էիր և ի՞նչ պատահեց։",
    aEs: "Sí, conocí a un chico durante un viaje a Barcelona. Estábamos en un parque, empezamos a hablar y después jugamos al fútbol juntos.",
    aHy: "Այո՛, ծանոթացա մի տղայի հետ Բարսելոնա կատարած ճամփորդության ժամանակ։ Մենք զբոսայգում էինք, սկսեցինք խոսել, իսկ հետո միասին ֆուտբոլ խաղացինք։"
  },
  {
    id: 50,
    part: 4,
    tenses: ["Indefinido"],
    qEs: "¿Qué hiciste ayer desde que te despertaste hasta que te acostaste?",
    qHy: "Ի՞նչ արեցիր երեկ՝ արթնանալու պահից մինչև քնելը։",
    aEs: "Ayer me desperté a las ocho, desayuné, fui al colegio y estudié varias asignaturas. Después volví a casa, comí, hice los deberes y salí a pasear. Por la noche cené con mi familia, vi una película y me acosté a las once.",
    aHy: "Երեկ արթնացա ժամը ութին, նախաճաշեցի, գնացի դպրոց և սովորեցի մի քանի առարկաներ։ Հետո վերադարձա տուն, կերա, արեցի տնային առաջադրանքներս և դուրս եկա զբոսնելու։ Երեկոյան ընթրեցի ընտանիքիս հետ, ֆիլմ դիտեցի և պառկեցի քնելու ժամը տասնմեկին։"
  }
];

export const RETO_EXTRA = [
  {
    id: 1,
    qEs: "¿Qué comiste ayer?",
    qHy: "Ի՞նչ կերար երեկ։",
    tenses: ["Indefinido"]
  },
  {
    id: 2,
    qEs: "¿Qué has hecho hoy?",
    qHy: "Ի՞նչ ես արել այսօր։",
    tenses: ["Perfecto"]
  },
  {
    id: 3,
    qEs: "¿Qué hacías cuando tenías cinco años?",
    qHy: "Ի՞նչ էիր անում, երբ հինգ տարեկան էիր։",
    tenses: ["Imperfecto"]
  },
  {
    id: 4,
    qEs: "¿Qué habías hecho antes de desayunar ayer?",
    qHy: "Ի՞նչ էիր արել երեկ նախաճաշելուց առաջ։",
    tenses: ["Pluscuamperfecto"]
  },
  {
    id: 5,
    qEs: "¿Con quién hablaste anoche?",
    qHy: "Ո՞ւմ հետ խոսեցիր անցած գիշեր։",
    tenses: ["Indefinido"]
  },
  {
    id: 6,
    qEs: "¿Qué estabas haciendo hace dos horas?",
    qHy: "Ի՞նչ էիր անում երկու ժամ առաջ։",
    tenses: ["Imperfecto"]
  },
  {
    id: 7,
    qEs: "¿Dónde pasabas los veranos de pequeño?",
    qHy: "Որտե՞ղ էիր անցկացնում ամառները փոքր ժամանակ։",
    tenses: ["Imperfecto"]
  },
  {
    id: 8,
    qEs: "¿Has tenido algún problema esta semana?",
    qHy: "Որևէ խնդիր ունեցե՞լ ես այս շաբաթ։",
    tenses: ["Perfecto"]
  },
  {
    id: 9,
    qEs: "¿Qué habías preparado antes de salir de casa esta mañana?",
    qHy: "Ի՞նչ էիր պատրաստել այսօր առավոտյան տնից դուրս գալուց առաջ։",
    tenses: ["Pluscuamperfecto"]
  },
  {
    id: 10,
    qEs: "¿Qué fue lo mejor que te pasó ayer?",
    qHy: "Ի՞նչն էր ամենալավը, որ պատահեց քեզ երեկ։",
    tenses: ["Indefinido"]
  }
];
