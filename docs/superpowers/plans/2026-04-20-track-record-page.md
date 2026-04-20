# Track Record Page — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship a new `/track-record` page with two layout variants (Editorial + Structured) behind a `?v=b` toggle, add a new weighty paragraph to the About page positioning Andre's Triniti decade, and thread the new route through navigation, footer, sitemap and i18n — in both EN and pt-BR.

**Architecture:** Single Next.js route under `app/[locale]/track-record/` that reads `searchParams.v` and renders either `<VariantEditorial />` or `<VariantStructured />`. Both variants consume the same content module (`content.ts`) and the same i18n strings — no duplicated copy. A new `<LogoPlaceholder />` component renders text wordmarks in the Engram palette so the page ships without real logo assets. All copy added to both `messages/en.json` and `messages/pt-BR.json` under a new `TrackRecord` namespace.

**Tech Stack:** Next.js 16 (App Router), next-intl v4, React 19, Tailwind CSS v4, TypeScript. No test framework exists in this project — verification is `npm run qa` (lint + typecheck) plus agent-browser CLI smoke checks per `AGENTS.md`.

**Spec:** `docs/superpowers/specs/2026-04-20-track-record-page-design.md`

**Branch:** `feat/track-record-page` (already created).

---

## File Map

**Create:**
- `app/[locale]/track-record/page.tsx` — route entry; reads `searchParams.v`, chooses variant, handles metadata.
- `app/[locale]/track-record/VariantEditorial.tsx` — Variant A layout.
- `app/[locale]/track-record/VariantStructured.tsx` — Variant B layout.
- `app/[locale]/track-record/content.ts` — shared, non-translatable content config (featured logo list, sector groups with logo name arrays).
- `components/LogoPlaceholder.tsx` — text-wordmark placeholder component with two size variants.

**Modify:**
- `app/[locale]/about/page.tsx` — insert new `<p>{t("storyP2_5")}</p>` between the existing P2 and P3 in the story block.
- `components/Navigation.tsx` — add `Track Record` link between `Services` and `About`.
- `components/Footer.tsx` — add `Track Record` to footer nav.
- `messages/en.json` — add `TrackRecord` namespace, `Navigation.trackRecord`, `Footer.trackRecord`, `Metadata.trackRecordTitle`, `Metadata.trackRecordDescription`, `About.storyP2_5`.
- `messages/pt-BR.json` — mirror additions in pt-BR.
- `app/sitemap.ts` — add `/track-record` entry.

**Do not modify:**
- `app/[locale]/services/page.tsx`, `app/[locale]/contact/page.tsx`, `app/[locale]/page.tsx` — out of scope.
- `i18n/routing.ts` — no pathname overrides needed; the convention-based route just works.

---

## Conventions used in this plan

- **Verification after each code task:** run `npm run qa` — must pass with no errors. If a task adds user-visible UI, also eyeball it at `http://localhost:3000/track-record` (and `/pt-BR/track-record`) using `npm run dev`.
- **Commits:** one commit per task, Conventional Commits style (`feat`, `chore`, `docs`). Keep messages short.
- **No Jest/Vitest:** the project has no test framework. Do not introduce one as part of this plan.
- **Tailwind tokens:** reuse `bg-navy`, `bg-parchment`, `bg-white`, `text-ember`, `text-navy`, `text-parchment`, `font-display`, `font-body`, `section-label`, `section-heading`, `card`, `btn-primary` — they are already defined in `app/globals.css` / tailwind config.
- **i18n Link:** import `Link` from `@/i18n/navigation`, never from `next/link`.

---

## Task 1: Add i18n strings (EN + pt-BR)

**Files:**
- Modify: `messages/en.json`
- Modify: `messages/pt-BR.json`

**Why first:** Every subsequent task depends on these keys existing. Landing them up front means later tasks never fail typecheck on missing translations.

- [ ] **Step 1: Add `Navigation.trackRecord` and `Footer.trackRecord` (EN)**

Edit `messages/en.json`. Inside the `"Navigation"` object add `"trackRecord": "Track Record"`. Inside the `"Footer"` object add `"trackRecord": "Track Record"`.

Result for the `Navigation` block:

```json
"Navigation": {
  "services": "Services",
  "trackRecord": "Track Record",
  "about": "About",
  "contact": "Contact",
  "getInTouch": "Get in touch",
  "toggleMenu": "Toggle menu"
},
```

And in the `Footer` block, insert `"trackRecord": "Track Record"` after `"services"`:

```json
"services": "Services",
"trackRecord": "Track Record",
"about": "About",
```

- [ ] **Step 2: Add `About.storyP2_5` (EN)**

Still in `messages/en.json`, inside the `"About"` object, add a new key `storyP2_5` directly after `storyP2`:

```json
"storyP2_5": "Prior to Engram, I spent almost a decade as co-founder and CTO of Triniti, where our team worked alongside the leadership of organisations like HSBC, DBS, NAB, eftpos, Cathay, Aspen Medical, Fidelity, Permira and the Australian Government, and helped launch 25+ digital ventures across 12 countries. All told, that work contributed to more than $700M in value created — and taught me what actually moves the needle inside large organisations, as well as what doesn't.",
```

- [ ] **Step 3: Add `Metadata.trackRecordTitle` and `Metadata.trackRecordDescription` (EN)**

Find the `"Metadata"` object in `messages/en.json`. Add:

```json
"trackRecordTitle": "Track Record · Engram Ventures",
"trackRecordDescription": "Two decades of enterprise AI, platform and product work — led by Andre Gallo during his time as co-founder and CTO of Triniti, Engram's predecessor venture."
```

- [ ] **Step 4: Add the full `TrackRecord` namespace (EN)**

In `messages/en.json`, add a new top-level `"TrackRecord"` object (place it after `"About"`, before `"Services"` or wherever it keeps the file alphabetically-ish consistent — no strict order is enforced):

```json
"TrackRecord": {
  "label": "Track Record",
  "heading1": "Two decades of work",
  "heading2": "that shipped.",
  "subheading": "Enterprise-grade, under real constraints.",
  "attribution": "The engagements below were led by Andre Gallo during his time as co-founder and CTO of Triniti, Engram's predecessor venture. They're listed here because they represent the track record behind Engram's thinking — the same judgement, architecture and execution discipline you get when you work with us today.",
  "statsCaption": "The work cut across sectors, but the pattern was the same: AI, platforms and products delivered inside large, regulated organisations.",
  "stat1Value": "$700M+",
  "stat1Label": "Value created for enterprise clients and ventures",
  "stat2Value": "25+",
  "stat2Label": "Digital ventures launched and scaled",
  "stat3Value": "12+",
  "stat3Label": "Countries across Asia-Pacific, US and Australia",
  "stat4Value": "8+",
  "stat4Label": "Industries, from financial services to healthcare",
  "featuredLabel": "Selected engagements",
  "groupFinancialServices": "Financial Services & Capital Markets",
  "groupPublicSector": "Public Sector",
  "groupEnterprise": "Enterprise & Industry",
  "groupVentures": "Ventures launched",
  "ctaHeading": "Want the same discipline inside your organisation?",
  "ctaDescription": "Engram brings this track record to AI architecture, enterprise execution, and the hard decisions in between.",
  "ctaButton": "Start a conversation →"
}
```

- [ ] **Step 5: Mirror everything in pt-BR**

Edit `messages/pt-BR.json` and add equivalents for every key added in Steps 1-4.

`Navigation.trackRecord`:
```json
"trackRecord": "Trajetória",
```

`Footer.trackRecord`:
```json
"trackRecord": "Trajetória",
```

`About.storyP2_5`:
```json
"storyP2_5": "Antes da Engram, passei quase uma década como cofundador e CTO da Triniti, onde nosso time trabalhou ao lado da liderança de organizações como HSBC, DBS, NAB, eftpos, Cathay, Aspen Medical, Fidelity, Permira e o Governo Australiano, e ajudamos a lançar mais de 25 ventures digitais em 12 países. No total, esse trabalho contribuiu com mais de US$ 700M em valor gerado — e me ensinou o que de fato move a agulha dentro de grandes organizações, e também o que não move.",
```

`Metadata`:
```json
"trackRecordTitle": "Trajetória · Engram Ventures",
"trackRecordDescription": "Duas décadas de trabalho corporativo em IA, plataformas e produtos — liderado por Andre Gallo durante seu período como cofundador e CTO da Triniti, empresa que antecedeu a Engram."
```

`TrackRecord` namespace (pt-BR):
```json
"TrackRecord": {
  "label": "Trajetória",
  "heading1": "Duas décadas de trabalho",
  "heading2": "que chegou à produção.",
  "subheading": "Nível corporativo, sob restrições reais.",
  "attribution": "As iniciativas abaixo foram lideradas por Andre Gallo durante seu período como cofundador e CTO da Triniti, empresa que antecedeu a Engram. Elas estão aqui porque representam o histórico por trás do pensamento da Engram — o mesmo critério, arquitetura e disciplina de execução que você recebe ao trabalhar conosco hoje.",
  "statsCaption": "O trabalho atravessou setores, mas o padrão era o mesmo: IA, plataformas e produtos entregues dentro de grandes organizações reguladas.",
  "stat1Value": "US$ 700M+",
  "stat1Label": "Valor gerado para clientes corporativos e ventures",
  "stat2Value": "25+",
  "stat2Label": "Ventures digitais lançadas e escaladas",
  "stat3Value": "12+",
  "stat3Label": "Países na Ásia-Pacífico, EUA e Austrália",
  "stat4Value": "8+",
  "stat4Label": "Indústrias, de serviços financeiros a saúde",
  "featuredLabel": "Projetos selecionados",
  "groupFinancialServices": "Serviços Financeiros e Mercado de Capitais",
  "groupPublicSector": "Setor Público",
  "groupEnterprise": "Corporativo e Indústria",
  "groupVentures": "Ventures lançadas",
  "ctaHeading": "Quer a mesma disciplina dentro da sua organização?",
  "ctaDescription": "A Engram leva esse histórico para arquitetura de IA, execução corporativa e as decisões difíceis no meio do caminho.",
  "ctaButton": "Iniciar uma conversa →"
}
```

- [ ] **Step 6: Verify JSON is valid**

Run:

```bash
node -e "JSON.parse(require('fs').readFileSync('messages/en.json','utf8'))" && \
node -e "JSON.parse(require('fs').readFileSync('messages/pt-BR.json','utf8'))"
```

Expected: no output (exit 0). If it throws a SyntaxError, fix the trailing comma / missing brace.

- [ ] **Step 7: Run QA**

```bash
npm run qa
```

Expected: passes. next-intl may warn about unused keys — that's fine, they'll get consumed in later tasks.

- [ ] **Step 8: Commit**

```bash
git add messages/en.json messages/pt-BR.json
git commit -m "feat(i18n): add Track Record and About.storyP2_5 translations"
```

---

## Task 2: Add the new About paragraph

**Files:**
- Modify: `app/[locale]/about/page.tsx`

- [ ] **Step 1: Insert the new paragraph in the story block**

In `app/[locale]/about/page.tsx`, find the story section (around lines 72-77):

```tsx
<div className="space-y-5 font-body text-base font-light text-slate-dark leading-relaxed">
  <p>{t("storyP1")}</p>
  <p>{t("storyP2")}</p>
  <p>{t("storyP3")}</p>
  <p>{t("storyP4")}</p>
</div>
```

Insert a new `<p>` between `storyP2` and `storyP3`:

```tsx
<div className="space-y-5 font-body text-base font-light text-slate-dark leading-relaxed">
  <p>{t("storyP1")}</p>
  <p>{t("storyP2")}</p>
  <p>{t("storyP2_5")}</p>
  <p>{t("storyP3")}</p>
  <p>{t("storyP4")}</p>
</div>
```

- [ ] **Step 2: Run QA**

```bash
npm run qa
```

Expected: passes.

- [ ] **Step 3: Browser-verify**

Start dev server (skip if already running):

```bash
npm run dev
```

Visit `http://localhost:3000/about` and confirm the new paragraph renders between "I'm Andre Gallo..." and "AI has made that gap wider...". Visit `http://localhost:3000/pt-BR/about` and confirm the pt-BR version renders correctly.

- [ ] **Step 4: Commit**

```bash
git add app/[locale]/about/page.tsx
git commit -m "feat(about): add Triniti-era paragraph to founder story"
```

---

## Task 3: Build the LogoPlaceholder component

**Files:**
- Create: `components/LogoPlaceholder.tsx`

**Design:** Pure presentational component. Renders a text wordmark in the Engram palette. Two size variants (`default` and `featured`) and two style variants (`plain` — used by Variant Editorial — and `tile` — used by Variant Structured). Sits in `components/` next to `Navigation.tsx` and `Footer.tsx`.

- [ ] **Step 1: Write the component**

Create `components/LogoPlaceholder.tsx`:

```tsx
type LogoPlaceholderProps = {
  name: string;
  size?: "default" | "featured";
  style?: "plain" | "tile";
};

export default function LogoPlaceholder({
  name,
  size = "default",
  style = "plain",
}: LogoPlaceholderProps) {
  const sizeClasses =
    size === "featured"
      ? "text-xl md:text-2xl py-6 px-4"
      : "text-sm md:text-base py-3 px-3";

  const styleClasses =
    style === "tile"
      ? "border border-parchment-dark rounded-xs bg-white/50 hover:bg-white transition-colors"
      : "";

  return (
    <div
      className={`flex items-center justify-center font-display font-light text-navy tracking-tight text-center ${sizeClasses} ${styleClasses}`}
    >
      {name}
    </div>
  );
}
```

- [ ] **Step 2: Run QA**

```bash
npm run qa
```

Expected: passes.

- [ ] **Step 3: Commit**

```bash
git add components/LogoPlaceholder.tsx
git commit -m "feat(components): add LogoPlaceholder for wordmark rendering"
```

---

## Task 4: Build the shared content module

**Files:**
- Create: `app/[locale]/track-record/content.ts`

**Design:** Non-translatable configuration — just the logo name lists. The translation keys for sector group titles already live in `TrackRecord.group*`; this file only carries the data.

- [ ] **Step 1: Write the content module**

Create `app/[locale]/track-record/content.ts`:

```ts
export const featuredLogos = [
  "Aspen Medical",
  "Cathay Pacific",
  "Tricor (Permira)",
  "Athena",
] as const;

export type SectorGroupKey =
  | "groupFinancialServices"
  | "groupPublicSector"
  | "groupEnterprise"
  | "groupVentures";

export const sectorGroups: ReadonlyArray<{
  titleKey: SectorGroupKey;
  logos: ReadonlyArray<string>;
}> = [
  {
    titleKey: "groupFinancialServices",
    logos: [
      "DBS",
      "NAB",
      "HSBC",
      "eftpos",
      "Fidelity",
      "CompareAsia",
      "Tricor (Permira)",
      "Ascentium",
    ],
  },
  {
    titleKey: "groupPublicSector",
    logos: [
      "Australian Government",
      "Transport for NSW",
      "NSW Education",
      "FIAL",
    ],
  },
  {
    titleKey: "groupEnterprise",
    logos: ["Cathay Pacific", "Aspen Medical"],
  },
  {
    titleKey: "groupVentures",
    logos: [
      "Athena",
      "EarlyTrade",
      "Calven",
      "Striver",
      "Tribe",
      "imunis",
      "Pointer",
      "Training Paddock",
    ],
  },
];
```

- [ ] **Step 2: Run QA**

```bash
npm run qa
```

Expected: passes.

- [ ] **Step 3: Commit**

```bash
git add app/[locale]/track-record/content.ts
git commit -m "feat(track-record): add shared content module for logos and groups"
```

---

## Task 5: Build Variant Editorial (Variant A)

**Files:**
- Create: `app/[locale]/track-record/VariantEditorial.tsx`

**Design:** Left-aligned, magazine-like. Hero on navy. Attribution as pull-quote on parchment. Stats as inline row with vertical dividers. Featured row as plain wordmarks with hairline dividers. Logo wall as bibliography-style sector rows. CTA left-aligned on navy.

- [ ] **Step 1: Write the component**

Create `app/[locale]/track-record/VariantEditorial.tsx`:

```tsx
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import LogoPlaceholder from "@/components/LogoPlaceholder";
import { featuredLogos, sectorGroups } from "./content";

type Props = {
  locale: string;
};

export default async function VariantEditorial({ locale }: Props) {
  const t = await getTranslations({ locale, namespace: "TrackRecord" });

  const stats = [
    { value: t("stat1Value"), label: t("stat1Label") },
    { value: t("stat2Value"), label: t("stat2Label") },
    { value: t("stat3Value"), label: t("stat3Label") },
    { value: t("stat4Value"), label: t("stat4Label") },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="section-label text-ember mb-6">{t("label")}</div>
          <h1 className="font-display text-6xl md:text-7xl font-light text-parchment leading-tight max-w-2xl">
            {t("heading1")}
            <br />
            <em className="font-light text-ember">{t("heading2")}</em>
          </h1>
          <p className="font-body text-base font-light text-parchment/70 mt-6 max-w-xl">
            {t("subheading")}
          </p>
        </div>
      </section>

      {/* Attribution pull-quote */}
      <section className="bg-parchment py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="font-body text-lg font-light text-slate-dark leading-relaxed italic">
            {t("attribution")}
          </p>
        </div>
      </section>

      {/* Impact stats — inline row */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-y-0 md:divide-x md:divide-parchment-dark">
            {stats.map((s) => (
              <div key={s.label} className="md:px-6 first:md:pl-0 last:md:pr-0">
                <div className="font-display text-5xl md:text-6xl font-light text-navy mb-4">
                  {s.value}
                </div>
                <div className="font-body text-sm font-light text-slate-dark leading-relaxed">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
          <p className="font-body text-sm font-light text-slate-dark leading-relaxed mt-12 max-w-2xl">
            {t("statsCaption")}
          </p>
        </div>
      </section>

      {/* Featured row */}
      <section className="bg-parchment py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="section-label text-ember mb-10">{t("featuredLabel")}</div>
          <div className="grid grid-cols-2 md:grid-cols-4 md:divide-x md:divide-parchment-dark">
            {featuredLogos.map((name) => (
              <div key={name} className="md:px-4 first:md:pl-0 last:md:pr-0 flex items-center justify-center">
                <LogoPlaceholder name={name} size="featured" style="plain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logo wall — bibliography style */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6 space-y-14">
          {sectorGroups.map((group) => (
            <div key={group.titleKey}>
              <div className="section-label text-ember mb-5">
                {t(group.titleKey)}
              </div>
              <div className="flex flex-wrap gap-x-10 gap-y-4 font-display text-lg font-light text-navy">
                {group.logos.map((name) => (
                  <span key={name}>{name}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA — left aligned */}
      <section className="py-20 bg-navy">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-4xl md:text-5xl font-light text-parchment mb-6 max-w-2xl">
            {t("ctaHeading")}
          </h2>
          <p className="font-body text-base font-light text-parchment/80 max-w-xl mb-10 leading-relaxed">
            {t("ctaDescription")}
          </p>
          <Link href="/contact" className="btn-primary">
            {t("ctaButton")}
          </Link>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 2: Run QA**

```bash
npm run qa
```

Expected: passes.

- [ ] **Step 3: Commit**

```bash
git add app/[locale]/track-record/VariantEditorial.tsx
git commit -m "feat(track-record): add Variant Editorial layout"
```

---

## Task 6: Build Variant Structured (Variant B)

**Files:**
- Create: `app/[locale]/track-record/VariantStructured.tsx`

**Design:** Dense, cohesive with the rest of the site. Hero with inline metric strip. Attribution as a compact ◆ card. Stats as card tiles. Featured row as bordered tiles. Logo wall as titled sub-sections with tile grids. CTA centred.

- [ ] **Step 1: Write the component**

Create `app/[locale]/track-record/VariantStructured.tsx`:

```tsx
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import LogoPlaceholder from "@/components/LogoPlaceholder";
import { featuredLogos, sectorGroups } from "./content";

type Props = {
  locale: string;
};

export default async function VariantStructured({ locale }: Props) {
  const t = await getTranslations({ locale, namespace: "TrackRecord" });

  const stats = [
    { value: t("stat1Value"), label: t("stat1Label") },
    { value: t("stat2Value"), label: t("stat2Label") },
    { value: t("stat3Value"), label: t("stat3Label") },
    { value: t("stat4Value"), label: t("stat4Label") },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="section-label text-ember mb-6">{t("label")}</div>
          <h1 className="font-display text-6xl md:text-7xl font-light text-parchment leading-tight max-w-2xl">
            {t("heading1")}
            <br />
            <em className="font-light text-ember">{t("heading2")}</em>
          </h1>
          <p className="font-body text-base font-light text-parchment/70 mt-6 max-w-xl">
            {t("subheading")}
          </p>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 font-body text-sm font-light text-parchment/60">
            <span>{t("stat1Value")} value</span>
            <span aria-hidden>·</span>
            <span>{t("stat2Value")} ventures</span>
            <span aria-hidden>·</span>
            <span>{t("stat3Value")} countries</span>
          </div>
        </div>
      </section>

      {/* Attribution — compact card */}
      <section className="bg-parchment py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="card flex items-start gap-4">
            <span className="text-ember mt-1 text-xs shrink-0">◆</span>
            <p className="font-body text-base font-light text-slate-dark leading-relaxed">
              {t("attribution")}
            </p>
          </div>
        </div>
      </section>

      {/* Impact stats — card tiles */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="card">
                <div className="font-display text-4xl font-light text-navy mb-3">
                  {s.value}
                </div>
                <div className="font-body text-sm font-light text-slate-dark leading-relaxed">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
          <p className="font-body text-sm font-light text-slate-dark leading-relaxed mt-10 max-w-2xl">
            {t("statsCaption")}
          </p>
        </div>
      </section>

      {/* Featured row — bordered tiles */}
      <section className="bg-parchment py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="section-label text-ember mb-8">{t("featuredLabel")}</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {featuredLogos.map((name) => (
              <LogoPlaceholder key={name} name={name} size="featured" style="tile" />
            ))}
          </div>
        </div>
      </section>

      {/* Logo wall — sub-sections with tile grids */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6 space-y-14">
          {sectorGroups.map((group) => (
            <div key={group.titleKey}>
              <h3 className="font-display text-2xl font-light text-navy mb-6">
                {t(group.titleKey)}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {group.logos.map((name) => (
                  <LogoPlaceholder key={name} name={name} size="default" style="tile" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA — centred */}
      <section className="py-20 bg-navy">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-light text-parchment mb-6">
            {t("ctaHeading")}
          </h2>
          <p className="font-body text-base font-light text-parchment/80 max-w-md mx-auto mb-10 leading-relaxed">
            {t("ctaDescription")}
          </p>
          <Link href="/contact" className="btn-primary">
            {t("ctaButton")}
          </Link>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 2: Run QA**

```bash
npm run qa
```

Expected: passes.

- [ ] **Step 3: Commit**

```bash
git add app/[locale]/track-record/VariantStructured.tsx
git commit -m "feat(track-record): add Variant Structured layout"
```

---

## Task 7: Build the route entry

**Files:**
- Create: `app/[locale]/track-record/page.tsx`

**Design:** Reads `searchParams.v`. If `v === "b"` render `VariantStructured`, else `VariantEditorial`. Handles metadata (same for both variants). Mirrors the About page pattern for `generateMetadata` and `setRequestLocale`.

- [ ] **Step 1: Write the route**

Create `app/[locale]/track-record/page.tsx`:

```tsx
import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import VariantEditorial from "./VariantEditorial";
import VariantStructured from "./VariantStructured";

const siteUrl = "https://engram.ventures";

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ v?: string }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("trackRecordTitle"),
    description: t("trackRecordDescription"),
    alternates: {
      canonical: "/track-record",
      languages: {
        en: `${siteUrl}/track-record`,
        "pt-BR": `${siteUrl}/pt-BR/track-record`,
      },
    },
  };
}

export default async function TrackRecordPage({ params, searchParams }: Props) {
  const { locale } = await params;
  const { v } = await searchParams;
  setRequestLocale(locale);

  if (v === "b") {
    return <VariantStructured locale={locale} />;
  }
  return <VariantEditorial locale={locale} />;
}
```

- [ ] **Step 2: Run QA**

```bash
npm run qa
```

Expected: passes.

- [ ] **Step 3: Browser-verify both variants**

Start dev server (skip if already running):

```bash
npm run dev
```

Visit each URL and confirm the page renders end-to-end:

- `http://localhost:3000/track-record` — Variant Editorial (EN)
- `http://localhost:3000/track-record?v=b` — Variant Structured (EN)
- `http://localhost:3000/pt-BR/track-record` — Variant Editorial (pt-BR)
- `http://localhost:3000/pt-BR/track-record?v=b` — Variant Structured (pt-BR)

Check: hero, attribution, stats (4), featured row (4), logo wall (4 groups), CTA. No console errors.

- [ ] **Step 4: Commit**

```bash
git add app/[locale]/track-record/page.tsx
git commit -m "feat(track-record): add route entry with A/B variant switch"
```

---

## Task 8: Add Track Record link to navigation

**Files:**
- Modify: `components/Navigation.tsx`

- [ ] **Step 1: Add the link to the `links` array**

In `components/Navigation.tsx`, find the `links` array (around line 16):

```tsx
const links = [
  { href: "/services" as const, label: t("services") },
  { href: "/about" as const, label: t("about") },
  { href: "/contact" as const, label: t("contact") },
];
```

Insert the Track Record link between `services` and `about`:

```tsx
const links = [
  { href: "/services" as const, label: t("services") },
  { href: "/track-record" as const, label: t("trackRecord") },
  { href: "/about" as const, label: t("about") },
  { href: "/contact" as const, label: t("contact") },
];
```

- [ ] **Step 2: Run QA**

```bash
npm run qa
```

Expected: passes. If typecheck fails on the `href` string being unknown, next-intl's typed routes may need the route registered — add `"/track-record"` to any pathnames config in `i18n/routing.ts` if it exists. (Current `routing.ts` has no pathnames overrides, so this should just work.)

- [ ] **Step 3: Browser-verify**

Reload `http://localhost:3000/` (desktop + mobile viewport). Confirm `Track Record` appears in the nav and routes to `/track-record`. Repeat for `http://localhost:3000/pt-BR/` and confirm the label reads `Trajetória`.

- [ ] **Step 4: Commit**

```bash
git add components/Navigation.tsx
git commit -m "feat(nav): add Track Record link to main navigation"
```

---

## Task 9: Add Track Record link to footer

**Files:**
- Modify: `components/Footer.tsx`

- [ ] **Step 1: Add the link to `navLinks`**

In `components/Footer.tsx`, find the `navLinks` array (around line 8):

```tsx
const navLinks = [
  { href: "/" as const, label: t("home") },
  { href: "/services" as const, label: t("services") },
  { href: "/about" as const, label: t("about") },
  { href: "/contact" as const, label: t("contact") },
];
```

Update to:

```tsx
const navLinks = [
  { href: "/" as const, label: t("home") },
  { href: "/services" as const, label: t("services") },
  { href: "/track-record" as const, label: t("trackRecord") },
  { href: "/about" as const, label: t("about") },
  { href: "/contact" as const, label: t("contact") },
];
```

- [ ] **Step 2: Run QA**

```bash
npm run qa
```

Expected: passes.

- [ ] **Step 3: Commit**

```bash
git add components/Footer.tsx
git commit -m "feat(footer): add Track Record link"
```

---

## Task 10: Add Track Record to sitemap

**Files:**
- Modify: `app/sitemap.ts`

- [ ] **Step 1: Add the route**

In `app/sitemap.ts`, update the `routes` array to include `/track-record`:

```ts
const routes = [
  { path: "", changeFrequency: "monthly" as const, priority: 1 },
  { path: "/services", changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "/track-record", changeFrequency: "monthly" as const, priority: 0.85 },
  { path: "/about", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/contact", changeFrequency: "yearly" as const, priority: 0.7 },
];
```

- [ ] **Step 2: Run QA**

```bash
npm run qa
```

Expected: passes.

- [ ] **Step 3: Commit**

```bash
git add app/sitemap.ts
git commit -m "feat(sitemap): add /track-record route"
```

---

## Task 11: Final verification

**Files:** None (verification only).

- [ ] **Step 1: Full QA pass**

```bash
npm run qa
```

Expected: passes with zero errors.

- [ ] **Step 2: Production build smoke test**

```bash
npm run build
```

Expected: successful build. No next-intl missing-message warnings for the new keys.

- [ ] **Step 3: Browser checks — desktop breakpoint**

With `npm run dev` running, use the agent-browser CLI (per `AGENTS.md`) or a standard browser at ~1280px width and walk the following flows:

1. `/` → click `Track Record` in nav → lands on `/track-record` (Variant A).
2. `/track-record?v=b` → Variant B renders with card tiles, bordered logo placeholders, centred CTA.
3. `/about` → new paragraph is present between "I'm Andre Gallo..." and "AI has made that gap wider...".
4. Footer shows `Track Record` link on all pages.

- [ ] **Step 4: Browser checks — mobile breakpoint**

Resize to ~390px width. Repeat flows 1-4 above. Confirm:
- Featured row collapses to 2×2 in both variants.
- Logo wall wraps cleanly.
- Stats collapse to single column (Variant B) / 2-col (Variant A).
- CTA remains readable.

- [ ] **Step 5: Locale switch**

Visit `/pt-BR/track-record` and `/pt-BR/track-record?v=b`. Confirm:
- Nav reads `Trajetória`.
- Attribution renders in pt-BR.
- All sector group titles and stat labels are translated.
- Metadata `<title>` starts with `Trajetória`.

- [ ] **Step 6: Commit anything outstanding**

```bash
git status
```

Expected: clean working tree. If any formatter adjustments snuck in, commit them as `chore: formatting`.

- [ ] **Step 7: Summary for Andre**

Leave a short summary in the final response covering:
- Routes now live: `/track-record` (A), `/track-record?v=b` (B), plus pt-BR equivalents.
- About page change: new paragraph between P2 and P3.
- Known deferred items (real logo SVGs, future "Digital Product Development" service).
- Link to preview on dev server for A/B comparison.

---

## Out of scope (deferred)

- Real logo SVGs — placeholders only in this PR.
- Case-study detail pages — intentionally omitted.
- Adding a fourth service on `/services` — future work.
- Any changes to home or services copy — out of scope.
