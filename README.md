# 🛒 E-Commerce Web App — Frontend

A full-featured e-commerce frontend built with **React** and **Vite**, featuring product browsing, cart management, checkout with delivery options, order tracking, and a connected REST API backend.

🔗 **Live Demo:** [ecommerce-frontend-sigma-ivory.vercel.app](https://ecommerce-frontend-sigma-ivory.vercel.app/)
🔗 **Backend Repo:** [ecommerce-backend](https://github.com/adityakumar712/ecommerce-backend)

---

## 📌 About The Project

This project is a complete, working e-commerce storefront built to practice and demonstrate real-world frontend development skills — from product listing and cart logic to a multi-step checkout flow and order tracking, all wired to a live REST API.

It was built as part of my frontend development learning journey, focusing on:

- Component-based architecture with React
- Client-side routing with React Router
- REST API integration (Axios)
- State management with React Hooks
- Responsive, production-style UI
- Deploying a full-stack app (frontend + backend) live

---

## ✨ Features

- 🏠 **Home Page** — browse products with live search
- 🛍️ **Add to Cart** — quantity selection and instant cart updates
- 🧺 **Cart & Checkout** — edit quantities, choose delivery options, view payment summary
- 📦 **Order Placement** — place orders and view order history
- 🚚 **Order Tracking** — track individual orders with estimated delivery dates
- 📱 **Responsive Design** — works across mobile, tablet, and desktop
- 🔌 **Live Backend Integration** — real API calls, not mock data
- ✅ **Unit Tested** — core components covered with Jasmine & Vitest

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React.js | UI library / component architecture |
| Vite | Build tool and dev server |
| React Router | Client-side routing |
| Axios | REST API requests |
| Day.js | Date formatting (delivery estimates) |
| Jasmine & Vitest | Unit testing |
| HTML5 / CSS3 | Structure and styling |
| Git & GitHub | Version control |
| Vercel | Deployment / hosting |

---

## 🎯 Learning Outcomes

Through building this project, I practiced:

- Structuring a multi-page React app with React Router
- Managing shared state across pages (cart, orders)
- Handling async API calls and loading states
- Building a checkout flow with derived calculations (totals, delivery estimates)
- Writing unit tests for components with Vitest/Jasmine
- Configuring environment variables for a production deployment
- Connecting a deployed frontend to a separately deployed backend API

---

## 🚀 Running Locally

\`\`\`bash
# Clone the repo
git clone https://github.com/adityakumar712/ecommerce-frontend.git
cd ecommerce-frontend

# Install dependencies
npm install

# Start the dev server
npm run dev
\`\`\`

By default, the app calls the backend at `http://localhost:3000`. To point it at a different backend, create a `.env` file:

\`\`\`
VITE_API_URL=http://localhost:3000
\`\`\`

> ⚠️ Make sure the [backend](https://github.com/adityakumar712/ecommerce-backend) is running for the app to load product data.

---

## 👨‍💻 Author

**Aditya Kumar**
Frontend Developer | MCA Student

**Skills:** React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Vite, REST APIs, Git & GitHub

---

## 📄 License

This project was built for educational and portfolio purposes.
