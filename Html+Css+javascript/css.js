// Certainly! When diving into CSS, focusing on the following key topics can help you build a strong foundation and create well-designed web pages:

// Selectors:
// Basic selectors (element, class, id)
// Attribute selectors
// Pseudo-classes (:hover, :focus, :nth-child)
// Pseudo-elements (::before, ::after)

// Box Model:
// Understanding content, padding, border, and margin
// box-sizing property (content-box vs. border-box)

// Layout Techniques:
// Flexbox: for one-dimensional layouts (aligning items in rows or columns)
// Grid: for two-dimensional layouts (rows and columns)
// Positioning: static, relative, absolute, fixed, and sticky
// Float and Clear: for older layout methods

// Responsive Design:
// Media queries: using breakpoints to adjust styles for different screen sizes
// Mobile-first design principles
// Fluid grids and flexible images

// Typography:
// Font properties (font-family, font-size, font-weight)
// Line height, letter spacing
// Web fonts (Google Fonts, @font-face)

// Colors and Backgrounds:
// Color values (hex, RGB, RGBA, HSL, HSLA)
// Background properties (color, image, position, size, repeat)

// Transitions and Animations:
// Basic transitions (for smooth property changes)
// Keyframe animations (for more complex animations)

// Transforms:
// transform property (rotate, scale, translate, skew)
// CSS Variables (Custom Properties):

// Defining and using variables for maintainable and reusable styles
// Flexbox and Grid Advanced Techniques:

// Flexbox: alignment, wrapping, and distribution
// Grid: areas, gaps, auto-placement

// CSS Frameworks:
// Understanding popular frameworks like Bootstrap, Tailwind CSS, and their utility
// Accessibility:

// Ensuring styles do not hinder usability (e.g., high contrast for readability)
// Performance Optimization:

// Minifying CSS
// Reducing redundancy and improving efficiency

//what is Z-Index in CSS
// it is used to check the stack, how it will overlap over each other

// --- MODERN CSS (2026 Interview Level — 4+ yrs) ---

// Container Queries (@container):
// Responsive components based on parent size, not just viewport
// @container (min-width: 400px) { ... }
// container-type: inline-size

// CSS :has() Selector (Parent Selector):
// Select parent based on children — .card:has(img) { ... }
// Game-changer for conditional styling without JS

// CSS Nesting (Native):
// No preprocessor needed — .parent { .child { color: red; } }
// Supported natively in all modern browsers

// CSS Subgrid:
// Nested grids inherit parent grid tracks
// grid-template-rows: subgrid, grid-template-columns: subgrid

// View Transitions API:
// Smooth page transitions (SPA & MPA)
// document.startViewTransition(() => updateDOM())

// Scroll-Driven Animations:
// animation-timeline: scroll() or view()
// Progress-based animations tied to scroll position

// CSS Layers (@layer):
// Managing specificity at scale
// @layer base, components, utilities;
// Helps with third-party CSS conflicts

// Fluid Typography & Spacing:
// clamp(1rem, 2.5vw, 2rem) for responsive font sizes
// min() and max() for dynamic sizing

// Logical Properties:
// margin-inline, padding-block instead of left/right
// Essential for RTL/LTR internationalization support

// :focus-visible vs :focus:
// :focus-visible → only shows for keyboard navigation (accessibility best practice)
// :focus → shows for all focus events including mouse clicks

// content-visibility:
// content-visibility: auto for rendering performance
// Skips rendering off-screen content

// CSS Anchor Positioning API:
// Position elements relative to other elements (tooltips, popovers)
// anchor-name and position-anchor properties

// CSS Color Level 4:
// oklch(), oklab() for perceptually uniform colors
// color-mix() for dynamic color blending
// Relative color syntax for theme generation

// Popover + Dialog Styling:
// ::backdrop pseudo-element for dialogs
// Styling native <dialog> and popover elements

// ===================================================================
// DETAILED EXPLANATIONS — MODERN CSS (2026 Interview Level)
// ===================================================================

// --- Container Queries (@container) ---
// Problem: Media queries respond to VIEWPORT size, but components live inside
// containers of varying sizes (sidebar, main content, modal).
// Container queries let components respond to their PARENT's size.
//
// Example:
// .card-container {
//   container-type: inline-size;   /* Enable container queries */
//   container-name: card;          /* Optional name */
// }
//
// /* When parent is > 400px wide, show horizontal layout */
// @container card (min-width: 400px) {
//   .card {
//     display: flex;
//     flex-direction: row;
//   }
// }
//
// /* When parent is small, stack vertically */
// @container card (max-width: 399px) {
//   .card {
//     display: flex;
//     flex-direction: column;
//   }
// }
//
// Why it matters: A card component in a sidebar (300px) and main content (800px)
// can have different layouts using the SAME component — no custom classes needed.
// Interview angle: "How would you make a component responsive regardless of where it's placed?"

// --- CSS :has() Selector (Parent Selector) ---
// The most significant CSS addition in years. Select a parent based on its children.
// Before :has(), this was impossible without JavaScript.
//
// Examples:
//
// /* Style card differently if it contains an image */
// .card:has(img) {
//   grid-template-rows: 200px 1fr;
// }
//
// /* Style form when it contains an invalid input */
// form:has(:invalid) {
//   border: 2px solid red;
// }
//
// /* Style label when its associated input is focused */
// label:has(+ input:focus) {
//   color: blue;
//   font-weight: bold;
// }
//
// /* Show/hide without JavaScript — toggle content based on checkbox */
// .filters:has(#show-veg:checked) .non-veg-item {
//   display: none;
// }
//
// /* Select previous sibling using :has() */
// li:has(+ li.active) {
//   /* This selects the li BEFORE the active one */
//   border-right: none;
// }
//
// Interview angle: "How would you conditionally style a parent based on child state?"

// --- CSS Nesting (Native) ---
// Write nested selectors directly in CSS — no Sass/Less/PostCSS needed.
//
// /* Before (flat CSS) */
// .card { border: 1px solid #ddd; }
// .card .title { font-size: 1.2rem; }
// .card .title:hover { color: blue; }
// .card .body { padding: 1rem; }
//
// /* After (native nesting) */
// .card {
//   border: 1px solid #ddd;
//
//   .title {
//     font-size: 1.2rem;
//
//     &:hover {
//       color: blue;
//     }
//   }
//
//   .body {
//     padding: 1rem;
//   }
//
//   @media (max-width: 768px) {
//     padding: 0.5rem;
//   }
// }
//
// The & is optional for class/element selectors but required for pseudo-classes.
// Supported in all modern browsers since 2023.

// --- CSS Subgrid ---
// Problem: Nested grids can't align with the parent grid's tracks.
// Subgrid lets a child grid use its parent's row/column definitions.
//
// .product-grid {
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 1rem;
// }
//
// .product-card {
//   display: grid;
//   grid-template-rows: subgrid;   /* Use parent's row tracks */
//   grid-row: span 3;             /* Span 3 rows of parent */
// }
//
// /* Now all card images, titles, and prices align across cards
//    even if content heights differ */
//
// Use case: Product grids, pricing tables, any card layout where
// you want consistent row alignment across cards.

// --- View Transitions API ---
// Animate between page states (or full page navigations) with smooth transitions.
//
// /* CSS */
// ::view-transition-old(root) {
//   animation: fade-out 0.3s ease;
// }
// ::view-transition-new(root) {
//   animation: fade-in 0.3s ease;
// }
//
// /* Named transitions for specific elements */
// .hero-image {
//   view-transition-name: hero;
// }
//
// /* JavaScript */
// document.startViewTransition(() => {
//   // Update the DOM — the browser captures before/after snapshots
//   updateContent();
// });
//
// Works for SPAs (single-page apps) and MPAs (multi-page — Chrome 126+).
// Provides smooth transitions that previously required complex JS libraries.

// --- Scroll-Driven Animations ---
// Tie animations to scroll progress — no JavaScript scroll listeners needed.
//
// /* Animate a progress bar based on page scroll */
// .progress-bar {
//   animation: growWidth linear;
//   animation-timeline: scroll();   /* Tied to scroll position */
// }
//
// @keyframes growWidth {
//   from { width: 0%; }
//   to { width: 100%; }
// }
//
// /* Animate elements as they enter the viewport */
// .card {
//   animation: fadeIn linear both;
//   animation-timeline: view();     /* Tied to element visibility */
//   animation-range: entry 0% entry 100%;
// }
//
// @keyframes fadeIn {
//   from { opacity: 0; transform: translateY(50px); }
//   to { opacity: 1; transform: translateY(0); }
// }
//
// Replaces: Intersection Observer + requestAnimationFrame for scroll animations.
// Performance: Runs on the compositor thread — smooth 60fps, no jank.

// --- CSS Layers (@layer) ---
// Control specificity order without fighting selector weight.
//
// /* Define layer order — later layers override earlier ones */
// @layer reset, base, components, utilities;
//
// @layer reset {
//   * { margin: 0; padding: 0; box-sizing: border-box; }
// }
//
// @layer base {
//   a { color: blue; }
//   p { line-height: 1.6; }
// }
//
// @layer components {
//   .btn { padding: 8px 16px; background: blue; color: white; }
//   .card { border: 1px solid #ddd; }
// }
//
// @layer utilities {
//   .text-center { text-align: center; }
//   .hidden { display: none; }
// }
//
// /* Import third-party CSS into a specific layer */
// @import url('tailwind.css') layer(framework);
//
// Why it matters: Tailwind/Bootstrap CSS can be placed in a layer that your
// component styles automatically override, regardless of selector specificity.

// --- Fluid Typography with clamp() ---
// Responsive font sizes without media queries.
//
// h1 {
//   /* Min: 1.5rem, Preferred: 4vw, Max: 3rem */
//   font-size: clamp(1.5rem, 4vw, 3rem);
// }
//
// p {
//   font-size: clamp(1rem, 1.5vw, 1.25rem);
// }
//
// .container {
//   /* Fluid width with min and max */
//   width: clamp(320px, 90vw, 1200px);
//   margin-inline: auto;
// }
//
// .gap {
//   /* Fluid spacing */
//   padding: clamp(1rem, 3vw, 3rem);
// }
//
// How clamp(min, preferred, max) works:
// - Below min → uses min
// - Between min and max → uses preferred (scales with viewport)
// - Above max → uses max

// --- Logical Properties ---
// Replace physical directions (left/right/top/bottom) with logical ones
// for better internationalization (RTL/LTR support).
//
// /* Physical (English-only) */
// .card { margin-left: 1rem; padding-right: 2rem; border-top: 1px solid; }
//
// /* Logical (works for all languages) */
// .card {
//   margin-inline-start: 1rem;   /* Left in LTR, Right in RTL */
//   padding-inline-end: 2rem;    /* Right in LTR, Left in RTL */
//   border-block-start: 1px solid; /* Top regardless of direction */
// }
//
// /* Shorthand */
// .card {
//   margin-inline: 1rem 2rem;   /* start end */
//   padding-block: 1rem;        /* top and bottom */
//   inline-size: 300px;         /* width */
//   block-size: 200px;          /* height */
// }
//
// Interview angle: "How would you make your CSS work for RTL languages?"

// --- :focus-visible vs :focus ---
//
// :focus → triggers on ALL focus events (mouse click, keyboard tab, programmatic)
// :focus-visible → triggers ONLY when focus should be visible (keyboard navigation)
//
// /* Remove outline for mouse clicks, keep for keyboard */
// button:focus {
//   outline: none;          /* Remove default for all */
// }
// button:focus-visible {
//   outline: 2px solid blue; /* Show only for keyboard users */
//   outline-offset: 2px;
// }
//
// Why it matters: Users complain about ugly focus rings on button clicks,
// but removing them entirely breaks keyboard accessibility.
// :focus-visible is the correct solution.

// --- content-visibility ---
// Skip rendering of off-screen content for better performance.
//
// .long-list-item {
//   content-visibility: auto;
//   contain-intrinsic-size: 0 200px;  /* Placeholder height for layout */
// }
//
// How it works:
// - Elements below the viewport don't get their layout/paint calculated
// - Browser reserves space (contain-intrinsic-size) so scrollbar doesn't jump
// - When user scrolls to them, they render just-in-time
//
// Performance impact: Can reduce initial rendering time by 50%+ for long pages.
// Similar to virtualization in React, but CSS-only.

// --- CSS Anchor Positioning API ---
// Position elements relative to OTHER elements — native tooltips, popovers.
//
// .trigger {
//   anchor-name: --my-trigger;
// }
//
// .tooltip {
//   position: absolute;
//   position-anchor: --my-trigger;
//   top: anchor(bottom);           /* Position below the trigger */
//   left: anchor(center);          /* Horizontally centered */
//   position-try-fallbacks: flip-block;  /* Flip if no space below */
// }
//
// Replaces: Popper.js, Floating UI, custom JS positioning logic.
// Still relatively new — check browser support before using in production.

// --- CSS Color Level 4 ---
//
// oklch() — perceptually uniform colors (consistent perceived brightness)
// body { color: oklch(0.5 0.2 240); }  /* lightness chroma hue */
//
// color-mix() — blend two colors
// .btn-hover { background: color-mix(in oklch, var(--primary) 80%, black); }
//
// Relative color syntax — derive colors from a base
// :root { --primary: oklch(0.6 0.2 250); }
// .lighter { color: oklch(from var(--primary) calc(l + 0.2) c h); }
// .complementary { color: oklch(from var(--primary) l c calc(h + 180)); }
//
// Why oklch over hsl:
// - HSL "yellow" and "blue" at same lightness look very different in brightness
// - OKLCH maintains consistent perceived brightness across hues
// - Better for design systems and theme generation
