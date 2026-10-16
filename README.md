# Informatika imtihon trenajyori

8- va 9-sinf "Informatika va axborot texnologiyalari" darsliklari asosidagi test sayti.
Bazada 260 ta savol bor (130 mavzu: har biridan 1 ta o‘rtacha + 1 ta qiyinroq).
Har bir urinishda 20 ta savol tasodifiy tanlanadi, oxirida ball, xato savollar,
to‘g‘ri javob va izoh ko‘rsatiladi.

## Ishga tushirish

`index.html` ni lokal server orqali oching (masalan):

```bash
python3 -m http.server 5173
```

so‘ng brauzerda `http://localhost:5173`.

## Tuzilma

```
index.html            — sahifa (BEM sinflari)
scss/                 — SCSS manba: _variables, _base, blocks/*
css/main.css          — kompilyatsiya qilingan CSS
js/questions-8.js     — 8-sinf savollari
js/questions-9.js     — 9-sinf savollari
js/app.js             — test mantiqi
```

## SCSS ni qayta kompilyatsiya qilish

```bash
npm install
npm run build:css
```

## Savol qo‘shish

`js/questions-8.js` yoki `js/questions-9.js` ga quyidagi ko‘rinishda obyekt qo‘shing.
**Birinchi variant har doim to‘g‘ri javob** — ekranda variantlar aralashtiriladi.

```js
{
  g: 9, m: "Bo‘lim nomi", t: "Mavzu nomi", l: 1, // l: 1 — o‘rtacha, 2 — qiyinroq
  q: "Savol matni?",
  o: ["To‘g‘ri javob", "Xato 1", "Xato 2", "Xato 3"],
  e: "Natijada ko‘rsatiladigan izoh."
}
```
# exam-gym
