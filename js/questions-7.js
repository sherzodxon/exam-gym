/*
 * 7-sinf "Informatika" darsligi bo‘yicha savollar (Word, PowerPoint, Excel, Access).
 * Maydonlar questions-8.js dagi bilan bir xil: BIRINCHI variant har doim to‘g‘ri javob.
 */
window.QUESTIONS = window.QUESTIONS || [];

window.QUESTIONS.push(
  /* ===================== 1-modul. Matnli hujjat (Word) ===================== */
  {
    g: 7, m: "Matnli hujjat (Word)", t: "Matn uslubini yaratish (Styles)", l: 1,
    q: "Word dasturida o‘zingizning matn uslubingizni yaratish uchun qaysi buyruq ishlatiladi?",
    o: ["Home → Styles → Create a Style", "Insert → Table", "Layout → Margins", "File → Print"],
    e: "Home menyusidagi Styles bo‘limi strelkasi bosilib, Create a Style tanlanadi; uslubga nom beriladi va Modify orqali shrift, o‘lcham, rang sozlanadi."
  },
  {
    g: 7, m: "Matnli hujjat (Word)", t: "Matn uslubini yaratish (Styles)", l: 2,
    q: "Hujjatdagi barcha sarlavhalar uchun alohida matn uslubi yaratishning asosiy foydasi nima?",
    o: [
      "Shrift turi, o‘lchami va rangini har safar qo‘lda emas, bitta bosish bilan bir vaqtda qo‘llash mumkin",
      "Hujjat hajmi ikki baravar kichrayadi",
      "Sarlavhalar avtomatik tarjima qilinadi",
      "Hujjat parol bilan himoyalanadi"
    ],
    e: "Matn uslubi (Text style) bir nechta formatlash sozlamalarini birga saqlaydi va ularni istalgan matnga bir vaqtda tatbiq etadi."
  },
  {
    g: 7, m: "Matnli hujjat (Word)", t: "Wrap Text — matnni tasvir atrofiga joylash", l: 1,
    q: "Qaysi Wrap Text variantida matn tasvirning faqat yuqori va pastki qismida joylashadi?",
    o: ["Top and Bottom", "Square", "Tight", "Behind Text"],
    e: "Top and Bottom — matn tasvirning yon tomonlariga emas, faqat yuqori va pastiga joylashadi."
  },
  {
    g: 7, m: "Matnli hujjat (Word)", t: "Wrap Text — matnni tasvir atrofiga joylash", l: 2,
    q: "Tasvir to‘rtburchak bo‘lmagan (masalan, gul) shaklda. Matn uning konturi bo‘ylab joylashishi uchun qaysi variant tanlanadi?",
    o: ["Tight", "Square", "Top and Bottom", "In front of Text"],
    e: "Tight tasvir konturi atrofiga matnni joylaydi. Square esa tasvir atrofidagi to‘rtburchak chegara bo‘ylab joylaydi; tasvir to‘rtburchak bo‘lsa, ikkalasi farq qilmaydi."
  },
  {
    g: 7, m: "Matnli hujjat (Word)", t: "Tasvirni qirqish (Crop) va o‘lchamini o‘zgartirish", l: 1,
    q: "Tasvirning keraksiz qismini olib tashlash uchun Format menyusidagi qaysi buyruq ishlatiladi?",
    o: ["Crop", "Wrap Text", "Bullets", "Justify"],
    e: "Crop — tasvirning bir qismini qirqib olib tashlash; qirqiladigan qism to‘q rang bilan belgilanib ko‘rinadi."
  },
  {
    g: 7, m: "Matnli hujjat (Word)", t: "Tasvirni qirqish (Crop) va o‘lchamini o‘zgartirish", l: 2,
    q: "Tasvirni kattalashtirganda u cho‘zilib, xunuk ko‘rinmasligi uchun qaysi nuqtadan tortish kerak?",
    o: ["Burchakdagi nuqtadan — tomonlar nisbati saqlanadi", "Yon tomondagi nuqtadan", "Faqat yuqori nuqtadan", "Tasvir o‘rtasidan"],
    e: "Yon nuqtalar faqat eni yoki bo‘yini o‘zgartiradi; burchakdagi nuqta tomonlar nisbatini (eni va bo‘yi orasidagi nisbatni) saqlaydi."
  },
  {
    g: 7, m: "Matnli hujjat (Word)", t: "Hujjatga jadval qo‘shish", l: 1,
    q: "Word hujjatiga jadval qo‘shish uchun qaysi menyudan foydalaniladi?",
    o: ["Insert → Table", "Home → Styles", "Design → Page Borders", "Layout → Orientation"],
    e: "Insert menyusidan Table buyrug‘i tanlanadi va kataklar to‘plamidan kerakli ustun va qatorlar soni belgilanadi."
  },
  {
    g: 7, m: "Matnli hujjat (Word)", t: "Hujjatga jadval qo‘shish", l: 2,
    q: "Jadvaldagi tanlangan katakning PASTIGA yangi qator qo‘shish uchun Layout menyusidagi qaysi tugma bosiladi?",
    o: ["Insert Below", "Insert Above", "Insert Right", "Insert Left"],
    e: "Insert Above/Below — qatorni katak tepasiga/pastiga; Insert Left/Right — ustunni chap/o‘ng tomonga qo‘shadi."
  },
  {
    g: 7, m: "Matnli hujjat (Word)", t: "Belgili va raqamli ro‘yxatlar", l: 1,
    q: "Ro‘yxatdagi har bir element boshiga nuqtali belgi qo‘yish uchun Paragraph bo‘limidagi qaysi buyruq ishlatiladi?",
    o: ["Bullets", "Numbering", "Justify", "Columns"],
    e: "Bullets — belgili (o‘q nuqtali) ro‘yxat; Numbering — raqamli ro‘yxat yaratadi."
  },
  {
    g: 7, m: "Matnli hujjat (Word)", t: "Belgili va raqamli ro‘yxatlar", l: 2,
    q: "Gul ekish bosqichlari (joy tanlash → kovlash → o‘g‘it → ekish → sug‘orish) ro‘yxati uchun qaysi ro‘yxat turi to‘g‘riroq va nima uchun?",
    o: [
      "Raqamli ro‘yxat (Numbering) — bosqichlar aniq tartibda bajariladi",
      "Belgili ro‘yxat — tartib muhim emas",
      "Jadval — har bir bosqich alohida ustunda",
      "Ro‘yxat kerak emas, bitta paragraf yetarli"
    ],
    e: "Ketma-ketlik muhim bo‘lgan ma’lumot uchun raqamli ro‘yxat, oddiy sanab o‘tish (masalan, mevalar) uchun belgili ro‘yxat qulay."
  },
  {
    g: 7, m: "Matnli hujjat (Word)", t: "Header va Footer", l: 1,
    q: "Hujjatning har bir sahifasi PASTKI qismida ko‘rinadigan maydon qanday ataladi?",
    o: ["Footer", "Header", "Margin", "Border"],
    e: "Header — sahifaning yuqori qismi, Footer — pastki qismi; ular har bir sahifada ko‘rinadi."
  },
  {
    g: 7, m: "Matnli hujjat (Word)", t: "Header va Footer", l: 2,
    q: "Footerga har bir sahifa raqamini avtomatik qo‘yish uchun qaysi yo‘l to‘g‘ri?",
    o: [
      "Header & Footer Tools → Design → Page Number → Bottom of page",
      "Har bir sahifaga raqamni qo‘lda yozish",
      "Insert → Table → 1 ustun",
      "Home → Bullets → Numbering"
    ],
    e: "Page Number → Bottom of page variantida raqamning footerdagi joyi tanlanadi; sana/vaqt esa Date & Time orqali qo‘shiladi."
  },
  {
    g: 7, m: "Matnli hujjat (Word)", t: "Matnni ustunlarga bo‘lish va tekislash", l: 1,
    q: "Matnni gazeta kabi bir nechta ustunga bo‘lish uchun qaysi buyruq ishlatiladi?",
    o: ["Layout → Columns", "Insert → Cover Page", "Home → Replace", "Design → Page Borders"],
    e: "Matn belgilanadi va Layout menyusidagi Columns buyrug‘idan ustunlar soni tanlanadi."
  },
  {
    g: 7, m: "Matnli hujjat (Word)", t: "Matnni ustunlarga bo‘lish va tekislash", l: 2,
    q: "Ustundagi matnning ham chap, ham o‘ng cheti bir tekis chiziq bo‘ylab tursin uchun qaysi tekislash qo‘llanadi?",
    o: ["Justify (eni bo‘ylab tekislash)", "Align Left", "Center", "Align Right"],
    e: "Justify matnni chap va o‘ng chekkalar orasida teng joylaydi — buning uchun so‘zlar orasiga qo‘shimcha bo‘shliqlar qo‘yiladi."
  },
  {
    g: 7, m: "Matnli hujjat (Word)", t: "Sahifani formatlash (Page Setup)", l: 1,
    q: "Sahifaning eng uzun tomonlari yuqori va pastda bo‘ladigan holati qanday ataladi?",
    o: ["Landscape (albom)", "Portrait (kitob)", "Narrow", "Justify"],
    e: "Portrait — kitob holati (uzun tomonlar chap va o‘ngda), Landscape — albom holati (uzun tomonlar yuqori va pastda)."
  },
  {
    g: 7, m: "Matnli hujjat (Word)", t: "Sahifani formatlash (Page Setup)", l: 2,
    q: "Sahifaga ko‘proq matn sig‘ishi uchun chetlardagi bo‘sh maydonni qanday kamaytirish mumkin?",
    o: [
      "Layout → Margins → Normal o‘rniga Narrow tanlash",
      "Line Spacing ni Double qilish",
      "Page Borders → 3-D tanlash",
      "Orientation ni Portrait qilish"
    ],
    e: "Margin — hujjat chetlari atrofidagi qism. Narrow hoshiya matnni chetlarga yaqinlashtirib, sahifada joy qo‘shadi. Double interval esa aksincha joyni ko‘paytiradi."
  },
  {
    g: 7, m: "Matnli hujjat (Word)", t: "Qatorlar oralig‘i, hoshiya va Print Preview", l: 1,
    q: "Hujjat chop etilganda qanday ko‘rinishini oldindan ko‘rish uchun nima ishlatiladi?",
    o: ["Print Preview (File → Print)", "Wrap Text", "Slide Master", "Find and Replace"],
    e: "File → Print oynasida butun sahifa ko‘rinadi; bir nechta sahifa bo‘lsa, pastdagi strelkalar bilan o‘tiladi."
  },
  {
    g: 7, m: "Matnli hujjat (Word)", t: "Qatorlar oralig‘i, hoshiya va Print Preview", l: 2,
    q: "O‘qituvchi izoh yozishi uchun qatorlar orasida butun bo‘sh qator qoldirmoqchisiz. Line Spacing qaysi qiymatga o‘rnatiladi?",
    o: ["Double", "1.5 lines", "Single", "Narrow"],
    e: "“1.5 lines” — yarim qator bo‘shliq, “Double” — qatorlar orasida butun bo‘sh qator hosil qiladi."
  },
  {
    g: 7, m: "Matnli hujjat (Word)", t: "Find & Replace, giperhavola va muqova sahifasi", l: 1,
    q: "Hujjatdagi biror so‘zning barcha nusxalarini boshqa so‘zga bir vaqtda almashtirish uchun qaysi tugma bosiladi?",
    o: ["Replace All", "Replace", "Find Next", "Cover Page"],
    e: "Home → Replace oynasida eski va yangi so‘z yoziladi; Replace — bittadan, Replace All — hammasini birdaniga almashtiradi."
  },
  {
    g: 7, m: "Matnli hujjat (Word)", t: "Find & Replace, giperhavola va muqova sahifasi", l: 2,
    q: "“Replace All” dan foydalanganda nima uchun ehtiyot bo‘lish kerak?",
    o: [
      "U butun so‘zlarni emas, so‘z qismlarini ham almashtirib yuborishi mumkin",
      "U hujjatni o‘chirib yuboradi",
      "U faqat birinchi so‘zni almashtiradi",
      "U giperhavolalarni yaratadi"
    ],
    e: "Masalan, “gul” ni almashtirsangiz, “gulzor” so‘zidagi “gul” ham o‘zgarib ketishi mumkin."
  },

  /* ===================== 2-modul. Multimedia (PowerPoint) ===================== */
  {
    g: 7, m: "Multimedia (PowerPoint)", t: "Loyiha xususiyatlari (dizayn rejasi)", l: 1,
    q: "Taqdimotning mazmuni, maketi, havolalari, o‘tishlari va animatsiyalari oldindan yozilgan reja qanday ataladi?",
    o: ["Loyiha xususiyatlari (design specification)", "Slide Master", "Animation Pane", "Kiosk rejimi"],
    e: "Loyiha xususiyatlari shrift, maket, o‘tish effektlari, animatsiyalar, triggerlar, vaqt va slaydlar orasidagi havolalarni batafsil tasvirlaydi."
  },
  {
    g: 7, m: "Multimedia (PowerPoint)", t: "Loyiha xususiyatlari (dizayn rejasi)", l: 2,
    q: "Loyiha xususiyatlari nima uchun juda batafsil yozilishi kerak?",
    o: [
      "Taqdimotni yaratuvchi boshqa odam uni muallif yordamisiz ishlab chiqa olishi uchun",
      "Taqdimot hajmini kamaytirish uchun",
      "Slaydlarni avtomatik tarjima qilish uchun",
      "Internetsiz ishlashi uchun"
    ],
    e: "Reja shriftlar, maket, o‘tishlar, animatsiyalar va havolalarni shunchalik aniq ko‘rsatishi kerakki, boshqa odam ham taqdimotni xuddi shunday yarata olsin."
  },
  {
    g: 7, m: "Multimedia (PowerPoint)", t: "Slayd o‘tish effektlari (Transitions)", l: 1,
    q: "Bir slayddan keyingisiga o‘tishda ishlatiladigan animatsiya nima deyiladi?",
    o: ["O‘tish effekti (transition)", "Trigger", "Kirish animatsiyasi", "Master slayd"],
    e: "O‘tish effekti Transitions menyusidan qo‘shiladi va slayd boshida ishga tushadi."
  },
  {
    g: 7, m: "Multimedia (PowerPoint)", t: "Slayd o‘tish effektlari (Transitions)", l: 2,
    q: "Wipe o‘tish effekti tanlangandan keyin slayd qaysi yo‘nalishda ochilishini qayerdan o‘zgartirish mumkin?",
    o: ["Effect Options", "Animation Pane", "Slide Master", "Record Slide Show"],
    e: "Effect Options o‘tish effektini moslash imkonini beradi; effekt tanlanmaguncha bu tugma kulrang (faol emas) bo‘ladi."
  },
  {
    g: 7, m: "Multimedia (PowerPoint)", t: "Vaqt va audio qo‘shish", l: 1,
    q: "O‘tish effekti necha soniya davom etishini qaysi maydonda belgilanadi?",
    o: ["Duration", "After", "Sound", "Start"],
    e: "Slaydlar almashishiga ketadigan vaqt — davomiylik (Duration); odatda mos vaqt 0,5–1 soniya."
  },
  {
    g: 7, m: "Multimedia (PowerPoint)", t: "Vaqt va audio qo‘shish", l: 2,
    q: "Taqdimot to‘liq avtomatlashgan bo‘lishi, har bir slayd 30 soniya ko‘rinib, o‘zi keyingisiga o‘tishi uchun nima qilinadi?",
    o: [
      "Advance Slide da After maydoniga 30 soniya kiritiladi va hamma slaydlarga qo‘llanadi",
      "Duration maydoniga 30 kiritiladi",
      "Faqat On Mouse Click belgilanadi",
      "Sound ro‘yxatidan baraban tovushi tanlanadi"
    ],
    e: "After — slayd avtomatik almashguncha qancha ko‘rsatilishi; Duration esa o‘tish effektining o‘zi davomiyligi. Apply To All barcha slaydlarga qo‘llaydi."
  },
  {
    g: 7, m: "Multimedia (PowerPoint)", t: "Animatsiya effektlari", l: 1,
    q: "Kontentni slayddan g‘oyib qilish uchun qaysi turdagi animatsiya ishlatiladi?",
    o: ["Chiqish animatsiyasi", "Kirish animatsiyasi", "Ajratib ko‘rsatish animatsiyasi", "O‘tish effekti"],
    e: "Kirish — kontentni paydo qiladi, ajratib ko‘rsatish (emphasis) — e’tiborni jalb qiladi, chiqish — kontentni g‘oyib qiladi."
  },
  {
    g: 7, m: "Multimedia (PowerPoint)", t: "Animatsiya effektlari", l: 2,
    q: "Darslikka ko‘ra animatsiyadan foydalanishning ikkita to‘g‘ri sababi qaysi?",
    o: [
      "Muayyan kontentni ajratib ko‘rsatish va uni kerakli paytgacha yashirib turish",
      "Har bir so‘zni aylantirish va slaydni rangli qilish",
      "Taqdimot hajmini kichraytirish va tezlashtirish",
      "Auditoriyani chalg‘itish va kuldirish"
    ],
    e: "Animatsiya maqsadli bo‘lishi kerak: kontentni ajratib ko‘rsatish yoki uni auditoriya ko‘rishi kerak bo‘lgan vaqtgacha yashirish. Ortiqcha animatsiya chalg‘itadi."
  },
  {
    g: 7, m: "Multimedia (PowerPoint)", t: "Animatsiya triggerlari va Animation Pane", l: 1,
    q: "Animatsiya oldingi animatsiya TUGAGANIDAN KEYIN avtomatik boshlanishi uchun Start maydonida nima tanlanadi?",
    o: ["After Previous", "With Previous", "On Click", "Duration"],
    e: "On Click — sichqoncha bosilganda; With Previous — oldingisi bilan birga; After Previous — oldingisi tugagach boshlanadi."
  },
  {
    g: 7, m: "Multimedia (PowerPoint)", t: "Animatsiya triggerlari va Animation Pane", l: 2,
    q: "Slayddagi animatsiyalar noto‘g‘ri tartibda ijro etilyapti. Tartibni qanday o‘zgartirish mumkin?",
    o: [
      "Animation Pane ni ochib, Move Earlier yoki Move Later tugmalaridan foydalanish",
      "Barcha animatsiyalarni o‘chirib, slaydni qayta yaratish",
      "Transitions → Apply To All",
      "Slide Show → From Beginning"
    ],
    e: "Animation Pane ekranning o‘ng tomonida barcha animatsiyalar ro‘yxati va tartibini ko‘rsatadi; Move Earlier/Later bilan tartib o‘zgartiriladi."
  },
  {
    g: 7, m: "Multimedia (PowerPoint)", t: "Auditoriya va maqsadni bilish", l: 1,
    q: "Taqdimot yaratishda eng muhim ikkita narsa qaysi?",
    o: ["Auditoriya va maqsad", "Shrift va rang", "Slaydlar soni va fayl hajmi", "Tovush va animatsiya"],
    e: "Kontent, formatlash, o‘tish va animatsiyalar tanlovi auditoriya (kim ko‘radi) va maqsad (axborot, ko‘rsatma yoki ko‘ngilochar) ga qarab qilinadi."
  },
  {
    g: 7, m: "Multimedia (PowerPoint)", t: "Auditoriya va maqsadni bilish", l: 2,
    q: "Kelajakdagi ish beruvchi uchun rasmiy taqdimot tayyorlanmoqda. Qaysi yondashuv mos?",
    o: [
      "Bir xil, sodda o‘tish effektlari va kam, maqsadli animatsiyalar",
      "Har slaydda turli rang-barang effektlar va kulgili tovushlar",
      "Har bir so‘zni alohida animatsiya bilan chiqarish",
      "Faqat multfilm tasvirlari"
    ],
    e: "Kattalar va rasmiy maqsad uchun taqdimot sodda va professional bo‘lishi kerak; yosh auditoriya uchun esa qiziqarli effektlar ko‘proq qo‘llanishi mumkin."
  },
  {
    g: 7, m: "Multimedia (PowerPoint)", t: "Slide Master", l: 1,
    q: "Barcha slaydlar uchun maket va formatni bir joyda sozlash imkonini beruvchi namuna qayerdan ochiladi?",
    o: ["View → Slide Master", "Insert → Table", "Transitions → Wipe", "Slide Show → Record"],
    e: "Slide Master har bir slayd uchun maket va format namunasi; sozlamalar yangi slaydlarga avtomatik qo‘llanadi."
  },
  {
    g: 7, m: "Multimedia (PowerPoint)", t: "Slide Master", l: 2,
    q: "Slide Master maketiga rasm yoki matn uchun yangi kontent maydonchasini qo‘shish qanday ataladi?",
    o: ["Insert Placeholder (to‘ldiruvchi qo‘shish)", "Insert Cover Page", "Add Animation", "Apply To All"],
    e: "Slaydga qo‘shimcha kontent maydonchalari to‘ldiruvchi (placeholder) deb ataladi va Insert Placeholder buyrug‘i bilan qo‘shiladi."
  },
  {
    g: 7, m: "Multimedia (PowerPoint)", t: "Ovozli nutq va slayd-shou sozlamalari", l: 1,
    q: "Slaydlarga ovozli nutq yozib olish uchun qaysi tugma bosiladi?",
    o: ["Slide Show → Record Slide Show", "View → Slide Master", "Insert → Cover Page", "Animations → Fly In"],
    e: "Record Slide Show bosilgach, Record tugmasi bilan yozish boshlanadi (3 dan 1 gacha teskari sanoqdan keyin), Stop bilan to‘xtatiladi."
  },
  {
    g: 7, m: "Multimedia (PowerPoint)", t: "Ovozli nutq va slayd-shou sozlamalari", l: 2,
    q: "Hayvonot bog‘i kirishidagi stendda taqdimot to‘liq ekranda to‘xtovsiz takrorlanishi kerak. Set Up Slide Show da nima tanlanadi?",
    o: [
      "Browsed at a kiosk — avtomatik “Loop continuously till Esc” yoqiladi",
      "Presented by a speaker",
      "From Beginning",
      "On Mouse Click"
    ],
    e: "Kiosk rejimi taqdimotni butun ekranda doimiy takrorlaydi; buning uchun har bir slaydga vaqt belgilangan bo‘lishi kerak."
  },

  /* ===================== 3-modul. Elektron jadval (Excel) ===================== */
  {
    g: 7, m: "Elektron jadval (Excel)", t: "Elektron jadvalni loyihalash", l: 1,
    q: "Elektron jadvalda formulalar har doim qaysi belgi bilan boshlanadi?",
    o: ["=", "+", "#", "$"],
    e: "Formula — kompyuterga ma’lumotlar bilan nima qilishni aytuvchi qoida; masalan, =10+2 yoki =SUM(A1:B1)."
  },
  {
    g: 7, m: "Elektron jadval (Excel)", t: "Elektron jadvalni loyihalash", l: 2,
    q: "O‘yin konsoli uchun pul yig‘ish jadvalida “haftalar soni” qanday hisoblanadi?",
    o: [
      "O‘yin konsoli narxi / har hafta tejalgan mablag‘",
      "Haftalik pul − o‘yin konsoli narxi",
      "O‘yin konsoli narxi × haftalik pul",
      "Har hafta sarflangan pul / haftalik pul"
    ],
    e: "Avval tejalgan mablag‘ = haftalik pul − sarflangan pul; keyin haftalar soni = konsol narxi / tejalgan mablag‘ (masalan, =F3/B5)."
  },
  {
    g: 7, m: "Elektron jadval (Excel)", t: "Maket va formulalarni kiritish", l: 1,
    q: "Pul summasi ko‘rsatilgan katakni so‘m yoki boshqa valyutada ko‘rsatish uchun katak formatini nimaga o‘zgartirish kerak?",
    o: ["Currency (valyuta)", "Text", "Date", "Percentage"],
    e: "Pul qiymatlari uchun katak tanlanib, Currency formati beriladi."
  },
  {
    g: 7, m: "Elektron jadval (Excel)", t: "Maket va formulalarni kiritish", l: 2,
    q: "Natija 123,0753846 hafta chiqdi. Verguldan keyingi ortiqcha raqamlarni kamaytirish uchun qaysi tugma bosiladi?",
    o: ["Decrease Decimal", "Merge & Center", "Conditional Formatting", "Goal Seek"],
    e: "Decrease Decimal o‘nli kasr xonalarini kamaytiradi; buncha raqam aniqlik uchun kerak emas."
  },
  {
    g: 7, m: "Elektron jadval (Excel)", t: "Elektron jadvalni sinovdan o‘tkazish", l: 1,
    q: "Formulani tekshirish uchun qaysi usul darslikda tavsiya etilgan?",
    o: [
      "Natijani kalkulyator bilan tekshirish va qiymatlarni o‘zgartirib, natija ham o‘zgarishini kuzatish",
      "Formulani o‘chirib, natijani qo‘lda yozish",
      "Faqat jadval rangini o‘zgartirish",
      "Faylni boshqa nom bilan saqlash"
    ],
    e: "Sinov bosqichlari: nimani sinashni aniqlash, keyin natijani boshqa usul bilan tekshirish va kiritilgan qiymatlarni o‘zgartirib ko‘rish."
  },
  {
    g: 7, m: "Elektron jadval (Excel)", t: "Elektron jadvalni sinovdan o‘tkazish", l: 2,
    q: "Sinov jadvalida B3 = 15 000, B4 = 3 500 bo‘lsa, B5 = B3 − B4 formulasi uchun kutilgan natija qancha?",
    o: ["11 500", "18 500", "3 500", "52 500 000"],
    e: "15 000 − 3 500 = 11 500. Test jadvalida formula, katak, kiritilgan ma’lumot, kutilgan natija va “Amalga oshdimi?” ustunlari bo‘ladi."
  },
  {
    g: 7, m: "Elektron jadval (Excel)", t: "Modellashtirish", l: 1,
    q: "Elektron jadvaldagi ma’lumotlarni o‘zgartirib, hayotda haqiqatda bajarmasdan nima bo‘lishini ko‘rish nima deyiladi?",
    o: ["Modellashtirish", "Validatsiya", "Formatlash", "Eksport"],
    e: "Model — oqibatini ko‘rish uchun ma’lumotlarni o‘zgartirish mumkin bo‘lgan tizim; masalan, “haftada pul sarflamasam nima bo‘ladi?”"
  },
  {
    g: 7, m: "Elektron jadval (Excel)", t: "Modellashtirish", l: 2,
    q: "Konsolni roppa-rosa 50 haftada olish uchun haftalik pul qancha bo‘lishi kerakligini topmoqchisiz. Modellashtirishda qanday yo‘l tutiladi?",
    o: [
      "Haftalik pul qiymatini haftalar soni 50 ga yaqinlashguncha bosqichma-bosqich o‘zgartirish",
      "Konsol narxini 50 ga ko‘paytirish",
      "Haftalar soni katagiga qo‘lda 50 yozib qo‘yish",
      "Faqat diagramma chizish"
    ],
    e: "Darslik misolida 20 000 → 48 hafta, 19 000 → 52 hafta, 19 500 → 50 hafta; qiymat kerakli natijaga yaqinlashguncha o‘zgartiriladi."
  },
  {
    g: 7, m: "Elektron jadval (Excel)", t: "Ma’lumot yig‘ish shakli", l: 1,
    q: "Ma’lumot yig‘ish shaklida (forma) nima bo‘lishi SHART EMAS?",
    o: ["Har bir sahifada ko‘p rangli rasmlar", "Munosib sarlavha", "Har bir ma’lumot nomi va javob uchun yetarli joy", "Cheklangan tanlov bo‘lsa — barcha variantlar"],
    e: "Shaklda sarlavha, maydon nomlari, javob uchun joy va variantlar bo‘lishi kerak; tasvirlar ixtiyoriy va sahifani egallab olmasligi kerak — ma’lumot muhimroq."
  },
  {
    g: 7, m: "Elektron jadval (Excel)", t: "Ma’lumot yig‘ish shakli", l: 2,
    q: "Shaklda tug‘ilgan sana “….. ….. / ….. ….. / ….. …..” ko‘rinishida berilishining maqsadi nima?",
    o: [
      "Foydalanuvchi ma’lumot qanday formatda yozilishini biladi va har bo‘shliqqa bitta raqam yozadi",
      "Shaklni chiroyli qilish uchun",
      "Sana kiritilmasligi uchun",
      "Shaklni qisqartirish uchun"
    ],
    e: "Maxsus formatdagi maydonlar (sana, ISBN) uchun bo‘shliqlar ma’lumotning to‘g‘ri kiritilishiga yordam beradi."
  },
  {
    g: 7, m: "Elektron jadval (Excel)", t: "Elektron jadvalni formatlash", l: 1,
    q: "Bir nechta katakni bitta katakka birlashtirib, matnni markazga joylovchi buyruq qaysi?",
    o: ["Merge & Center", "All Borders", "Wrap Text", "Decrease Decimal"],
    e: "Merge & Center (masalan, A1:F2) kataklarni bitta katakka birlashtiradi — sarlavha uchun qulay."
  },
  {
    g: 7, m: "Elektron jadval (Excel)", t: "Elektron jadvalni formatlash", l: 2,
    q: "Katak fon rangini tanlashda nimaga e’tibor berish kerak?",
    o: [
      "Shrift rang ustida yaxshi ko‘rinishiga — masalan, to‘q ko‘k fonga to‘q ko‘k shrift yozmaslik",
      "Har bir katakka boshqa rang berishga",
      "Faqat qora fon ishlatishga",
      "Fon rangini shrift bilan bir xil qilishga"
    ],
    e: "Formatlash o‘qishni osonlashtirishi kerak: bir xil mavzu, kam turdagi shrift va ranglar, kontrastli fon/matn."
  },
  {
    g: 7, m: "Elektron jadval (Excel)", t: "Baholash va diagramma", l: 1,
    q: "Bir-birining yonida bo‘lmagan ikki ustunni diagramma uchun birga belgilashda qaysi tugma bosib turiladi?",
    o: ["Ctrl", "Shift", "Alt", "Tab"],
    e: "Birinchi ustun belgilanadi, keyin Ctrl bosilgan holda ikkinchisi belgilanadi; so‘ng Insert menyusidan diagramma tanlanadi."
  },
  {
    g: 7, m: "Elektron jadval (Excel)", t: "Baholash va diagramma", l: 2,
    q: "Elektron jadvalni baholashda birinchi navbatda nima qilinadi?",
    o: [
      "Jadval loyiha boshida yozilgan maqsadlarga erishganini tekshirish (maqsadlar jadvali)",
      "Jadvalni o‘chirib, qaytadan yaratish",
      "Faqat ranglarni o‘zgartirish",
      "Barcha formulalarni qiymatga aylantirish"
    ],
    e: "Baholash — ishning ijobiy va salbiy tomonlarini aniqlash; jadval asl maqsadlar bilan taqqoslanadi va yaxshilash yo‘llari yoziladi."
  },
  {
    g: 7, m: "Elektron jadval (Excel)", t: "Shartli formatlash va Goal Seek", l: 1,
    q: "Foyda 0 dan kam bo‘lsa katak avtomatik qizil rangga bo‘yalishi uchun nima ishlatiladi?",
    o: ["Conditional Formatting (shartli formatlash)", "Merge & Center", "Goal Seek", "Decrease Decimal"],
    e: "Home → Conditional Formatting → Highlight Cell Rules → Less than / Greater than / Equal to qoidalari bilan katak formati qiymatga qarab o‘zgaradi."
  },
  {
    g: 7, m: "Elektron jadval (Excel)", t: "Shartli formatlash va Goal Seek", l: 2,
    q: "20 000 000 so‘m foyda olish uchun ishtirok narxi qancha bo‘lishini Excel avtomatik topishi uchun qaysi vosita ishlatiladi?",
    o: ["Data → What-If Analysis → Goal Seek", "Conditional Formatting", "Insert → Chart", "Merge & Center"],
    e: "Goal Seek: Set cell — foyda katagi, To value — 20 000 000, By changing cell — ishtirok narxi katagi. Excel kerakli qiymatni o‘zi topadi."
  },

  /* ===================== 4-modul. Ma’lumotlar bazasi (Access) ===================== */
  {
    g: 7, m: "Ma’lumotlar bazasi (Access)", t: "Ma’lumotlar bazasi va uning maqsadi", l: 1,
    q: "Faqat bitta jadvaldan iborat ma’lumotlar bazasi qanday ataladi?",
    o: ["Oddiy matnli (flat file) ma’lumotlar bazasi", "Tarqoq ma’lumotlar bazasi", "Relyatsion so‘rov", "Hisobot"],
    e: "Flat file bazani yaratish oson; tarqoq (distributed) bazada esa ma’lumotlar bir nechta kompyuterga bo‘linadi."
  },
  {
    g: 7, m: "Ma’lumotlar bazasi (Access)", t: "Ma’lumotlar bazasi va uning maqsadi", l: 2,
    q: "Tarqoq (distributed) ma’lumotlar bazasining xususiyati qaysi?",
    o: [
      "Ma’lumotlar bir joyda emas, bir nechta kompyuterda saqlanadi — qidiruv barcha joylarda olib boriladi",
      "U faqat bitta jadvaldan iborat",
      "U faqat qog‘ozda saqlanadi",
      "U internetsiz ham hamma joyda ishlaydi"
    ],
    e: "Kundalik hayotda ko‘p ishlatiladigan bazalar tarqoq bo‘ladi; biror narsa qidirilganda u saqlanishi mumkin bo‘lgan barcha joylar tekshiriladi."
  },
  {
    g: 7, m: "Ma’lumotlar bazasi (Access)", t: "Maydonlar va ma’lumot turlari", l: 1,
    q: "Ma’lumotlar bazasida “Ha / Yo‘q” qiymatlarini saqlovchi ma’lumot turi qaysi?",
    o: ["Mantiqiy (Yes/No)", "Matn", "Valyuta", "Sana"],
    e: "Mantiqiy tur faqat “Ha” yoki “Yo‘q” ni saqlaydi; masalan, “To‘langanmi?” maydoni."
  },
  {
    g: 7, m: "Ma’lumotlar bazasi (Access)", t: "Maydonlar va ma’lumot turlari", l: 2,
    q: "Telefon raqami (masalan, 07784 999999) qaysi ma’lumot turida saqlanishi kerak va nima uchun?",
    o: [
      "Matn — undan hisob-kitob qilinmaydi va boshidagi 0 saqlanishi kerak",
      "Raqam — chunki u raqamlardan iborat",
      "Valyuta — chunki u pul bilan bog‘liq",
      "Mantiqiy — chunki u Ha/Yo‘q"
    ],
    e: "Matn turi harflar, belgilar va hisoblanmaydigan raqamlarni saqlaydi. Raqam turida boshidagi 0 yo‘qoladi."
  },
  {
    g: 7, m: "Ma’lumotlar bazasi (Access)", t: "Maydonlarni aniqlash", l: 1,
    q: "Nima uchun manzil bir nechta maydonga (uy, ko‘cha, shahar, mamlakat, indeks) bo‘linadi?",
    o: [
      "Shunda, masalan, faqat bir mamlakatda yashovchilarni alohida qidirish mumkin bo‘ladi",
      "Bazaning hajmini kattalashtirish uchun",
      "Ma’lumotni yashirish uchun",
      "Chunki Access bitta uzun maydonni saqlay olmaydi"
    ],
    e: "Maydon — bitta alohida ma’lumot. Bo‘lingan maydonlar alohida yoki birgalikda ishlatiladi va qidiruvni osonlashtiradi."
  },
  {
    g: 7, m: "Ma’lumotlar bazasi (Access)", t: "Maydonlarni aniqlash", l: 2,
    q: "Ma’lumotlarni muhofaza qilish qoidalariga ko‘ra qaysi yondashuv to‘g‘ri?",
    o: [
      "Faqat maqsad uchun kerakli ma’lumotlarni yig‘ish va saqlash",
      "Har ehtimolga qarshi imkon qadar ko‘p ma’lumot yig‘ish",
      "To‘plangan ma’lumotlarni boshqalar bilan bo‘lishish",
      "Maydon nomlarini iloji boricha uzun yozish"
    ],
    e: "Ortiqcha ma’lumot talab qilish ma’lumotlarni muhofaza qilish qoidalariga zid bo‘lishi mumkin; maydon nomlari esa qisqa va ma’noli bo‘lishi kerak."
  },
  {
    g: 7, m: "Ma’lumotlar bazasi (Access)", t: "Jadval va ochiluvchi ro‘yxat (Lookup Wizard)", l: 1,
    q: "Microsoft Accessda yangi jadval maydonlari va turlarini kiritish uchun qaysi yo‘l tanlanadi?",
    o: ["Create → Table Design", "External Data → Excel", "Create → Report Wizard", "Home → Replace"],
    e: "Table Design oynasida birinchi ustunga maydon nomlari, ikkinchi ustunga ma’lumot turi kiritiladi."
  },
  {
    g: 7, m: "Ma’lumotlar bazasi (Access)", t: "Jadval va ochiluvchi ro‘yxat (Lookup Wizard)", l: 2,
    q: "Yosh guruhi maydoni uchun (8–12, 13–17, 18+) ochiluvchi ro‘yxat yaratishning asosiy foydasi nima?",
    o: [
      "Foydalanuvchi faqat tayyor variantdan tanlaydi — imlo xatolari bo‘lmaydi va so‘rovlar to‘g‘ri ishlaydi",
      "Bazaga istalgan matnni yozish mumkin bo‘ladi",
      "Jadval avtomatik o‘chadi",
      "Maydon raqamga aylanadi"
    ],
    e: "Lookup Wizard → “I will type in the values that I want” orqali variantlar kiritiladi; tanlov xatolarni kamaytiradi."
  },
  {
    g: 7, m: "Ma’lumotlar bazasi (Access)", t: "Ma’lumot kiritish formasi", l: 1,
    q: "Accessda ma’lumot kiritish uchun qulay forma qaysi vosita orqali yaratiladi?",
    o: ["Create → Form Wizard", "Create → Query Design", "View → Slide Master", "Data → Goal Seek"],
    e: "Form Wizard da jadval tanlanadi, juft strelka bilan barcha maydonlar o‘tkaziladi, Columnar maket tanlanadi va Finish bosiladi."
  },
  {
    g: 7, m: "Ma’lumotlar bazasi (Access)", t: "Ma’lumot kiritish formasi", l: 2,
    q: "Formada mavjud yozuvni buzmasdan yangi o‘yinchi qo‘shish uchun nima qilinadi?",
    o: [
      "Create a new (New) record tugmasi bosilib, ochilgan bo‘sh formaga ma’lumot kiritiladi",
      "Mavjud yozuvdagi matnlarni o‘chirib, yangi ma’lumot yoziladi",
      "Jadvalni o‘chirib qayta yaratiladi",
      "Report Wizard ishga tushiriladi"
    ],
    e: "Navigatsiya tugmalari yozuvlar orasida harakatlanish va yangi yozuv yaratish uchun; mavjud yozuvni o‘zgartirsangiz, eski ma’lumot yo‘qoladi."
  },
  {
    g: 7, m: "Ma’lumotlar bazasi (Access)", t: "Ma’lumotlar bazasini test qilish", l: 1,
    q: "Bazaga kiritilgan ma’lumotni uning asli (qog‘ozdagi nusxa) bilan solishtirib tekshirish qanday ataladi?",
    o: ["Tasdiqlash (verifikatsiya)", "Eksport", "Validatsiya qoidasi", "So‘rov"],
    e: "Tasdiqlash ma’lumot to‘g‘riligini emas, kiritilgan ma’lumot aslga mos kelishini tekshiradi."
  },
  {
    g: 7, m: "Ma’lumotlar bazasi (Access)", t: "Ma’lumotlar bazasini test qilish", l: 2,
    q: "Ma’lumot kiritish formasi to‘g‘ri ishlashini tekshirishning darslikdagi usuli qaysi?",
    o: [
      "Forma orqali yangi yozuv kiritib, bazani yopib qayta ochish va yozuv saqlanganini tekshirish",
      "Formaning rangini o‘zgartirish",
      "Formani chop etib, qo‘lda to‘ldirish",
      "Faqat jadval nomini o‘zgartirish"
    ],
    e: "Agar baza qayta ochilganda kiritilgan o‘yinchi o‘z joyida bo‘lsa, forma to‘g‘ri ishlayapti. Shuningdek, maydonlarga noto‘g‘ri turdagi ma’lumot kiritib sinab ko‘riladi."
  },
  {
    g: 7, m: "Ma’lumotlar bazasi (Access)", t: "Ma’lumotlar xavfsizligi", l: 1,
    q: "Internetda siz haqingizda qolgan barcha ma’lumotlar (qidiruvlar, rasmlar, postlar) qanday ataladi?",
    o: ["Raqamli iz", "Buzib kirish", "Validatsiya", "Hisobot"],
    e: "Raqamli izdan reklama uchun foydalaniladi, lekin u salbiy oqibatlarga ham olib kelishi mumkin — masalan, nomaqbul rasm ish beruvchi ko‘zi tushadigan joyda qoladi."
  },
  {
    g: 7, m: "Ma’lumotlar bazasi (Access)", t: "Ma’lumotlar xavfsizligi", l: 2,
    q: "Sport klubi qabulxonasi xodimi a’zolarning ismi va manzilini ko‘radi, lekin kredit karta va tibbiy ma’lumotlarini ko‘ra olmaydi. Bu qaysi himoya usuli?",
    o: ["Ko‘rish huquqlari", "Faqat o‘qish (Read only) kirish huquqi", "Parol", "Raqamli iz"],
    e: "Kirish huquqlari (Read only / Read, write) ma’lumotni o‘zgartira olishni, ko‘rish huquqlari esa qaysi ma’lumotlarni ko‘ra olishni belgilaydi."
  },
  {
    g: 7, m: "Ma’lumotlar bazasi (Access)", t: "Ma’lumotlarni Word va Excelga yuborish", l: 1,
    q: "Biror dasturdan ma’lumotlarni chiqarib, boshqa dasturga yuborish qanday ataladi?",
    o: ["Eksport", "Import", "Validatsiya", "So‘rov"],
    e: "Eksport — dasturdan ma’lumotni chiqarish; import — ma’lumotni boshqa dasturga joylash."
  },
  {
    g: 7, m: "Ma’lumotlar bazasi (Access)", t: "Ma’lumotlarni Word va Excelga yuborish", l: 2,
    q: "Maktab har bir ota-onaga faqat uning ismi va manzili yozilgan alohida xat yubormoqchi. Accessdagi qaysi funksiya mos?",
    o: ["External Data → Word Merge (Insert Merge Field)", "Copy va Paste", "Create → Query Design", "Data → Goal Seek"],
    e: "Word Merge bazadagi har bir yozuv uchun hujjatning alohida nusxasini yaratadi; maydonlar << >> belgilari bilan qo‘yiladi va Preview Results bilan ko‘riladi."
  },
  {
    g: 7, m: "Ma’lumotlar bazasi (Access)", t: "Validatsiya qoidalari", l: 1,
    q: "Accessda kiritiladigan ma’lumotga cheklov qo‘yish (masalan, faqat “8–12” Or “13–17” Or “18+”) qayerda yoziladi?",
    o: ["Design View dagi Validation Rule maydonida", "Form Wizard da", "Report Wizard da", "External Data menyusida"],
    e: "Validation Rule — ruxsat etilgan qiymatlar; Validation Text — qoidaga mos kelmaganda chiqadigan xato xabari."
  },
  {
    g: 7, m: "Ma’lumotlar bazasi (Access)", t: "Validatsiya qoidalari", l: 2,
    q: "Ballar maydoniga faqat 0 dan katta va 100 dan kichik son kiritilishi uchun qaysi validatsiya qoidasi to‘g‘ri?",
    o: [">0 And <100", ">0 Or <100", "<0 And >100", "=0 Or =100"],
    e: "Bir nechta shartni birlashtirish uchun And ishlatiladi: son ikkala shartga ham mos bo‘lishi kerak. Or bilan deyarli istalgan son o‘tib ketardi."
  },
  {
    g: 7, m: "Ma’lumotlar bazasi (Access)", t: "So‘rov (Query) va hisobot (Report)", l: 1,
    q: "Bazadan faqat kerakli ma’lumotlarni (masalan, 18+ yoshdagilarni) ajratib olish uchun nima yaratiladi?",
    o: ["So‘rov (Query)", "Forma", "Validatsiya matni", "Raqamli iz"],
    e: "Create → Query Design → jadval qo‘shiladi → maydonlar tanlanadi → Criteria qatoriga shart yoziladi → Run."
  },
  {
    g: 7, m: "Ma’lumotlar bazasi (Access)", t: "So‘rov (Query) va hisobot (Report)", l: 2,
    q: "100 balldan ko‘p ball to‘plagan o‘yinchilarni topish uchun so‘rovning Criteria qatoriga nima yoziladi?",
    o: [">100", "<100", "\"100\"", "=100+"],
    e: "“100 dan katta” sharti >100 kabi yoziladi. Matnli shartlar esa qo‘shtirnoqda yoziladi, masalan, \"18+\"."
  },
);
