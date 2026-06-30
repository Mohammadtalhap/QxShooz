# 🛍️ QxShooz - Modern E-Commerce Shoe Store

A modern, responsive e-commerce application clone built with React, Vite, and Tailwind CSS. QxShooz has various functionalities such as product filtering, cart management, wishlist functionality, and a beautiful user interface.

<div align="center">

[![React](https://img.shields.io/badge/React-19.2.4-blue?logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8.0.4-646CFF?logo=vite)](https://vite.dev)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4.2.2-38B2AC?logo=tailwind-css)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

</div>

---

## ✨ Features

- 🏠 **Home Page** - Interactive hero slideshow with promotional banners
- 🛒 **Product Catalog** - Browse shoes with advanced filtering and search
- 🔍 **Smart Search** - Real-time product search functionality
- ❤️ **Wishlist System** - Save favorite products for later
- 🛍️ **Shopping Cart** - Add/remove items with quantity management
- 💾 **Persistent Storage** - Cart and wishlist data saved in localStorage
- 📱 **Responsive Design** - Mobile-first approach with Tailwind CSS
- 🎨 **Beautiful UI** - Modern design with smooth animations and transitions
- 📰 **Blog Section** - Customer testimonials and product insights
- 📧 **Newsletter** - Email subscription form
- 🎯 **Product Categories** - Shop by collection and brand

---

## 📋 Table of Contents

- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Running the Application](#running-the-application)
- [Key Features Explained](#key-features-explained)
- [Contributing](#contributing)
- [License](#license)

---

## 🛠️ Tech Stack

### Frontend Framework
- **React 19.2.4** - UI library
- **Vite 8.0.4** - Next-generation build tool
- **React Router DOM 7.14.2** - Client-side routing

### Styling & UI
- **Tailwind CSS 4.2.2** - Utility-first CSS framework
- **Lucide React 1.14.0** - Icon library
- **React Icons 5.6.0** - Popular icon sets
- **Swiper 12.1.3** - Carousel/slider component

### State Management
- **React Context API** - Global state for cart and wishlist
- **localStorage** - Client-side persistent storage

### Development Tools
- **ESLint 9.39.4** - Code quality and linting
- **@vitejs/plugin-react** - Fast Refresh support

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16.0.0 or higher) - [Download](https://nodejs.org/)
- **npm** (v7.0.0 or higher) - Comes with Node.js
- **Git** - For version control

Check your versions:
```bash
node --version
npm --version
```

---

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd QxShooz
```

### 2. Install Dependencies
```bash
npm install
```

This will install all the required packages listed in `package.json`.

### 3. Verify Installation
```bash
npm list
```

---

## ▶️ Running the Application

### Development Server
Start the development server with hot module reloading (HMR):

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

---

## 🎯 Key Features Explained

### 🛒 Shopping Cart
- **Location**: `src/context/CartContext.jsx` and `src/components/CartSidebar.jsx`
- **Features**:
  - Add/remove items
  - Update quantities
  - Persistent storage with localStorage
  - Real-time cart updates

### ❤️ Wishlist System
- **Location**: `src/context/WishlistContext.jsx` and `src/components/WishlistSidebar.jsx`
- **Features**:
  - Save favorite products
  - View saved items in sidebar
  - Persistent storage

### 🔍 Product Search & Filtering
- **Location**: `src/components/ProductsGridWithFilters.jsx` and `src/components/SidebarFilters.jsx`
- **Features**:
  - Real-time search
  - Filter by category, price range, rating
  - Dynamic product display

### 📱 Responsive Navigation
- **Location**: `src/components/Header/` folder
- **Features**:
  - Dropdown menus for products, shops, pages, blog
  - Mobile-friendly navigation
  - Search bar integration
  - Cart and wishlist icons

---

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vite.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [React Router](https://reactrouter.com)
- [Context API](https://react.dev/reference/react/useContext)

---

<img width="201" height="251" alt="1781074837671-download-(1)" src="https://github.com/user-attachments/assets/49153e39-3bf9-479a-b6ad-b23ac59fb483" />


<div align="center">

**Happy Coding! 🚀**

If you find this project helpful, please give it a ⭐

</div>
