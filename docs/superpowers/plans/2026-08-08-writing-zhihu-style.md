# Writing Zhihu Style Skill Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and install a personal Codex skill that can draft, rewrite, and review general knowledge articles in the user's distilled Zhihu writing style.

**Architecture:** Collect the user's 68 public Zhihu articles, rank them locally by favorite count, and analyze the top 50 using official user summaries plus official-search excerpts. Keep the runtime skill compact: a routing `SKILL.md` and separate references for the style profile, annotated excerpts, review rubric, and corpus provenance.

**Tech Stack:** Zhihu CLI 0.2.0, PowerShell, Markdown Codex skills, skill-creator validation scripts, isolated subagent evaluations.

---

### Task 1: Establish baseline behavior

**Files:**
- Create temporarily: `D:/VuePress_mysite/.codex-work/writing-zhihu-style-evals/baseline.md`

- [ ] **Step 1: Run three independent prompts without the new skill**

Use one fresh subagent for each prompt: create a knowledge article, rewrite a supplied draft, and review a draft "in my Zhihu style". Do not give them corpus data or intended conclusions.

- [ ] **Step 2: Record observable failures**

Expected baseline: agents lack the user's style profile, ask for samples, or produce generic knowledge prose without the user's title, structure, derivation, and tone patterns.

### Task 2: Collect the top-50 corpus

**Files:**
- Create temporarily: `D:/VuePress_mysite/.codex-work/writing-zhihu-style-corpus/collect.ps1`
- Create temporarily: `D:/VuePress_mysite/.codex-work/writing-zhihu-style-corpus/corpus.json`
- Create temporarily: `D:/VuePress_mysite/.codex-work/writing-zhihu-style-corpus/analysis-packet.md`

- [ ] **Step 1: Fetch all public articles through the saved absolute CLI path**

Run `me contents --type article --sort ts --order desc --limit 50` and follow `NextOffset` until complete. Expected total from the prior discovery call: 68 articles.

- [ ] **Step 2: Rank by `FavoriteCount` and select 50**

Sort locally, preserving title, URL, metrics, date, and summary. Do not claim that summaries are full text.

- [ ] **Step 3: Request official-search excerpts**

Search each selected title through `search zhihu`, match the result URL to the article URL, and stop without retrying on rate or quota errors. Mark each sample as `summary-only` or `summary-plus-search-excerpt`.

- [ ] **Step 4: Produce a bounded analysis packet**

Include all 50 titles and summaries plus short representative excerpts; exclude complete article bodies and credentials.

### Task 3: Run skill RED test and initialize the package

**Files:**
- Create: `D:/VuePress_mysite/.codex-work/writing-zhihu-style/SKILL.md`
- Create: `D:/VuePress_mysite/.codex-work/writing-zhihu-style/agents/openai.yaml`
- Create: `D:/VuePress_mysite/.codex-work/writing-zhihu-style/references/style-profile.md`
- Create: `D:/VuePress_mysite/.codex-work/writing-zhihu-style/references/exemplars.md`
- Create: `D:/VuePress_mysite/.codex-work/writing-zhihu-style/references/review-rubric.md`
- Create: `D:/VuePress_mysite/.codex-work/writing-zhihu-style/references/corpus-index.md`

- [ ] **Step 1: Confirm the package does not yet exist**

Expected: `C:/Users/33552/.codex/skills/writing-zhihu-style` is absent.

- [ ] **Step 2: Initialize using `init_skill.py`**

Use the name `writing-zhihu-style`, resource type `references`, and deterministic UI fields for display name, short description, and default prompt.

- [ ] **Step 3: Write the minimum skill addressing baseline failures**

Implement three modes: create, rewrite, and review. Require factual accuracy over imitation, preserve supplied formulas and citations, and read only the reference needed for the selected mode.

### Task 4: Validate with forward tests

**Files:**
- Modify if needed: files under `D:/VuePress_mysite/.codex-work/writing-zhihu-style/`

- [ ] **Step 1: Run `quick_validate.py`**

Expected: validation succeeds with no frontmatter, naming, or metadata errors.

- [ ] **Step 2: Repeat the three baseline prompts with the skill**

Use fresh subagents and the staged skill path. Expected: no request for samples, correct mode selection, recognizable structure and tone, preserved facts, and no invented sources.

- [ ] **Step 3: Close only observed gaps and revalidate**

Do not add rules unrelated to actual evaluation failures.

### Task 5: Install and verify

**Files:**
- Create: `C:/Users/33552/.codex/skills/writing-zhihu-style/`
- Delete temporary corpus and evaluation data under `D:/VuePress_mysite/.codex-work/` after verification.

- [ ] **Step 1: Copy the validated skill into the user skill directory**

Preserve the staged package exactly; do not copy temporary corpus files.

- [ ] **Step 2: Validate the installed directory**

Run `quick_validate.py C:/Users/33552/.codex/skills/writing-zhihu-style` and inspect all referenced paths.

- [ ] **Step 3: Verify discovery metadata**

Confirm `SKILL.md` and `agents/openai.yaml` exist and contain no placeholders.

- [ ] **Step 4: Remove temporary analysis material**

Delete only the explicitly verified `.codex-work/writing-zhihu-style*` directories. Keep the implementation plan and installed skill.
