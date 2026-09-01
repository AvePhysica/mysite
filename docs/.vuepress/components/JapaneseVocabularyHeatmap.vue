<script setup>
import { computed } from "vue";
import { japaneseVocabularyProgress } from "../data/japaneseVocabulary.js";

const DAY_IN_MS = 24 * 60 * 60 * 1000;
const WEEK_IN_MS = 7 * DAY_IN_MS;
const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const year = Number(japaneseVocabularyProgress.year);
const daily = japaneseVocabularyProgress.daily ?? {};

function dateKey(date) {
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");
  return `${date.getUTCFullYear()}-${month}-${day}`;
}

function levelFor(count) {
  if (count <= 0) return 0;
  if (count <= 10) return 1;
  if (count <= 30) return 2;
  if (count <= 60) return 3;
  return 4;
}

function formatDay(date) {
  return `${date.getUTCFullYear()}年${date.getUTCMonth() + 1}月${date.getUTCDate()}日`;
}

const yearStart = new Date(Date.UTC(year, 0, 1));
const yearEnd = new Date(Date.UTC(year, 11, 31));
const gridStart = new Date(yearStart.getTime() - yearStart.getUTCDay() * DAY_IN_MS);
const gridEnd = new Date(
  yearEnd.getTime() + (6 - yearEnd.getUTCDay()) * DAY_IN_MS,
);

const calendarDays = computed(() => {
  const days = [];

  for (
    let timestamp = gridStart.getTime();
    timestamp <= gridEnd.getTime();
    timestamp += DAY_IN_MS
  ) {
    const date = new Date(timestamp);
    const key = dateKey(date);
    const inYear = date.getUTCFullYear() === year;
    const count = inYear ? Math.max(0, Number(daily[key]) || 0) : 0;

    days.push({
      key,
      count,
      inYear,
      level: inYear ? levelFor(count) : -1,
      label: inYear ? `${formatDay(date)}：背诵单词 ${count} 个` : "",
    });
  }

  return days;
});

const weekCount = computed(() => Math.ceil(calendarDays.value.length / 7));
const gridStyle = computed(() => ({
  gridTemplateColumns: `repeat(${weekCount.value}, var(--heatmap-cell-size))`,
}));

const monthLabels = computed(() =>
  monthNames.map((label, month) => {
    const firstDay = Date.UTC(year, month, 1);
    const week = Math.floor((firstDay - gridStart.getTime()) / WEEK_IN_MS) + 1;
    return { label, week };
  }),
);

const summary = computed(() => {
  const counts = [];

  for (
    let timestamp = yearStart.getTime();
    timestamp <= yearEnd.getTime();
    timestamp += DAY_IN_MS
  ) {
    const count = Math.max(0, Number(daily[dateKey(new Date(timestamp))]) || 0);
    counts.push(count);
  }

  let longestStreak = 0;
  let currentStreak = 0;

  for (const count of counts) {
    currentStreak = count > 0 ? currentStreak + 1 : 0;
    longestStreak = Math.max(longestStreak, currentStreak);
  }

  return {
    total: counts.reduce((sum, count) => sum + count, 0),
    activeDays: counts.filter((count) => count > 0).length,
    longestStreak,
  };
});
</script>

<template>
  <section class="vocabulary-heatmap" aria-labelledby="vocabulary-heatmap-title">
    <header class="heatmap-heading">
      <div>
        <p>JAPANESE STUDY LOG</p>
        <h2 id="vocabulary-heatmap-title">日语单词进度</h2>
      </div>
      <strong>{{ year }}</strong>
    </header>

    <div class="heatmap-summary" aria-label="年度背词统计">
      <div>
        <strong>{{ summary.total }}</strong>
        <span>全年累计</span>
      </div>
      <div>
        <strong>{{ summary.activeDays }}</strong>
        <span>学习天数</span>
      </div>
      <div>
        <strong>{{ summary.longestStreak }}</strong>
        <span>最长连续</span>
      </div>
    </div>

    <div class="heatmap-card">
      <div class="weekday-labels" aria-hidden="true">
        <span>Mon</span>
        <span>Wed</span>
        <span>Fri</span>
      </div>

      <div class="heatmap-scroll" tabindex="0" aria-label="全年日语单词背诵热力图">
        <div class="heatmap-content">
          <div class="month-labels" :style="gridStyle" aria-hidden="true">
            <span
              v-for="month in monthLabels"
              :key="month.label"
              :style="{ gridColumn: month.week }"
            >
              {{ month.label }}
            </span>
          </div>

          <div class="heatmap-grid" :style="gridStyle" role="grid">
            <span
              v-for="day in calendarDays"
              :key="day.key"
              class="heatmap-cell"
              :class="{ 'is-outside-year': !day.inYear }"
              :data-level="day.level"
              :title="day.label"
              :aria-label="day.label || undefined"
              :aria-hidden="day.inYear ? undefined : 'true'"
              role="gridcell"
            />
          </div>
        </div>
      </div>

      <div class="heatmap-legend" aria-label="背词数量颜色图例">
        <span>少</span>
        <i v-for="level in [0, 1, 2, 3, 4]" :key="level" :data-level="level" />
        <span>多</span>
      </div>
    </div>

  </section>
</template>

<style scoped>
.vocabulary-heatmap {
  --heatmap-cell-size: 13px;
  --heatmap-cell-gap: 4px;
  --heatmap-empty: #22374d;
  --heatmap-level-1: #22577d;
  --heatmap-level-2: #2b78aa;
  --heatmap-level-3: #36a0d5;
  --heatmap-level-4: #72c9ee;

  padding-top: clamp(44px, 6vw, 72px);
  margin-top: clamp(30px, 4vw, 52px);
  color: #eef2f1;
  border-top: 1px solid rgb(255 255 255 / 16%);
}

.heatmap-heading {
  display: flex;
  gap: 24px;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 24px;
}

.heatmap-heading p,
.heatmap-heading h2,
.heatmap-note {
  margin: 0;
}

.heatmap-heading p {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  color: #91d2e2;
}

.heatmap-heading h2 {
  margin-top: 7px;
  font-family: Georgia, "Times New Roman", "Noto Serif SC", serif;
  font-size: clamp(1.7rem, 3vw, 2.35rem);
  font-weight: 500;
  color: #f4f2eb;
}

.heatmap-heading > strong {
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1.15rem;
  font-style: italic;
  font-weight: 500;
  color: rgb(220 239 245 / 65%);
}

.heatmap-summary {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-bottom: 18px;
  border-top: 1px solid rgb(255 255 255 / 13%);
  border-bottom: 1px solid rgb(255 255 255 / 13%);
}

.heatmap-summary div {
  display: flex;
  gap: 10px;
  align-items: baseline;
  padding: 14px 18px;
}

.heatmap-summary div + div {
  border-left: 1px solid rgb(255 255 255 / 10%);
}

.heatmap-summary strong {
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1.35rem;
  font-weight: 500;
  color: #9edcf1;
}

.heatmap-summary span,
.heatmap-note,
.heatmap-legend {
  font-size: 0.76rem;
  color: rgb(231 238 240 / 58%);
}

.heatmap-card {
  position: relative;
  padding: 22px 20px 42px 48px;
  background: linear-gradient(120deg, rgb(16 27 43 / 66%), rgb(26 43 61 / 34%));
  border: 1px solid rgb(127 190 220 / 16%);
  box-shadow: inset 0 1px 0 rgb(255 255 255 / 6%), 0 22px 55px rgb(0 0 0 / 14%);
  backdrop-filter: blur(12px);
}

.weekday-labels {
  position: absolute;
  top: 49px;
  left: 18px;
  display: grid;
  grid-template-rows: repeat(7, var(--heatmap-cell-size));
  gap: var(--heatmap-cell-gap);
  font-size: 0.66rem;
  color: rgb(225 237 241 / 48%);
}

.weekday-labels span:nth-child(1) {
  grid-row: 2;
}

.weekday-labels span:nth-child(2) {
  grid-row: 4;
}

.weekday-labels span:nth-child(3) {
  grid-row: 6;
}

.heatmap-scroll {
  max-width: 100%;
  overflow-x: auto;
  scrollbar-color: rgb(83 155 192 / 55%) transparent;
  scrollbar-width: thin;
}

.heatmap-content {
  width: max-content;
  min-width: 100%;
}

.month-labels,
.heatmap-grid {
  display: grid;
  grid-auto-flow: column;
  gap: var(--heatmap-cell-gap);
}

.month-labels {
  height: 18px;
  margin-bottom: 9px;
  font-size: 0.66rem;
  color: rgb(225 237 241 / 52%);
}

.month-labels span {
  white-space: nowrap;
}

.heatmap-grid {
  grid-template-rows: repeat(7, var(--heatmap-cell-size));
}

.heatmap-cell,
.heatmap-legend i {
  width: var(--heatmap-cell-size);
  height: var(--heatmap-cell-size);
  background: var(--heatmap-empty);
  border: 1px solid rgb(138 186 210 / 9%);
  border-radius: 3px;
  transition: border-color 140ms ease, filter 140ms ease, transform 140ms ease;
}

.heatmap-cell[data-level="1"],
.heatmap-legend i[data-level="1"] {
  background: var(--heatmap-level-1);
}

.heatmap-cell[data-level="2"],
.heatmap-legend i[data-level="2"] {
  background: var(--heatmap-level-2);
}

.heatmap-cell[data-level="3"],
.heatmap-legend i[data-level="3"] {
  background: var(--heatmap-level-3);
}

.heatmap-cell[data-level="4"],
.heatmap-legend i[data-level="4"] {
  background: var(--heatmap-level-4);
}

.heatmap-cell:not(.is-outside-year):hover {
  z-index: 1;
  border-color: rgb(202 237 250 / 72%);
  filter: brightness(1.18);
  transform: scale(1.3);
}

.heatmap-cell.is-outside-year {
  visibility: hidden;
}

.heatmap-legend {
  position: absolute;
  right: 20px;
  bottom: 14px;
  display: flex;
  gap: 5px;
  align-items: center;
}

.heatmap-legend i {
  display: block;
}

.heatmap-note {
  margin-top: 12px;
  text-align: right;
}

:global(html[data-theme="light"] .vocabulary-heatmap) {
  --heatmap-empty: #edf4f7;
  --heatmap-level-1: #c9e8f8;
  --heatmap-level-2: #84cbee;
  --heatmap-level-3: #3aa4dc;
  --heatmap-level-4: #1d83c1;

  color: #24333a;
  border-top-color: rgb(57 86 98 / 18%);
}

:global(html[data-theme="light"] .heatmap-heading h2) {
  color: #203139;
}

:global(html[data-theme="light"] .heatmap-heading p),
:global(html[data-theme="light"] .heatmap-summary strong) {
  color: #287f98;
}

:global(html[data-theme="light"] .heatmap-heading > strong),
:global(html[data-theme="light"] .heatmap-summary span),
:global(html[data-theme="light"] .heatmap-note),
:global(html[data-theme="light"] .heatmap-legend),
:global(html[data-theme="light"] .month-labels),
:global(html[data-theme="light"] .weekday-labels) {
  color: rgb(36 57 65 / 62%);
}

:global(html[data-theme="light"] .heatmap-summary) {
  border-color: rgb(57 86 98 / 16%);
}

:global(html[data-theme="light"] .heatmap-summary div + div) {
  border-left-color: rgb(57 86 98 / 12%);
}

:global(html[data-theme="light"] .heatmap-card) {
  background: linear-gradient(120deg, rgb(248 252 253 / 76%), rgb(221 237 244 / 48%));
  border-color: rgb(57 112 137 / 18%);
  box-shadow: inset 0 1px 0 rgb(255 255 255 / 70%), 0 22px 55px rgb(56 82 92 / 10%);
}

@media (max-width: 680px) {
  .heatmap-heading {
    align-items: flex-start;
  }

  .heatmap-summary {
    grid-template-columns: 1fr;
  }

  .heatmap-summary div {
    padding-inline: 10px;
  }

  .heatmap-summary div + div {
    border-top: 1px solid rgb(255 255 255 / 10%);
    border-left: 0;
  }

  .heatmap-note {
    text-align: left;
  }
}
</style>
