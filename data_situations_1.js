export const PART_A_META = {
  titleEs: "Escucha y responde — Los tiempos del pasado (1–50)",
  titleHy: "Լսիր և պատասխանիր — Անցյալ ժամանակներ (1–50)",
  level: "A1–B1",
  subtitleHy:
    "Լսողական պրակտիկա անցյալ ժամանակներով՝ Pretérito Perfecto, Indefinido, Imperfecto և Pluscuamperfecto։ Ուսուցիչը կարդում է իրավիճակը իսպաներենով, ապա տալիս հարցերը։ Աշակերտը պետք է պատասխանի ամբողջական նախադասություններով։ Սկզբում իրավիճակները շատ կարճ են, ապա աստիճանաբար երկարում են։",
  tipTitleHy: "Խորհուրդ լսողական պրակտիկայի համար",
  tipHy:
    "Առաջին շրջանում իրավիճակը կարդացեք մեկ անգամ և հարցերը տվեք առանց կրկնելու։ Երկրորդ շրջանում փոխեք հարցերի հերթականությունը, իսկ երրորդ շրջանում խնդրեք աշակերտին ինքնուրույն վերապատմել իրավիճակը՝ օգտագործելով անցյալ ժամանակները։",
  parts: [
    { id: 1, labelEs: "Parte 1 — Situaciones cortas (1–15)", labelHy: "Մաս 1 · Կարճ իրավիճակներ (1–15)" },
    { id: 2, labelEs: "Parte 2 — Situaciones un poco más largas (16–30)", labelHy: "Մաս 2 · Մի փոքր ավելի երկար (16–30)" },
    { id: 3, labelEs: "Parte 3 — Situaciones más largas (31–40)", labelHy: "Մաս 3 · Ավելի երկար (31–40)" },
    { id: 4, labelEs: "Parte 4 — Situaciones para escuchar con atención (41–50)", labelHy: "Մաս 4 · Ուշադիր լսելու համար (41–50)" }
  ]
};

export const SITUATIONS_PART_A = [
  {
    id: 1,
    part: 1,
    titleEs: "En el parque",
    titleHy: "Զբոսայգում",
    tenses: ["Indefinido"],
    situationEs: "Ayer, Carlos fue al parque.",
    situationHy: "Երեկ Կառլոսը գնաց զբոսայգի։",
    qa: [
      {
        qEs: "¿Adónde fue Carlos ayer?",
        qHy: "Ո՞ւր գնաց Կառլոսը երեկ։",
        aEs: "Carlos fue al parque.",
        aHy: "Կառլոսը գնաց զբոսայգի։"
      }
    ]
  },
  {
    id: 2,
    part: 1,
    titleEs: "El desayuno",
    titleHy: "Նախաճաշը",
    tenses: ["Perfecto"],
    situationEs: "Esta mañana, Lucía ha desayunado a las ocho.",
    situationHy: "Այսօր առավոտյան Լուսիան նախաճաշել է ժամը ութին։",
    qa: [
      {
        qEs: "¿A qué hora ha desayunado Lucía?",
        qHy: "Ժամը քանիսի՞ն է նախաճաշել Լուսիան։",
        aEs: "Lucía ha desayunado a las ocho.",
        aHy: "Լուսիան նախաճաշել է ժամը ութին։"
      }
    ]
  },
  {
    id: 3,
    part: 1,
    titleEs: "El fútbol",
    titleHy: "Ֆուտբոլը",
    tenses: ["Indefinido"],
    situationEs: "El sábado, Pablo jugó al fútbol con sus amigos.",
    situationHy: "Շաբաթ օրը Պաբլոն ընկերների հետ ֆուտբոլ խաղաց։",
    qa: [
      {
        qEs: "¿Con quién jugó Pablo?",
        qHy: "Ո՞ւմ հետ խաղաց Պաբլոն։",
        aEs: "Pablo jugó al fútbol con sus amigos.",
        aHy: "Պաբլոն ֆուտբոլ խաղաց իր ընկերների հետ։"
      }
    ]
  },
  {
    id: 4,
    part: 1,
    titleEs: "La infancia",
    titleHy: "Մանկությունը",
    tenses: ["Imperfecto"],
    situationEs: "Cuando Marta era pequeña, vivía en Sevilla.",
    situationHy: "Երբ Մարտան փոքր էր, ապրում էր Սևիլյայում։",
    qa: [
      {
        qEs: "¿Dónde vivía Marta cuando era pequeña?",
        qHy: "Որտե՞ղ էր ապրում Մարտան, երբ փոքր էր։",
        aEs: "Marta vivía en Sevilla.",
        aHy: "Մարտան ապրում էր Սևիլյայում։"
      }
    ]
  },
  {
    id: 5,
    part: 1,
    titleEs: "La película",
    titleHy: "Ֆիլմը",
    tenses: ["Indefinido"],
    situationEs: "Anoche, Elena vio una película de aventuras.",
    situationHy: "Անցած գիշեր Ելենան արկածային ֆիլմ դիտեց։",
    qa: [
      {
        qEs: "¿Qué tipo de película vio Elena?",
        qHy: "Ի՞նչ տեսակի ֆիլմ դիտեց Ելենան։",
        aEs: "Elena vio una película de aventuras.",
        aHy: "Ելենան արկածային ֆիլմ դիտեց։"
      }
    ]
  },
  {
    id: 6,
    part: 1,
    titleEs: "El supermercado",
    titleHy: "Սուպերմարկետը",
    tenses: ["Perfecto"],
    situationEs: "Hoy, Andrés ha comprado leche y pan.",
    situationHy: "Այսօր Անդրեսը կաթ և հաց է գնել։",
    qa: [
      {
        qEs: "¿Qué ha comprado Andrés?",
        qHy: "Ի՞նչ է գնել Անդրեսը։",
        aEs: "Andrés ha comprado leche y pan.",
        aHy: "Անդրեսը կաթ և հաց է գնել։"
      }
    ]
  },
  {
    id: 7,
    part: 1,
    titleEs: "La escuela",
    titleHy: "Դպրոցը",
    tenses: ["Imperfecto"],
    situationEs: "Cuando Diego tenía ocho años, iba al colegio en bicicleta.",
    situationHy: "Երբ Դիեգոն ութ տարեկան էր, դպրոց էր գնում հեծանիվով։",
    qa: [
      {
        qEs: "¿Cómo iba Diego al colegio?",
        qHy: "Ինչպե՞ս էր Դիեգոն գնում դպրոց։",
        aEs: "Diego iba al colegio en bicicleta.",
        aHy: "Դիեգոն դպրոց էր գնում հեծանիվով։"
      }
    ]
  },
  {
    id: 8,
    part: 1,
    titleEs: "La lluvia",
    titleHy: "Անձրևը",
    tenses: ["Imperfecto"],
    situationEs: "Ayer llovía mucho y Sofía estaba en casa.",
    situationHy: "Երեկ շատ անձրև էր գալիս, և Սոֆիան տանն էր։",
    qa: [
      {
        qEs: "¿Qué tiempo hacía ayer?",
        qHy: "Ինչպիսի՞ եղանակ էր երեկ։",
        aEs: "Ayer llovía mucho.",
        aHy: "Երեկ շատ անձրև էր գալիս։"
      }
    ]
  },
  {
    id: 9,
    part: 1,
    titleEs: "El cumpleaños",
    titleHy: "Ծննդյան օրը",
    tenses: ["Indefinido"],
    situationEs: "El domingo pasado, Julia celebró su cumpleaños.",
    situationHy: "Անցած կիրակի Խուլիան նշեց իր ծննդյան օրը։",
    qa: [
      {
        qEs: "¿Qué celebró Julia?",
        qHy: "Ի՞նչ նշեց Խուլիան։",
        aEs: "Julia celebró su cumpleaños.",
        aHy: "Խուլիան նշեց իր ծննդյան օրը։"
      }
    ]
  },
  {
    id: 10,
    part: 1,
    titleEs: "El teléfono",
    titleHy: "Հեռախոսը",
    tenses: ["Perfecto"],
    situationEs: "Esta tarde, Marcos ha perdido su teléfono.",
    situationHy: "Այսօր կեսօրից հետո Մարկոսը կորցրել է իր հեռախոսը։",
    qa: [
      {
        qEs: "¿Qué ha perdido Marcos?",
        qHy: "Ի՞նչ է կորցրել Մարկոսը։",
        aEs: "Marcos ha perdido su teléfono.",
        aHy: "Մարկոսը կորցրել է իր հեռախոսը։"
      }
    ]
  },
  {
    id: 11,
    part: 1,
    titleEs: "La abuela",
    titleHy: "Տատիկը",
    tenses: ["Imperfecto"],
    situationEs: "Antes, Laura visitaba a su abuela todos los domingos.",
    situationHy: "Առաջ Լաուրան ամեն կիրակի այցելում էր իր տատիկին։",
    qa: [
      {
        qEs: "¿Cuándo visitaba Laura a su abuela?",
        qHy: "Ե՞րբ էր Լաուրան այցելում իր տատիկին։",
        aEs: "Laura visitaba a su abuela todos los domingos.",
        aHy: "Լաուրան այցելում էր իր տատիկին ամեն կիրակի։"
      }
    ]
  },
  {
    id: 12,
    part: 1,
    titleEs: "El viaje",
    titleHy: "Ճամփորդությունը",
    tenses: ["Indefinido"],
    situationEs: "El verano pasado, Daniel viajó a Francia.",
    situationHy: "Անցած ամառ Դանիելը ճամփորդեց Ֆրանսիա։",
    qa: [
      {
        qEs: "¿Adónde viajó Daniel?",
        qHy: "Ո՞ւր ճամփորդեց Դանիելը։",
        aEs: "Daniel viajó a Francia.",
        aHy: "Դանիելը ճամփորդեց Ֆրանսիա։"
      }
    ]
  },
  {
    id: 13,
    part: 1,
    titleEs: "La comida",
    titleHy: "Ուտելիքը",
    tenses: ["Indefinido"],
    situationEs: "Ayer, Natalia preparó una pizza para su familia.",
    situationHy: "Երեկ Նատալիան պիցցա պատրաստեց իր ընտանիքի համար։",
    qa: [
      {
        qEs: "¿Qué preparó Natalia?",
        qHy: "Ի՞նչ պատրաստեց Նատալիան։",
        aEs: "Natalia preparó una pizza para su familia.",
        aHy: "Նատալիան պիցցա պատրաստեց իր ընտանիքի համար։"
      }
    ]
  },
  {
    id: 14,
    part: 1,
    titleEs: "El libro",
    titleHy: "Գիրքը",
    tenses: ["Perfecto"],
    situationEs: "Hoy, Alejandro ha terminado un libro muy interesante.",
    situationHy: "Այսօր Ալեխանդրոն ավարտել է մի շատ հետաքրքիր գիրք։",
    qa: [
      {
        qEs: "¿Qué ha terminado Alejandro?",
        qHy: "Ի՞նչ է ավարտել Ալեխանդրոն։",
        aEs: "Alejandro ha terminado un libro muy interesante.",
        aHy: "Ալեխանդրոն ավարտել է մի շատ հետաքրքիր գիրք։"
      }
    ]
  },
  {
    id: 15,
    part: 1,
    titleEs: "El perro",
    titleHy: "Շունը",
    tenses: ["Imperfecto"],
    situationEs: "Cuando Sergio era pequeño, tenía un perro blanco.",
    situationHy: "Երբ Սերխիոն փոքր էր, ուներ մի սպիտակ շուն։",
    qa: [
      {
        qEs: "¿Cómo era el perro de Sergio?",
        qHy: "Ինչպիսի՞ն էր Սերխիոյի շունը։",
        aEs: "El perro de Sergio era blanco.",
        aHy: "Սերխիոյի շունը սպիտակ էր։"
      }
    ]
  },
  {
    id: 16,
    part: 2,
    titleEs: "Un día en la playa",
    titleHy: "Մի օր լողափում",
    tenses: ["Indefinido"],
    situationEs: "Ayer, Clara fue a la playa con su hermana. Nadaron durante una hora.",
    situationHy: "Երեկ Կլարան քրոջ հետ գնաց լողափ։ Նրանք լողացին մեկ ժամ։",
    qa: [
      {
        qEs: "¿Con quién fue Clara a la playa?",
        qHy: "Ո՞ւմ հետ գնաց Կլարան լողափ։",
        aEs: "Clara fue a la playa con su hermana.",
        aHy: "Կլարան գնաց լողափ իր քրոջ հետ։"
      },
      {
        qEs: "¿Cuánto tiempo nadaron?",
        qHy: "Որքա՞ն ժամանակ լողացին։",
        aEs: "Nadaron durante una hora.",
        aHy: "Նրանք լողացին մեկ ժամ։"
      }
    ]
  },
  {
    id: 17,
    part: 2,
    titleEs: "Una mañana difícil",
    titleHy: "Դժվար առավոտ",
    tenses: ["Perfecto", "Indefinido"],
    situationEs: "Esta mañana, Pedro se ha despertado tarde porque anoche se acostó a las dos.",
    situationHy: "Այսօր առավոտյան Պեդրոն ուշ է արթնացել, որովհետև անցած գիշեր պառկել է քնելու ժամը երկուսին։",
    qa: [
      {
        qEs: "¿Qué le ha pasado a Pedro esta mañana?",
        qHy: "Ի՞նչ է պատահել Պեդրոյին այսօր առավոտյան։",
        aEs: "Pedro se ha despertado tarde.",
        aHy: "Պեդրոն ուշ է արթնացել։"
      },
      {
        qEs: "¿Por qué se ha despertado tarde?",
        qHy: "Ինչո՞ւ է ուշ արթնացել։",
        aEs: "Porque anoche se acostó a las dos.",
        aHy: "Որովհետև անցած գիշեր պառկեց քնելու ժամը երկուսին։"
      }
    ]
  },
  {
    id: 18,
    part: 2,
    titleEs: "Un partido importante",
    titleHy: "Կարևոր խաղ",
    tenses: ["Indefinido"],
    situationEs: "El sábado, Javier jugó un partido de fútbol. Su equipo ganó tres a uno.",
    situationHy: "Շաբաթ օրը Խավիերը ֆուտբոլի խաղ խաղաց։ Նրա թիմը հաղթեց երեք-մեկ հաշվով։",
    qa: [
      {
        qEs: "¿Qué hizo Javier el sábado?",
        qHy: "Ի՞նչ արեց Խավիերը շաբաթ օրը։",
        aEs: "Javier jugó un partido de fútbol.",
        aHy: "Խավիերը ֆուտբոլի խաղ խաղաց։"
      },
      {
        qEs: "¿Cuál fue el resultado?",
        qHy: "Ինչպիսի՞ն էր արդյունքը։",
        aEs: "Su equipo ganó tres a uno.",
        aHy: "Նրա թիմը հաղթեց երեք-մեկ հաշվով։"
      }
    ]
  },
  {
    id: 19,
    part: 2,
    titleEs: "La casa antigua",
    titleHy: "Հին տունը",
    tenses: ["Imperfecto"],
    situationEs: "Cuando Rosa era pequeña, vivía en una casa grande que tenía un jardín precioso.",
    situationHy: "Երբ Ռոսան փոքր էր, ապրում էր մի մեծ տանը, որը գեղեցիկ այգի ուներ։",
    qa: [
      {
        qEs: "¿Dónde vivía Rosa?",
        qHy: "Որտե՞ղ էր ապրում Ռոսան։",
        aEs: "Rosa vivía en una casa grande.",
        aHy: "Ռոսան ապրում էր մի մեծ տանը։"
      },
      {
        qEs: "¿Qué tenía la casa?",
        qHy: "Ի՞նչ ուներ տունը։",
        aEs: "La casa tenía un jardín precioso.",
        aHy: "Տունը գեղեցիկ այգի ուներ։"
      }
    ]
  },
  {
    id: 20,
    part: 2,
    titleEs: "El regalo",
    titleHy: "Նվերը",
    tenses: ["Indefinido", "Imperfecto"],
    situationEs: "Ayer, Miguel compró un regalo para su madre porque era su cumpleaños.",
    situationHy: "Երեկ Միգելը նվեր գնեց իր մոր համար, որովհետև նրա ծննդյան օրն էր։",
    qa: [
      {
        qEs: "¿Para quién compró Miguel un regalo?",
        qHy: "Ո՞ւմ համար Միգելը նվեր գնեց։",
        aEs: "Miguel compró un regalo para su madre.",
        aHy: "Միգելը նվեր գնեց իր մոր համար։"
      },
      {
        qEs: "¿Por qué compró el regalo?",
        qHy: "Ինչո՞ւ գնեց նվերը։",
        aEs: "Porque era el cumpleaños de su madre.",
        aHy: "Որովհետև նրա մոր ծննդյան օրն էր։"
      }
    ]
  },
  {
    id: 21,
    part: 2,
    titleEs: "La bicicleta",
    titleHy: "Հեծանիվը",
    tenses: ["Imperfecto"],
    situationEs: "Cuando Luis tenía diez años, montaba en bicicleta todos los días después del colegio.",
    situationHy: "Երբ Լուիսը տասը տարեկան էր, ամեն օր դպրոցից հետո հեծանիվ էր քշում։",
    qa: [
      {
        qEs: "¿Qué hacía Luis después del colegio?",
        qHy: "Ի՞նչ էր անում Լուիսը դպրոցից հետո։",
        aEs: "Luis montaba en bicicleta.",
        aHy: "Լուիսը հեծանիվ էր քշում։"
      },
      {
        qEs: "¿Con qué frecuencia montaba en bicicleta?",
        qHy: "Ի՞նչ հաճախականությամբ էր հեծանիվ քշում։",
        aEs: "Montaba en bicicleta todos los días.",
        aHy: "Նա հեծանիվ էր քշում ամեն օր։"
      }
    ]
  },
  {
    id: 22,
    part: 2,
    titleEs: "Una visita inesperada",
    titleHy: "Անսպասելի այց",
    tenses: ["Imperfecto", "Indefinido"],
    situationEs: "Ayer, mientras Carmen estudiaba, su amiga llamó a la puerta.",
    situationHy: "Երեկ, մինչ Կարմենը սովորում էր, նրա ընկերուհին թակեց դուռը։",
    qa: [
      {
        qEs: "¿Qué estaba haciendo Carmen?",
        qHy: "Ի՞նչ էր անում Կարմենը։",
        aEs: "Carmen estaba estudiando.",
        aHy: "Կարմենը սովորում էր։"
      },
      {
        qEs: "¿Qué pasó mientras estudiaba?",
        qHy: "Ի՞նչ պատահեց, մինչ նա սովորում էր։",
        aEs: "Su amiga llamó a la puerta.",
        aHy: "Նրա ընկերուհին թակեց դուռը։"
      }
    ]
  },
  {
    id: 23,
    part: 2,
    titleEs: "El restaurante",
    titleHy: "Ռեստորանը",
    tenses: ["Indefinido"],
    situationEs: "Anoche, Alberto fue a un restaurante italiano. Comió pasta y bebió limonada.",
    situationHy: "Անցած գիշեր Ալբերտոն գնաց իտալական ռեստորան։ Նա կերավ մակարոնեղեն և խմեց լիմոնադ։",
    qa: [
      {
        qEs: "¿A qué tipo de restaurante fue Alberto?",
        qHy: "Ի՞նչ տեսակի ռեստորան գնաց Ալբերտոն։",
        aEs: "Alberto fue a un restaurante italiano.",
        aHy: "Ալբերտոն գնաց իտալական ռեստորան։"
      },
      {
        qEs: "¿Qué comió y bebió?",
        qHy: "Ի՞նչ կերավ և խմեց։",
        aEs: "Comió pasta y bebió limonada.",
        aHy: "Նա կերավ մակարոնեղեն և խմեց լիմոնադ։"
      }
    ]
  },
  {
    id: 24,
    part: 2,
    titleEs: "El examen",
    titleHy: "Քննությունը",
    tenses: ["Perfecto", "Pluscuamperfecto"],
    situationEs: "Hoy, Paula ha aprobado un examen porque había estudiado mucho durante la semana.",
    situationHy: "Այսօր Պաուլան հանձնել է քննությունը, որովհետև շաբաթվա ընթացքում շատ էր պարապել։",
    qa: [
      {
        qEs: "¿Qué ha conseguido Paula?",
        qHy: "Ինչի՞ է հասել Պաուլան։",
        aEs: "Paula ha aprobado un examen.",
        aHy: "Պաուլան հանձնել է քննությունը։"
      },
      {
        qEs: "¿Por qué ha aprobado el examen?",
        qHy: "Ինչո՞ւ է հանձնել քննությունը։",
        aEs: "Porque había estudiado mucho.",
        aHy: "Որովհետև շատ էր պարապել։"
      }
    ]
  },
  {
    id: 25,
    part: 2,
    titleEs: "Las vacaciones",
    titleHy: "Արձակուրդը",
    tenses: ["Indefinido"],
    situationEs: "El verano pasado, Andrea viajó a Valencia con su familia. Pasaron allí cinco días.",
    situationHy: "Անցած ամառ Անդրեան իր ընտանիքի հետ ճամփորդեց Վալենսիա։ Նրանք այնտեղ անցկացրին հինգ օր։",
    qa: [
      {
        qEs: "¿Adónde viajó Andrea?",
        qHy: "Ո՞ւր ճամփորդեց Անդրեան։",
        aEs: "Andrea viajó a Valencia.",
        aHy: "Անդրեան ճամփորդեց Վալենսիա։"
      },
      {
        qEs: "¿Cuántos días pasaron allí?",
        qHy: "Քանի՞ օր անցկացրին այնտեղ։",
        aEs: "Pasaron cinco días.",
        aHy: "Նրանք անցկացրին հինգ օր։"
      }
    ]
  },
  {
    id: 26,
    part: 2,
    titleEs: "El móvil perdido",
    titleHy: "Կորած բջջայինը",
    tenses: ["Indefinido"],
    situationEs: "Ayer, Fernando buscó su móvil durante media hora. Finalmente, lo encontró debajo de la cama.",
    situationHy: "Երեկ Ֆերնանդոն կես ժամ փնտրեց իր բջջայինը։ Վերջապես այն գտավ մահճակալի տակ։",
    qa: [
      {
        qEs: "¿Qué buscaba Fernando?",
        qHy: "Ի՞նչ էր փնտրում Ֆերնանդոն։",
        aEs: "Fernando buscaba su móvil.",
        aHy: "Ֆերնանդոն փնտրում էր իր բջջայինը։"
      },
      {
        qEs: "¿Dónde lo encontró?",
        qHy: "Որտե՞ղ գտավ այն։",
        aEs: "Lo encontró debajo de la cama.",
        aHy: "Նա գտավ այն մահճակալի տակ։"
      }
    ]
  },
  {
    id: 27,
    part: 2,
    titleEs: "La fiesta",
    titleHy: "Խնջույքը",
    tenses: ["Indefinido", "Imperfecto"],
    situationEs: "El viernes pasado, Isabel fue a una fiesta. Había mucha gente y todos bailaban.",
    situationHy: "Անցած ուրբաթ Իսաբելը գնաց խնջույքի։ Շատ մարդիկ կային, և բոլորը պարում էին։",
    qa: [
      {
        qEs: "¿Adónde fue Isabel?",
        qHy: "Ո՞ւր գնաց Իսաբելը։",
        aEs: "Isabel fue a una fiesta.",
        aHy: "Իսաբելը գնաց խնջույքի։"
      },
      {
        qEs: "¿Qué hacía la gente?",
        qHy: "Ի՞նչ էին անում մարդիկ։",
        aEs: "Todos bailaban.",
        aHy: "Բոլորը պարում էին։"
      }
    ]
  },
  {
    id: 28,
    part: 2,
    titleEs: "Una sorpresa",
    titleHy: "Անակնկալ",
    tenses: ["Perfecto"],
    situationEs: "Hoy, Samuel ha recibido una carta de su amigo que vive en Argentina.",
    situationHy: "Այսօր Սամուելը նամակ է ստացել իր ընկերոջից, որն ապրում է Արգենտինայում։",
    qa: [
      {
        qEs: "¿Qué ha recibido Samuel?",
        qHy: "Ի՞նչ է ստացել Սամուելը։",
        aEs: "Samuel ha recibido una carta.",
        aHy: "Սամուելը նամակ է ստացել։"
      },
      {
        qEs: "¿Dónde vive su amigo?",
        qHy: "Որտե՞ղ է ապրում նրա ընկերը։",
        aEs: "Su amigo vive en Argentina.",
        aHy: "Նրա ընկերն ապրում է Արգենտինայում։"
      }
    ]
  },
  {
    id: 29,
    part: 2,
    titleEs: "La cena",
    titleHy: "Ընթրիքը",
    tenses: ["Imperfecto", "Indefinido"],
    situationEs: "Anoche, Patricia quería preparar una tortilla, pero no tenía huevos. Por eso pidió una pizza.",
    situationHy: "Անցած գիշեր Պատրիսիան ուզում էր օմլետ պատրաստել, բայց ձու չուներ։ Այդ պատճառով պիցցա պատվիրեց։",
    qa: [
      {
        qEs: "¿Qué quería preparar Patricia?",
        qHy: "Ի՞նչ էր ուզում պատրաստել Պատրիսիան։",
        aEs: "Patricia quería preparar una tortilla.",
        aHy: "Պատրիսիան ուզում էր օմլետ պատրաստել։"
      },
      {
        qEs: "¿Por qué pidió una pizza?",
        qHy: "Ինչո՞ւ պիցցա պատվիրեց։",
        aEs: "Porque no tenía huevos.",
        aHy: "Որովհետև ձու չուներ։"
      }
    ]
  },
  {
    id: 30,
    part: 2,
    titleEs: "Un día frío",
    titleHy: "Ցուրտ օր",
    tenses: ["Imperfecto", "Indefinido"],
    situationEs: "Ayer hacía mucho frío. Por eso, Nicolás se puso una chaqueta y salió a comprar pan.",
    situationHy: "Երեկ շատ ցուրտ էր։ Այդ պատճառով Նիկոլասը բաճկոն հագավ և դուրս եկավ հաց գնելու։",
    qa: [
      {
        qEs: "¿Qué tiempo hacía ayer?",
        qHy: "Ինչպիսի՞ եղանակ էր երեկ։",
        aEs: "Ayer hacía mucho frío.",
        aHy: "Երեկ շատ ցուրտ էր։"
      },
      {
        qEs: "¿Qué hizo Nicolás antes de salir?",
        qHy: "Ի՞նչ արեց Նիկոլասը դուրս գալուց առաջ։",
        aEs: "Nicolás se puso una chaqueta.",
        aHy: "Նիկոլասը բաճկոն հագավ։"
      }
    ]
  },
  {
    id: 31,
    part: 3,
    titleEs: "El autobús",
    titleHy: "Ավտոբուսը",
    tenses: ["Indefinido", "Pluscuamperfecto"],
    situationEs: "Ayer por la mañana, Roberto salió de casa a las ocho. Cuando llegó a la parada, el autobús ya se había marchado. Tuvo que esperar veinte minutos.",
    situationHy: "Երեկ առավոտյան Ռոբերտոն տնից դուրս եկավ ժամը ութին։ Երբ հասավ կանգառ, ավտոբուսն արդեն գնացել էր։ Նա ստիպված եղավ սպասել քսան րոպե։",
    qa: [
      {
        qEs: "¿A qué hora salió Roberto de casa?",
        qHy: "Ժամը քանիսի՞ն Ռոբերտոն դուրս եկավ տնից։",
        aEs: "Roberto salió de casa a las ocho.",
        aHy: "Ռոբերտոն տնից դուրս եկավ ժամը ութին։"
      },
      {
        qEs: "¿Qué había pasado cuando llegó a la parada?",
        qHy: "Ի՞նչ էր պատահել, երբ նա հասավ կանգառ։",
        aEs: "El autobús ya se había marchado.",
        aHy: "Ավտոբուսն արդեն գնացել էր։"
      },
      {
        qEs: "¿Cuánto tiempo tuvo que esperar?",
        qHy: "Որքա՞ն ժամանակ նա ստիպված եղավ սպասել։",
        aEs: "Tuvo que esperar veinte minutos.",
        aHy: "Նա ստիպված եղավ սպասել քսան րոպե։"
      }
    ]
  },
  {
    id: 32,
    part: 3,
    titleEs: "Un viaje a Madrid",
    titleHy: "Ճամփորդություն դեպի Մադրիդ",
    tenses: ["Indefinido", "Pluscuamperfecto"],
    situationEs: "El año pasado, Sara viajó a Madrid por primera vez. Antes de viajar, había reservado un hotel cerca del centro. Durante su estancia, visitó varios museos.",
    situationHy: "Անցած տարի Սարան առաջին անգամ ճամփորդեց Մադրիդ։ Ճամփորդելուց առաջ նա կենտրոնի մոտ հյուրանոց էր ամրագրել։ Իր մնալու ընթացքում նա այցելեց մի քանի թանգարան։",
    qa: [
      {
        qEs: "¿Cuándo viajó Sara a Madrid?",
        qHy: "Ե՞րբ Սարան ճամփորդեց Մադրիդ։",
        aEs: "Sara viajó a Madrid el año pasado.",
        aHy: "Սարան ճամփորդեց Մադրիդ անցած տարի։"
      },
      {
        qEs: "¿Qué había hecho antes del viaje?",
        qHy: "Ի՞նչ էր արել նա ճամփորդությունից առաջ։",
        aEs: "Había reservado un hotel cerca del centro.",
        aHy: "Նա կենտրոնի մոտ հյուրանոց էր ամրագրել։"
      },
      {
        qEs: "¿Qué visitó en Madrid?",
        qHy: "Ի՞նչ այցելեց Մադրիդում։",
        aEs: "Visitó varios museos.",
        aHy: "Նա այցելեց մի քանի թանգարան։"
      }
    ]
  },
  {
    id: 33,
    part: 3,
    titleEs: "Un cumpleaños especial",
    titleHy: "Հատուկ ծննդյան օր",
    tenses: ["Indefinido", "Pluscuamperfecto"],
    situationEs: "El sábado pasado, Martina celebró su cumpleaños. Sus amigos habían preparado una fiesta sorpresa. Cuando entró en casa, todos empezaron a cantar.",
    situationHy: "Անցած շաբաթ օրը Մարտինան նշեց իր ծննդյան օրը։ Նրա ընկերները անակնկալ խնջույք էին պատրաստել։ Երբ նա մտավ տուն, բոլորը սկսեցին երգել։",
    qa: [
      {
        qEs: "¿Qué celebró Martina?",
        qHy: "Ի՞նչ նշեց Մարտինան։",
        aEs: "Martina celebró su cumpleaños.",
        aHy: "Մարտինան նշեց իր ծննդյան օրը։"
      },
      {
        qEs: "¿Qué habían preparado sus amigos?",
        qHy: "Ի՞նչ էին պատրաստել նրա ընկերները։",
        aEs: "Habían preparado una fiesta sorpresa.",
        aHy: "Նրանք անակնկալ խնջույք էին պատրաստել։"
      },
      {
        qEs: "¿Qué pasó cuando entró en casa?",
        qHy: "Ի՞նչ պատահեց, երբ նա մտավ տուն։",
        aEs: "Todos empezaron a cantar.",
        aHy: "Բոլորը սկսեցին երգել։"
      }
    ]
  },
  {
    id: 34,
    part: 3,
    titleEs: "Un partido de fútbol",
    titleHy: "Ֆուտբոլային խաղ",
    tenses: ["Indefinido", "Imperfecto", "Pluscuamperfecto"],
    situationEs: "El domingo pasado, Hugo jugó un partido muy importante. Al principio estaba nervioso porque nunca había jugado contra ese equipo. Sin embargo, marcó dos goles.",
    situationHy: "Անցած կիրակի Ուգոն շատ կարևոր խաղ խաղաց։ Սկզբում նա նյարդայնացած էր, որովհետև երբեք չէր խաղացել այդ թիմի դեմ։ Սակայն նա երկու գոլ խփեց։",
    qa: [
      {
        qEs: "¿Cómo se sentía Hugo al principio?",
        qHy: "Ինչպե՞ս էր զգում Ուգոն սկզբում։",
        aEs: "Hugo estaba nervioso.",
        aHy: "Ուգոն նյարդայնացած էր։"
      },
      {
        qEs: "¿Por qué estaba nervioso?",
        qHy: "Ինչո՞ւ էր նյարդայնացած։",
        aEs: "Porque nunca había jugado contra ese equipo.",
        aHy: "Որովհետև երբեք չէր խաղացել այդ թիմի դեմ։"
      },
      {
        qEs: "¿Cuántos goles marcó?",
        qHy: "Քանի՞ գոլ խփեց։",
        aEs: "Hugo marcó dos goles.",
        aHy: "Ուգոն երկու գոլ խփեց։"
      }
    ]
  },
  {
    id: 35,
    part: 3,
    titleEs: "El perro desaparecido",
    titleHy: "Անհետացած շունը",
    tenses: ["Indefinido", "Pluscuamperfecto"],
    situationEs: "Ayer, Elena salió al jardín y descubrió que su perro había desaparecido. Lo buscó durante una hora hasta que lo encontró en el jardín de su vecino.",
    situationHy: "Երեկ Ելենան դուրս եկավ այգի և պարզեց, որ իր շունն անհետացել էր։ Նա փնտրեց նրան մեկ ժամ, մինչև գտավ հարևանի այգում։",
    qa: [
      {
        qEs: "¿Qué descubrió Elena?",
        qHy: "Ի՞նչ պարզեց Ելենան։",
        aEs: "Descubrió que su perro había desaparecido.",
        aHy: "Նա պարզեց, որ իր շունն անհետացել էր։"
      },
      {
        qEs: "¿Cuánto tiempo lo buscó?",
        qHy: "Որքա՞ն ժամանակ փնտրեց նրան։",
        aEs: "Lo buscó durante una hora.",
        aHy: "Նա փնտրեց նրան մեկ ժամ։"
      },
      {
        qEs: "¿Dónde lo encontró?",
        qHy: "Որտե՞ղ գտավ նրան։",
        aEs: "Lo encontró en el jardín de su vecino.",
        aHy: "Նա գտավ նրան իր հարևանի այգում։"
      }
    ]
  },
  {
    id: 36,
    part: 3,
    titleEs: "Una tarde de lluvia",
    titleHy: "Անձրևոտ կեսօր",
    tenses: ["Imperfecto", "Indefinido"],
    situationEs: "Ayer por la tarde, mientras Marcos hacía los deberes, empezó a llover. Su hermana estaba leyendo un libro y sus padres preparaban la cena.",
    situationHy: "Երեկ կեսօրից հետո, մինչ Մարկոսը տնային առաջադրանքներն էր անում, սկսեց անձրև գալ։ Նրա քույրը գիրք էր կարդում, իսկ ծնողները ընթրիք էին պատրաստում։",
    qa: [
      {
        qEs: "¿Qué hacía Marcos cuando empezó a llover?",
        qHy: "Ի՞նչ էր անում Մարկոսը, երբ սկսեց անձրև գալ։",
        aEs: "Marcos hacía los deberes.",
        aHy: "Մարկոսը տնային առաջադրանքներն էր անում։"
      },
      {
        qEs: "¿Qué estaba haciendo su hermana?",
        qHy: "Ի՞նչ էր անում նրա քույրը։",
        aEs: "Su hermana estaba leyendo un libro.",
        aHy: "Նրա քույրը գիրք էր կարդում։"
      },
      {
        qEs: "¿Qué hacían sus padres?",
        qHy: "Ի՞նչ էին անում նրա ծնողները։",
        aEs: "Sus padres preparaban la cena.",
        aHy: "Նրա ծնողները ընթրիք էին պատրաստում։"
      }
    ]
  },
  {
    id: 37,
    part: 3,
    titleEs: "Una antigua amistad",
    titleHy: "Հին ընկերություն",
    tenses: ["Indefinido", "Pluscuamperfecto"],
    situationEs: "La semana pasada, Claudia se encontró con una amiga de la infancia. No se habían visto durante ocho años. Decidieron tomar un café y hablaron durante dos horas.",
    situationHy: "Անցած շաբաթ Կլաուդիան հանդիպեց մանկության ընկերուհուն։ Նրանք ութ տարի չէին տեսնվել։ Որոշեցին սուրճ խմել և երկու ժամ զրուցեցին։",
    qa: [
      {
        qEs: "¿Con quién se encontró Claudia?",
        qHy: "Ո՞ւմ հանդիպեց Կլաուդիան։",
        aEs: "Claudia se encontró con una amiga de la infancia.",
        aHy: "Կլաուդիան հանդիպեց մանկության ընկերուհուն։"
      },
      {
        qEs: "¿Cuánto tiempo llevaban sin verse?",
        qHy: "Որքա՞ն ժամանակ չէին տեսնվել։",
        aEs: "Llevaban ocho años sin verse.",
        aHy: "Նրանք ութ տարի չէին տեսնվել։"
      },
      {
        qEs: "¿Qué hicieron juntas?",
        qHy: "Ի՞նչ արեցին միասին։",
        aEs: "Tomaron un café y hablaron durante dos horas.",
        aHy: "Նրանք սուրճ խմեցին և երկու ժամ զրուցեցին։"
      }
    ]
  },
  {
    id: 38,
    part: 3,
    titleEs: "El examen difícil",
    titleHy: "Դժվար քննությունը",
    tenses: ["Imperfecto", "Pluscuamperfecto", "Indefinido"],
    situationEs: "Ayer, Daniel tenía un examen de matemáticas. Estaba preocupado porque no había estudiado suficiente. Sin embargo, durante el examen recordó casi todas las respuestas.",
    situationHy: "Երեկ Դանիելը մաթեմատիկայի քննություն ուներ։ Նա անհանգստացած էր, որովհետև բավարար չափով չէր պարապել։ Սակայն քննության ընթացքում հիշեց գրեթե բոլոր պատասխանները։",
    qa: [
      {
        qEs: "¿Qué examen tenía Daniel?",
        qHy: "Ի՞նչ քննություն ուներ Դանիելը։",
        aEs: "Daniel tenía un examen de matemáticas.",
        aHy: "Դանիելը մաթեմատիկայի քննություն ուներ։"
      },
      {
        qEs: "¿Por qué estaba preocupado?",
        qHy: "Ինչո՞ւ էր անհանգստացած։",
        aEs: "Porque no había estudiado suficiente.",
        aHy: "Որովհետև բավարար չափով չէր պարապել։"
      },
      {
        qEs: "¿Qué pasó durante el examen?",
        qHy: "Ի՞նչ պատահեց քննության ընթացքում։",
        aEs: "Recordó casi todas las respuestas.",
        aHy: "Նա հիշեց գրեթե բոլոր պատասխանները։"
      }
    ]
  },
  {
    id: 39,
    part: 3,
    titleEs: "Una cena familiar",
    titleHy: "Ընտանեկան ընթրիք",
    tenses: ["Indefinido", "Pluscuamperfecto"],
    situationEs: "El domingo pasado, la familia de Lucía se reunió en casa de sus abuelos. Su madre había preparado una tarta de chocolate y su padre cocinó una paella.",
    situationHy: "Անցած կիրակի Լուսիայի ընտանիքը հավաքվեց նրա տատիկի ու պապիկի տանը։ Նրա մայրը շոկոլադե տորթ էր պատրաստել, իսկ հայրը պաելյա եփեց։",
    qa: [
      {
        qEs: "¿Dónde se reunió la familia?",
        qHy: "Որտե՞ղ հավաքվեց ընտանիքը։",
        aEs: "Se reunió en casa de los abuelos de Lucía.",
        aHy: "Հավաքվեց Լուսիայի տատիկի ու պապիկի տանը։"
      },
      {
        qEs: "¿Qué había preparado su madre?",
        qHy: "Ի՞նչ էր պատրաստել նրա մայրը։",
        aEs: "Había preparado una tarta de chocolate.",
        aHy: "Նա շոկոլադե տորթ էր պատրաստել։"
      },
      {
        qEs: "¿Qué cocinó su padre?",
        qHy: "Ի՞նչ եփեց նրա հայրը։",
        aEs: "Su padre cocinó una paella.",
        aHy: "Նրա հայրը պաելյա եփեց։"
      }
    ]
  },
  {
    id: 40,
    part: 3,
    titleEs: "Un día en el aeropuerto",
    titleHy: "Մի օր օդանավակայանում",
    tenses: ["Indefinido", "Pluscuamperfecto"],
    situationEs: "Ayer, Pablo llegó al aeropuerto a las seis de la mañana. Había preparado su maleta la noche anterior. Después de pasar el control de seguridad, desayunó en una cafetería.",
    situationHy: "Երեկ Պաբլոն օդանավակայան հասավ առավոտյան ժամը վեցին։ Նա իր ճամպրուկը պատրաստել էր նախորդ գիշեր։ Անվտանգության ստուգումն անցնելուց հետո նա նախաճաշեց սրճարանում։",
    qa: [
      {
        qEs: "¿A qué hora llegó Pablo al aeropuerto?",
        qHy: "Ժամը քանիսի՞ն Պաբլոն հասավ օդանավակայան։",
        aEs: "Pablo llegó a las seis de la mañana.",
        aHy: "Պաբլոն հասավ առավոտյան ժամը վեցին։"
      },
      {
        qEs: "¿Cuándo había preparado su maleta?",
        qHy: "Ե՞րբ էր պատրաստել իր ճամպրուկը։",
        aEs: "Había preparado su maleta la noche anterior.",
        aHy: "Նա իր ճամպրուկը պատրաստել էր նախորդ գիշեր։"
      },
      {
        qEs: "¿Qué hizo después del control de seguridad?",
        qHy: "Ի՞նչ արեց անվտանգության ստուգումից հետո։",
        aEs: "Desayunó en una cafetería.",
        aHy: "Նախաճաշեց սրճարանում։"
      }
    ]
  },
  {
    id: 41,
    part: 4,
    titleEs: "Un fin de semana inesperado",
    titleHy: "Անսպասելի հանգստյան օրեր",
    tenses: ["Imperfecto", "Indefinido", "Pluscuamperfecto"],
    situationEs: "El sábado pasado, Adrián quería ir al cine con sus amigos, pero cuando salió de casa empezó a llover muy fuerte. Como había olvidado su paraguas, volvió a casa y decidió ver una película por internet.",
    situationHy: "Անցած շաբաթ օրը Ադրիանն ուզում էր ընկերների հետ կինո գնալ, բայց երբ տնից դուրս եկավ, շատ ուժեղ անձրև սկսվեց։ Քանի որ մոռացել էր անձրևանոցը, վերադարձավ տուն և որոշեց համացանցով ֆիլմ դիտել։",
    qa: [
      {
        qEs: "¿Qué quería hacer Adrián?",
        qHy: "Ի՞նչ էր ուզում անել Ադրիանը։",
        aEs: "Adrián quería ir al cine con sus amigos.",
        aHy: "Ադրիանն ուզում էր ընկերների հետ կինո գնալ։"
      },
      {
        qEs: "¿Qué pasó cuando salió de casa?",
        qHy: "Ի՞նչ պատահեց, երբ տնից դուրս եկավ։",
        aEs: "Empezó a llover muy fuerte.",
        aHy: "Շատ ուժեղ անձրև սկսվեց։"
      },
      {
        qEs: "¿Qué había olvidado Adrián?",
        qHy: "Ի՞նչ էր մոռացել Ադրիանը։",
        aEs: "Había olvidado su paraguas.",
        aHy: "Նա մոռացել էր իր անձրևանոցը։"
      },
      {
        qEs: "¿Qué decidió hacer finalmente?",
        qHy: "Ի՞նչ որոշեց անել վերջում։",
        aEs: "Decidió ver una película por internet.",
        aHy: "Նա որոշեց համացանցով ֆիլմ դիտել։"
      }
    ]
  },
  {
    id: 42,
    part: 4,
    titleEs: "Una visita al médico",
    titleHy: "Այց բժշկին",
    tenses: ["Indefinido", "Pluscuamperfecto"],
    situationEs: "Ayer por la mañana, Cristina se despertó con dolor de cabeza. La noche anterior había dormido solamente cuatro horas. Fue al médico, que le recomendó descansar y beber mucha agua.",
    situationHy: "Երեկ առավոտյան Կրիստինան արթնացավ գլխացավով։ Նախորդ գիշեր նա քնել էր ընդամենը չորս ժամ։ Նա գնաց բժշկի, որը խորհուրդ տվեց հանգստանալ և շատ ջուր խմել։",
    qa: [
      {
        qEs: "¿Cómo se sentía Cristina por la mañana?",
        qHy: "Ինչպե՞ս էր զգում Կրիստինան առավոտյան։",
        aEs: "Cristina tenía dolor de cabeza.",
        aHy: "Կրիստինան գլխացավ ուներ։"
      },
      {
        qEs: "¿Cuántas horas había dormido?",
        qHy: "Քանի՞ ժամ էր քնել։",
        aEs: "Había dormido solamente cuatro horas.",
        aHy: "Նա քնել էր ընդամենը չորս ժամ։"
      },
      {
        qEs: "¿Adónde fue?",
        qHy: "Ո՞ւր գնաց։",
        aEs: "Fue al médico.",
        aHy: "Նա գնաց բժշկի։"
      },
      {
        qEs: "¿Qué le recomendó el médico?",
        qHy: "Ի՞նչ խորհուրդ տվեց նրան բժիշկը։",
        aEs: "Le recomendó descansar y beber mucha agua.",
        aHy: "Խորհուրդ տվեց հանգստանալ և շատ ջուր խմել։"
      }
    ]
  },
  {
    id: 43,
    part: 4,
    titleEs: "Un partido inolvidable",
    titleHy: "Անմոռանալի խաղ",
    tenses: ["Indefinido", "Imperfecto"],
    situationEs: "El domingo pasado, Martín participó en un torneo de fútbol. Su equipo perdía dos a cero durante la primera parte. En la segunda parte, Martín marcó un gol y dio dos asistencias. Finalmente, ganaron tres a dos.",
    situationHy: "Անցած կիրակի Մարտինը մասնակցեց ֆուտբոլի մրցաշարի։ Առաջին խաղակեսում նրա թիմը պարտվում էր երկու-զրո հաշվով։ Երկրորդ խաղակեսում Մարտինը մեկ գոլ խփեց և երկու գոլային փոխանցում կատարեց։ Վերջում նրանք հաղթեցին երեք-երկու հաշվով։",
    qa: [
      {
        qEs: "¿En qué participó Martín?",
        qHy: "Ինչի՞ն մասնակցեց Մարտինը։",
        aEs: "Martín participó en un torneo de fútbol.",
        aHy: "Մարտինը մասնակցեց ֆուտբոլի մրցաշարի։"
      },
      {
        qEs: "¿Cuál era el resultado en la primera parte?",
        qHy: "Ինչպիսի՞ն էր հաշիվը առաջին խաղակեսում։",
        aEs: "Su equipo perdía dos a cero.",
        aHy: "Նրա թիմը պարտվում էր երկու-զրո հաշվով։"
      },
      {
        qEs: "¿Qué hizo Martín en la segunda parte?",
        qHy: "Ի՞նչ արեց Մարտինը երկրորդ խաղակեսում։",
        aEs: "Marcó un gol y dio dos asistencias.",
        aHy: "Նա մեկ գոլ խփեց և երկու գոլային փոխանցում կատարեց։"
      },
      {
        qEs: "¿Cómo terminó el partido?",
        qHy: "Ինչպե՞ս ավարտվեց խաղը։",
        aEs: "Su equipo ganó tres a dos.",
        aHy: "Նրա թիմը հաղթեց երեք-երկու հաշվով։"
      }
    ]
  },
  {
    id: 44,
    part: 4,
    titleEs: "El hotel equivocado",
    titleHy: "Սխալ հյուրանոցը",
    tenses: ["Indefinido", "Pluscuamperfecto"],
    situationEs: "El verano pasado, Laura viajó a Barcelona. Antes del viaje había reservado una habitación en un hotel. Sin embargo, cuando llegó, descubrió que había reservado por error una habitación en otro hotel con un nombre parecido.",
    situationHy: "Անցած ամառ Լաուրան ճամփորդեց Բարսելոնա։ Ճամփորդությունից առաջ նա սենյակ էր ամրագրել մի հյուրանոցում։ Սակայն երբ հասավ, պարզեց, որ սխալմամբ սենյակ էր ամրագրել նման անուն ունեցող մեկ այլ հյուրանոցում։",
    qa: [
      {
        qEs: "¿Adónde viajó Laura?",
        qHy: "Ո՞ւր ճամփորդեց Լաուրան։",
        aEs: "Laura viajó a Barcelona.",
        aHy: "Լաուրան ճամփորդեց Բարսելոնա։"
      },
      {
        qEs: "¿Qué había hecho antes del viaje?",
        qHy: "Ի՞նչ էր արել նա ճամփորդությունից առաջ։",
        aEs: "Había reservado una habitación en un hotel.",
        aHy: "Նա սենյակ էր ամրագրել մի հյուրանոցում։"
      },
      {
        qEs: "¿Qué descubrió al llegar?",
        qHy: "Ի՞նչ պարզեց հասնելուն պես։",
        aEs: "Descubrió que había reservado una habitación en otro hotel.",
        aHy: "Պարզեց, որ սենյակ էր ամրագրել մեկ այլ հյուրանոցում։"
      },
      {
        qEs: "¿Por qué había cometido ese error?",
        qHy: "Ինչո՞ւ էր թույլ տվել այդ սխալը։",
        aEs: "Porque los hoteles tenían nombres parecidos.",
        aHy: "Որովհետև հյուրանոցները նման անուններ ունեին։"
      }
    ]
  },
  {
    id: 45,
    part: 4,
    titleEs: "La infancia de Alejandro",
    titleHy: "Ալեխանդրոյի մանկությունը",
    tenses: ["Imperfecto"],
    situationEs: "Cuando Alejandro tenía doce años, vivía en un pueblo cerca de Valencia. Todos los días iba al colegio caminando con su mejor amigo. Después de las clases, jugaban al fútbol hasta que sus padres los llamaban para cenar.",
    situationHy: "Երբ Ալեխանդրոն տասներկու տարեկան էր, ապրում էր Վալենսիայի մոտ գտնվող մի գյուղում։ Ամեն օր նա իր լավագույն ընկերոջ հետ ոտքով էր գնում դպրոց։ Դասերից հետո նրանք ֆուտբոլ էին խաղում, մինչև ծնողները կանչում էին ընթրելու։",
    qa: [
      {
        qEs: "¿Dónde vivía Alejandro cuando tenía doce años?",
        qHy: "Որտե՞ղ էր ապրում Ալեխանդրոն, երբ տասներկու տարեկան էր։",
        aEs: "Vivía en un pueblo cerca de Valencia.",
        aHy: "Ապրում էր Վալենսիայի մոտ գտնվող մի գյուղում։"
      },
      {
        qEs: "¿Cómo iba al colegio?",
        qHy: "Ինչպե՞ս էր գնում դպրոց։",
        aEs: "Iba al colegio caminando.",
        aHy: "Դպրոց էր գնում ոտքով։"
      },
      {
        qEs: "¿Con quién iba al colegio?",
        qHy: "Ո՞ւմ հետ էր գնում դպրոց։",
        aEs: "Iba con su mejor amigo.",
        aHy: "Գնում էր իր լավագույն ընկերոջ հետ։"
      },
      {
        qEs: "¿Qué hacían después de las clases?",
        qHy: "Ի՞նչ էին անում դասերից հետո։",
        aEs: "Jugaban al fútbol hasta que sus padres los llamaban para cenar.",
        aHy: "Ֆուտբոլ էին խաղում, մինչև ծնողները կանչում էին ընթրելու։"
      }
    ]
  },
  {
    id: 46,
    part: 4,
    titleEs: "Un regalo inesperado",
    titleHy: "Անսպասելի նվեր",
    tenses: ["Perfecto", "Imperfecto", "Pluscuamperfecto"],
    situationEs: "Esta mañana, Valeria ha recibido un paquete de su hermano. Él vive en Alemania desde hace tres años. Dentro del paquete había un libro que Valeria había querido comprar durante mucho tiempo, pero que nunca había encontrado en las tiendas.",
    situationHy: "Այսօր առավոտյան Վալերիան ծանրոց է ստացել իր եղբորից։ Նա արդեն երեք տարի է՝ ապրում է Գերմանիայում։ Ծանրոցի ներսում կար մի գիրք, որը Վալերիան երկար ժամանակ ուզում էր գնել, բայց երբեք չէր գտել խանութներում։",
    qa: [
      {
        qEs: "¿Qué ha recibido Valeria esta mañana?",
        qHy: "Ի՞նչ է ստացել Վալերիան այսօր առավոտյան։",
        aEs: "Ha recibido un paquete de su hermano.",
        aHy: "Նա ծանրոց է ստացել իր եղբորից։"
      },
      {
        qEs: "¿Dónde vive su hermano?",
        qHy: "Որտե՞ղ է ապրում նրա եղբայրը։",
        aEs: "Su hermano vive en Alemania.",
        aHy: "Նրա եղբայրն ապրում է Գերմանիայում։"
      },
      {
        qEs: "¿Qué había dentro del paquete?",
        qHy: "Ի՞նչ կար ծանրոցի ներսում։",
        aEs: "Había un libro.",
        aHy: "Մի գիրք կար։"
      },
      {
        qEs: "¿Por qué era especial ese libro?",
        qHy: "Ինչո՞ւ էր հատուկ այդ գիրքը։",
        aEs: "Porque Valeria había querido comprarlo durante mucho tiempo, pero nunca lo había encontrado.",
        aHy: "Որովհետև Վալերիան երկար ժամանակ ուզում էր գնել այն, բայց երբեք չէր գտել։"
      }
    ]
  },
  {
    id: 47,
    part: 4,
    titleEs: "Una mañana en el colegio",
    titleHy: "Մի առավոտ դպրոցում",
    tenses: ["Indefinido", "Imperfecto", "Pluscuamperfecto"],
    situationEs: "Ayer, cuando Samuel llegó al colegio, sus compañeros ya habían entrado en clase. Se había despertado tarde porque no había oído el despertador. Cuando entró en el aula, la profesora estaba explicando una nueva lección.",
    situationHy: "Երեկ, երբ Սամուելը հասավ դպրոց, նրա համադասարանցիներն արդեն մտել էին դասարան։ Նա ուշ էր արթնացել, որովհետև չէր լսել զարթուցիչը։ Երբ մտավ դասասենյակ, ուսուցչուհին բացատրում էր նոր դասը։",
    qa: [
      {
        qEs: "¿Qué habían hecho sus compañeros cuando llegó Samuel?",
        qHy: "Ի՞նչ էին արել նրա համադասարանցիները, երբ Սամուելը հասավ։",
        aEs: "Ya habían entrado en clase.",
        aHy: "Նրանք արդեն մտել էին դասարան։"
      },
      {
        qEs: "¿Por qué se había despertado tarde?",
        qHy: "Ինչո՞ւ էր ուշ արթնացել։",
        aEs: "Porque no había oído el despertador.",
        aHy: "Որովհետև չէր լսել զարթուցիչը։"
      },
      {
        qEs: "¿Qué estaba haciendo la profesora?",
        qHy: "Ի՞նչ էր անում ուսուցչուհին։",
        aEs: "La profesora estaba explicando una nueva lección.",
        aHy: "Ուսուցչուհին բացատրում էր նոր դասը։"
      },
      {
        qEs: "¿Llegó Samuel antes o después de sus compañeros?",
        qHy: "Սամուելը համադասարանցիներից առա՞ջ, թե՞ հետո հասավ։",
        aEs: "Samuel llegó después de sus compañeros.",
        aHy: "Սամուելը հասավ իր համադասարանցիներից հետո։"
      }
    ]
  },
  {
    id: 48,
    part: 4,
    titleEs: "Un viaje en tren",
    titleHy: "Ճամփորդություն գնացքով",
    tenses: ["Indefinido", "Imperfecto", "Pluscuamperfecto"],
    situationEs: "El viernes pasado, Natalia viajó en tren para visitar a su prima. Había comprado el billete dos semanas antes. Durante el viaje, escuchó música y leyó una novela. Cuando llegó a la estación, su prima ya la estaba esperando.",
    situationHy: "Անցած ուրբաթ Նատալիան գնացքով ճամփորդեց՝ իր զարմուհուն այցելելու համար։ Նա տոմսը գնել էր երկու շաբաթ առաջ։ Ճանապարհորդության ընթացքում երաժշտություն լսեց և վեպ կարդաց։ Երբ հասավ կայարան, զարմուհին արդեն սպասում էր նրան։",
    qa: [
      {
        qEs: "¿A quién fue a visitar Natalia?",
        qHy: "Ո՞ւմ գնաց այցելելու Նատալիան։",
        aEs: "Fue a visitar a su prima.",
        aHy: "Գնաց այցելելու իր զարմուհուն։"
      },
      {
        qEs: "¿Cuándo había comprado el billete?",
        qHy: "Ե՞րբ էր գնել տոմսը։",
        aEs: "Lo había comprado dos semanas antes.",
        aHy: "Գնել էր երկու շաբաթ առաջ։"
      },
      {
        qEs: "¿Qué hizo durante el viaje?",
        qHy: "Ի՞նչ արեց ճանապարհորդության ընթացքում։",
        aEs: "Escuchó música y leyó una novela.",
        aHy: "Երաժշտություն լսեց և վեպ կարդաց։"
      },
      {
        qEs: "¿Quién la estaba esperando en la estación?",
        qHy: "Ո՞վ էր սպասում նրան կայարանում։",
        aEs: "Su prima la estaba esperando.",
        aHy: "Նրա զարմուհին էր սպասում նրան։"
      }
    ]
  },
  {
    id: 49,
    part: 4,
    titleEs: "El restaurante nuevo",
    titleHy: "Նոր ռեստորանը",
    tenses: ["Indefinido", "Pluscuamperfecto"],
    situationEs: "Anoche, Sergio fue con su familia a un restaurante que había abierto hacía solo una semana. Nunca habían estado allí. El camarero les recomendó varios platos y ellos pidieron pescado, ensalada y una tarta de chocolate. Al final, todos quedaron muy satisfechos.",
    situationHy: "Անցած գիշեր Սերխիոն իր ընտանիքի հետ գնաց մի ռեստորան, որը բացվել էր ընդամենը մեկ շաբաթ առաջ։ Նրանք երբեք այնտեղ չէին եղել։ Մատուցողը նրանց խորհուրդ տվեց մի քանի ուտեստ, և նրանք պատվիրեցին ձուկ, աղցան և շոկոլադե տորթ։ Վերջում բոլորը շատ գոհ մնացին։",
    qa: [
      {
        qEs: "¿Con quién fue Sergio al restaurante?",
        qHy: "Ո՞ւմ հետ գնաց Սերխիոն ռեստորան։",
        aEs: "Sergio fue con su familia.",
        aHy: "Սերխիոն գնաց իր ընտանիքի հետ։"
      },
      {
        qEs: "¿Cuánto tiempo llevaba abierto el restaurante?",
        qHy: "Որքա՞ն ժամանակ էր բացված ռեստորանը։",
        aEs: "Llevaba abierto una semana.",
        aHy: "Բացված էր մեկ շաբաթ։"
      },
      {
        qEs: "¿Qué había recomendado el camarero?",
        qHy: "Ի՞նչ էր խորհուրդ տվել մատուցողը։",
        aEs: "El camarero les había recomendado varios platos.",
        aHy: "Մատուցողը նրանց մի քանի ուտեստ էր խորհուրդ տվել։"
      },
      {
        qEs: "¿Qué pidieron?",
        qHy: "Ի՞նչ պատվիրեցին։",
        aEs: "Pidieron pescado, ensalada y una tarta de chocolate.",
        aHy: "Պատվիրեցին ձուկ, աղցան և շոկոլադե տորթ։"
      },
      {
        qEs: "¿Cómo se sintieron al final?",
        qHy: "Ինչպե՞ս զգացին վերջում։",
        aEs: "Todos quedaron muy satisfechos.",
        aHy: "Բոլորը շատ գոհ մնացին։"
      }
    ]
  },
  {
    id: 50,
    part: 4,
    titleEs: "Un día lleno de sorpresas",
    titleHy: "Անակնկալներով լի օր",
    tenses: ["Indefinido", "Imperfecto", "Pluscuamperfecto"],
    situationEs: "El sábado pasado, Federico se levantó temprano porque había prometido ayudar a su amigo con una mudanza. Cuando llegó a casa de su amigo, descubrió que este ya había terminado casi todo el trabajo. Por eso, decidieron ir juntos a desayunar. Mientras estaban en una cafetería, encontraron a un antiguo compañero de colegio al que no veían desde hacía diez años. Pasaron toda la mañana hablando de sus recuerdos y contando historias divertidas.",
    situationHy: "Անցած շաբաթ օրը Ֆեդերիկոն վաղ արթնացավ, որովհետև խոստացել էր օգնել իր ընկերոջը տեղափոխության հարցում։ Երբ հասավ ընկերոջ տուն, պարզեց, որ նա արդեն գրեթե ամբողջ գործն ավարտել էր։ Այդ պատճառով որոշեցին միասին գնալ նախաճաշելու։ Մինչ սրճարանում էին, հանդիպեցին դպրոցի մի հին ընկերոջ, որին տասը տարի չէին տեսել։ Ամբողջ առավոտը անցկացրին՝ խոսելով իրենց հիշողությունների մասին և զվարճալի պատմություններ պատմելով։",
    qa: [
      {
        qEs: "¿Por qué se levantó Federico temprano?",
        qHy: "Ինչո՞ւ Ֆեդերիկոն վաղ արթնացավ։",
        aEs: "Porque había prometido ayudar a su amigo con una mudanza.",
        aHy: "Որովհետև խոստացել էր օգնել իր ընկերոջը տեղափոխության հարցում։"
      },
      {
        qEs: "¿Qué había hecho su amigo antes de que Federico llegara?",
        qHy: "Ի՞նչ էր արել նրա ընկերը, մինչև Ֆեդերիկոյի գալը։",
        aEs: "Ya había terminado casi todo el trabajo.",
        aHy: "Նա արդեն գրեթե ամբողջ գործն ավարտել էր։"
      },
      {
        qEs: "¿Qué decidieron hacer?",
        qHy: "Ի՞նչ որոշեցին անել։",
        aEs: "Decidieron ir juntos a desayunar.",
        aHy: "Որոշեցին միասին գնալ նախաճաշելու։"
      },
      {
        qEs: "¿A quién encontraron en la cafetería?",
        qHy: "Ո՞ւմ հանդիպեցին սրճարանում։",
        aEs: "Encontraron a un antiguo compañero de colegio.",
        aHy: "Հանդիպեցին դպրոցի մի հին ընկերոջ։"
      },
      {
        qEs: "¿Cuánto tiempo hacía que no veían a ese compañero?",
        qHy: "Որքա՞ն ժամանակ չէին տեսել այդ ընկերոջը։",
        aEs: "Hacía diez años que no lo veían.",
        aHy: "Տասը տարի էր, ինչ նրան չէին տեսել։"
      },
      {
        qEs: "¿Cómo pasaron la mañana?",
        qHy: "Ինչպե՞ս անցկացրին առավոտը։",
        aEs: "Pasaron la mañana hablando de sus recuerdos y contando historias divertidas.",
        aHy: "Առավոտը անցկացրին՝ խոսելով իրենց հիշողությունների մասին և զվարճալի պատմություններ պատմելով։"
      }
    ]
  }
];
