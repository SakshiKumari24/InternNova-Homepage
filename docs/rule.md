# Coding Standards, Governance & AI Boundaries — rule.md

## 1. Coding Standards & Design Practices

### Approved Standards (What to Use)
- **Mobile-First Responsiveness:** 100% fluid down to 360px screen widths. No fixed horizontal pixel widths that trigger horizontal scrolling.
- **Component Modularity:** Every homepage section exists as an independent, testable component in `src/components/`.
- **Interactive Feedback:** Hover transitions, smooth active pill states, accessible modal backdrops, and animated focus rings.
- **Performance:** Optimized SVG icons via `lucide-react`, zero heavy blocking third-party runtime bundles.
- **Authentic Content:** Real engineering domains (MERN/Next.js, PyTorch/LLMs, Burp Suite/OWASP, Cloud SRE, Flutter) with concrete production capstone project names.

### Restricted Practices (What to Avoid)
- **Do NOT Blindly Clone:** Overcome legacy site flaws (chaotic floating popups, unstyled alert modals, illegible low-contrast text).
- **No Visual Clutter:** Eliminate intrusive sticky promotional overlays that block the reading area.
- **No Massive Scroll Walls:** Avoid rendering unpaged dumps of 50+ raw review cards; use domain filtering with paginated controls.
- **No Unstyled Elements:** Inputs, select dropdowns, and buttons must adhere to the design token styling.
- **No Horizontal Body Overflow:** `overflow-x: hidden` enforced at root level with flexible flex/grid wrapping.

---

## 2. Error & Fallback Handling (ERR.1)
- **Graceful Empty Filter Results:** When domain searches return 0 hits, display an informative fallback state with reset action.
- **Certificate Verification Lookup:** Invalid or unknown certificate IDs display an inline warning banner with sample ID buttons to preview valid records.
- **Newsletter Subscription:** Inline validation checks for empty strings, missing `@` or `.` symbols, and provides positive success feedback without full page reloads.

---

## 3. Boundaries of AI & Submission Standards
- **AI-1 Authorized AI Tasks:** Generating clean modular UI code, structuring mock datasets matching domain realities, writing complete project documentation, and verifying build integrity.
- **AI-2 AI Prohibitions:** AI must not fabricate arbitrary branding unconnected to InternNova's mission, nor introduce monolithic unmaintainable code structures.
- **OPS.1 Submission Standards:** Clean build verification with zero TypeScript compiler errors (`tsc -b`), structured repository folders, and ready-to-deploy configuration.
