

## Blockchain VPS Provider Website - Clean Minimal Design

A single-page marketing website for a blockchain-powered VPS hosting provider with a clean, minimal aesthetic.

### Sections (top to bottom)

1. **Navbar** - Logo, nav links (Features, Pricing, Locations, OS & Panels, FAQ), CTA button "Get Started"

2. **Hero Section** - Bold headline about decentralized/private VPS hosting, subtitle about crypto payments, two CTAs (View Plans, Learn More), subtle blockchain-themed illustration or geometric pattern

3. **Features & Benefits** - Grid of 6 cards highlighting: crypto payments (BTC/ETH/USDT), decentralized infrastructure, privacy-first, 99.9% uptime SLA, DDoS protection, instant deployment

4. **Pricing Plans** - 3-4 tier cards (Starter, Pro, Enterprise, Custom) showing CPU, RAM, storage, bandwidth, price in USD + crypto equivalents

5. **Server Locations Map** - Visual world map with pinned data center locations, hover/click for details (city, latency info)

6. **Control Panels & Operating Systems** - Grid showcasing supported OS (Ubuntu, Debian, CentOS, Windows Server, etc.) and control panels (cPanel, Plesk, DirectAdmin, etc.) with icons

7. **FAQ Section** - Accordion-style common questions about crypto payments, setup time, support, refunds

8. **Footer** - Logo, links, social media, accepted crypto payment icons, copyright

### Technical approach

- All built in `src/pages/Index.tsx` with extracted components in `src/components/`
- Clean minimal palette: white backgrounds, soft grays, subtle blue accents
- Tailwind CSS for styling, Lucide icons, smooth scroll navigation
- Fully responsive (mobile-first)
- Uses existing shadcn/ui components (Card, Accordion, Badge, Button)

