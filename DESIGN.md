---
name: Obsidian Nexus
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c2c6d8'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8c90a1'
  outline-variant: '#424656'
  surface-tint: '#b3c5ff'
  primary: '#b3c5ff'
  on-primary: '#002b75'
  primary-container: '#0066ff'
  on-primary-container: '#f8f7ff'
  inverse-primary: '#0054d6'
  secondary: '#dcb8ff'
  on-secondary: '#480081'
  secondary-container: '#7701d0'
  on-secondary-container: '#dcb7ff'
  tertiary: '#00dbe7'
  on-tertiary: '#00363a'
  tertiary-container: '#007e85'
  on-tertiary-container: '#e0fdff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dae1ff'
  primary-fixed-dim: '#b3c5ff'
  on-primary-fixed: '#001849'
  on-primary-fixed-variant: '#003fa4'
  secondary-fixed: '#efdbff'
  secondary-fixed-dim: '#dcb8ff'
  on-secondary-fixed: '#2c0051'
  on-secondary-fixed-variant: '#6700b5'
  tertiary-fixed: '#74f5ff'
  tertiary-fixed-dim: '#00dbe7'
  on-tertiary-fixed: '#002022'
  on-tertiary-fixed-variant: '#004f54'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 72px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-page: 40px
  stack-xs: 4px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
  stack-xl: 80px
---

## Brand & Style

This design system is engineered for a high-end software development agency, emphasizing technical precision, architectural integrity, and future-forward innovation. The aesthetic combines a minimalist dark-mode foundation with high-tech SaaS accents, evoking the feeling of a sophisticated IDE or a high-performance command center.

The brand personality is authoritative yet visionary. It signals "high-quality engineering" through meticulous attention to detail—specifically through the use of micro-interactions, subtle light play, and a restrained but punchy color palette. The goal is to instill absolute trust in the agency's ability to solve complex digital problems while maintaining a premium, bespoke feel.

## Colors

The color strategy centers on "Deep Obsidian" surfaces to create an infinite depth effect. The palette is strictly managed to ensure high contrast and a technological vibe:

*   **Primary (Electric Blue):** Used for primary actions, focus states, and key brand identifiers. It represents logic and stability.
*   **Secondary (Neon Violet):** Used for accent moments, complex gradients, and high-energy highlights. It represents creativity and "the magic" of code.
*   **Tertiary (Soft Cyan):** Reserved for success states, data visualizations, and subtle "glow" effects to lift elements off the dark background.
*   **Neutral Palette:** A series of ultra-dark grays and obsidians serve as the canvas. 1-pixel borders should utilize a semi-transparent white (10-15% opacity) or subtle linear gradients to define edges without adding visual noise.

## Typography

This design system utilizes a high-contrast typographic scale to differentiate between marketing narrative and technical data.

*   **Headlines:** Plus Jakarta Sans provides a modern, geometric feel with tight kerning for a bold, "tech-heavy" presence.
*   **Body Text:** Inter is utilized for its exceptional legibility in dark-mode environments, ensuring long-form documentation and case studies remain accessible.
*   **Technical Labels:** JetBrains Mono is introduced for small labels, tags, and code snippets to reinforce the software engineering DNA of the agency.

Text colors should strictly follow a hierarchy: Pure white (#FFFFFF) for headlines, and a muted zinc/gray (#A1A1AA) for body text to reduce eye strain.

## Layout & Spacing

The layout is built on a strict 8px rhythm, ensuring mathematical harmony across all components. 

The system uses a **12-column fluid grid** for internal application pages, while marketing layouts utilize a **fixed grid** centered at 1280px to maintain premium whitespace. Large-scale sections should be separated by "stack-xl" units to allow the minimalist aesthetic to breathe. Padding within components (like cards and buttons) should follow the 8px increments to maintain a crisp, structured appearance.

## Elevation & Depth

In this dark-mode environment, depth is not created with traditional black shadows, but through **Tonal Layering** and **Luminescence**:

1.  **Surfaces:** Backgrounds start at #0a0a0a. Elevated elements (cards, modals) use #0f0f12 with a subtle 1px border.
2.  **Glassmorphism:** Use backdrop-blur (minimum 12px) and 60% opacity on elevated containers. This simulates frosted glass and maintains context.
3.  **Soft Glows:** High-priority elements use a secondary "drop shadow" consisting of a diffused, low-opacity primary color (Electric Blue) to simulate a light source from behind the component.
4.  **Edge Lighting:** All elevated containers must feature a top-down linear gradient border (white at 15% to white at 2%) to simulate a "rim light" effect from a virtual light source.

## Shapes

The shape language balances "software rigidity" with "modern approachability." 

A base roundedness of **0.5rem (8px)** is used for standard components like input fields and buttons. This provides a clean, systematic look. Larger containers, such as feature cards or modals, should utilize **1rem (16px)** to emphasize the "Glassmorphism" effect and create a softer, more premium aesthetic. 

Interactive elements should never be sharp-edged (0px), as this creates a "brutalist" tone that conflicts with the high-end, premium goals of the design system.

## Components

### Buttons
*   **Primary:** Solid Electric Blue with a subtle inner glow. On hover, the background transitions to a gradient from Blue to Neon Violet.
*   **Secondary:** Ghost style with a 1px white border (20% opacity) and JetBrains Mono text.

### Cards
*   **The "Tech-Glass" Card:** Background #0f0f12 at 80% opacity. 16px border radius. Backdrop-blur: 20px. 1px gradient border (Top-left to bottom-right: white at 20% to transparent).
*   **Glow State:** Upon hover, cards emit a soft 20px blur shadow of Neon Violet at 15% opacity.

### Inputs & Form Fields
*   Obsidian background (#050505) with a 1px border.
*   **Focus State:** The border transitions to a 1px solid Electric Blue with a 4px outer blue glow.

### Chips & Tags
*   Small, capsules-shaped (Pill).
*   Utilize semi-transparent backgrounds of the primary or secondary colors (10% opacity) with high-contrast text.

### Progress Indicators
*   Thin (2px) lines using a linear gradient from Electric Blue to Soft Cyan. These should be accompanied by a faint "glow" bar underneath to simulate light emission.