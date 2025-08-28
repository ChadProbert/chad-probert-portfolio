# Chad Probert's Developer Portfolio

### Tech Stack
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=fff)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=fff)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=fff)
![Context API](https://img.shields.io/badge/Context_API-000000?style=for-the-badge&logo=react&logoColor=fff)
![EmailJS](https://img.shields.io/badge/EmailJS-000000?style=for-the-badge&logo=emailjs&logoColor=fff)


### Features
- **Home** — Modern, responsive, and includes CTA buttons to download my CV and contact me.
- **About** — Learn about my mission and experience.
- **Skills** — A marquee showcasing my tech skills as icons.
- **Projects** — View my featured projects with live demos and GitHub repository links.
- **Contact** — Send a message directly to my email using EmailJS.
- **Theme** — Switch between light and dark themes.
- **SEO Optimized** — High SEO performance and fast loading times.

## Lighthouse Metrics

![Lighthouse Metrics](public/lighthouse-report.png)

## Setup Instructions

### Prerequisites
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)


### 1. Clone the repository
```bash
git clone https://github.com/ChadProbert/chad-probert-portfolio.git
```

### 2. Install Project Dependencies
```bash
cd chad-probert-portfolio && npm install
```

### 3. Setup Environment Variables

Create a `.env.local` file in the project root with the following variables:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=replace_with_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=replace_with_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=replace_with_public_key
```

### 4. Running the App
```bash
npm run dev
```

### 5. Open in Browser
Visit **[http://localhost:3000](http://localhost:3000)** in your browser.
