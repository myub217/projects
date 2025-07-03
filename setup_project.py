import os
import shutil

# Base directory (current)
base_dir = os.getcwd()

# Define directories to ensure exist
dirs = [
    'public',
    'src/components',
    'src/pages'
]

# Remove old config files if misnamed
old_postcss = os.path.join(base_dir, 'postcss.config.js')
if os.path.exists(old_postcss):
    os.remove(old_postcss)

# File definitions: relative path -> content
files = {
    'package.json': '''{
  "name": "modular-onepage",
  "version": "0.0.1",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.0.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0",
    "tailwindcss": "^3.4.0",
    "typescript": "^5.0.0",
    "vite": "^5.0.0"
  }
}''',
    'postcss.config.cjs': '''module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}''',
    'tailwind.config.js': '''module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}''',
    'vite.config.js': '''import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  css: {
    postcss: './postcss.config.cjs',
  },
})''',
    'public/index.html': '''<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Modular OnePage</title>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.tsx"></script>
</body>
</html>''',
    'src/style.css': '''@tailwind base;
@tailwind components;
@tailwind utilities;''',
    'src/main.tsx': '''import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import IndexPage from './pages/IndexPage'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <IndexPage />
  </React.StrictMode>
)''',
    'src/pages/IndexPage.tsx': '''import React, { useState } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import ServicesSection from '../components/ServicesSection'
import Footer from '../components/Footer'
import Login from '../components/Login'
import SecretRoom from '../components/SecretRoom'

export default function IndexPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <ServicesSection />
        {isLoggedIn ? <SecretRoom /> : <Login onSuccess={() => setIsLoggedIn(true)} />}
      </main>
      <Footer />
    </div>
  )
}''',
    # Components
    'src/components/Header.tsx': '''import React, { FC } from 'react'

const Header: FC = () => (
  <header className="bg-primary text-white py-4 text-center">
    <h1 className="text-2xl font-heading">My Modular OnePage</h1>
  </header>
)

export default Header''',
    'src/components/Hero.tsx': '''import React, { FC } from 'react'

const Hero: FC = () => (
  <section className="py-12 text-center bg-primary-light">
    <h2 className="text-3xl font-bold mb-4 text-primary-dark">Welcome to Our OnePage Site</h2>
    <p className="text-textSecondary max-w-xl mx-auto">
      This modern, lightweight website is built using React + Vite + TailwindCSS for speed and simplicity.
    </p>
  </section>
)

export default Hero''',
    'src/components/About.tsx': '''import React, { FC } from 'react'

const About: FC = () => (
  <section className="py-12 bg-white">
    <div className="max-w-3xl mx-auto px-4 text-center">
      <h3 className="text-2xl font-semibold text-primary-dark mb-4">About Us</h3>
      <p className="text-textPrimary leading-relaxed">
        We are a small but passionate team focused on delivering fast, reliable, and user-friendly web experiences.
      </p>
    </div>
  </section>
)

export default About''',
    'src/components/ServicesSection.tsx': '''import React, { FC } from 'react'

const ServicesSection: FC = () => {
  const services = [
    'Landing Page Design',
    'Login System Integration',
    'Responsive Layouts',
    'Content Management',
    'Form Handling',
    'API Integration',
    'SEO Optimization',
    'TailwindCSS Styling',
    'React Component Structure',
  ]

  return (
    <section className="py-12 bg-secondary">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h3 className="text-2xl font-semibold text-primary-dark mb-6">Our Services</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left text-textPrimary text-sm">
          {services.map((s, i) => (
            <li key={i} className="p-3 bg-white rounded shadow-sm hover:shadow-md transition">
              ✅ {s}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ServicesSection''',
    'src/components/Footer.tsx': '''import React, { FC } from 'react'

const Footer: FC = () => (
  <footer className="bg-secondary text-center text-xs text-textSecondary py-4">
    © 2025 My OnePage App
  </footer>
)

export default Footer''',
    'src/components/Login.tsx': '''import React, { useState, FC } from 'react'

interface LoginProps { onSuccess: () => void }
const Login: FC<LoginProps> = ({ onSuccess }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const handleLogin = () => username === 'admin' && password === '1234' ? onSuccess() : alert('Login failed')
  return (
    <div className="p-4 border rounded max-w-sm mx-auto">
      <h2 className="text-lg mb-2">Login</h2>
      <input type="text" placeholder="Username" className="border p-1 mb-2 w-full" value={username} onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" className="border p-1 mb-2 w-full" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin} className="bg-primary text-white px-4 py-1 rounded hover:bg-primary-dark">Login</button>
    </div>
  )
}

export default Login''',
    'src/components/SecretRoom.tsx': '''import React, { FC } from 'react'

const SecretRoom: FC = () => (
  <section className="p-4 bg-white text-center">
    <h2 className="text-2xl font-bold">Secret Room</h2>
    <p>Welcome to the secret content!</p>
  </section>
)

export default SecretRoom'''
}

# Create directories
for d in dirs:
    os.makedirs(os.path.join(base_dir, d), exist_ok=True)

# Write files
def write_file(path, content):
    full = os.path.join(base_dir, path)
    dirpath = os.path.dirname(full)
    if not os.path.isdir(dirpath):
        os.makedirs(dirpath, exist_ok=True)
    with open(full, 'w', encoding='utf-8') as f:
        f.write(content)

for p, c in files.items():
    write_file(p, c)

print('✅ Project setup complete!')
