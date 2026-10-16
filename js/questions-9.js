/*
 * 9-sinf "Informatika va axborot texnologiyalari" darsligi bo‘yicha savollar.
 * Maydonlar questions-8.js dagi bilan bir xil: BIRINCHI variant har doim to‘g‘ri javob.
 */
window.QUESTIONS = window.QUESTIONS || [];

window.QUESTIONS.push(
  /* ===================== 1-bob. Kompyuter tizimining turlari va komponentlari ===================== */
  {
    g: 9, m: "1-bob. Kompyuter tizimi", t: "1.01 Kompyuter qurilmalari va dasturiy ta’minot", l: 1,
    q: "Markaziy protsessorning qaysi qismi qo‘shish, ayirish hamda AND, OR, NOT kabi mantiqiy amallarni bajaradi?",
    o: ["Arifmetik mantiqiy blok (ALU)", "Boshqaruv bloki (CU)", "Kesh xotira", "Videokarta"],
    e: "ALU hisoblash va mantiqiy amallarni bajaradi; CU ko‘rsatmalarni o‘qib, kompyuter qismlarini boshqaradi; kesh — o‘ta tezkor xotira."
  },
  {
    g: 9, m: "1-bob. Kompyuter tizimi", t: "1.01 Kompyuter qurilmalari va dasturiy ta’minot", l: 2,
    q: "Quyidagilardan qaysi biri tizim dasturiy ta’minotiga emas, AMALIY dasturiy ta’minotga kiradi?",
    o: ["Elektron jadval dasturi", "Qurilma drayveri", "Linker-dastur", "Antivirus utiliti"],
    e: "Tizim dasturlari: operatsion tizim, qurilma drayverlari, utilitlar (antivirus, defragmentator), linker va h.k. Matn, elektron jadval, taqdimot dasturlari — amaliy dasturlar."
  },
  {
    g: 9, m: "1-bob. Kompyuter tizimi", t: "1.02 Asosiy komponentlar: RAM, ROM, zaxira xotira", l: 1,
    q: "Kompyuter o‘chirilganda qaysi xotiradagi ma’lumotlar yo‘qoladi?",
    o: ["RAM (tezkor xotira)", "ROM (doimiy xotira)", "Qattiq disk", "Flesh xotira"],
    e: "RAM vaqtincha (elektr manbayiga bog‘liq) xotira: kompyuter o‘chirilsa, undagi barcha ma’lumot yo‘qoladi. ROM esa ma’lumotni saqlab qoladi."
  },
  {
    g: 9, m: "1-bob. Kompyuter tizimi", t: "1.02 Asosiy komponentlar: RAM, ROM, zaxira xotira", l: 2,
    q: "Nega kir yuvish mashinasi kabi qurilmalarda ROM nisbatan katta, RAM esa kichik bo‘lishi mumkin?",
    o: [
      "Ular faqat o‘zgarmas boshqaruv dasturini bajaradi, foydalanuvchi yangi dasturlar ochmaydi",
      "Ular internetga doim ulangan bo‘ladi",
      "ROM RAMdan tezroq yoziladi",
      "Ularda operatsion tizim umuman bo‘lmaydi va xotira kerak emas"
    ],
    e: "Kompyuterda RAM odatda ROMdan katta, chunki foydalanuvchi turli dasturlarni ochadi. Kir yuvish mashinasi esa doimiy, o‘zgarmas dastur bilan ishlaydi, shuning uchun ROM katta bo‘ladi."
  },
  {
    g: 9, m: "1-bob. Kompyuter tizimi", t: "1.03 Operatsion tizimlar va interfeyslar", l: 1,
    q: "WIMP qisqartmasi qaysi interfeys turiga tegishli?",
    o: ["Foydalanuvchining grafik interfeysi (GUI)", "Buyruqlar qatori interfeysi (CLI)", "Menyu interfeysi", "Tabiiy til interfeysi"],
    e: "WIMP — windows, icons, mouse, pointer (oyna, ikonka, sichqoncha, kursor). Shuning uchun GUI ba’zan WIMP deb yuritiladi."
  },
  {
    g: 9, m: "1-bob. Kompyuter tizimi", t: "1.03 Operatsion tizimlar va interfeyslar", l: 2,
    q: "Buyruqlar qatori interfeysi (CLI) haqida qaysi fikr TO‘G‘RI?",
    o: [
      "Foydalanuvchi buyruqlarni bilishi va xatosiz yozishi kerak; undan asosan texnik mutaxassislar foydalanadi",
      "Foydalanuvchi faqat ikonkalarni bosib ishlaydi",
      "U yangi boshlovchilar uchun eng oson interfeys",
      "Unda klaviatura umuman ishlatilmaydi"
    ],
    e: "CLIda COPY, RENAME kabi buyruqlar yoziladi; imlo xatosi bo‘lsa, kompyuter buyruqni bajarmaydi. U asosan tizimga xizmat ko‘rsatuvchi mutaxassislar uchun."
  },
  {
    g: 9, m: "1-bob. Kompyuter tizimi", t: "1.04 Kompyuter turlari", l: 1,
    q: "Stol kompyuterining noutbuk va planshetga nisbatan asosiy afzalligi qaysi?",
    o: ["Ichki qurilma va komponentlarni yangilash va almashtirish oson", "Portativligi yuqori", "Juda tez ishga tushadi", "Batareya bilan uzoq ishlaydi"],
    e: "Stol kompyuterining komponentlarini yangilash oson va ekrani odatda kattaroq; kamchiligi — portativ emas va ko‘p joy egallaydi."
  },
  {
    g: 9, m: "1-bob. Kompyuter tizimi", t: "1.04 Kompyuter turlari", l: 2,
    q: "Uydan tashqarida, Wi-Fi bo‘lmagan joyda ham elektron pochtani doimiy tekshirish kerak. Qanday planshet tanlash to‘g‘ri?",
    o: ["3G/4G mobil internetni qo‘llaydigan planshet", "Faqat Wi-Fi bilan ishlaydigan planshet", "Bluetoothli planshet", "Qattiq diski katta planshet"],
    e: "Faqat Wi-Fi planshetlar ko‘pchilikka yetarli, lekin Wi-Fi bo‘lmaganda internetdan foydalanish uchun 3G/4G versiyasi kerak (narxi qimmatroq va oylik to‘lov talab qiladi)."
  },
  {
    g: 9, m: "1-bob. Kompyuter tizimi", t: "1.05 Yangi texnologiyalarning ta’siri", l: 1,
    q: "Biometrik tizim “murojaat qilayotgan shaxs chindan ham o‘zi ekaniga” ishonch hosil qilsa, bu qanday ataladi?",
    o: ["Verifikatsiya", "Identifikatsiya", "Skrining", "Shifrlash"],
    e: "Verifikatsiya — shaxs o‘zi ekanini tasdiqlash; identifikatsiya — omma orasidan kishini aniqlash; skrining — qidiruv ro‘yxatida bor-yo‘qligini tekshirish."
  },
  {
    g: 9, m: "1-bob. Kompyuter tizimi", t: "1.05 Yangi texnologiyalarning ta’siri", l: 2,
    q: "Kvant kriptografiyasining odatiy kriptografiyadan asosiy afzalligi nimada?",
    o: [
      "Yashirincha eshitishni aniqlash va maxfiy kalitni to‘liq xavfsiz uzatish",
      "Ma’lumotni shifrlamasdan tezroq yuborish",
      "Faqat Bluetooth orqali ishlashi",
      "Parol talab qilmasligi"
    ],
    e: "Kalit fotonlar asosida yaratiladi; kimdir kalitga ruxsatsiz tegsa, fotonlar holati o‘zgaradi va qabul qiluvchi buni sezadi."
  },

  /* ===================== 2-bob. Kiritish va chiqarish qurilmalari ===================== */
  {
    g: 9, m: "2-bob. Kiritish va chiqarish qurilmalari", t: "2.01 Kiritish qurilmalari: klaviatura va manipulyatorlar", l: 1,
    q: "Fastfud restoranlarida tugmalari taom va narxlar uchun dasturlangan klaviatura qanday ataladi?",
    o: ["Konseptual klaviatura", "QWERTY klaviatura", "MIDI klaviatura", "Raqamli klaviatura"],
    e: "Konseptual klaviaturada har bir panel vazifasini dasturlash mumkin; kamchiligi — belgilar soni cheklangan."
  },
  {
    g: 9, m: "2-bob. Kiritish va chiqarish qurilmalari", t: "2.01 Kiritish qurilmalari: klaviatura va manipulyatorlar", l: 2,
    q: "Trekbolning sichqonchaga nisbatan afzalligi qaysi?",
    o: [
      "U qo‘zg‘almas, ishlashi uchun tekis yuza kerak emas va harakati cheklangan kishilar ham foydalana oladi",
      "U kursorni nozik boshqarishda eng qulay qurilma",
      "U chiqarish qurilmasi vazifasini ham bajaradi",
      "U simsiz ishlaydigan yagona qurilma"
    ],
    e: "Trekbol sharchasini foydalanuvchi o‘zi aylantiradi, qurilmaning o‘zi qo‘zg‘almaydi; u mustahkam va boshqa qurilmalarga o‘rnatilishi mumkin."
  },
  {
    g: 9, m: "2-bob. Kiritish va chiqarish qurilmalari", t: "2.01 Sensorli ekranlar va grafik planshet", l: 1,
    q: "Qaysi qurilma bir vaqtning o‘zida ham kiritish, ham chiqarish qurilmasi hisoblanadi?",
    o: ["Sensorli ekran", "Skaner", "Plotter", "Mikrofon"],
    e: "Sensorli ekran tasvirni ko‘rsatadi (chiqarish) va qaysi joy bosilganini aniqlab protsessorga yuboradi (kiritish)."
  },
  {
    g: 9, m: "2-bob. Kiritish va chiqarish qurilmalari", t: "2.01 Sensorli ekranlar va grafik planshet", l: 2,
    q: "Qo‘lqop kiyib smartfon ekraniga bosilsa, ekran ko‘pincha javob bermaydi. Sababi nima?",
    o: [
      "Smartfon ekrani sig‘imli — u tananing elektr maydonini sezadi, bosimni emas",
      "Smartfon ekrani rezistiv — u faqat stilusni sezadi",
      "Qo‘lqop ekrandagi piksellarni o‘chiradi",
      "Ekran faqat chiqarish qurilmasi"
    ],
    e: "Sig‘imli ekran barmoqni elektr yordamida “sezadi”, oddiy qo‘lqop va mexanik stilus bilan ishlamaydi. Rezistiv ekran esa bosimga sezgir."
  },
  {
    g: 9, m: "2-bob. Kiritish va chiqarish qurilmalari", t: "2.01 Sensorlar", l: 1,
    q: "Sensorlar haqida qaysi fikr to‘g‘ri?",
    o: [
      "Sensorlar ma’lumotni avtomatik to‘playdi, lekin hech qanday qaror qabul qilmaydi",
      "Sensorlar o‘zi qaror qabul qilib, isitgichni yoqadi",
      "Sensorlar elektr energiyasisiz ishlaydi",
      "Sensorlar chiqarish qurilmasi hisoblanadi"
    ],
    e: "Sensor o‘lchovni protsessorga yuboradi, qarorni protsessor qabul qiladi. Sensorlar doimiy elektr manbayini talab qiladi."
  },
  {
    g: 9, m: "2-bob. Kiritish va chiqarish qurilmalari", t: "2.01 Sensorlar", l: 2,
    q: "Gilam tagidagi bosim paneli bosilganda signalizatsiyani darhol yoqsa, darslikka ko‘ra u nima hisoblanadi?",
    o: [
      "Sensor emas, shunchaki tugma, chunki qarorni protsessor qabul qilmaydi",
      "Harorat sensori",
      "Yorug‘lik sensori",
      "Aktuator"
    ],
    e: "Qurilma bosim o‘lchovini protsessorga yuborib, protsessor (odammi yoki mushukmi) qaror qabul qilsagina u sensor hisoblanadi."
  },
  {
    g: 9, m: "2-bob. Kiritish va chiqarish qurilmalari", t: "2.02 Ma’lumotni bevosita kiritish: OCR, OMR, MICR", l: 1,
    q: "Test javob varaqlaridagi belgilangan kataklarni o‘qish uchun qaysi texnologiya ishlatiladi?",
    o: ["OMR (optik belgilarni o‘qish)", "OCR (optik belgilarni aniqlash)", "MICR", "RFID"],
    e: "OMR belgining shakliga emas, joylashuviga qaraydi — testlar va saylov byulletenlari uchun qo‘llanadi."
  },
  {
    g: 9, m: "2-bob. Kiritish va chiqarish qurilmalari", t: "2.02 Ma’lumotni bevosita kiritish: OCR, OMR, MICR", l: 2,
    q: "Banklar cheklardagi hisob raqamlarini o‘qish uchun MICRdan foydalanishining asosiy sababi nima?",
    o: [
      "Magnit siyoh belgilarni tez o‘qish mumkin va ularni o‘zgartirib bo‘lmaydi — xavfsizlik yuqori",
      "MICR qurilmasi va siyohi juda arzon",
      "MICR qo‘lda yozilgan matnni yaxshi o‘qiydi",
      "MICR istalgan miqdordagi belgilarni o‘qiy oladi"
    ],
    e: "MICR — tezkor va xavfsiz, chunki maxsus siyoh belgilarini o‘zgartirib bo‘lmaydi. Kamchiliklari: o‘qiladigan belgilar soni cheklangan, qurilma va siyoh qimmat."
  },
  {
    g: 9, m: "2-bob. Kiritish va chiqarish qurilmalari", t: "2.02 Shtrix-kod, RFID va kartalar", l: 1,
    q: "Supermarket mahsulotining shtrix-kodida qaysi ma’lumot BO‘LMAYDI?",
    o: ["Mahsulot narxi", "Ishlab chiqarilgan mamlakat raqami", "Ishlab chiqaruvchi raqami", "Mahsulot raqami"],
    e: "Shtrix-kodda mamlakat, ishlab chiqaruvchi, mahsulot raqami va chek raqami bo‘ladi. Narx kodga kiritilmaydi — u ma’lumotlar bazasidan olinadi."
  },
  {
    g: 9, m: "2-bob. Kiritish va chiqarish qurilmalari", t: "2.02 Shtrix-kod, RFID va kartalar", l: 2,
    q: "RFIDning shtrix-kodga nisbatan afzalligi qaysi?",
    o: [
      "Tegni skanerga aniq qaratish shart emas, u bir necha metr masofadan ham o‘qiladi",
      "RFID teglari hech qachon to‘qnashmaydi",
      "RFID faqat qog‘ozga chop etiladi",
      "RFID mahsulot narxini ham saqlaydi"
    ],
    e: "RFID chiplarini shtrix-kod singari aniq joylashtirish shart emas; ammo ko‘p teg yaqin turganda teglar to‘qnashuvi yuz berishi mumkin."
  },
  {
    g: 9, m: "2-bob. Kiritish va chiqarish qurilmalari", t: "2.03 Chiqarish qurilmalari: monitor va printerlar", l: 1,
    q: "Qaysi printer suvda eriydigan siyoh ishlatgani uchun chop etilgan qog‘ozga suv tegsa, siyoh yoyilib ketishi mumkin?",
    o: ["Purkagichli printer", "Lazerli printer", "Matritsali printer", "Plotter"],
    e: "Purkagichli printer arzon va sifatli, lekin ko‘pincha suvda eriydigan siyoh ishlatadi. Lazerli printer toner bilan ishlaydi."
  },
  {
    g: 9, m: "2-bob. Kiritish va chiqarish qurilmalari", t: "2.03 Chiqarish qurilmalari: monitor va printerlar", l: 2,
    q: "Arxitektor bino chizmasini qalam yordamida aniq va toza vektorli chiziqlar bilan chop etmoqchi. Qaysi qurilma eng mos?",
    o: ["Plotter", "Matritsali printer", "Purkagichli printer", "Multimedia proyektori"],
    e: "Plotter vektorli grafikani qalam bilan chizadi; kema, mashina, bino rejalari, muhandislik va arxitektura uchun ideal."
  },
  {
    g: 9, m: "2-bob. Kiritish va chiqarish qurilmalari", t: "2.03 Boshqaruv qurilmalari (aktuatorlar)", l: 1,
    q: "Boshqaruv tizimida sensorlar bilan juftlashib, kompyuter buyrug‘iga javoban fizik qiymatni o‘zgartiruvchi chiqarish qurilmasi qaysi?",
    o: ["Aktuator", "Skaner", "Mikrofon", "Shtrix-kod rider"],
    e: "Aktuatorlar (motorlar, isitgichlar va h.k.) kompyuter buyrug‘iga javoban fizik qiymatlarni o‘zgartiradi; sensorlar bilan birga boshqaruv dasturini tashkil qiladi."
  },
  {
    g: 9, m: "2-bob. Kiritish va chiqarish qurilmalari", t: "2.03 Boshqaruv qurilmalari (aktuatorlar)", l: 2,
    q: "Kir yuvish mashinasida suv yetarli issiq bo‘lmasa nima sodir bo‘ladi?",
    o: [
      "Harorat sensori o‘lchovni yuboradi, protsessor isitish elementini yoqadi va sensor yetarli haroratni bildirguncha ushlab turadi",
      "Harorat sensori o‘zi isitgichni yoqadi",
      "Isitgich mashina o‘chguncha ishlayveradi",
      "Protsessor sovuq suv qo‘shadi"
    ],
    e: "Sensor faqat o‘lchaydi; qarorni protsessor qabul qilib, aktuator (isitish elementi)ni boshqaradi. Suv juda issiq bo‘lsa, sovuq suv qo‘shiladi."
  },

  /* ===================== 3-bob. Xotira qurilmalari ===================== */
  {
    g: 9, m: "3-bob. Xotira qurilmalari", t: "3.01 Magnitli xotira: qattiq disk va tasma", l: 1,
    q: "Magnit tasmada ma’lumotlarga kirish nima uchun sekin?",
    o: [
      "Ma’lumot ketma-ket saqlanadi, kerakli joyga yetish uchun oldingi ma’lumotlarni o‘tib chiqish kerak",
      "Tasma lazer bilan o‘qiladi",
      "Tasmada ma’lumot juda kam saqlanadi",
      "Tasmaga faqat bir marta yozish mumkin"
    ],
    e: "Tasma — ketma-ketlikdagi xotira. Qattiq disk esa indeks orqali bevosita kirishni ta’minlaydi, shuning uchun tezroq."
  },
  {
    g: 9, m: "3-bob. Xotira qurilmalari", t: "3.01 Magnitli xotira: qattiq disk va tasma", l: 2,
    q: "Yirik tashkilot har oy ish haqi hisob-kitobi uchun BARCHA xodimlar yozuvini birin-ketin qayta ishlaydi; kirish tezligi muhim emas. Qaysi xotira mos?",
    o: ["Magnit tasma", "DVD-ROM", "Flesh xotira kartasi", "RAM"],
    e: "Magnit tasma katta hajmli ma’lumotlar uchun arzon; ketma-ket o‘qishda hech kimni tushirib qoldirmaydi, kirish tezligi esa muhim emas."
  },
  {
    g: 9, m: "3-bob. Xotira qurilmalari", t: "3.01 Optik va qattiq holatdagi xotira", l: 1,
    q: "CD-R va DVD-R disklarga ma’lumotni necha marta yozish mumkin?",
    o: ["Faqat bir marta", "Umuman yozib bo‘lmaydi", "Cheksiz marta", "Faqat ikki marta"],
    e: "R — Recordable: bir marta yoziladi. ROM — faqat o‘qiladi. RW — Rewritable: ko‘p marta yozish mumkin."
  },
  {
    g: 9, m: "3-bob. Xotira qurilmalari", t: "3.01 Optik va qattiq holatdagi xotira", l: 2,
    q: "Kompaniya har oqshom barcha fayllarning zaxira nusxasini olib, binodan olib chiqib ketmoqchi. Darslikka ko‘ra qaysi optik disk eng mos?",
    o: ["DVD-RW", "DVD-R", "CD-ROM", "DVD-ROM"],
    e: "DVD-RW mustahkam, portativ, katta hajmli va har oqshom qayta yozish mumkin. DVD-R ga bir marta yoziladi — har kuni yangi disk kerak bo‘ladi."
  },
  {
    g: 9, m: "3-bob. Xotira qurilmalari", t: "3.02 Xotira qurilmalarini taqqoslash", l: 1,
    q: "Qattiq holatdagi xotira (SSD, flesh) ning magnitli va optik xotiradan asosiy farqi nima?",
    o: ["Harakatlanadigan qismlari yo‘q", "Ma’lumotni lazer bilan yozadi", "Ma’lumot magnit qutblanish bilan saqlanadi", "Faqat bir marta yozish mumkin"],
    e: "SSD elektron sxemalarga asoslangan, flesh xotiradan foydalanadi va harakatlanuvchi qismlarga ega emas — shuning uchun mustahkam."
  },
  {
    g: 9, m: "3-bob. Xotira qurilmalari", t: "3.02 Xotira qurilmalarini taqqoslash", l: 2,
    q: "Nega Blu-ray disk DVD ga qaraganda ko‘proq ma’lumot sig‘diradi?",
    o: [
      "U qisqaroq to‘lqin uzunlikdagi lazer ishlatadi, ma’lumot zichroq joylashadi",
      "U magnit qutblanishdan foydalanadi",
      "Uning diametri DVD dan ikki baravar katta",
      "U harakatlanuvchi qismlarsiz ishlaydi"
    ],
    e: "To‘lqin uzunligi qancha qisqa bo‘lsa, disk yuzasiga shuncha ko‘p ma’lumot joylanadi. Blu-ray juda katta sig‘im va yuqori tezlikka ega, lekin qimmat."
  },

  /* ===================== 4-bob. Kompyuter tarmoqlari ===================== */
  {
    g: 9, m: "4-bob. Kompyuter tarmoqlari", t: "4.01 LAN, WAN, WLAN va router", l: 1,
    q: "Internet qaysi tarmoq turiga misol bo‘ladi?",
    o: ["WAN", "LAN", "WLAN", "PAN"],
    e: "WAN keng geografik hududdagi LAN tarmoqlarni birlashtiradi; internet butun dunyo bo‘ylab LANlarni bog‘laydi — WANga misol."
  },
  {
    g: 9, m: "4-bob. Kompyuter tarmoqlari", t: "4.01 LAN, WAN, WLAN va router", l: 2,
    q: "Router ma’lumot paketini qayerga yuborishni qanday aniqlaydi?",
    o: [
      "Paket sarlavhasidagi borish manzilini o‘qib, operativ xotirasidagi yo‘nalish jadvalidan optimal yo‘lni tanlaydi",
      "Paketni tarmoqdagi barcha kompyuterlarga yuboradi",
      "Paketni har doim bir xil yo‘l bilan, ketma-ket yuboradi",
      "Foydalanuvchidan har bir paket uchun manzil so‘raydi"
    ],
    e: "Har bir paket sarlavhasida identifikator, joylashuv o‘rni, yuboruvchi va qabul qiluvchi manzili bor. Router yo‘nalish jadvalidan foydalanadi; paketlar turli yo‘llardan borib, manzilda qayta yig‘iladi."
  },
  {
    g: 9, m: "4-bob. Kompyuter tarmoqlari", t: "4.01 Tarmoq qurilmalari: hub, switch, brij, modem", l: 1,
    q: "Turli topologiyali (masalan, yulduzsimon va shinali) ikki tarmoqni birlashtiruvchi qurilma qaysi?",
    o: ["Brij (tarmoq ko‘prigi)", "Hub", "NIC", "Modem"],
    e: "Brij xabar shaklini qabul qiluvchi tarmoqqa moslab o‘zgartiradi va qaysi xabarlar boshqa tarmoqqa o‘tishini hal qiladi."
  },
  {
    g: 9, m: "4-bob. Kompyuter tarmoqlari", t: "4.01 Tarmoq qurilmalari: hub, switch, brij, modem", l: 2,
    q: "Hubga 16 ta qurilma ulangan. Bitta kompyuter boshqasiga xabar yuborsa, nima bo‘ladi?",
    o: [
      "Hub xabarni barcha qurilmalarga, hatto yuboruvchiga ham tarqatadi — trafik keraklisidan 16 marta ko‘p bo‘ladi",
      "Xabar faqat qabul qiluvchiga boradi",
      "Xabar internetga yuboriladi",
      "Xabar shifrlanib, faqat serverga boradi"
    ],
    e: "Hub signalni barcha portlarga tarqatadi, faqat belgilangan kompyuter uni qabul qiladi. Switch esa manzillarni bilib, xabarni faqat keraklisiga yuboradi."
  },
  {
    g: 9, m: "4-bob. Kompyuter tarmoqlari", t: "4.01 Wi-Fi, Bluetooth va URL", l: 1,
    q: "Bluetooth qaysi holatlar uchun eng mos?",
    o: [
      "Yaqin masofada kichik hajmdagi ma’lumot uzatish (simsiz sichqoncha, garnitura)",
      "Butun binoni tezkor internet bilan ta’minlash",
      "Shaharlar orasidagi tarmoqni bog‘lash",
      "Juda katta fayllarni uzoq masofaga uzatish"
    ],
    e: "Bluetooth Wi-Figa qaraganda kuchsizroq: uzatish diapazoni va ma’lumot hajmi kichik bo‘ladi. Wi-Fi tezroq, uzoqroq ishlaydi va xavfsizligi mustahkamroq."
  },
  {
    g: 9, m: "4-bob. Kompyuter tarmoqlari", t: "4.01 Wi-Fi, Bluetooth va URL", l: 2,
    q: "https://rtmuz.uz/e-resurs/e-kutubxona URL manzilida “rtmuz.uz” qismi nima?",
    o: ["Domen nomi", "Protokol", "Tub papka", "Fayl nomi"],
    e: "http(s) — protokol, rtmuz.uz — domen nomi, / — tub papka, e-resurs/ va e-kutubxona/ — papkalar."
  },
  {
    g: 9, m: "4-bob. Kompyuter tarmoqlari", t: "4.01 Internet va intranet", l: 1,
    q: "Intranet nima?",
    o: [
      "Tashkilot ichidagi, foydalanuvchi nomi va parol bilan himoyalangan xususiy tarmoq",
      "Butun dunyo uchun ochiq global tarmoq",
      "Faqat Bluetooth orqali ishlovchi tarmoq",
      "Internet provayderning to‘lov tizimi"
    ],
    e: "Intranet internet texnologiyalaridan foydalanadi, lekin global internetdan himoyalangan; unga faqat tashkilot ichidagi ruxsatga ega odamlar kiradi."
  },
  {
    g: 9, m: "4-bob. Kompyuter tarmoqlari", t: "4.01 Internet va intranet", l: 2,
    q: "Bitta internet aloqasi va bitta IP-manzil orqali LANdagi bir nechta kompyuterni internetga ulash usuli qanday ataladi?",
    o: ["Internet aloqasini ulashish (ICS)", "VOIP", "Modem rejimi emas, Bluetooth", "Brij"],
    e: "ICS (Internet Connection Sharing) da host kompyuter internetga bevosita ulanadi va uni tarmoqdagi boshqa kompyuterlarga tarqatadi."
  },
  {
    g: 9, m: "4-bob. Kompyuter tarmoqlari", t: "4.02 Tarmoq xavfsizligi va kommunikatsiya", l: 1,
    q: "Videokonferensiya uchun qaysi qurilmalar to‘plami kerak?",
    o: [
      "Videokamera, displey, mikrofon, karnay va yuqori tezlikdagi internet",
      "Faqat faks mashinasi",
      "Printer, skaner va plotter",
      "Faqat telefon va SMS"
    ],
    e: "Videokonferensiya uchun videokamera, displey ekrani, mikrofon, karnaylar va yuqori tezlikdagi tarmoq/internet aloqasi zarur. U vaqt va safar xarajatlarini tejaydi."
  },
  {
    g: 9, m: "4-bob. Kompyuter tarmoqlari", t: "4.02 Tarmoq xavfsizligi va kommunikatsiya", l: 2,
    q: "Darslikdagi taqqoslashga ko‘ra, faksning elektron pochtaga nisbatan afzalligi qaysi?",
    o: [
      "Qog‘oz shaklida yuborilgan hujjatga virus tushmaydi",
      "Spamni filtrlash oson",
      "Xabarlarni bloklash mumkin",
      "Ilova sifatida istalgan fayl yuboriladi"
    ],
    e: "Faks: ma’lumot maxfiy, virus tushmaydi, lekin bloklab/spam sifatida filtrlab bo‘lmaydi. Elektron pochta: bloklash va spam filtrlash oson, lekin ilovalarda virus bo‘lishi mumkin."
  },

  /* ===================== 5-bob. ATdan foydalanishning ta’siri ===================== */
  {
    g: 9, m: "5-bob. ATning ta’siri", t: "5.01 ATning bandlikka ta’siri", l: 1,
    q: "Kasb uchun yangi ko‘nikmalarni o‘rganish (masalan, hisobchining yangi dasturni o‘zlashtirishi) qanday ataladi?",
    o: ["Malaka oshirish", "Malakasizlanish", "Ishni bo‘lishish", "Siqilgan ish soatlari"],
    e: "Malaka oshirish — kasb bo‘yicha ko‘nikmalar to‘plamining yangilanishi yoki almashishi."
  },
  {
    g: 9, m: "5-bob. ATning ta’siri", t: "5.01 ATning bandlikka ta’siri", l: 2,
    q: "Malakali bo‘yoqchi o‘rnini kamroq ko‘nikma talab qiladigan operator boshqaruvidagi texnologiya egallashi qanday ataladi?",
    o: ["Malakasizlanish", "Malaka oshirish", "Erkin ish grafigi", "Avtomatlashtirilgan marketing"],
    e: "Malakasizlanish — mavjud ko‘nikmalarning yo‘qolishi: malakali ishchilar o‘rnini kam ko‘nikmali operatorlar boshqaradigan texnologiya egallaydi."
  },
  {
    g: 9, m: "5-bob. ATning ta’siri", t: "5.02 Ish uslubidagi o‘zgarishlar", l: 1,
    q: "Bir ish yuklamasi va soatlarining ikki yoki undan ortiq xodim o‘rtasida bo‘linishi nima deyiladi?",
    o: ["Ishni bo‘lishish", "Qisqartirilgan ish kuni", "Siqilgan ish soatlari", "Erkin ish grafigi"],
    e: "Ishni bo‘lishish — bir ishning ikki yoki undan ortiq xodimlar o‘rtasida bo‘linishi."
  },
  {
    g: 9, m: "5-bob. ATning ta’siri", t: "5.02 Ish uslubidagi o‘zgarishlar", l: 2,
    q: "Xodim haftalik 40 soatni 5 kun o‘rniga 4 kunda, har kuni 10 soatdan ishlab bajaradi. Bu qaysi ish uslubi?",
    o: ["Siqilgan ish soatlari", "Ishni bo‘lishish", "Qisqartirilgan ish kuni", "Malakasizlanish"],
    e: "Siqilgan ish soatlari — ish kunlari sonini kamaytirish uchun kunlik ish soatlarini oshirish. Qisqartirilgan ish kunida esa haftalik soatlar kamayadi."
  },
  {
    g: 9, m: "5-bob. ATning ta’siri", t: "5.03 Mikroprotsessorli uy qurilmalari", l: 1,
    q: "Mikroprotsessorli uy jihozlarining (kir yuvish, idish yuvish mashinalari) asosiy ijobiy ta’siri qaysi?",
    o: ["Uy ishlariga kam vaqt ketib, odamlarda bo‘sh vaqt ko‘payadi", "Odamlar jismonan faolroq bo‘ladi", "Elektr energiyasi umuman sarflanmaydi", "Jihozlar internetsiz ishlamaydi"],
    e: "Mikroprotsessorli jihozlar vaqtni tejaydi va ijtimoiy faoliyat uchun vaqt yaratadi."
  },
  {
    g: 9, m: "5-bob. ATning ta’siri", t: "5.03 Mikroprotsessorli uy qurilmalari", l: 2,
    q: "Darslikka ko‘ra mikroprotsessorli uy jihozlarining salbiy ta’siri nimada?",
    o: [
      "Odamlarning jismoniy harakati kamayadi, bu sog‘liqqa zarar keltirishi mumkin",
      "Ular uy ishlarini sekinlashtiradi",
      "Ular bo‘sh vaqtni kamaytiradi",
      "Ular faqat ofislarda ishlatiladi"
    ],
    e: "Avval qo‘lda kir yuvish, pol supurish kabi ishlar jismoniy mashg‘ulot vazifasini o‘tagan. Avtomatik jihozlar bu harakatni kamaytiradi."
  },
  {
    g: 9, m: "5-bob. ATning ta’siri", t: "5.04 ATning sog‘liqqa ta’siri", l: 1,
    q: "Klaviatura va sichqonchadan uzoq vaqt bir xil harakat qilish natijasida bilakda paydo bo‘ladigan og‘riqli holat qanday ataladi?",
    o: ["Takrorlanuvchi zo‘riqishdan shikastlanish (RSI)", "Pikselizatsiya", "Malakasizlanish", "Fishing"],
    e: "RSI bir harakat ko‘p marta takrorlanganda (klaviatura, sichqoncha) kelib chiqadi."
  },
  {
    g: 9, m: "5-bob. ATning ta’siri", t: "5.04 ATning sog‘liqqa ta’siri", l: 2,
    q: "Kompaniyalar xodimlarning RSI xavfini kamaytirish uchun qo‘llaydigan “ish rotatsiyasi” strategiyasi nimani anglatadi?",
    o: [
      "Har bir necha soatda boshqa turdagi ishga o‘tib, bir xil harakatni muntazam takrorlamaslik",
      "Ekran yorqinligini maksimal qilish",
      "Faqat tunda ishlash",
      "Klaviaturani har kuni almashtirish"
    ],
    e: "Ish rotatsiyasida xodim RSIga sabab bo‘ladigan bir xil ish bilan muntazam shug‘ullanmaslik uchun har bir necha soatda boshqa ishga o‘tadi."
  },

  /* ===================== 6-bob. AKTni turli sohalarga joriy etish ===================== */
  {
    g: 9, m: "6-bob. AKTning qo‘llanishi", t: "6.01 Kommunikatsiya dasturlari", l: 1,
    q: "Tashkilot barcha hujjatlarida bir xil logotip, shrift, ranglar va uslubdan foydalanishi qanday ataladi?",
    o: ["Korporativ stil", "Dupleks", "Multimedia taqdimot", "CGI"],
    e: "Korporativ stil tashkilotning umumiy qiyofasini aks ettiradi: istalgan hujjat qaysi tashkilotga tegishli ekani bir qarashda bilinadi."
  },
  {
    g: 9, m: "6-bob. AKTning qo‘llanishi", t: "6.01 Kommunikatsiya dasturlari", l: 2,
    q: "VOIP texnologiyasida ovoz ma’lumoti qanday uzatiladi?",
    o: [
      "Paketlarga ajratilib, turli yo‘nalishlar bo‘yicha yuboriladi va manzilda to‘g‘ri tartibda qayta yig‘iladi",
      "Faqat analog telefon liniyasi orqali bitta uzluksiz signal sifatida",
      "SMS xabar ko‘rinishida",
      "Faks orqali qog‘oz shaklida"
    ],
    e: "VOIP (Voice Over Internet Protocol) ovozni internet orqali yuboradi; bu “paketlar kommutatsiyasi” deb ataladi."
  },
  {
    g: 9, m: "6-bob. AKTning qo‘llanishi", t: "6.02 Ma’lumotlarni boshqarish dasturlari", l: 1,
    q: "ISBN nima?",
    o: [
      "Kitob raqamlari uchun 13 ta sondan iborat xalqaro standart",
      "Kutubxona a’zosining paroli",
      "Kitob muallifining shaxsiy raqami",
      "Kutubxona binosining manzili"
    ],
    e: "ISBN — kitob raqamlari uchun xalqaro standart, 13 ta sondan iborat; validatsiya uchun “check digit” (nazorat raqami) ga ega."
  },
  {
    g: 9, m: "6-bob. AKTning qo‘llanishi", t: "6.02 Ma’lumotlarni boshqarish dasturlari", l: 2,
    q: "Maktab kutubxonasi tizimida o‘quvchilar, kitoblar va qaydlar fayllari qaysi maydonlar orqali bir-biriga bog‘lanadi?",
    o: [
      "F.I.SH. va ISBN maydonlari tashqi kalit sifatida",
      "Faqat kitob nomi orqali",
      "Qaytarish sanasi orqali",
      "Fayllar bir-biriga bog‘lanmaydi"
    ],
    e: "Qaydlar jadvali o‘quvchi va ijaraga olingan kitobning ISBN raqamini saqlaydi; F.I.SH. va ISBN tashqi kalit sifatida uch faylni bog‘laydi."
  },
  {
    g: 9, m: "6-bob. AKTning qo‘llanishi", t: "6.03 O‘lchov dasturlari", l: 1,
    q: "Sensordan kelgan analog signalni kompyuter tushunadigan raqamli shaklga qaysi qurilma o‘giradi?",
    o: ["Analog-raqamli konvertor (ADC)", "Aktuator", "Modem emas, router", "Printer"],
    e: "Kompyuter analog signallarni tushunmaydi; ADC ularni raqamli shaklga o‘zgartirib kompyuterga yetkazadi."
  },
  {
    g: 9, m: "6-bob. AKTning qo‘llanishi", t: "6.03 O‘lchov dasturlari", l: 2,
    q: "Quyidagilardan qaysi biri RAQAMLI signalga misol?",
    o: ["Faqat yoniq/o‘chiq holatga ega chiroq vklyuchateli", "Chiroqni yumshoq pasaytiruvchi dimmer", "Inson ovozi", "Musiqa notasi tovushi"],
    e: "Raqamli signal faqat ikki holatga ega (1 yoki 0). Dimmer, inson ovozi va musiqa — doimiy o‘zgaruvchan analog signallar."
  },
  {
    g: 9, m: "6-bob. AKTning qo‘llanishi", t: "6.04 Boshqaruv dasturlari: toshbaqa grafikasi", l: 1,
    q: "Toshbaqa grafikasida toshbaqa chiziq qoldirmasdan harakatlanishi uchun qaysi buyruq beriladi?",
    o: ["PENUP", "PENDOWN", "FORWARD", "REPEAT"],
    e: "PENUP dan keyin toshbaqa PENDOWN buyrug‘i berilmaguncha iz qoldirmay harakatlanadi. PENUP dan keyin son kiritilmaydi."
  },
  {
    g: 9, m: "6-bob. AKTning qo‘llanishi", t: "6.04 Boshqaruv dasturlari: toshbaqa grafikasi", l: 2,
    q: "Teng tomonli uchburchak chizish uchun qaysi buyruq TO‘G‘RI?",
    o: ["REPEAT 3 (FORWARD 5, LEFT 120)", "REPEAT 3 (FORWARD 5, LEFT 60)", "REPEAT 4 (FORWARD 5, LEFT 90)", "REPEAT 3 (FORWARD 5, RIGHT 60)"],
    e: "Toshbaqa tashqi burchakka buriladi: 360° / 3 = 120°. LEFT 60 bilan uchburchak yopilmaydi (bu darslikdagi savolda ko‘rsatilgan xato)."
  },
  {
    g: 9, m: "6-bob. AKTning qo‘llanishi", t: "6.04 Boshqaruv dasturlari: isitish va issiqxona", l: 1,
    q: "Markaziy isitish tizimida xona harorati past bo‘lsa, kim isitish qozonini yoqish haqida qaror qabul qiladi?",
    o: ["Mikroprotsessor (sensor ma’lumoti va o‘rnatilgan qiymatni solishtirib)", "Harorat sensorining o‘zi", "Foydalanuvchi har safar qo‘lda", "Isitish qozonining o‘zi"],
    e: "Mikroprotsessor sensor o‘qigan haroratni oldindan o‘rnatilgan qiymat bilan solishtiradi va qozonni boshqaradi."
  },
  {
    g: 9, m: "6-bob. AKTning qo‘llanishi", t: "6.04 Boshqaruv dasturlari: isitish va issiqxona", l: 2,
    q: "Isitish tizimi ishlab tursa ham xona harorati o‘zgarmayapti. Darslikka ko‘ra bu qaysi omil — “xato holati” ga misol va nima sabab bo‘lishi mumkin?",
    o: [
      "Eshik yoki deraza ochiq qolgan yoki qozon nosoz — mikroprotsessor foydalanuvchiga xabar beradi",
      "O‘lchov oralig‘i juda qisqa — tizim o‘chadi",
      "Foydalanuvchi vaqtni noto‘g‘ri kiritgan — sensor o‘chadi",
      "Bu normal holat, hech narsa qilinmaydi"
    ],
    e: "Xato holatlari: harorat o‘zgarmasa, eshik/deraza ochiqligi, qozon yoki konditsioner nosozligi mumkin; mikroprotsessor foydalanuvchini ogohlantiradi."
  },
  {
    g: 9, m: "6-bob. AKTning qo‘llanishi", t: "6.05 Modellashtirish dasturlari", l: 1,
    q: "Oddiy kompyuter modellashtirish uchun elektron jadvallar qulay, chunki ular…",
    o: ["“What-If” (Agar … bo‘lsa-chi?) savollarini berish imkonini beradi", "faqat matnni formatlaydi", "internetsiz ishlamaydi", "rasm chizish uchun mo‘ljallangan"],
    e: "Masalan, bufet sotuvchisi olma narxini pasaytirsa foyda qanday o‘zgarishini elektron jadval modelida sinab ko‘rishi mumkin."
  },
  {
    g: 9, m: "6-bob. AKTning qo‘llanishi", t: "6.05 Modellashtirish dasturlari", l: 2,
    q: "Bino zilzilaga chidamliligini haqiqiy bino qurmasdan kompyuter modelida tekshirishning asosiy sabablari qaysilar?",
    o: [
      "Inson hayotini xavf ostiga qo‘ymaslik va katta mablag‘ sarflamaslik",
      "Model har doim haqiqatdan aniqroq natija beradi",
      "Modelga hech qanday formula kerak emas",
      "Model faqat chiroyli rasm chizish uchun"
    ],
    e: "Modellashtirish holatlarni xavfsiz sinash va loyiha ehtimolini katta xarajatsiz tekshirish imkonini beradi; prototip asl mahsulotdan arzon."
  },
  {
    g: 9, m: "6-bob. AKTning qo‘llanishi", t: "6.06 Ishlab chiqarishda robotlar", l: 1,
    q: "Ishlab chiqarishda robotlardan foydalanishning afzalligi qaysi?",
    o: ["Tez va tanaffussiz ishlaydi, sog‘liq uchun xavfli sharoitda ham ishlay oladi", "Dastlabki o‘rnatish juda arzon", "Kutilmagan vaziyatda mustaqil qaror qabul qiladi", "Hech qachon buzilmaydi"],
    e: "Robotlar tez, aniq, tanaffussiz ishlaydi va xavfli sharoitda ishlay oladi; bu mahsulot tannarxini tushiradi."
  },
  {
    g: 9, m: "6-bob. AKTning qo‘llanishi", t: "6.06 Ishlab chiqarishda robotlar", l: 2,
    q: "Robotlarning kamchiligi sifatida darslikda nima ko‘rsatilgan?",
    o: [
      "Dasturga kiritilmagan holatda harakatini o‘zgartira olmaydi va buzilsa, ishini bajaruvchi bo‘lmaydi",
      "Ular odamlardan sekin ishlaydi",
      "Ular mahsulot sifatini pasaytiradi",
      "Ularga har oy maosh to‘lash kerak"
    ],
    e: "Robotlar mustaqil qaror qabul qila olmaydi, dastlabki xarajatlari qimmat, ishsizlikka sabab bo‘ladi va buzilganda o‘rnini bosuvchi bo‘lmaydi."
  },
  {
    g: 9, m: "6-bob. AKTning qo‘llanishi", t: "6.07 Maktab boshqaruv tizimlari", l: 1,
    q: "Maktab registratsiya (davomat) shakllari qaysi texnologiyaga asoslanadi?",
    o: ["OMR", "MICR", "ANPR", "VOIP"],
    e: "Davomat shaklida o‘qituvchi tegishli katakni belgilaydi; skanerda belgining shakli emas, joylashuvi (koordinatasi) o‘qiladi — bu OMR."
  },
  {
    g: 9, m: "6-bob. AKTning qo‘llanishi", t: "6.07 Maktab boshqaruv tizimlari", l: 2,
    q: "OMR shakllarida ko‘rsatmalar va kataklar nega ko‘k yoki och pushti siyohda chop etiladi?",
    o: [
      "Odamlar bu siyohni o‘qiydi, skaner esa uni “ko‘rmaydi” — faqat qo‘yilgan belgilar o‘qiladi",
      "Bu siyoh magnitli bo‘ladi",
      "Bu rang shaklni chiroyli qiladi xolos",
      "Skaner faqat shu ranglarni o‘qiy oladi"
    ],
    e: "Bunday siyohni odamlar muammosiz o‘qiydi, skanerlash jarayoni esa tushunmaydi; kompyuterga faqat belgilarning koordinatalari kiritiladi."
  },
  {
    g: 9, m: "6-bob. AKTning qo‘llanishi", t: "6.08 Band qilish tizimlari", l: 1,
    q: "Onlayn band qilish tizimida bitta chipta ikki marta sotilmasligi uchun agent qidirayotgan paytda nima qilinadi?",
    o: ["Fayl (yoki o‘rindiq) qulflanadi", "Barcha chiptalar o‘chiriladi", "Tizim o‘chiriladi", "Chipta narxi oshiriladi"],
    e: "“Hech kim hech narsani o‘zgartira olmasligi uchun faylni qulflash” — ilg‘or tizimlar faqat alohida o‘rindiqlarni qulflaydi. Bu real vaqt tizimiga misol."
  },
  {
    g: 9, m: "6-bob. AKTning qo‘llanishi", t: "6.08 Band qilish tizimlari", l: 2,
    q: "Ko‘p mijozlar sayohatni onlayn emas, sayohat agentligi orqali band qilishining sabablaridan biri qaysi?",
    o: [
      "Agentliklar bankrotlikka qarshi sug‘urtalangan — muammo bo‘lsa pulni qaytarish osonroq",
      "Agentlik orqali chipta har doim arzonroq",
      "Onlayn band qilish faqat kechasi ishlaydi",
      "Agentliklar elektron pochta ishlatmaydi"
    ],
    e: "Sabablar: ba’zilarda internet yo‘q, agentlar sug‘urtalangan, jarayon murakkab va AKT savodxonligi o‘rtamiyona kishilar qiynaladi."
  },
  {
    g: 9, m: "6-bob. AKTning qo‘llanishi", t: "6.09 Bank dasturlari", l: 1,
    q: "Ish haqini naqd pulsiz, kompaniya hisobidan xodimning bank hisobiga o‘tkazish nima deyiladi?",
    o: ["Elektron pul o‘tkazmasi (EFT)", "ATM", "MICR", "Paketli ishlov"],
    e: "EFT — electronic fund transfer: kompaniya bankiga pul yechilishi, xodim bankiga esa pul o‘tkazilishi haqida EFT xabarlari yuboriladi."
  },
  {
    g: 9, m: "6-bob. AKTning qo‘llanishi", t: "6.09 Bank dasturlari", l: 2,
    q: "Kredit karta tizimi nima uchun ham real vaqt, ham paketli (batch) ishlovni talab qiladi?",
    o: [
      "To‘lov darhol tekshiriladi, oylik hisobot esa yig‘ilib oyda bir marta tayyorlanadi",
      "Kredit karta faqat oyda bir marta ishlaydi",
      "To‘lovlar faqat kechasi o‘tkaziladi",
      "Debet karta paketli, kredit karta real vaqtda ishlaydi"
    ],
    e: "Kredit kartada to‘lovlar real vaqtda boshqariladi, karta egasiga qarzdorlik ma’lumotnomasi esa oyda bir marta umumlashtirib yuboriladi (batch)."
  },
  {
    g: 9, m: "6-bob. AKTning qo‘llanishi", t: "6.10 Kompyuterlar tibbiyotda", l: 1,
    q: "Tibbiy ekspert tizimning to‘rt qismiga qaysi biri KIRMAYDI?",
    o: ["Antivirus", "Bilimlar bazasi", "Qoidalar bazasi", "Xulosa chiqarish tizimi"],
    e: "Ekspert tizim: bilimlar bazasi, foydalanuvchi interfeysi (HCI), qoidalar bazasi va xulosa chiqarish tizimi."
  },
  {
    g: 9, m: "6-bob. AKTning qo‘llanishi", t: "6.10 Kompyuterlar tibbiyotda", l: 2,
    q: "Dorixona qaydlari (dorilar axborot tizimi) ekspert tizimdan nimasi bilan farq qiladi?",
    o: [
      "Axborot tizimi ma’lumot berishga, ekspert tizim esa tashxis qo‘yishga yo‘naltirilgan",
      "Axborot tizimi kasallik tashxisini qo‘yadi",
      "Ekspert tizimda bilimlar bazasi bo‘lmaydi",
      "Ular orasida hech qanday farq yo‘q"
    ],
    e: "Ikkalasi o‘xshash, ammo ekspert tizimida tashxisga urg‘u beriladi, dori-darmonlar axborot tizimi esa ma’lumot berishga yo‘naltirilgan."
  },
  {
    g: 9, m: "6-bob. AKTning qo‘llanishi", t: "6.11 Kutubxonada kompyuterlar", l: 1,
    q: "Katta kutubxonada kitob ijaraga berilayotganda ma’lumot asosan qanday kiritiladi?",
    o: ["Shtrix-kod rider orqali", "Qo‘lda klaviaturada", "MICR orqali", "Mikrofon orqali"],
    e: "Katta kutubxonalarda deyarli barcha hollarda kitob shtrix-kodi va a’zolik kartasi shtrix-kod riderlar orqali o‘qiladi."
  },
  {
    g: 9, m: "6-bob. AKTning qo‘llanishi", t: "6.11 Kutubxonada kompyuterlar", l: 2,
    q: "Kutubxona tizimi muddati o‘tgan kitoblar uchun eslatmani qanday yuboradi?",
    o: [
      "Qaydlar jadvalida qaytarish sanasi o‘tgan yozuvlarni qidiradi va foydalanuvchi ID orqali uning manzili/e-pochtasini topib, avtomatik xat yuboradi",
      "Kutubxonachi har bir kitobni javonda qo‘lda tekshiradi",
      "Kitoblar faylidan ISBN ni o‘chirib tashlaydi",
      "Hech qanday eslatma yuborilmaydi"
    ],
    e: "Qaydlar jadvalida kitob ID, foydalanuvchi ID, berilgan va qaytarish sanasi bor; foydalanuvchi qaydlaridagi manzil yoki e-pochta orqali avtomatik eslatma yuboriladi."
  },
  {
    g: 9, m: "6-bob. AKTning qo‘llanishi", t: "6.12 Ekspert tizimlar", l: 1,
    q: "Ekspert tizim yordamida minerallarni qidirishda natija qanday ko‘rinishda beriladi?",
    o: ["Mineral mavjudligi ehtimolining foizdagi bahosi (prognoz)", "Mutlaq aniq javob “bor” yoki “yo‘q”", "Mineralning narxi", "Tuproq rasmi"],
    e: "Ekspert tizim sun’iy yo‘ldosh, seysmik sensor va geologik ma’lumotlar asosida ehtimollikni foizda prognoz qiladi; natija mutlaq aniq emas."
  },
  {
    g: 9, m: "6-bob. AKTning qo‘llanishi", t: "6.12 Ekspert tizimlar", l: 2,
    q: "Nima uchun eng yaxshi shaxmat kompyuterlari sun’iy intellektdan foydalanadi deyiladi?",
    o: [
      "Ular o‘z xatolaridan o‘rganib, keyingi o‘yinlarda xuddi shu xatoni takrorlamaydi",
      "Ular barcha yurishlarni tasodifiy tanlaydi",
      "Ularda qoidalar bazasi bo‘lmaydi",
      "Ular faqat insonga yutqazish uchun dasturlangan"
    ],
    e: "O‘rganish funksiyasiga ega ekspert tizimlar odatiy ekspert tizimlardan bir pog‘ona yuqori — ular sun’iy intellektdan foydalanadi."
  },
  {
    g: 9, m: "6-bob. AKTning qo‘llanishi", t: "6.13 Chakana savdo: zaxira va POS", l: 1,
    q: "Supermarket kassasida mahsulot skanerlanganda zaxiralar faylida nima o‘zgaradi?",
    o: ["Mahsulot soni bittaga kamayadi va minimal zaxira darajasi bilan solishtiriladi", "Mahsulot narxi oshadi", "Shtrix-kod o‘chiriladi", "Hech narsa o‘zgarmaydi"],
    e: "POS: shtrix-kod zaxiralar faylidan topiladi, sondan bir ayriladi, minimal daraja bilan taqqoslanadi; zarur bo‘lsa, qayta buyurtma ro‘yxatiga qo‘shiladi."
  },
  {
    g: 9, m: "6-bob. AKTning qo‘llanishi", t: "6.13 Chakana savdo: zaxira va POS", l: 2,
    q: "Qayta buyurtmalar menejer tasdiqlashi uchun kun davomida yig‘ilib, keyin birdaniga ko‘rib chiqilsa, tizim qanday tizim bo‘ladi?",
    o: ["Paketli (batch) tizim", "Real vaqt tizimi", "Ekspert tizim", "GIS"],
    e: "Minimal qiymatda darhol buyurtma berish — real vaqt. Buyurtmalarni to‘plab, menejerga tasdiqqa berish — paketli jarayon."
  },
  {
    g: 9, m: "6-bob. AKTning qo‘llanishi", t: "6.14 Tanib olish tizimlari", l: 1,
    q: "Avtomobil davlat raqamini kamera orqali o‘qib, qidiruvdagi transportlar bazasidan tekshiruvchi tizim qanday ataladi?",
    o: ["ANPR", "GPS", "EFTPOS", "OMR"],
    e: "ANPR — Automatic Number Plate Recognition; huquqbuzarliklar va jinoyatchilikka qarshi kurashda qo‘llanadi."
  },
  {
    g: 9, m: "6-bob. AKTning qo‘llanishi", t: "6.14 Tanib olish tizimlari", l: 2,
    q: "RFID chipli pasport qalbakilashtirishdan qanday himoyalaydi?",
    o: [
      "Chipda fotosurat, barmoq izlari va biometrik ma’lumotlar saqlanadi — suratni o‘zgartirsa ham chipdagi ma’lumotni o‘zgartirib bo‘lmaydi",
      "Pasport har kuni avtomatik yangilanadi",
      "Chip pasport egasining GPS joylashuvini doim yuboradi",
      "Chip faqat MICR siyohida chop etiladi"
    ],
    e: "RFID skaner chipni energiya bilan ta’minlaydi va ma’lumotlarni o‘qiydi; chipdagi biometrik ma’lumotni o‘zgartirib bo‘lmaydi."
  },
  {
    g: 9, m: "6-bob. AKTning qo‘llanishi", t: "6.15 Nazorat va kuzatuv tizimlari", l: 1,
    q: "Cookie fayl nima?",
    o: [
      "Veb sayt tomonidan kompyuteringizga joylashtiriladigan, sizni identifikatsiya qiluvchi kichik ma’lumot fayli",
      "Kompyuter virusi turi",
      "Brauzerni yangilovchi dastur",
      "Elektron pochta ilovasi"
    ],
    e: "Cookie fayllar sahifalararo harakatni osonlashtiradi va sozlamalarni saqlaydi, lekin target reklama va ma’lumot sotishda ham ishlatilishi mumkin."
  },
  {
    g: 9, m: "6-bob. AKTning qo‘llanishi", t: "6.15 Nazorat va kuzatuv tizimlari", l: 2,
    q: "Key logging qachon troyan dasturiga aylanadi?",
    o: [
      "Yashirincha ishlatilib, tizimda o‘zini yashirsa",
      "Ish beruvchi uni xodimlarga ochiq e’lon qilib ishlatsa",
      "U faqat sichqoncha harakatlarini yozsa",
      "U antivirus tomonidan o‘rnatilsa"
    ],
    e: "Ochiq ishlatilsa — kuzatuv vositasi; yashirincha ishlatilsa — josus dastur; tizimda o‘zini yashirsa — troyan."
  },
  {
    g: 9, m: "6-bob. AKTning qo‘llanishi", t: "6.16 Sun’iy yo‘ldosh tizimlari: GPS va GIS", l: 1,
    q: "GPS qabul qiluvchi o‘z joylashuvini aniqlash uchun kamida nechta sun’iy yo‘ldosh signalidan foydalanadi?",
    o: ["Uchta", "Bitta", "Ikkita", "O‘nta"],
    e: "Qabul qiluvchi kamida uchta sun’iy yo‘ldoshgacha masofani bilgach, trilateratsiya yordamida joylashuvni aniqlaydi."
  },
  {
    g: 9, m: "6-bob. AKTning qo‘llanishi", t: "6.16 Sun’iy yo‘ldosh tizimlari: GPS va GIS", l: 2,
    q: "GIS ning odatiy navigatsiyadan farqi nimada?",
    o: [
      "U yer yuzasi haqidagi turli ma’lumotlarni (aholi, daryolar, yo‘llar, tuproq) qatlam-qatlam bitta xaritada birlashtiradi",
      "U faqat eng qisqa yo‘lni hisoblaydi",
      "U sun’iy yo‘ldoshsiz ishlay olmaydi va faqat avtomobilda bo‘ladi",
      "U faqat ob-havo prognozini beradi"
    ],
    e: "GIS — geografik ma’lumotlarni to‘plash, saqlash, tekshirish va xarita sifatida ko‘rsatish tizimi; modellashtirish va resurslarni baholashda qo‘llanadi."
  },

  /* ===================== 7-bob. Tizimning xizmat davri ===================== */
  {
    g: 9, m: "7-bob. Tizimning xizmat davri", t: "7.01 Tahlil", l: 1,
    q: "Tizim tahlilchisi qisqa vaqt ichida ko‘p xodimning fikrini bilib olmoqchi. Qaysi usul eng mos?",
    o: ["So‘rovnoma", "Kuzatish", "Intervyu", "Hujjat to‘plash"],
    e: "So‘rovnoma tez va sodda, tahlilchi vaqtini tejaydi; kamchiligi — savollar bilan chegaralangan va ba’zilar jiddiy qabul qilmaydi."
  },
  {
    g: 9, m: "7-bob. Tizimning xizmat davri", t: "7.01 Tahlil", l: 2,
    q: "Kuzatish usulining asosiy kamchiligi nima?",
    o: [
      "Odam kuzatilayotganini bilsa, odatdagidek ishlamasligi mumkin",
      "Juda ko‘p xodim ishtirok etishi kerak",
      "Ma’lumot faqat savollar bilan cheklanadi",
      "Hujjatlarni tushunish qiyin"
    ],
    e: "Kuzatish xolis, bevosita ma’lumot beradi, lekin kuzatilayotgan odam o‘zini boshqacha tutishi mumkin."
  },
  {
    g: 9, m: "7-bob. Tizimning xizmat davri", t: "7.02 Loyihalash va validatsiya", l: 1,
    q: "Kiritilgan ma’lumot to‘g‘ri formatda ekanini (masalan, telefon raqami belgilangan shaklda) tekshiradigan validatsiya qaysi?",
    o: ["Format tekshiruvi", "Uzunlik tekshiruvi", "Mavjudlik tekshiruvi", "Nazorat raqami tekshiruvi"],
    e: "Uzunlik — belgilar soni; tur — raqam, sana va h.k.; format — belgilangan shakl; mavjudlik — majburiy maydon to‘ldirilgani; nazorat raqami — oxirgi raqam orqali tekshirish."
  },
  {
    g: 9, m: "7-bob. Tizimning xizmat davri", t: "7.02 Loyihalash va validatsiya", l: 2,
    q: "Ma’lumotni ikki marta kiritib, ikkala to‘plamni solishtirish qanday tekshiruv hisoblanadi?",
    o: ["Verifikatsiya", "Validatsiya", "Birlik sinovi", "Parallel ishga tushirish"],
    e: "Verifikatsiya ma’lumot boshlang‘ich manbadan tizimga to‘g‘ri uzatilishini ta’minlaydi: vizual tekshiruv yoki ikki marta kiritish. Validatsiya esa ma’lumot asosli ekanini tekshiradi."
  },
  {
    g: 9, m: "7-bob. Tizimning xizmat davri", t: "7.03 Ishlab chiqish va sinov", l: 1,
    q: "Har bir modulni alohida sinash qanday ataladi?",
    o: ["Birlik sinovi", "Integratsion sinov", "Funksional sinov", "Parallel sinov"],
    e: "Avval har bir modul alohida (birlik sinovi), keyin barcha modullar birga (integratsion sinov) sinovdan o‘tkaziladi."
  },
  {
    g: 9, m: "7-bob. Tizimning xizmat davri", t: "7.03 Ishlab chiqish va sinov", l: 2,
    q: "0–100 ballik baholarni qabul qiluvchi tizimni sinashda 105 qiymati qaysi turdagi sinov ma’lumoti?",
    o: ["Noodatiy (xato) ma’lumot", "Normal ma’lumot", "Kritik ma’lumot", "Real ma’lumot"],
    e: "105 — tizim qabul qilmasligi kerak bo‘lgan noto‘g‘ri qiymat (noodatiy ma’lumot). 0 va 100 — kritik, 50 — normal."
  },
  {
    g: 9, m: "7-bob. Tizimning xizmat davri", t: "7.04 Amalga oshirish usullari", l: 1,
    q: "Eski tizim to‘xtatilib, darhol yangi tizim ishga tushirilsa, bu qaysi usul?",
    o: ["Bevosita o‘tish", "Parallel ishga tushirish", "Bosqichma-bosqich qo‘llash", "Tajriba tariqasida qo‘llash"],
    e: "Bevosita o‘tish oddiy va arzon, lekin yangi tizimda xato bo‘lsa, zaxira bo‘lmaydi va ma’lumot yo‘qolishi mumkin."
  },
  {
    g: 9, m: "7-bob. Tizimning xizmat davri", t: "7.04 Amalga oshirish usullari", l: 2,
    q: "Imtihon kengashi natijalar xato chiqmasligi juda muhim bo‘lgani uchun yangi tizim natijalarini eski tizim natijalari bilan solishtirmoqchi. Qaysi usul mos?",
    o: ["Parallel ishga tushirish", "Bevosita o‘tish", "Tajriba tariqasida qo‘llash", "Bosqichma-bosqich qo‘llash"],
    e: "Parallel ishga tushirishda ikkala tizim yonma-yon ishlaydi, natijalar solishtiriladi; eski tizim zaxira bo‘ladi. Qimmat, lekin muhim tizimlar uchun o‘zini oqlaydi."
  },
  {
    g: 9, m: "7-bob. Tizimning xizmat davri", t: "7.05 Hujjatlashtirish", l: 1,
    q: "Qaysi hujjat FOYDALANUVCHI qo‘llanmasiga tegishli?",
    o: ["Nosozliklarni bartaraf etish qo‘llanmasi va FAQ", "Dastur kodi va izohlar", "O‘zgaruvchilar ro‘yxati", "Fayl tuzilmasi"],
    e: "Foydalanuvchi hujjati: maqsad, cheklovlar, talablar, glossariy, foydalanish tartibi, xato xabarlari, nosozliklarni bartaraf etish, FAQ. Kod, o‘zgaruvchilar, fayl tuzilmasi — texnik hujjat."
  },
  {
    g: 9, m: "7-bob. Tizimning xizmat davri", t: "7.05 Hujjatlashtirish", l: 2,
    q: "Texnik hujjatlardagi “qo‘llangan o‘zgaruvchilar ro‘yxati” nima uchun kerak?",
    o: [
      "Texnik xodimga xizmat ko‘rsatishda yordam berish va o‘zgaruvchilar takrorlanmasligini ta’minlash",
      "Foydalanuvchiga tizimni qanday yoqishni o‘rgatish",
      "Xodimlar maoshini hisoblash",
      "Mijozga reklama sifatida ko‘rsatish"
    ],
    e: "Ro‘yxatda o‘zgaruvchi nomi, qo‘llanish sababi va ma’lumot turi bo‘ladi; u texnik xizmatda yordam beradi va nomlar takrorlanishining oldini oladi."
  },
  {
    g: 9, m: "7-bob. Tizimning xizmat davri", t: "7.06 Baholash va xizmat ko‘rsatish", l: 1,
    q: "Dasturiy ta’minotdagi xatolar (baglar)ni topib tuzatish xizmat ko‘rsatishning qaysi shakli?",
    o: ["Xatolarni tuzatish (rejali xizmat)", "Moslashuvchan xizmat", "Mukammal xizmat", "Parallel xizmat"],
    e: "Uch shakl: xatolarni tuzatish, qo‘shimcha funksiyalar qo‘shish (moslashuvchan) va samaradorlikni yaxshilash (mukammal)."
  },
  {
    g: 9, m: "7-bob. Tizimning xizmat davri", t: "7.06 Baholash va xizmat ko‘rsatish", l: 2,
    q: "Tizim xizmat davrining zinapoya modelida “iteratsiya” nimani anglatadi?",
    o: [
      "Mahsulotni yaxshilash uchun istalgan oldingi bosqichga qaytish",
      "Bosqichlarni faqat bir marta, qaytmasdan bajarish",
      "Tizimni butunlay o‘chirish",
      "Faqat hujjatlarni chop etish"
    ],
    e: "Bosqichlar: tahlil, loyihalash, ishlab chiqish va sinov, joriy qilish, hujjatlashtirish, baholash. Har bir bosqichda oldingisiga qaytish mumkin — bu iteratsiya."
  },

  /* ===================== 8-bob. Xavfsizlik ===================== */
  {
    g: 9, m: "8-bob. Xavfsizlik", t: "8.01 Xavfsizlik texnikasi muammolari", l: 1,
    q: "Klaviaturaga ichimlik to‘kilsa, BIRINCHI navbatda nima qilish kerak?",
    o: [
      "Kompyuterni darhol elektr manbayidan uzish",
      "Dastur orqali kompyuter o‘chishini kutish",
      "Klaviaturani qattiq silkitish",
      "Fen bilan darhol quritish va ishlashda davom etish"
    ],
    e: "Kompyuterni zudlik bilan tokdan uzish elektronikani saqlab qolishi mumkin; keyin suyuqlik artiladi, qurilmalar uziladi, silkitilmaydi."
  },
  {
    g: 9, m: "8-bob. Xavfsizlik", t: "8.01 Xavfsizlik texnikasi muammolari", l: 2,
    q: "1000 vattli qurilma 120 voltda ishlaydi. U taxminan qancha tok (amper) iste’mol qiladi?",
    o: ["Taxminan 8,3 A", "120 000 A", "0,12 A", "1120 A"],
    e: "Tok kuchi = quvvat / kuchlanish = 1000 / 120 ≈ 8,33 A — 20 amperlik zanjirning qariyb yarmi. Bir uzaytirgichdagi qurilmalar tokini qo‘shib hisoblash kerak."
  },
  {
    g: 9, m: "8-bob. Xavfsizlik", t: "8.02 Elektron xavfsizlik", l: 1,
    q: "Brauzerdagi InPrivate (yashirin) rejimi nimani ta’minlaydi?",
    o: [
      "Seans ma’lumotlari saqlanmaydi — boshqalar qaysi saytlarga kirganingizni ko‘ra olmaydi",
      "Kompyuterni viruslardan to‘liq himoyalaydi",
      "Saytlar sizni hech qachon kuzata olmaydi",
      "Internet tezligini oshiradi"
    ],
    e: "InPrivate faqat shu oynadagi seans tarixini saqlamaydi; oyna yopilsa, seans tugaydi. U virusdan himoya qilmaydi."
  },
  {
    g: 9, m: "8-bob. Xavfsizlik", t: "8.02 Elektron xavfsizlik", l: 2,
    q: "Botnet nima?",
    o: [
      "Virusli dasturlar yordamida egallangan kompyuterlar tarmog‘i — buzg‘unchi undan spam yoki hujum uchun foydalanadi",
      "Ijtimoiy tarmoqlardagi do‘stlar ro‘yxati",
      "Antivirus dasturining bir turi",
      "Botlar uchun xavfsiz brauzer"
    ],
    e: "Botnetlar spam yuborish yoki serverga u ko‘tara olmaydigan darajada ko‘p so‘rov yuborish uchun malware yordamida yaratiladi."
  },
  {
    g: 9, m: "8-bob. Xavfsizlik", t: "8.03 Ma’lumotlar xavfsizligi: parol, biometriya, SSL", l: 1,
    q: "Brauzerda sayt manzili qaysi protokol bilan boshlansa, aloqa shifrlangan (xavfsiz) hisoblanadi?",
    o: ["https://", "http://", "ftp://", "www."],
    e: "SSL bilan himoyalangan saytlar https protokolidan foydalanadi va manzil qatorida yopiq qulf ikonkasi ko‘rinadi."
  },
  {
    g: 9, m: "8-bob. Xavfsizlik", t: "8.03 Ma’lumotlar xavfsizligi: parol, biometriya, SSL", l: 2,
    q: "Raqamli sertifikat bilan SSL o‘rtasidagi farq nimada?",
    o: [
      "Raqamli sertifikat egasining hisob ma’lumotlarini (ism, e-pochta, ochiq kalit, imzo, muddat) hosil qiladi; SSL esa internetda xabarlar uzatish xavfsizligini boshqaradi",
      "SSL — bu fayl, raqamli sertifikat — bu protokol",
      "Ular aynan bir xil narsa",
      "Raqamli sertifikat faqat printerlar uchun"
    ],
    e: "Raqamli sertifikat: ism, e-pochta, seriya raqami, ochiq kalit, amal qilish muddati, raqamli imzo. SSL — shifrlangan kanal o‘rnatuvchi protokol."
  },
  {
    g: 9, m: "8-bob. Xavfsizlik", t: "8.03 Phishing, pharming, viruslar va fayervol", l: 1,
    q: "Bankdan kelgandek ko‘rinadigan, karta ma’lumotlarini so‘rovchi soxta elektron xat qanday hujum?",
    o: ["Phishing", "Pharming", "Vishing", "Botnet"],
    e: "Phishing — elektron xat orqali aldov yo‘li bilan maxfiy ma’lumot olish. Vishing — telefon orqali, smishing — SMS orqali."
  },
  {
    g: 9, m: "8-bob. Xavfsizlik", t: "8.03 Phishing, pharming, viruslar va fayervol", l: 2,
    q: "Pharming phishingdan nimasi bilan farq qiladi?",
    o: [
      "Kompyuter yoki serverga o‘rnatilgan zararli kod to‘g‘ri manzil kiritilsa ham foydalanuvchini soxta saytga yo‘naltiradi",
      "Pharming faqat SMS orqali amalga oshiriladi",
      "Pharming faqat telefon qo‘ng‘irog‘i orqali bo‘ladi",
      "Pharming hech qanday zarar keltirmaydi"
    ],
    e: "Phishing soxta xat yoki link orqali saytga undaydi; pharming esa DNS/kompyuterdagi zararli kod orqali foydalanuvchini o‘zi bilmagan holda soxta saytga yo‘naltiradi."
  },

  /* ===================== 9-bob. Auditoriya ===================== */
  {
    g: 9, m: "9-bob. Auditoriya", t: "9.01 Auditoriya ehtiyojlarini baholash", l: 1,
    q: "Taqdimot yaratishni nimadan boshlash kerakligini bilmasangiz, darslik nimani tavsiya qiladi?",
    o: ["Auditoriyani tahlil qilishdan", "Slaydlar dizaynidan", "Shrift tanlashdan", "Animatsiya qo‘shishdan"],
    e: "Avval auditoriya kimligini, mavzu bo‘yicha bilimi va demografik omillarini aniqlash kerak; shundan keyin taqdimot ularning talablariga moslanadi."
  },
  {
    g: 9, m: "9-bob. Auditoriya", t: "9.01 Auditoriya ehtiyojlarini baholash", l: 2,
    q: "Auditoriya tahlili uchun so‘rovnoma tayyorlandi. Keyingi to‘g‘ri qadam qaysi?",
    o: [
      "Maqsadli auditoriyaning vakil guruhini tanlash — hammani jalb qilish shart emas",
      "Butun aholini so‘rovga jalb qilish",
      "Natijalarni tahlil qilmasdan taqdimot yaratish",
      "So‘rovnomani faqat o‘zingiz to‘ldirish"
    ],
    e: "Savollar tayyor bo‘lgach, vakil guruh tanlanadi, so‘ng natijalar (masalan, elektron jadvalda) tahlil qilinadi."
  },
  {
    g: 9, m: "9-bob. Auditoriya", t: "9.02 Huquqiy, axloqiy va madaniy jihatlar", l: 1,
    q: "Mualliflik huquqi haqida qaysi fikr to‘g‘ri?",
    o: [
      "U avtomatik huquq — asar yaratilishi bilan himoyalanadi, ariza berish shart emas",
      "U faqat © belgisi qo‘yilgan asarlarga tegishli",
      "U faqat qog‘ozdagi kitoblarni himoya qiladi",
      "Dasturiy ta’minot mualliflik huquqi bilan himoyalanmaydi"
    ],
    e: "Mualliflik huquqi ariza talab qilmaydigan avtomatik qonun; kitob, musiqa, san’at, dastur, veb sayt, o‘yin va ma’lumotlar bazasini himoya qiladi."
  },
  {
    g: 9, m: "9-bob. Auditoriya", t: "9.02 Huquqiy, axloqiy va madaniy jihatlar", l: 2,
    q: "Dasturiy ta’minotni xarid qilganingizda aslida nimani sotib olasiz?",
    o: [
      "Dasturning o‘zini emas, undan foydalanish huquqini (litsenziyani)",
      "Dasturning manba kodiga to‘liq egalik huquqini",
      "Dasturni cheksiz nusxalab sotish huquqini",
      "Dastur muallifining intellektual mulkini"
    ],
    e: "Dastur xarid qilinganda foydalanish sharti va narxini belgilovchi litsenziya sotib olinadi; ko‘p dasturlar o‘rnatishda takrorlanmas litsenziya kalitini talab qiladi."
  },

  /* ===================== 10-bob. Kommunikatsiya ===================== */
  {
    g: 9, m: "10-bob. Kommunikatsiya", t: "10.01 Elektron pochta orqali muloqot", l: 1,
    q: "Elektron xat nusxasini boshqa qabul qiluvchilarga BILDIRMASDAN yana bir kishiga yuborish uchun qaysi maydon ishlatiladi?",
    o: ["bcc", "cc", "Subject (Mavzu)", "To (Kimga)"],
    e: "cc — nusxani ochiq yuborish; bcc — qabul qiluvchiga bildirmagan holda boshqa kishiga yuborish."
  },
  {
    g: 9, m: "10-bob. Kommunikatsiya", t: "10.01 Elektron pochta orqali muloqot", l: 2,
    q: "Spamdan himoyalanish uchun qaysi harakat TO‘G‘RI?",
    o: [
      "Marketing xatlaridagi “unsubscribe” va “Mark as Spam / Block Senders” funksiyalaridan foydalanish",
      "Barcha saytlarda ro‘yxatdan o‘tishda reklama olishga rozilik belgisini qo‘yish",
      "Spam xatdagi linkni bosib, haqiqiy ekanini tekshirish",
      "Elektron pochta manzilini ochiq forumlarga joylash"
    ],
    e: "Ro‘yxatdan o‘tishda shartlarni o‘qish, unsubscribe, spam sifatida belgilash, yuboruvchini bloklash, ishonchli parol va yangilangan antivirus — spamga qarshi choralar."
  },
  {
    g: 9, m: "10-bob. Kommunikatsiya", t: "10.02 Internetdan samarali foydalanish", l: 1,
    q: "Internet va Butunjahon internet tarmog‘i (WWW) farqi nimada?",
    o: [
      "Internet — tarmoqlar infratuzilmasi; WWW — internet orqali HTTP yordamida axborotdan (veb sahifalardan) foydalanish usuli",
      "Ular aynan bir xil narsa",
      "WWW — kabellar, internet — veb sahifalar",
      "Elektron pochta WWW orqali ishlaydi, internet orqali emas"
    ],
    e: "Internet — millionlab kompyuterlarni bog‘lovchi tarmoqlar yig‘indisi. WWW internet ustida ishlaydi va HTTPdan foydalanadi. Elektron pochta esa SMTP orqali internetdan foydalanadi."
  },
  {
    g: 9, m: "10-bob. Kommunikatsiya", t: "10.02 Internetdan samarali foydalanish", l: 2,
    q: "Blog va wiki o‘rtasidagi asosiy farq qaysi?",
    o: [
      "Wikida foydalanuvchilar kontentni o‘zgartira oladi (guruh fikri), blogda esa faqat izoh qoldiriladi, postni o‘zgartirib bo‘lmaydi (shaxsiy fikr)",
      "Blog faqat video, wiki faqat matn",
      "Wikiga izoh yozib bo‘lmaydi",
      "Blogni hamma tahrirlay oladi, wikini esa faqat muallif"
    ],
    e: "Blog — fikrlar kundaligi, o‘quvchi izoh qoldiradi. Wiki — hamkorlikdagi sayt (masalan, Wikipedia), kontentni foydalanuvchilar yaratadi va tahrirlaydi."
  },

  /* ===================== 11-bob. Fayllar boshqaruvi ===================== */
  {
    g: 9, m: "11-bob. Fayllar boshqaruvi", t: "11.01 Fayllarni samarali boshqarish va formatlar", l: 1,
    q: "Elektron jadval ma’lumotlarini istalgan jadval dasturida ochish mumkin bo‘lgan, qiymatlari vergul bilan ajratilgan standart format qaysi?",
    o: [".csv", ".psd", ".zip", ".css"],
    e: "CSV — comma separated values: ma’lumotlar vergul bilan ajratilgan matn sifatida saqlanadi; formulalar va formatlash saqlanmaydi."
  },
  {
    g: 9, m: "11-bob. Fayllar boshqaruvi", t: "11.01 Fayllarni samarali boshqarish va formatlar", l: 2,
    q: "Formula va rangli kataklari bor Excel jadvali .csv formatida saqlansa, nima bo‘ladi?",
    o: [
      "Faqat qiymatlar saqlanadi — formulalar va formatlash (rang, qalin matn) yo‘qoladi",
      "Hammasi, jumladan formulalar ham saqlanadi",
      "Fayl ochilmaydigan bo‘lib qoladi",
      "Faqat ranglar saqlanadi, qiymatlar yo‘qoladi"
    ],
    e: "Excel “CSV bilan mos kelmaydigan xususiyatlar bo‘lishi mumkin” deb ogohlantiradi: formatlash va formulalar saqlanmaydi."
  },
  {
    g: 9, m: "11-bob. Fayllar boshqaruvi", t: "11.02 Fayl hajmini kamaytirish (siqish)", l: 1,
    q: "Qaysi siqish turida asl faylni hech qanday yo‘qotishsiz to‘liq tiklash mumkin?",
    o: ["Yo‘qotishsiz siqish (masalan, .zip)", "Yo‘qotishli siqish (masalan, .jpg)", "Pikselizatsiya", "Qoralama chop etish"],
    e: "Yo‘qotishsiz siqish takrorlanuvchi namunalarni belgilar bilan almashtiradi va asl faylni to‘liq tiklaydi; matn va sonli ma’lumotlar uchun ishlatiladi."
  },
  {
    g: 9, m: "11-bob. Fayllar boshqaruvi", t: "11.02 Fayl hajmini kamaytirish (siqish)", l: 2,
    q: "Nima uchun moviy osmon tasvirini yo‘qotishli (JPEG) siqish odatda maqbul, lekin elektron jadval faylini — yo‘q?",
    o: [
      "Ko‘z ilg‘amaydigan rang farqlarini olib tashlash tasvirga sezilarli ta’sir qilmaydi, jadvaldagi sonlarning yo‘qolishi esa xatoga olib keladi",
      "Elektron jadval fayllari hech qachon katta bo‘lmaydi",
      "JPEG faqat matnni siqadi",
      "Yo‘qotishli siqish faylni kattalashtiradi"
    ],
    e: "Yo‘qotishli siqish tasvir, audio, grafika uchun; ma’lumot yo‘qolishi mumkin bo‘lmagan matn va sonli fayllar uchun yo‘qotishsiz siqish ishlatiladi."
  },

  /* ===================== 12-bob. Tasvirlar ===================== */
  {
    g: 9, m: "12-bob. Tasvirlar", t: "12.01 Tasvirlarni joylashtirish va tahrirlash", l: 1,
    q: "Tasvirning keraksiz qismlarini qirqib tashlab, zarur qismini qoldiruvchi buyruq qaysi?",
    o: ["Crop", "Rotate", "Resize", "Reflect"],
    e: "Crop — keraksiz qismni qirqadi; Rotate — burchak bo‘ylab buradi; Resize — o‘lchamni o‘zgartiradi; Reflect (Flip) — teskari aksini yaratadi."
  },
  {
    g: 9, m: "12-bob. Tasvirlar", t: "12.01 Tasvirlarni joylashtirish va tahrirlash", l: 2,
    q: "Tasvir o‘lchamini o‘zgartirganda tomonlar nisbati (aspect ratio) buzilmasligi uchun nima qilish kerak?",
    o: [
      "Burchakdagi o‘lcham nuqtasidan tortish (eni va bo‘yini bir vaqtda o‘zgartirish)",
      "Faqat o‘ng tomondagi nuqtani tortish",
      "Faqat pastki nuqtani tortish",
      "Tasvirni gorizontal akslantirish"
    ],
    e: "Faqat bir tomon o‘zgartirilsa, tasvir cho‘ziladi/siqiladi. Burchak nuqtasi (Ctrl bilan) eni va bo‘yini birga o‘zgartirib, nisbatni saqlaydi."
  },
  {
    g: 9, m: "12-bob. Tasvirlar", t: "12.01 Matnni tasvir atrofida joylash (Wrap Text)", l: 1,
    q: "Sertifikatga shaffof belgi (watermark) qo‘yish uchun tasvirni matnning ORQASIGA joylovchi Wrap Text sozlamasi qaysi?",
    o: ["Behind Text", "In Front of Text", "Square", "Top and Bottom"],
    e: "Behind Text — tasvir matn orqasida; In Front of Text — tasvir matn ustida; Square — matn tasvir chegarasi atrofida; Top and Bottom — tasvir o‘z qatorida."
  },
  {
    g: 9, m: "12-bob. Tasvirlar", t: "12.01 Matnni tasvir atrofida joylash (Wrap Text)", l: 2,
    q: "Veb saytdagi tasvir sekin yuklanmoqda. Darslikka ko‘ra fayl hajmini kamaytirishning to‘g‘ri yo‘li qaysi?",
    o: [
      "Tasvir aniqligini (bir dyuymdagi piksellar sonini) pasaytirish",
      "Tasvirni gorizontal akslantirish",
      "Rang to‘yinganligini oshirish",
      "Tasvirni 180° aylantirish"
    ],
    e: "Aniqlik — bir dyuymdagi piksellar soni. Uni pasaytirish fayl hajmini kamaytiradi va sahifa tezroq yuklanadi."
  },

  /* ===================== 13-bob. Loyihalash ===================== */
  {
    g: 9, m: "13-bob. Loyihalash (maket)", t: "13.01 Maqsad va auditoriyaga mos hujjat", l: 1,
    q: "Matnni Cut/Paste va Copy/Paste bilan ko‘chirishning farqi nimada?",
    o: [
      "Cut/Paste da matn asl joyidan o‘chadi, Copy/Paste da asl joyida qoladi",
      "Ular aynan bir xil ishlaydi",
      "Copy/Paste matnni o‘chiradi, Cut/Paste esa qoldiradi",
      "Cut/Paste faqat tasvirlar uchun ishlaydi"
    ],
    e: "Kesib joylashda ma’lumot avvalgi o‘rnidan o‘chadi; nusxalab joylashda asl nusxa o‘z joyida qoladi."
  },
  {
    g: 9, m: "13-bob. Loyihalash (maket)", t: "13.01 Maqsad va auditoriyaga mos hujjat", l: 2,
    q: "Elektron jadvalda raqam oldidagi nol (masalan, 00125) ko‘rinib turishi uchun katakka qaysi format beriladi?",
    o: ["Text", "General", "Number", "Currency"],
    e: "General va Number formatlarida boshidagi nollar ko‘rinmaydi; ularni saqlash uchun Text formati ishlatiladi."
  },
  {
    g: 9, m: "13-bob. Loyihalash (maket)", t: "13.02 Header va Footer", l: 1,
    q: "Header va footer (kolontitullar) qayerda joylashadi?",
    o: ["Header — sahifa yuqorisida, footer — sahifa pastida", "Ikkalasi ham sahifa o‘rtasida", "Header — pastda, footer — yuqorida", "Faqat birinchi sahifada"],
    e: "Kolontitullar muallif ismi, sana, sahifa raqami, sarlavha kabi ma’lumotlarni sahifaning yuqori (header) va quyi (footer) qismida ko‘rsatadi."
  },
  {
    g: 9, m: "13-bob. Loyihalash (maket)", t: "13.02 Header va Footer", l: 2,
    q: "Nega sahifa raqamini footerga kiritish har bir sahifaga qo‘lda yozishdan qulay?",
    o: [
      "Footerdagi sahifa raqami avtomatlashgan obyekt — u bir marta kiritiladi va har bir sahifada avtomatik yangilanadi",
      "Footerdagi matn chop etilmaydi",
      "Footer faqat birinchi sahifada ko‘rinadi",
      "Sahifa raqamini faqat qo‘lda kiritish mumkin"
    ],
    e: "Sana, vaqt, sahifa raqami kabi avtomatlashgan obyektlar bir marta kiritilib, barcha sahifalarda avtomatik paydo bo‘ladi va yangilanadi."
  },

  /* ===================== 14-bob. Stillar ===================== */
  {
    g: 9, m: "14-bob. Stillar", t: "14.01 Korporativ brend va xos stil", l: 1,
    q: "Kompaniyaning barcha hujjatlarida bir xil rang, logotip va shriftdan foydalanishning asosiy maqsadi nima?",
    o: [
      "Kompaniyani oson tanish va eslab qolish (korporativ brendni mustahkamlash)",
      "Hujjat hajmini kamaytirish",
      "Virusdan himoyalanish",
      "Printer siyohini tejash"
    ],
    e: "Muntazam stil kompaniyani boshqalardan ajratadi; odamlar stilni qancha ko‘p ko‘rsa, kompaniyani shuncha oson eslaydi."
  },
  {
    g: 9, m: "14-bob. Stillar", t: "14.01 Korporativ brend va xos stil", l: 2,
    q: "Taqdimotdagi BARCHA slaydlar bir xil dizaynda bo‘lishini ta’minlovchi asosiy slayd qanday ataladi?",
    o: ["Master slayd", "Title slayd", "Watermark", "Placeholder"],
    e: "Master slayd barcha slaydlar uchun dizaynni belgilaydi; DTP dasturlarida master sahifa, veb sahifalarda esa CSS shu vazifani bajaradi."
  },
  {
    g: 9, m: "14-bob. Stillar", t: "14.02–14.03 Stillar va sahifa izchilligi", l: 1,
    q: "Sans-serif shrifti nima?",
    o: [
      "Belgilarida qo‘shimcha bezaklar (serif — kichik chiziqchalar) bo‘lmagan shrift",
      "Faqat qo‘lyozma uslubidagi shrift",
      "Faqat bosh harflardan iborat shrift",
      "Faqat Mac kompyuterlarda ishlaydigan shrift"
    ],
    e: "Sans-serif (masalan, Arial, Verdana) — bezaksiz, aniq va jiddiy ko‘rinadi; serif shriftlar (masalan, Times New Roman) bezakli chiziqchalarga ega."
  },
  {
    g: 9, m: "14-bob. Stillar", t: "14.02–14.03 Stillar va sahifa izchilligi", l: 2,
    q: "Xatboshining oxirgi qatori keyingi sahifa boshida yolg‘iz qolib ketmasligi uchun stilda qaysi sozlama yoqiladi?",
    o: ["Widow and Orphan Control", "Line spacing: Double", "Outline", "Quick Parts"],
    e: "Paragraph → Line and Page Breaks bo‘limida Widow and Orphan Control katagi belgilanadi — u yakka qolgan qatorlarning oldini oladi."
  },

  /* ===================== 15-bob. Xatolarni tekshirish ===================== */
  {
    g: 9, m: "15-bob. Xatolarni tekshirish", t: "15.01 Dasturlar yordamida xatolarni tekshirish (validatsiya)", l: 1,
    q: "Kiritilgan son belgilangan oraliqda (masalan, 10 dan 30 gacha) ekanini tekshiruvchi validatsiya qaysi?",
    o: ["Range check (oraliqni tekshirish)", "Presence check", "Length check", "Type check"],
    e: "Range check — oraliq; presence check — maydon bo‘sh emasligi; length check — belgilar soni; type check — ma’lumot turi."
  },
  {
    g: 9, m: "15-bob. Xatolarni tekshirish", t: "15.01 Dasturlar yordamida xatolarni tekshirish (validatsiya)", l: 2,
    q: "Nazorat ishi 0–30 ball. O‘quvchi 12 ball oldi, lekin o‘qituvchi xato bilan 21 kiritdi. Range check nima qiladi?",
    o: [
      "21 ni qabul qiladi — validatsiya ma’lumot asosli ekanini tekshiradi, lekin to‘g‘riligini kafolatlamaydi",
      "Xatoni aniqlab, avtomatik 12 ga tuzatadi",
      "21 ni rad etadi",
      "Butun jadvalni o‘chirib yuboradi"
    ],
    e: "21 belgilangan oraliqda bo‘lgani uchun qabul qilinadi. Bunday xatolarni topish uchun verifikatsiya (masalan, ikki marta kiritish yoki vizual tekshiruv) kerak."
  },
  {
    g: 9, m: "15-bob. Xatolarni tekshirish", t: "15.01 Imlo va grammatikani tekshirish", l: 1,
    q: "Imloni tekshiruvchi dastur nima uchun “Daraxtning shohi” jumlasidagi xatoni topa olmaydi?",
    o: [
      "“shohi” so‘zi lug‘atda to‘g‘ri yozilgan so‘z — dastur ma’noni tushunmaydi (gomofon)",
      "Dastur faqat ingliz tilida ishlaydi",
      "Dastur faqat raqamlarni tekshiradi",
      "Jumlada hech qanday xato yo‘q"
    ],
    e: "Imlo tekshiruvchi so‘zlarni faqat lug‘at bilan solishtiradi; to‘g‘ri yozilgan, lekin noto‘g‘ri ma’noda ishlatilgan so‘zni xato deb belgilamaydi."
  },
  {
    g: 9, m: "15-bob. Xatolarni tekshirish", t: "15.01 Imlo va grammatikani tekshirish", l: 2,
    q: "Hujjatda bitta so‘z 40 marta bir xil xato bilan yozilgan. Ularning barchasini bir harakat bilan tuzatishning eng tez yo‘li qaysi?",
    o: ["Replace (almashtirish) uskunasi", "Har bir so‘zni qo‘lda o‘chirib yozish", "Add to dictionary", "Ignore all"],
    e: "Replace uskunasi katta matnlarda bir so‘zning barcha noto‘g‘ri shakllarini bir harakatda to‘g‘risiga almashtiradi. Ignore all esa xatoni e’tiborsiz qoldiradi."
  },
  {
    g: 9, m: "15-bob. Xatolarni tekshirish", t: "15.02 Xatolarni tekshirish usullari (verifikatsiya)", l: 1,
    q: "Ma’lumot ikki marta kiritilib, kompyuter ikki to‘plamni solishtiradigan verifikatsiya usuli qanday ataladi?",
    o: ["Double data entry (ikki marta kiritish)", "Range check", "Check digit", "Autocorrect"],
    e: "Double data entry — verifikatsiya usuli; elektron jadvalda COUNTIF va shartli formatlash bilan ikki ro‘yxat farqi ajratib ko‘rsatiladi. Vizual verifikatsiyada esa hujjat asl nusxa bilan ko‘z bilan solishtiriladi."
  },
  {
    g: 9, m: "15-bob. Xatolarni tekshirish", t: "15.02 Xatolarni tekshirish usullari (verifikatsiya)", l: 2,
    q: "1235677 o‘rniga 1325677 kiritildi. Bu qanday xato va uni aniqlashning darslikdagi usuli qaysi?",
    o: [
      "Transpozitsiya xatosi — qo‘shni raqamlardan hosil bo‘lgan sonlar ayirmasi 9 ga bo‘linishini tekshirish",
      "Imlo xatosi — spell check bilan topiladi",
      "Format xatosi — format check bilan topiladi",
      "Gomofon xatosi — grammatika tekshiruvi bilan topiladi"
    ],
    e: "Raqamlar o‘rni almashgan (23 → 32). 32 − 23 = 9, u 9 ga bo‘linadi — xato shu joyda. Bu usul bank kassalarida qo‘llanadi."
  },

  /* ===================== 16-bob. Grafik va diagrammalar ===================== */
  {
    g: 9, m: "16-bob. Grafik va diagrammalar", t: "16.01 Grafik va diagramma turlari", l: 1,
    q: "Har bir qiymatning butunga nisbatan ulushini (foizda) ko‘rsatish uchun qaysi diagramma eng mos?",
    o: ["Doirasimon (pirog) diagramma", "Chiziqli grafik", "Nuqtali diagramma", "Sohali diagramma"],
    e: "Doirasimon diagramma butun tarkibidagi har bir qismni foizda ko‘rsatadi; qiymatlar yig‘indisi 100 bo‘lmasa ham avtomatik hisoblanadi."
  },
  {
    g: 9, m: "16-bob. Grafik va diagrammalar", t: "16.01 Grafik va diagramma turlari", l: 2,
    q: "Ikki son to‘plami o‘rtasidagi bog‘liqlikni (masalan, bo‘y va vazn) ko‘rsatish uchun qaysi diagramma tanlanadi?",
    o: ["Nuqtali diagramma (scatter)", "Doirasimon diagramma", "Ustunli diagramma", "Sohali diagramma"],
    e: "Nuqtali diagramma X va Y qiymatlari o‘rtasidagi munosabatni ko‘rsatadi; vaqt bo‘yicha trend uchun chiziqli grafik, toifalarni taqqoslash uchun ustunli diagramma mos."
  },
  {
    g: 9, m: "16-bob. Grafik va diagrammalar", t: "16.01 Diagramma elementlari va o‘qlar", l: 1,
    q: "Diagrammadagi rang yoki naqshlar nimani anglatishini ko‘rsatuvchi element qanday ataladi?",
    o: ["Legenda", "Shkala", "Sektor", "Sarlavha"],
    e: "Legenda — ranglar kaliti; shkala — o‘qlarning o‘lchov birliklari; sektor — doirasimon diagramma bo‘lagi."
  },
  {
    g: 9, m: "16-bob. Grafik va diagrammalar", t: "16.01 Diagramma elementlari va o‘qlar", l: 2,
    q: "Bitta diagrammada qiymatlari juda farq qiladigan ikki seriya (kunlik oziqlantirish soni va haftalik xarajat) ni aniq ko‘rsatish uchun nima qilinadi?",
    o: [
      "Seriyalardan birini ikkilamchi o‘qqa joylash (masalan, biri ustun, biri chiziq ko‘rinishida)",
      "Ikkala seriyani doirasimon diagrammaga aylantirish",
      "Legendani o‘chirish",
      "Y o‘qi shkalasini har doim noldan boshlash"
    ],
    e: "Ikkilamchi ma’lumotlar o‘qi turli turdagi ma’lumotlarni bitta diagrammada taqqoslash imkonini beradi."
  },

  /* ===================== 17-bob. Hujjatlar bilan ishlash ===================== */
  {
    g: 9, m: "17-bob. Hujjatlar bilan ishlash", t: "17.01 Matn va sahifa maketini formatlash", l: 1,
    q: "Sahifaning eni bo‘yidan uzun bo‘lgan holati qanday ataladi?",
    o: ["Albom holati (landscape)", "Kitob holati (portrait)", "Gutter margin", "Dupleks"],
    e: "Kitob holatida sahifa bo‘yi enidan uzun (standart), albom holatida esa eni bo‘yidan uzun."
  },
  {
    g: 9, m: "17-bob. Hujjatlar bilan ishlash", t: "17.01 Matn va sahifa maketini formatlash", l: 2,
    q: "Kitob muqovaga tikilganda matn ko‘rinmay qolmasligi uchun sahifa chetida qoldiriladigan qo‘shimcha bo‘sh joy nima deyiladi?",
    o: ["Gutter margin", "Widow", "Tabulyatsiya", "Column Break"],
    e: "Gutter margin — hujjat chap tarafidagi kengroq maydon; u muqovalangan hujjatni qulay o‘qishga yordam beradi."
  },
  {
    g: 9, m: "17-bob. Hujjatlar bilan ishlash", t: "17.02 Jadvallarni tahrirlash va shartli formatlash", l: 1,
    q: "Ma’lumot bor bir nechta katak Merge buyrug‘i bilan birlashtirilsa, nima bo‘ladi?",
    o: [
      "Faqat birinchi (yuqori chap) katakdagi ma’lumot saqlanadi, qolganlari ko‘rinmay qoladi",
      "Barcha kataklardagi ma’lumotlar qo‘shib yoziladi",
      "Barcha ma’lumotlar yig‘indisi hisoblanadi",
      "Kataklar birlashmaydi"
    ],
    e: "Birlashtirishdan oldin kerakli ma’lumotlarni xavfsiz joyga ko‘chirish kerak, chunki faqat birinchi katak ma’lumoti saqlanadi."
  },
  {
    g: 9, m: "17-bob. Hujjatlar bilan ishlash", t: "17.02 Jadvallarni tahrirlash va shartli formatlash", l: 2,
    q: "O‘qituvchi past baholar avtomatik qizil, yuqori baholar yashil rangda ko‘rinishini xohlaydi. Qaysi vosita kerak?",
    o: ["Shartli formatlash (Conditional Formatting)", "Mail merge", "Gridlines", "Merge & Center"],
    e: "Shartli formatlash ma’lumotlar mezonlarga mos kelishini qoida orqali rang bilan ko‘rsatadi (“svetofor” uslubi)."
  },
  {
    g: 9, m: "17-bob. Hujjatlar bilan ishlash", t: "17.03 Mail merge", l: 1,
    q: "Bir xil matnli, lekin har birida boshqa qabul qiluvchi ismi va manzili bo‘lgan 1000 ta xatni tez tayyorlash uchun qaysi funksiya ishlatiladi?",
    o: ["Mail merge", "Autocorrect", "Watermark", "Track Changes"],
    e: "Mail merge hujjat shaklini ma’lumotlar manbasi (ism, manzil) bilan birlashtirib, har bir qabul qiluvchi uchun alohida xat yaratadi."
  },
  {
    g: 9, m: "17-bob. Hujjatlar bilan ishlash", t: "17.03 Mail merge", l: 2,
    q: "Mail mergedan foydalanish uchun qaysi ikki narsa talab qilinadi?",
    o: [
      "Hujjat shakli (asosiy hujjat) va ma’lumotlar manbasi",
      "Faqat printer va qog‘oz",
      "Master slayd va animatsiya",
      "Faqat elektron pochta paroli"
    ],
    e: "Mail merge uchun hujjat shakli va unga ilova qilinadigan ma’lumotlar manbasi (masalan, kontaktlar jadvali) kerak."
  },

  /* ===================== 18-bob. Ma’lumotlar bazasi ===================== */
  {
    g: 9, m: "18-bob. Ma’lumotlar bazasi", t: "18.01 Ma’lumotlar bazasi tuzilmasi", l: 1,
    q: "Ma’lumotlar bazasidagi har bir yozuvni yagona tarzda aniqlovchi maydon qanday ataladi?",
    o: ["Birlamchi kalit (primary key)", "Tashqi kalit", "Hisoblash maydoni", "Legenda"],
    e: "Birlamchi kalit har bir yozuvning yagona identifikatori; jadvalda faqat bitta birlamchi kalit bo‘ladi."
  },
  {
    g: 9, m: "18-bob. Ma’lumotlar bazasi", t: "18.01 Ma’lumotlar bazasi tuzilmasi", l: 2,
    q: "Go‘zallik salonining relyatsion bazasida “MijozID” Mijozlar jadvalida birlamchi kalit. U Qabullar jadvalida qanday rol o‘ynaydi?",
    o: ["Tashqi kalit (foreign key)", "Birlamchi kalit", "Hisoblash maydoni", "Boolean maydon"],
    e: "Bir jadvalning birlamchi kaliti boshqa jadvalda ishlatilsa, u tashqi kalitga aylanadi va jadvallarni bog‘laydi."
  },
  {
    g: 9, m: "18-bob. Ma’lumotlar bazasi", t: "18.01 Ma’lumot turlari", l: 1,
    q: "Telefon raqami 0 bilan boshlanganda u qaysi ma’lumot turida saqlanishi kerak?",
    o: ["Matn", "Son", "Boolean", "Sana/vaqt"],
    e: "Son turida boshidagi 0 yo‘qoladi; telefon raqamlari va ismlar uchun matn turi qulay."
  },
  {
    g: 9, m: "18-bob. Ma’lumotlar bazasi", t: "18.01 Ma’lumot turlari", l: 2,
    q: "Ma’lumotlar bazasiga rasm, audio yoki video joylash uchun qaysi ma’lumot turi ishlatiladi?",
    o: ["OLE (Object Linking and Embedding)", "AutoNumber", "Boolean", "Currency"],
    e: "OLE turli formatdagi multimedia ma’lumotlarni joylash uchun “hoshiya” yoki bo‘sh maydon ajratadi."
  },
  {
    g: 9, m: "18-bob. Ma’lumotlar bazasi", t: "18.02 Ma’lumotlarni boshqarish (query, saralash)", l: 1,
    q: "Querydagi Like \"J*\" mezoni qanday yozuvlarni topadi?",
    o: ["“J” harfi bilan BOSHLANADIGAN yozuvlar", "“J” harfi bilan TUGAYDIGAN yozuvlar", "Faqat “J” ga teng yozuvlar", "“J” harfi bo‘lmagan yozuvlar"],
    e: "* — almashtirma belgi (wildcard): istalgan belgilar o‘rnida turadi. Like \"J*\" — J bilan boshlanadi, Like \"*2\" — 2 bilan tugaydi."
  },
  {
    g: 9, m: "18-bob. Ma’lumotlar bazasi", t: "18.02 Ma’lumotlarni boshqarish (query, saralash)", l: 2,
    q: "Ma’lumotlar bazasidagi hisoblash maydoni (calculated field) haqida qaysi fikr to‘g‘ri?",
    o: [
      "U o‘zi ma’lumot saqlamaydi — boshqa maydonlar qiymatlari o‘zgarsa, natija formula orqali qayta hisoblanadi",
      "U faqat matn saqlaydi",
      "Uni qo‘lda to‘ldirish shart",
      "U birlamchi kalit vazifasini bajaradi"
    ],
    e: "Masalan, Umumiy xarajat = Miqdor × Xarajat; Miqdor yoki Xarajat o‘zgarsa, umumiy xarajat avtomatik yangilanadi."
  },
  {
    g: 9, m: "18-bob. Ma’lumotlar bazasi", t: "18.03 Ma’lumotlarni taqdim etish (hisobotlar)", l: 1,
    q: "Hisobot (report) kolontituli va sahifa kolontituli farqi nimada?",
    o: [
      "Hisobot kolontituli faqat bir marta chiqadi, sahifa kolontituli (sahifa raqami, sana) har sahifada takrorlanadi",
      "Ular aynan bir xil",
      "Sahifa kolontituli faqat oxirgi sahifada chiqadi",
      "Hisobot kolontituli har sahifada takrorlanadi"
    ],
    e: "Bir marta paydo bo‘ladigan elementlar hisobot kolontituliga, avtomatik yangilanadigan elementlar sahifa kolontituliga joylanadi."
  },
  {
    g: 9, m: "18-bob. Ma’lumotlar bazasi", t: "18.03 Ma’lumotlarni taqdim etish (hisobotlar)", l: 2,
    q: "Oddiy (flat file) ma’lumotlar bazasining relyatsion bazaga nisbatan asosiy kamchiligi nima?",
    o: [
      "Ma’lumotlar takrorlanadi (duplikatsiya), bu kiritish xatolarini ko‘paytiradi",
      "U bir nechta jadvalga ega",
      "Unda birlamchi kalitlar majburiy",
      "Uni elektron jadvalda yaratib bo‘lmaydi"
    ],
    e: "Oddiy bazada hamma ma’lumot bitta jadvalda; har tashrifda mijoz ma’lumoti qayta kiritiladi. Relyatsion baza ID orqali bog‘lab, takrorlanishni yo‘qotadi."
  },

  /* ===================== 19-bob. Taqdimot ===================== */
  {
    g: 9, m: "19-bob. Taqdimot", t: "19.01 Obyektlarni to‘g‘ri joylash va master slayd", l: 1,
    q: "Taqdimotda slaydlar avtomatik vaqt bo‘yicha emas, ma’ruzachi sichqonchani bosganda almashishi uchun qaysi sozlama yoqiladi?",
    o: ["On Mouse Click", "Loop continuously", "Kiosk show", "Fade In"],
    e: "Avtomatik almashish ba’zan ma’ruzachini shoshiltiradi; On Mouse Click keyingi slaydga sichqoncha bosilganda o‘tishni ta’minlaydi."
  },
  {
    g: 9, m: "19-bob. Taqdimot", t: "19.01 Obyektlarni to‘g‘ri joylash va master slayd", l: 2,
    q: "Rasmiy kengashda yillik byudjet hisoboti taqdim etilmoqda. O‘tish effektlari va animatsiyalar haqida qaysi tavsiya to‘g‘ri?",
    o: [
      "Oddiy, bir xil va kam effektlar — ko‘p va jimjimador effektlar auditoriyani chalg‘itadi",
      "Har bir slaydga turli “vortex” effektlarini qo‘yish",
      "Har bir o‘q belgisidan keyin qo‘ng‘iroq tovushi qo‘shish",
      "Matnni iloji boricha ko‘p animatsiya bilan chiqarish"
    ],
    e: "Kattalar va rasmiy vaziyat uchun oddiy, izchil effektlar ma’qul; jimjimador effektlar yosh auditoriya yoki bayram tadbirlariga mos."
  },
  {
    g: 9, m: "19-bob. Taqdimot", t: "19.02 Taqdimot slaydlarini yaratish va namoyish", l: 1,
    q: "Tinglovchilar har bir slayd yoniga o‘z qaydlarini yozishi uchun nima chop etiladi?",
    o: ["Handouts (tarqatma materiallar)", "Master slayd", "Kiosk show", "Action buttons"],
    e: "File → Print → Print what: Handouts — tinglovchilar uchun slaydlar va qayd joyi bilan chop etiladi. Notes Page esa ma’ruzachi izohlari uchun."
  },
  {
    g: 9, m: "19-bob. Taqdimot", t: "19.02 Taqdimot slaydlarini yaratish va namoyish", l: 2,
    q: "Do‘kon ekranida taqdimot to‘xtovsiz takrorlanib, faqat Esc bosilganda to‘xtashi kerak. Qaysi namoyish rejimi mos?",
    o: ["Kiosk show (Loop continuously bilan)", "Ma’ruzachi boshqaradigan to‘liq ekran rejimi", "Notes Page ko‘rinishi", "Handouts chop etish"],
    e: "Kiosk show rejimida taqdimot Esc bosilguncha takrorlanadi; ko‘ngilochar yoki marketing maqsadlari uchun qulay."
  },

  /* ===================== 20-bob. Ma’lumotlar tahlili ===================== */
  {
    g: 9, m: "20-bob. Ma’lumotlar tahlili (elektron jadval)", t: "20.01 Ma’lumotlar modeli: formula va funksiyalar", l: 1,
    q: "A1 dan D1 gacha bo‘lgan kataklardagi sonlarni qo‘shish uchun eng qulay yozuv qaysi?",
    o: ["=SUM(A1:D1)", "=ADD(A1;D1)", "=A1:D1+", "SUM=A1+D1"],
    e: "SUM funksiyasi yonma-yon kataklar diapazonini qo‘shadi. =A1+B1+C1+D1 formula ham shu natijani beradi, lekin ko‘p kataklar uchun noqulay."
  },
  {
    g: 9, m: "20-bob. Ma’lumotlar tahlili (elektron jadval)", t: "20.01 Ma’lumotlar modeli: formula va funksiyalar", l: 2,
    q: "Elektron jadvalda =2+3^2 formulasi qanday natija beradi?",
    o: ["11", "25", "13", "10"],
    e: "Avval daraja (Power) bajariladi: 3^2 = 9, keyin qo‘shish: 2 + 9 = 11. (2+3)^2 = 25 bo‘lishi uchun qavs kerak."
  },
  {
    g: 9, m: "20-bob. Ma’lumotlar tahlili (elektron jadval)", t: "20.01 Nisbiy va absolyut murojaat", l: 1,
    q: "Formula nusxalanganda ham doimo I6 katakka murojaat qilishi uchun qanday yoziladi?",
    o: ["$I$6 (absolyut murojaat)", "I6 (nisbiy murojaat)", "#I6", "I6!"],
    e: "Katak manzili qismlari oldiga “$” qo‘yilsa, absolyut murojaat bo‘ladi — nusxalanganda manzil o‘zgarmaydi. Nisbiy murojaat esa har qatorga moslashadi."
  },
  {
    g: 9, m: "20-bob. Ma’lumotlar tahlili (elektron jadval)", t: "20.01 Nisbiy va absolyut murojaat", l: 2,
    q: "C2 katakdagi =A2*B2 formulasi C3 katakka nusxalansa, u qanday ko‘rinishga keladi?",
    o: ["=A3*B3", "=A2*B2", "=$A$2*$B$2", "=A3*B2"],
    e: "Nisbiy murojaatda formula bir qator pastga ko‘chirilganda qator raqamlari ham 1 ga oshadi: A2 → A3, B2 → B3."
  },
  {
    g: 9, m: "20-bob. Ma’lumotlar tahlili (elektron jadval)", t: "20.01 Funksiyalar: IF, ROUND, COUNT, LOOKUP", l: 1,
    q: "C4 katakda 2,512789 bor. =ROUND(C4;2) natijasi qanday?",
    o: ["2,51", "2,5", "3", "2,512"],
    e: "ROUND kasr sonni verguldan keyin berilgan xonagacha yaxlitlaydi: 2 xona → 2,51."
  },
  {
    g: 9, m: "20-bob. Ma’lumotlar tahlili (elektron jadval)", t: "20.01 Funksiyalar: IF, ROUND, COUNT, LOOKUP", l: 2,
    q: "Ballar jadvali vertikal (ustun bo‘ylab) joylashgan “Baholar” nomli diapazondan bahoni topish uchun qaysi funksiya ishlatiladi?",
    o: ["VLOOKUP", "HLOOKUP", "COUNT", "INT"],
    e: "VLOOKUP — ustun bo‘yicha (vertikal), HLOOKUP — qator bo‘yicha (gorizontal) qidiradi; nomlangan diapazonga murojaat qilish qulay."
  },
  {
    g: 9, m: "20-bob. Ma’lumotlar tahlili (elektron jadval)", t: "20.02 Ma’lumotlar modelini sinash (What-If)", l: 1,
    q: "GIGO qisqartmasi nimani anglatadi?",
    o: [
      "Garbage in, garbage out — noto‘g‘ri ma’lumot kiritilsa, natija ham noto‘g‘ri chiqadi",
      "Global Information Gateway Online",
      "Grafik interfeys va grafik obyektlar",
      "Kiritilgan ma’lumot har doim to‘g‘ri natija beradi"
    ],
    e: "Ma’lumotlar modeliga keraksiz (xato) ma’lumot kiritilsa, keraksiz natija hosil bo‘ladi — shuning uchun kiritishda 100% aniqlik kerak."
  },
  {
    g: 9, m: "20-bob. Ma’lumotlar tahlili (elektron jadval)", t: "20.02 Ma’lumotlar modelini sinash (What-If)", l: 2,
    q: "O‘qituvchi “agar har bir o‘quvchi yana 7 ball olsa, nechtasining bahosi ko‘tariladi?” degan savolga javob izlamoqda. Qaysi vosita kerak?",
    o: ["What-If tahlili", "Mail merge", "Shartli formatlash", "Filtr"],
    e: "What-If tahlili katakdagi qiymatlarni o‘zgartirib, formulalar natijasi qanday o‘zgarishini ko‘rsatadi va qaror qabul qilishga yordam beradi."
  },
  {
    g: 9, m: "20-bob. Ma’lumotlar tahlili (elektron jadval)", t: "20.03 Ma’lumotlarni boshqarish: AND, OR, NOT", l: 1,
    q: "=AND(5+2=7; 3+3=5) formulasining natijasi qanday?",
    o: ["FALSE", "TRUE", "7", "#ERROR"],
    e: "AND faqat barcha shartlar to‘g‘ri bo‘lsagina TRUE qaytaradi. 3+3=5 noto‘g‘ri, shuning uchun natija FALSE."
  },
  {
    g: 9, m: "20-bob. Ma’lumotlar tahlili (elektron jadval)", t: "20.03 Ma’lumotlarni boshqarish: AND, OR, NOT", l: 2,
    q: "M2 katakda 57 bor. =IF(AND(40<M2;M2<100);M2;\"Qattiqroq ishlash kerak\") formulasi nima chiqaradi?",
    o: ["57", "Qattiqroq ishlash kerak", "TRUE", "FALSE"],
    e: "40 < 57 va 57 < 100 — ikkala shart to‘g‘ri, AND = TRUE, shuning uchun IF M2 qiymatini, ya’ni 57 ni chiqaradi."
  },
  {
    g: 9, m: "20-bob. Ma’lumotlar tahlili (elektron jadval)", t: "20.04 Ma’lumotlarni taqdim etish", l: 1,
    q: "Elektron jadval chop etilganda katak chiziqlari va qator/ustun sarlavhalari ham ko‘rinishi uchun qaysi bo‘lim sozlanadi?",
    o: ["Page Setup → Sheet (Gridlines, Row and column headings)", "Insert → Chart", "Data → Filter", "Review → Spelling"],
    e: "Print Preview → Page Setup → Sheet oynasida Gridlines va Row and column headings belgilanadi."
  },
  {
    g: 9, m: "20-bob. Ma’lumotlar tahlili (elektron jadval)", t: "20.04 Ma’lumotlarni taqdim etish", l: 2,
    q: "Elektron jadvalda formula natijasi o‘rniga formulaning o‘zini ko‘rsatish uchun nima qilinadi?",
    o: ["Formulas oynasida Show Formulas belgilanadi", "Katakni Merge qilinadi", "Ustunni Hide qilinadi", "Gridlines o‘chiriladi"],
    e: "Show Formulas formulalarni ko‘rsatadi; uzun formulalar uchun matnni katakda bir necha qatorga joylash (Wrap Text) qulay."
  },

  /* ===================== 21-bob. Veb sayt yaratish ===================== */
  {
    g: 9, m: "21-bob. Veb sayt yaratish", t: "21.01 Veb dasturlashning uch qatlami", l: 1,
    q: "Veb dasturlashning qaysi qatlami JavaScript bilan bog‘liq?",
    o: ["Funksional (skript) qatlam", "Kontent qatlami", "Taqdimot qatlami", "Ma’lumotlar bazasi qatlami"],
    e: "Kontent qatlami — HTML, taqdimot (stil) qatlami — CSS, funksional qatlam — JavaScript kabi skriptlar."
  },
  {
    g: 9, m: "21-bob. Veb sayt yaratish", t: "21.01 Veb dasturlashning uch qatlami", l: 2,
    q: "Veb sahifa elementlarining rangi, shrifti va maketini belgilovchi qatlam va texnologiya juftligi qaysi?",
    o: ["Taqdimot qatlami — CSS", "Kontent qatlami — JavaScript", "Funksional qatlam — HTML", "Taqdimot qatlami — FTP"],
    e: "Taqdimot qatlami sahifaning stili, maketi va formatini belgilaydi; bu CSS orqali amalga oshiriladi."
  },
  {
    g: 9, m: "21-bob. Veb sayt yaratish", t: "21.02 HTML: jadvallar, linklar va tasvirlar", l: 1,
    q: "HTML jadvalida sarlavha katagi qaysi teg bilan yaratiladi?",
    o: ["<th>", "<td>", "<tr>", "<thead-cell>"],
    e: "<table> — jadval, <tr> — qator, <th> — sarlavha katagi (avtomatik qalin va markazda), <td> — oddiy ma’lumot katagi."
  },
  {
    g: 9, m: "21-bob. Veb sayt yaratish", t: "21.02 HTML: jadvallar, linklar va tasvirlar", l: 2,
    q: "Linkni brauzerning YANGI oynasida ochish uchun <a> tegiga qaysi atribut qo‘shiladi?",
    o: ["target=\"_blank\"", "href=\"new\"", "alt=\"_blank\"", "colspan=\"2\""],
    e: "target=\"_blank\" har safar yangi oyna ochadi; target ga nom berilsa (masalan, \"yangi_oyna\"), barcha linklar bitta nomlangan oynada ochiladi."
  },
  {
    g: 9, m: "21-bob. Veb sayt yaratish", t: "21.02 Absolyut va nisbiy fayl manzillari", l: 1,
    q: "<img> tegidagi alt atributi nima uchun kerak?",
    o: [
      "Tasvir yuklanmasa yoki ko‘rish imkoniyati cheklangan foydalanuvchi uchun tasvirni matn bilan tasvirlash",
      "Tasvir rangini o‘zgartirish",
      "Tasvirni yangi oynada ochish",
      "Tasvirni aylantirish"
    ],
    e: "alt — muqobil matn; server xatosi bo‘lsa yoki ko‘rish imkoniyati cheklanganlar uchun tasvir mazmunini bildiradi."
  },
  {
    g: 9, m: "21-bob. Veb sayt yaratish", t: "21.02 Absolyut va nisbiy fayl manzillari", l: 2,
    q: "Nima uchun sayt ichidagi sahifalar va CSS faylga link berishda nisbiy fayl manzili afzal?",
    o: [
      "Sayt papkasi ko‘chirilsa yoki domen nomi o‘zgarsa ham linklar ishlashda davom etadi",
      "Nisbiy manzil har doim http:// bilan boshlanadi",
      "Nisbiy manzil faqat boshqa saytlarga link uchun ishlaydi",
      "Brauzer nisbiy manzilni o‘qiy olmaydi"
    ],
    e: "Nisbiy manzil faylning joriy hujjatga nisbatan o‘rnini ko‘rsatadi (masalan, ../style.css). Absolyut manzil (http://...) boshqa saytlarga link uchun ishlatiladi."
  },
  {
    g: 9, m: "21-bob. Veb sayt yaratish", t: "21.03 CSS stil jadvallari", l: 1,
    q: "Bir nechta veb sahifaning stilini bitta fayl orqali boshqarish uchun qaysi CSS turi ishlatiladi?",
    o: ["External (tashqi) stil jadvali — .css fayl", "Inline stil", "Internal stil", "alt atributi"],
    e: "External CSS <head> dagi <link rel=\"stylesheet\" href=\"...css\"> orqali ulanadi; faylni o‘zgartirish butun saytga kaskad tarzda ta’sir qiladi."
  },
  {
    g: 9, m: "21-bob. Veb sayt yaratish", t: "21.03 CSS stil jadvallari", l: 2,
    q: "CSS da .posh { color: red; } va #para1 { color: blue; } selektorlari nimani tanlaydi?",
    o: [
      ".posh — class=\"posh\" atributli barcha elementlar; #para1 — id=\"para1\" bo‘lgan yagona element",
      ".posh — id; #para1 — class",
      "Ikkalasi ham faqat <p> teglarini tanlaydi",
      ".posh — barcha sahifa; #para1 — sarlavhalar"
    ],
    e: "Nuqta (.) — klass selektori (guruh elementlar), panjara (#) — ID selektori (sahifadagi unikal element)."
  },
  {
    g: 9, m: "21-bob. Veb sayt yaratish", t: "21.04 Veb saytni sinash va publikatsiya", l: 1,
    q: "Tayyor veb sayt fayllarini kompyuterdan xosting serveriga internet orqali yuklash uchun qaysi protokol ishlatiladi?",
    o: ["FTP", "SMTP", "VOIP", "HTTP emas, Bluetooth"],
    e: "FTP — fayl uzatish protokoli. FTP kliyent-dasturida chapda kompyuterdagi, o‘ngda serverdagi fayllar ko‘rinadi."
  },
  {
    g: 9, m: "21-bob. Veb sayt yaratish", t: "21.04 Veb saytni sinash va publikatsiya", l: 2,
    q: "Quyidagilardan qaysi biri veb saytning “foydalanish qulayligi” (usability) sinoviga tegishli savol?",
    o: [
      "Har bir sahifadan brauzerning “ortga” tugmasisiz boshqa sahifalarga o‘tish mumkinmi?",
      "Multimedia obyektlari qanchalik tez yuklanyapti?",
      "Sayt keng tarqalgan brauzerlarda ishlayaptimi?",
      "Kontent sifati yetarlimi?"
    ],
    e: "Ishlashi: brauzerlar, linklar, fayllar. Foydalanish qulayligi: navigatsiya, bosh sahifa, ortga qaytish. Samaradorlik: yuklanish tezligi, kontent sifati."
  },
);
