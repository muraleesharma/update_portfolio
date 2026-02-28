# Modern Developer Portfolio

A sleek, modern, mobile-first personal portfolio website built with Next.js 15, Tailwind CSS V4, Framer Motion, and Lucide React. Designed for performance, smooth glassmorphism aesthetics, and SEO optimization.

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run the development server:**
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Folder Structure

```text
portfolio/
├── public/                 # Static assets (favicon, etc.)
├── src/
│   ├── app/
│   │   ├── globals.css     # Global styles & Tailwind properties (Theme config)
│   │   ├── layout.tsx      # Root layout, Global fonts, SEO standard
│   │   └── page.tsx        # Main landing page assembling sections
│   ├── components/
│   │   ├── About.tsx       # Bio & Skills grid
│   │   ├── Contact.tsx     # Form, Socials, Floating WhatsApp
│   │   ├── Experience.tsx  # Timeline
│   │   ├── Footer.tsx      # Minimal footer
│   │   ├── Hero.tsx        # Animated typing & CTAs
│   │   ├── Navbar.tsx      # Glassmorphism Fixed Nav with Mobile Menu
│   │   └── Projects.tsx    # Card layout with subtle hover states
│   └── lib/
│       └── utils.ts        # Tailwind merger utility (cn)
├── tailwind.config.ts      # (Using PostCSS Tailwind V4 @theme instead)
└── packages.json
```

## 🚀 Deployment (Vercel / Netlify)
This project is deeply optimized for Vercel.
1. Push this codebase to a GitHub repository.
2. Log into [Vercel](https://vercel.com/) or [Netlify](https://netlify.com/).
3. Click **Import Project** and select your GitHub repository.
4. Deploy using the default `Next.js` settings.

---

## 🎨 Suggestions for Customization

### 3 Theme Color Palette Options

Currently, the portfolio uses a **Nebula Cyan & Indigo** look. Here are 3 premium alternatives you can implement in `src/app/globals.css` and the gradient classes:

**1. Obsidian Gold (Ultra Premium)**
- Background: `#0A0A0A` (Deep Black)
- Primary Accents: `#D4AF37` (Metallic Gold)
- Typography: Soft white `#F8F8F8` and muted gold.
- *Feel: Luxurious, exclusive, high-end fintech design.*

**2. Cyberpunk Neon (Tech-Forward)**
- Background: `#0D0221` (Deep Purple Black)
- Primary Accents: `#00FFCC` (Neon Cyan) and `#FF007F` (Neon Pink)
- Typography: Crisp white with neon glowing borders.
- *Feel: Hacker, blockchain engineer, highly technical.*

**3. Midnight Mint (Minimal & Clean)**
- Background: `#121212` (Soft Black)
- Primary Accents: `#00E676` (Mint Green) 
- Secondary Accents: `#81C784` (Soft Green)
- *Feel: Fresh, modern, friendly but highly professional.*

### 2 Font Combinations

The site currently uses **Inter**. You can swap fonts by changing the Google Font imports in `layout.tsx`.

**1. Heading: Space Grotesk | Body: Inter**
- `Space Grotesk` gives a slightly techy, sophisticated look for headings (`h1`, `h2`), while `Inter` keeps paragraphs incredibly legible on mobile devices.

**2. Heading: Outfit | Body: DM Sans**
- `Outfit` is very trendy, geometric, and bold. Combined with `DM Sans`, the portfolio looks like a high-end web3 dashboard or SaaS landing page.

### 3 Modern Hero Tagline Ideas

Replace the descriptive text in `Hero.tsx` with one of these to grab immediate attention:

1. *"Translating complex logic into elegant, high-performance digital experiences."*
2. *"I architect robust trading systems and craft pixel-perfect user interfaces."*
3. *"Building the tools of tomorrow through clean code and fearless design."*
