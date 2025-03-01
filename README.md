# Frvr Landing Page

Frvr is a modern landing page built with Astro and styled using Tailwind CSS. This project showcases various components that highlight the features and benefits of the Frvr service.

## Project Structure

```
frvr
├── public
│   ├── favicon.ico
│   └── assets
│       └── styles.css
├── src
│   ├── components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── Feature.astro
│   │   ├── HowItWorks.astro
│   │   ├── Accomplishments.astro
│   │   └── GiftFeature.astro
│   ├── layouts
│   │   └── MainLayout.astro
│   ├── pages
│   │   └── index.astro
│   └── styles
│       └── tailwind.css
├── package.json
├── astro.config.mjs
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Getting Started

To get started with the Frvr project, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd frvr
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

   Open your browser and navigate to `http://localhost:3000` to see the landing page in action.

## Deployment

To deploy the Frvr landing page on Vercel, follow these steps:

1. **Create a Vercel account** if you don't have one already.

2. **Install the Vercel CLI** globally:

   ```bash
   npm install -g vercel
   ```

3. **Deploy your project:**

   In the root of your project directory, run:

   ```bash
   vercel
   ```

   Follow the prompts to link your project to your Vercel account and deploy it.

4. **Visit your deployed site** using the URL provided by Vercel.

## Components

- **Header**: Contains the site title and navigation links.
- **Footer**: Displays copyright information and additional links.
- **Hero**: Features a prominent title and call-to-action buttons.
- **HowItWorks**: Outlines the service process in a grid layout.
- **Accomplishments**: Highlights community-driven and eco-friendly aspects.
- **GiftFeature**: Explains the unique borrowing feature.

## License

This project is licensed under the MIT License. Feel free to modify and use it as per your needs.