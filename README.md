# InternNova — Official Homepage Redesign

> **Production-grade EdTech platform redesign engineered for college students, early-stage developers, and tech interns across India.**

Built in accordance with the **InternNova Task Specification & Workflow Blueprint**.

---

## 🚀 Key Features & Highlights

- **Refined Dark Mode & Glassmorphism:** Implements high-contrast `#07090E` & `#0F172A` palette, violet `#7C3AED` and cyan `#06B6D4` accents, and smooth backdrop-blur effects.
- **Sticky Header & Mobile Drawer:** Quick access to navigation, "Verify Certificate" tool, and "Apply for Cohort" CTA with 100% fluid mobile responsiveness down to 360px.
- **Hero with Live Cohort Pill:** Pulsating live cohort status (`Batch Starts Oct 24 • MSME Recognized`), proof points, and university/hiring partner recognition ticker.
- **Verified Statistics Strip:** Highlights 28,400+ students upskilled, 180+ hiring partners, and 4.91/5 graduate satisfaction.
- **Interactive Domain Catalog:**
  - Real-time search by role or technology with empty state fallback.
  - Tabbed filters (Web & Mobile, AI & Data Science, Cyber Security, Cloud & DevOps).
  - Clear differentiation between **Foundational (4 Weeks)** and **Pro Mentorship (8–12 Weeks)** tracks.
  - Syllabus roadmap modal for deep curriculum inspection.
- **4-Stage Mentorship Pathway:** Structured sprint roadmap showing the progression from baseline assessment to production capstone defense and career referrals.
- **Student Corner & Verification Hub:**
  - **Live Cryptographic Certificate Verifier:** Instant credential validation with sample IDs (`IN-2026-8841`, `IN-2026-7290`, `IN-2026-4412`).
  - **AI Resume Keyword Grader:** Interactive ATS keyword scorer tailored to target roles.
  - **Verified Public Portfolios:** Showcase of graduate capstones and live demo links.
- **Weekend Masterclasses & Labs:** Workshop announcements with Staff Engineer credentials and instant seat reservation.
- **Curated Placement Testimonials:** Domain-filtered reviews with alumni placed at Swiggy, Zomato, Razorpay, Deloitte, Postman, and Jio (eliminating messy 50+ card scroll walls).
- **Accessible FAQ Accordion:** Clear answers on eligibility, college schedule balance, and MSME/ISO recognition.
- **Lead Capture Footer & Application Modal:**
  - Newsletter with inline error and success feedback.
  - Full application modal with domain and tier selection.
  - MSME Registration (`UDYAM-DL-08-004921`) and ISO 9001:2015 details.

---

## 🛠️ Tech Stack

- **Framework:** React 19 + TypeScript
- **Bundler:** Vite 8
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Typography:** Plus Jakarta Sans & Inter (Google Fonts)

---

## 📦 Project Structure

```
internnova/
├── docs/
│   ├── PRD.md                 # Product Requirements Document
│   ├── architecture.md        # Technical Architecture & State Flow
│   ├── rule.md                # Coding Standards & Design Practices
│   └── memory.md              # Project Progress & Decision Rationale
├── public/
│   └── favicon.svg            # Branded SVG Vector Favicon
├── src/
│   ├── components/            # Section & Atomic Components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── StatsStrip.tsx
│   │   ├── DomainCards.tsx
│   │   ├── MentorshipPathway.tsx
│   │   ├── StudentCorner.tsx
│   │   ├── Workshops.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FaqAccordion.tsx
│   │   ├── ApplicationModal.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   └── mockData.ts        # Typed datasets for all sections
│   ├── App.tsx                # Master orchestration
│   ├── index.css              # Design tokens & Tailwind v4
│   └── main.tsx
├── index.html
├── vite.config.ts
└── package.json
```

---

## ⚡ Quickstart & Setup Guide

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build & Type Check
```bash
npm run build
```
The optimized bundle will be created in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🚢 Deployment (Vercel / Netlify)

- **Vercel:** Run `npx vercel` or connect the GitHub repository. Build command: `npm run build`, Output directory: `dist`.
- **Netlify:** Run `npx netlify deploy --prod --dir=dist` or drag-and-drop the `dist/` folder.

---

## 📜 Compliance & Submission Criteria

- [x] **PRD.md**, **architecture.md**, **rule.md**, **memory.md** created in `docs/`.
- [x] All 10 mandatory sections implemented as modular discrete components.
- [x] 100% fluid mobile responsiveness down to 360px screen width.
- [x] Zero horizontal body overflow.
- [x] Clean TypeScript build (`tsc -b && vite build`) without warnings or errors.
