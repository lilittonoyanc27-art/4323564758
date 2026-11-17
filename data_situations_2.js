export const PART_B_META = {
  titleEs: "Escucha y responde — Los tiempos del pasado (51–100)",
  titleHy: "Լսիր և պատասխանիր — Անցյալ ժամանակներ (51–100)",
  level: "A2–B1",
  subtitleHy:
    "50 նոր իրավիճակ հարցերով ու պատասխաններով (51–100)՝ Pretérito Perfecto, Indefinido, Imperfecto և Pluscuamperfecto։ Ուսուցիչը բարձրաձայն կարդում է իրավիճակը, ապա տալիս հարցերը։ Աշակերտը պատասխանում է ամբողջական նախադասություններով՝ չնայելով տեքստին։",
  goalTitleHy: "Պրակտիկայի նպատակը",
  goalHy:
    "Որպեսզի աշակերտը ոչ միայն մտապահի պատասխանները, այլև սովորի լսելով տարբերել չորս անցյալ ժամանակները և պատասխանել առանց հուշումների։",
  parts: [
    { id: 1, labelEs: "Parte 1 — Situaciones cortas (51–65)", labelHy: "Մաս 1 · Կարճ իրավիճակներ (51–65)" },
    { id: 2, labelEs: "Parte 2 — Dos preguntas por situación (66–80)", labelHy: "Մաս 2 · Երկու հարց (66–80)" },
    { id: 3, labelEs: "Parte 3 — Situaciones de dificultad media (81–90)", labelHy: "Մաս 3 · Միջին բարդություն (81–90)" },
    { id: 4, labelEs: "Parte 4 — Situaciones largas, comprensión auditiva (91–100)", labelHy: "Մաս 4 · Երկար իրավիճակներ (91–100)" },
    { id: 5, labelEs: "Reto final — Preguntas personales (1–10)", labelHy: "Վերջնական մարտահրավեր · Անձնական հարցեր" }
  ]
};

export const SITUATIONS_PART_B = [
  {
    id: 51,
    part: 1,
    titleEs: "La tienda",
    titleHy: "Խանութը",
    tenses: ["Indefinido", "Imperfecto"],
    situationEs: "Ayer, Mario compró una camiseta azul.",
    situationHy: "Երեկ Մարիոն կապույտ վերնաշապիկ գնեց։",
    qa: [
      {
        qEs: "¿De qué color era la camiseta?",
        qHy: "Ի՞նչ գույնի էր վերնաշապիկը։",
        aEs: "La camiseta era azul.",
        aHy: "Վերնաշապիկը կապույտ էր։"
      }
    ]
  },
  {
    id: 52,
    part: 1,
    titleEs: "El desayuno",
    titleHy: "Նախաճաշը",
    tenses: ["Perfecto"],
    situationEs: "Esta mañana, Paula ha desayunado con su hermana.",
    situationHy: "Այսօր առավոտյան Պաուլան նախաճաշել է իր քրոջ հետ։",
    qa: [
      {
        qEs: "¿Con quién ha desayunado Paula?",
        qHy: "Ո՞ւմ հետ է նախաճաշել Պաուլան։",
        aEs: "Paula ha desayunado con su hermana.",
        aHy: "Պաուլան նախաճաշել է իր քրոջ հետ։"
      }
    ]
  },
  {
    id: 53,
    part: 1,
    titleEs: "El colegio",
    titleHy: "Դպրոցը",
    tenses: ["Imperfecto"],
    situationEs: "Cuando Tomás era pequeño, estudiaba en Madrid.",
    situationHy: "Երբ Տոմասը փոքր էր, սովորում էր Մադրիդում։",
    qa: [
      {
        qEs: "¿Dónde estudiaba Tomás?",
        qHy: "Որտե՞ղ էր սովորում Տոմասը։",
        aEs: "Tomás estudiaba en Madrid.",
        aHy: "Տոմասը սովորում էր Մադրիդում։"
      }
    ]
  },
  {
    id: 54,
    part: 1,
    titleEs: "El partido",
    titleHy: "Խաղը",
    tenses: ["Indefinido"],
    situationEs: "El domingo pasado, Alberto marcó tres goles.",
    situationHy: "Անցած կիրակի Ալբերտոն երեք գոլ խփեց։",
    qa: [
      {
        qEs: "¿Cuántos goles marcó Alberto?",
        qHy: "Քանի՞ գոլ խփեց Ալբերտոն։",
        aEs: "Alberto marcó tres goles.",
        aHy: "Ալբերտոն երեք գոլ խփեց։"
      }
    ]
  },
  {
    id: 55,
    part: 1,
    titleEs: "El libro",
    titleHy: "Գիրքը",
    tenses: ["Perfecto"],
    situationEs: "Hoy, Elena ha leído veinte páginas de una novela.",
    situationHy: "Այսօր Ելենան կարդացել է վեպի քսան էջ։",
    qa: [
      {
        qEs: "¿Cuántas páginas ha leído Elena?",
        qHy: "Քանի՞ էջ է կարդացել Ելենան։",
        aEs: "Elena ha leído veinte páginas.",
        aHy: "Ելենան կարդացել է քսան էջ։"
      }
    ]
  },
  {
    id: 56,
    part: 1,
    titleEs: "La bicicleta",
    titleHy: "Հեծանիվը",
    tenses: ["Imperfecto"],
    situationEs: "Antes, Claudia iba al trabajo en bicicleta.",
    situationHy: "Առաջ Կլաուդիան աշխատանքի էր գնում հեծանիվով։",
    qa: [
      {
        qEs: "¿Cómo iba Claudia al trabajo?",
        qHy: "Ինչպե՞ս էր Կլաուդիան գնում աշխատանքի։",
        aEs: "Claudia iba al trabajo en bicicleta.",
        aHy: "Կլաուդիան աշխատանքի էր գնում հեծանիվով։"
      }
    ]
  },
  {
    id: 57,
    part: 1,
    titleEs: "El cumpleaños",
    titleHy: "Ծննդյան օրը",
    tenses: ["Indefinido"],
    situationEs: "Ayer, Daniel recibió un reloj de su abuelo.",
    situationHy: "Երեկ Դանիելը ժամացույց ստացավ իր պապիկից։",
    qa: [
      {
        qEs: "¿Quién le regaló el reloj a Daniel?",
        qHy: "Ո՞վ նվիրեց ժամացույցը Դանիելին։",
        aEs: "Su abuelo le regaló el reloj.",
        aHy: "Նրա պապիկը նվիրեց ժամացույցը։"
      }
    ]
  },
  {
    id: 58,
    part: 1,
    titleEs: "El cine",
    titleHy: "Կինոն",
    tenses: ["Indefinido"],
    situationEs: "Anoche, Julia vio una película de misterio.",
    situationHy: "Անցած գիշեր Խուլիան դետեկտիվ ֆիլմ դիտեց։",
    qa: [
      {
        qEs: "¿Qué tipo de película vio Julia?",
        qHy: "Ի՞նչ տեսակի ֆիլմ դիտեց Խուլիան։",
        aEs: "Julia vio una película de misterio.",
        aHy: "Խուլիան դետեկտիվ ֆիլմ դիտեց։"
      }
    ]
  },
  {
    id: 59,
    part: 1,
    titleEs: "La música",
    titleHy: "Երաժշտությունը",
    tenses: ["Imperfecto"],
    situationEs: "Cuando Sergio tenía quince años, tocaba la guitarra.",
    situationHy: "Երբ Սերխիոն տասնհինգ տարեկան էր, կիթառ էր նվագում։",
    qa: [
      {
        qEs: "¿Qué instrumento tocaba Sergio?",
        qHy: "Ի՞նչ գործիք էր նվագում Սերխիոն։",
        aEs: "Sergio tocaba la guitarra.",
        aHy: "Սերխիոն կիթառ էր նվագում։"
      }
    ]
  },
  {
    id: 60,
    part: 1,
    titleEs: "El supermercado",
    titleHy: "Սուպերմարկետը",
    tenses: ["Perfecto"],
    situationEs: "Esta tarde, Laura ha comprado seis manzanas.",
    situationHy: "Այսօր կեսօրից հետո Լաուրան վեց խնձոր է գնել։",
    qa: [
      {
        qEs: "¿Cuántas manzanas ha comprado Laura?",
        qHy: "Քանի՞ խնձոր է գնել Լաուրան։",
        aEs: "Laura ha comprado seis manzanas.",
        aHy: "Լաուրան վեց խնձոր է գնել։"
      }
    ]
  },
  {
    id: 61,
    part: 1,
    titleEs: "La piscina",
    titleHy: "Լողավազանը",
    tenses: ["Indefinido"],
    situationEs: "El sábado pasado, Nicolás nadó durante cuarenta minutos.",
    situationHy: "Անցած շաբաթ օրը Նիկոլասը լողաց քառասուն րոպե։",
    qa: [
      {
        qEs: "¿Cuánto tiempo nadó Nicolás?",
        qHy: "Որքա՞ն ժամանակ լողաց Նիկոլասը։",
        aEs: "Nicolás nadó durante cuarenta minutos.",
        aHy: "Նիկոլասը լողաց քառասուն րոպե։"
      }
    ]
  },
  {
    id: 62,
    part: 1,
    titleEs: "El perro",
    titleHy: "Շունը",
    tenses: ["Imperfecto"],
    situationEs: "Antes, Andrés tenía un perro que se llamaba Max.",
    situationHy: "Առաջ Անդրեսը մի շուն ուներ, որի անունը Մաքս էր։",
    qa: [
      {
        qEs: "¿Cómo se llamaba el perro?",
        qHy: "Ի՞նչ էր շան անունը։",
        aEs: "El perro se llamaba Max.",
        aHy: "Շան անունը Մաքս էր։"
      }
    ]
  },
  {
    id: 63,
    part: 1,
    titleEs: "La habitación",
    titleHy: "Սենյակը",
    tenses: ["Perfecto"],
    situationEs: "Esta mañana, Isabel ha limpiado su habitación.",
    situationHy: "Այսօր առավոտյան Իսաբելը մաքրել է իր սենյակը։",
    qa: [
      {
        qEs: "¿Qué ha hecho Isabel esta mañana?",
        qHy: "Ի՞նչ է արել Իսաբելը այսօր առավոտյան։",
        aEs: "Isabel ha limpiado su habitación.",
        aHy: "Իսաբելը մաքրել է իր սենյակը։"
      }
    ]
  },
  {
    id: 64,
    part: 1,
    titleEs: "La cena",
    titleHy: "Ընթրիքը",
    tenses: ["Indefinido"],
    situationEs: "Anoche, Pedro preparó una sopa de verduras.",
    situationHy: "Անցած գիշեր Պեդրոն բանջարեղենով ապուր պատրաստեց։",
    qa: [
      {
        qEs: "¿Qué preparó Pedro?",
        qHy: "Ի՞նչ պատրաստեց Պեդրոն։",
        aEs: "Pedro preparó una sopa de verduras.",
        aHy: "Պեդրոն բանջարեղենով ապուր պատրաստեց։"
      }
    ]
  },
  {
    id: 65,
    part: 1,
    titleEs: "El verano",
    titleHy: "Ամառը",
    tenses: ["Imperfecto"],
    situationEs: "Cuando Natalia era niña, pasaba los veranos en casa de sus abuelos.",
    situationHy: "Երբ Նատալիան փոքր էր, ամառներն անցկացնում էր իր տատիկի և պապիկի տանը։",
    qa: [
      {
        qEs: "¿Dónde pasaba Natalia los veranos?",
        qHy: "Որտե՞ղ էր Նատալիան անցկացնում ամառները։",
        aEs: "Natalia pasaba los veranos en casa de sus abuelos.",
        aHy: "Նատալիան ամառներն անցկացնում էր իր տատիկի և պապիկի տանը։"
      }
    ]
  },
  {
    id: 66,
    part: 2,
    titleEs: "La mochila nueva",
    titleHy: "Նոր պայուսակը",
    tenses: ["Indefinido"],
    situationEs: "Ayer, Ricardo fue a una tienda y compró una mochila negra para el colegio.",
    situationHy: "Երեկ Ռիկարդոն գնաց խանութ և դպրոցի համար սև մեջքի պայուսակ գնեց։",
    qa: [
      {
        qEs: "¿Adónde fue Ricardo?",
        qHy: "Ո՞ւր գնաց Ռիկարդոն։",
        aEs: "Ricardo fue a una tienda.",
        aHy: "Ռիկարդոն գնաց խանութ։"
      },
      {
        qEs: "¿Para qué compró la mochila?",
        qHy: "Ինչի՞ համար գնեց պայուսակը։",
        aEs: "La compró para el colegio.",
        aHy: "Նա գնեց այն դպրոցի համար։"
      }
    ]
  },
  {
    id: 67,
    part: 2,
    titleEs: "Una tarde divertida",
    titleHy: "Զվարճալի կեսօր",
    tenses: ["Indefinido"],
    situationEs: "El viernes pasado, Susana invitó a dos amigas a su casa. Juntas prepararon una pizza.",
    situationHy: "Անցած ուրբաթ Սուսանան երկու ընկերուհիների հրավիրեց իր տուն։ Միասին պիցցա պատրաստեցին։",
    qa: [
      {
        qEs: "¿A cuántas amigas invitó Susana?",
        qHy: "Քանի՞ ընկերուհու հրավիրեց Սուսանան։",
        aEs: "Susana invitó a dos amigas.",
        aHy: "Սուսանան հրավիրեց երկու ընկերուհու։"
      },
      {
        qEs: "¿Qué prepararon juntas?",
        qHy: "Ի՞նչ պատրաստեցին միասին։",
        aEs: "Prepararon una pizza.",
        aHy: "Նրանք պիցցա պատրաստեցին։"
      }
    ]
  },
  {
    id: 68,
    part: 2,
    titleEs: "Un pequeño accidente",
    titleHy: "Փոքրիկ դժբախտ պատահար",
    tenses: ["Imperfecto", "Indefinido"],
    situationEs: "Ayer, mientras Luis corría por el parque, se cayó y se hizo daño en una rodilla.",
    situationHy: "Երեկ, մինչ Լուիսը վազում էր զբոսայգում, ընկավ և վնասեց ծունկը։",
    qa: [
      {
        qEs: "¿Qué estaba haciendo Luis?",
        qHy: "Ի՞նչ էր անում Լուիսը։",
        aEs: "Luis estaba corriendo por el parque.",
        aHy: "Լուիսը վազում էր զբոսայգում։"
      },
      {
        qEs: "¿Qué le pasó?",
        qHy: "Ի՞նչ պատահեց նրան։",
        aEs: "Se cayó y se hizo daño en una rodilla.",
        aHy: "Նա ընկավ և վնասեց ծունկը։"
      }
    ]
  },
  {
    id: 69,
    part: 2,
    titleEs: "La biblioteca",
    titleHy: "Գրադարանը",
    tenses: ["Perfecto", "Imperfecto"],
    situationEs: "Esta semana, Gabriela ha ido dos veces a la biblioteca porque tenía que preparar un examen.",
    situationHy: "Այս շաբաթ Գաբրիելան երկու անգամ գնացել է գրադարան, որովհետև պետք է քննության պատրաստվեր։",
    qa: [
      {
        qEs: "¿Cuántas veces ha ido Gabriela a la biblioteca?",
        qHy: "Քանի՞ անգամ է Գաբրիելան գնացել գրադարան։",
        aEs: "Ha ido dos veces.",
        aHy: "Նա գնացել է երկու անգամ։"
      },
      {
        qEs: "¿Por qué ha ido?",
        qHy: "Ինչո՞ւ է գնացել։",
        aEs: "Porque tenía que preparar un examen.",
        aHy: "Որովհետև պետք է քննության պատրաստվեր։"
      }
    ]
  },
  {
    id: 70,
    part: 2,
    titleEs: "El antiguo barrio",
    titleHy: "Հին թաղամասը",
    tenses: ["Imperfecto"],
    situationEs: "Cuando Fernando vivía en Valencia, tenía muchos amigos y jugaba al baloncesto todos los sábados.",
    situationHy: "Երբ Ֆերնանդոն ապրում էր Վալենսիայում, ուներ շատ ընկերներ և ամեն շաբաթ օրը բասկետբոլ էր խաղում։",
    qa: [
      {
        qEs: "¿Dónde vivía Fernando?",
        qHy: "Որտե՞ղ էր ապրում Ֆերնանդոն։",
        aEs: "Fernando vivía en Valencia.",
        aHy: "Ֆերնանդոն ապրում էր Վալենսիայում։"
      },
      {
        qEs: "¿Qué hacía los sábados?",
        qHy: "Ի՞նչ էր անում շաբաթ օրերին։",
        aEs: "Jugaba al baloncesto.",
        aHy: "Նա բասկետբոլ էր խաղում։"
      }
    ]
  },
  {
    id: 71,
    part: 2,
    titleEs: "Las llaves",
    titleHy: "Բանալիները",
    tenses: ["Imperfecto", "Pluscuamperfecto"],
    situationEs: "Esta mañana, Carmen no encontraba sus llaves porque las había dejado dentro del coche.",
    situationHy: "Այսօր առավոտյան Կարմենը չէր գտնում իր բանալիները, որովհետև թողել էր մեքենայի ներսում։",
    qa: [
      {
        qEs: "¿Qué no encontraba Carmen?",
        qHy: "Ի՞նչ չէր գտնում Կարմենը։",
        aEs: "Carmen no encontraba sus llaves.",
        aHy: "Կարմենը չէր գտնում իր բանալիները։"
      },
      {
        qEs: "¿Dónde las había dejado?",
        qHy: "Որտե՞ղ էր թողել դրանք։",
        aEs: "Las había dejado dentro del coche.",
        aHy: "Թողել էր մեքենայի ներսում։"
      }
    ]
  },
  {
    id: 72,
    part: 2,
    titleEs: "Un partido difícil",
    titleHy: "Դժվար խաղ",
    tenses: ["Indefinido", "Imperfecto"],
    situationEs: "El domingo pasado, Víctor jugó contra un equipo muy fuerte. Aunque estaba cansado, consiguió marcar un gol.",
    situationHy: "Անցած կիրակի Վիկտորը խաղաց մի շատ ուժեղ թիմի դեմ։ Չնայած հոգնած էր, կարողացավ մեկ գոլ խփել։",
    qa: [
      {
        qEs: "¿Contra qué tipo de equipo jugó Víctor?",
        qHy: "Ի՞նչ տեսակի թիմի դեմ խաղաց Վիկտորը։",
        aEs: "Jugó contra un equipo muy fuerte.",
        aHy: "Նա խաղաց մի շատ ուժեղ թիմի դեմ։"
      },
      {
        qEs: "¿Qué consiguió hacer?",
        qHy: "Ի՞նչ կարողացավ անել։",
        aEs: "Consiguió marcar un gol.",
        aHy: "Նա կարողացավ մեկ գոլ խփել։"
      }
    ]
  },
  {
    id: 73,
    part: 2,
    titleEs: "La profesora",
    titleHy: "Ուսուցչուհին",
    tenses: ["Indefinido"],
    situationEs: "Ayer, la profesora explicó una nueva lección, pero algunos estudiantes no entendieron el ejercicio.",
    situationHy: "Երեկ ուսուցչուհին բացատրեց նոր դաս, բայց որոշ ուսանողներ չհասկացան վարժությունը։",
    qa: [
      {
        qEs: "¿Qué explicó la profesora?",
        qHy: "Ի՞նչ բացատրեց ուսուցչուհին։",
        aEs: "Explicó una nueva lección.",
        aHy: "Նա բացատրեց նոր դաս։"
      },
      {
        qEs: "¿Qué problema tuvieron algunos estudiantes?",
        qHy: "Ի՞նչ խնդիր ունեցան որոշ ուսանողներ։",
        aEs: "No entendieron el ejercicio.",
        aHy: "Նրանք չհասկացան վարժությունը։"
      }
    ]
  },
  {
    id: 74,
    part: 2,
    titleEs: "El museo",
    titleHy: "Թանգարանը",
    tenses: ["Indefinido", "Pluscuamperfecto"],
    situationEs: "El mes pasado, Andrea visitó un museo de arte. Había comprado las entradas por internet.",
    situationHy: "Անցած ամիս Անդրեան այցելեց արվեստի թանգարան։ Նա տոմսերը գնել էր համացանցով։",
    qa: [
      {
        qEs: "¿Qué visitó Andrea?",
        qHy: "Ի՞նչ այցելեց Անդրեան։",
        aEs: "Andrea visitó un museo de arte.",
        aHy: "Անդրեան այցելեց արվեստի թանգարան։"
      },
      {
        qEs: "¿Cómo había comprado las entradas?",
        qHy: "Ինչպե՞ս էր գնել տոմսերը։",
        aEs: "Las había comprado por internet.",
        aHy: "Նա գնել էր դրանք համացանցով։"
      }
    ]
  },
  {
    id: 75,
    part: 2,
    titleEs: "La infancia de Rosa",
    titleHy: "Ռոսայի մանկությունը",
    tenses: ["Imperfecto"],
    situationEs: "Cuando Rosa tenía siete años, le encantaban los animales y quería ser veterinaria.",
    situationHy: "Երբ Ռոսան յոթ տարեկան էր, շատ էր սիրում կենդանիներին և ուզում էր անասնաբույժ դառնալ։",
    qa: [
      {
        qEs: "¿Qué le encantaba a Rosa?",
        qHy: "Ի՞նչ էր շատ սիրում Ռոսան։",
        aEs: "Le encantaban los animales.",
        aHy: "Նա շատ էր սիրում կենդանիներին։"
      },
      {
        qEs: "¿Qué quería ser?",
        qHy: "Ի՞նչ էր ուզում դառնալ։",
        aEs: "Rosa quería ser veterinaria.",
        aHy: "Ռոսան ուզում էր անասնաբույժ դառնալ։"
      }
    ]
  },
  {
    id: 76,
    part: 2,
    titleEs: "La sorpresa",
    titleHy: "Անակնկալը",
    tenses: ["Perfecto", "Indefinido"],
    situationEs: "Hoy, Jorge ha recibido una llamada de su primo, que se mudó a México el año pasado.",
    situationHy: "Այսօր Խորխեն զանգ է ստացել իր զարմիկից, որն անցած տարի տեղափոխվել է Մեքսիկա։",
    qa: [
      {
        qEs: "¿De quién ha recibido Jorge una llamada?",
        qHy: "Ումի՞ց է Խորխեն զանգ ստացել։",
        aEs: "Ha recibido una llamada de su primo.",
        aHy: "Նա զանգ է ստացել իր զարմիկից։"
      },
      {
        qEs: "¿Cuándo se mudó su primo a México?",
        qHy: "Ե՞րբ նրա զարմիկը տեղափոխվեց Մեքսիկա։",
        aEs: "Se mudó el año pasado.",
        aHy: "Նա տեղափոխվեց անցած տարի։"
      }
    ]
  },
  {
    id: 77,
    part: 2,
    titleEs: "Un día sin internet",
    titleHy: "Առանց ինտերնետի օր",
    tenses: ["Indefinido", "Imperfecto"],
    situationEs: "Ayer, el internet dejó de funcionar mientras Raúl trabajaba. Por eso, fue a una cafetería.",
    situationHy: "Երեկ ինտերնետը դադարեց աշխատել, մինչ Ռաուլը աշխատում էր։ Այդ պատճառով նա գնաց սրճարան։",
    qa: [
      {
        qEs: "¿Qué estaba haciendo Raúl cuando dejó de funcionar internet?",
        qHy: "Ի՞նչ էր անում Ռաուլը, երբ ինտերնետը դադարեց աշխատել։",
        aEs: "Estaba trabajando.",
        aHy: "Նա աշխատում էր։"
      },
      {
        qEs: "¿Adónde fue después?",
        qHy: "Ո՞ւր գնաց հետո։",
        aEs: "Fue a una cafetería.",
        aHy: "Նա գնաց սրճարան։"
      }
    ]
  },
  {
    id: 78,
    part: 2,
    titleEs: "La cena especial",
    titleHy: "Հատուկ ընթրիք",
    tenses: ["Indefinido", "Pluscuamperfecto"],
    situationEs: "Anoche, Eva preparó una cena especial porque sus padres habían regresado de un viaje.",
    situationHy: "Անցած գիշեր Եվան հատուկ ընթրիք պատրաստեց, որովհետև նրա ծնողները վերադարձել էին ճամփորդությունից։",
    qa: [
      {
        qEs: "¿Qué preparó Eva?",
        qHy: "Ի՞նչ պատրաստեց Եվան։",
        aEs: "Eva preparó una cena especial.",
        aHy: "Եվան հատուկ ընթրիք պատրաստեց։"
      },
      {
        qEs: "¿De dónde habían regresado sus padres?",
        qHy: "Որտեղի՞ց էին վերադարձել նրա ծնողները։",
        aEs: "Habían regresado de un viaje.",
        aHy: "Նրանք վերադարձել էին ճամփորդությունից։"
      }
    ]
  },
  {
    id: 79,
    part: 2,
    titleEs: "Un sábado diferente",
    titleHy: "Տարբերվող շաբաթ օր",
    tenses: ["Imperfecto", "Indefinido"],
    situationEs: "El sábado, Samuel quería dormir hasta tarde, pero su hermano pequeño lo despertó a las siete.",
    situationHy: "Շաբաթ օրը Սամուելն ուզում էր ուշ արթնանալ, բայց նրա փոքր եղբայրը նրան արթնացրեց ժամը յոթին։",
    qa: [
      {
        qEs: "¿Qué quería hacer Samuel?",
        qHy: "Ի՞նչ էր ուզում անել Սամուելը։",
        aEs: "Samuel quería dormir hasta tarde.",
        aHy: "Սամուելն ուզում էր մինչև ուշ քնել։"
      },
      {
        qEs: "¿Quién lo despertó?",
        qHy: "Ո՞վ արթնացրեց նրան։",
        aEs: "Su hermano pequeño lo despertó.",
        aHy: "Նրա փոքր եղբայրը արթնացրեց նրան։"
      }
    ]
  },
  {
    id: 80,
    part: 2,
    titleEs: "Un día en la montaña",
    titleHy: "Մի օր լեռներում",
    tenses: ["Indefinido"],
    situationEs: "El verano pasado, Irene fue a la montaña con sus amigos. Caminaron durante tres horas y después descansaron junto a un río.",
    situationHy: "Անցած ամառ Իրենեն ընկերների հետ գնաց լեռներ։ Նրանք երեք ժամ քայլեցին, իսկ հետո հանգստացան գետի մոտ։",
    qa: [
      {
        qEs: "¿Cuánto tiempo caminaron?",
        qHy: "Որքա՞ն ժամանակ քայլեցին։",
        aEs: "Caminaron durante tres horas.",
        aHy: "Նրանք երեք ժամ քայլեցին։"
      },
      {
        qEs: "¿Dónde descansaron?",
        qHy: "Որտե՞ղ հանգստացան։",
        aEs: "Descansaron junto a un río.",
        aHy: "Նրանք հանգստացան գետի մոտ։"
      }
    ]
  },
  {
    id: 81,
    part: 3,
    titleEs: "El examen de español",
    titleHy: "Իսպաներենի քննությունը",
    tenses: ["Imperfecto", "Pluscuamperfecto", "Indefinido"],
    situationEs: "El lunes pasado, Diego tenía un examen de español. Había repasado los verbos durante todo el fin de semana. Cuando terminó el examen, se sintió tranquilo porque conocía casi todas las respuestas.",
    situationHy: "Անցած երկուշաբթի Դիեգոն իսպաներենի քննություն ուներ։ Նա ամբողջ հանգստյան օրերին կրկնել էր բայերը։ Երբ ավարտեց քննությունը, իրեն հանգիստ զգաց, որովհետև գիտեր գրեթե բոլոր պատասխանները։",
    qa: [
      {
        qEs: "¿Qué examen tenía Diego?",
        qHy: "Ի՞նչ քննություն ուներ Դիեգոն։",
        aEs: "Diego tenía un examen de español.",
        aHy: "Դիեգոն իսպաներենի քննություն ուներ։"
      },
      {
        qEs: "¿Qué había hecho durante el fin de semana?",
        qHy: "Ի՞նչ էր արել հանգստյան օրերին։",
        aEs: "Había repasado los verbos.",
        aHy: "Նա կրկնել էր բայերը։"
      },
      {
        qEs: "¿Cómo se sintió al terminar el examen?",
        qHy: "Ինչպե՞ս զգաց քննությունն ավարտելիս։",
        aEs: "Se sintió tranquilo.",
        aHy: "Նա իրեն հանգիստ զգաց։"
      }
    ]
  },
  {
    id: 82,
    part: 3,
    titleEs: "Una llamada inesperada",
    titleHy: "Անսպասելի զանգ",
    tenses: ["Imperfecto", "Indefinido", "Pluscuamperfecto"],
    situationEs: "Ayer por la tarde, Mónica estaba preparando la cena cuando recibió una llamada de su prima. No habían hablado desde hacía seis meses. Su prima le contó que había encontrado un nuevo trabajo.",
    situationHy: "Երեկ կեսօրից հետո Մոնիկան ընթրիք էր պատրաստում, երբ զանգ ստացավ իր զարմուհուց։ Նրանք վեց ամիս չէին խոսել։ Զարմուհին պատմեց, որ նոր աշխատանք է գտել։",
    qa: [
      {
        qEs: "¿Qué estaba haciendo Mónica cuando recibió la llamada?",
        qHy: "Ի՞նչ էր անում Մոնիկան, երբ ստացավ զանգը։",
        aEs: "Estaba preparando la cena.",
        aHy: "Նա ընթրիք էր պատրաստում։"
      },
      {
        qEs: "¿Cuánto tiempo hacía que no hablaban?",
        qHy: "Որքա՞ն ժամանակ չէին խոսել։",
        aEs: "Hacía seis meses que no hablaban.",
        aHy: "Վեց ամիս էր, ինչ չէին խոսել։"
      },
      {
        qEs: "¿Qué le contó su prima?",
        qHy: "Ի՞նչ պատմեց նրա զարմուհին։",
        aEs: "Le contó que había encontrado un nuevo trabajo.",
        aHy: "Պատմեց, որ նոր աշխատանք է գտել։"
      }
    ]
  },
  {
    id: 83,
    part: 3,
    titleEs: "El autobús perdido",
    titleHy: "Բաց թողնված ավտոբուսը",
    tenses: ["Perfecto", "Pluscuamperfecto"],
    situationEs: "Esta mañana, Adriana ha salido de casa más tarde de lo habitual. Cuando ha llegado a la parada, el autobús ya se había marchado. Por eso, ha tenido que coger un taxi.",
    situationHy: "Այսօր առավոտյան Ադրիանան տնից դուրս է եկել սովորականից ուշ։ Երբ հասել է կանգառ, ավտոբուսն արդեն գնացել էր։ Այդ պատճառով ստիպված է եղել տաքսի վերցնել։",
    qa: [
      {
        qEs: "¿Cuándo ha salido Adriana de casa?",
        qHy: "Ե՞րբ է Ադրիանան դուրս եկել տնից։",
        aEs: "Ha salido más tarde de lo habitual.",
        aHy: "Նա դուրս է եկել սովորականից ուշ։"
      },
      {
        qEs: "¿Qué había pasado con el autobús?",
        qHy: "Ի՞նչ էր պատահել ավտոբուսի հետ։",
        aEs: "El autobús ya se había marchado.",
        aHy: "Ավտոբուսն արդեն գնացել էր։"
      },
      {
        qEs: "¿Qué transporte ha utilizado finalmente?",
        qHy: "Ի՞նչ տրանսպորտից է օգտվել վերջում։",
        aEs: "Ha utilizado un taxi.",
        aHy: "Նա օգտվել է տաքսուց։"
      }
    ]
  },
  {
    id: 84,
    part: 3,
    titleEs: "Las vacaciones de verano",
    titleHy: "Ամառային արձակուրդը",
    tenses: ["Indefinido", "Imperfecto"],
    situationEs: "El verano pasado, Pablo pasó dos semanas en Málaga con sus tíos. Cada mañana iban a la playa y por las tardes paseaban por el centro. Un día visitaron un castillo antiguo.",
    situationHy: "Անցած ամառ Պաբլոն երկու շաբաթ անցկացրեց Մալագայում իր մորաքրոջ ու հորեղբոր հետ։ Ամեն առավոտ գնում էին լողափ, իսկ կեսօրից հետո զբոսնում էին կենտրոնում։ Մի օր նրանք այցելեցին մի հին ամրոց։",
    qa: [
      {
        qEs: "¿Cuánto tiempo pasó Pablo en Málaga?",
        qHy: "Որքա՞ն ժամանակ անցկացրեց Պաբլոն Մալագայում։",
        aEs: "Pasó dos semanas.",
        aHy: "Նա անցկացրեց երկու շաբաթ։"
      },
      {
        qEs: "¿Qué hacían cada mañana?",
        qHy: "Ի՞նչ էին անում ամեն առավոտ։",
        aEs: "Iban a la playa.",
        aHy: "Գնում էին լողափ։"
      },
      {
        qEs: "¿Qué visitaron un día?",
        qHy: "Ի՞նչ այցելեցին մի օր։",
        aEs: "Visitaron un castillo antiguo.",
        aHy: "Նրանք այցելեցին մի հին ամրոց։"
      }
    ]
  },
  {
    id: 85,
    part: 3,
    titleEs: "El regalo de cumpleaños",
    titleHy: "Ծննդյան նվերը",
    tenses: ["Indefinido", "Pluscuamperfecto"],
    situationEs: "Ayer, Marcos celebró su cumpleaños con sus amigos. Antes de la fiesta, su hermana había preparado una tarta de fresas. Durante la celebración, sus amigos le regalaron unos auriculares nuevos.",
    situationHy: "Երեկ Մարկոսը ընկերների հետ նշեց իր ծննդյան օրը։ Խնջույքից առաջ նրա քույրը ելակով տորթ էր պատրաստել։ Տոնակատարության ժամանակ ընկերները նրան նոր ականջակալներ նվիրեցին։",
    qa: [
      {
        qEs: "¿Qué celebró Marcos?",
        qHy: "Ի՞նչ նշեց Մարկոսը։",
        aEs: "Celebró su cumpleaños.",
        aHy: "Նա նշեց իր ծննդյան օրը։"
      },
      {
        qEs: "¿Qué había preparado su hermana?",
        qHy: "Ի՞նչ էր պատրաստել նրա քույրը։",
        aEs: "Había preparado una tarta de fresas.",
        aHy: "Նա ելակով տորթ էր պատրաստել։"
      },
      {
        qEs: "¿Qué le regalaron sus amigos?",
        qHy: "Ի՞նչ նվիրեցին նրան իր ընկերները։",
        aEs: "Le regalaron unos auriculares nuevos.",
        aHy: "Նրանք նրան նոր ականջակալներ նվիրեցին։"
      }
    ]
  },
  {
    id: 86,
    part: 3,
    titleEs: "Un día en el estadio",
    titleHy: "Մի օր մարզադաշտում",
    tenses: ["Indefinido", "Pluscuamperfecto"],
    situationEs: "El domingo pasado, Rodrigo fue al estadio con su padre. Habían comprado las entradas una semana antes. Durante el partido, su equipo empezó perdiendo, pero en los últimos minutos marcó dos goles y ganó.",
    situationHy: "Անցած կիրակի Ռոդրիգոն իր հոր հետ գնաց մարզադաշտ։ Նրանք տոմսերը գնել էին մեկ շաբաթ առաջ։ Խաղի ընթացքում նրա թիմը սկսեց պարտվելով, բայց վերջին րոպեներին երկու գոլ խփեց և հաղթեց։",
    qa: [
      {
        qEs: "¿Con quién fue Rodrigo al estadio?",
        qHy: "Ո՞ւմ հետ գնաց Ռոդրիգոն մարզադաշտ։",
        aEs: "Fue con su padre.",
        aHy: "Գնաց իր հոր հետ։"
      },
      {
        qEs: "¿Cuándo habían comprado las entradas?",
        qHy: "Ե՞րբ էին գնել տոմսերը։",
        aEs: "Las habían comprado una semana antes.",
        aHy: "Գնել էին մեկ շաբաթ առաջ։"
      },
      {
        qEs: "¿Qué pasó en los últimos minutos?",
        qHy: "Ի՞նչ պատահեց վերջին րոպեներին։",
        aEs: "Su equipo marcó dos goles y ganó.",
        aHy: "Նրա թիմը երկու գոլ խփեց և հաղթեց։"
      }
    ]
  },
  {
    id: 87,
    part: 3,
    titleEs: "Una noche de tormenta",
    titleHy: "Փոթորկոտ գիշեր",
    tenses: ["Imperfecto", "Indefinido", "Pluscuamperfecto"],
    situationEs: "Anoche, mientras Teresa dormía, empezó una tormenta muy fuerte. Se despertó porque oyó un ruido extraño. Cuando miró por la ventana, vio que el viento había tirado una maceta al suelo.",
    situationHy: "Անցած գիշեր, մինչ Տերեսան քնած էր, շատ ուժեղ փոթորիկ սկսվեց։ Նա արթնացավ, որովհետև տարօրինակ ձայն լսեց։ Երբ նայեց պատուհանից, տեսավ, որ քամին մի ծաղկաման էր գցել գետնին։",
    qa: [
      {
        qEs: "¿Qué estaba haciendo Teresa cuando empezó la tormenta?",
        qHy: "Ի՞նչ էր անում Տերեսան, երբ սկսվեց փոթորիկը։",
        aEs: "Estaba durmiendo.",
        aHy: "Նա քնած էր։"
      },
      {
        qEs: "¿Por qué se despertó?",
        qHy: "Ինչո՞ւ արթնացավ։",
        aEs: "Porque oyó un ruido extraño.",
        aHy: "Որովհետև տարօրինակ ձայն լսեց։"
      },
      {
        qEs: "¿Qué había hecho el viento?",
        qHy: "Ի՞նչ էր արել քամին։",
        aEs: "Había tirado una maceta al suelo.",
        aHy: "Քամին մի ծաղկաման էր գցել գետնին։"
      }
    ]
  },
  {
    id: 88,
    part: 3,
    titleEs: "Un antiguo compañero",
    titleHy: "Հին համադասարանցին",
    tenses: ["Indefinido", "Pluscuamperfecto"],
    situationEs: "La semana pasada, Álvaro se encontró con un antiguo compañero de colegio en el supermercado. No lo había visto desde hacía siete años. Hablaron unos minutos y decidieron quedar el sábado para tomar un café.",
    situationHy: "Անցած շաբաթ Ալվարոն սուպերմարկետում հանդիպեց դպրոցի մի հին ընկերոջ։ Նրան չէր տեսել յոթ տարի։ Նրանք մի քանի րոպե խոսեցին և որոշեցին հանդիպել շաբաթ օրը՝ սուրճ խմելու։",
    qa: [
      {
        qEs: "¿Dónde se encontró Álvaro con su antiguo compañero?",
        qHy: "Որտե՞ղ Ալվարոն հանդիպեց իր հին ընկերոջը։",
        aEs: "Se encontró con él en el supermercado.",
        aHy: "Նա հանդիպեց նրան սուպերմարկետում։"
      },
      {
        qEs: "¿Cuánto tiempo hacía que no lo veía?",
        qHy: "Որքա՞ն ժամանակ չէր տեսել նրան։",
        aEs: "Hacía siete años que no lo veía.",
        aHy: "Յոթ տարի էր, ինչ նրան չէր տեսել։"
      },
      {
        qEs: "¿Qué decidieron hacer?",
        qHy: "Ի՞նչ որոշեցին անել։",
        aEs: "Decidieron quedar el sábado para tomar un café.",
        aHy: "Որոշեցին հանդիպել շաբաթ օրը՝ սուրճ խմելու։"
      }
    ]
  },
  {
    id: 89,
    part: 3,
    titleEs: "El hotel",
    titleHy: "Հյուրանոցը",
    tenses: ["Indefinido", "Pluscuamperfecto", "Imperfecto"],
    situationEs: "El mes pasado, Cristina viajó a Granada con su familia. Habían reservado una habitación con vistas a la ciudad. Sin embargo, cuando llegaron al hotel, descubrieron que su habitación no tenía balcón.",
    situationHy: "Անցած ամիս Կրիստինան ընտանիքի հետ ճամփորդեց Գրանադա։ Նրանք ամրագրել էին քաղաքի տեսարանով սենյակ։ Սակայն երբ հասան հյուրանոց, պարզեցին, որ իրենց սենյակը պատշգամբ չուներ։",
    qa: [
      {
        qEs: "¿Adónde viajó Cristina?",
        qHy: "Ո՞ւր ճամփորդեց Կրիստինան։",
        aEs: "Viajó a Granada.",
        aHy: "Նա ճամփորդեց Գրանադա։"
      },
      {
        qEs: "¿Qué tipo de habitación habían reservado?",
        qHy: "Ի՞նչ տեսակի սենյակ էին ամրագրել։",
        aEs: "Habían reservado una habitación con vistas a la ciudad.",
        aHy: "Ամրագրել էին քաղաքի տեսարանով սենյակ։"
      },
      {
        qEs: "¿Qué descubrieron al llegar?",
        qHy: "Ի՞նչ պարզեցին հասնելուն պես։",
        aEs: "Descubrieron que su habitación no tenía balcón.",
        aHy: "Պարզեցին, որ իրենց սենյակը պատշգամբ չուներ։"
      }
    ]
  },
  {
    id: 90,
    part: 3,
    titleEs: "El ordenador nuevo",
    titleHy: "Նոր համակարգիչը",
    tenses: ["Perfecto", "Imperfecto", "Pluscuamperfecto", "Indefinido"],
    situationEs: "Esta semana, Sergio ha comprado un ordenador nuevo porque el anterior funcionaba muy lentamente. Antes de comprarlo, había comparado varios modelos. Finalmente, eligió uno que tenía más memoria.",
    situationHy: "Այս շաբաթ Սերխիոն նոր համակարգիչ է գնել, որովհետև նախորդը շատ դանդաղ էր աշխատում։ Գնելուց առաջ նա համեմատել էր մի քանի մոդելներ։ Վերջում ընտրեց մեկը, որը ավելի շատ հիշողություն ուներ։",
    qa: [
      {
        qEs: "¿Por qué ha comprado Sergio un ordenador nuevo?",
        qHy: "Ինչո՞ւ է Սերխիոն նոր համակարգիչ գնել։",
        aEs: "Porque el anterior funcionaba muy lentamente.",
        aHy: "Որովհետև նախորդը շատ դանդաղ էր աշխատում։"
      },
      {
        qEs: "¿Qué había hecho antes de comprarlo?",
        qHy: "Ի՞նչ էր արել գնելուց առաջ։",
        aEs: "Había comparado varios modelos.",
        aHy: "Համեմատել էր մի քանի մոդելներ։"
      },
      {
        qEs: "¿Qué característica tenía el ordenador que eligió?",
        qHy: "Ի՞նչ առանձնահատկություն ուներ իր ընտրած համակարգիչը։",
        aEs: "Tenía más memoria.",
        aHy: "Ուներ ավելի շատ հիշողություն։"
      }
    ]
  },
  {
    id: 91,
    part: 4,
    titleEs: "Un viaje complicado",
    titleHy: "Բարդ ճամփորդություն",
    tenses: ["Imperfecto", "Pluscuamperfecto", "Indefinido"],
    situationEs: "El viernes pasado, Gabriel tenía que viajar a Sevilla para visitar a su hermano. Había comprado el billete de tren un mes antes. Sin embargo, cuando llegó a la estación, descubrió que su tren se había cancelado por problemas técnicos. Después de esperar dos horas, consiguió otro billete y llegó a Sevilla por la noche.",
    situationHy: "Անցած ուրբաթ Գաբրիելը պետք է ճամփորդեր Սևիլյա՝ իր եղբորը այցելելու։ Նա գնացքի տոմսը գնել էր մեկ ամիս առաջ։ Սակայն երբ հասավ կայարան, պարզեց, որ իր գնացքը չեղարկվել էր տեխնիկական խնդիրների պատճառով։ Երկու ժամ սպասելուց հետո նոր տոմս ձեռք բերեց և երեկոյան հասավ Սևիլյա։",
    qa: [
      {
        qEs: "¿Por qué quería viajar Gabriel a Sevilla?",
        qHy: "Ինչո՞ւ էր ուզում Գաբրիելը ճամփորդել Սևիլյա։",
        aEs: "Porque quería visitar a su hermano.",
        aHy: "Որովհետև ուզում էր այցելել իր եղբորը։"
      },
      {
        qEs: "¿Cuándo había comprado el billete?",
        qHy: "Ե՞րբ էր գնել տոմսը։",
        aEs: "Lo había comprado un mes antes.",
        aHy: "Գնել էր մեկ ամիս առաջ։"
      },
      {
        qEs: "¿Qué problema tuvo en la estación?",
        qHy: "Ի՞նչ խնդիր ունեցավ կայարանում։",
        aEs: "Su tren se había cancelado por problemas técnicos.",
        aHy: "Նրա գնացքը չեղարկվել էր տեխնիկական խնդիրների պատճառով։"
      },
      {
        qEs: "¿Cuánto tiempo esperó?",
        qHy: "Որքա՞ն ժամանակ սպասեց։",
        aEs: "Esperó dos horas.",
        aHy: "Սպասեց երկու ժամ։"
      },
      {
        qEs: "¿Cuándo llegó finalmente a Sevilla?",
        qHy: "Ե՞րբ վերջապես հասավ Սևիլյա։",
        aEs: "Llegó por la noche.",
        aHy: "Հասավ երեկոյան։"
      }
    ]
  },
  {
    id: 92,
    part: 4,
    titleEs: "Una tarde en familia",
    titleHy: "Մի կեսօր ընտանիքի հետ",
    tenses: ["Imperfecto", "Indefinido", "Pluscuamperfecto"],
    situationEs: "Ayer por la tarde, Elena estaba haciendo los deberes cuando su madre le propuso salir a pasear. Al principio, Elena no quería salir porque todavía no había terminado sus ejercicios. Sin embargo, después de estudiar media hora más, terminó todo y fue con su madre al parque. Allí encontraron a unos vecinos y hablaron un rato.",
    situationHy: "Երեկ կեսօրից հետո Ելենան տնային առաջադրանքներն էր անում, երբ նրա մայրը առաջարկեց դուրս գալ զբոսնելու։ Սկզբում Ելենան չէր ուզում դուրս գալ, որովհետև դեռ չէր ավարտել վարժությունները։ Սակայն կես ժամ էլ պարապելուց հետո ավարտեց ամեն ինչ և մոր հետ գնաց զբոսայգի։ Այնտեղ հանդիպեցին հարևանների և մի փոքր զրուցեցին։",
    qa: [
      {
        qEs: "¿Qué estaba haciendo Elena?",
        qHy: "Ի՞նչ էր անում Ելենան։",
        aEs: "Estaba haciendo los deberes.",
        aHy: "Տնային առաջադրանքներն էր անում։"
      },
      {
        qEs: "¿Qué le propuso su madre?",
        qHy: "Ի՞նչ առաջարկեց նրան մայրը։",
        aEs: "Le propuso salir a pasear.",
        aHy: "Առաջարկեց դուրս գալ զբոսնելու։"
      },
      {
        qEs: "¿Por qué Elena no quería salir al principio?",
        qHy: "Ինչո՞ւ Ելենան սկզբում չէր ուզում դուրս գալ։",
        aEs: "Porque todavía no había terminado sus ejercicios.",
        aHy: "Որովհետև դեռ չէր ավարտել իր վարժությունները։"
      },
      {
        qEs: "¿Cuánto tiempo más estudió?",
        qHy: "Որքա՞ն ժամանակ էլ պարապեց։",
        aEs: "Estudió media hora más.",
        aHy: "Պարապեց ևս կես ժամ։"
      },
      {
        qEs: "¿A quién encontraron en el parque?",
        qHy: "Ո՞ւմ հանդիպեցին զբոսայգում։",
        aEs: "Encontraron a unos vecinos.",
        aHy: "Հանդիպեցին հարևանների։"
      }
    ]
  },
  {
    id: 93,
    part: 4,
    titleEs: "Un partido bajo la lluvia",
    titleHy: "Խաղ անձրևի տակ",
    tenses: ["Indefinido", "Imperfecto"],
    situationEs: "El sábado pasado, Alejandro participó en un partido de fútbol. Antes de empezar, el cielo estaba despejado y hacía buen tiempo. Sin embargo, después de veinte minutos empezó a llover. Los jugadores siguieron jugando, aunque el campo estaba muy mojado. En la segunda parte, Alejandro marcó el único gol y su equipo ganó el partido.",
    situationHy: "Անցած շաբաթ օրը Ալեխանդրոն մասնակցեց ֆուտբոլի խաղի։ Սկսելուց առաջ երկինքը պարզ էր, և լավ եղանակ էր։ Սակայն քսան րոպե անց սկսեց անձրև գալ։ Խաղացողները շարունակեցին խաղալ, չնայած դաշտը շատ թաց էր։ Երկրորդ խաղակեսում Ալեխանդրոն խփեց միակ գոլը, և նրա թիմը հաղթեց խաղը։",
    qa: [
      {
        qEs: "¿Qué tiempo hacía antes del partido?",
        qHy: "Ինչպիսի՞ եղանակ էր խաղից առաջ։",
        aEs: "Hacía buen tiempo y el cielo estaba despejado.",
        aHy: "Լավ եղանակ էր, և երկինքը պարզ էր։"
      },
      {
        qEs: "¿Cuándo empezó a llover?",
        qHy: "Ե՞րբ սկսեց անձրև գալ։",
        aEs: "Empezó a llover después de veinte minutos.",
        aHy: "Սկսեց անձրև գալ քսան րոպե անց։"
      },
      {
        qEs: "¿Cómo estaba el campo?",
        qHy: "Ինչպիսի՞ն էր դաշտը։",
        aEs: "El campo estaba muy mojado.",
        aHy: "Դաշտը շատ թաց էր։"
      },
      {
        qEs: "¿Qué hizo Alejandro en la segunda parte?",
        qHy: "Ի՞նչ արեց Ալեխանդրոն երկրորդ խաղակեսում։",
        aEs: "Marcó el único gol.",
        aHy: "Խփեց միակ գոլը։"
      },
      {
        qEs: "¿Quién ganó el partido?",
        qHy: "Ո՞վ հաղթեց խաղը։",
        aEs: "Ganó el equipo de Alejandro.",
        aHy: "Հաղթեց Ալեխանդրոյի թիմը։"
      }
    ]
  },
  {
    id: 94,
    part: 4,
    titleEs: "Una sorpresa en el colegio",
    titleHy: "Անակնկալ դպրոցում",
    tenses: ["Indefinido", "Pluscuamperfecto"],
    situationEs: "La semana pasada, los alumnos de una clase decidieron preparar una sorpresa para su profesora. Habían descubierto que el viernes sería su cumpleaños. Durante varios días prepararon dibujos y escribieron mensajes. Cuando la profesora entró en el aula el viernes, todos empezaron a cantar. Ella se emocionó mucho y les dio las gracias.",
    situationHy: "Անցած շաբաթ մի դասարանի աշակերտները որոշեցին անակնկալ պատրաստել իրենց ուսուցչուհու համար։ Նրանք իմացել էին, որ ուրբաթ օրը նրա ծննդյան օրն է լինելու։ Մի քանի օր նկարներ պատրաստեցին և գրություններ գրեցին։ Երբ ուրբաթ օրը ուսուցչուհին մտավ դասասենյակ, բոլորը սկսեցին երգել։ Նա շատ հուզվեց և շնորհակալություն հայտնեց նրանց։",
    qa: [
      {
        qEs: "¿Para quién prepararon una sorpresa los alumnos?",
        qHy: "Ո՞ւմ համար աշակերտները անակնկալ պատրաստեցին։",
        aEs: "Prepararon una sorpresa para su profesora.",
        aHy: "Անակնկալ պատրաստեցին իրենց ուսուցչուհու համար։"
      },
      {
        qEs: "¿Qué habían descubierto?",
        qHy: "Ի՞նչ էին իմացել։",
        aEs: "Habían descubierto que el viernes sería su cumpleaños.",
        aHy: "Իմացել էին, որ ուրբաթ օրը նրա ծննդյան օրն է լինելու։"
      },
      {
        qEs: "¿Qué prepararon durante varios días?",
        qHy: "Ի՞նչ պատրաստեցին մի քանի օրվա ընթացքում։",
        aEs: "Prepararon dibujos y escribieron mensajes.",
        aHy: "Նկարներ պատրաստեցին և գրություններ գրեցին։"
      },
      {
        qEs: "¿Qué hicieron cuando entró la profesora?",
        qHy: "Ի՞նչ արեցին, երբ մտավ ուսուցչուհին։",
        aEs: "Empezaron a cantar.",
        aHy: "Սկսեցին երգել։"
      },
      {
        qEs: "¿Cómo reaccionó la profesora?",
        qHy: "Ինչպե՞ս արձագանքեց ուսուցչուհին։",
        aEs: "Se emocionó mucho y les dio las gracias.",
        aHy: "Շատ հուզվեց և շնորհակալություն հայտնեց նրանց։"
      }
    ]
  },
  {
    id: 95,
    part: 4,
    titleEs: "La cartera perdida",
    titleHy: "Կորած դրամապանակը",
    tenses: ["Imperfecto", "Indefinido", "Pluscuamperfecto"],
    situationEs: "Ayer, mientras Javier paseaba por el centro de la ciudad, encontró una cartera en el suelo. La abrió para buscar algún documento y vio que pertenecía a una mujer llamada Patricia. Como había encontrado su número de teléfono en una tarjeta, decidió llamarla. Media hora después, Patricia llegó al lugar y recuperó su cartera.",
    situationHy: "Երեկ, մինչ Խավիերը զբոսնում էր քաղաքի կենտրոնում, գետնին դրամապանակ գտավ։ Բացեց այն՝ որևէ փաստաթուղթ փնտրելու համար, և տեսավ, որ այն պատկանում է Պատրիսիա անունով մի կնոջ։ Քանի որ մի քարտի վրա գտավ նրա հեռախոսահամարը, որոշեց զանգահարել նրան։ Կես ժամ անց Պատրիսիան հասավ տեղ և հետ ստացավ իր դրամապանակը։",
    qa: [
      {
        qEs: "¿Qué estaba haciendo Javier cuando encontró la cartera?",
        qHy: "Ի՞նչ էր անում Խավիերը, երբ գտավ դրամապանակը։",
        aEs: "Estaba paseando por el centro de la ciudad.",
        aHy: "Նա զբոսնում էր քաղաքի կենտրոնում։"
      },
      {
        qEs: "¿A quién pertenecía la cartera?",
        qHy: "Ո՞ւմ էր պատկանում դրամապանակը։",
        aEs: "Pertenecía a una mujer llamada Patricia.",
        aHy: "Պատկանում էր Պատրիսիա անունով մի կնոջ։"
      },
      {
        qEs: "¿Cómo consiguió Javier contactar con ella?",
        qHy: "Ինչպե՞ս Խավիերին հաջողվեց կապվել նրա հետ։",
        aEs: "Encontró su número de teléfono en una tarjeta y la llamó.",
        aHy: "Քարտի վրա գտավ նրա հեռախոսահամարը և զանգահարեց նրան։"
      },
      {
        qEs: "¿Cuánto tiempo tardó Patricia en llegar?",
        qHy: "Որքա՞ն ժամանակ պահանջվեց Պատրիսիայից՝ հասնելու համար։",
        aEs: "Tardó media hora.",
        aHy: "Նրանից պահանջվեց կես ժամ։"
      },
      {
        qEs: "¿Qué recuperó Patricia?",
        qHy: "Ի՞նչը հետ ստացավ Պատրիսիան։",
        aEs: "Recuperó su cartera.",
        aHy: "Նա հետ ստացավ իր դրամապանակը։"
      }
    ]
  },
  {
    id: 96,
    part: 4,
    titleEs: "Un restaurante especial",
    titleHy: "Հատուկ ռեստորան",
    tenses: ["Indefinido", "Pluscuamperfecto"],
    situationEs: "El domingo pasado, Lucía decidió llevar a sus padres a un restaurante que había abierto recientemente. Antes de salir, había reservado una mesa para tres personas. Cuando llegaron, el camarero los acompañó hasta una mesa junto a la ventana. Pidieron varios platos tradicionales y, después de cenar, dieron un paseo por el centro de la ciudad.",
    situationHy: "Անցած կիրակի Լուսիան որոշեց ծնողներին տանել մի ռեստորան, որը վերջերս էր բացվել։ Դուրս գալուց առաջ նա երեք հոգու համար սեղան էր ամրագրել։ Երբ հասան, մատուցողը նրանց ուղեկցեց պատուհանի մոտ գտնվող սեղանի մոտ։ Նրանք պատվիրեցին մի քանի ավանդական ուտեստ, իսկ ընթրելուց հետո զբոսնեցին քաղաքի կենտրոնում։",
    qa: [
      {
        qEs: "¿A quién llevó Lucía al restaurante?",
        qHy: "Ո՞ւմ տարավ Լուսիան ռեստորան։",
        aEs: "Llevó a sus padres.",
        aHy: "Տարավ իր ծնողներին։"
      },
      {
        qEs: "¿Qué había hecho antes de salir?",
        qHy: "Ի՞նչ էր արել դուրս գալուց առաջ։",
        aEs: "Había reservado una mesa para tres personas.",
        aHy: "Ամրագրել էր սեղան երեք հոգու համար։"
      },
      {
        qEs: "¿Dónde estaba su mesa?",
        qHy: "Որտե՞ղ էր նրանց սեղանը։",
        aEs: "Estaba junto a la ventana.",
        aHy: "Պատուհանի մոտ էր։"
      },
      {
        qEs: "¿Qué tipo de comida pidieron?",
        qHy: "Ի՞նչ տեսակի ուտելիք պատվիրեցին։",
        aEs: "Pidieron varios platos tradicionales.",
        aHy: "Պատվիրեցին մի քանի ավանդական ուտեստ։"
      },
      {
        qEs: "¿Qué hicieron después de cenar?",
        qHy: "Ի՞նչ արեցին ընթրելուց հետո։",
        aEs: "Dieron un paseo por el centro de la ciudad.",
        aHy: "Զբոսնեցին քաղաքի կենտրոնում։"
      }
    ]
  },
  {
    id: 97,
    part: 4,
    titleEs: "Un día en la montaña",
    titleHy: "Մի օր լեռներում",
    tenses: ["Indefinido", "Pluscuamperfecto"],
    situationEs: "El verano pasado, Daniel y sus amigos organizaron una excursión a la montaña. Habían preparado sus mochilas la noche anterior y salieron de casa a las seis de la mañana. Durante las primeras horas caminaron sin problemas, pero después empezó a hacer mucho calor. Como se habían llevado suficiente agua, pudieron continuar. Finalmente, llegaron a un lago y descansaron allí.",
    situationHy: "Անցած ամառ Դանիելը և նրա ընկերները էքսկուրսիա կազմակերպեցին դեպի լեռներ։ Նրանք նախորդ գիշեր պատրաստել էին իրենց պայուսակները և տնից դուրս եկան առավոտյան ժամը վեցին։ Առաջին ժամերին քայլեցին առանց խնդիրների, բայց հետո շատ շոգ սկսվեց։ Քանի որ իրենց հետ բավարար ջուր էին վերցրել, կարողացան շարունակել։ Վերջում հասան մի լճի և հանգստացան այնտեղ։",
    qa: [
      {
        qEs: "¿Qué organizaron Daniel y sus amigos?",
        qHy: "Ի՞նչ կազմակերպեցին Դանիելը և նրա ընկերները։",
        aEs: "Organizaron una excursión a la montaña.",
        aHy: "Կազմակերպեցին էքսկուրսիա դեպի լեռներ։"
      },
      {
        qEs: "¿Cuándo habían preparado sus mochilas?",
        qHy: "Ե՞րբ էին պատրաստել իրենց պայուսակները։",
        aEs: "Las habían preparado la noche anterior.",
        aHy: "Պատրաստել էին նախորդ գիշեր։"
      },
      {
        qEs: "¿A qué hora salieron de casa?",
        qHy: "Ժամը քանիսի՞ն դուրս եկան տնից։",
        aEs: "Salieron a las seis de la mañana.",
        aHy: "Դուրս եկան առավոտյան ժամը վեցին։"
      },
      {
        qEs: "¿Qué problema tuvieron durante la excursión?",
        qHy: "Ի՞նչ խնդիր ունեցան էքսկուրսիայի ընթացքում։",
        aEs: "Empezó a hacer mucho calor.",
        aHy: "Շատ շոգ սկսվեց։"
      },
      {
        qEs: "¿Por qué pudieron continuar?",
        qHy: "Ինչո՞ւ կարողացան շարունակել։",
        aEs: "Porque se habían llevado suficiente agua.",
        aHy: "Որովհետև իրենց հետ բավարար ջուր էին վերցրել։"
      },
      {
        qEs: "¿Dónde descansaron finalmente?",
        qHy: "Որտե՞ղ հանգստացան վերջում։",
        aEs: "Descansaron junto a un lago.",
        aHy: "Հանգստացան լճի մոտ։"
      }
    ]
  },
  {
    id: 98,
    part: 4,
    titleEs: "Una reunión de antiguos amigos",
    titleHy: "Հին ընկերների հանդիպում",
    tenses: ["Indefinido", "Imperfecto", "Pluscuamperfecto"],
    situationEs: "El sábado pasado, Marta organizó una reunión con sus antiguos compañeros de universidad. No se habían visto desde hacía casi diez años. Algunos vivían en otras ciudades y habían viajado especialmente para asistir. Durante la cena, recordaron sus años de estudiantes, compartieron fotografías antiguas y hablaron de sus trabajos actuales. Antes de despedirse, prometieron organizar otra reunión el año siguiente.",
    situationHy: "Անցած շաբաթ օրը Մարտան հանդիպում կազմակերպեց համալսարանի իր նախկին համակուրսեցիների հետ։ Նրանք գրեթե տասը տարի չէին տեսնվել։ Ոմանք ապրում էին այլ քաղաքներում և հատուկ ճամփորդել էին՝ մասնակցելու համար։ Ընթրիքի ընթացքում հիշեցին իրենց ուսանողական տարիները, կիսվեցին հին լուսանկարներով և խոսեցին իրենց ներկայիս աշխատանքների մասին։ Հրաժեշտ տալուց առաջ խոստացան հաջորդ տարի ևս մեկ հանդիպում կազմակերպել։",
    qa: [
      {
        qEs: "¿Qué organizó Marta?",
        qHy: "Ի՞նչ կազմակերպեց Մարտան։",
        aEs: "Organizó una reunión con sus antiguos compañeros de universidad.",
        aHy: "Հանդիպում կազմակերպեց համալսարանի իր նախկին համակուրսեցիների հետ։"
      },
      {
        qEs: "¿Cuánto tiempo hacía que no se veían?",
        qHy: "Որքա՞ն ժամանակ չէին տեսնվել։",
        aEs: "Hacía casi diez años que no se veían.",
        aHy: "Գրեթե տասը տարի էր, ինչ չէին տեսնվել։"
      },
      {
        qEs: "¿Por qué habían viajado algunos compañeros?",
        qHy: "Ինչո՞ւ էին ճամփորդել որոշ համակուրսեցիներ։",
        aEs: "Habían viajado especialmente para asistir a la reunión.",
        aHy: "Հատուկ ճամփորդել էին՝ հանդիպմանը մասնակցելու համար։"
      },
      {
        qEs: "¿De qué hablaron durante la cena?",
        qHy: "Ինչի՞ մասին խոսեցին ընթրիքի ժամանակ։",
        aEs: "Hablaron de sus años de estudiantes y de sus trabajos actuales.",
        aHy: "Խոսեցին իրենց ուսանողական տարիների և ներկայիս աշխատանքների մասին։"
      },
      {
        qEs: "¿Qué compartieron?",
        qHy: "Ինչո՞վ կիսվեցին։",
        aEs: "Compartieron fotografías antiguas.",
        aHy: "Կիսվեցին հին լուսանկարներով։"
      },
      {
        qEs: "¿Qué prometieron antes de despedirse?",
        qHy: "Ի՞նչ խոստացան հրաժեշտ տալուց առաջ։",
        aEs: "Prometieron organizar otra reunión el año siguiente.",
        aHy: "Խոստացան հաջորդ տարի ևս մեկ հանդիպում կազմակերպել։"
      }
    ]
  },
  {
    id: 99,
    part: 4,
    titleEs: "Una noche sin electricidad",
    titleHy: "Մի գիշեր առանց էլեկտրականության",
    tenses: ["Imperfecto", "Indefinido", "Pluscuamperfecto"],
    situationEs: "Anoche, mientras toda la familia de Roberto veía una película, se fue la luz de repente. Al principio pensaron que el problema era solamente de su casa, pero después descubrieron que todo el barrio estaba sin electricidad. Como habían comprado velas unos días antes, pudieron iluminar el salón. Aprovecharon la situación para hablar y contar historias. Una hora después, volvió la electricidad.",
    situationHy: "Անցած գիշեր, մինչ Ռոբերտոյի ամբողջ ընտանիքը ֆիլմ էր դիտում, հանկարծ լույսը գնաց։ Սկզբում մտածեցին, թե խնդիրը միայն իրենց տանն է, բայց հետո պարզեցին, որ ամբողջ թաղամասն է առանց էլեկտրականության։ Քանի որ մի քանի օր առաջ մոմեր էին գնել, կարողացան լուսավորել հյուրասենյակը։ Օգտվեցին իրավիճակից՝ զրուցելու և պատմություններ պատմելու համար։ Մեկ ժամ անց էլեկտրականությունը վերադարձավ։",
    qa: [
      {
        qEs: "¿Qué estaba haciendo la familia cuando se fue la luz?",
        qHy: "Ի՞նչ էր անում ընտանիքը, երբ լույսը գնաց։",
        aEs: "Estaba viendo una película.",
        aHy: "Ֆիլմ էր դիտում։"
      },
      {
        qEs: "¿Qué pensaron al principio?",
        qHy: "Ի՞նչ մտածեցին սկզբում։",
        aEs: "Pensaron que el problema era solamente de su casa.",
        aHy: "Մտածեցին, թե խնդիրը միայն իրենց տանն է։"
      },
      {
        qEs: "¿Qué descubrieron después?",
        qHy: "Ի՞նչ պարզեցին հետո։",
        aEs: "Descubrieron que todo el barrio estaba sin electricidad.",
        aHy: "Պարզեցին, որ ամբողջ թաղամասն է առանց էլեկտրականության։"
      },
      {
        qEs: "¿Qué habían comprado unos días antes?",
        qHy: "Ի՞նչ էին գնել մի քանի օր առաջ։",
        aEs: "Habían comprado velas.",
        aHy: "Մոմեր էին գնել։"
      },
      {
        qEs: "¿Qué hicieron mientras no había electricidad?",
        qHy: "Ի՞նչ արեցին, մինչ էլեկտրականություն չկար։",
        aEs: "Hablaron y contaron historias.",
        aHy: "Զրուցեցին և պատմություններ պատմեցին։"
      },
      {
        qEs: "¿Cuándo volvió la electricidad?",
        qHy: "Ե՞րբ վերադարձավ էլեկտրականությունը։",
        aEs: "Volvió una hora después.",
        aHy: "Վերադարձավ մեկ ժամ անց։"
      }
    ]
  },
  {
    id: 100,
    part: 4,
    titleEs: "Un día que empezó mal y terminó bien",
    titleHy: "Վատ սկսված և լավ ավարտված օր",
    tenses: ["Indefinido", "Imperfecto", "Pluscuamperfecto"],
    situationEs: "Ayer, Federico se despertó tarde porque su despertador no había sonado. Tenía una entrevista de trabajo a las nueve, pero cuando salió de casa ya eran las ocho y media. Corrió hasta la parada del autobús, aunque el autobús acababa de marcharse. Decidió pedir un taxi y consiguió llegar cinco minutos antes de la entrevista. Durante la conversación, respondió a todas las preguntas con tranquilidad porque se había preparado muy bien. Por la tarde, recibió una llamada de la empresa: había conseguido el trabajo.",
    situationHy: "Երեկ Ֆեդերիկոն ուշ արթնացավ, որովհետև նրա զարթուցիչը չէր զանգել։ Նա ժամը իննին աշխատանքի հարցազրույց ուներ, բայց երբ տնից դուրս եկավ, արդեն ութն անց կես էր։ Վազեց մինչև ավտոբուսի կանգառ, թեև ավտոբուսը հենց նոր էր գնացել։ Որոշեց տաքսի պատվիրել և հասցրեց տեղ հասնել հարցազրույցից հինգ րոպե առաջ։ Զրույցի ընթացքում հանգիստ պատասխանեց բոլոր հարցերին, որովհետև շատ լավ էր պատրաստվել։ Կեսօրից հետո ընկերությունից զանգ ստացավ. նա ստացել էր աշխատանքը։",
    qa: [
      {
        qEs: "¿Por qué se despertó tarde Federico?",
        qHy: "Ինչո՞ւ Ֆեդերիկոն ուշ արթնացավ։",
        aEs: "Porque su despertador no había sonado.",
        aHy: "Որովհետև նրա զարթուցիչը չէր զանգել։"
      },
      {
        qEs: "¿A qué hora tenía la entrevista?",
        qHy: "Ժամը քանիսի՞ն էր նրա հարցազրույցը։",
        aEs: "Tenía la entrevista a las nueve.",
        aHy: "Հարցազրույցը ժամը իննին էր։"
      },
      {
        qEs: "¿Qué hora era cuando salió de casa?",
        qHy: "Ժամը քանի՞սն էր, երբ նա դուրս եկավ տնից։",
        aEs: "Eran las ocho y media.",
        aHy: "Ութն անց կես էր։"
      },
      {
        qEs: "¿Qué había pasado con el autobús?",
        qHy: "Ի՞նչ էր պատահել ավտոբուսի հետ։",
        aEs: "El autobús acababa de marcharse.",
        aHy: "Ավտոբուսը հենց նոր էր գնացել։"
      },
      {
        qEs: "¿Cómo consiguió llegar a tiempo?",
        qHy: "Ինչպե՞ս հաջողվեց ժամանակին հասնել։",
        aEs: "Pidió un taxi y llegó cinco minutos antes.",
        aHy: "Տաքսի պատվիրեց և հասավ հինգ րոպե առաջ։"
      },
      {
        qEs: "¿Por qué respondió con tranquilidad?",
        qHy: "Ինչո՞ւ պատասխանեց հանգիստ։",
        aEs: "Porque se había preparado muy bien.",
        aHy: "Որովհետև շատ լավ էր պատրաստվել։"
      },
      {
        qEs: "¿Qué noticia recibió por la tarde?",
        qHy: "Ի՞նչ լուր ստացավ կեսօրից հետո։",
        aEs: "Recibió la noticia de que había conseguido el trabajo.",
        aHy: "Լուր ստացավ, որ ստացել է աշխատանքը։"
      }
    ]
  }
];

export const RETO_FINAL = [
  {
    id: 1,
    qEs: "¿Qué hiciste ayer después de las clases?",
    qHy: "Ի՞նչ արեցիր երեկ դասերից հետո։",
    tenses: ["Indefinido"]
  },
  {
    id: 2,
    qEs: "¿Qué has hecho hoy antes de nuestra clase?",
    qHy: "Ի՞նչ ես արել այսօր մեր դասից առաջ։",
    tenses: ["Perfecto"]
  },
  {
    id: 3,
    qEs: "¿Qué hacías normalmente cuando tenías ocho años?",
    qHy: "Ի՞նչ էիր սովորաբար անում, երբ ութ տարեկան էիր։",
    tenses: ["Imperfecto"]
  },
  {
    id: 4,
    qEs: "¿Habías aprendido español antes de empezar estas clases?",
    qHy: "Սովորե՞լ էիր իսպաներեն այս դասերը սկսելուց առաջ։",
    tenses: ["Pluscuamperfecto"]
  },
  {
    id: 5,
    qEs: "¿Qué fue lo más interesante que te pasó la semana pasada?",
    qHy: "Ի՞նչն էր ամենահետաքրքիրը, որ պատահեց քեզ անցած շաբաթ։",
    tenses: ["Indefinido"]
  },
  {
    id: 6,
    qEs: "¿Qué estabas haciendo ayer a las ocho de la tarde?",
    qHy: "Ի՞նչ էիր անում երեկ երեկոյան ժամը ութին։",
    tenses: ["Imperfecto"]
  },
  {
    id: 7,
    qEs: "¿Alguna vez has olvidado algo importante?",
    qHy: "Երբևէ մոռացե՞լ ես որևէ կարևոր բան։",
    tenses: ["Perfecto"]
  },
  {
    id: 8,
    qEs: "¿Qué habías preparado antes de tus últimas vacaciones?",
    qHy: "Ի՞նչ էիր պատրաստել քո վերջին արձակուրդից առաջ։",
    tenses: ["Pluscuamperfecto"]
  },
  {
    id: 9,
    qEs: "¿Cómo era tu escuela cuando eras pequeño?",
    qHy: "Ինչպիսի՞ն էր քո դպրոցը, երբ փոքր էիր։",
    tenses: ["Imperfecto"]
  },
  {
    id: 10,
    qEs: "¿Qué has aprendido esta semana?",
    qHy: "Ի՞նչ ես սովորել այս շաբաթ։",
    tenses: ["Perfecto"]
  }
];
