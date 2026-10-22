Here is the updated `.md` file with the requested questions added to the checklist index and fully answered under the answers section.

```markdown
# 🧱 HTML Master Interview Guide (2026 Edition)

> Consolidated prep checklist and deep-dive answers for 4+ Years Experience Frontend Engineer rounds.

---

### Quick Fundamental Questions

* **Difference between HTML Tag & Element** — *`High-Level Awareness Only`*
* **How to create a sidebar & main content layout without using Flexbox?** — *`Know Code + Implementation` (CSS Grid / Floats)*
* **How to do italic in HTML (`<i>` vs `<em>`)** — *`High-Level Awareness Only`*
* **How to do bold in HTML (`<b>` vs `<strong>`)** — *`High-Level Awareness Only`*
* **How many ways can we insert CSS into HTML? (Inline, Internal, External)** — *`High-Level Awareness Only`*
* **Difference between `id` attribute and `<div>` tag** — *`High-Level Awareness Only`*
* **How to write $2^2$ in HTML (`<sup>` tag)** — *`High-Level Awareness Only`*
* **What is a custom attribute in HTML & how to access it in JS?** — *`Know Code + Implementation`*
* **How does strikethrough work in HTML & what is the use of `<del>`?** — *`High-Level Awareness Only`*
* **What is the difference between `<span>` and `<div>`?** — *`High-Level Awareness Only`*

---

## ⚡ MODERN HTML (2026 Interview Level — 4+ yrs)

8. **What are semantic HTML5 elements and why do they matter for SEO & accessibility?**  
   *`Theory + Conceptual` (Document structure & Assistive Technology)*

9. **Explain the difference between `<article>`, `<section>`, `<aside>`, and `<div>`.**  
   *`Theory + Conceptual` (Thematic grouping & Syndication rules)*

10. **What is the purpose of the `<meta name="viewport">` tag for responsive design?**  
    *`High-Level Awareness Only` (Device scaling & DPI adjustments)*

11. **What are `data-*` attributes and how do you use them in JavaScript?**  
    *`Know Code + Implementation` (DOM `dataset` API & Event Delegation)*

12. **Explain `localStorage` vs `sessionStorage` vs `cookies` — storage limits, expiry, scope.**  
    *`Theory + Conceptual` (Security, Scope, and HTTP transfer overhead)*

13. **What is lazy loading of images (`loading="lazy"`)? When should you use it?**  
    *`High-Level Awareness Only` (Viewport threshold & LCP trade-offs)*

14. **What are Web Components? (Custom Elements, Shadow DOM, HTML Templates)**  
    *`Theory + Conceptual` (Native encapsulation & Style scoping)*

15. **What is the purpose of the `<picture>` element and `srcset` attribute?**  
    *`Know Code + Implementation` (Art direction & Resolution switching)*

16. **Explain the Critical Rendering Path — how does a browser render a page?**  
    *`Theory + Conceptual` (DOM/CSSOM tree building, Reflow, & Paint)*

17. **What are ARIA roles and when should you use them over semantic HTML?**  
    *`Theory + Conceptual` (First rule of ARIA & Custom Accessibility widgets)*

18. **What is the difference between `<script>`, `<script async>`, and `<script defer>`?**  
    *`Theory + Conceptual` (Parser-blocking vs Execution timing)*

19. **Explain the `<dialog>` element for native modals.**  
    *`Know Code + Implementation` (Focus trapping, `::backdrop`, & Escape key listeners)*

20. **What is the Popover API in HTML?**  
    *`High-Level Awareness Only` (Native top-layer popups without JS)*

21. **What are the benefits of using `<details>` and `<summary>` elements?**  
    *`High-Level Awareness Only` (Zero-JS native accordions)*

22. **What is the Content Security Policy (CSP) meta tag?**  
    *`High-Level Awareness Only` (XSS prevention & Resource loading restrictions)*

23. **How do you optimize HTML for Core Web Vitals (LCP, CLS, INP)?**  
    *`Theory + Conceptual` (`fetchpriority`, Layout reservations, & Off-main-thread tasks)*

24. **What is the `<template>` element and how is it used?**  
    *`Know Code + Implementation` (Inert HTML parsing & JS `cloneNode` usage)*

25. **Explain the difference between block-level and inline elements.**  
    *`High-Level Awareness Only` (Box model rendering & Margin constraints)*

26. **What is the purpose of the `rel="noopener noreferrer"` attribute on links?**  
    *`High-Level Awareness Only` (`window.opener` security & Referer leak prevention)*

27. **How does the Intersection Observer API work? (Lazy loading, infinite scroll)**  
    *`Know Code + Implementation` (Asynchronous viewport tracking)*

28. **What is a custom attribute in HTML and how do you access it in a JavaScript file?**  
    *`Know Code + Implementation` (`data-*` dataset API vs `getAttribute`)*

29. **How does strikethrough work in HTML and what is the difference between `<s>`, `<del>`, and `<strike>`?**  
    *`High-Level Awareness Only` (Semantic deletion vs Visual strike)*

30. **What is the difference between `<span>` and `<div>`?**  
    *`High-Level Awareness Only` (Inline vs Block display behavior)*

---

## 📖 ANSWERS (2026 Interview Level — 4+ yrs)

### 8. What are semantic HTML5 elements and why do they matter for SEO & accessibility?
**Semantic elements** describe the MEANING of the content, not just its appearance.

**Key semantic elements:** `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`, `<figure>`, `<figcaption>`, `<time>`, `<mark>`

**Why they matter:**
- **SEO:** Search engines understand page structure better. A `<nav>` tells Google "this is navigation," a `<main>` says "this is the primary content."
- **Accessibility:** Screen readers use semantic elements for navigation. Users can jump between `<section>`, `<article>`, `<nav>` directly.
- **Readability:** Code is self-documenting. `<aside>` is instantly clearer than `<div class="sidebar">`.

**Bad vs Good:**
```html
<!-- ❌ Non-semantic (div soup) -->
<div class="header">
  <div class="nav">...</div>
</div>
<div class="content">
  <div class="article">...</div>
</div>

<!-- ✅ Semantic -->
<header>
  <nav>...</nav>
</header>
<main>
  <article>...</article>
</main>

```

---

### 9. Explain the difference between `<article>`, `<section>`, `<aside>`, and `<div>`.

| Element | Purpose | When to use |
| --- | --- | --- |
| `<article>` | Self-contained content that makes sense on its own | Blog post, news article, product card, comment |
| `<section>` | Thematic grouping of content with a heading | Chapters, tab panels, grouped content |
| `<aside>` | Content tangentially related to surrounding content | Sidebar, pull quotes, related links, ads |
| `<div>` | No semantic meaning — generic container | Styling/layout wrapper only, no other element fits |

**Key rule:** If the content could be syndicated independently (shared as RSS, posted elsewhere), use `<article>`. If it's a thematic group within a page, use `<section>`.

---

### 10. What is the purpose of the `<meta>` viewport tag for responsive design?

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">

```

**What it does:**

* Tells the browser how to scale the page on mobile devices
* Without it, mobile browsers render at ~980px width and zoom out (page looks tiny)
* `width=device-width` — sets viewport width to the device's screen width
* `initial-scale=1.0` — sets initial zoom level to 100%

**Additional options:**

* `maximum-scale=1.0` — prevents user zooming (avoid — bad for accessibility)
* `user-scalable=no` — disables pinch-to-zoom (avoid — accessibility violation)

---

### 11. What are `data-*` attributes and how do you use them in JavaScript?

**`data-*` attributes** store custom data on HTML elements — private to the page, not displayed.

```html
<button data-product-id="456" data-action="add-to-cart" data-price="299">
  Add to Cart
</button>

```

**Accessing in JavaScript:**

```javascript
const button = document.querySelector('button');

// Using dataset (camelCase conversion)
console.log(button.dataset.productId);   // "456"
console.log(button.dataset.action);      // "add-to-cart"
console.log(button.dataset.price);       // "299"

// Using getAttribute
console.log(button.getAttribute('data-product-id')); // "456"

```

**Use cases:** Event delegation (store IDs on elements), configuration for JS widgets, passing server data to frontend without extra API calls.

**Note:** Don't use `data-*` for styling (use classes). Don't store sensitive data (visible in DOM).

---

### 12. Explain localStorage vs sessionStorage vs cookies.

| Feature | localStorage | sessionStorage | Cookies |
| --- | --- | --- | --- |
| Capacity | ~5-10 MB | ~5-10 MB | ~4 KB |
| Expiry | Never (manual clear) | Cleared on tab close | Configurable (Expires/Max-Age) |
| Sent to server | No | No | Yes (every HTTP request) |
| Scope | Same origin, all tabs | Same origin, same tab | Same origin (configurable path/domain) |
| Accessible from JS | Yes | Yes | Yes (unless HttpOnly) |
| Use case | User preferences, theme | Form wizard state, temp data | Auth tokens, session IDs |

**Security:**

* **Never store sensitive tokens in localStorage** — vulnerable to XSS
* **Cookies with HttpOnly + Secure + SameSite** — safest for auth tokens
* **sessionStorage** — automatically cleared, good for temporary state

---

### 13. What is lazy loading of images (`loading="lazy"`)? When should you use it?

```html
<img src="photo.jpg" loading="lazy" alt="Description" width="400" height="300">

```

**What it does:** The browser delays loading the image until it's about to enter the viewport (as user scrolls toward it).

**Benefits:**

* Faster initial page load (fewer resources downloaded upfront)
* Reduces bandwidth for users who don't scroll
* Improves Core Web Vitals (LCP if applied correctly)

**When to use:** Below-the-fold images, image galleries, long pages.

**When NOT to use:** Hero images, LCP images (above the fold) — these should load immediately. Use `loading="eager"` (default) for them.

**Also works on iframes:**

```html
<iframe src="video.html" loading="lazy"></iframe>

```

---

### 14. What are Web Components? (Custom Elements, Shadow DOM, HTML Templates)

**Web Components** are browser-native APIs for creating reusable, encapsulated custom elements — works without any framework.

**Three main APIs:**

1. **Custom Elements** — define your own HTML tags:

```javascript
class MyCard extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div class="card"><slot></slot></div>`;
  }
}
customElements.define('my-card', MyCard);

```

```html
<my-card>Hello World</my-card>

```

2. **Shadow DOM** — encapsulated DOM and CSS (styles don't leak in or out):

```javascript
class MyCard extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>.card { border: 1px solid #ccc; padding: 16px; }</style>
      <div class="card"><slot></slot></div>
    `;
  }
}

```

3. **HTML Templates** — inert HTML that's not rendered until cloned:

```html
<template id="card-template">
  <div class="card">
    <h2></h2>
    <p></p>
  </div>
</template>

```

---

### 15. What is the purpose of the `<picture>` element and `srcset` attribute?

**`<picture>` and `srcset**` provide responsive images — different image files for different screen sizes, resolutions, and formats.

**`srcset` on `<img>` — resolution switching:**

```html
<img
  src="photo-400.jpg"
  srcset="photo-400.jpg 400w, photo-800.jpg 800w, photo-1200.jpg 1200w"
  sizes="(max-width: 600px) 400px, (max-width: 1000px) 800px, 1200px"
  alt="Photo"
>

```

**`<picture>` — art direction + format selection:**

```html
<picture>
  <!-- Modern format (smaller file) -->
  <source srcset="photo.avif" type="image/avif">
  <source srcset="photo.webp" type="image/webp">
  <!-- Different crop for mobile -->
  <source media="(max-width: 600px)" srcset="photo-mobile.jpg">
  <!-- Fallback -->
  <img src="photo.jpg" alt="Photo">
</picture>

```

**Key difference:** `srcset` = same image, different resolutions. `<picture>` = different images/formats entirely.

---

### 16. Explain the Critical Rendering Path — how does a browser render a page?

The **Critical Rendering Path** is the sequence of steps the browser takes to convert HTML, CSS, and JS into pixels on screen.

**Steps:**

1. **Parse HTML** → Build **DOM** (Document Object Model) tree
2. **Parse CSS** → Build **CSSOM** (CSS Object Model) tree
3. **Combine DOM + CSSOM** → Build **Render Tree** (only visible elements)
4. **Layout (Reflow)** → Calculate exact position and size of each element
5. **Paint** → Fill in pixels (colors, borders, shadows, text)
6. **Composite** → Layer elements and render to screen (GPU-accelerated)

**What blocks rendering:**

* **CSS** is render-blocking (browser waits for CSSOM before painting)
* **JS** is parser-blocking (browser stops parsing HTML when it hits `<script>`)
* **Solution:** Use `async`/`defer` for scripts, inline critical CSS, preload key resources

**Optimization:**

* Minimize critical resources (CSS, JS needed for first render)
* Preload: `<link rel="preload" href="style.css" as="style">`
* Inline critical CSS in `<head>`
* Defer non-critical JS

---

### 17. What are ARIA roles and when should you use them over semantic HTML?

**ARIA (Accessible Rich Internet Applications)** attributes add accessibility information to elements for screen readers.

**Three types:**

1. **Roles** — what the element IS: `role="button"`, `role="dialog"`, `role="alert"`
2. **Properties** — characteristics: `aria-label="Close"`, `aria-required="true"`
3. **States** — current status: `aria-expanded="true"`, `aria-disabled="true"`

**Key rules:**

* **First rule of ARIA: Don't use ARIA if semantic HTML works.** `<button>` > `<div role="button">`
* Use ARIA when building custom widgets (dropdowns, tabs, modals) that don't have native HTML equivalents
* Always test with a screen reader

**Common uses:**

```html
<!-- Custom dropdown — needs ARIA because <div> has no semantics -->
<div role="combobox" aria-expanded="false" aria-haspopup="listbox">
  <input aria-label="Search restaurants" aria-autocomplete="list">
  <ul role="listbox" aria-label="Restaurants">
    <li role="option">Pizza Palace</li>
  </ul>
</div>

<!-- Live region — screen reader announces changes -->
<div aria-live="polite" aria-atomic="true">
  3 items in your cart
</div>

```

---

### 18. What is the difference between `<script>`, `<script async>`, and `<script defer>`?

| Attribute | HTML Parsing | Script Download | Script Execution |
| --- | --- | --- | --- |
| `<script>` | **Stops** parsing | Downloads | Executes, then parsing resumes |
| `<script async>` | Continues parsing | Downloads in parallel | **Stops** parsing to execute (when download completes) |
| `<script defer>` | Continues parsing | Downloads in parallel | Executes after HTML is fully parsed, before DOMContentLoaded |

**When to use:**

* `defer` → most scripts (guaranteed execution order, after parsing)
* `async` → independent scripts (analytics, ads) that don't depend on DOM or other scripts
* No attribute → only when the script must run at that exact point

```html
<head>
  <script defer src="app.js"></script>       <!-- Main app — needs DOM -->
  <script defer src="vendor.js"></script>     <!-- Runs BEFORE app.js (order preserved) -->
  <script async src="analytics.js"></script>  <!-- Independent, order doesn't matter -->
</head>

```

---

### 19. Explain the `<dialog>` element for native modals.

`<dialog>` is a native HTML element for modals/dialogs — handles focus trapping, backdrop, and Escape key automatically.

```html
<dialog id="orderModal">
  <h2>Confirm Order</h2>
  <p>Total: ₹599</p>
  <form method="dialog">
    <button value="cancel">Cancel</button>
    <button value="confirm">Confirm</button>
  </form>
</dialog>

<button onclick="document.getElementById('orderModal').showModal()">
  Place Order
</button>

<script>
  const dialog = document.getElementById('orderModal');

  dialog.addEventListener('close', () => {
    console.log(dialog.returnValue); // "cancel" or "confirm"
  });

  // Close on backdrop click
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) dialog.close();
  });
</script>

```

**Benefits over custom modals:**

* Native focus trapping (Tab stays inside dialog)
* Escape key closes it
* `::backdrop` pseudo-element for overlay styling
* `inert` — content behind dialog is automatically non-interactive
* Better accessibility — screen readers understand it

---

### 20. What is the Popover API in HTML?

The **Popover API** provides native, framework-free popovers (tooltips, dropdowns, menus) with built-in dismiss behavior.

```html
<!-- Declarative — no JavaScript needed -->
<button popovertarget="mypopover">Open Menu</button>
<div id="mypopover" popover>
  <p>This is a popover!</p>
  <a href="/profile">Profile</a>
  <a href="/settings">Settings</a>
</div>

```

**Key features:**

* **Auto-dismiss:** Clicking outside closes the popover (light dismiss)
* **Top layer:** Renders above all other content (no z-index fights)
* **Accessibility:** Built-in keyboard support
* **No JS required** for basic show/hide

**Types:**

* `popover="auto"` (default) — light dismiss, only one open at a time
* `popover="manual"` — no light dismiss, must be closed programmatically

---

### 21. What are the benefits of using `<details>` and `<summary>` elements?

Native, no-JS accordion/disclosure widget.

```html
<details>
  <summary>Order Details (#12345)</summary>
  <p>2x Margherita Pizza — ₹598</p>
  <p>1x Garlic Bread — ₹149</p>
  <p>Total: ₹747</p>
</details>

<!-- Open by default -->
<details open>
  <summary>FAQ: How long does delivery take?</summary>
  <p>Usually 30-45 minutes depending on your location.</p>
</details>

```

**Benefits:**

* Zero JavaScript for toggle behavior
* Accessible by default (keyboard navigable, screen reader support)
* Styleable with CSS (`details[open]`, `summary::marker`)
* `toggle` event for programmatic control
* Lightweight — reduces JS bundle size for simple accordions

---

### 22. What is the Content Security Policy (CSP) meta tag?

**CSP** is a security header (or meta tag) that tells the browser which sources are allowed for scripts, styles, images, etc. — prevents XSS and data injection.

```html
<meta http-equiv="Content-Security-Policy" content="
  default-src 'self';
  script-src 'self' [https://cdn.example.com](https://cdn.example.com);
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https:;
  connect-src 'self' [https://api.example.com](https://api.example.com);
  font-src 'self' [https://fonts.googleapis.com](https://fonts.googleapis.com);
">

```

**What each directive does:**

* `default-src 'self'` — only load resources from same origin by default
* `script-src` — where scripts can load from (blocks inline scripts!)
* `style-src` — where styles can load from
* `connect-src` — where fetch/XMLHttpRequest can connect to
* `img-src` — where images can load from

**This blocks:** Injected scripts, loading resources from unknown domains, inline event handlers (`onclick="..."`).

---

### 23. How do you optimize HTML for Core Web Vitals (LCP, CLS, INP)?

**LCP (Largest Contentful Paint) — load speed:**

* Preload hero image: `<link rel="preload" as="image" href="hero.webp">`
* Use `fetchpriority="high"` on LCP image
* Inline critical CSS, defer non-critical CSS
* Don't lazy-load above-the-fold images

**CLS (Cumulative Layout Shift) — visual stability:**

* Always set `width` and `height` on images/videos (browser reserves space)
* Use `aspect-ratio` CSS for responsive images
* Don't inject content above existing content dynamically
* Use `font-display: swap` with proper font fallbacks

**INP (Interaction to Next Paint) — responsiveness:**

* Break up long tasks with `requestIdleCallback` or `scheduler.yield()`
* Use `content-visibility: auto` for off-screen content
* Minimize main thread work in event handlers
* Use `will-change` for elements that animate

```html
<!-- Optimized hero image -->
<img src="hero.webp" alt="Hero" width="1200" height="600"
     fetchpriority="high" decoding="async">

<!-- Preload critical resources -->
<link rel="preload" href="hero.webp" as="image">
<link rel="preload" href="critical.css" as="style">
<link rel="preload" href="font.woff2" as="font" type="font/woff2" crossorigin>

```

---

### 24. What is the `<template>` element and how is it used?

`<template>` holds HTML that is NOT rendered on page load — it's an inert fragment you can clone and insert with JavaScript.

```html
<template id="product-card">
  <div class="card">
    <img src="" alt="">
    <h3 class="name"></h3>
    <p class="price"></p>
    <button>Add to Cart</button>
  </div>
</template>

<div id="products"></div>

<script>
  const template = document.getElementById('product-card');
  const container = document.getElementById('products');

  const products = [
    { name: 'Pizza', price: '₹299', img: 'pizza.jpg' },
    { name: 'Burger', price: '₹199', img: 'burger.jpg' },
  ];

  products.forEach(product => {
    const clone = template.content.cloneNode(true);
    clone.querySelector('.name').textContent = product.name;
    clone.querySelector('.price').textContent = product.price;
    clone.querySelector('img').src = product.img;
    container.appendChild(clone);
  });
</script>

```

**Benefits:** Content inside `<template>` is parsed but not rendered — no HTTP requests for images, no script execution, no style calculation until cloned.

---

### 25. Explain the difference between block-level and inline elements.

| Feature | Block-level | Inline |
| --- | --- | --- |
| Display | Starts on new line | Flows within text |
| Width | Full width of parent | Only as wide as content |
| Height/Width | Can be set | Ignored (use inline-block) |
| Margin/Padding | All sides work | Only left/right margin works |
| Examples | `<div>`, `<p>`, `<h1>`, `<section>`, `<ul>` | `<span>`, `<a>`, `<strong>`, `<em>`, `<img>` |

**`inline-block`** — combination of both: flows inline but respects width, height, and vertical margin/padding.

---

### 26. What is the purpose of the `rel="noopener noreferrer"` attribute on links?

```html
<a href="[https://external.com](https://external.com)" target="_blank" rel="noopener noreferrer">Visit</a>

```

* **`noopener`** — prevents the new tab from accessing `window.opener` (the page that opened it). Without this, the new page could redirect your page to a phishing site.
* **`noreferrer`** — prevents sending the Referer header to the new page (privacy). Also implies `noopener`.

**Modern browsers:** As of 2021+, most browsers add `noopener` by default for `target="_blank"` links. But adding it explicitly is still good practice for compatibility.

---

### 27. How does the Intersection Observer API work?

**Intersection Observer** asynchronously watches when an element enters or exits the viewport (or a parent container). Much more performant than scroll event listeners.

```javascript
// Lazy loading images
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;     // Load the actual image
      observer.unobserve(img);        // Stop watching
    }
  });
}, {
  rootMargin: '200px',   // Start loading 200px before entering viewport
  threshold: 0           // Trigger when any part is visible
});

document.querySelectorAll('img[data-src]').forEach(img => observer.observe(img));

```

**Infinite scroll:**

```javascript
const sentinel = document.getElementById('load-more-trigger');

const observer = new IntersectionObserver(async ([entry]) => {
  if (entry.isIntersecting) {
    const nextPage = await fetch(`/api/items?cursor=${lastCursor}`);
    const data = await nextPage.json();
    renderItems(data.items);
    lastCursor = data.nextCursor;
    if (!data.hasMore) observer.unobserve(sentinel);
  }
});

observer.observe(sentinel);

```

**Use cases:** Lazy loading, infinite scroll, analytics (track if user saw a section), animation on scroll, sticky headers.

---

### 28. What is a custom attribute in HTML and how do you access it in a JavaScript file?

A **custom attribute** allows developers to embed custom data directly onto standard HTML elements without relying on non-standard non-valid attributes. In modern HTML, custom attributes **must start with the `data-` prefix** (e.g., `data-user-role`, `data-user-id`).

#### **How to access custom attributes in JavaScript:**

1. **`dataset` API (Recommended):**
HTML `data-*` attributes map directly to the DOM element's `dataset` object, converting hyphenated attribute names into camelCase properties.
```html
<button id="userBtn" data-user-id="101" data-user-role="admin">View Profile</button>

```


```javascript
const button = document.getElementById('userBtn');

// Accessing values via dataset (camelCase)
console.log(button.dataset.userId);   // "101"
console.log(button.dataset.userRole); // "admin"

// Updating custom attribute values
button.dataset.userRole = 'editor';

```


2. **Standard DOM Methods (`getAttribute` / `setAttribute`):**
Works for both `data-*` attributes and legacy non-standard attributes.
```javascript
// Reading
console.log(button.getAttribute('data-user-id')); // "101"

// Writing
button.setAttribute('data-user-id', '102');

```



---

### 29. How does strikethrough work in HTML and what is the difference between `<s>`, `<del>`, and `<strike>`?

Strikethrough renders a horizontal line directly through text. While visually identical by default, HTML provides different elements based on semantic context:

| Element | Semantic Purpose | Status |
| --- | --- | --- |
| `<del>` | Represents **deleted or removed text** (e.g., editorial edits, document changes, deleted cart items). Screen readers announce it as deleted. | **Current Semantic Standard** |
| `<s>` | Represents content that is **no longer accurate or relevant** (e.g., old discounted price). Visual strike only, not structural deletion. | **Current Semantic Standard** |
| `<ins>` | Represents **inserted or added text** (often paired with `<del>`). Rendered with an underline by default. | **Current Semantic Standard** |
| `<strike>` | Legacy element used purely for visual strikethrough. | **Deprecated (HTML5)** — Do not use; use CSS `text-decoration: line-through` instead. |

#### **Example Usage:**

```html
<!-- E-commerce Price Change -->
<p>Special Offer: <s>₹999</s> <strong>₹499</strong></p>

<!-- Document Edit Tracking -->
<p>Meeting time: <del>3:00 PM</del> <ins>4:30 PM</ins></p>

```

---

### 30. What is the difference between `<span>` and `<div>`?

Both `<span>` and `<div>` are non-semantic generic containers with no inherent meaning, but they differ fundamentally in display behavior and DOM layout rules:

| Feature | `<div>` (Divider) | `<span>` |
| --- | --- | --- |
| **Element Category** | Block-level element | Inline element |
| **Layout Behavior** | Starts on a new line and takes up full width of parent | Flows horizontally within surrounding text; line break only when needed |
| **Box Model Rules** | Respects `width`, `height`, `margin`, and `padding` on all sides | `width` and `height` are ignored. Vertical `margin` and `padding` do not affect layout space |
| **Content Nesting** | Can contain block-level and inline elements | Should only contain inline elements or text |
| **Primary Use Case** | Structuring sections, grid cells, component cards, and layout wrappers | Styling specific runs of text or wrapping inline icons/badges |

```html
<!-- Block container -->
<div class="card">
  <h3>Product Title</h3>
  <!-- Inline wrapper for specific text styling -->
  <p>Price: <span class="highlight">₹299</span></p>
</div>

```

```

```