# Personal Portfolio Website (Performance Marketer + SEO Specialist)

A modern, dark-and-white themed portfolio site built with semantic HTML, lightweight CSS, and minimal JavaScript.

## Pages
- Home (`index.html`)
- About (`about.html`)
- Services (`services.html`)
- Portfolio (`portfolio.html`)
- Contact (`contact.html`)

## Features
- Clean minimal interface with dark UI + white accent
- Fully responsive navigation and layout
- Hero section with primary CTA
- Service blocks for SEO, Performance Marketing, Content Strategy
- Portfolio case study grid
- Contact form (name, email, message)
- SEO-friendly structure (semantic headings, meta descriptions, clear information architecture)
- Performance-focused implementation (no frameworks, no heavy assets)

## File Structure
```
.
├── index.html
├── about.html
├── services.html
├── portfolio.html
├── contact.html
├── assets
│   ├── css
│   │   └── styles.css
│   └── js
│       └── main.js
└── README.md
```

## Run Locally
Because this is a static site, you can run it with any local server.

### Option 1: Python
```bash
python3 -m http.server 8080
```
Then open: `http://localhost:8080`

### Option 2: VS Code Live Server
- Install the **Live Server** extension
- Right-click `index.html`
- Click **Open with Live Server**

## Core Web Vitals Notes
- Keeps CSS and JS small and local
- Uses system/standard fonts
- Avoids large media payloads
- Uses responsive layouts and lightweight interactions
