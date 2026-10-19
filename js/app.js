/*
 * Informatika imtihon trenajyori.
 * Savollar window.QUESTIONS massivida (questions-8.js, questions-9.js).
 * Har bir savolda o[0] — to‘g‘ri javob; ekranda variantlar aralashtiriladi.
 */
(function () {
  "use strict";

  var TEST_SIZE = 20;
  var TIME_LIMIT_MS = 30 * 60 * 1000;
  var STORAGE_ACTIVE = "itTrainer.active";
  var STORAGE_HISTORY = "itTrainer.history";
  var STORAGE_THEME = "itTrainer.theme";
  var LETTERS = ["A", "B", "C", "D"];

  var BANK = (window.QUESTIONS || []).map(function (q, index) {
    return Object.assign({ id: index }, q);
  });

  var state = null;
  var timerId = null;
  var reviewFilter = "wrong";

  // ---------- Yordamchi funksiyalar ----------

  function $(id) {
    return document.getElementById(id);
  }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function shuffle(list) {
    var arr = list.slice();
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }
    return arr;
  }

  function topicKey(q) {
    return q.g + "|" + q.t;
  }

  function storageGet(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
      return fallback;
    }
  }

  function storageSet(key, value) {
    try {
      if (value === null) localStorage.removeItem(key);
      else localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      /* brauzer xotirasi yopiq bo‘lsa, shunchaki saqlanmaydi */
    }
  }

  function formatTime(ms) {
    var total = Math.max(0, Math.round(ms / 1000));
    var m = Math.floor(total / 60);
    var s = total % 60;
    return (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
  }

  // 10-sinf kaliti 10–11-sinf darsligini bildiradi
  function gradeLabel(g) {
    return String(g) === "10" ? "10–11-sinf" : g + "-sinf";
  }

  function gradeFromPercent(p) {
    if (p >= 86) return 5;
    if (p >= 71) return 4;
    if (p >= 56) return 3;
    return 2;
  }

  function levelLabel(level) {
    return level === 2 ? "Qiyin" : "O‘rtacha";
  }

  // ---------- Savollarni tanlash ----------

  /*
   * Ro‘yxatdan `count` ta savol oladi: avval hali ishlatilmagan mavzulardan,
   * keyin yetmasa — qolganlaridan.
   */
  function pickDistinct(list, count, usedTopics) {
    var picked = [];
    var rest = [];
    shuffle(list).forEach(function (q) {
      var key = topicKey(q);
      if (picked.length < count && !usedTopics[key]) {
        usedTopics[key] = true;
        picked.push(q);
      } else {
        rest.push(q);
      }
    });
    for (var i = 0; picked.length < count && i < rest.length; i++) {
      picked.push(rest[i]);
    }
    return picked;
  }

  function buildSelection(grade, balanced) {
    var pool = BANK.filter(function (q) {
      return grade === "all" || String(q.g) === grade;
    });
    var used = {};
    var picked;

    if (balanced) {
      var half = Math.floor(TEST_SIZE / 2);
      var medium = pickDistinct(pool.filter(function (q) { return q.l === 1; }), half, used);
      var hard = pickDistinct(pool.filter(function (q) { return q.l === 2; }), TEST_SIZE - medium.length, used);
      picked = medium.concat(hard);
    } else {
      picked = pickDistinct(pool, TEST_SIZE, used);
    }
    return shuffle(picked);
  }

  function createTest(questions, settings) {
    return {
      items: questions.map(function (q) {
        return { id: q.id, perm: shuffle([0, 1, 2, 3]) };
      }),
      answers: questions.map(function () { return null; }),
      current: 0,
      startedAt: Date.now(),
      deadline: settings.timer ? Date.now() + TIME_LIMIT_MS : null,
      settings: settings
    };
  }

  // ---------- Ekranlar ----------

  function showScreen(name) {
    ["setup", "quiz", "result"].forEach(function (screen) {
      $("screen-" + screen).hidden = screen !== name;
    });
    window.scrollTo(0, 0);
  }

  function renderSetup() {
    var topics = {};
    var counts = { all: BANK.length, 7: 0, 8: 0, 9: 0, 10: 0 };
    BANK.forEach(function (q) {
      topics[topicKey(q)] = true;
      counts[q.g] += 1;
    });
    $("stat-total").textContent = BANK.length;
    $("stat-topics").textContent = Object.keys(topics).length;
    document.querySelectorAll("[data-count]").forEach(function (node) {
      node.textContent = counts[node.getAttribute("data-count")] + " ta savol";
    });

    var active = storageGet(STORAGE_ACTIVE, null);
    $("resume-button").hidden = !(active && active.items && active.items.length);

    renderHistory();
    showScreen("setup");
  }

  function renderHistory() {
    var history = storageGet(STORAGE_HISTORY, []);
    var list = $("history-list");
    list.textContent = "";
    $("history-empty").hidden = history.length > 0;

    history.slice(0, 8).forEach(function (h) {
      var item = el("li", "history__item");
      var date = new Date(h.date);
      var label = (h.grade === "all" ? "Barcha sinflar" : gradeLabel(h.grade)) + (h.retry ? " · xatolar ustida ish" : "");
      item.appendChild(el("span", "history__date", date.toLocaleDateString("uz-UZ") + " " +
        date.toLocaleTimeString("uz-UZ", { hour: "2-digit", minute: "2-digit" }) + " — " + label));
      item.appendChild(el("span", "history__score", h.score + " / " + h.total + " (" + h.percent + "%)"));
      list.appendChild(item);
    });
  }

  // ---------- Test jarayoni ----------

  function startTest(questions, settings) {
    if (!questions.length) return;
    state = createTest(questions, settings);
    storageSet(STORAGE_ACTIVE, state);
    showScreen("quiz");
    renderQuestion();
    startTimer();
  }

  function resumeTest() {
    var saved = storageGet(STORAGE_ACTIVE, null);
    if (!saved || !saved.items || !saved.items.length) return;
    state = saved;
    if (state.deadline && Date.now() >= state.deadline) {
      finishTest();
      return;
    }
    showScreen("quiz");
    renderQuestion();
    startTimer();
  }

  function currentQuestion() {
    return BANK[state.items[state.current].id];
  }

  function renderQuestion() {
    var item = state.items[state.current];
    var q = BANK[item.id];
    var total = state.items.length;
    var answered = state.answers.filter(function (a) { return a !== null; }).length;

    $("quiz-counter").textContent = "Savol " + (state.current + 1) + " / " + total;
    $("quiz-progress-bar").style.width = (answered / total) * 100 + "%";
    $("quiz-progress").setAttribute("aria-valuenow", answered);
    $("quiz-progress").setAttribute("aria-valuemax", total);

    var meta = $("question-meta");
    meta.textContent = "";
    meta.appendChild(el("span", "tag", gradeLabel(q.g)));
    meta.appendChild(el("span", "tag", q.m));
    meta.appendChild(el("span", "tag tag--" + (q.l === 2 ? "hard" : "medium"), levelLabel(q.l)));

    $("question-text").textContent = q.q;

    var options = $("question-options");
    options.textContent = "";
    item.perm.forEach(function (originalIndex, displayIndex) {
      var li = el("li");
      var btn = el("button", "option" + (state.answers[state.current] === displayIndex ? " option--selected" : ""));
      btn.type = "button";
      btn.setAttribute("aria-pressed", state.answers[state.current] === displayIndex ? "true" : "false");
      btn.appendChild(el("span", "option__letter", LETTERS[displayIndex]));
      btn.appendChild(el("span", "option__text", q.o[originalIndex]));
      btn.addEventListener("click", function () {
        selectAnswer(displayIndex);
      });
      li.appendChild(btn);
      options.appendChild(li);
    });

    $("prev-button").disabled = state.current === 0;
    var isLast = state.current === total - 1;
    $("next-button").textContent = isLast ? "Yakunlash" : "Keyingi →";

    renderPalette();
  }

  function renderPalette() {
    var palette = $("palette");
    palette.textContent = "";
    state.items.forEach(function (_, index) {
      var cls = "palette__item";
      if (state.answers[index] !== null) cls += " palette__item--answered";
      if (index === state.current) cls += " palette__item--current";
      var btn = el("button", cls, String(index + 1));
      btn.type = "button";
      btn.setAttribute("aria-label", (index + 1) + "-savol" + (state.answers[index] !== null ? ", javob berilgan" : ""));
      btn.addEventListener("click", function () {
        goTo(index);
      });
      palette.appendChild(btn);
    });
  }

  function selectAnswer(displayIndex) {
    state.answers[state.current] = displayIndex;
    storageSet(STORAGE_ACTIVE, state);
    renderQuestion();
  }

  function goTo(index) {
    if (index < 0 || index >= state.items.length) return;
    state.current = index;
    storageSet(STORAGE_ACTIVE, state);
    renderQuestion();
  }

  function next() {
    if (state.current === state.items.length - 1) askFinish();
    else goTo(state.current + 1);
  }

  function askFinish() {
    var unanswered = state.answers.filter(function (a) { return a === null; }).length;
    $("confirm-text").textContent = unanswered
      ? unanswered + " ta savolga javob berilmagan. Ular xato deb hisoblanadi."
      : "Barcha savollarga javob berdingiz. Natijani ko‘rishga tayyormisiz?";
    $("confirm-modal").hidden = false;
    $("confirm-ok").focus();
  }

  function closeModal() {
    $("confirm-modal").hidden = true;
  }

  // ---------- Taymer ----------

  function startTimer() {
    stopTimer();
    tick();
    timerId = setInterval(tick, 1000);
  }

  function stopTimer() {
    if (timerId) clearInterval(timerId);
    timerId = null;
  }

  function tick() {
    if (!state) return;
    var timer = $("quiz-timer");
    if (state.deadline) {
      var left = state.deadline - Date.now();
      timer.textContent = "⏱ " + formatTime(left);
      timer.classList.toggle("quiz__timer--warning", left <= 5 * 60 * 1000);
      if (left <= 0) {
        closeModal();
        finishTest();
      }
    } else {
      timer.textContent = "⏱ " + formatTime(Date.now() - state.startedAt);
      timer.classList.remove("quiz__timer--warning");
    }
  }

  // ---------- Natija ----------

  function evaluate(test) {
    return test.items.map(function (item, index) {
      var q = BANK[item.id];
      var correctDisplay = item.perm.indexOf(0);
      var answer = test.answers[index];
      return {
        q: q,
        number: index + 1,
        correctText: q.o[0],
        userText: answer === null ? null : q.o[item.perm[answer]],
        status: answer === null ? "skipped" : answer === correctDisplay ? "correct" : "wrong"
      };
    });
  }

  function finishTest() {
    stopTimer();
    closeModal();
    var test = state;
    var results = evaluate(test);
    var score = results.filter(function (r) { return r.status === "correct"; }).length;
    var total = results.length;
    var percent = Math.round((score / total) * 100);
    var spent = Math.min(Date.now(), test.deadline || Infinity) - test.startedAt;

    var history = storageGet(STORAGE_HISTORY, []);
    history.unshift({
      date: Date.now(),
      grade: test.settings.grade,
      retry: !!test.settings.retry,
      score: score,
      total: total,
      percent: percent
    });
    storageSet(STORAGE_HISTORY, history.slice(0, 20));
    storageSet(STORAGE_ACTIVE, null);

    state = null;
    renderResult(results, { score: score, total: total, percent: percent, spent: spent, settings: test.settings });
  }

  function renderResult(results, summary) {
    var percent = summary.percent;
    var grade = gradeFromPercent(percent);

    var ring = $("result-ring");
    ring.style.setProperty("--percent", percent);
    ring.classList.remove("result__ring--good", "result__ring--mid", "result__ring--bad");
    ring.classList.add(percent >= 71 ? "result__ring--good" : percent >= 56 ? "result__ring--mid" : "result__ring--bad");

    $("result-score").textContent = summary.score;
    document.querySelector(".result__score-max").textContent = summary.total + " balldan";
    $("result-percent").textContent = percent + "%";
    $("result-grade").textContent = grade;
    $("result-time").textContent = formatTime(summary.spent);

    var headlines = {
      5: "A’lo natija! 🏆",
      4: "Yaxshi natija! 👍",
      3: "Qoniqarli, lekin takrorlash kerak",
      2: "Mavzularni qayta o‘qib chiqing"
    };
    $("result-headline").textContent = headlines[grade];

    var wrongCount = results.filter(function (r) { return r.status === "wrong"; }).length;
    var skippedCount = results.filter(function (r) { return r.status === "skipped"; }).length;
    $("result-summary").textContent = summary.total + " ta savoldan " + summary.score + " tasiga to‘g‘ri javob berdingiz. " +
      "Xato: " + wrongCount + (skippedCount ? ", javobsiz: " + skippedCount : "") + ".";

    var byLevel = { 1: [0, 0], 2: [0, 0] };
    results.forEach(function (r) {
      byLevel[r.q.l][1] += 1;
      if (r.status === "correct") byLevel[r.q.l][0] += 1;
    });
    $("result-levels").textContent = byLevel[1][0] + "/" + byLevel[1][1] + " · " + byLevel[2][0] + "/" + byLevel[2][1];

    renderTopics(results);

    lastResults = results;
    lastSettings = summary.settings;
    $("retry-wrong-button").disabled = results.every(function (r) { return r.status === "correct"; });
    setReviewFilter(results.some(function (r) { return r.status !== "correct"; }) ? "wrong" : "all");

    showScreen("result");
  }

  var lastResults = [];
  var lastSettings = { grade: "all", timer: false, balanced: true };

  function renderTopics(results) {
    var groups = {};
    var order = [];
    results.forEach(function (r) {
      var key = gradeLabel(r.q.g) + " · " + r.q.m;
      if (!groups[key]) {
        groups[key] = { correct: 0, total: 0 };
        order.push(key);
      }
      groups[key].total += 1;
      if (r.status === "correct") groups[key].correct += 1;
    });

    order.sort(function (a, b) {
      return groups[a].correct / groups[a].total - groups[b].correct / groups[b].total;
    });

    var list = $("topics-list");
    list.textContent = "";
    order.forEach(function (key) {
      var g = groups[key];
      var ratio = g.correct / g.total;
      var item = el("li", "topics__item");
      item.appendChild(el("span", "topics__name", key));
      item.appendChild(el("span", "topics__value", g.correct + " / " + g.total));
      var bar = el("div", "topics__bar");
      var fill = el("div", "topics__bar-fill" + (ratio < 0.5 ? " topics__bar-fill--low" : ratio < 0.8 ? " topics__bar-fill--mid" : ""));
      fill.style.width = Math.max(ratio * 100, 4) + "%";
      bar.appendChild(fill);
      item.appendChild(bar);
      list.appendChild(item);
    });
  }

  function setReviewFilter(filter) {
    reviewFilter = filter;
    document.querySelectorAll(".review__filter").forEach(function (btn) {
      var active = btn.getAttribute("data-filter") === filter;
      btn.classList.toggle("review__filter--active", active);
      btn.setAttribute("aria-selected", active ? "true" : "false");
    });
    renderReview();
  }

  function renderReview() {
    var list = $("review-list");
    list.textContent = "";
    var shown = lastResults.filter(function (r) {
      return reviewFilter === "all" || r.status !== "correct";
    });
    $("review-empty").hidden = shown.length > 0;

    var statusText = { correct: "✓ To‘g‘ri", wrong: "✗ Noto‘g‘ri", skipped: "— Javob berilmagan" };

    shown.forEach(function (r) {
      var item = el("li", "review-item" + (r.status === "correct" ? "" : " review-item--" + r.status));

      var head = el("div", "review-item__head");
      head.appendChild(el("span", "review-item__number", r.number + "-savol"));
      head.appendChild(el("span", "tag tag--" + (r.q.l === 2 ? "hard" : "medium"), levelLabel(r.q.l)));
      head.appendChild(el("span", "review-item__status" + (r.status === "correct" ? "" : " review-item__status--" + r.status), statusText[r.status]));
      item.appendChild(head);

      item.appendChild(el("p", "review-item__question", r.q.q));

      var answers = el("div", "review-item__answers");
      if (r.status !== "correct") {
        var user = el("div", "review-item__answer review-item__answer--user");
        user.appendChild(el("span", "review-item__answer-label", "Sizning javobingiz"));
        user.appendChild(document.createTextNode(r.userText === null ? "Javob berilmagan" : r.userText));
        answers.appendChild(user);
      }
      var correct = el("div", "review-item__answer review-item__answer--correct");
      correct.appendChild(el("span", "review-item__answer-label", "To‘g‘ri javob"));
      correct.appendChild(document.createTextNode(r.correctText));
      answers.appendChild(correct);
      item.appendChild(answers);

      item.appendChild(el("p", "review-item__explain", "💡 " + r.q.e));
      item.appendChild(el("p", "review-item__topic", gradeLabel(r.q.g) + " · " + r.q.m + " · " + r.q.t));

      list.appendChild(item);
    });
  }

  // ---------- Mavzu (yorug‘ / qorong‘i) ----------

  function applyTheme(theme) {
    if (theme) document.documentElement.setAttribute("data-theme", theme);
    else document.documentElement.removeAttribute("data-theme");
  }

  function toggleTheme() {
    var current = document.documentElement.getAttribute("data-theme");
    if (!current) {
      current = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    var nextTheme = current === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
    storageSet(STORAGE_THEME, nextTheme);
  }

  // ---------- Hodisalar ----------

  function readSettings() {
    var form = $("setup-form");
    return {
      grade: form.elements.grade.value,
      timer: form.elements.timer.checked,
      balanced: form.elements.balanced.checked
    };
  }

  function bindEvents() {
    $("setup-form").addEventListener("submit", function (event) {
      event.preventDefault();
      var settings = readSettings();
      startTest(buildSelection(settings.grade, settings.balanced), settings);
    });

    $("resume-button").addEventListener("click", resumeTest);
    $("prev-button").addEventListener("click", function () { goTo(state.current - 1); });
    $("next-button").addEventListener("click", next);
    $("finish-button").addEventListener("click", askFinish);
    $("confirm-cancel").addEventListener("click", closeModal);
    $("confirm-ok").addEventListener("click", finishTest);
    $("confirm-modal").addEventListener("click", function (event) {
      if (event.target === event.currentTarget) closeModal();
    });

    $("new-test-button").addEventListener("click", function () {
      var settings = Object.assign({}, lastSettings, { retry: false });
      startTest(buildSelection(settings.grade, settings.balanced), settings);
    });

    $("retry-wrong-button").addEventListener("click", function () {
      var wrong = lastResults.filter(function (r) { return r.status !== "correct"; }).map(function (r) { return r.q; });
      var settings = Object.assign({}, lastSettings, { retry: true, timer: false });
      startTest(shuffle(wrong), settings);
    });

    $("home-button").addEventListener("click", renderSetup);
    $("theme-toggle").addEventListener("click", toggleTheme);

    document.querySelectorAll(".review__filter").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setReviewFilter(btn.getAttribute("data-filter"));
      });
    });

    document.addEventListener("keydown", function (event) {
      if (!$("confirm-modal").hidden) {
        if (event.key === "Escape") closeModal();
        return;
      }
      if (!state || $("screen-quiz").hidden) return;
      if (event.altKey || event.ctrlKey || event.metaKey) return;

      var key = event.key.toUpperCase();
      var index = ["1", "2", "3", "4"].indexOf(key);
      if (index === -1) index = LETTERS.indexOf(key);
      if (index !== -1) {
        event.preventDefault();
        selectAnswer(index);
      } else if (event.key === "ArrowRight") {
        next();
      } else if (event.key === "ArrowLeft") {
        goTo(state.current - 1);
      }
    });
  }

  // ---------- Ishga tushirish ----------

  applyTheme(storageGet(STORAGE_THEME, null));
  bindEvents();
  renderSetup();
})();
