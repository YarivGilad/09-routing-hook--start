### 🧭 Smooth-Scroll Navigation Challenge (React + TS)

Make the top navigation links smoothly scroll to their target sections on a single page — a classic real‑world UX pattern. You’ll start by making ONE link work, then scale it to all links, and finally refactor your solution into a tiny, reusable custom hook. Have fun and keep it minimal. ✨

This project already renders a single page with three sections and a fixed top bar:
- `Home`, `About`, `Contact` sections stack vertically (full viewport height each)
- A fixed `TopBar` shows navigation links at the top

You’ll make the links trigger animated scrolling to the relevant section. No routing required — it’s a single page experience. 🧑‍🚀

---

### 📂 Where things live
- `src/view/app.tsx` — page shell (do NOT add JSX here)
- `src/view/top-bar.tsx` — fixed top bar
- `src/view/links.tsx` — the navigation links at the top
- `src/view/home.tsx`, `src/view/about.tsx`, `src/view/contact.tsx` — sections

You may add a new hook file under `src/hooks/` when you get to the refactor phase.

---

### 🚦 Rules & Restrictions
- 🚫 Do NOT add JSX elements to `src/view/app.tsx`.
- 🚫 Do NOT add new libraries. Use the browser’s vanilla scrolling APIs.
- ✅ You may edit `links.tsx`, `home.tsx`, `about.tsx`, `contact.tsx`.
- ✅ You may create a hook file (e.g. `src/hooks/use-section-scroll.ts`).
- ✅ You may adjust styles if needed (e.g. offsets for a fixed header).

Tip: The top bar is `position: fixed;` — make sure your scrolled-to content is not hidden underneath it. 😎

---

### 🧩 Phases

1) 🎯 Make one link work
- Pick a single link (e.g. “About”).
- When clicked, the page should smoothly animate to the “About” section.
- Implement with vanilla browser APIs. Keep it as simple as possible.

2) 🔁 Make all links work (without copy‑paste)
- Wire up the remaining links to their sections.
- Avoid repeating logic. Think about how to map links to sections.
- Keep the UX consistent (smooth, stops at the right place, accessible).

3) 🪄 Refactor into a custom hook
- Extract your logic into a minimal, reusable hook (e.g. `useSectionScroll`).
- The hook should be ergonomic and easy to reuse in other components.
- Keep the hook’s API as small as possible while still practical.

---

### 🧰 Vanilla Browser APIs you can use
You can choose any of these (or a combo):
- `Element.scrollIntoView({ behavior: 'smooth', block: 'start' })`
- `window.scrollTo({ top, behavior: 'smooth' })`
- `Element.getBoundingClientRect()` (to compute offsets)
- Optional: `requestAnimationFrame` (if you roll your own animation)

Choose one path and stick to it — the simpler the better. 🚀

---

### ✅ Acceptance Criteria
- Clicking a nav link animates the page scroll to the correct section.
- The target section’s heading is fully visible below the fixed top bar.
- Smooth animation (no jumps), no unwanted page reloads or route changes.
- Keyboard accessible: links remain tabbable; Enter triggers the same behavior.
- Works in a modern Chromium-based browser.

---

### 💡 Hints (no spoilers)
- Give each section a reliable way to target it: a `ref` is often more robust than relying on `id`s.
- If the header hides the top of a section, subtract its height or consider CSS `scroll-margin-top`.
- Intercept link interactions if necessary (e.g., prevent default navigation) and trigger your scroll.
- A tiny mapping from link name → section ref can eliminate conditionals and duplication.
- Your hook’s API might return an `onClick` handler per section or a function like `scrollTo('about')`.

---

### 🧪 How to run
```bash
npm install
npm run dev
```
Open the local URL printed in the terminal.

---

### 📦 What to submit
- A working implementation for all links.
- Your refactor into a custom hook under `src/hooks/`.
- A short note (2–4 lines) explaining your hook’s API and why it’s minimal.

---

### 🌟 Stretch Goals (optional, for extra kudos)
- Update URL hash (e.g., `#about`) without a full-page jump, while preserving smooth scroll.
- Account for dynamic header height or responsive changes.
- Add “scroll spy” active state highlighting the section in view.
- Respect reduced motion preferences (`prefers-reduced-motion`).

---

### 🏁 Definition of Done
- One link works smoothly → all links work smoothly → logic lives in a neat hook.
- No JSX added to `src/view/app.tsx`.
- Code is clean, minimal, and easy to reuse.

Have fun, be thoughtful, and ship something you’re proud of. 🎉
