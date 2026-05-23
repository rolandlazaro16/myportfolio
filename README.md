# Roland Lazaro Muro — Portfolio

Personal portfolio website built with **Next.js** and **TypeScript**.

## Features

- Hero section with introduction
- About me with quick facts
- Education timeline (primary through diploma)
- Skills & TTCL training experience
- Contact via WhatsApp and email
- Responsive design with mobile navigation

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18.18 or later (includes npm)

### Install & Run

```bash
cd "My Portfolio"
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/           # Next.js App Router pages & layout
├── components/    # UI sections (Hero, About, Education, etc.)
└── data/          # Portfolio content (edit portfolio.ts to update info)
```

## Customize

Edit `src/data/portfolio.ts` to update your name, education, skills, or contact details.

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
