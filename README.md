# Beautiful Portfolio Website - Vivek Velugoti

A modern, high-performance, and visually stunning personal portfolio website designed to showcase projects, skills, coding achievements, and professional background. Featuring a celestial design theme, interactive UI components, dark/light mode toggle, and serverless backend integrations.

---

## 🚀 Live Demo & Deployment

*   **Live Website:** [d2qpdwu496dmt8.cloudfront.net](https://d2qpdwu496dmt8.cloudfront.net/)
*   **Infrastructure:** Hosted on **AWS S3** and distributed globally via **Amazon CloudFront**.
*   **CI/CD Pipeline:** Fully automated deployment using **GitHub Actions** workflows.

---

## 🛠️ Technology Stack

*   **Frontend Framework:** [React (v18)](https://react.dev/) initialized with [Vite](https://vitejs.dev/) for optimal performance.
*   **Routing:** [React Router (v7)](https://reactrouter.com/) for single-page application navigation.
*   **Styling & UI:**
    *   **Tailwind CSS (v4):** Utilizing Tailwind's modern `@theme` directive, custom utility classes, and HSL variables.
    *   **Icons:** [Lucide React](https://lucide.dev/) & [Simple Icons](https://simpleicons.org/) for brands.
    *   **Toasts:** [Radix UI Toast](https://www.radix-ui.com/primitives/docs/components/toast) for user interaction feedback.
*   **Backend & Integrations:**
    *   **EmailJS:** Handles instant client-side email notifications when contact messages are sent.
    *   **AWS API Gateway & DynamoDB:** Asynchronously stores contact form details in a database.

---

## ✨ Features

*   🌌 **Celestial Starry Background:** Dynamic canvas-like space effect featuring twinkling stars and shooting meteors. Inverts smoothly in light mode.
*   🌓 **Theme Toggle:** Persistent dark/light theme switch saved to browser `localStorage`.
*   📱 **Responsive Navigation:** Smooth scroll navigation bar that transforms into a custom hamburger overlay on mobile viewports.
*   📊 **Interactive Skills Selector:** Clickable filters displaying progress bars that animate dynamically on load.
*   🔗 **Coding Profiles:** Seamless integration showing verified platforms such as **LeetCode**, **GeeksForGeeks**, and **HackerRank**.
*   📨 **Dual-Route Contact Form:** Form data is simultaneously mailed to Vivek and stored safely inside a serverless Amazon DynamoDB table.

---

## 📁 Project Structure

```text
portfolio/
├── vite.config.js          # Vite configuration with path aliases
├── package.json            # Scripts & dependencies
├── index.html              # Main HTML entry file
└── src/
    ├── main.jsx            # React root component mounting
    ├── App.jsx             # Router and global toaster wrapper
    ├── index.css           # Global custom styles, Tailwind v4 theme, animations
    ├── lib/
    │   └── utils.js        # cn utility for Tailwind class merging
    ├── hooks/
    │   └── use-toast.js    # React hook controlling toasts
    ├── pages/
    │   ├── Home.jsx        # Landing page layout consolidating all sections
    │   └── NotFound.jsx    # Fallback 404 page
    └── components/
        ├── ui/             # Radix UI toast primitives
        ├── Navbar.jsx      # Sticky navbar with mobile layout
        ├── ThemeToggle.jsx # Light/dark mode toggle button
        ├── StarBackground.jsx # Background star/meteor simulation
        ├── HeroSection.jsx # Animated header introducing Vivek
        ├── AboutSection.jsx# Highlights profile details
        ├── SkillsSection.jsx# Interactive categorized skill bars
        ├── CodingProfileSection.jsx # LeetCode, GFG & HackerRank cards
        ├── ProjectsSection.jsx # Project showcase cards
        ├── ContactSection.jsx # Send message via EmailJS & AWS DynamoDB
        └── Footer.jsx      # Footer links and copyrights
```

---

## 💻 Getting Started Locally

### Prerequisites

Ensure you have **Node.js** (v18 or higher) and **npm** installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/vivek0u0705/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser to view the application.

4. Build for production:
   ```bash
   npm run build
   ```
