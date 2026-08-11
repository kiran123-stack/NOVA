---
name: Obsidian Cinema
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
  on-surface-variant: '#c4c7c7'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c9c6c5'
  primary: '#c9c6c5'
  on-primary: '#313030'
  primary-container: '#050505'
  on-primary-container: '#797777'
  inverse-primary: '#5f5e5e'
  secondary: '#adc6ff'
  on-secondary: '#002e6a'
  secondary-container: '#0566d9'
  on-secondary-container: '#e6ecff'
  tertiary: '#c1c7cf'
  on-tertiary: '#2b3137'
  tertiary-container: '#020509'
  on-tertiary-container: '#71787f'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c9c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#dde3eb'
  tertiary-fixed-dim: '#c1c7cf'
  on-tertiary-fixed: '#161c22'
  on-tertiary-fixed-variant: '#41474e'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  headline-xl:
    fontFamily: Sora
    fontSize: 72px
    fontWeight: '700'
    lineHeight: 80px
    letterSpacing: 0.05em
  headline-lg:
    fontFamily: Sora
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: 0.02em
  headline-lg-mobile:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: 0.02em
  headline-md:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
    letterSpacing: 0.01em
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: '0'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: '0'
  label-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 32px
  margin-desktop: 80px
  margin-mobile: 24px
---

## Brand & Style

The design system embodies "Dark Luxury Tech," positioning the product as a pinnacle of engineering and cinematic power. The visual narrative is built on a foundation of obsidian surfaces, evoking the sleek, cold feel of premium aluminum and glass. 

The aesthetic style is **Cinematic Minimalism** blended with **Glassmorphism**. It utilizes deep black environments to make high-resolution product photography feel immersive and infinite. High-contrast typography and subtle light-leak effects (soft glows) guide the user's focus, creating a professional yet futuristic interface that feels both powerful and understated.

## Colors

The palette is strictly controlled to maintain a premium, high-fidelity atmosphere.

- **Primary (Obsidian):** `#050505` serves as the absolute base, providing a "true black" canvas that disappears behind the hardware.
- **Secondary (Electric Blue):** `#3B82F6` is used sparingly for interactive highlights, status indicators, or subtle inner glows to represent high-performance energy.
- **Tertiary (Silver/Chrome):** `#E2E8F0` provides crisp, metallic accents for dividers, icons, and secondary text.
- **Surface (Charcoal):** `#0A0A0A` defines the boundaries of elevated containers and UI panels, creating a subtle distinction from the background.

## Typography

The typography strategy is editorial and bold. 

**Headlines** utilize a geometric sans-serif with wide apertures to feel futuristic and open. For larger displays, generous letter spacing (tracking) is applied to emphasize the "luxury" aspect of the brand.

**Body copy** is optimized for high legibility on dark backgrounds, using a contemporary typeface that maintains clarity even at lower brightness levels.

**Labels and Metadata** are set in a technical, monospaced-influenced sans-serif, often in all-caps with wide tracking to evoke a sense of precision engineering and developer-grade hardware.

## Layout & Spacing

This design system employs a **Fixed Grid** philosophy for desktop to maintain a cinematic, magazine-like composition, while transitioning to a **Fluid Grid** for mobile.

- **Desktop (1440px+):** 12-column grid with ultra-wide margins (80px) to allow the product imagery to "breathe."
- **Tablet (768px - 1439px):** 8-column grid with 40px margins.
- **Mobile (<767px):** 4-column grid with 24px margins.

Spacing follows a strict 8px linear scale. Large-scale vertical rhythm (64px, 128px) should be used between major sections to prevent the UI from feeling cluttered. Content should be centered or asymmetrically balanced to emphasize the product’s geometry.

## Elevation & Depth

Depth is not achieved through traditional shadows, but through **light and transparency**.

1.  **Backdrop Blurs:** Floating panels use high-density background blurs (20px-40px) with a semi-transparent `#0A0A0A` (80% opacity) fill.
2.  **Ultra-Thin Borders:** Layers are separated by 1px "hairline" borders using `#E2E8F0` at 10-15% opacity. This mimics the edge of polished metal or glass.
3.  **Inner Glows:** For active states or primary containers, a subtle 1px inner stroke of the primary blue or a soft outer glow (blur 15px, opacity 20%) creates a sense of hardware illumination.
4.  **Tonal Stacking:** Higher-level elements use a lighter charcoal (`#141414`) than the base level to indicate priority.

## Shapes

The shape language is **Soft (0.25rem)**, mirroring the precision-milled corners of high-end laptop chassis. 

Avoid high-radius curves or "bubbly" aesthetics. Rectilinear shapes are preferred for structural elements, with subtle rounding applied only to soften the "bite" of the interface. Interaction elements like buttons may use slightly more rounding (`rounded-lg`) to distinguish them from structural containers.

## Components

### Buttons
- **Primary:** Solid White (`#FFFFFF`) with Black text. No shadow; high contrast.
- **Secondary:** Ghost style with an ultra-thin silver border and a subtle hover glow.
- **Icon Buttons:** Circular or slightly rounded squares with no background until hovered.

### Cards & Containers
- Utilize the glassmorphism effect. Borders should be visible but extremely faint.
- Hover states should trigger a slight increase in border opacity or a subtle primary-blue "bloom" effect from the top corner.

### Input Fields
- Dark backgrounds (`#050505`) with a 1px bottom border only, or a fully enclosed ultra-thin border. 
- Active states should glow with the secondary blue light.

### Chips & Badges
- Small, uppercase labels. 
- Backgrounds should be low-opacity tints of the accent colors (e.g., Blue at 10% opacity) to feel like status LEDs.

### Lists
- Separated by thin silver dividers (`#E2E8F0` at 10%). 
- Large vertical padding (16px-24px) per item to maintain the premium feel.

### Additional Components
- **Spec Grid:** A high-contrast grid for displaying technical hardware specifications.
- **Cinematic Hero:** A full-width, full-height container designed to house 4K video or high-res renders with overlayed typography.