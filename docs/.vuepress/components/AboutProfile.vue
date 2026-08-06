<template>
  <main class="about-page">
    <div class="about-shell">
      <section class="profile-card" aria-labelledby="about-title">
        <div class="profile-cover" aria-hidden="true"></div>

        <div class="profile-heading">
          <img
            class="profile-avatar"
            src="/images/profile_picture.png"
            alt="Luminosity"
          />
          <p class="profile-overline">PERSONAL PROFILE</p>
          <h1 id="about-title">Luminosity</h1>
          <p class="profile-subtitle">欢迎和我交朋友</p>
          <div class="social-links" aria-label="个人主页链接">
            <a
              class="github-link"
              href="https://github.com/AvePhysica"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="访问 Luminosity 的 GitHub 主页"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.69c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 7c.85 0 1.71.11 2.51.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85V21c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
                />
              </svg>
              <span>AvePhysica</span>
            </a>
            <a
              class="zhihu-link"
              href="https://www.zhihu.com/people/78-76-59-95"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="访问 Luminosity 的知乎主页"
            >
              <span class="zhihu-mark" aria-hidden="true">知</span>
              <span>Luminosity</span>
            </a>
          </div>
        </div>

        <div class="profile-content">
          <section class="about-intro" aria-labelledby="about-me-title">
            <p class="section-label">About Me</p>
            <h2 id="about-me-title">关于我</h2>
            <p>
              我是一名物理系24级的本科生。这是我的个人网站。
            </p>
            <p>
              我现在在清华大学物理系学习，现在对凝聚态理论比较感兴趣，还学习了一些 QFT，量子计算方面的内容。此外，我还在零碎学习一些日语与计算机科学的知识。也会记录一些学习笔记。
            </p>
            <p>
              属于中度二次元，会每季度追番，但不会追很多。还会看一些轻小说和漫画。
            </p>
            <p>
              游戏方面主要打音游（主推phigros、arcaea、pjsk，还喜欢打wsd，Milthm，malody），可能会在网页上发一些打歌心得。
            </p>
          </section>

          <section class="learning-section" aria-labelledby="learning-title">
            <div class="section-heading">
              <div>
                <p class="section-label">LEARNING MAP</p>
                <h2 id="learning-title">学习方向</h2>
              </div>
              <span>continuously growing</span>
            </div>

            <div class="learning-grid">
              <article>
                <span>01</span>
                <h3>Physics</h3>
                <p>量子场论、凝聚态物理与理论物理笔记。</p>
              </article>
              <article>
                <span>02</span>
                <h3>Quantum Computation</h3>
                <p>量子算法、拓扑码与容错量子计算。</p>
              </article>
              <article>
                <span>03</span>
                <h3>Japanese</h3>
                <p>日语学习过程中的词汇、语法与阅读记录。</p>
              </article>
              <article>
                <span>04</span>
                <h3>Computer Science</h3>
                <p>编程、人工智能与计算机科学相关探索。</p>
              </article>
            </div>
          </section>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>
.about-page {
  min-height: calc(100vh - var(--vp-nav-height));
  padding: clamp(66px, 9vw, 112px) 24px 88px;
  color: #e9eef0;
  background:
    linear-gradient(180deg, rgb(7 13 27 / 54%), rgb(8 17 34 / 74%)),
    url("/images/background.png") center / cover no-repeat fixed;
}

.about-shell {
  width: min(1080px, 100%);
  margin: 0 auto;
}

.profile-card {
  overflow: hidden;
  background: rgb(25 34 45 / 88%);
  border: 1px solid rgb(255 255 255 / 12%);
  border-radius: 24px;
  box-shadow: 0 34px 90px rgb(0 0 0 / 28%);
  backdrop-filter: blur(18px);
}

.profile-cover {
  height: clamp(120px, 18vw, 190px);
  background:
    linear-gradient(100deg, rgb(20 31 44 / 16%), rgb(104 69 105 / 22%)),
    url("/images/background_light.png") center 32% / cover no-repeat;
  border-bottom: 1px solid rgb(255 255 255 / 10%);
}

.profile-heading {
  position: relative;
  padding: 86px 28px 46px;
  text-align: center;
}

.profile-avatar {
  position: absolute;
  top: 0;
  left: 50%;
  width: 146px;
  height: 146px;
  object-fit: cover;
  background: #fff;
  border: 6px solid #202b38;
  border-radius: 50%;
  box-shadow: 0 16px 38px rgb(0 0 0 / 32%);
  transform: translate(-50%, -50%);
}

.profile-overline,
.section-label,
.profile-heading h1,
.profile-subtitle,
.profile-content h2,
.profile-content h3,
.profile-content p {
  margin-top: 0;
}

.profile-overline,
.section-label {
  margin-bottom: 9px;
  font-size: 0.7rem;
  font-weight: 750;
  letter-spacing: 0.2em;
  color: #8fd6e6;
  text-transform: uppercase;
}

.profile-heading h1 {
  margin-bottom: 9px;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 500;
  letter-spacing: -0.025em;
}

.profile-subtitle {
  margin-bottom: 18px;
  color: rgb(233 238 240 / 68%);
}

.social-links {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.github-link,
.zhihu-link {
  display: inline-flex;
  gap: 8px;
  align-items: center;
  padding: 8px 14px;
  font-size: 0.82rem;
  color: #b7e6ef;
  text-decoration: none;
  background: rgb(137 204 220 / 9%);
  border: 1px solid rgb(151 218 232 / 18%);
  border-radius: 999px;
  transition: color 180ms ease, background-color 180ms ease, transform 180ms ease;
}

.github-link:hover,
.zhihu-link:hover {
  color: #fff;
  background: rgb(137 204 220 / 18%);
  transform: translateY(-2px);
}

.github-link svg {
  width: 18px;
  height: 18px;
}

.zhihu-mark {
  display: grid;
  width: 18px;
  height: 18px;
  place-items: center;
  font-size: 0.7rem;
  font-weight: 800;
  line-height: 1;
  color: #fff;
  background: #2f8fc8;
  border-radius: 4px;
}

.profile-content {
  padding: 0 clamp(28px, 7vw, 82px) clamp(42px, 7vw, 76px);
}

.about-intro {
  max-width: 860px;
  padding-top: 42px;
  border-top: 1px solid rgb(255 255 255 / 13%);
}

.profile-content h2 {
  margin-bottom: 22px;
  font-family: Georgia, "Times New Roman", "Noto Serif SC", serif;
  font-size: clamp(1.65rem, 3vw, 2.35rem);
  font-weight: 550;
}

.about-intro > p:not(.section-label) {
  margin-bottom: 16px;
  font-size: 1rem;
  line-height: 1.95;
  color: rgb(233 238 240 / 72%);
}

.learning-section {
  margin-top: 54px;
}

.section-heading {
  display: flex;
  gap: 24px;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 22px;
}

.section-heading h2 {
  margin-bottom: 0;
}

.section-heading > span {
  padding-bottom: 5px;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 0.82rem;
  font-style: italic;
  color: rgb(233 238 240 / 44%);
}

.learning-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  border-top: 1px solid rgb(255 255 255 / 13%);
  border-left: 1px solid rgb(255 255 255 / 13%);
}

.learning-grid article {
  min-height: 155px;
  padding: 25px;
  border-right: 1px solid rgb(255 255 255 / 13%);
  border-bottom: 1px solid rgb(255 255 255 / 13%);
  transition: background-color 180ms ease;
}

.learning-grid article:hover {
  background: rgb(139 205 221 / 8%);
}

.learning-grid article > span {
  font-family: Georgia, "Times New Roman", serif;
  font-size: 0.72rem;
  color: #83c7d8;
}

.learning-grid h3 {
  margin: 13px 0 8px;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1.08rem;
  font-weight: 550;
}

.learning-grid p {
  margin-bottom: 0;
  font-size: 0.88rem;
  line-height: 1.7;
  color: rgb(233 238 240 / 58%);
}

:global(html[data-theme="light"] .about-page) {
  color: #263941;
  background:
    linear-gradient(180deg, rgb(239 247 249 / 56%), rgb(226 238 242 / 70%)),
    url("/images/background_light.png") center / cover no-repeat fixed;
}

:global(html[data-theme="light"] .profile-card) {
  background: rgb(246 250 250 / 86%);
  border-color: rgb(52 87 98 / 16%);
  box-shadow: 0 34px 90px rgb(69 96 104 / 18%);
}

:global(html[data-theme="light"] .profile-cover) {
  background:
    linear-gradient(100deg, rgb(242 249 250 / 12%), rgb(196 157 173 / 16%)),
    url("/images/background.png") center 32% / cover no-repeat;
  border-bottom-color: rgb(52 87 98 / 12%);
}

:global(html[data-theme="light"] .profile-avatar) {
  border-color: #edf5f6;
  box-shadow: 0 16px 38px rgb(68 94 102 / 24%);
}

:global(html[data-theme="light"] .profile-overline),
:global(html[data-theme="light"] .section-label),
:global(html[data-theme="light"] .learning-grid article > span) {
  color: #2f8198;
}

:global(html[data-theme="light"] .profile-subtitle),
:global(html[data-theme="light"] .about-intro > p:not(.section-label)),
:global(html[data-theme="light"] .learning-grid p),
:global(html[data-theme="light"] .section-heading > span) {
  color: rgb(38 57 65 / 66%);
}

:global(html[data-theme="light"] .github-link),
:global(html[data-theme="light"] .zhihu-link) {
  color: #267b93;
  background: rgb(57 137 158 / 8%);
  border-color: rgb(57 137 158 / 18%);
}

:global(html[data-theme="light"] .about-intro),
:global(html[data-theme="light"] .learning-grid),
:global(html[data-theme="light"] .learning-grid article) {
  border-color: rgb(52 87 98 / 16%);
}

:global(html[data-theme="light"] .learning-grid article:hover) {
  background: rgb(57 137 158 / 7%);
}

@media (max-width: 680px) {
  .about-page {
    padding: 42px 14px 58px;
  }

  .profile-card {
    border-radius: 18px;
  }

  .profile-cover {
    height: 118px;
  }

  .profile-heading {
    padding: 76px 18px 36px;
  }

  .profile-avatar {
    width: 126px;
    height: 126px;
  }

  .profile-content {
    padding: 0 20px 38px;
  }

  .section-heading {
    align-items: flex-start;
    flex-direction: column;
  }

  .learning-grid {
    grid-template-columns: 1fr;
  }
}
</style>
