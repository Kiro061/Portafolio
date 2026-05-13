# Andrés Castellanos — Junior Frontend Developer Portfolio

Un portafolio profesional de una sola página, responsivo y limpio, construido con HTML5, CSS3 y JavaScript vanilla. Sin frameworks, sin build tools — solo fundamentos sólidos de frontend y atención al detalle.

---

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML document (semantic, accessible)
├── styles.css          # All CSS — variables, layout, components, responsive
├── main.js             # Vanilla JS — nav, animations, form validation
├── assets/
│   ├── andres-castellanos-cv.pdf   # (Agrega tu CV aquí)
│   └── images/              # (Add project screenshots here)
└── README.md           # This file
```

---

## ✨ Features

- **Responsive Design** — mobile-first layout, tested on phones, tablets, and desktops
- **Semantic HTML5** — proper use of `header`, `nav`, `main`, `section`, `footer`
- **Accessibility** — ARIA labels, focus-visible styles, reduced-motion support
- **Sticky Navigation** — transparent header that gains background on scroll
- **Mobile Hamburger Menu** — animated toggle with keyboard (Esc) and outside-click dismissal
- **Smooth Scrolling** — native CSS + JS offset for fixed header
- **Intersection Observer** — staggered reveal animations triggered on scroll
- **Skill Bars** — animated on entry into viewport
- **Contact Form** — client-side validation with live feedback (ready for Formspree/EmailJS)
- **Active Nav Highlighting** — current section highlighted in the nav
- **Print Styles** — clean output when printing or saving as PDF
- **Performance** — no dependencies, no build step, fast load time

---

## 🚀 Deployment — GitHub Pages

### Step 1 — Create the repository

```bash
# Create a new repo on GitHub named:
# your-username.github.io   ← for a personal site (root URL)
# OR
# portfolio                 ← for a project site (lives at /portfolio)
```

### Step 2 — Push your code

```bash
# Initialize git in your project folder
git init
git add .
git commit -m "feat: initial portfolio release"

# Connect to GitHub
git remote add origin https://github.com/Kiro061/YOUR_REPO.git
git branch -M main
git push -u origin main
```

### Step 3 — Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under **Source**, select `main` branch and `/ (root)` folder
4. Click **Save**
5. Your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO` within ~60 seconds

### Step 4 — Custom domain (optional)

1. Buy a domain (Namecheap, Google Domains, etc.)
2. In GitHub Pages settings → **Custom domain**, enter your domain
3. Add a `CNAME` file to your repo root with just your domain:
   ```
   www.yourdomain.com
   ```
4. Configure your domain's DNS with a CNAME record pointing to `YOUR_USERNAME.github.io`

---

## 📝 Conventional Commits Guide

This project follows [Conventional Commits](https://www.conventionalcommits.org/) for a clean, readable git history.

| Prefix | When to use | Example |
|--------|------------|---------|
| `feat:` | New feature or section | `feat: add projects section with project cards` |
| `fix:` | Bug fix | `fix: correct mobile menu not closing on link click` |
| `style:` | CSS/visual changes (no logic) | `style: update hero title font size on mobile` |
| `refactor:` | Code restructure without behavior change | `refactor: extract form validation into helper function` |
| `docs:` | Documentation updates | `docs: add GitHub Pages deployment steps to README` |
| `perf:` | Performance improvement | `perf: add throttle to scroll event listener` |
| `a11y:` | Accessibility improvements | `a11y: add aria-label to hamburger button` |
| `chore:` | Maintenance tasks | `chore: remove unused CSS variables` |

### Example commit history

```
feat: add contact form with client-side validation
a11y: add aria-live to form error and success messages
style: improve skill card hover animation
fix: resolve skill bar not animating on mobile Safari
refactor: move intersection observer into named function
docs: update README with Formspree integration note
feat: add scroll-triggered reveal animations
feat: initial portfolio structure and hero section
```

---

## 🔧 Customization Guide

### Personal information
- Open `index.html` and search for `Alex Rivera` — replace with your name
- Update email, GitHub, and LinkedIn URLs throughout
- Edit the About Me text and fact items
- Replace the avatar SVG with your photo: add `<img src="assets/images/photo.jpg" alt="Your Name" class="avatar-img" />`

### Projects
- Replace the CSS mockups with real screenshots
- Update project titles, descriptions, GitHub links, and live demo URLs
- Add or remove project cards as needed

### Skills
- Adjust the `aria-valuenow` and `--w` CSS variable on each skill bar
- Change the level labels: Familiar / Intermediate / Advanced

### Colors
- All colors are in CSS custom properties at the top of `styles.css`
- Change `--accent` to your preferred brand color

### Contact form backend
- The form is UI-only by default (simulated 1.2s delay)
- Connect it to [Formspree](https://formspree.io) (free tier available):
  ```js
  // In main.js, replace the setTimeout with:
  await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Accept': 'application/json' },
    body: new FormData(form)
  });
  ```

---

## 🛠️ Local Development

No build tools needed — just open in a browser:

```bash
# Option 1: VS Code Live Server extension (recommended)
# Right-click index.html → "Open with Live Server"

# Option 2: Python simple server
python3 -m http.server 3000
# Open http://localhost:3000

# Option 3: Node.js serve
npx serve .
```

---

## ♿ Accessibility Checklist

- [x] Semantic HTML landmarks
- [x] Proper heading hierarchy (h1 → h2 → h3)
- [x] ARIA labels on icon-only buttons and links
- [x] `aria-expanded` on hamburger toggle
- [x] `role="alert"` + `aria-live` on form errors
- [x] `role="progressbar"` on skill bars with valuenow/valuemin/valuemax
- [x] Focus-visible outline on all interactive elements
- [x] `prefers-reduced-motion` media query
- [x] Sufficient color contrast (WCAG AA)
- [x] `alt` text pattern for all images
- [x] `noopener noreferrer` on external links

---

## 📄 License

MIT — free to use, modify, and distribute.

---

*Construido con ❤️ y mucho ☕ por Andrés Castellanos*
