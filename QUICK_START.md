# 🚀 Quick Start Guide - KKT Website

## Development Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
# Navigate to http://localhost:3000
```

## Build for Production

```bash
# Build optimized version
npm run build

# Start production server
npm start
```

## Project Structure

```
📁 portofolio-kkt/
├── 📁 app/                 # Next.js app directory
│   ├── 📄 layout.tsx       # Root layout with SEO
│   ├── 📄 page.tsx         # Homepage
│   ├── 📄 globals.css      # Global styles
│   ├── 📁 api/             # API routes
│   │   └── contact/route.ts
│   └── 📄 sitemap.ts       # SEO sitemap
├── 📁 components/          # React components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── ClubCard.tsx
│   ├── PeopleCard.tsx
│   ├── EventSection.tsx    # ✨ NEW
│   ├── TestimonialsSection.tsx # ✨ NEW
│   ├── ContactSection.tsx  # ✨ NEW
│   ├── Footer.tsx
│   └── GalleryModal.tsx
├── 📁 data/                # Centralized data
│   ├── people.ts
│   └── testimonials.ts     # ✨ NEW
├── 📁 public/              # Static assets
│   └── *.jpeg (images)
└── 📄 package.json
```

---

## Key Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server (localhost:3000) |
| `npm run build` | Build for production |
| `npm start` | Run production server |
| `npm run lint` | Run ESLint |

---

## Important Files & Their Purposes

### Core Configuration
- `tsconfig.json` - TypeScript configuration
- `next.config.ts` - Next.js config
- `package.json` - Dependencies & scripts

### Layout & Styling
- `app/layout.tsx` - Root layout with metadata
- `app/globals.css` - Global styles for entire app

### Pages & Sections
- `app/page.tsx` - Main homepage
- `app/not-found.tsx` - 404 page

### Components
- `components/Navbar.tsx` - Navigation bar
- `components/Hero.tsx` - Hero section
- `components/ClubCard.tsx` - Activity cards
- `components/EventSection.tsx` - Events timeline
- `components/TestimonialsSection.tsx` - User testimonials
- `components/ContactSection.tsx` - Contact form & info

### Data
- `data/people.ts` - Founders data
- `data/testimonials.ts` - Testimonials data

### API Routes
- `app/api/contact/route.ts` - Contact form API

### SEO
- `app/sitemap.ts` - XML sitemap
- `app/robots.ts` - Robots configuration
- `app/manifest.ts` - PWA manifest

---

## Features Overview

### 🎨 UI/UX Features
- Modern glassmorphism design
- Smooth Framer Motion animations
- Responsive mobile design
- Dark theme with brown/beige colors
- Interactive hover effects

### 📱 Responsive Design
- Mobile-first approach
- Hamburger menu for mobile
- Flexible grid layouts
- Touch-friendly buttons

### 🔍 SEO & Performance
- Meta tags & Open Graph
- Semantic HTML
- Image lazy loading
- Optimized CSS/JS
- Fast page load times

### ♿ Accessibility
- ARIA labels
- Semantic HTML elements
- Keyboard navigation support
- Focus states
- Alt text for images

### 🔐 Security
- Input validation on contact form
- Email format validation
- Safe API endpoint

---

## Contact Form Integration

### Current Status
- Form submission works locally
- Console logs submissions
- Shows success/error messages

### To Enable Email Sending

Install your preferred email service:

#### Option 1: SendGrid
```bash
npm install @sendgrid/mail
```

Then update `app/api/contact/route.ts`:
```typescript
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// In POST handler:
await sgMail.send({
  to: process.env.CONTACT_EMAIL,
  from: process.env.SENDGRID_FROM_EMAIL,
  subject: `Pesan baru dari ${name}`,
  html: `<p>${message}</p><p>Dari: ${email}</p>`,
});
```

#### Option 2: Resend
```bash
npm install resend
```

```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// In POST handler:
await resend.emails.send({
  from: process.env.RESEND_FROM_EMAIL,
  to: process.env.CONTACT_EMAIL,
  subject: `Pesan baru dari ${name}`,
  html: `<p>${message}</p><p>Dari: ${email}</p>`,
});
```

### Environment Variables
Create `.env.local`:
```
SENDGRID_API_KEY=your_api_key
SENDGRID_FROM_EMAIL=noreply@keluargakeciltekkom.id
CONTACT_EMAIL=admin@keluargakeciltekkom.id
```

---

## Customization Guide

### Update Text Content
Edit `app/page.tsx` and component files to change:
- Section titles
- Descriptions
- Card content

### Change Colors
Update `app/globals.css`:
- `background:#4f4444;` - Main background
- Modify color variables in CSS

### Add More Events
Update `components/EventSection.tsx`:
```typescript
const events: Event[] = [
  // Add new events here
];
```

### Add More Testimonials
Update `data/testimonials.ts`:
```typescript
export const testimonialsData: Testimonial[] = [
  // Add new testimonials here
];
```

---

## Deployment Options

### 1. Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### 2. Netlify
```bash
npm run build
# Deploy the .next folder
```

### 3. Traditional Hosting
```bash
npm run build
npm start
```

---

## Performance Tips

1. **Image Optimization**
   - Use WebP format
   - Compress images before upload
   - Use Next.js Image component

2. **Caching**
   - Leverage browser caching
   - Use CDN for static assets

3. **Code Splitting**
   - Dynamic imports for large components
   - Tree shaking unused code

4. **Monitoring**
   - Use Vercel Analytics
   - Monitor Core Web Vitals

---

## Troubleshooting

### Port 3000 Already in Use
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -i :3000
kill -9 <PID>
```

### Build Errors
```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### API Not Working
- Check `.env.local` variables
- Verify API route path
- Check browser console for errors
- Check server logs

---

## Support & Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)

---

## Version Info

- **Next.js:** 16.2.6
- **React:** 19.2.4
- **TypeScript:** 5
- **Node.js:** 18+

---

**Happy Coding! 🚀**
