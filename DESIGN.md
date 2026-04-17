# Design System Document

## 1. Overview & Creative North Star: "The Tactile Desktop"

This design system is built to bridge the gap between digital utility and the premium physical sensation of high-end hardware. The Creative North Star is **"The Tactile Desktop"**—an editorial-inspired digital environment that treats software with the same reverence as a limited-edition coffee table book or a precision-engineered aluminum device.

To move beyond "standard" macOS aesthetics, we utilize intentional asymmetry and high-contrast typography scales. We reject the rigid, "boxed-in" layout of typical landing pages in favor of overlapping elements, expansive breathing room, and a sense of weightless depth. This is a system where the vibrant orange (`primary_container`) acts as a laser-precise focal point against a sophisticated, warm-neutral backdrop.

---

## 2. Colors & Surface Philosophy

The color palette is rooted in a warm, "warm-light" spectrum that avoids the sterile coldness of pure `#FFFFFF`.

- **The "No-Line" Rule:** 1px solid borders are strictly prohibited for sectioning. Boundaries are created through background shifts. For instance, a `surface_container_low` section should sit directly against a `surface` background to define a new content area.
- **Surface Hierarchy & Nesting:** Treat the UI as layers of fine paper. 
    - Base: `surface` (#fff8f5)
    - Content Sections: `surface_container_low` (#fff1e9)
    - High-Focus Cards: `surface_container_lowest` (#ffffff)
- **The "Glass & Gradient" Rule:** Use `surface_container_lowest` with a 70% opacity and a 20px backdrop-blur for floating navigation or panels.
- **Signature Textures:** For primary CTAs, do not use a flat fill. Use a subtle linear gradient from `primary` (#904d00) at 0% to `primary_container` (#ff8c00) at 100% to give buttons a "lit-from-within" glow.

---

## 3. Typography: The Editorial Scale

We use **Inter** (as the web-equivalent to San Francisco) to provide a clean, modernist foundation. The hierarchy is designed for an editorial feel, where the "Display" type is significantly larger than the body to create authority.

*   **Display (lg/md):** Reserved for Hero statements. Use `-0.02em` letter spacing to create a tight, professional "lockup" feel.
*   **Headline (lg/md):** Used for feature headers. These should be paired with generous vertical margins to let the content breathe.
*   **Body (lg):** The workhorse for product descriptions. Use a line height of `1.6` to ensure a premium reading experience.
*   **Label (md/sm):** Used for "Overlines" (the small text above headlines). Always use `uppercase` with `0.05em` letter spacing for these to denote a curated, archival style.

---

## 4. Elevation & Depth

We convey hierarchy through **Tonal Layering** and physics-based light simulation rather than structural lines.

- **The Layering Principle:** Stack `surface_container_highest` (#f3dfd1) elements behind `surface_container_lowest` (#ffffff) cards to create a natural, "raised" effect. 
- **Ambient Shadows:** Shadows must be felt, not seen. Use `on_surface` (#241912) at 4% opacity with a `40px` blur and `12px` Y-offset for hero screenshots. This mimics the soft ambient occlusion of a device sitting on a physical desk.
- **The "Ghost Border" Fallback:** If a container must be defined against an identical background, use `outline_variant` (#ddc1ae) at 15% opacity. Never use 100% opaque outlines.
- **Glassmorphism:** Use for the "Mac App" window feel. Apply `surface_container_low` at 60% opacity with a `16px` backdrop-blur for sidebars or floating utility panels.

---

## 5. Components

### Buttons
- **Primary ("Download for Mac"):** High-contrast. Gradient from `primary` to `primary_container`. Text color: `on_primary` (#ffffff). Shape: `md` (0.75rem) or `full` for a modern pill.
- **Secondary:** Surface-based. `surface_container_highest` background with `on_surface` text. No border.

### Product Hero Screenshot
- **The "App-in-App" Frame:** The screenshot should not be a flat image. Wrap it in a container with a `xl` (1.5rem) corner radius, an ambient shadow, and a `surface_variant` header bar to mimic the macOS window chrome.

### Feature Sections
- **Asymmetric Grid:** Instead of a 3-column grid, use a 2-column layout where one side is a `headline-lg` and the other is a `body-lg` description.
- **No Dividers:** Use `80px` to `120px` of vertical white space (Spacing Scale) to separate feature blocks.

### Input Fields
- **Styling:** Use `surface_container_lowest` as the fill. On focus, transition the background to `surface_bright` and add a `2px` "glow" using `primary_container` at 30% opacity.

---

## 6. Do's and Don'ts

### Do:
- **Do** use `primary_container` (#FF8C00) sparingly as a "highlighter"—for icons, links, and the main CTA only.
- **Do** lean into white space. If a section feels crowded, double the padding.
- **Do** use "Optical Sizing" for typography; larger headers should have slightly tighter tracking than body text.

### Don't:
- **Don't** use black (#000000) for text. Use `on_surface` (#241912) to maintain the warm, premium tonal quality.
- **Don't** use 90-degree corners. Everything in this system must follow the macOS "Squircle" philosophy using the `DEFAULT` (0.5rem) to `xl` (1.5rem) rounding scale.
- **Don't** use standard "Drop Shadows." Use the Ambient Shadow rule to ensure elements feel integrated into the "surface" rather than hovering awkwardly above it.