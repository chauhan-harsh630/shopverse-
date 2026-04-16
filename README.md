# shopverse-
# 🛒 ShopVerse — MERN E-commerce Platform

> **"Curated essentials for modern life. Limitless choices, refined design."**
> Built from scratch. Shipped smart. Designed to scale.

---

## 🧩 What Problem Does ShopVerse Solve?

Most beginner projects are either too simple (todo lists) or too complex (cloned Amazon). ShopVerse hits the sweet spot — a **real-world e-commerce platform** that covers:

| Problem | How ShopVerse Solves It |
|---|---|
| No centralized product catalog | Multi-category product browsing with search & filter |
| No secure user system | JWT-based auth with register/login flow |
| No persistent cart | MongoDB-backed cart with quantity management |
| No order flow | Basic checkout → order creation pipeline |
| No scalable architecture | MERN stack with modular REST API |

This is not a toy project. It models the core of real e-commerce systems — auth, catalog, cart, orders — in a clean, extendable structure.

---

## 🚀 Overview

**ShopVerse** is a full-stack e-commerce web application built with the **MERN stack** (MongoDB, Express, React, Node.js).

Users can browse products across categories, manage their cart, authenticate securely, and place orders — all in a responsive, clean UI.

**Current Version:** `v1.0.0` — Core MVP  
**Status:** 🔨 Actively building, step by step

---

## 🎯 Features

### 👤 User Features
- Signup & Login (JWT-based authentication)
- Browse products by category
- Search products
- View product details
- Add / Remove items from cart
- Update cart quantity
- Place order (basic checkout)

### 🛠️ Admin Features *(Future Scope)*
- Add / Edit / Delete products
- Manage orders
- Manage users

---

## 🧱 Tech Stack

### Frontend
- **React** (Vite) — Fast dev server, modern bundling
- **CSS / Tailwind** — Clean, responsive UI

### Backend
- **Node.js + Express.js** — REST API server

### Database
- **MongoDB + Mongoose** — NoSQL, flexible schema for products & orders

### Authentication
- **JWT (JSON Web Tokens)** — Stateless, secure auth

### Deployment
| Layer | Platform |
|---|---|
| Frontend | Vercel |
| Backend | Render |
| Database | MongoDB Atlas |

---

## 📁 Project Structure

```
shopverse/
│
├── client/          # React frontend (Vite)
│   ├── src/
│   │   ├── pages/       # Home, Products, Cart, Auth, etc.
│   │   ├── components/  # Reusable UI components
│   │   └── context/     # Auth & Cart context
│
├── server/          # Node + Express backend
│   ├── routes/      # Auth, Products, Cart, Orders
│   ├── models/      # Mongoose schemas
│   ├── controllers/ # Business logic
│   └── middleware/  # Auth middleware
│
├── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone Repository

```bash
git clone https://github.com/yourusername/shopverse.git
cd shopverse
```

### 2. Backend Setup

```bash
cd server
npm install
```

Create `.env`:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

```bash
npm start
```

### 3. Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

## 🔌 API Endpoints

### Auth
```
POST  /api/auth/register   → Register new user
POST  /api/auth/login      → Login, returns JWT
```

### Products
```
GET   /api/products        → Fetch all products
GET   /api/products/:id    → Fetch single product
```

### Cart
```
POST  /api/cart            → Add item to cart
GET   /api/cart            → Get user's cart
DELETE /api/cart/:id       → Remove item from cart
```

### Orders
```
POST  /api/orders          → Place an order
```

---

## 🗄️ Database Schema

### User
```json
{
  "name": "string",
  "email": "string",
  "password": "hashed (bcrypt)",
  "isAdmin": "boolean"
}
```

### Product
```json
{
  "name": "string",
  "category": "Electronics | Clothing | Home...",
  "subCategory": "Laptop | T-Shirt | Furniture...",
  "price": "number",
  "description": "string",
  "image": "url",
  "stock": "number"
}
```

### Cart
```json
{
  "userId": "ref → User",
  "items": [
    { "productId": "ref → Product", "quantity": "number" }
  ]
}
```

### Order
```json
{
  "userId": "ref → User",
  "items": [ "...cart items snapshot..." ],
  "totalPrice": "number",
  "status": "pending | confirmed | shipped | delivered"
}
```

---

## 🌐 Pages

| Page | Route |
|---|---|
| Home | `/` |
| Products | `/products` |
| Product Details | `/products/:id` |
| Cart | `/cart` |
| Login / Signup | `/login`, `/signup` |
| About | `/about` |
| Contact | `/contact` |

---

## 📦 Deployment Guide

### Backend → Render
1. Connect your GitHub repo
2. Set build command: `npm install`
3. Set start command: `npm start`
4. Add environment variables (`MONGO_URI`, `JWT_SECRET`, `PORT`)

### Frontend → Vercel
1. Import project from GitHub
2. Add env variable: `VITE_API_URL=https://your-render-backend.onrender.com`
3. Deploy

---

## 🔮 Future Roadmap

ShopVerse is designed as a **foundation to expand.** Here's what's coming:

### Phase 2 — Better Shopping
- [ ] Wishlist functionality
- [ ] Product reviews & ratings
- [ ] Advanced search with filters (price range, category, rating)

### Phase 3 — Payments & Logistics
- [ ] Payment gateway (Stripe / Razorpay)
- [ ] Order tracking system
- [ ] Email notifications (order confirmation)

### Phase 4 — Admin & Analytics
- [ ] Admin dashboard (product, order, user management)
- [ ] Sales analytics & charts
- [ ] Inventory management

### Phase 5 — Scale
- [ ] Redis caching for product catalog
- [ ] Image uploads via Cloudinary
- [ ] Multi-vendor support

---

## ⚠️ Best Practices Followed

- No hardcoded API URLs — use `.env` variables
- Passwords hashed with bcrypt before storage
- JWT stored securely, not in localStorage (httpOnly cookies — future)
- Error handling middleware on all routes
- Modular folder structure (routes / controllers / models separated)
- Clean, responsive UI

---

## 🧠 What You Learn Building This

- Full-stack architecture (client ↔ server ↔ database)
- REST API design and CRUD operations
- JWT authentication flow (register → login → protected routes)
- MongoDB schema design with relationships (ref/populate)
- React state management (Context API)
- Deployment pipeline (Vercel + Render + Atlas)

---

## 📚 Build Log (Step-by-Step)

> Tracking progress as the project is built from scratch.

| Step | Status | Description |
|---|---|---|
| Project setup (Vite + Express) | ✅ Done | Folder structure, dependencies |
| MongoDB connection + .env | ✅ Done | Atlas setup, Mongoose config |
| User auth (register/login + JWT) | 🔨 In Progress | |
| Product model + API | ⬜ Pending | |
| Frontend: Home + Products page | ⬜ Pending | |
| Cart system (backend + frontend) | ⬜ Pending | |
| Order flow | ⬜ Pending | |
| Deployment | ⬜ Pending | |

---

## 👨‍💻 Author

**Harsh Chauhan**  
BCA Student | Full Stack Developer  
[GitHub](https://github.com/yourusername) · [LinkedIn](https://linkedin.com/in/yourprofile)

---

## 📌 Final Note

ShopVerse is not a tutorial clone. It's a **ground-up build** with a focus on real-world patterns — auth, data modeling, API design, and scalable structure.

> Start simple. Ship fast. Expand smart.