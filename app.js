import './style.css';
import { PART_A_META, SITUATIONS_PART_A } from './data_situations_1.js';
import { PART_B_META, SITUATIONS_PART_B, RETO_FINAL } from './data_situations_2.js';
import { TU_META, TU_QUESTIONS, RETO_EXTRA } from './data_tu.js';

const STORAGE_KEY = 'escucha_y_responde_state_v1';

function loadSavedProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { completed: [], speed: 0.9 };
    const parsed = JSON.parse(raw);
    return {
      completed: Array.isArray(parsed.completed) ? parsed.completed : [],
      speed: typeof parsed.speed === 'number' ? parsed.speed : 0.9
    };
  } catch {
    return { completed: [], speed: 0.9 };
  }
}

const saved = loadSavedProgress();

const state = {
  module: 'partA', // 'partA' | 'partB' | 'tu' | 'method'
  partFilter: 'all', // 'all' | 1 | 2 | 3 | 4 | 5
  tenseFilter: 'all', // 'all' | 'Indefinido' | 'Perfecto' | 'Imperfecto' | 'Pluscuamperfecto'
  searchQuery: '',
  viewMode: 'list', // 'list' | 'focus'
  focusIndex: 0,
  blindMode: false,
  showAllTranslations: false,
  speed: saved.speed,
  openTranslations: new Set(),
  openAnswers: new Set(),
  revealedBlind: new Set(),
  completedIds: new Set(saved.completed),
  speakingKey: null
};

function persistProgress() {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        completed: Array.from(state.completedIds),
        speed: state.speed
      })
    );
  } catch {
    // Ignore storage quota errors
  }
}

function escapeHtml(str) {
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

// Inline SVG icons (clean functional affordances)
const ICONS = {
  play: `<svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>`,
  stop: `<svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="6" y="6" width="12" height="12" rx="1"/></svg>`,
  translate: `<svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/></svg>`,
  eye: `<svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>`,
  eyeOff: `<svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/></svg>`,
  check: `<svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>`,
  chevronDown: `<svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>`,
  chevronLeft: `<svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>`,
  chevronRight: `<svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>`,
  shuffle: `<svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="16 3 21 3 21 8"/><line x1="4" x2="21" y1="20" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" x2="21" y1="15" y2="21"/><line x1="4" x2="9" y1="4" y2="9"/></svg>`,
  search: `<svg class="w-4 h-4 shrink-0 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`
};

// Web Speech API (Spanish pronunciation)
let cachedVoices = [];
function refreshVoices() {
  if (!('speechSynthesis' in window)) return;
  cachedVoices = window.speechSynthesis.getVoices();
}
if ('speechSynthesis' in window) {
  refreshVoices();
  window.speechSynthesis.onvoiceschanged = refreshVoices;
}

function pickSpanishVoice() {
  if (!cachedVoices.length) refreshVoices();
  return (
    cachedVoices.find((v) => v.lang === 'es-ES' && v.localService) ||
    cachedVoices.find((v) => v.lang === 'es-ES') ||
    cachedVoices.find((v) => v.lang.startsWith('es')) ||
    null
  );
}

function stopSpeech() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  const prevKey = state.speakingKey;
  state.speakingKey = null;
  if (prevKey) updateAudioButtonUI(prevKey, false);
}

function speakSpanish(text, key) {
  if (!('speechSynthesis' in window)) return;
  if (state.speakingKey === key) {
    stopSpeech();
    return;
  }
  stopSpeech();

  const utterance = new SpeechSynthesisUtterance(text);
  const voice = pickSpanishVoice();
  if (voice) utterance.voice = voice;
  utterance.lang = voice ? voice.lang : 'es-ES';
  utterance.rate = state.speed;

  state.speakingKey = key;
  updateAudioButtonUI(key, true);

  utterance.onend = () => {
    if (state.speakingKey === key) {
      state.speakingKey = null;
      updateAudioButtonUI(key, false);
    }
  };
  utterance.onerror = () => {
    if (state.speakingKey === key) {
      state.speakingKey = null;
      updateAudioButtonUI(key, false);
    }
  };

  window.speechSynthesis.speak(utterance);
}

function updateAudioButtonUI(key, isPlaying) {
  const btns = document.querySelectorAll(`[data-action="speak"][data-key="${CSS.escape(key)}"]`);
  btns.forEach((btn) => {
    const label = btn.getAttribute('data-label') || 'Լսել';
    if (isPlaying) {
      btn.classList.remove('bg-amber-50', 'text-stone-800', 'border-amber-300', 'hover:bg-amber-100');
      btn.classList.add('bg-orange-600', 'text-white', 'border-orange-600', 'hover:bg-orange-700');
      btn.innerHTML = `${ICONS.stop}<span>Կանգնեցնել</span>`;
      btn.setAttribute('aria-pressed', 'true');
    } else {
      btn.classList.remove('bg-orange-600', 'text-white', 'border-orange-600', 'hover:bg-orange-700');
      btn.classList.add('bg-amber-50', 'text-stone-800', 'border-amber-300', 'hover:bg-amber-100');
      btn.innerHTML = `${ICONS.play}<span>${escapeHtml(label)}</span>`;
      btn.setAttribute('aria-pressed', 'false');
    }
  });
}

// Build normalized items list for current module
function getCurrentModuleMeta() {
  if (state.module === 'partA') return PART_A_META;
  if (state.module === 'partB') return PART_B_META;
  if (state.module === 'tu') return TU_META;
  return null;
}

function getAllItemsForModule(mod) {
  if (mod === 'partA') {
    return SITUATIONS_PART_A.map((item) => ({
      uid: `A-${item.id}`,
      kind: 'situation',
      ...item
    }));
  }
  if (mod === 'partB') {
    const situations = SITUATIONS_PART_B.map((item) => ({
      uid: `B-${item.id}`,
      kind: 'situation',
      ...item
    }));
    const retos = RETO_FINAL.map((item) => ({
      uid: `B-reto-${item.id}`,
      kind: 'reto',
      part: 5,
      titleEs: `Reto final · ${item.id}`,
      titleHy: `Անձնական հարց · ${item.id}`,
      ...item
    }));
    return [...situations, ...retos];
  }
  if (mod === 'tu') {
    const questions = TU_QUESTIONS.map((item) => ({
      uid: `T-${item.id}`,
      kind: 'tu',
      ...item
    }));
    const retos = RETO_EXTRA.map((item) => ({
      uid: `T-reto-${item.id}`,
      kind: 'reto',
      part: 5,
      titleEs: `Reto extra · ${item.id}`,
      titleHy: `Անսպասելի հարց · ${item.id}`,
      ...item
    }));
    return [...questions, ...retos];
  }
  return [];
}

function getFilteredItems() {
  const all = getAllItemsForModule(state.module);
  const query = state.searchQuery.trim().toLowerCase();

  return all.filter((item) => {
    if (state.partFilter !== 'all' && item.part !== state.partFilter) {
      return false;
    }
    if (state.tenseFilter !== 'all') {
      if (!item.tenses || !item.tenses.includes(state.tenseFilter)) {
        return false;
      }
    }
    if (query) {
      const haystacks = [
        String(item.id),
        item.titleEs || '',
        item.titleHy || '',
        item.situationEs || '',
        item.situationHy || '',
        item.qEs || '',
        item.qHy || '',
        item.aEs || '',
        item.aHy || ''
      ];
      if (item.qa) {
        item.qa.forEach((pair) => {
          haystacks.push(pair.qEs, pair.qHy, pair.aEs, pair.aHy);
        });
      }
      return haystacks.some((text) => text.toLowerCase().includes(query));
    }
    return true;
  });
}

function isTranslationOpen(key) {
  return state.showAllTranslations || state.openTranslations.has(key);
}

// Render helper for clickable Spanish text -> opens Armenian translation on click
function renderSpanishClickable({ key, esText, hyText, textClass, audioText, audioLabel = 'Լսել', hiddenInBlind = false }) {
  const open = isTranslationOpen(key);
  const isBlindHidden = hiddenInBlind && state.blindMode && !state.revealedBlind.has(key);
  const isPlaying = state.speakingKey === key;

  return `
    <div class="space-y-2.5" data-block-key="${escapeHtml(key)}">
      <div class="flex flex-wrap items-start justify-between gap-3">
        ${
          isBlindHidden
            ? `
            <div class="flex-1 min-w-0">
              <div class="flex flex-wrap items-center gap-3 p-3.5 rounded-lg border border-dashed border-amber-300 bg-amber-50/70 text-stone-700">
                <span class="text-sm">Իսպաներեն տեքստը թաքցված է լսողական պրակտիկայի համար։ Նախ լսեք աուդիոն։</span>
                <button
                  type="button"
                  data-action="reveal-blind"
                  data-key="${escapeHtml(key)}"
                  class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-orange-900 bg-amber-100 border border-amber-300 rounded-md hover:bg-amber-200 transition-colors whitespace-nowrap shrink-0"
                >
                  ${ICONS.eye}
                  <span>Ցույց տալ տեքստը</span>
                </button>
              </div>
            </div>
            `
            : `
            <button
              type="button"
              data-action="toggle-translation"
              data-key="${escapeHtml(key)}"
              aria-expanded="${open ? 'true' : 'false'}"
              title="Սեղմեք՝ հայերեն թարգմանությունը տեսնելու համար"
              class="spanish-clickable group flex-1 min-w-0 text-left px-3 py-2 -mx-3 -my-2 rounded-lg"
            >
              <span class="${escapeHtml(textClass)} block text-stone-900">${escapeHtml(esText)}</span>
              <span class="inline-flex items-center gap-1.5 mt-1 text-xs font-semibold ${
                open ? 'text-orange-700' : 'text-amber-700 group-hover:text-orange-700'
              }">
                ${ICONS.translate}
                <span>${open ? 'Թաքցնել հայերեն թարգմանությունը' : 'Սեղմիր իսպաներենին՝ հայերեն թարգմանության համար'}</span>
              </span>
            </button>
            `
        }
        <button
          type="button"
          data-action="speak"
          data-key="${escapeHtml(key)}"
          data-text="${escapeHtml(audioText)}"
          data-label="${escapeHtml(audioLabel)}"
          aria-pressed="${isPlaying ? 'true' : 'false'}"
          class="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg border transition-colors whitespace-nowrap shrink-0 ${
            isPlaying
              ? 'bg-orange-600 text-white border-orange-600 hover:bg-orange-700'
              : 'bg-amber-50 text-stone-800 border-amber-300 hover:bg-amber-100'
          }"
        >
          ${isPlaying ? ICONS.stop : ICONS.play}
          <span>${isPlaying ? 'Կանգնեցնել' : escapeHtml(audioLabel)}</span>
        </button>
      </div>

      <div
        data-translation-panel="${escapeHtml(key)}"
        class="${open ? 'block' : 'hidden'} rounded-lg bg-orange-50/90 border border-orange-200 px-3.5 py-2.5 text-sm text-stone-900"
      >
        <span class="text-xs font-semibold text-orange-800 block mb-0.5">Հայերեն թարգմանություն</span>
        <span>${escapeHtml(hyText)}</span>
      </div>
    </div>
  `;
}

// Render a single QA item inside a situation or standalone Tú item
function renderQaBlock({ qaKey, indexLabel, qEs, qHy, aEs, aHy }) {
  const answerOpen = state.openAnswers.has(qaKey);
  const qTransKey = `${qaKey}-q`;
  const aTransKey = `${qaKey}-a`;

  return `
    <div class="pt-4 border-t border-amber-200/80 space-y-3" data-qa-wrapper="${escapeHtml(qaKey)}">
      <div class="text-xs font-semibold text-amber-800">${escapeHtml(indexLabel)}</div>

      ${renderSpanishClickable({
        key: qTransKey,
        esText: qEs,
        hyText: qHy,
        textClass: 'text-[16px] font-semibold leading-snug',
        audioText: qEs,
        audioLabel: 'Լսել հարցը'
      })}

      <div class="flex flex-wrap items-center gap-3 pt-1">
        <button
          type="button"
          data-action="toggle-answer"
          data-key="${escapeHtml(qaKey)}"
          aria-expanded="${answerOpen ? 'true' : 'false'}"
          class="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg border transition-colors whitespace-nowrap shrink-0 ${
            answerOpen
              ? 'bg-amber-200 text-stone-900 border-amber-400 hover:bg-amber-300'
              : 'bg-orange-600 text-white border-orange-600 hover:bg-orange-700'
          }"
        >
          ${answerOpen ? ICONS.eyeOff : ICONS.eye}
          <span>${answerOpen ? 'Թաքցնել պատասխանը' : 'Պատասխան (Respuesta)'}</span>
        </button>
      </div>

      <div
        data-answer-panel="${escapeHtml(qaKey)}"
        class="${answerOpen ? 'block' : 'hidden'} rounded-xl bg-amber-50/90 border border-amber-300 p-4 space-y-2"
      >
        <div class="text-xs font-semibold text-orange-900">Պատասխան (Respuesta)</div>
        ${renderSpanishClickable({
          key: aTransKey,
          esText: aEs,
          hyText: aHy,
          textClass: 'text-[15px] font-medium leading-relaxed',
          audioText: aEs,
          audioLabel: 'Լսել պատասխանը'
        })}
      </div>
    </div>
  `;
}

function renderCard(item) {
  const isDone = state.completedIds.has(item.uid);
  const meta = getCurrentModuleMeta();
  const partInfo = meta && meta.parts ? meta.parts.find((p) => p.id === item.part) : null;
  const tensesLabel = item.tenses && item.tenses.length ? item.tenses.join(' · ') : '';

  const doneButton = `
    <button
      type="button"
      data-action="toggle-done"
      data-uid="${escapeHtml(item.uid)}"
      aria-pressed="${isDone ? 'true' : 'false'}"
      class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border transition-colors whitespace-nowrap shrink-0 ${
        isDone
          ? 'bg-emerald-100 text-emerald-900 border-emerald-400 hover:bg-emerald-200'
          : 'bg-amber-50/70 text-stone-700 border-amber-200 hover:bg-amber-100 hover:text-stone-900'
      }"
    >
      ${ICONS.check}
      <span>${isDone ? 'Կատարված է' : 'Նշել կատարված'}</span>
    </button>
  `;

  if (item.kind === 'situation') {
    const sitKey = `${item.uid}-sit`;
    return `
      <article
        id="card-${escapeHtml(item.uid)}"
        class="bg-white rounded-xl border border-amber-200 p-6 space-y-5 shadow-[0_1px_3px_rgba(217,119,6,0.08)]"
      >
        <div class="flex flex-wrap items-start justify-between gap-4">
          <div class="space-y-1 min-w-0">
            <div class="flex flex-wrap items-center gap-2 text-xs text-stone-500">
              <span class="font-mono-num font-bold text-orange-700">№ ${String(item.id).padStart(2, '0')}</span>
              ${partInfo ? `<span aria-hidden="true">·</span><span>${escapeHtml(partInfo.labelHy)}</span>` : ''}
              ${tensesLabel ? `<span aria-hidden="true">·</span><span class="text-amber-800 font-medium">${escapeHtml(tensesLabel)}</span>` : ''}
            </div>
            <h3 class="font-display text-xl font-semibold text-stone-900 tracking-tight">
              ${escapeHtml(item.titleEs)} <span class="font-sans text-base font-normal text-stone-500">— ${escapeHtml(item.titleHy)}</span>
            </h3>
          </div>
          ${doneButton}
        </div>

        <div class="space-y-2">
          <div class="text-xs font-semibold text-amber-800">Իրավիճակ (Situación)</div>
          ${renderSpanishClickable({
            key: sitKey,
            esText: item.situationEs,
            hyText: item.situationHy,
            textClass: 'text-[17px] leading-relaxed font-normal',
            audioText: item.situationEs,
            audioLabel: 'Լսել իրավիճակը',
            hiddenInBlind: true
          })}
        </div>

        <div class="space-y-4">
          ${item.qa
            .map((pair, idx) =>
              renderQaBlock({
                qaKey: `${item.uid}-qa-${idx}`,
                indexLabel: item.qa.length > 1 ? `Հարց ${idx + 1} (Pregunta ${idx + 1})` : 'Հարց (Pregunta)',
                qEs: pair.qEs,
                qHy: pair.qHy,
                aEs: pair.aEs,
                aHy: pair.aHy
              })
            )
            .join('')}
        </div>
      </article>
    `;
  }

  if (item.kind === 'tu') {
    const qaKey = `${item.uid}-qa`;
    const answerOpen = state.openAnswers.has(qaKey);
    const qTransKey = `${qaKey}-q`;
    const aTransKey = `${qaKey}-a`;

    return `
      <article
        id="card-${escapeHtml(item.uid)}"
        class="bg-white rounded-xl border border-amber-200 p-6 space-y-4 shadow-[0_1px_3px_rgba(217,119,6,0.08)]"
      >
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div class="flex flex-wrap items-center gap-2 text-xs text-stone-500">
            <span class="font-mono-num font-bold text-orange-700">№ ${String(item.id).padStart(2, '0')}</span>
            ${partInfo ? `<span aria-hidden="true">·</span><span>${escapeHtml(partInfo.labelHy)}</span>` : ''}
            ${tensesLabel ? `<span aria-hidden="true">·</span><span class="text-amber-800 font-medium">${escapeHtml(tensesLabel)}</span>` : ''}
          </div>
          ${doneButton}
        </div>

        <div class="space-y-2">
          <div class="text-xs font-semibold text-amber-800">Հարց քեզ (Tú)</div>
          ${renderSpanishClickable({
            key: qTransKey,
            esText: item.qEs,
            hyText: item.qHy,
            textClass: 'text-[18px] font-semibold leading-snug',
            audioText: item.qEs,
            audioLabel: 'Լսել հարցը',
            hiddenInBlind: true
          })}
        </div>

        <div class="flex flex-wrap items-center gap-3 pt-1">
          <button
            type="button"
            data-action="toggle-answer"
            data-key="${escapeHtml(qaKey)}"
            aria-expanded="${answerOpen ? 'true' : 'false'}"
            class="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg border transition-colors whitespace-nowrap shrink-0 ${
              answerOpen
                ? 'bg-amber-200 text-stone-900 border-amber-400 hover:bg-amber-300'
                : 'bg-orange-600 text-white border-orange-600 hover:bg-orange-700'
            }"
          >
            ${answerOpen ? ICONS.eyeOff : ICONS.eye}
            <span>${answerOpen ? 'Թաքցնել պատասխանը' : 'Պատասխան (Respuesta · yo)'}</span>
          </button>
        </div>

        <div
          data-answer-panel="${escapeHtml(qaKey)}"
          class="${answerOpen ? 'block' : 'hidden'} rounded-xl bg-amber-50/90 border border-amber-300 p-4 space-y-2"
        >
          <div class="text-xs font-semibold text-orange-900">Պատասխանի օրինակ (Respuesta — 1-ին դեմք · yo)</div>
          ${renderSpanishClickable({
            key: aTransKey,
            esText: item.aEs,
            hyText: item.aHy,
            textClass: 'text-[16px] font-medium leading-relaxed',
            audioText: item.aEs,
            audioLabel: 'Լսել պատասխանը'
          })}
        </div>
      </article>
    `;
  }

  // Reto personal / unexpected questions
  const qTransKey = `${item.uid}-q`;
  return `
    <article
      id="card-${escapeHtml(item.uid)}"
      class="bg-white rounded-xl border border-amber-200 p-6 space-y-4 shadow-[0_1px_3px_rgba(217,119,6,0.08)]"
    >
      <div class="flex flex-wrap items-center justify-between gap-4">
        <div class="flex flex-wrap items-center gap-2 text-xs text-stone-500">
          <span class="font-mono-num font-bold text-orange-700">${escapeHtml(item.titleEs)}</span>
          <span aria-hidden="true">·</span>
          <span>Անձնական բանավոր պատասխան (առանց պատրաստի կաղապարի)</span>
          ${tensesLabel ? `<span aria-hidden="true">·</span><span class="text-amber-800 font-medium">${escapeHtml(tensesLabel)}</span>` : ''}
        </div>
        ${doneButton}
      </div>

      ${renderSpanishClickable({
        key: qTransKey,
        esText: item.qEs,
        hyText: item.qHy,
        textClass: 'text-[18px] font-semibold leading-snug',
        audioText: item.qEs,
        audioLabel: 'Լսել հարցը',
        hiddenInBlind: true
      })}
    </article>
  `;
}

function renderMethodologyView() {
  return `
    <section class="max-w-4xl mx-auto space-y-8 py-4">
      <div class="bg-gradient-to-br from-amber-100 via-amber-50 to-orange-100 rounded-xl border border-amber-200 p-8 space-y-4">
        <div class="text-xs font-semibold text-orange-800">Մեթոդական ուղեցույց · 4 անցյալ ժամանակներ</div>
        <h1 class="font-display text-3xl font-bold text-stone-950 text-balance">
          Ինչպես արդյունավետ պարապել «Escucha y responde» ծրագրով
        </h1>
        <p class="text-stone-700 text-base leading-relaxed">
          Այս հավելվածը միավորում է բոլոր 100 իրավիճակները (մակարդակ A1–B1), 50 անձնական հարցերը («Tú → Yo») և 20 անսպասելի մարտահրավերային հարցերը՝ լիարժեք հայերեն թարգմանություններով և իսպաներեն արտասանությամբ։
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-white rounded-xl border border-amber-200 p-6 space-y-3">
          <div class="font-mono-num text-xs font-bold text-orange-700">01 · Առաջին մոտեցում</div>
          <h2 class="text-lg font-semibold text-stone-900">Լսել մեկ անգամ՝ առանց կրկնելու</h2>
          <p class="text-sm text-stone-600 leading-relaxed">
            Միացրեք «Առանց տեքստի» ռեժիմը։ Սեղմեք «Լսել իրավիճակը» կոճակը մեկ անգամ, ապա փորձեք բանավոր պատասխանել հարցերին ամբողջական նախադասություններով։ Ստուգեք ձեզ «Պատասխան» կոճակով։
          </p>
        </div>

        <div class="bg-white rounded-xl border border-amber-200 p-6 space-y-3">
          <div class="font-mono-num text-xs font-bold text-orange-700">02 · Երկրորդ մոտեցում</div>
          <h2 class="text-lg font-semibold text-stone-900">Հարցերի հերթականության փոփոխություն</h2>
          <p class="text-sm text-stone-600 leading-relaxed">
            Երկրորդ շրջանում հարցերը տվեք խառը հերթականությամբ։ Եթե որևէ իսպաներեն բառ կամ նախադասություն անհասկանալի է, սեղմեք հենց իսպաներեն տեքստի վրա՝ հայերեն թարգմանությունը բացելու համար։
          </p>
        </div>

        <div class="bg-white rounded-xl border border-amber-200 p-6 space-y-3">
          <div class="font-mono-num text-xs font-bold text-orange-700">03 · Երրորդ մոտեցում</div>
          <h2 class="text-lg font-semibold text-stone-900">Ինքնուրույն վերապատմում</h2>
          <p class="text-sm text-stone-600 leading-relaxed">
            Խնդրեք աշակերտին ինքնուրույն վերապատմել իրավիճակը՝ ճիշտ համադրելով չորս անցյալ ժամանակները։ Օգտագործեք «Մեկ քարտ» ռեժիմը մեկ քարտի վրա կենտրոնանալու համար։
          </p>
        </div>

        <div class="bg-white rounded-xl border border-amber-200 p-6 space-y-3">
          <div class="font-mono-num text-xs font-bold text-orange-700">04 · «¿Qué hiciste?» պրակտիկա</div>
          <h2 class="text-lg font-semibold text-stone-900">Առաջին դեմքով արագ արձագանք</h2>
          <p class="text-sm text-stone-600 leading-relaxed">
            Հարցից առաջ մի՛ նշեք քերականական ժամանակը։ Աշակերտը պետք է համատեքստից («ayer», «esta mañana», «cuando eras pequeño», «antes de...») հասկանա ժամանակը և պատասխանի անմիջապես։
          </p>
        </div>
      </div>

      <div class="bg-white rounded-xl border border-amber-200 p-6 space-y-4">
        <h2 class="text-lg font-semibold text-stone-900">Չորս անցյալ ժամանակների համառոտ ուղեցույց</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div class="p-4 rounded-lg bg-amber-50/70 border border-amber-200 space-y-1">
            <div class="font-semibold text-orange-900">Pretérito Indefinido</div>
            <div class="text-stone-700">Ավարտված գործողություն անցյալի որոշակի պահին (ayer, el sábado pasado, anoche)։ Օրինակ՝ <span class="italic text-stone-900">Carlos fue al parque.</span></div>
          </div>
          <div class="p-4 rounded-lg bg-orange-50/70 border border-orange-200 space-y-1">
            <div class="font-semibold text-orange-900">Pretérito Perfecto</div>
            <div class="text-stone-700">Անցյալ գործողություն՝ կապված ներկայի կամ չավարտված ժամանակահատվածի հետ (hoy, esta mañana, esta semana)։ Օրինակ՝ <span class="italic text-stone-900">Lucía ha desayunado.</span></div>
          </div>
          <div class="p-4 rounded-lg bg-amber-50/70 border border-amber-200 space-y-1">
            <div class="font-semibold text-orange-900">Pretérito Imperfecto</div>
            <div class="text-stone-700">Կրկնվող գործողություններ, սովորություններ մանկությունում և իրավիճակի նկարագրություն (cuando era pequeño, antes, mientras)։ Օրինակ՝ <span class="italic text-stone-900">Vivía en Sevilla.</span></div>
          </div>
          <div class="p-4 rounded-lg bg-orange-50/70 border border-orange-200 space-y-1">
            <div class="font-semibold text-orange-900">Pretérito Pluscuamperfecto</div>
            <div class="text-stone-700">Գործողություն, որը տեղի է ունեցել անցյալի մեկ այլ գործողությունից առաջ (ya había..., nunca había...)։ Օրինակ՝ <span class="italic text-stone-900">El autobús ya se había marchado.</span></div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderWorkspace() {
  const meta = getCurrentModuleMeta();
  const filtered = getFilteredItems();
  const allInModule = getAllItemsForModule(state.module);
  const completedInModule = allInModule.filter((i) => state.completedIds.has(i.uid)).length;

  // Clamp focusIndex safely
  if (state.focusIndex >= filtered.length) {
    state.focusIndex = Math.max(0, filtered.length - 1);
  }

  const tipBanner =
    meta.tipHy || meta.goalHy
      ? `
        <div class="bg-gradient-to-r from-amber-50 via-amber-50 to-orange-50 rounded-xl border border-amber-200 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div class="space-y-1">
            <div class="text-xs font-bold text-orange-800">${escapeHtml(meta.tipTitleHy || meta.goalTitleHy)}</div>
            <p class="text-sm text-stone-700 leading-relaxed">${escapeHtml(meta.tipHy || meta.goalHy)}</p>
          </div>
        </div>
      `
      : '';

  const tenses = ['all', 'Indefinido', 'Perfecto', 'Imperfecto', 'Pluscuamperfecto'];

  return `
    <section class="space-y-6">
      <!-- Balanced Warm Amber-Orange Hero Header -->
      <div class="bg-gradient-to-br from-amber-100/90 via-amber-50 to-orange-100/90 rounded-xl border border-amber-200 p-6 sm:p-8 space-y-5 shadow-[0_2px_8px_rgba(234,88,12,0.05)]">
        <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div class="space-y-2 max-w-3xl">
            <div class="flex flex-wrap items-center gap-2 text-xs font-semibold text-orange-800">
              <span>Իսպաներենի լսողական պրակտիկա</span>
              <span aria-hidden="true">·</span>
              <span>Մակարդակ ${escapeHtml(meta.level)}</span>
              <span aria-hidden="true">·</span>
              <span>${escapeHtml(meta.titleEs)}</span>
            </div>
            <h1 class="font-display text-2xl sm:text-3xl font-bold text-stone-950 tracking-tight text-balance">
              ${escapeHtml(meta.titleHy)}
            </h1>
            <p class="text-sm sm:text-base text-stone-700 leading-relaxed">
              ${escapeHtml(meta.subtitleHy)}
            </p>
          </div>

          <div class="flex items-center gap-6 shrink-0 border-t lg:border-t-0 pt-4 lg:pt-0 border-amber-200">
            <div>
              <div class="text-xs font-medium text-stone-600">Ցուցադրված</div>
              <div class="font-mono-num text-xl font-bold text-stone-950">${filtered.length} <span class="text-sm font-normal text-stone-500">/ ${allInModule.length}</span></div>
            </div>
            <div class="h-8 w-px bg-amber-200"></div>
            <div>
              <div class="text-xs font-medium text-stone-600">Կատարված</div>
              <div class="font-mono-num text-xl font-bold text-orange-700">${completedInModule} <span class="text-sm font-normal text-stone-500">/ ${allInModule.length}</span></div>
            </div>
          </div>
        </div>

        <!-- Instruction hint bar -->
        <div class="pt-4 border-t border-amber-200 flex flex-wrap items-center justify-between gap-3 text-xs text-stone-700">
          <div class="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>1. Սեղմեք <strong>իսպաներեն տեքստի վրա</strong>՝ հայերեն թարգմանությունը բացելու համար</span>
            <span aria-hidden="true" class="hidden sm:inline text-amber-400">·</span>
            <span>2. Սեղմեք <strong>«Պատասխան»</strong> կոճակը՝ ճիշտ պատասխանը ստուգելու համար</span>
          </div>
        </div>
      </div>

      <!-- Controls Toolbar -->
      <div class="bg-white rounded-xl border border-amber-200 p-4 space-y-4">
        <!-- Row 1: Part Filter Tabs -->
        <div class="flex flex-wrap items-center gap-1.5" role="tablist" aria-label="Բաժիններ">
          <button
            type="button"
            data-action="set-part"
            data-part="all"
            class="px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
              state.partFilter === 'all'
                ? 'bg-orange-600 text-white'
                : 'bg-amber-50 text-stone-800 hover:bg-amber-100 hover:text-stone-950'
            }"
          >
            Բոլորը (${allInModule.length})
          </button>
          ${meta.parts
            .map(
              (p) => `
              <button
                type="button"
                data-action="set-part"
                data-part="${p.id}"
                class="px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  state.partFilter === p.id
                    ? 'bg-orange-600 text-white'
                    : 'bg-amber-50 text-stone-800 hover:bg-amber-100 hover:text-stone-950'
                }"
              >
                ${escapeHtml(p.labelHy)}
              </button>
            `
            )
            .join('')}
        </div>

        <!-- Row 2: Search, Tense, View Mode, Audio Speed, Study Toggles -->
        <div class="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-amber-200/80">
          <div class="flex flex-wrap items-center gap-2.5 flex-1 min-w-[260px]">
            <label class="relative flex-1 min-w-[200px] max-w-xs">
              <span class="sr-only">Որոնել</span>
              <span class="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                ${ICONS.search}
              </span>
              <input
                type="search"
                id="search-input"
                value="${escapeHtml(state.searchQuery)}"
                placeholder="Որոնել համարով կամ բառով..."
                class="w-full pl-9 pr-3 py-2 text-sm bg-amber-50/50 border border-amber-200 rounded-lg text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-orange-600 focus:bg-white"
              />
            </label>

            <label class="flex items-center gap-1.5 text-xs text-stone-700">
              <span class="whitespace-nowrap shrink-0">Ժամանակ՝</span>
              <select
                id="tense-select"
                class="px-2.5 py-2 text-xs font-medium bg-amber-50/50 border border-amber-200 rounded-lg text-stone-900 focus:outline-none focus:border-orange-600"
              >
                ${tenses
                  .map(
                    (t) =>
                      `<option value="${t}" ${state.tenseFilter === t ? 'selected' : ''}>${
                        t === 'all' ? 'Բոլորը' : t
                      }</option>`
                  )
                  .join('')}
              </select>
            </label>

            <label class="flex items-center gap-1.5 text-xs text-stone-700">
              <span class="whitespace-nowrap shrink-0">Արագություն՝</span>
              <select
                id="speed-select"
                class="px-2.5 py-2 text-xs font-medium bg-amber-50/50 border border-amber-200 rounded-lg text-stone-900 focus:outline-none focus:border-orange-600"
              >
                <option value="0.75" ${state.speed === 0.75 ? 'selected' : ''}>0.75x (Դանդաղ)</option>
                <option value="0.9" ${state.speed === 0.9 ? 'selected' : ''}>0.90x (Միջին)</option>
                <option value="1" ${state.speed === 1 ? 'selected' : ''}>1.00x (Նորմալ)</option>
              </select>
            </label>
          </div>

          <div class="flex flex-wrap items-center gap-2">
            <button
              type="button"
              data-action="toggle-blind-mode"
              aria-pressed="${state.blindMode ? 'true' : 'false'}"
              class="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg border transition-colors whitespace-nowrap shrink-0 ${
                state.blindMode
                  ? 'bg-orange-600 text-white border-orange-600'
                  : 'bg-amber-50/70 text-stone-800 border-amber-200 hover:bg-amber-100'
              }"
            >
              ${state.blindMode ? ICONS.eyeOff : ICONS.eye}
              <span>Առանց տեքստի</span>
            </button>

            <button
              type="button"
              data-action="toggle-all-translations"
              aria-pressed="${state.showAllTranslations ? 'true' : 'false'}"
              class="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg border transition-colors whitespace-nowrap shrink-0 ${
                state.showAllTranslations
                  ? 'bg-orange-600 text-white border-orange-600'
                  : 'bg-amber-50/70 text-stone-800 border-amber-200 hover:bg-amber-100'
              }"
            >
              ${ICONS.translate}
              <span>${state.showAllTranslations ? 'Թաքցնել թարգմանությունները' : 'Բոլոր թարգմանությունները'}</span>
            </button>

            <div class="inline-flex items-center p-0.5 bg-amber-100/70 rounded-lg border border-amber-200">
              <button
                type="button"
                data-action="set-view"
                data-view="list"
                class="px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 ${
                  state.viewMode === 'list' ? 'bg-orange-600 text-white shadow-sm' : 'text-stone-700 hover:text-stone-950'
                }"
              >
                Ցանկ
              </button>
              <button
                type="button"
                data-action="set-view"
                data-view="focus"
                class="px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 ${
                  state.viewMode === 'focus' ? 'bg-orange-600 text-white shadow-sm' : 'text-stone-700 hover:text-stone-950'
                }"
              >
                Մեկ քարտ
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Cards Stage -->
      ${
        filtered.length === 0
          ? `
            <div class="bg-white rounded-xl border border-amber-200 p-12 text-center space-y-3">
              <div class="text-base font-semibold text-stone-900">Համապատասխան վարժություն չի գտնվել</div>
              <p class="text-sm text-stone-500">Փորձեք փոխել որոնման բառը կամ զտիչները։</p>
              <button
                type="button"
                data-action="reset-filters"
                class="inline-flex items-center px-4 py-2 text-xs font-semibold text-white bg-orange-600 rounded-lg hover:bg-orange-700 transition-colors"
              >
                Մաքրել զտիչները
              </button>
            </div>
          `
          : state.viewMode === 'focus'
          ? `
            <div class="max-w-3xl mx-auto space-y-4">
              <div class="flex items-center justify-between gap-4 bg-white rounded-xl border border-amber-200 px-4 py-3">
                <button
                  type="button"
                  data-action="focus-prev"
                  ${state.focusIndex <= 0 ? 'disabled' : ''}
                  class="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg border border-amber-200 bg-amber-50 text-stone-800 hover:bg-amber-100 disabled:opacity-40 disabled:pointer-events-none whitespace-nowrap shrink-0"
                >
                  ${ICONS.chevronLeft}
                  <span>Նախորդը</span>
                </button>
                <div class="font-mono-num text-xs font-bold text-orange-800">
                  Քարտ ${state.focusIndex + 1} / ${filtered.length}
                </div>
                <button
                  type="button"
                  data-action="focus-next"
                  ${state.focusIndex >= filtered.length - 1 ? 'disabled' : ''}
                  class="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg border border-amber-200 bg-amber-50 text-stone-800 hover:bg-amber-100 disabled:opacity-40 disabled:pointer-events-none whitespace-nowrap shrink-0"
                >
                  <span>Հաջորդը</span>
                  ${ICONS.chevronRight}
                </button>
              </div>

              ${renderCard(filtered[state.focusIndex])}
            </div>
          `
          : `
            <div class="space-y-4">
              ${filtered.map((item) => renderCard(item)).join('')}
            </div>
          `
      }

      ${tipBanner}
    </section>
  `;
}

function renderApp() {
  const root = document.getElementById('app');
  if (!root) return;

  const navItems = [
    { id: 'partA', label: 'Իրավիճակներ 1–50' },
    { id: 'partB', label: 'Իրավիճակներ 51–100' },
    { id: 'tu', label: '¿Qué hiciste? · 1–50' },
    { id: 'method', label: 'Մեթոդիկա' }
  ];

  root.innerHTML = `
    <div class="min-h-screen flex flex-col bg-amber-50/60">
      <!-- Top Bar (3-zone contract) -->
      <header class="bg-white border-b border-amber-200">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-4 sm:gap-8">
          <a
            href="#top"
            data-action="nav-module"
            data-module="partA"
            class="font-display text-xl font-bold tracking-tight text-stone-950 whitespace-nowrap shrink-0"
          >
            Escucha y Responde
          </a>

          <nav class="flex items-center gap-5 sm:gap-7 overflow-x-auto" aria-label="Հիմնական բաժիններ">
            ${navItems
              .map((nav) => {
                const active = state.module === nav.id;
                return `
                  <button
                    type="button"
                    data-action="nav-module"
                    data-module="${nav.id}"
                    class="text-sm font-medium py-1 border-b-2 transition-colors whitespace-nowrap shrink-0 ${
                      active
                        ? 'border-orange-600 text-orange-700 font-bold'
                        : 'border-transparent text-stone-700 hover:text-stone-950 hover:border-amber-400'
                    }"
                  >
                    ${escapeHtml(nav.label)}
                  </button>
                `;
              })
              .join('')}
          </nav>

          <div class="shrink-0">
            <button
              type="button"
              data-action="random-practice"
              class="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-orange-600 rounded-lg hover:bg-orange-700 transition-colors whitespace-nowrap shrink-0 shadow-sm"
            >
              ${ICONS.shuffle}
              <span>Պատահական վարժություն</span>
            </button>
          </div>
        </div>
      </header>

      <main class="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8">
        ${state.module === 'method' ? renderMethodologyView() : renderWorkspace()}
      </main>

      <footer class="border-t border-amber-200 bg-amber-50 mt-12">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 py-5 flex flex-wrap items-center justify-between gap-4 text-xs text-stone-600">
          <span>Escucha y Responde · Իսպաներենի անցյալ ժամանակների պրակտիկա (հայերեն–իսպաներեն)</span>
          <span>100 իրավիճակ · 50 «Tú» հարց · 20 լրացուցիչ հարց</span>
        </div>
      </footer>
    </div>
  `;

  // Wire search & select listeners cleanly after DOM render
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const target = e.target;
      state.searchQuery = target.value;
      state.focusIndex = 0;
      const cursorPos = target.selectionStart;
      renderApp();
      const nextInput = document.getElementById('search-input');
      if (nextInput) {
        nextInput.focus();
        if (typeof cursorPos === 'number') {
          nextInput.setSelectionRange(cursorPos, cursorPos);
        }
      }
    });
  }

  const tenseSelect = document.getElementById('tense-select');
  if (tenseSelect) {
    tenseSelect.addEventListener('change', (e) => {
      state.tenseFilter = e.target.value;
      state.focusIndex = 0;
      renderApp();
    });
  }

  const speedSelect = document.getElementById('speed-select');
  if (speedSelect) {
    speedSelect.addEventListener('change', (e) => {
      state.speed = parseFloat(e.target.value) || 0.9;
      persistProgress();
    });
  }
}

// Fast in-place DOM updates for translations, answers, and done states (zero scroll jump)
function toggleTranslationInPlace(key) {
  if (state.openTranslations.has(key)) {
    state.openTranslations.delete(key);
  } else {
    state.openTranslations.add(key);
  }
  const open = isTranslationOpen(key);
  const panel = document.querySelector(`[data-translation-panel="${CSS.escape(key)}"]`);
  const trigger = document.querySelector(`[data-action="toggle-translation"][data-key="${CSS.escape(key)}"]`);
  if (panel) {
    panel.classList.toggle('hidden', !open);
    panel.classList.toggle('block', open);
  }
  if (trigger) {
    trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
    const hintSpan = trigger.querySelector('span:last-child span:last-child');
    if (hintSpan) {
      hintSpan.textContent = open
        ? 'Թաքցնել հայերեն թարգմանությունը'
        : 'Սեղմիր իսպաներենին՝ հայերեն թարգմանության համար';
    }
    const hintWrap = trigger.querySelector('span:last-child');
    if (hintWrap) {
      hintWrap.classList.toggle('text-orange-700', open);
      hintWrap.classList.toggle('text-amber-700', !open);
    }
  }
}

function toggleAnswerInPlace(key) {
  if (state.openAnswers.has(key)) {
    state.openAnswers.delete(key);
  } else {
    state.openAnswers.add(key);
  }
  const open = state.openAnswers.has(key);
  const panel = document.querySelector(`[data-answer-panel="${CSS.escape(key)}"]`);
  const btn = document.querySelector(`[data-action="toggle-answer"][data-key="${CSS.escape(key)}"]`);
  if (panel) {
    panel.classList.toggle('hidden', !open);
    panel.classList.toggle('block', open);
  }
  if (btn) {
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open) {
      btn.classList.remove('bg-orange-600', 'text-white', 'border-orange-600', 'hover:bg-orange-700');
      btn.classList.add('bg-amber-200', 'text-stone-900', 'border-amber-400', 'hover:bg-amber-300');
      btn.innerHTML = `${ICONS.eyeOff}<span>Թաքցնել պատասխանը</span>`;
    } else {
      btn.classList.remove('bg-amber-200', 'text-stone-900', 'border-amber-400', 'hover:bg-amber-300');
      btn.classList.add('bg-orange-600', 'text-white', 'border-orange-600', 'hover:bg-orange-700');
      const isTu = state.module === 'tu';
      btn.innerHTML = `${ICONS.eye}<span>${isTu ? 'Պատասխան (Respuesta · yo)' : 'Պատասխան (Respuesta)'}</span>`;
    }
  }
}

function toggleDoneInPlace(uid) {
  if (state.completedIds.has(uid)) {
    state.completedIds.delete(uid);
  } else {
    state.completedIds.add(uid);
  }
  persistProgress();
  renderApp();
}

// Global event delegation
document.addEventListener('click', (event) => {
  const actionEl = event.target.closest('[data-action]');
  if (!actionEl) return;

  const action = actionEl.getAttribute('data-action');

  if (action === 'nav-module') {
    event.preventDefault();
    const mod = actionEl.getAttribute('data-module');
    if (mod && mod !== state.module) {
      stopSpeech();
      state.module = mod;
      state.partFilter = 'all';
      state.tenseFilter = 'all';
      state.searchQuery = '';
      state.focusIndex = 0;
      renderApp();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return;
  }

  if (action === 'set-part') {
    const rawPart = actionEl.getAttribute('data-part');
    state.partFilter = rawPart === 'all' ? 'all' : Number(rawPart);
    state.focusIndex = 0;
    renderApp();
    return;
  }

  if (action === 'set-view') {
    const view = actionEl.getAttribute('data-view');
    if (view === 'list' || view === 'focus') {
      state.viewMode = view;
      renderApp();
    }
    return;
  }

  if (action === 'toggle-blind-mode') {
    state.blindMode = !state.blindMode;
    renderApp();
    return;
  }

  if (action === 'reveal-blind') {
    const key = actionEl.getAttribute('data-key');
    if (key) {
      state.revealedBlind.add(key);
      renderApp();
    }
    return;
  }

  if (action === 'toggle-all-translations') {
    state.showAllTranslations = !state.showAllTranslations;
    renderApp();
    return;
  }

  if (action === 'reset-filters') {
    state.partFilter = 'all';
    state.tenseFilter = 'all';
    state.searchQuery = '';
    state.focusIndex = 0;
    renderApp();
    return;
  }

  if (action === 'focus-prev') {
    if (state.focusIndex > 0) {
      stopSpeech();
      state.focusIndex -= 1;
      renderApp();
    }
    return;
  }

  if (action === 'focus-next') {
    const filtered = getFilteredItems();
    if (state.focusIndex < filtered.length - 1) {
      stopSpeech();
      state.focusIndex += 1;
      renderApp();
    }
    return;
  }

  if (action === 'random-practice') {
    stopSpeech();
    if (state.module === 'method') {
      state.module = 'partA';
    }
    state.partFilter = 'all';
    state.tenseFilter = 'all';
    state.searchQuery = '';
    const items = getAllItemsForModule(state.module);
    if (items.length > 0) {
      state.viewMode = 'focus';
      state.focusIndex = Math.floor(Math.random() * items.length);
      renderApp();
    }
    return;
  }

  if (action === 'toggle-translation') {
    const key = actionEl.getAttribute('data-key');
    if (key) {
      if (state.showAllTranslations) {
        state.showAllTranslations = false;
        const allItems = getAllItemsForModule(state.module);
        // Keep everything open except the one just clicked
        allItems.forEach((it) => {
          if (it.kind === 'situation') {
            state.openTranslations.add(`${it.uid}-sit`);
            it.qa.forEach((_, idx) => {
              state.openTranslations.add(`${it.uid}-qa-${idx}-q`);
              state.openTranslations.add(`${it.uid}-qa-${idx}-a`);
            });
          } else if (it.kind === 'tu') {
            state.openTranslations.add(`${it.uid}-qa-q`);
            state.openTranslations.add(`${it.uid}-qa-a`);
          } else {
            state.openTranslations.add(`${it.uid}-q`);
          }
        });
        state.openTranslations.delete(key);
        renderApp();
      } else {
        toggleTranslationInPlace(key);
      }
    }
    return;
  }

  if (action === 'toggle-answer') {
    const key = actionEl.getAttribute('data-key');
    if (key) toggleAnswerInPlace(key);
    return;
  }

  if (action === 'toggle-done') {
    const uid = actionEl.getAttribute('data-uid');
    if (uid) toggleDoneInPlace(uid);
    return;
  }

  if (action === 'speak') {
    const key = actionEl.getAttribute('data-key');
    const text = actionEl.getAttribute('data-text');
    if (key && text) {
      speakSpanish(text, key);
    }
  }
});

// Initial mount
renderApp();
