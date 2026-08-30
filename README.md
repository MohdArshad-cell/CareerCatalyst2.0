# Career Catalyst 2.0

> Precision-Engineered Deliverables for the US Tech Market. Turn ghosted applications into top-tier tech interviews.

Career Catalyst is a high-conversion, cinematic web application built to help software engineers optimize their resumes, LinkedIn profiles, and digital footprints to beat ATS systems and land roles in the US Tech Market.

## 🚀 Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Fonts:** Inter & JetBrains Mono (next/font)

## ✨ Features

- **Cinematic 3D UI:** Interactive floating mockups, magnetic buttons, and parallax scrolling backgrounds.
- **Dynamic Lazy Loading:** Heavy components are loaded dynamically (`next/dynamic`) for instantaneous First Contentful Paint (FCP).
- **Accessibility Built-In:** Full support for `useReducedMotion` to disable complex 3D tilts and animations for users with OS-level motion sickness preferences.
- **ATS Scanner Simulation:** An interactive terminal simulation that visualizes the difference between standard and optimized resumes.
- **Responsive Design:** A flawless mobile-first architecture that progressively enhances into a massive desktop experience.

## 💻 Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

- `src/app/page.tsx`: The main cinematic landing page.
- `src/app/services/page.tsx`: Deep-dive service breakdowns with interactive 3D portfolio cards.
- `src/components/`: Contains all reusable, highly animated UI components (Hero, ATSScanner, Pricing, TiltCard, etc.)

## 🌐 Deployment

This project is optimized for deployment on [Vercel](https://vercel.com).
