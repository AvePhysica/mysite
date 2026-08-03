<script setup>
import { computed, ref } from "vue";
import { RouteLink, useRoutes } from "vuepress/client";

const routes = useRoutes();
const showUpdates = ref(true);

const sections = [
  { label: "Physics", path: "/physics/", prefix: "/physics/" },
  {
    label: "QFT Lectures",
    path: "/physics/",
    prefix: "/physics/Quantum%20Field%20Theory/",
  },
  { label: "Japanese", path: "/japanese/", prefix: "/japanese/" },
  {
    label: "Computer Science",
    path: "/computer-science/",
    prefix: "/computer-science/",
  },
];

function categoryOf(path) {
  if (path.startsWith("/physics/Quantum%20Field%20Theory/")) return "QFT";
  if (path.startsWith("/physics/")) return "Physics";
  if (path.startsWith("/japanese/")) return "Japanese";
  return "Computer Science";
}

function fallbackDescription(category) {
  const descriptions = {
    QFT: "Quantum Field Theory lecture notes, derivations and exercises.",
    Physics: "Notes on condensed matter physics and many-body theory.",
    Japanese: "Japanese language learning notes and study records.",
    "Computer Science": "Computer science, programming and AI notes.",
  };
  return descriptions[category];
}

const pages = computed(() =>
  Object.entries(routes.value)
    .filter(([path]) =>
      sections.some(({ prefix }) => path.startsWith(prefix)),
    )
    .map(([path, route]) => {
      const home = route.meta.homepage ?? {};
      const category = categoryOf(path);

      return {
        path,
        title: String(route.meta.title || home.title || "Untitled note"),
        category,
        description: String(home.description || fallbackDescription(category)),
        updatedAt: Number(home.updatedAt || 0),
        tags: Array.isArray(home.tags) ? home.tags.slice(0, 2) : [],
      };
    }),
);

const stats = computed(() =>
  sections.map((section) => ({
    ...section,
    count: pages.value.filter(({ path }) => path.startsWith(section.prefix))
      .length,
  })),
);

const recentPages = computed(() =>
  pages.value
    .filter(({ path }) => !path.endsWith("/"))
    .sort(
      (left, right) =>
        right.updatedAt - left.updatedAt || left.title.localeCompare(right.title),
    )
    .slice(0, 4),
);

function formatDate(timestamp) {
  if (!timestamp) return "Recently updated";

  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(timestamp);
}
</script>

<template>
  <main class="home-dashboard">
    <div class="home-shell">
      <section class="home-hero" aria-labelledby="home-title">
        <p class="home-kicker">流明酱的小站</p>
        <h1 id="home-title">Study &amp; Research</h1>
        <p class="home-intro">
        </p>

        <nav class="home-actions" aria-label="主要内容入口">
          <RouteLink to="/physics/">Physics</RouteLink>
          <RouteLink to="/japanese/">Japanese</RouteLink>
          <RouteLink to="/computer-science/">Computer Science</RouteLink>
        </nav>

        <button
          type="button"
          class="home-view-toggle"
          aria-controls="recent-update-panel"
          :aria-expanded="showUpdates"
          @click="showUpdates = !showUpdates"
        >
          <span aria-hidden="true">{{ showUpdates ? "−" : "+" }}</span>
          {{ showUpdates ? "隐藏最近更新" : "显示最近更新" }}
        </button>
      </section>

      <Transition name="update-panel">
      <section
        v-if="showUpdates"
        id="recent-update-panel"
        class="update-panel"
        aria-labelledby="recent-update-title"
      >
        <div class="panel-heading">
          <div>
            <p class="panel-eyebrow">KNOWLEDGE BASE</p>
            <h2 id="recent-update-title">Recent Update</h2>
          </div>
          <span class="panel-status"><i /> continuously growing</span>
        </div>

        <div class="stats-grid">
          <RouteLink
            v-for="stat in stats"
            :key="stat.label"
            :to="stat.path"
            class="stat-card"
          >
            <span>{{ stat.label }}</span>
            <strong>{{ stat.count }}</strong>
          </RouteLink>
        </div>

        <div class="recent-grid">
          <article v-for="page in recentPages" :key="page.path" class="note-card">
            <div class="note-meta">
              <span class="note-type">{{ page.category }}</span>
              <time>{{ formatDate(page.updatedAt) }}</time>
            </div>

            <h3>
              <RouteLink :to="page.path">{{ page.title }}</RouteLink>
            </h3>
            <p>{{ page.description }}</p>

            <div class="note-footer">
              <div class="note-tags">
                <span>{{ page.category }}</span>
                <span v-for="tag in page.tags" :key="String(tag)">{{ tag }}</span>
              </div>
              <RouteLink :to="page.path" class="read-link">
                阅读 <span aria-hidden="true">↗</span>
              </RouteLink>
            </div>
          </article>
        </div>
      </section>
      </Transition>
    </div>
  </main>
</template>

<style scoped>
.home-dashboard {
  position: relative;
  isolation: isolate;
  min-height: calc(100vh - var(--vp-nav-height));
  overflow: hidden;
  color: #eef2f1;
  background:
    linear-gradient(180deg, rgb(7 13 27 / 50%), rgb(8 17 34 / 66%)),
    url("/images/background.png") center / cover no-repeat fixed;
}

.home-dashboard::before {
  position: absolute;
  inset: 0;
  z-index: -1;
  content: "";
  background: linear-gradient(180deg, rgb(8 10 12 / 8%), rgb(8 10 12 / 35%));
}

.home-shell {
  width: min(1180px, calc(100% - 48px));
  padding: clamp(76px, 10vw, 132px) 0 64px;
  margin: 0 auto;
}

.home-hero {
  max-width: 780px;
  margin-bottom: clamp(64px, 8vw, 96px);
}

.home-kicker,
.home-hero h1,
.home-intro,
.panel-heading h2,
.panel-eyebrow {
  margin: 0;
}

.home-kicker {
  width: fit-content;
  font-family: "霞鹜文楷等宽", "Times New Roman", serif;
  font-size: clamp(2.4rem, 6vw, 4.2rem);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.045em;
  background: linear-gradient(100deg, #e3bcff 4%, #b2f5f7 48%, #f5d5b2 92%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.home-hero h1 {
  margin-top: 18px;
  font-family: "霞鹜文楷等宽", "Times New Roman", "Noto Serif SC", serif;
  font-size: clamp(0.6rem, 7vw, 2.2rem);
  font-weight: 600;
  line-height: 1.02;
  letter-spacing: -0.04em;
  color: #d5efd9;
}

.home-intro {
  max-width: 660px;
  margin-top: 22px;
  font-size: clamp(1rem, 2vw, 1.16rem);
  line-height: 1.8;
  color: rgb(231 237 238 / 70%);
}

.home-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 32px;
}

.home-actions a {
  padding: 10px 22px;
  font-family: "Times New Roman", serif;
  font-size: 1rem;
  font-weight: 700;
  color: #edf5f5;
  text-decoration: none;
  background: rgb(72 84 102 / 66%);
  border: 1px solid rgb(255 255 255 / 6%);
  border-radius: 999px;
  box-shadow: inset 0 1px 0 rgb(255 255 255 / 7%);
  transition: transform 180ms ease, background-color 180ms ease;
}

.home-actions a:first-child,
.home-actions a:hover {
  color: #10252b;
  background: #89cce1;
  transform: translateY(-2px);
}

.home-view-toggle {
  display: inline-flex;
  gap: 8px;
  align-items: center;
  padding: 8px 15px;
  margin-top: 14px;
  font-size: 0.84rem;
  font-weight: 600;
  color: rgb(237 245 245 / 78%);
  cursor: pointer;
  background: rgb(27 37 48 / 48%);
  border: 1px solid rgb(255 255 255 / 12%);
  border-radius: 999px;
  box-shadow: inset 0 1px 0 rgb(255 255 255 / 6%);
  transition: color 180ms ease, background-color 180ms ease, transform 180ms ease;
}

.home-view-toggle:hover {
  color: #fff;
  background: rgb(72 100 116 / 68%);
  transform: translateY(-2px);
}

.home-view-toggle span {
  display: grid;
  width: 18px;
  height: 18px;
  place-items: center;
  font-size: 1rem;
  line-height: 1;
  background: rgb(255 255 255 / 9%);
  border-radius: 50%;
}

.update-panel-enter-active,
.update-panel-leave-active {
  transition: opacity 260ms ease, transform 260ms ease;
}

.update-panel-enter-from,
.update-panel-leave-to {
  opacity: 0;
  transform: translateY(18px);
}

.update-panel {
  padding: clamp(24px, 4vw, 40px);
  background:
    linear-gradient(135deg, rgb(189 206 211 / 20%), rgb(178 163 147 / 14%)),
    rgb(255 255 255 / 8%);
  border: 1px solid rgb(255 255 255 / 13%);
  border-radius: 18px;
  box-shadow: 0 28px 80px rgb(0 0 0 / 28%), inset 0 1px 0 rgb(255 255 255 / 8%);
  backdrop-filter: blur(18px);
}

.panel-heading {
  display: flex;
  gap: 24px;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 26px;
}

.panel-eyebrow {
  margin-bottom: 5px;
  font-size: 0.72rem;
  font-weight: 700;
  color: #91d2e2;
  letter-spacing: 0.18em;
}

.panel-heading h2 {
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 500;
  color: #f4f2eb;
}

.panel-status {
  display: flex;
  gap: 8px;
  align-items: center;
  padding-bottom: 8px;
  font-size: 0.82rem;
  color: rgb(232 239 240 / 58%);
}

.panel-status i {
  width: 7px;
  height: 7px;
  background: #86d3bb;
  border-radius: 50%;
  box-shadow: 0 0 12px #86d3bb;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
  margin-bottom: 18px;
}

.stat-card {
  display: flex;
  gap: 18px;
  align-items: center;
  justify-content: space-between;
  min-width: 0;
  padding: 18px 20px;
  color: rgb(235 239 240 / 70%);
  text-decoration: none;
  background: rgb(24 29 34 / 28%);
  border: 1px solid rgb(255 255 255 / 16%);
  border-radius: 12px;
  box-shadow: inset 0 1px 0 rgb(255 255 255 / 7%);
  transition: border-color 180ms ease, transform 180ms ease;
}

.stat-card:hover {
  color: #f4f7f7;
  border-color: rgb(139 210 228 / 46%);
  transform: translateY(-2px);
}

.stat-card span {
  overflow: hidden;
  font-family: Georgia, "Times New Roman", serif;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.stat-card strong {
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1.15rem;
  font-style: italic;
  color: #f1efe7;
}

.recent-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.note-card {
  display: flex;
  min-width: 0;
  min-height: 280px;
  padding: 24px;
  flex-direction: column;
  background:
    linear-gradient(145deg, rgb(255 255 255 / 8%), rgb(117 135 138 / 5%)),
    rgb(19 24 28 / 23%);
  border: 1px solid rgb(255 255 255 / 15%);
  border-radius: 14px;
  box-shadow: inset 0 1px 0 rgb(255 255 255 / 6%);
}

.note-meta,
.note-footer {
  display: flex;
  gap: 14px;
  align-items: center;
  justify-content: space-between;
}

.note-type,
.note-tags span {
  padding: 5px 10px;
  font-size: 0.78rem;
  color: #9ddbea;
  background: rgb(91 151 166 / 14%);
  border-radius: 999px;
}

.note-meta time {
  font-size: 0.78rem;
  color: rgb(230 236 237 / 55%);
}

.note-card h3 {
  margin: 24px 0 12px;
  font-family: Georgia, "Times New Roman", "Noto Serif SC", serif;
  font-size: clamp(1.18rem, 2vw, 1.4rem);
  line-height: 1.35;
}

.note-card h3 a {
  color: #f2f0e9;
  text-decoration: none;
}

.note-card h3 a:hover {
  color: #9edbec;
}

.note-card > p {
  display: -webkit-box;
  margin: 0 0 24px;
  overflow: hidden;
  font-size: 0.94rem;
  line-height: 1.75;
  color: rgb(230 236 237 / 62%);
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.note-footer {
  margin-top: auto;
}

.note-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
}

.read-link {
  flex: none;
  font-size: 0.84rem;
  color: #a7dce9;
  text-decoration: none;
}

.read-link:hover {
  color: #e8f9fd;
}

@media (max-width: 900px) {
  .stats-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 720px) {
  .home-shell {
    width: min(100% - 28px, 1180px);
    padding-top: 66px;
  }

  .home-hero {
    margin-bottom: 48px;
  }

  .panel-heading {
    align-items: flex-start;
    flex-direction: column;
  }

  .panel-status {
    padding-bottom: 0;
  }

  .recent-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .home-actions {
    gap: 10px;
  }

  .home-actions a {
    padding: 9px 15px;
    font-size: 0.9rem;
  }

  .update-panel {
    padding: 20px;
    border-radius: 14px;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .note-card {
    min-height: 250px;
    padding: 20px;
  }
}
</style>
