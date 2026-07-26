# React Essentials

> MERN (React-Heavy) Interview Prep — 4+ Yrs Switch Plan

---

## COMPLETED (Use in interviews as talking points)

- [x] Payment Integration — Foodsy (Webhooks, Razorpay/Stripe flow)
- [x] Chat Application — Real-time Socket.io, group chat, room logic
- [x] React 19 Features — Notes ready (useActionState, useOptimistic, use(), ref as props)
- [x] Foodsy Full CRUD — Restaurant, Menu, Order, Search, Filters

---

## SET 1 — PRIORITY 1 (Non-Negotiable, Start Here)
>
> *Every 4+ yr React interview in 2026 will test these. No shortcut.*

### 1. TypeScript (Advanced)

- Generics, Utility Types (Partial, Pick, Omit, Record)
- Typing React props, hooks, event handlers, refs
- Discriminated Unions, Type Guards, `as const`
- Practice: Convert a section of Foodsy to TypeScript
- **Resource:** Matt Pocock's Total TypeScript (free beginners), ts-challenges on GitHub

### 2. Performance & Core Web Vitals

- Code splitting (`React.lazy`, `Suspense`, dynamic imports)
- Memoization (`React.memo`, `useMemo`, `useCallback` — when to ACTUALLY use)
- Bundle analysis (webpack-bundle-analyzer / vite-plugin-visualizer)
- Core Web Vitals: LCP, FID/INP, CLS — what they mean, how to fix
- React Profiler & Chrome DevTools Performance tab
- Virtual lists for large data (react-window / TanStack Virtual)
- **Resource:** web.dev/vitals, React docs on performance

### 3. Advanced React Patterns & Architecture

- Custom Hooks architecture (extract logic, composability)
- Compound Components pattern
- Render Props vs HOC vs Hooks (know trade-offs)
- Error Boundaries (class-based + react-error-boundary library)
- Controlled vs Uncontrolled components
- React Server Components (concept clarity)
- **Resource:** Kent C. Dodds "Advanced React Patterns", Epic React

### 4. System Design for Frontend

- How to architect a large-scale React app (folder structure, module boundaries)
- Caching strategies (SWR, React Query / TanStack Query stale-while-revalidate)
- Request deduplication, retry logic, abort controllers
- Optimistic updates pattern (you already know from React 19!)
- Auth architecture (JWT flow, refresh tokens, protected routes)
- Micro-frontend concepts (Module Federation basics)
- **Resource:** frontendmastery.com, "Frontend System Design" by Evgeniy

---

## SET 2 — PRIORITY 2 (High Value, Do After Set 1)
>
> *These separate "good" devs from "senior-level" devs.*

### 5. Testing

- Unit testing with Jest + React Testing Library (RTL)
- What to test: user interactions, not implementation details
- Integration tests: testing hooks, API calls with MSW (Mock Service Worker)
- E2E basics with Playwright (Naukri keyword!) or Cypress
- Practice: Write tests for 2-3 Foodsy components
- **Resource:** Testing Library docs, Kent C. Dodds testing trophy

### 6. State Management Deep Dive

- Context API — when it's enough, when it's NOT (re-render problem)
- Redux Toolkit (RTK Query for data fetching + caching)
- Zustand (lightweight alternative — very popular in 2025-26)
- When to use what: local state vs global vs server state (TanStack Query)
- **Resource:** Redux Toolkit docs, Zustand GitHub, TkDodo's React Query blog

### 7. React 19 — Hands-On Practice

- Build a small form using `useActionState` + `useFormStatus`
- Implement `useOptimistic` in Foodsy (e.g., optimistic order placement)
- Use `use()` API for data fetching in a component
- Pass `ref` as prop without `forwardRef`
- **You have notes — now BUILD something with each feature**

### 8. Security Fundamentals

- XSS prevention (dangerouslySetInnerHTML risks, input sanitization)
- CSRF protection (token-based, SameSite cookies)
- Content Security Policy (CSP) headers
- Auth patterns: HttpOnly cookies vs localStorage for tokens
- Input validation (client + server)
- **Resource:** OWASP Top 10 for frontend, MDN Security docs

---

## SET 3 — PRIORITY 3 (Good to Know, Bonus Points)
>
> *Mentioning these shows breadth. Don't deep-dive until Set 1 & 2 are solid.*

### 9. Custom Table / Data Grid

- Virtualization with react-window or TanStack Virtual
- Infinite scroll + pagination (cursor-based vs offset)
- Load more on scroll end (Intersection Observer API)
- **You listed this in both task files — it's a practical skill, build one**

### 10. Drag & Drop

- React DnD or dnd-kit (modern, lightweight)
- Sortable lists, Kanban boards
- Build: A simple Trello-like board

### 11. Nested Accordion (Lazy Rendering)

- Render children only on expand (not on mount)
- Use React.lazy or manual state-based rendering
- Tree-like recursive component pattern

### 12. Micro Frontend Architecture

- Module Federation (Webpack 5)
- When to use microfrontends vs monolith
- Communication between micro apps
- **Good for "system design" round answers**

### 13. Accessibility (a11y)

- WCAG 2.1 basics (AA compliance)
- Semantic HTML, ARIA roles, keyboard navigation
- Focus management in modals/dialogs
- Screen reader testing basics
- **Increasingly asked at senior level**

---

## SCENARIO-BASED QUESTIONS (Practice After Set 1 & 2)
>
> *These are interview questions. You need Set 1 & 2 knowledge to answer them well.*

- [ ] App takes 6-8 sec to load → performance optimization
- [ ] Users report app getting slow → memory leak debugging
- [ ] Dashboard depends on 5 APIs → partial failure handling
- [ ] Role-based app → secure UI + routes + APIs
- [ ] Multiple lazy modules need shared state → global state strategy
- [ ] Dynamic forms from API data → dynamic reactive forms
- [ ] App breaks after upgrade → debugging breaking changes
- [ ] Multiple teams deploying → micro frontend design
- [ ] API called multiple times → debug duplicate requests
- [ ] SEO requirements → SSR/SSG strategy
- [ ] Image thumbnail creation & storage

---

## DAILY STUDY STRUCTURE

| Time Block | What |
|---|---|
| 45 min | Theory/concept (from current SET) |
| 45 min | Code/build (apply what you learned) |
| 30 min | Scenario questions or mock interview prep |
| 20 min | DSA (basic — arrays, strings, objects, common patterns) |

> Use your 45-10 focus method from study_focus_guide.txt

---

## JOB SEARCH TIPS

- Update Naukri resume before 10 AM (higher visibility)
- Add keywords: **Playwright, TypeScript, React 19, TanStack Query, System Design, Micro Frontend**
- LinkedIn: Post about your Foodsy & Chat App projects with tech stack details
- GitHub: Pin Foodsy & Chat App repos, add proper READMEs with screenshots
- **Your deployed projects are your biggest strength — lead with them**

---

## WEEK-BY-WEEK ROUGH PLAN

| Week | Focus |
|---|---|
| Week 1-2 | TypeScript (convert parts of Foodsy) |
| Week 3-4 | Performance + Core Web Vitals + React Profiling |
| Week 5-6 | Advanced React Patterns + System Design |
| Week 7-8 | Testing (Jest + RTL + write tests for Foodsy) |
| Week 9 | State Management deep dive + React 19 hands-on |
| Week 10 | Security + Scenario-based questions |
| Week 11+ | Set 3 topics (Custom Table, D&D, Micro FE) + Mock interviews |

> **Don't jump sets.** Finish Set 1 before touching Set 2. Set 3 is bonus.
