---
name: Care & Bloom
description: AI-native brand house for colorful physical health empires.
colors:
  mineral-ink: "oklch(16% 0.018 282)"
  mineral-ink-soft: "oklch(23% 0.024 282)"
  ash-paper: "oklch(92% 0.014 88)"
  ash-paper-dim: "oklch(82% 0.018 88)"
  bloom-coral: "oklch(66% 0.19 31)"
  lab-cobalt: "oklch(58% 0.17 257)"
  pulse-lime: "oklch(72% 0.18 142)"
  signal-yellow: "oklch(82% 0.16 88)"
  talent-magenta: "oklch(63% 0.20 334)"
typography:
  display:
    fontFamily: "Archivo, Arial Narrow, system-ui, sans-serif"
    fontSize: "clamp(4.5rem, 13vw, 13rem)"
    fontWeight: 800
    lineHeight: 0.88
    letterSpacing: "0"
  headline:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 5rem)"
    fontWeight: 760
    lineHeight: 0.96
    letterSpacing: "0"
  body:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 430
    lineHeight: 1.62
    letterSpacing: "0"
  label:
    fontFamily: "Azeret Mono, ui-monospace, monospace"
    fontSize: "0.72rem"
    fontWeight: 520
    lineHeight: 1.2
    letterSpacing: "0"
rounded:
  none: "0"
  sm: "2px"
  md: "6px"
spacing:
  hairline: "1px"
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "48px"
  xl: "clamp(72px, 11vw, 160px)"
components:
  index-link:
    backgroundColor: "transparent"
    textColor: "{colors.ash-paper}"
    typography: "{typography.display}"
    rounded: "{rounded.none}"
    padding: "0"
  proof-pill:
    backgroundColor: "{colors.mineral-ink-soft}"
    textColor: "{colors.ash-paper}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "8px 10px"
---

# Design System: Care & Bloom

## 1. Overview

**Creative North Star: "The Operating Index"**

Care & Bloom should feel like a company directory, a thesis board, and a live operating room collapsed into one surface. The Elevator Goods reference gives the skeleton: giant words, small evidence, peripheral instruments, very little decoration. Care & Bloom's version must be hungrier, more colorful, more AI-native, and more physical.

The page opens as an index, not a sales page: Mission, Brands, Capital, Talents. Each word is a door into a different operating truth. The system should feel institutionally calm at rest, then reveal vivid category color through hover, scroll, and section transitions.

**Key Characteristics:**
- Giant index typography as the primary interface.
- Muted mineral base with controlled bursts of category color.
- Sparse copy, proof fragments, and operating signals instead of generic pitch sections.
- Peripheral widgets that imply live markets, AI operations, supply-chain depth, and partner velocity.
- No conversion pressure in the first phase.

## 2. Colors

The palette is a mineral operating-room base interrupted by saturated brand signals.

### Primary
- **Mineral Ink** (`oklch(16% 0.018 282)`): Main dark surface, used when the white logo must hold authority.
- **Ash Paper** (`oklch(92% 0.014 88)`): Warm light surface for text reversals, panels, and high-contrast sections.

### Secondary
- **Bloom Coral** (`oklch(66% 0.19 31)`): The default living accent. Use for active index states and mission punctuation.
- **Lab Cobalt** (`oklch(58% 0.17 257)`): AI, operating system, intelligence, and capital logic.
- **Pulse Lime** (`oklch(72% 0.18 142)`): Growth, community, launch velocity, and market movement.
- **Signal Yellow** (`oklch(82% 0.16 88)`): Proof, numbers, and thesis callouts.
- **Talent Magenta** (`oklch(63% 0.20 334)`): Creators, experts, celebrity partners, and category faces.

### Neutral
- **Mineral Ink Soft** (`oklch(23% 0.024 282)`): Secondary dark panels and hover fields.
- **Ash Paper Dim** (`oklch(82% 0.018 88)`): Muted text on dark backgrounds.

### Named Rules

**The Color Intrusion Rule.** The page starts restrained. Color arrives as evidence of activity: hover, scroll, active section, proof fragments, and portfolio/category moments.

**No Healthcare Teal Rule.** Do not use teal as the default health cue. Health should come from thesis, products, expertise, and proof.

## 3. Typography

**Display Font:** Archivo, with Arial Narrow and system sans fallbacks
**Body Font:** Manrope, with system sans fallback
**Label Font:** Azeret Mono, used only for small operating details

**Character:** The type should feel stamped, compressed, operational, and loud without becoming tech cosplay. Display words are blunt doors. Body text is quiet and precise.

### Hierarchy
- **Display** (800, `clamp(4.5rem, 13vw, 13rem)`, `0.88`): Only for the four index words and rare oversized section openers.
- **Headline** (760, `clamp(2.25rem, 5vw, 5rem)`, `0.96`): Section thesis lines.
- **Body** (430, `1rem`, `1.62`): Explanatory copy, capped at 65-72ch.
- **Label** (520, `0.72rem`, `1.2`): Bracket numbers, system statuses, market notes, proof tags.

### Named Rules

**The Four Word Rule.** The hero has four dominant words only: Mission, Brands, Capital, Talents. Do not add a fifth pillar unless the company strategy changes.

## 4. Elevation

Depth should come from contrast, scale, scroll layering, and color state, not from soft SaaS shadows. Shadows are rare and only appear on active floating instruments or hovered proof objects.

### Shadow Vocabulary
- **Instrument Lift** (`0 18px 60px oklch(10% 0.02 282 / 0.28)`): Only for live peripheral widgets when they float above the index.

### Named Rules

**The Flat-At-Rest Rule.** Static surfaces are flat. If something lifts, it must be reacting to user intent or live status.

## 5. Components

### Index Links
- **Shape:** No container, no card, no rounded pill.
- **Default:** Huge ash-paper or mineral-ink word with bracket number.
- **Hover / Focus:** Word shifts to the section color, moves up slightly, and reveals one concise proof phrase.
- **Active:** Background or peripheral instruments can tint, but the word remains readable first.

### Proof Pills
- **Shape:** Small rectangles with 6px radius.
- **Role:** `$80M+`, `4-8 weeks`, `Asia`, `Manufacturing`, `AI OS`, `Partner-owned`.
- **Behavior:** Appear near relevant sections, never as a hero-metric template.

### Peripheral Instruments
- **Style:** Small, technical, sparse. Examples: market pulse, AI OS status, city/region time, category color dial, supply-chain note.
- **Motion:** Slow enough to feel live, not decorative. Must pause or simplify under `prefers-reduced-motion`.

### Sections
- **Mission:** Thesis-first. Physical moats over cheap digital tooling.
- **Brands:** Portfolio/category energy. This is the most colorful section.
- **Capital:** Investor-grade calm. Use cobalt and proof fragments.
- **Talents:** Human network, experts, celebrities, founders. Use magenta sparingly but memorably.

### Navigation
- **Desktop:** Logo fixed top-left or top-center, small utility/status elements at edges.
- **Mobile:** Logo top-center, four words stacked cleanly, peripheral instruments reduced to one compact status line.

## 6. Do's and Don'ts

### Do:
- **Do** use the provided white Care & Bloom logo.
- **Do** keep the Elevator Goods influence structural: giant index, sparse peripheral details, strong restraint.
- **Do** make the Care & Bloom version more colorful, AI-native, and operational.
- **Do** use color as activity, not wallpaper.
- **Do** make Mission the first word and first section.
- **Do** keep proof concrete: `$80M+`, `3 years`, `4-8 weeks`, manufacturing, regulatory, community, partner ownership.

### Don't:
- **Don't** copy Elevator Goods' paper, coral, globe, clock, or exact company-directory feel.
- **Don't** preserve the current Care & Bloom site style.
- **Don't** preserve the DTC deck visual style.
- **Don't** use generic healthcare teal, sterile wellness minimalism, SaaS-purple gradients, bland DTC cards, or conservative investor-deck energy.
- **Don't** use gradient text, glassmorphism, side-stripe borders, nested cards, or the hero-metric template.
- **Don't** make this a conversion funnel in phase one.
