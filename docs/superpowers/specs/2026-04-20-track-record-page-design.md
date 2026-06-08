# Track Record page + About paragraph — design

**Date:** 2026-04-20
**Branch:** `feat/track-record-page`
**Status:** Approved by Andre Gallo, ready for implementation planning.

## Goal

Add weight to Engram's positioning by (a) introducing a weighty paragraph on the About page that establishes Andre's decade at Triniti, and (b) shipping a new `Track Record` page that surfaces the clients and ventures behind that experience — without claiming them as Engram clients.

The page must read as **Engram** (AI architecture, platform/product strategy, enterprise execution), not as **Triniti** (design sprints, venture building). Triniti provides provenance; Engram provides the voice.

## Non-goals

- No case-study detail pages (those live in Andre's pitch deck, not on the site).
- No dates, years, or timelines (Andre's request).
- No per-venture valuations (ages badly, dilutes Engram's focus).
- No real logo SVGs in the first cut — placeholders only (real logos deferred).
- No changes to `services` today (a future "Digital Product Development" service is coming but is out of scope here).

## Decisions locked during brainstorming

| Decision | Choice | Why |
|---|---|---|
| Attribution approach | Dedicated page, explicit Triniti framing | Andre has full IP rights; clearest and most defensible. |
| Page depth | Showcase + logo wall, no case studies | Case studies live in the pitch deck. |
| Headline figure | `$700M+` value created — single consolidated number | This is the real figure; it spans client work and ventures. |
| A/B axis | Layout/visual only. Copy identical. | Layout is the decision that changes how the page feels. |
| Logos | Text wordmark placeholders, Engram palette | Lower legal surface area; swap to real SVGs later. |

## Content — About page paragraph

**Insertion point:** New paragraph between the existing `storyP2` and `storyP3` in `app/[locale]/about/page.tsx`. Flow becomes: *who I am → what I did before → why AI changes the stakes → that's why Engram exists.*

Add new translation key `storyP2_5` (or rename keys if tidier — implementation plan will decide).

**EN:**
> Prior to Engram, I spent almost a decade as co-founder and CTO of Triniti, where our team worked alongside the leadership of organisations like HSBC, DBS, NAB, eftpos, Cathay, Aspen Medical, Fidelity, Permira and the Australian Government, and helped launch 25+ digital ventures across 12 countries. All told, that work contributed to more than $700M in value created — and taught me what actually moves the needle inside large organisations, as well as what doesn't.

**pt-BR:**
> Antes da Engram, passei quase uma década como cofundador e CTO da Triniti, onde nosso time trabalhou ao lado da liderança de organizações como HSBC, DBS, NAB, eftpos, Cathay, Aspen Medical, Fidelity, Permira e o Governo Australiano, e ajudamos a lançar mais de 25 ventures digitais em 12 países. No total, esse trabalho contribuiu com mais de US$ 700M em valor gerado — e me ensinou o que de fato move a agulha dentro de grandes organizações, e também o que não move.

## Content — Track Record page

### Route and nav

- Route: `app/[locale]/track-record/page.tsx`.
- Nav: add `Track Record` link between `Services` and `About` in `components/Navigation.tsx` and add matching `Navigation.trackRecord` translation keys.
- Metadata: `Metadata.trackRecordTitle`, `Metadata.trackRecordDescription` (both locales). Canonical + hreflang mirror the existing About page pattern.
- Sitemap: add the new route to `app/sitemap.ts`.

### Sections, in order

1. **Hero** (`bg-navy`, mirrors About hero)
   - Section label: `Track Record`
   - Headline (EN): *Two decades of work that shipped.* / *em:* *Enterprise-grade, under real constraints.*
   - Headline (pt-BR): *Duas décadas de trabalho que chegou à produção.* / *em:* *Nível corporativo, sob restrições reais.*

2. **Attribution** (`bg-parchment`)
   - EN: *The engagements below were led by Andre Gallo during his time as co-founder and CTO of Triniti, Engram's predecessor venture. They're listed here because they represent the track record behind Engram's thinking — the same judgement, architecture and execution discipline you get when you work with us today.*
   - pt-BR: *As iniciativas abaixo foram lideradas por Andre Gallo durante seu período como cofundador e CTO da Triniti, empresa que antecedeu a Engram. Elas estão aqui porque representam o histórico por trás do pensamento da Engram — o mesmo critério, arquitetura e disciplina de execução que você recebe ao trabalhar conosco hoje.*

3. **Impact stats** (`bg-white`)
   - `$700M+` — Value created for enterprise clients and ventures
   - `25+` — Digital ventures launched and scaled
   - `12+` — Countries across Asia-Pacific, US and Australia
   - `8+` — Industries, from financial services to healthcare
   - Caption (EN): *The work cut across sectors, but the pattern was the same: AI, platforms and products delivered inside large, regulated organisations.*
   - Caption (pt-BR): *O trabalho atravessou setores, mas o padrão era o mesmo: IA, plataformas e produtos entregues dentro de grandes organizações reguladas.*

4. **Featured row** (4 logo placeholders, `Selected engagements` micro-label)
   - Aspen Medical · Cathay Pacific · Tricor (Permira) · Athena

5. **Full logo wall** — grouped by sector
   - **Financial Services & Capital Markets** — DBS, NAB, HSBC, eftpos, Fidelity, CompareAsia, Tricor (Permira), Ascentium
   - **Public Sector** — Australian Government, Transport for NSW, NSW Education, FIAL
   - **Enterprise & Industry** — Cathay Pacific, Aspen Medical
   - **Ventures launched** — Athena, EarlyTrade, Calven, Striver, Tribe, imunis, Pointer, Training Paddock

6. **CTA** (`bg-navy`, mirrors About CTA)
   - EN headline: *Want the same discipline inside your organisation?*
   - EN sub: *Engram brings this track record to AI architecture, enterprise execution, and the hard decisions in between.*
   - EN button: *Start a conversation →*
   - pt-BR headline: *Quer a mesma disciplina dentro da sua organização?*
   - pt-BR sub: *A Engram leva esse histórico para arquitetura de IA, execução corporativa e as decisões difíceis no meio do caminho.*
   - pt-BR button: *Iniciar uma conversa →*
   - Links to `/contact`.

### Logo placeholder treatment

- Each logo is a text wordmark rendered in the Engram palette — no real logo assets.
- Suggested component: `<LogoPlaceholder name="..." />` — renders the name in `font-body` or a neutral sans, sized uniformly, with subtle border/background depending on variant.
- Sized consistently; featured row is visually larger than the wall row.
- Component isolates logo rendering so swapping to real SVGs later is a one-file change.

## Variant A — Editorial

*Feel: Stripe Press, FT Alphaville, senior-operator portfolio.*

- **Hero:** Left-aligned, wide margins, single-column max-width ~640px. No decoration.
- **Attribution:** Single column on `bg-parchment`, typeset as a pull-quote — `text-lg` body, italicised Triniti reference, generous vertical padding.
- **Impact stats:** Inline horizontal row, four figures separated by thin vertical rules. `font-display` light, large figures. Small-caps labels below. No cards, no boxes.
- **Featured row:** Four wordmark placeholders in a single row, generous whitespace, thin hairline dividers between each. Names read as names, not logos.
- **Logo wall:** Each sector group introduced by a small `text-ember` section label, followed by a single flowing row of wordmarks (wraps on mobile). Bibliography-like.
- **CTA:** Left-aligned on navy; headline, single-line sub, text-link-style button.

Overall: quiet, confident, magazine-like. Long scroll, low density, high whitespace.

## Variant B — Structured

*Feel: Stripe, Linear, Vercel — cohesive with the rest of engram.ventures today.*

- **Hero:** Navy with a muted inline metric strip under the headline — `$700M+ · 25+ ventures · 12 countries`. Signals "proof page" immediately.
- **Attribution:** Compact card on `bg-parchment`, thin border, `rounded-xs`, `◆` marker in `text-ember` — matches About credential pattern.
- **Impact stats:** Four card tiles in a grid, reusing the existing `card` class from About's Values section.
- **Featured row:** Four wordmark placeholders as bordered tiles (`rounded-xs`, `border-parchment-dark`), 4-up desktop / 2×2 mobile.
- **Logo wall:** Each sector as a titled sub-section with a tighter grid (3 or 4 across) of wordmark tiles.
- **CTA:** Centred on navy, matches About/Services CTA pattern exactly.

Overall: structured, scannable, on-brand. Higher density, clearer mobile hierarchy.

## Variant wiring

Use a URL query param: `/track-record` defaults to Variant A; `/track-record?v=b` renders Variant B. Single route, single set of metadata, single sitemap entry. Variant is read from `searchParams` in the page component and branches to either `<VariantA />` or `<VariantB />`.

Both variants must share content: section copy is pulled from `messages/*.json` once and passed into the variant components. No duplicated copy per variant.

## i18n

- New namespace `TrackRecord` in both `messages/en.json` and `messages/pt-BR.json`.
- New keys in `Metadata` (title + description) for the track-record page in both locales.
- New key `Navigation.trackRecord` in both locales.
- New About key `storyP2_5` in both locales.

## Files expected to change

- `app/[locale]/about/page.tsx` — add new `<p>` for `storyP2_5` in the story block.
- `app/[locale]/track-record/page.tsx` — new file, top-level route.
- `app/[locale]/track-record/VariantA.tsx` + `VariantB.tsx` (or equivalent structure).
- `components/LogoPlaceholder.tsx` — new component.
- `components/Navigation.tsx` — add `Track Record` link.
- `messages/en.json` + `messages/pt-BR.json` — new namespace + new keys.
- `app/sitemap.ts` — add new route.

## Acceptance criteria

- About page reads as a coherent founder story with the new paragraph inserted between existing P2 and P3.
- Track Record page loads at `/track-record` and `/pt-BR/track-record`.
- Both A and B variants are inspectable via the agreed toggle mechanism (URL param or sibling route).
- All copy is identical between A and B.
- Every logo on the page is a placeholder wordmark — no image assets required.
- Navigation includes `Track Record` (EN) and `Trajetória` (pt-BR).
- `npm run qa` passes on the branch.
- Verified via agent-browser CLI after `npm run dev`, at both desktop and mobile breakpoints, in EN and pt-BR.

## Out of scope (explicitly deferred)

- Real logo SVGs.
- Case-study detail pages.
- "Digital Product Development" as a fourth service on `/services`.
- Changing the current Engram venture positioning copy elsewhere on the site.
