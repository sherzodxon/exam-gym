/*
 * 8-sinf "Informatika va axborot texnologiyalari" darsligi bo‘yicha savollar.
 * Har bir savol: g — sinf, m — modul, t — mavzu, l — daraja (1 — o‘rtacha, 2 — qiyinroq),
 * q — savol matni, o — variantlar (BIRINCHI variant har doim to‘g‘ri javob, ekranda aralashtiriladi),
 * e — izoh (natijalar sahifasida ko‘rsatiladi).
 */
window.QUESTIONS = window.QUESTIONS || [];

window.QUESTIONS.push(
  /* ===================== 1-modul. Dasturlash (Scratch) ===================== */
  {
    g: 8, m: "Dasturlash (Scratch)", t: "Dastur yaratish sikli va interaktiv dastur", l: 1,
    q: "Dastur yaratish sikli nimani o‘z ichiga oladi?",
    o: [
      "Rejalashtirish, loyihalash, ishlab chiqish va sinovdan o‘tkazishni",
      "Faqat kod yozish va uni saqlashni",
      "Faqat dasturni sotish va reklama qilishni",
      "Kompyuterni yoqish va dasturni o‘rnatishni"
    ],
    e: "Dastur yaratish sikli — rejalashtirish, loyihalash, ishlab chiqish va tizimni sinovdan o‘tkazishni o‘z ichiga olgan rasmiy jarayonlar to‘plami."
  },
  {
    g: 8, m: "Dasturlash (Scratch)", t: "Dastur yaratish sikli va interaktiv dastur", l: 2,
    q: "Dasturning foydalanuvchi bosadigan tugmalar, matn va tasvirlardan iborat, ma’lumot kiritish va natijani chiqarishga mo‘ljallangan qismi qanday ataladi?",
    o: ["Interfeys", "Translyatsiya", "Validatsiya", "Abstraksiya"],
    e: "Interfeys — dasturning ma’lumotlarni kiritish va natijani chiqarib berishga mo‘ljallangan, foydalanuvchi bilan aloqani ta’minlovchi qismi."
  },
  {
    g: 8, m: "Dasturlash (Scratch)", t: "Analog va raqamli ma’lumot", l: 1,
    q: "Kompyuter qanday ma’lumotlarni tushunadi?",
    o: [
      "1 va 0 dan tashkil topgan raqamli ma’lumotlarni",
      "Faqat analog tovush to‘lqinlarini",
      "Faqat qog‘ozdagi rasmlarni",
      "Faqat o‘nlik sanoq sistemasidagi sonlarni"
    ],
    e: "Kompyuter raqamli ma’lumotni tushunadi — u 1 va 0 raqamlaridan tashkil topadi. Kiritilgan har qanday ma’lumot 1 va 0 ga aylantiriladi."
  },
  {
    g: 8, m: "Dasturlash (Scratch)", t: "Analog va raqamli ma’lumot", l: 2,
    q: "Bir jarayonning natijasi avtomatik ravishda boshqa jarayonga kiruvchi ma’lumot bo‘lib, keyin nima sodir bo‘lishini o‘zgartirsa, bu qanday ataladi?",
    o: ["Teskari aloqa", "Ma’lumot to‘plash", "Debaglash", "Translyatsiya"],
    e: "Teskari aloqa — ma’lumot kiritish va natijani chiqarishning maxsus shakli: natija dasturda yangi kirish ma’lumotiga aylanadi."
  },
  {
    g: 8, m: "Dasturlash (Scratch)", t: "Foydalanuvchi bilan o‘zaro aloqa", l: 1,
    q: "Scratchda klaviatura tugmasi bosilganda Spraytni harakatlantiruvchi blok qaysi menyuda joylashgan?",
    o: ["Events", "Looks", "Operators", "Variables"],
    e: "Tugma bosilishini aniqlash uchun Events menyusidan “when … key pressed” bloki tanlanadi."
  },
  {
    g: 8, m: "Dasturlash (Scratch)", t: "Foydalanuvchi bilan o‘zaro aloqa", l: 2,
    q: "Chap strelka bosilganda avtomobil Sprayti 10 qadam ORQAGA yurishi uchun “move … steps” blokiga qaysi qiymat yoziladi?",
    o: ["-10", "10", "0", "180"],
    e: "Spraytni orqaga harakatlantirish uchun manfiy raqam qo‘llanadi, masalan, -10."
  },
  {
    g: 8, m: "Dasturlash (Scratch)", t: "Translyatsiya (broadcast)", l: 1,
    q: "Scratchda translyatsiya (broadcast) nima uchun ishlatiladi?",
    o: [
      "Boshqa Spraytlar qabul qilib, javob beradigan xabar yuborish uchun",
      "Spraytning kostyumini almashtirish uchun",
      "Dasturni internetga joylash uchun",
      "O‘zgaruvchini o‘chirib tashlash uchun"
    ],
    e: "Spraytga qo‘shilgan kod faqat shu Spraytga ta’sir qiladi. Translyatsiya yordamida boshqa Spraytga ko‘rsatma (xabar) yuboriladi."
  },
  {
    g: 8, m: "Dasturlash (Scratch)", t: "Translyatsiya (broadcast)", l: 2,
    q: "Pufak bosilganda avtomobil 10 qadam yurishi kerak. Qaysi yechim to‘g‘ri?",
    o: [
      "Pufakka “when this sprite clicked” + “broadcast Avtomobil harakati”; avtomobilga “when I receive Avtomobil harakati” + “move 10 steps”",
      "Pufakka “move 10 steps” blokini qo‘shish",
      "Avtomobilga “when this sprite clicked” + “move 10 steps” blokini qo‘shish",
      "Pufakka “ask and wait” blokini qo‘shish"
    ],
    e: "Bir Sprayt (pufak) xabarni translyatsiya qiladi, ikkinchisi (avtomobil) “when I receive” bloki orqali xabarni qabul qilib harakatlanadi."
  },
  {
    g: 8, m: "Dasturlash (Scratch)", t: "O‘zgaruvchilar", l: 1,
    q: "O‘zgaruvchi nima?",
    o: [
      "Xotiradagi ma’lumotni vaqtincha saqlab turadigan, nomga ega joy",
      "Ma’lumotni doimiy saqlaydigan fayl",
      "Spraytning tashqi ko‘rinishi",
      "Ikki qiymatni solishtiruvchi belgi"
    ],
    e: "O‘zgaruvchi — xotiradagi joy bo‘lib, ma’lumotlarni vaqtincha saqlab turadi. Doimiy saqlash uchun ma’lumot faylga joylanadi."
  },
  {
    g: 8, m: "Dasturlash (Scratch)", t: "O‘zgaruvchilar", l: 2,
    q: "Ochkolar = 2. Keyin ketma-ket bajariladi: “change Ochkolar by 1”, “change Ochkolar by 10”, “change Ochkolar by -3”. Ochkolar qiymati nechaga teng bo‘ladi?",
    o: ["10", "13", "16", "3"],
    e: "2 + 1 = 3, 3 + 10 = 13, 13 − 3 = 10. Natija: 10."
  },
  {
    g: 8, m: "Dasturlash (Scratch)", t: "Shartli ifoda", l: 1,
    q: "“If … then … else” blokida shart False (noto‘g‘ri) bo‘lsa nima bajariladi?",
    o: [
      "else qismidagi buyruqlar",
      "then qismidagi buyruqlar",
      "Ikkala qismdagi buyruqlar ham",
      "Dastur xato berib to‘xtaydi"
    ],
    e: "Javob True bo‘lsa then dan keyingi amal, False bo‘lsa else dan keyingi amal bajariladi."
  },
  {
    g: 8, m: "Dasturlash (Scratch)", t: "Shartli ifoda", l: 2,
    q: "O‘zgaruvchi qiymati 10 ga yetishi bilan “Siz yutdingiz!” chiqishi uchun if bloki qayerga joylanishi kerak?",
    o: [
      "forever bloki ichiga — shart muntazam tekshirilishi uchun",
      "when green flag clicked ostiga, takrorlashsiz",
      "Faqat else qismiga",
      "wait bloki ichiga"
    ],
    e: "If bloki lupdan tashqarida bo‘lsa, dastur boshlanganda bir marta tekshiriladi. Qiymatni muntazam tekshirish uchun if bloki forever ichiga joylanadi."
  },
  {
    g: 8, m: "Dasturlash (Scratch)", t: "To‘qnashuvlar", l: 1,
    q: "Sprayt biror rangga tekkanini aniqlovchi “touching color” bloki qaysi menyuda joylashgan?",
    o: ["Sensing", "Motion", "Sound", "Events"],
    e: "Rangga yoki boshqa Spraytga tegishni aniqlovchi bloklar Sensing menyusida joylashgan."
  },
  {
    g: 8, m: "Dasturlash (Scratch)", t: "To‘qnashuvlar", l: 2,
    q: "Dinozavr hasharotga tekkanda “Hasharotlar” 1 ga oshib, hasharot g‘oyib bo‘lishi kerak. Hasharotni yashirish uchun qaysi menyudagi qaysi blok ishlatiladi?",
    o: ["Looks menyusidagi hide bloki", "Control menyusidagi stop bloki", "Sensing menyusidagi answer bloki", "Motion menyusidagi glide bloki"],
    e: "Spraytni yashirish uchun Looks menyusidagi hide bloki, qayta ko‘rsatish uchun show bloki ishlatiladi."
  },
  {
    g: 8, m: "Dasturlash (Scratch)", t: "Ma’lumot kiritish", l: 1,
    q: "Foydalanuvchiga savol berib, javob kiritilishini kutadigan “ask and wait” bloki qaysi menyuda?",
    o: ["Sensing", "Looks", "Control", "Operators"],
    e: "Ask and wait bloki va kiritilgan javobni saqlovchi answer bloki Sensing menyusida joylashgan."
  },
  {
    g: 8, m: "Dasturlash (Scratch)", t: "Ma’lumot kiritish", l: 2,
    q: "Foydalanuvchi kiritgan javobdan keyinroq ham foydalanish uchun nima qilish maqsadga muvofiq?",
    o: [
      "answer qiymatini o‘zgaruvchiga saqlash (set … to answer)",
      "Javobni say bloki bilan bir marta ko‘rsatish",
      "Spraytning kostyumini almashtirish",
      "Taymerni qayta o‘rnatish"
    ],
    e: "Foydalanuvchi kiritgan ma’lumotlar g‘oyib bo‘ladi, shuning uchun ularni saqlash va keyin ishlatish uchun answer qiymati o‘zgaruvchiga joylanadi."
  },
  {
    g: 8, m: "Dasturlash (Scratch)", t: "Ma’lumotlar validatsiyasi", l: 1,
    q: "Validatsiya nima?",
    o: [
      "Kiritilgan ma’lumot asosli va belgilangan chegaralar doirasida ekanini tekshirish",
      "Dasturdagi xatolarni topib tuzatish",
      "Ma’lumotni shifrlash",
      "Dasturni boshqa Spraytga nusxalash"
    ],
    e: "Validatsiya — kiritilgan ma’lumotlar asosli yoki o‘rnatilgan cheklov va chegaralar doirasida ekanini tekshirish (masalan, 239 yosh asossiz)."
  },
  {
    g: 8, m: "Dasturlash (Scratch)", t: "Ma’lumotlar validatsiyasi", l: 2,
    q: "Yosh 4 dan katta va 100 dan kichik bo‘lmaguncha savol qayta-qayta berilishi uchun validatsiya qaysi blok ichida bajariladi?",
    o: ["repeat until", "if … then", "forever", "when green flag clicked"],
    e: "Validatsiya lup ichida samaraliroq ishlaydi: repeat until bloki to‘g‘ri qiymat kiritilmaguncha savolni takrorlaydi."
  },
  {
    g: 8, m: "Dasturlash (Scratch)", t: "Kostyumlar", l: 1,
    q: "Spraytning kostyumini navbatdagisiga almashtiruvchi bloklar qaysi menyuda?",
    o: ["Looks", "Motion", "Sensing", "Variables"],
    e: "Looks menyusi kostyumni almashtirish imkonini beradi: muayyan kostyumga o‘tish yoki next costume."
  },
  {
    g: 8, m: "Dasturlash (Scratch)", t: "Kostyumlar", l: 2,
    q: "Dastur ishga tushganda Spraytning kostyumi to‘xtovsiz almashib turishi uchun qaysi bloklar birikmasi kerak?",
    o: ["forever lupi ichida next costume bloki", "if bloki ichida hide bloki", "ask and wait va answer bloklari", "broadcast va when I receive bloklari"],
    e: "Kostyum muntazam almashishi uchun forever lupi va next costume bloki kerak bo‘ladi."
  },
  {
    g: 8, m: "Dasturlash (Scratch)", t: "Vaqt bilan ishlash", l: 1,
    q: "Scratchda dastur kodini belgilangan soniya davomida to‘xtatib, keyin davom ettiruvchi blok qaysi?",
    o: ["wait bloki (Control menyusi)", "timer bloki (Looks menyusi)", "answer bloki", "next costume bloki"],
    e: "Wait bloki Control menyusida joylashgan va kodni belgilangan soniyaga to‘xtatib, so‘ng davom ettiradi."
  },
  {
    g: 8, m: "Dasturlash (Scratch)", t: "Vaqt bilan ishlash", l: 2,
    q: "Scratchdagi taymer haqida qaysi fikr to‘g‘ri?",
    o: [
      "Dasturda faqat bitta taymer bor; reset timer uni 0 ga qaytaradi, timer bloklari Sensing menyusida",
      "Har bir Sprayt o‘zining alohida taymeriga ega",
      "Taymer faqat Control menyusida joylashgan va uni 0 ga qaytarib bo‘lmaydi",
      "Taymer daqiqalarda hisoblaydi"
    ],
    e: "Scratchda faqat bitta taymer mavjud, u soniyalarda hisoblaydi. Timer bloklari Sensing menyusida, reset timer uni 0 ga qaytaradi."
  },
  {
    g: 8, m: "Dasturlash (Scratch)", t: "Dasturni loyihalash (abstraksiya, blok-sxema)", l: 1,
    q: "Abstraksiya nima?",
    o: [
      "Real muammoni keraksiz tafsilotlarsiz, kompyuter tizimi yarata oladigan rejaga aylantirish",
      "Dasturdagi xatoni topish",
      "Spraytni ekrandan yashirish",
      "Tasodifiy son hosil qilish"
    ],
    e: "Abstraksiya — real muammoni kompyuter tizimi yarata oladigan rejaga aylantirish; bunda kiruvchi ma’lumotlar, natijalar va jarayonlar aniqlanadi."
  },
  {
    g: 8, m: "Dasturlash (Scratch)", t: "Dasturni loyihalash (abstraksiya, blok-sxema)", l: 2,
    q: "Blok-sxemada “Ochko > 10 to‘g‘rimi?” kabi Ha/Yo‘q javobli savol qaysi element bilan ifodalanadi?",
    o: ["Shart", "Jarayon", "Boshlash", "Tugatish"],
    e: "Shart — ikkita javobga (Ha va Yo‘q) ega savol; u shartli ifoda kabi ishlaydi va takrorlashni ham ifodalaydi."
  },
  {
    g: 8, m: "Dasturlash (Scratch)", t: "Natijani taxmin qilish", l: 1,
    q: "Scratchdagi “point in direction” blokida 90 qiymati Spraytni qaysi tomonga qaratadi?",
    o: ["O‘ngga", "Chapga", "Yuqoriga", "Pastga"],
    e: "90 — o‘ngga, −90 — chapga, 0 — yuqoriga, 180 — pastga qaraydi."
  },
  {
    g: 8, m: "Dasturlash (Scratch)", t: "Natijani taxmin qilish", l: 2,
    q: "Sprayt (0; 0) nuqtada turibdi. “change x by -10”, keyin “change y by 10” bajarilsa, Sprayt qayerga siljiydi?",
    o: ["Chapga va yuqoriga", "O‘ngga va pastga", "Chapga va pastga", "O‘ngga va yuqoriga"],
    e: "x manfiy o‘zgarsa Sprayt chapga, y musbat o‘zgarsa yuqoriga harakatlanadi. Yangi joy: (−10; 10)."
  },
  {
    g: 8, m: "Dasturlash (Scratch)", t: "Dasturni sinovdan o‘tkazish", l: 1,
    q: "Sinovda ruxsat etilgan chegaradagi ma’lumotlar qanday ataladi?",
    o: ["Kritik ma’lumotlar", "Normal ma’lumotlar", "Xato ma’lumotlar", "Analog ma’lumotlar"],
    e: "Normal — kutilgan va ruxsat etilgan; kritik — ruxsat etilgan chegaradagi; xato — ruxsat etilmagan, yaroqsiz ma’lumotlar."
  },
  {
    g: 8, m: "Dasturlash (Scratch)", t: "Dasturni sinovdan o‘tkazish", l: 2,
    q: "O‘yin 10–16 yoshdagilar uchun. Yosh kiritilganda quyidagi sinov qiymatlaridan qaysi biri KRITIK ma’lumot hisoblanadi?",
    o: ["16", "13", "17", "2222"],
    e: "16 — ruxsat etilgan chegaradagi qiymat (kritik). 13 — normal, 17 va 2222 — xato ma’lumotlar."
  },
  {
    g: 8, m: "Dasturlash (Scratch)", t: "Debaglash", l: 1,
    q: "Debaglash nima?",
    o: ["Dasturdagi nosozlik va xatolarni topish va tuzatish", "Dasturni internetga yuklash", "Yangi Sprayt chizish", "Ma’lumotlarni zaxiralash"],
    e: "Debaglash — dasturdagi nosozlik va xatolarni topish va tuzatish jarayoni."
  },
  {
    g: 8, m: "Dasturlash (Scratch)", t: "Debaglash", l: 2,
    q: "Darslikda keltirilgan debaglash usullari qaysilar?",
    o: [
      "Dasturni mustaqil (xayolan) ishga tushirib har bir bosqichni tekshirish va hamkorga dasturni o‘qib, tushuntirib berish",
      "Dasturni o‘chirib, qaytadan yozish va kompyuterni qayta yuklash",
      "Faqat antivirus dasturini ishga tushirish",
      "Spraytlar sonini kamaytirish va fonni almashtirish"
    ],
    e: "Ikki usul: dasturni mustaqil ishga tushirib har bosqichni tekshirish va hamkorga dasturni o‘qib berib, xatolarni birgalikda aniqlash. Xato va tuzatish yozib boriladi."
  },
  {
    g: 8, m: "Dasturlash (Scratch)", t: "Fon va tasodifiy qiymatlar", l: 1,
    q: "Scratchda tasodifiy son hosil qiluvchi “pick random” bloki qaysi menyuda?",
    o: ["Operators", "Sensing", "Looks", "Events"],
    e: "Operators menyusida pick random bloki mavjud; u ikki qiymat orasidagi ixtiyoriy sonni qaytaradi."
  },
  {
    g: 8, m: "Dasturlash (Scratch)", t: "Fon va tasodifiy qiymatlar", l: 2,
    q: "“pick random 1 to 10” bloki qaysi qiymatlarni qaytarishi mumkin?",
    o: ["1 dan 10 gacha (ikkala chegara ham kiradi) har qanday butun son", "Faqat 2 dan 9 gacha bo‘lgan sonlar", "Faqat 1 yoki 10", "0 dan 10 gacha har qanday son"],
    e: "Qiymatlar 1 va 10 bo‘lsa, blok 1, 2, 3, …, 10 qiymatlaridan birini qabul qiladi — chegaralar ham kiradi."
  },

  /* ===================== 2-modul. Veb sayt dizayni (HTML) ===================== */
  {
    g: 8, m: "Veb sayt dizayni (HTML)", t: "HTML va veb sahifa strukturasi", l: 1,
    q: "HTML qisqartmasi nimani anglatadi?",
    o: ["Hypertext Markup Language", "High Technology Modern Language", "Hyperlink Text Making Language", "Home Tool Markup Language"],
    e: "HTML — Hypertext Markup Language, veb sahifa yaratish uchun foydalaniladigan markerlash tili."
  },
  {
    g: 8, m: "Veb sayt dizayni (HTML)", t: "HTML va veb sahifa strukturasi", l: 2,
    q: "Veb sahifadagi barcha ko‘rinadigan kontent qaysi teglar orasiga yoziladi?",
    o: ["<body> va </body>", "<head> va </head>", "<title> va </title>", "<!DOCTYPE html> va </html>"],
    e: "<body> — asosiy qism; veb sahifadagi barcha kontent shu seksiyaga yoziladi. <head> esa sahifa nomi kabi elementlar uchun."
  },
  {
    g: 8, m: "Veb sayt dizayni (HTML)", t: "Sarlavha va faylni saqlash", l: 1,
    q: "Notepadda yozilgan veb sahifa brauzerda ochilishi uchun qanday kengaytma bilan saqlanadi?",
    o: [".html", ".txt", ".docx", ".jpg"],
    e: "Veb sahifa uchun “.html” bilan tugaydigan nom kiritiladi, masalan, Mening_veb_sahifam.html."
  },
  {
    g: 8, m: "Veb sayt dizayni (HTML)", t: "Sarlavha va faylni saqlash", l: 2,
    q: "<title>Sinov sahifa</title> kodi natijasida “Sinov sahifa” matni qayerda ko‘rinadi?",
    o: ["Brauzerning yuqori qatorida (sahifa yorlig‘ida)", "Sahifaning o‘rtasida katta harflarda", "Sahifaning eng pastida", "Hech qayerda ko‘rinmaydi"],
    e: "Sarlavha (title) sahifaning o‘zida aks etmaydi, balki veb sahifa ochilganda brauzer panelida ko‘rinadi."
  },
  {
    g: 8, m: "Veb sayt dizayni (HTML)", t: "Matn: sarlavha va xatboshi", l: 1,
    q: "Veb sahifaga asosiy matn (xatboshi) kiritish uchun qaysi tegdan foydalaniladi?",
    o: ["<p>", "<h1>", "<li>", "<img>"],
    e: "Sarlavha uchun <h1>, kichik sarlavha uchun <h2>, asosiy matn uchun <p> tegi ishlatiladi."
  },
  {
    g: 8, m: "Veb sayt dizayni (HTML)", t: "Matn: sarlavha va xatboshi", l: 2,
    q: "Quyidagi kodda qanday xato bor? <p style=\"color:darkblue;\">Bu – mening xatboshim</h1>",
    o: [
      "Ochish tegi <p>, yopish tegi esa </h1> — teglar mos emas",
      "style atributi <p> tegida ishlamaydi",
      "darkblue rang nomi mavjud emas",
      "Hech qanday xato yo‘q"
    ],
    e: "Har bir ochish tegiga mos yopish tegi kerak: <p> … </p>. Teglar mos kelmasa, sahifa noto‘g‘ri shakllanadi."
  },
  {
    g: 8, m: "Veb sayt dizayni (HTML)", t: "Giperlinklar", l: 1,
    q: "<a href=\"webpage.html\">Matnni bog‘lash</a> kodida href atributi nimani bildiradi?",
    o: ["Link manzilini", "Link rangini", "Matn shriftini", "Tasvir o‘lchamini"],
    e: "href atributi dasturiy ta’minotga link manzilini ko‘rsatadi; bu yerda manzil — webpage.html fayli."
  },
  {
    g: 8, m: "Veb sayt dizayni (HTML)", t: "Giperlinklar", l: 2,
    q: "Giperlink o‘rniga qo‘yilgan, foydalanuvchi bosib o‘tadigan matn (masalan, “Biz bilan bog‘lanish”) qanday ataladi?",
    o: ["Ankor", "Atribut", "Manba kodi", "Domen"],
    e: "Link matni foydalanuvchi navigatsiya uchun qo‘llaydigan so‘z yoki so‘z birikmasi bo‘lib, ankor deb yuritiladi."
  },
  {
    g: 8, m: "Veb sayt dizayni (HTML)", t: "Tasvir kiritish", l: 1,
    q: "Veb sahifaga tasvir qo‘shuvchi to‘g‘ri kod qaysi?",
    o: ["<img src=\"bee.jpg\">", "<image href=\"bee.jpg\"></image>", "<a src=\"bee.jpg\">", "<p img=\"bee.jpg\">"],
    e: "Tasvir <img src=\"…\"> kodi bilan kiritiladi; src — image source. Bu tegga yopish tegi shart emas."
  },
  {
    g: 8, m: "Veb sayt dizayni (HTML)", t: "Tasvir kiritish", l: 2,
    q: "Juda yuqori sifatli (katta hajmli) tasvirni veb sahifaga qo‘yishning asosiy kamchiligi nima?",
    o: ["Sahifa sekin ochiladi, chunki tasvir hajmi juda katta", "Tasvir xira ko‘rinadi", "Tasvir umuman ko‘rinmaydi", "Matn rangi o‘zgarib ketadi"],
    e: "Sifati past tasvir yaxshi ko‘rinmaydi, o‘ta yuqori sifatli tasvirning hajmi katta bo‘lib, sahifani ochishga ko‘p vaqt ketadi."
  },
  {
    g: 8, m: "Veb sayt dizayni (HTML)", t: "Matnni formatlash (style)", l: 1,
    q: "HTMLda matn shrifti, o‘lchami va rangini o‘zgartirish uchun ochish tegiga qaysi atribut qo‘shiladi?",
    o: ["style", "href", "src", "float"],
    e: "Matn formatini o‘zgartirish uchun ochish tegiga style atributi qo‘shiladi, masalan, style=\"font-family:Arial;\"."
  },
  {
    g: 8, m: "Veb sayt dizayni (HTML)", t: "Matnni formatlash (style)", l: 2,
    q: "Quyidagi qaysi kod TO‘G‘RI yozilgan?",
    o: [
      "<h1 style=\"font-family:Arial;font-size:24pt;color:red;text-align:center;\">",
      "<h1 style=font-family:Arial;font-size:24pt,colour:red;>",
      "<h1 style=\"font-family:Arial;font-size 24pt;text align:center\">",
      "<h1 style=\"font-family=Arial,color=red\">"
    ],
    e: "style qiymati qo‘shtirnoqda yoziladi, har bir xususiyat “nom:qiymat” ko‘rinishida va nuqtali vergul bilan ajratiladi; to‘g‘ri yozuv: color, text-align."
  },
  {
    g: 8, m: "Veb sayt dizayni (HTML)", t: "Rang, tekislash va fon", l: 1,
    q: "O‘n oltilik rang kodidan oldin qaysi belgi qo‘yiladi?",
    o: ["# (heshteg)", "@", "$", "&"],
    e: "Rang kodidan oldin heshteg (#) qo‘yiladi, masalan, color:#FF0000."
  },
  {
    g: 8, m: "Veb sayt dizayni (HTML)", t: "Rang, tekislash va fon", l: 2,
    q: "Agar matn uchun hech qanday text-align ko‘rsatilmasa, matn qanday tekislanadi?",
    o: ["Chapdan", "Markazdan", "O‘ngdan", "Eni bo‘yicha"],
    e: "Hech qanday tekislash qo‘llanmasa, matn avtomatik tarzda chapdan tekislanadi."
  },
  {
    g: 8, m: "Veb sayt dizayni (HTML)", t: "Ro‘yxatlar", l: 1,
    q: "Raqamlangan (tartibli) ro‘yxat qaysi teg bilan yaratiladi?",
    o: ["<ol>", "<ul>", "<li>", "<p>"],
    e: "<ol> — tartibli (raqamlangan) ro‘yxat, <ul> — tartibsiz (o‘q nuqtali) ro‘yxat, <li> — ro‘yxat elementi."
  },
  {
    g: 8, m: "Veb sayt dizayni (HTML)", t: "Ro‘yxatlar", l: 2,
    q: "<ul><li>Olma</li><li>Nok</li></ul> kodi brauzerda qanday ko‘rinadi?",
    o: ["O‘q nuqtali (raqamsiz) ikki bandli ro‘yxat", "1. Olma 2. Nok ko‘rinishidagi raqamli ro‘yxat", "Bir qatorda “OlmaNok”", "Jadval ko‘rinishida"],
    e: "<ul> tartibsiz ro‘yxat yaratadi — har bir element boshiga raqam emas, o‘q nuqta (bullet) qo‘yiladi."
  },
  {
    g: 8, m: "Veb sayt dizayni (HTML)", t: "Veb saytni internetga joylash", l: 1,
    q: "Qurilma internetga ulanganda unga beriladigan noyob manzil nima deyiladi?",
    o: ["IP-manzil", "Domen nomi", "URL tegi", "Ankor"],
    e: "IP-manzil — qurilma internetga ulanganda unga beriladigan noyob manzil."
  },
  {
    g: 8, m: "Veb sayt dizayni (HTML)", t: "Veb saytni internetga joylash", l: 2,
    q: "Brauzerga kiritilgan domen nomini tegishli veb saytning IP-manziliga moslashtiruvchi maxsus kompyuter qanday ataladi?",
    o: ["Domen nomi serveri (DNS)", "Fayl serveri", "Printer serveri", "Simsiz ulanish nuqtasi"],
    e: "Domen nomi serveri — domen nomlari va ularga mos IP-manzillar katalogi; u foydalanuvchiga to‘g‘ri ma’lumot yuborilishini ta’minlaydi."
  },

  /* ===================== 3-modul. Kompyuter tarmoqlari ===================== */
  {
    g: 8, m: "Kompyuter tarmoqlari", t: "Tarmoq turlari: PAN, LAN, WAN", l: 1,
    q: "Bitta bino yoki uy ichidagi kompyuterlarni birlashtiruvchi tarmoq qanday ataladi?",
    o: ["LAN (lokal hududiy tarmoq)", "WAN (global hududiy tarmoq)", "PAN (shaxsiy hududiy tarmoq)", "Internet"],
    e: "LAN — kichik geografik hudud (uy yoki bitta bino) doirasida o‘zaro ulangan kompyuterlar to‘plami."
  },
  {
    g: 8, m: "Kompyuter tarmoqlari", t: "Tarmoq turlari: PAN, LAN, WAN", l: 2,
    q: "Bir necha shaharlarda filiallari bo‘lgan bank tarmog‘i va Bluetooth orqali ulangan ikki telefon qaysi tarmoq turlariga misol bo‘ladi?",
    o: ["Bank — WAN, telefonlar — PAN", "Bank — LAN, telefonlar — WAN", "Bank — PAN, telefonlar — LAN", "Ikkalasi ham LAN"],
    e: "Katta geografik hududni qamraydigan bank tarmog‘i — WAN; kam sonli qurilmalar orasidagi Bluetooth aloqasi — PAN."
  },
  {
    g: 8, m: "Kompyuter tarmoqlari", t: "Kabellar", l: 1,
    q: "Optik tolali kabel ma’lumotlarni nima yordamida uzatadi?",
    o: ["Yorug‘lik", "Elektr signallari", "Radioto‘lqinlar", "Tovush to‘lqinlari"],
    e: "Optik tola ma’lumotni yorug‘lik sifatida uzatadi; mis kabel esa elektr signallari yordamida uzatadi."
  },
  {
    g: 8, m: "Kompyuter tarmoqlari", t: "Kabellar", l: 2,
    q: "STP kabelining UTP kabelidan asosiy farqi nimada?",
    o: [
      "STP interferensiyadan himoyalovchi qoplamaga ega",
      "STP ma’lumotni yorug‘lik bilan uzatadi",
      "STP simsiz ishlaydi",
      "STP faqat telefon liniyasida ishlatiladi"
    ],
    e: "STP — himoyalangan o‘ralgan juft sim: tashqi elektr shovqin (interferensiya)dan himoyalovchi qoplama bilan o‘ralgan. UTP himoyalanmagan."
  },
  {
    g: 8, m: "Kompyuter tarmoqlari", t: "Hub va switch", l: 1,
    q: "Bir portga kelgan signalni ulangan BARCHA kompyuterlarga tarqatadigan qurilma qaysi?",
    o: ["Hub", "Switch", "Modem", "NIC"],
    e: "Hubda bir portga kelgan signal barcha portlarga bir xil tarqaladi, lekin xabarni faqat manzil egasi o‘qiy oladi."
  },
  {
    g: 8, m: "Kompyuter tarmoqlari", t: "Hub va switch", l: 2,
    q: "Nima uchun switch hubga qaraganda samaraliroq?",
    o: [
      "Kompyuterlar manzilini xotirasida saqlab, xabarni faqat kerakli portga yuboradi",
      "U ma’lumotni yorug‘lik bilan uzatadi",
      "U har doim arzonroq turadi",
      "U tarmoqni internetga telefon liniyasi orqali ulaydi"
    ],
    e: "Switch ulangan kompyuterlar identifikatorini aniqlaydi va xabarni faqat tegishli portga uzatadi — bu almashuvni tezlashtiradi. Ammo switch hubdan qimmatroq."
  },
  {
    g: 8, m: "Kompyuter tarmoqlari", t: "Router va modem", l: 1,
    q: "Nafaqat kompyuterlarni, balki turli TARMOQLARNI ham bir-biriga ulovchi qurilma qaysi?",
    o: ["Router (marshrutizator)", "Hub", "NIC", "Jek"],
    e: "Router A tarmoqdan kelgan xabarni qabul qilib, B tarmoqdagi tegishli kompyuterga yuboradi."
  },
  {
    g: 8, m: "Kompyuter tarmoqlari", t: "Router va modem", l: 2,
    q: "Modem telefon liniyasi orqali ishlaganda qanday vazifani bajaradi?",
    o: [
      "Analog signallarni raqamli signalga va aksincha o‘giradi",
      "Ma’lumotlarni shifrlaydi",
      "Fayllarni markazlashgan holda saqlaydi",
      "Simsiz tarmoq nomini yashiradi"
    ],
    e: "Modem (modulator-demodulator) telefon simi orqali uzatilayotgan analog signallarni raqamli signalga (yoki aksincha) o‘giradi."
  },
  {
    g: 8, m: "Kompyuter tarmoqlari", t: "NIC, WAP, WNIC va serverlar", l: 1,
    q: "Tarmoqdagi istalgan kompyuterning printerdan foydalanishini ta’minlaydigan server qanday ataladi?",
    o: ["Printer serveri", "Fayl serveri", "Elektron pochta serveri", "Domen nomi serveri"],
    e: "Printer serveri bir yoki bir nechta printerni boshqaradi va tarmoqdagi kompyuterlarning undan foydalanishini ta’minlaydi."
  },
  {
    g: 8, m: "Kompyuter tarmoqlari", t: "NIC, WAP, WNIC va serverlar", l: 2,
    q: "Kompyuter ichiga o‘rnatilgan va ma’lumotlarni radioto‘lqinlar orqali yuborib-qabul qiladigan komponent qaysi?",
    o: ["WNIC (simsiz tarmoq interfeys kartasi)", "WAP (simsiz ulanish nuqtasi)", "NIC (tarmoq interfeys kartasi)", "Hub"],
    e: "WNIC kompyuter ichida bo‘lib, ma’lumotni simsiz yuboradi va qabul qiladi. WAP — boshqa qurilmalarga simsiz ulanish imkonini beruvchi alohida nuqta, NIC esa kabel uchun."
  },
  {
    g: 8, m: "Kompyuter tarmoqlari", t: "Tarmoqni loyihalash", l: 1,
    q: "Simsiz ulanishning simli ulanishga nisbatan kamchiligi qaysi?",
    o: ["Xavfsizligi zaifroq, qalin devorlar signalga to‘sqinlik qiladi", "Mobil qurilmalarni ulab bo‘lmaydi", "Kabel ko‘p kerak bo‘ladi", "Internetga ulanib bo‘lmaydi"],
    e: "Simsiz ulanishda ma’lumotni buzib kirish imkoniyati kattaroq, qalin devorlar va elektr jihozlari unga to‘sqinlik qiladi; o‘tkazuvchanligi ham simliga qaraganda past."
  },
  {
    g: 8, m: "Kompyuter tarmoqlari", t: "Tarmoqni loyihalash", l: 2,
    q: "Do‘konda 5 ta kassa kompyuteri plastik karta ma’lumotlari bilan ishlaydi va ma’lumotlar markazda saqlanishi kerak. Qaysi yechim eng to‘g‘ri?",
    o: [
      "Server o‘rnatish va kassalarni simli ulash",
      "Serversiz, barcha kassalarni simsiz ulash",
      "Faqat Bluetooth orqali PAN tarmoq tuzish",
      "Kassalarni tarmoqqa umuman ulamaslik"
    ],
    e: "Ma’lumotlar markazlashgan holda saqlanishi uchun server kerak; plastik karta ma’lumotlari xavfsizligi uchun ishonchli simli ulanish ma’qul."
  },
  {
    g: 8, m: "Kompyuter tarmoqlari", t: "Tarmoqni boshqarish vazifalari", l: 1,
    q: "Dasturiy ta’minot yoki kompyuter komponentlarining YANGI VERSIYASINI o‘rnatish qanday ataladi?",
    o: ["Yaxshilash (upgrade)", "Yangilash (update)", "Zaxiralash (backup)", "Shifrlash"],
    e: "Upgrade — yangi versiyani o‘rnatish; update — mavjud dasturga yangi sozlamalar o‘rnatish yoki nosozlikni bartaraf etish."
  },
  {
    g: 8, m: "Kompyuter tarmoqlari", t: "Tarmoqni boshqarish vazifalari", l: 2,
    q: "Yangi akkaunt yaratish va foydalanuvchilarga muayyan erkin foydalanish huquqlarini berish qaysi boshqaruv vazifasiga kiradi?",
    o: ["Foydalanuvchilarni muvofiqlashtirish", "Qurilmalarni boshqarish", "Dasturiy ta’minotni boshqarish", "Xavfsizlikni boshqarish"],
    e: "Foydalanuvchilarni muvofiqlashtirish: yangi akkauntlar yaratish, profillarni boshqarish, foydalanuvchilarga huquqlar berish."
  },
  {
    g: 8, m: "Kompyuter tarmoqlari", t: "Tarmoq xavfsizligi", l: 1,
    q: "Tarmoqqa kirayotgan va chiqayotgan signallarni kuzatib, ruxsat berilmaganlarini bloklovchi qurilma yoki dastur qaysi?",
    o: ["Fayervol", "Antivirus", "Modem", "Switch"],
    e: "Fayervol qurilma yoki dasturiy ta’minot shaklida bo‘lib, tarmoq signallarini kuzatadi va ruxsat berilmaganini bloklaydi."
  },
  {
    g: 8, m: "Kompyuter tarmoqlari", t: "Tarmoq xavfsizligi", l: 2,
    q: "Darslikdagi talablarga ko‘ra qaysi parol eng ishonchli?",
    o: ["Kit0b#Sevar9", "12345678", "kitobsevar", "KITOB"],
    e: "Murakkab parol: 8 tadan ko‘p belgi, raqamlar, bosh va kichik harflar hamda maxsus belgilar (#, ! va h.k.) bo‘lishi kerak."
  },
  {
    g: 8, m: "Kompyuter tarmoqlari", t: "Tarmoq topologiyalari", l: 1,
    q: "Barcha kompyuterlar markaziy qurilmaga (hub, switch yoki router) ulangan topologiya qaysi?",
    o: ["Yulduz", "Shina", "To‘r", "Halqa"],
    e: "Yulduz topologiyasi — barcha kompyuterlarni markaziy komponentga ulash orqali hosil qilinadigan tarmoq."
  },
  {
    g: 8, m: "Kompyuter tarmoqlari", t: "Tarmoq topologiyalari", l: 2,
    q: "Shina topologiyasining asosiy kamchiligi nima?",
    o: [
      "Barcha qurilmalar bitta magistral kabelga ulangani uchun to‘qnashuvlar (kolliziyalar) yuz beradi",
      "Har bir kompyuter boshqa barcha kompyuterlarga alohida kabel bilan ulanishi kerak",
      "Markaziy server buzilsa, tarmoq ishlamaydi",
      "Juda ko‘p kabel talab qiladi"
    ],
    e: "Shinada kabel kam bo‘lsa-da, magistraldan bir vaqtda faqat bitta signal o‘tadi; ma’lumotlar to‘planib, kolliziyalar yuzaga keladi. Ko‘p kabel talab qilish — to‘r topologiyasining kamchiligi."
  },

  /* ===================== 4-modul. Video va animatsiya ===================== */
  {
    g: 8, m: "Video va animatsiya", t: "Animatsiya, video va storyboard", l: 1,
    q: "Video yoki animatsiyaning asosiy kadrlarini va izohlarini qog‘ozda tasvirlovchi reja qanday ataladi?",
    o: ["Storyboard", "Vaqt shkalasi", "Saundtrek", "Futaj"],
    e: "Storyboard — bajariladigan amallarni oldindan ko‘rsatuvchi tasvir va chizmalar; har bir kadr alohida katakka chiziladi va raqamlanadi."
  },
  {
    g: 8, m: "Video va animatsiya", t: "Animatsiya, video va storyboard", l: 2,
    q: "Animatsiyaning videodan asosiy farqi nimada?",
    o: [
      "Animatsiya qo‘lda yoki kompyuterda chizilgan tasvirlar ketma-ketligi, video esa kamera bilan yozib olingan harakatlanuvchi tasvirlar",
      "Animatsiyada tovush bo‘lmaydi, videoda bo‘ladi",
      "Animatsiya faqat qora-oq bo‘ladi",
      "Video faqat kompyuterda chiziladi"
    ],
    e: "Animatsiya — chizilgan tasvirlar to‘plami, tez ketma-ket ko‘rsatilsa harakatlanayotgandek ko‘rinadi. Video — videokamera yordamida yozib olingan tasvirlar."
  },
  {
    g: 8, m: "Video va animatsiya", t: "Dastlabki materiallar: fokus, zoom, panoramalash", l: 1,
    q: "Tasvirdagi predmetlarni yaqinlashtirib, kattaroq ko‘rsatuvchi kamera funksiyasi qaysi?",
    o: ["Zoom in", "Zoom out", "Panoramalash", "Fokusni o‘chirish"],
    e: "Zoom in — tasvirdagi predmetlarni yaqinlashtiradi; zoom out — kichraytirib, kengroq maydonni qamraydi."
  },
  {
    g: 8, m: "Video va animatsiya", t: "Dastlabki materiallar: fokus, zoom, panoramalash", l: 2,
    q: "Kamerani gorizontal o‘q bo‘ylab asta-sekin burib, kadrga sig‘magan obyektni to‘liq olish qanday ataladi?",
    o: ["Panoramalash", "Zoom in", "Fokuslash", "Import"],
    e: "Panoramalash — kamerani gorizontal o‘q bo‘ylab burish."
  },
  {
    g: 8, m: "Video va animatsiya", t: "Pencil2D: kadrlar, FPS, qatlamlar", l: 1,
    q: "FPS nima?",
    o: ["Animatsiyaning bir soniyasida ko‘rsatiladigan kadrlar soni", "Fayl formati turi", "Kadrdagi piksellar soni", "Ovoz balandligi o‘lchovi"],
    e: "FPS (frames per second) — soniyadagi kadrlar soni. FPS qancha yuqori bo‘lsa, animatsiya shuncha tez namoyish etiladi."
  },
  {
    g: 8, m: "Video va animatsiya", t: "Pencil2D: kadrlar, FPS, qatlamlar", l: 2,
    q: "Ba’zi dasturlarda obyektning birinchi va oxirgi holati berilganda, oradagi kadrlarni avtomatik yaratib, harakatni tekis qiladigan uskuna nima deyiladi?",
    o: ["Tween", "Storyboard", "Pikselizatsiya", "Narration"],
    e: "Tween — animatsiyani tekis harakatlantiruvchi uskuna: boshlang‘ich va oxirgi holat orasiga avtomatik kadrlar qo‘shadi."
  },
  {
    g: 8, m: "Video va animatsiya", t: "Rastr va vektor tasvirlar", l: 1,
    q: "Quyidagilardan qaysi biri rastrli tasvir formatlari?",
    o: [".bmp, .jpeg, .gif, .png", ".eps, .cdr, .ai", ".mp3, .wav", ".html, .css"],
    e: "Rastrli formatlar: .bmp, .jpeg, .gif, .png, .tif. Vektor formatlar: .eps, .cdr, .ai."
  },
  {
    g: 8, m: "Video va animatsiya", t: "Rastr va vektor tasvirlar", l: 2,
    q: "Nima uchun vektor tasvir kattalashtirilganda xiralashmaydi, rastr tasvir esa xiralashadi?",
    o: [
      "Vektor tasvir koordinatalar va formulalar asosida har safar qayta chiziladi, rastr esa piksellardan iborat",
      "Vektor tasvir har doim kichik hajmli bo‘ladi",
      "Rastr tasvir faqat qora-oq bo‘ladi",
      "Vektor tasvir faqat kamera bilan olinadi"
    ],
    e: "Rastr tasvir kattalashtirilganda piksellar kattalashib xiralashadi (pikselizatsiya). Vektor tasvir koordinata va ko‘rsatmalar asosida qayta chiziladi."
  },
  {
    g: 8, m: "Video va animatsiya", t: "Video yaratish va tahrirlash", l: 1,
    q: "Kompyuterga yuklangan videoni tomosha qilish uchun qanday dastur kerak?",
    o: ["Mediapleyer (masalan, Windows Media Player)", "Matn muharriri", "Elektron jadval", "Antivirus"],
    e: "Mediapleyer — kompyuterda videolarni tomosha qilish imkonini beruvchi dasturiy ta’minot."
  },
  {
    g: 8, m: "Video va animatsiya", t: "Video yaratish va tahrirlash", l: 2,
    q: "Bir kadrdan boshqasiga almashish nuqtasida qo‘llanadigan effektlar qanday ataladi?",
    o: ["O‘tish effektlari", "Kadr effektlari", "Fade In effektlari", "Zoom effektlari"],
    e: "Kadrlar almashish nuqtasida o‘tish effektlari qo‘llanadi; kadr effektlari esa kadrning o‘ziga (rang, oq-qora, shovqin) qo‘llanadi."
  },
  {
    g: 8, m: "Video va animatsiya", t: "Saundtrek va ovozli sharh", l: 1,
    q: "Video namoyishi davomida eshittiriladigan ovozli sharh qanday ataladi?",
    o: ["Narration", "Saundtrek", "Futaj", "Tween"],
    e: "Narration — namoyish davomida eshitiladigan ovozli sharh; saundtrek — fonda ijro etiladigan musiqa."
  },
  {
    g: 8, m: "Video va animatsiya", t: "Saundtrek va ovozli sharh", l: 2,
    q: "Mualliflik huquqi bilan himoyalangan qo‘shiqni maktab veb saytidagi videoga qo‘yish mumkinmi?",
    o: [
      "Faqat muallif ruxsati bilan; ruxsatsiz faqat shaxsiy tomosha uchun ishlatish mumkin",
      "Ha, istalgan vaqtda ruxsatsiz",
      "Ha, agar qo‘shiq 30 soniyadan qisqa bo‘lsa",
      "Yo‘q, videoga hech qachon musiqa qo‘yib bo‘lmaydi"
    ],
    e: "Ruxsatsiz musiqali videoni faqat shaxsiy maqsadda ko‘rish mumkin. Katta auditoriyaga ko‘rsatish yoki saytga joylash uchun muallif ruxsati kerak."
  },
  {
    g: 8, m: "Video va animatsiya", t: "Auditoriya talablari", l: 1,
    q: "Yosh bolalar uchun animatsiya yaratishda qaysi tavsiya to‘g‘ri?",
    o: ["Yorqin ranglar, qisqa so‘zlar va ko‘proq tasvirlardan foydalanish", "Murakkab atamalar va ko‘p matndan foydalanish", "Faqat rasmiy tildan foydalanish", "Tasvirlarsiz faqat matn berish"],
    e: "Yosh bolalar uchun: yorqin ranglar, qisqa/oddiy so‘zlar, matndan ko‘ra ko‘proq tasvir, multfilm tasvirlar, norasmiy til."
  },
  {
    g: 8, m: "Video va animatsiya", t: "Auditoriya talablari", l: 2,
    q: "Kattalar auditoriyasi uchun video tayyorlashda tasvirlardan qanday foydalanish tavsiya etiladi?",
    o: [
      "Matn mazmunini boyitish uchun, lekin matn o‘rniga emas",
      "Matnni butunlay tasvirlar bilan almashtirish",
      "Faqat multfilm tasvirlaridan foydalanish",
      "Tasvirlardan umuman foydalanmaslik"
    ],
    e: "Kattalar uchun: ko‘proq matn, murakkabroq va rasmiy til; tasvirlar matn mazmunini boyitadi, lekin uning o‘rnini bosmaydi."
  },
  {
    g: 8, m: "Video va animatsiya", t: "Audacity bilan ovozni tahrirlash", l: 1,
    q: "Audacity dasturida ovozni boshida yumshoq balandlashtiruvchi effekt qaysi?",
    o: ["Fade In", "Fade Out", "Zoom In", "Export Audio"],
    e: "Fade In — yumshoq balandlashish, Fade Out — yumshoq pasayish effekti."
  },
  {
    g: 8, m: "Video va animatsiya", t: "Audacity bilan ovozni tahrirlash", l: 2,
    q: "Audacityda tahrirlangan yozuvni .mp3 formatida olish uchun qaysi buyruq ishlatiladi?",
    o: ["File → Export Audio", "File → Save", "Edit → Copy", "Effect → Fade Out"],
    e: "Muayyan formatdagi (masalan, .mp3) fayl kerak bo‘lsa, File → Export Audio tanlanib, fayl turi belgilanadi. Save esa loyihani saqlaydi."
  }
);
