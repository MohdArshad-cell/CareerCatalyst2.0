<div align="center">
  <img src="https://raw.githubusercontent.com/MohdArshad-cell/CareerCatalyst2.0/master/public/hero-mockup.jpg" alt="Career Catalyst 2.0" width="800" />

  <br />
  <br />

  <h1>🚀 Career Catalyst 2.0</h1>
  
  <p>
    <strong>Precision-Engineered Deliverables for the US Tech Market.</strong> <br/>
    Turn ghosted applications into top-tier tech interviews.
  </p>

  <p>
    <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js" alt="Next.js" /></a>
    <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" /></a>
    <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" /></a>
    <a href="https://www.framer.com/motion/"><img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" /></a>
  </p>
</div>

<hr />

## 📖 Table of Contents
- [About the Project](#-about-the-project)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Installation & Setup](#-installation--setup)
- [Project Structure](#-project-structure)
- [Performance & Accessibility](#-performance--accessibility)
- [License](#-license)

---

## 🎯 About the Project

**Career Catalyst 2.0** is a high-conversion, cinematic web application built specifically for software engineers. We help developers optimize their resumes, LinkedIn profiles, and digital footprints to bypass Applicant Tracking Systems (ATS) and land roles in the highly competitive US Tech Market.

The platform is designed to instantly communicate technical authority through a beautiful, dark-mode, animated interface that resembles the dashboards used at top FAANG companies.

---

## ✨ Key Features

- **🎬 Cinematic 3D UI:** Highly interactive floating mockups, magnetic buttons, parallax scrolling backgrounds, and orbital tech logos.
- **🛡️ ATS Scanner Simulation:** A live-typing terminal simulation that visualizes the difference between a standard rejected resume and an optimized 99% match resume.
- **📱 100% Mobile Responsive:** Built with a "Mobile-First" Tailwind architecture that progressively enhances into a massive desktop experience, complete with `overflow-x-hidden` fluid layouts.
- **🎛️ 3D Portfolio Cards:** Interactive, tilt-tracking cards that respond to mouse coordinates to create a depth-of-field 3D effect.
- **⚡ Dynamic Rendering:** Next.js Server Components and `next/dynamic` lazy loading used to guarantee instant First Contentful Paint (FCP).
- **♿ Accessibility Native:** Deep integration with `useReducedMotion` to automatically disable dizzying 3D tilts and infinite loops for users with OS-level motion sickness preferences.

---

## 🛠 Tech Stack

### Core
- **[Next.js 14](https://nextjs.org/)** - React framework (App Router)
- **[TypeScript](https://www.typescriptlang.org/)** - Static type checking
- **[React 18](https://react.dev/)** - UI Library

### Styling & Animation
- **[Tailwind CSS v3](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready animation library
- **[Lucide React](https://lucide.dev/)** - Beautiful, consistent icon set

---

## 💻 Installation & Setup

To get a local copy up and running, follow these simple steps:

### Prerequisites
Make sure you have Node.js (v18+) installed.

### 1. Clone the repo
```sh
git clone https://github.com/MohdArshad-cell/CareerCatalyst2.0.git
cd CareerCatalyst2.0
```

### 2. Install dependencies
```sh
npm install
# or
yarn install
```

### 3. Run the development server
```sh
npm run dev
# or
yarn dev
```

### 4. View the App
Open `http://localhost:3000` in your browser.

---

## 📂 Project Structure

```text
├── public/                 # Static assets (images, icons)
├── src/
│   ├── app/                
│   │   ├── globals.css     # Global Tailwind styles & CSS variables
│   │   ├── layout.tsx      # Root layout, Next/Font config, Global UI (Nav/Footer)
│   │   ├── page.tsx        # Homepage (Lazy loaded components)
│   │   └── services/       # Services deep-dive route
│   │
│   └── components/         # Reusable UI components
│       ├── ATSScanner.tsx  # Live terminal scanner simulation
│       ├── Hero.tsx        # Cinematic Hero section with 3D Orbit
│       ├── TiltCard.tsx    # Reusable Framer Motion 3D tilt component
│       ├── Navbar.tsx      # Responsive header
│       └── ...
└── package.json            # Dependencies & scripts
```

---

## 🚀 Performance & Accessibility

We take performance seriously. This platform is optimized for **100/100 Lighthouse Scores**:
* **Bundle Splitting:** Heavy below-the-fold components (Pricing, Testimonials, FAQ) are dynamically imported.
* **Font Optimization:** `next/font` is used to preload Inter and JetBrains Mono at build time to prevent Cumulative Layout Shift (CLS).
* **Smooth Scrolling:** Native CSS `scroll-behavior: smooth` is implemented for all internal anchor links.
* **A11y:** Fully respects OS-level `prefers-reduced-motion` settings.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="center">
  <i>Built with ❤️ for Software Engineers</i>
</p>
