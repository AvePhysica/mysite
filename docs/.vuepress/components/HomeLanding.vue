<script setup>
import { computed, ref } from "vue";
import { RouteLink, useRoutes } from "vuepress/client";

const routes = useRoutes();
const showUpdates = ref(true);

const sections = [
  { label: "Physics", path: "/physics/", prefix: "/physics/" },
  { label: "Japanese", path: "/japanese/", prefix: "/japanese/" },
  {
    label: "Computer Science",
    path: "/computer-science/",
    prefix: "/computer-science/",
  },
];

function categoryOf(path) {
  if (path.startsWith("/physics/Quantum%20Field%20Theory/")) return "QFT";
  if (path.startsWith("/physics/Quantum%20Computation/")) {
    return "Quantum Computing";
  }
  if (path.startsWith("/physics/")) return "Physics";
  if (path.startsWith("/japanese/")) return "Japanese";
  return "Computer Science";
}

function fallbackDescription(category) {
  const descriptions = {
    QFT: "Quantum Field Theory lecture notes, derivations and exercises.",
    "Quantum Computing": "Quantum computation, algorithms and topological codes.",
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
        isArticle: Boolean(home.isArticle),
        tags: Array.isArray(home.tags) ? home.tags.slice(0, 2) : [],
      };
    }),
);

const stats = computed(() =>
  sections.map((section, index) => ({
    ...section,
    number: String(index + 1).padStart(2, "0"),
    count: pages.value.filter(({ path }) => path.startsWith(section.prefix))
      .length,
  })),
);

const recentPages = computed(() =>
  pages.value
    .filter(({ isArticle, updatedAt }) => isArticle && updatedAt > 0)
    .sort(
      (left, right) =>
        right.updatedAt - left.updatedAt || left.title.localeCompare(right.title),
    )
    .slice(0, 4),
);

const featuredPage = computed(() => recentPages.value[0] ?? null);
const recentListPages = computed(() => recentPages.value.slice(1));

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
      <section class="home-stage" aria-labelledby="home-title">
        <div class="home-copy">
          <p class="home-overline">PERSONAL KNOWLEDGE GARDEN</p>
          <p class="home-kicker">流明酱的小站</p>
          <h1 id="home-title">Study &amp; Research</h1>
          <p class="home-intro">
            记录物理、量子计算、语言学习与技术探索，让零散的思考在这里持续生长。
          </p>

          <nav class="home-actions" aria-label="主要内容入口">
            <RouteLink to="/physics/">进入知识库</RouteLink>
            <a href="#recent-update-panel">查看最近笔记</a>
          </nav>
        </div>

        <aside class="research-index" aria-label="研究分类索引">
          <header class="index-heading">
            <div>
              <p>RESEARCH INDEX</p>
              <span>Browse by field</span>
            </div>
            <strong>{{ String(stats.length).padStart(2, "0") }}</strong>
          </header>

          <nav class="index-list" aria-label="知识领域">
            <RouteLink
              v-for="stat in stats"
              :key="stat.label"
              :to="stat.path"
              class="index-row"
            >
              <span class="index-number">{{ stat.number }}</span>
              <span class="index-label">{{ stat.label }}</span>
              <strong>{{ stat.count }}</strong>
              <span class="index-arrow" aria-hidden="true">↗</span>
            </RouteLink>
          </nav>
        </aside>
      </section>

      <Transition name="recent-section">
        <section
          v-if="showUpdates"
          id="recent-update-panel"
          class="recent-section"
          aria-labelledby="recent-update-title"
        >
          <header class="recent-heading">
            <div>
              <p class="section-overline">RESEARCH LOG</p>
              <h2 id="recent-update-title">Recent Notes</h2>
            </div>
            <RouteLink to="/physics/" class="view-all-link">
              Browse all <span aria-hidden="true">↗</span>
            </RouteLink>
          </header>

          <div v-if="featuredPage" class="recent-layout">
            <article class="featured-note">
              <div class="featured-meta">
                <span>{{ featuredPage.category }}</span>
                <time>{{ formatDate(featuredPage.updatedAt) }}</time>
              </div>

              <p class="featured-label">LATEST ENTRY</p>
              <h3>
                <RouteLink :to="featuredPage.path">
                  {{ featuredPage.title }}
                </RouteLink>
              </h3>
              <p class="featured-description">{{ featuredPage.description }}</p>

              <footer class="featured-footer">
                <div class="featured-tags">
                  <span>{{ featuredPage.category }}</span>
                  <span v-for="tag in featuredPage.tags" :key="String(tag)">
                    {{ tag }}
                  </span>
                </div>
                <RouteLink :to="featuredPage.path" class="read-link">
                  阅读全文 <span aria-hidden="true">↗</span>
                </RouteLink>
              </footer>
            </article>

            <div class="recent-list">
              <RouteLink
                v-for="page in recentListPages"
                :key="page.path"
                :to="page.path"
                class="recent-row"
              >
                <div class="recent-row-meta">
                  <time>{{ formatDate(page.updatedAt) }}</time>
                  <span>{{ page.category }}</span>
                </div>
                <h3>{{ page.title }}</h3>
                <span class="recent-arrow" aria-hidden="true">↗</span>
              </RouteLink>
            </div>
          </div>
        </section>
      </Transition>

      <button
        type="button"
        class="focus-toggle"
        aria-controls="recent-update-panel"
        :aria-expanded="showUpdates"
        @click="showUpdates = !showUpdates"
      >
        <span aria-hidden="true">{{ showUpdates ? "−" : "+" }}</span>
        {{ showUpdates ? "专注模式" : "显示笔记" }}
      </button>
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
  background: linear-gradient(115deg, rgb(6 11 22 / 18%), rgb(8 10 12 / 42%));
}

.home-shell {
  width: min(1200px, calc(100% - 56px));
  padding: clamp(62px, 8vw, 104px) 0 76px;
  margin: 0 auto;
}

.home-stage {
  display: grid;
  grid-template-columns: minmax(0, 1.12fr) minmax(330px, 0.72fr);
  gap: clamp(48px, 8vw, 112px);
  align-items: center;
  min-height: min(660px, calc(100vh - var(--vp-nav-height) - 120px));
}

.home-copy {
  max-width: 660px;
}

.home-overline,
.home-kicker,
.home-copy h1,
.home-intro,
.index-heading p,
.index-heading span,
.section-overline,
.recent-heading h2,
.featured-label {
  margin: 0;
}

.home-overline,
.section-overline,
.index-heading p,
.featured-label {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.2em;
}

.home-overline,
.section-overline {
  color: #91d2e2;
}

.home-kicker {
  width: fit-content;
  margin-top: 18px;
  font-family: "霞鹜文楷等宽", "Times New Roman", serif;
  font-size: clamp(2.8rem, 6vw, 4.8rem);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.045em;
  background: linear-gradient(100deg, #e3bcff 4%, #b2f5f7 48%, #f5d5b2 92%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.home-copy h1 {
  margin-top: 26px;
  font-family: "霞鹜文楷等宽", "Times New Roman", "Noto Serif SC", serif;
  font-size: clamp(1.7rem, 3.2vw, 2.65rem);
  font-weight: 600;
  line-height: 1.08;
  letter-spacing: -0.035em;
  color: #d5efd9;
}

.home-intro {
  max-width: 610px;
  margin-top: 26px;
  font-family: "霞鹜文楷等宽", "Noto Serif SC", serif;
  font-size: clamp(1rem, 1.5vw, 1.12rem);
  line-height: 1.9;
  color: rgb(231 237 238 / 72%);
}

.home-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  margin-top: 34px;
}

.home-actions a,
.view-all-link,
.read-link {
  position: relative;
  padding: 7px 0;
  font-size: 0.9rem;
  font-weight: 700;
  color: #b3e6f0;
  text-decoration: none;
  border-bottom: 1px solid rgb(179 230 240 / 42%);
  transition: color 180ms ease, border-color 180ms ease, transform 180ms ease;
}

.home-actions a:hover,
.view-all-link:hover,
.read-link:hover {
  color: #fff;
  border-color: currentcolor;
  transform: translateY(-2px);
}

.research-index {
  padding: 12px 0;
  background: linear-gradient(110deg, rgb(20 29 39 / 46%), rgb(38 45 52 / 22%));
  border-top: 1px solid rgb(255 255 255 / 22%);
  border-bottom: 1px solid rgb(255 255 255 / 16%);
  box-shadow: 0 28px 70px rgb(0 0 0 / 16%);
  backdrop-filter: blur(12px);
}

.index-heading {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 18px 22px 24px;
}

.index-heading p {
  color: #9ed9e8;
}

.index-heading span {
  display: block;
  margin-top: 7px;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 0.9rem;
  font-style: italic;
  color: rgb(232 239 240 / 52%);
}

.index-heading strong {
  font-family: Georgia, "Times New Roman", serif;
  font-size: 2rem;
  font-weight: 400;
  color: rgb(239 244 243 / 78%);
}

.index-row {
  display: grid;
  grid-template-columns: 34px minmax(0, 1fr) auto 20px;
  gap: 12px;
  align-items: center;
  padding: 17px 22px;
  color: rgb(238 243 243 / 76%);
  text-decoration: none;
  border-top: 1px solid rgb(255 255 255 / 10%);
  transition: color 180ms ease, background-color 180ms ease, padding-left 180ms ease;
}

.index-row:hover {
  padding-left: 28px;
  color: #fff;
  background: rgb(126 197 214 / 10%);
}

.index-number,
.index-arrow {
  font-size: 0.72rem;
  color: rgb(158 217 232 / 66%);
}

.index-label {
  overflow: hidden;
  font-family: Georgia, "Times New Roman", "Noto Serif SC", serif;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.index-row strong {
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1rem;
  font-style: italic;
  font-weight: 500;
}

.recent-section-enter-active,
.recent-section-leave-active {
  transition: opacity 260ms ease, transform 260ms ease;
}

.recent-section-enter-from,
.recent-section-leave-to {
  opacity: 0;
  transform: translateY(18px);
}

.recent-section {
  padding-top: clamp(44px, 6vw, 72px);
  margin-top: clamp(34px, 5vw, 64px);
  border-top: 1px solid rgb(255 255 255 / 16%);
}

.recent-heading {
  display: flex;
  gap: 24px;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 28px;
}

.recent-heading h2 {
  margin-top: 7px;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(2.1rem, 4vw, 3.35rem);
  font-weight: 500;
  color: #f4f2eb;
}

.recent-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(300px, 0.72fr);
  gap: clamp(22px, 3vw, 38px);
}

.featured-note {
  display: flex;
  min-width: 0;
  min-height: 340px;
  padding: clamp(28px, 4vw, 44px);
  flex-direction: column;
  background:
    linear-gradient(135deg, rgb(172 207 216 / 15%), rgb(98 113 125 / 5%)),
    rgb(14 20 28 / 34%);
  border-left: 3px solid rgb(143 211 226 / 72%);
  box-shadow: inset 0 1px 0 rgb(255 255 255 / 8%), 0 24px 60px rgb(0 0 0 / 17%);
  backdrop-filter: blur(12px);
}

.featured-meta,
.featured-footer,
.recent-row-meta {
  display: flex;
  gap: 14px;
  align-items: center;
  justify-content: space-between;
}

.featured-meta {
  font-size: 0.76rem;
  color: rgb(230 236 237 / 58%);
}

.featured-meta span,
.featured-tags span,
.recent-row-meta span {
  color: #9ddbea;
}

.featured-label {
  margin-top: 38px;
  color: rgb(157 219 234 / 72%);
}

.featured-note h3 {
  max-width: 720px;
  margin: 13px 0 16px;
  font-family: Georgia, "Times New Roman", "Noto Serif SC", serif;
  font-size: clamp(1.45rem, 2.5vw, 2.15rem);
  line-height: 1.35;
}

.featured-note h3 a {
  color: #f4f2eb;
  text-decoration: none;
}

.featured-note h3 a:hover {
  color: #a9dfeb;
}

.featured-description {
  display: -webkit-box;
  max-width: 720px;
  margin: 0 0 26px;
  overflow: hidden;
  font-size: 0.96rem;
  line-height: 1.8;
  color: rgb(230 236 237 / 62%);
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.featured-footer {
  margin-top: auto;
}

.featured-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 13px;
  font-size: 0.76rem;
}

.recent-list {
  border-top: 1px solid rgb(255 255 255 / 16%);
}

.recent-row {
  position: relative;
  display: block;
  min-height: 112px;
  padding: 20px 38px 20px 2px;
  color: inherit;
  text-decoration: none;
  border-bottom: 1px solid rgb(255 255 255 / 13%);
  transition: padding-left 180ms ease, background-color 180ms ease;
}

.recent-row:hover {
  padding-left: 12px;
  background: linear-gradient(90deg, rgb(135 204 220 / 9%), transparent);
}

.recent-row-meta {
  justify-content: flex-start;
  font-size: 0.72rem;
  color: rgb(230 236 237 / 52%);
}

.recent-row h3 {
  display: -webkit-box;
  margin: 12px 0 0;
  overflow: hidden;
  font-family: Georgia, "Times New Roman", "Noto Serif SC", serif;
  font-size: 1.03rem;
  font-weight: 500;
  line-height: 1.45;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.recent-arrow {
  position: absolute;
  top: 50%;
  right: 4px;
  color: #9ddbea;
  transform: translateY(-50%);
}

.focus-toggle {
  display: inline-flex;
  gap: 8px;
  align-items: center;
  padding: 8px 14px;
  margin-top: 24px;
  float: right;
  font-size: 0.78rem;
  font-weight: 600;
  color: rgb(237 245 245 / 70%);
  cursor: pointer;
  background: rgb(20 29 39 / 48%);
  border: 1px solid rgb(255 255 255 / 12%);
  border-radius: 999px;
  backdrop-filter: blur(10px);
  transition: color 180ms ease, background-color 180ms ease;
}

.focus-toggle:hover {
  color: #fff;
  background: rgb(72 100 116 / 68%);
}

.focus-toggle span {
  display: grid;
  width: 17px;
  height: 17px;
  place-items: center;
  line-height: 1;
  background: rgb(255 255 255 / 9%);
  border-radius: 50%;
}

@media (max-width: 940px) {
  .home-stage {
    grid-template-columns: 1fr;
    gap: 54px;
    min-height: auto;
  }

  .research-index {
    max-width: 680px;
  }

  .recent-layout {
    grid-template-columns: 1fr;
  }

  .recent-list {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 18px;
    border-top: 0;
  }

  .recent-row {
    padding: 18px 32px 18px 0;
    border-top: 1px solid rgb(255 255 255 / 16%);
  }
}

@media (max-width: 680px) {
  .home-shell {
    width: min(100% - 30px, 1200px);
    padding-top: 58px;
  }

  .home-stage {
    gap: 42px;
  }

  .home-kicker {
    font-size: clamp(2.5rem, 12vw, 3.65rem);
  }

  .home-actions {
    gap: 22px;
  }

  .recent-heading {
    align-items: flex-start;
    flex-direction: column;
  }

  .recent-list {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .featured-note {
    min-height: 320px;
  }

  .featured-footer {
    align-items: flex-start;
    flex-direction: column;
  }
}

@media (max-width: 430px) {
  .index-row {
    grid-template-columns: 28px minmax(0, 1fr) auto 16px;
    padding-inline: 16px;
  }

  .index-heading {
    padding-inline: 16px;
  }

  .featured-note {
    padding: 24px 20px;
  }
}
</style>
