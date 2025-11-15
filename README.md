# Urbe Hogar

[cloudflarebutton]

A modern, fast, and visually elegant real estate website for property listings, search, and client inquiries.

Urbe Hogar is a visually stunning, modern, and high-performance real estate website designed for ServiCity. It provides a seamless user experience for browsing, searching, and inquiring about properties. The platform features a minimalist and elegant design, focusing on high-quality imagery and intuitive navigation. The entire application is built on Cloudflare's edge network, ensuring exceptional speed and reliability for users in Argentina.

## ✨ Key Features

*   **Dynamic Homepage**: A beautiful landing page with a prominent search bar and featured property listings.
*   **Advanced Property Search**: A comprehensive listing page with advanced filtering and sorting by type, location, price, and more.
*   **Detailed Property Views**: In-depth pages for each property, showcasing image galleries, full descriptions, key features, amenities, and an embedded map.
*   **Agent Contact Forms**: Easy-to-use forms for users to inquire about properties directly.
*   **Modern & Responsive UI**: A clean, minimalist aesthetic that looks perfect on any device, from mobile phones to desktops.
*   **High-Performance**: Built on Cloudflare Workers and Durable Objects for exceptional speed and reliability.

## 🚀 Technology Stack

*   **Frontend**: React, Vite, React Router, Tailwind CSS, shadcn/ui
*   **Backend**: Hono on Cloudflare Workers
*   **Database**: Cloudflare Durable Objects
*   **UI Components**: Lucide React, Framer Motion, Embla Carousel
*   **Forms**: React Hook Form with Zod for validation
*   **Language**: TypeScript

## 🏁 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed on your system:
*   [Node.js](https://nodejs.org/) (v18 or later)
*   [Bun](https://bun.sh/)
*   [Git](https://git-scm.com/)

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/urbe-hogar-inmobiliaria.git
    cd urbe-hogar-inmobiliaria
    ```

2.  **Install dependencies:**
    This project uses Bun for package management.
    ```sh
    bun install
    ```

3.  **Run the development server:**
    This command starts the Vite development server for the frontend and the Wrangler development server for the backend worker.
    ```sh
    bun dev
    ```
    The application will be available at `http://localhost:3000`.

## 📂 Project Structure

The codebase is organized into three main parts:

*   `src/`: Contains the frontend React application, including pages, components, hooks, and utility functions.
*   `worker/`: Contains the Hono backend API that runs on a Cloudflare Worker. This is where API routes and data logic are defined.
*   `shared/`: Contains TypeScript types and mock data that are shared between the frontend and the backend to ensure type safety.

## 💻 Development

*   **Running the dev server**: `bun dev`
*   **Linting**: `bun lint`
*   **Building for production**: `bun build`

The frontend is built with Vite and the backend is a Hono application. The development server uses `wrangler` to simulate the Cloudflare environment locally, including the Durable Object for storage.

## ☁️ Deployment

This project is designed for seamless deployment to Cloudflare Pages.

1.  **Login to Wrangler:**
    If you haven't already, authenticate Wrangler with your Cloudflare account.
    ```sh
    bunx wrangler login
    ```

2.  **Deploy the application:**
    Run the deploy script, which will build the application and deploy it to your Cloudflare account.
    ```sh
    bun deploy
    ```

Alternatively, you can deploy directly from your GitHub repository using the button below.

[cloudflarebutton]

## ⚙️ Configuration

The application is architected to use a single `GlobalDurableObject` for all data persistence, managed through an entity abstraction layer. All necessary Cloudflare bindings are pre-configured in `wrangler.jsonc`.

**Important**: Do not modify `wrangler.jsonc` or attempt to add new bindings, as this may break the core functionality of the application.