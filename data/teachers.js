// ==========================================================
// EDIT TEACHER INFORMATION HERE
// For each teacher replace: username, password, name, title,
// messages (from / text / animation) and memories (image / caption).
// animation options: "envelope" "polaroid" "sticky" "terminal"
//                    "flower" "circuit" "sparkle"  (default: sparkle)
// NOTE: This is only an entry gate for a surprise, NOT real security.
// Anyone can read this file in the browser.
// ==========================================================
const teachers = [
  {
    id: "001",
    username: "sirjerold",
    password: "19t25op2",
    name: "Sir Lantoria",
    title: "Head",
    messages: [
      {
        from: "K",
        text: "Thank you po for teaching us the logic gates, nagagamit na po namin hehe.",
        animation: "sparkle",
      },
      {
        from: "K",
        text: "We enjoy being with you po🥰\n\nKahit na po may mapagka-nonchalant ka po, Im happy in your class po. Somehow hindi po nakakaboring haha",
        animation: "flower",
      },
    ],
    
    memories: [
      {image:"assets/received_1451343336807404.jpeg", caption:"Compiled with care, thank you po."},
      {image:"assets/received_3473902136077380.jpeg", caption:"Good times, good people."},
      {image:"assets/received_2668353443495998.jpeg", caption:"Behind every one of us is a teacher who cared."},
      {image:"assets/received_2053498625467382.jpeg", caption:"Grateful for every lesson, big and small."},
      {image:"assets/received_1513296153442062.jpeg", caption:"Hard lessons, happy faces."},
      {image:"assets/received_1262960305605099.jpeg", caption:"This one is a keeper."},
      {image:"assets/received_1109830533660744.jpeg", caption:"Smiles all around. ✨"},
      {image:"assets/received_1055659100298921.jpeg", caption:"Your kindness stayed with us longer than any lesson."},
    ],
  },

  {
    id: "002",
    username: "maamana",
    password: "61fhn1pm",
    name: "Ma'am Ana",
    title: "Professor",
    messages: [
      {
        from: "-",
        text: "Happy Teacher's Day po Ma'am. Pasensya na po medjo late, nakalocked in po lahat sa thesis. Wish us luck po sa defense.🫶",
        animation: "flower",
      },
      {
        from: "K",
        text: "Happy Teachers' Day po maam!\n\nThank you po sa mga guiding po samin, at sa patience na binibigay nyo po samin about sa thesis💕 Sana po hindi po magisa sa defense🤞",
        animation: "sticky",
      },
    ],
    memories: [
      {image:"assets/received_809792194801755.jpeg", caption:"Thank you for being you po."},
      {image:"assets/received_1378144043252528.jpeg", caption:"Moments we'll always remember."},
      {image:"assets/received_640255185355084.jpeg", caption:"You never just taught. You cared."},
      {image:"assets/received_658751923440350.jpeg", caption:"Thank you for seeing the best in us."},
      {image:"assets/received_1109830533660744.jpeg", caption:"Happy faces, happy hearts."},
      {image:"assets/received_955566532577386.jpeg", caption:"Memory worth keeping."},
      {image:"assets/received_1352857762709437.jpeg", caption:"Smiles all around. ✨"},
      {image:"assets/received_1748648509412559.jpeg", caption:"Your kindness stayed with us longer than any lesson."},
      {image:"assets/received_1501700317538193.jpeg", caption:"You're the best mentor we never had to reboot."},
    ],
  },

  {
    id: "003",
    username: "maamdes",
    password: "d12fz9r3",
    name: "Ma'am Desiree",
    title: "Professor",
    messages: [
      {
        from: "anon",
        text: "Happy Teacher's Day po!🥳\n\nThank you so much po for being a part of our CpE journey!\n\nAll my favorite courses have been thought by you po maam and I am immensely grateful for that. 🥰 Mapa-DSA, DBMS and more, sobrang solid po ng lectures hehe. Salamat po Ma'am!",
        animation: "polaroid",
      },
      {
        from: "K",
        text: "Happy Teachers' Day po maam💕\n\n Nakakalungkot po maam dahil hindi po natuloy po ang ating fieldtrip🥹 Sayang po ung bonding time nun",
        animation: "circuit",
      },
      {
        from: "K",
        text: "Happy Teachers' Day po! Im grateful po that you are one of our second nanay🥹💕",
        animation: "sticky",
      },
    ],
    memories: [
      {image:"assets/received_599660996383771.jpeg", caption:"Thank you for being you po."},
      {image:"assets/received_837338712301226.jpeg", caption:"This one is a keeper."},
      {image:"assets/received_1096283956152729.jpeg", caption:"You taught us to think before we run."},
      {image:"assets/received_1193765405197013.jpeg", caption:"Smiles all around. ✨"},
      {image:"assets/received_1423597488940538.jpeg", caption:"Thank you for the great setup and all the support."},
    ],
  },

  {
    id: "004",
    username: "sirerrol",
    password: "85rr9nsl",
    name: "Sir Errol",
    title: "Professor",
    messages: [
      {
        from: "K",
        text: "Sir, Happy Teachers' Day po!\n\nThank you po for helping us po sa mga bagay-bagay at sa pagturo po samin, kahit na minsan ay nakaka-overwhelm po ung knowledge nyo po haha.",
        animation: "sparkle",
      },
      {
        from: "K",
        text: "Happy Teachers' Day po sir! Sorry po at hindi na rin po tayo nakakapagklase gawa po ng thesis namin, kaya Im grateful po sa patience nyo po samin 🫶",
        animation: "flower",
      },
      {
        from: "-",
        text: "Sir nakamiss na po yung mga hands on sa klase natin.",
        animation: "sticky",
      },
      {
        from: "anon",
        text: "Happy Teacher's Day po!🥳\n\nSobrang thankful po namin sa mga lectures ninyo, especially cause literal na nagagamit po namin siya sa thesis!! Especially sa AI training 😆\n\nThank you so so much po, very grateful po ako to have been one of your students! 🫶",
        animation: "circuit",
      },
      {
        from: "-",
        text: "thank you po Sir for being a good teacher po, you don't know po how much we appreciate yung mga tinuro mo po sa amin simula nung hinandle mo po kami. from the very start po, ung seminar pa lang po, hanggang maging faculty ka po namin, sobrang humanga po lahat sa'yo, saksi po ako kung paano ka po purihin ng mga kaklase ko, na sobrang talino mo po, at mga katagang \"buti na lang andiyan si Sir Errol\", \"iba pag klase ni Sir Errol, talagang may natututunan\" like legit Sir, nahandle mo po kami nung time na di ka pa po man bihasa sa pag pasimple ng idea pero sob knowledgeable mo naman po, and you have improved a lot po from our 1st encounter sa pagtuturo po ng mga concept na sobrang foreign sa amin, Happy Teacher's Day po Sir. You are a respectable teacher who deserve recognition and love from students (syempre from 4A) sana mapamahal ka pa po sa CpE students ikaw po pag-asa ng mga talented freshies pra mag grow po sila\n\nps. thank you po sa pag appreciate sa amin kahit ang nonchalant namin",
        animation: "envelope",
      },
    ],
    memories: [
      {image:"assets/received_2320575218314033.jpeg", caption:"Thank you for being you po."},
      {image:"assets/received_1857576344798470.jpeg", caption:"We won't forget this day."},
      {image:"assets/received_831924812708158.jpeg", caption:"Class dismissed, memories kept."},
      {image:"assets/received_1089343346331833.jpeg", caption:"Your kindness stayed with us longer than any lesson."},
      {image:"assets/received_1161883069145283.jpeg", caption:"Every success of ours has your commit history."},
      {image:"assets/FB_IMG_1732440650078.jpg", caption:"Thank you for the great setup and all the support."},
    ],
  },

  {
    id: "005",
    username: "maamjonah",
    password: "12cl4wo4",
    name: "Ma'am Jonah",
    title: "Professor",
    messages: [
      {
        from: "K",
        text: "Happy Teachers' day po maam 🫶Thank you po sa patience na binigay nyo po samin at sa mga lesson and guidance na tinuro nyo po samin since 1st year po 🥰",
        animation: "sticky",
      },
    ],
    memories: [
      {image:"assets/received_758407239740308.jpeg", caption:"Because of you, we kept going."},
      {image:"assets/received_1084141366873893.jpeg", caption:"Grateful for every lesson, big and small."},
      {image:"assets/received_1109830533660744.jpeg", caption:"Good times, good people."},
      {image:"assets/received_1193765405197013.jpeg", caption:"Smiles all around. ✨"},
      {image:"assets/received_652074444289558.jpeg", caption:"Class dismissed, memories kept."},
    ],
  },

  {
    id: "006",
    username: "maamalex",
    password: "n1ysa900",
    name: "Ma'am Alex",
    title: "Professor",
    messages: [
      {
        from: "K",
        text: "Happy Teachers' Day Maam 💕\n\nThank you po sa patience na binigay nyo po samin at sa mga lesson and guidance na tinuro nyo po samin 🥰",
        animation: "flower",
      },
    ],
    memories: [
      {image:"assets/IMG_9426.jpeg", caption:"This one is a keeper."},
    ],
  },

  {
    id: "007",
    username: "sirponce",
    password: "k6y1bu7a",
    name: "Sir Ponce",
    title: "Professor",
    messages: [
      {
        from: "K",
        text: "Happy Teachers' Day po!\n\nWe don't really have much encounter pa po but we are really grateful sa mga papers po ninyo, without po kasi nun baka hindi po kami nakapasa ng 3rd year. Also po thank you sa mga diniscuss nyo po sa seminar, you help me realise po kung ano po talaga ung gusto kong tahakin.\n\nThank you po ulit 🫶",
        animation: "terminal",
      },
    ],
    memories: [
      {image:"assets/IMG_9426.jpeg", caption:"This one is a keeper."},
      {image:"assets/IMG_3188.jpg", caption:"We won't forget this day."},
      {image:"assets/IMG_3222.jpg", caption:"Smiles all around. ✨"},
      {image:"assets/received_3039942902854768.jpeg", caption:"Thank you for being you po."},
    ],
  },

  {
    id: "008",
    username: "maamalea",
    password: "22zim9ih",
    name: "Ma'am Aleah",
    title: "Professor",
    messages: [
      {
        from: "K",
        text: "Happy Teachers' day po maam 🫶 Thank you po sa patience na binigay nyo po samin at sa mga lesson and guidance na tinuro nyo po samin since 1st year po 🥰",
        animation: "circuit",
      },
    ],
    memories: [
      {image:"assets/received_1854403608756187.jpeg", caption:"So pretty as always 💕"},
      {image:"assets/received_1110385924141753.jpeg", caption:"Always grateful."},
      {image:"assets/received_1193765405197013.jpeg", caption:"Smiles all around. ✨"},
      {image:"assets/received_3473902136077380.jpeg", caption:"Memory worth keeping."},
    ],
  },

  {
    id: "009",
    username: "sirjayvic",
    password: "dkx2n7c0",
    name: "Sir Jayvic",
    title: "Professor",
    messages: [
      {
        from: "K",
        text: "Happy Teachers' Day po sir!\n\nStay jolly as ever po, nakakahawa po kasi kaya sana mahawaan nyo po ung mga darating pang mga CpE 🫶",
        animation: "flower",
      },
      {
        from: "K",
        text: "I enjoy the classes we had po nung 1st year pa po kami. Thank you po sir 🥰",
        animation: "sticky",
      },
    ],
    memories: [
      {image:"assets/received_1218722836958318.jpeg", caption:"Always keep smiling po 🤗"},
      {image:"assets/IMG20231012110727.jpg", caption:"Moments we'll always remember."},
      {image:"assets/received_1926650568273354.jpeg", caption:"Thank you for never giving up on us."},
      {image:"assets/received_1193765405197013.jpeg", caption:"Smiles all around. ✨"},
      {video: "assets/received_3535748673384662.mp4", caption: "Yes, we were paying attention. Mostly." },
      {image:"assets/received_1320226239751250.jpeg", caption:"Hard lessons, happy faces."},
    ],
  },
];
