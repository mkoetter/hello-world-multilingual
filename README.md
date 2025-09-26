# Multilingual Hello World

A Next.js application that displays "Hello World" in 20 different languages with cycling functionality. Built to test and verify the complete development workflow from local development to GitHub version control and Vercel deployment.

## 🌍 Features

- **20 Languages**: Cycle through Hello World greetings in 20 different languages
- **Interactive UI**: Previous/Next buttons and main cycling button
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Dark Mode Support**: Automatic dark/light mode switching
- **Modern Stack**: Built with Next.js 15, TypeScript, and Tailwind CSS
- **Smooth Animations**: Transitions between language changes

## 🚀 Live Demo

Visit the live application: [https://hello-world-multilingual-1uw6nsppe-michael-koetters-projects.vercel.app](https://hello-world-multilingual-1uw6nsppe-michael-koetters-projects.vercel.app)

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.4 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Version Control**: Git & GitHub

## 🌐 Supported Languages

1. English - Hello World
2. Spanish - Hola Mundo
3. French - Bonjour le Monde
4. German - Hallo Welt
5. Italian - Ciao Mondo
6. Portuguese - Olá Mundo
7. Chinese - 你好世界
8. Japanese - こんにちは世界
9. Korean - 안녕하세요 세계
10. Russian - Привет мир
11. Arabic - مرحبا بالعالم
12. Hindi - नमस्ते दुनिया
13. Dutch - Hallo Wereld
14. Swedish - Hej Världen
15. Polish - Witaj Świecie
16. Turkish - Merhaba Dünya
17. Greek - Γεια σου Κόσμε
18. Hebrew - שלום עולם
19. Thai - สวัสดีโลก
20. Vietnamese - Xin chào thế giới

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mkoetter/hello-world-multilingual.git
cd hello-world-multilingual
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
hello-world-multilingual/
├── src/
│   └── app/
│       ├── page.tsx          # Main application component
│       ├── layout.tsx         # Root layout
│       └── globals.css        # Global styles
├── public/                    # Static assets
├── next.config.ts            # Next.js configuration
├── tailwind.config.ts        # Tailwind CSS configuration
└── package.json              # Dependencies and scripts
```

## 🔄 Development Workflow

This project demonstrates the complete development workflow:

1. **Local Development**: Next.js dev server with hot reload
2. **Version Control**: Git commits and GitHub repository
3. **Deployment**: Automatic Vercel deployment from GitHub
4. **Production**: Live application with static optimization

## 🚀 Deployment

### Automatic Deployment (Recommended)

This project is configured for automatic deployment:
- Push to `main` branch triggers Vercel deployment
- Connected GitHub repository for continuous deployment

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to production
vercel --prod
```

## 🎨 Customization

### Adding New Languages

Edit the `translations` array in `src/app/page.tsx`:

```typescript
const translations = [
  { language: 'Your Language', greeting: 'Your Greeting', code: 'xx' },
  // ... existing translations
];
```

### Styling Changes

Modify Tailwind classes in `src/app/page.tsx` or add custom CSS to `src/app/globals.css`.

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Deployed on [Vercel](https://vercel.com/)
- Translations sourced from native speakers and Google Translate

---

**Purpose**: This application was created to test and verify the complete development environment setup, including local development, GitHub integration, and Vercel deployment workflows.