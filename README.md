// README and deployment setup files added.
// React app remains unchanged.

// File: .gitignore
/node_modules
/dist
.env

// File: README.md

# 🧵 Textile Supplier QR App

A web-based React app that allows textile suppliers to enter batch information and generate downloadable QR codes.

## 🔧 Features
- Form validation with required fields
- Generates QR Code for batch traceability
- QR Code download as image (PNG)
- Responsive and mobile-friendly

## 🧪 Tech Stack
- React (Vite)
- `qrcode.react` for QR code
- `html2canvas` for image export

## 🚀 Running Locally

```bash
npm install
npm run dev
```

Then visit: `http://localhost:5173`

## ☁️ Deployment

### 📦 Vercel
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" and import your GitHub repo
4. It auto-detects Vite. Click Deploy.

### 🌍 Netlify
1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import your repo
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Click Deploy.

---

Let me know if you want backend support, PDF exports, or a supplier dashboard next.
