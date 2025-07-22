# Product Dashboard

Welcome to the **Product Dashboard** — a modern, user-friendly e-commerce frontend built with **React**, **Redux Toolkit**, and **Tailwind CSS**. This project is ideal for developers looking to explore product listing, cart management, favourites handling, and seamless API integration using the [FakeStore API](https://fakestoreapi.com).

---

## What This Project Offers

This isn’t just another frontend template. The Product Dashboard includes:

-  Product search with debounce functionality
-  Add/remove products to favourites (persisted in Redux)
-  Cart management (placeholder structure)
-  Product detail view with navigation
-  API integration with [FakeStore API](https://fakestoreapi.com)
-  Fully responsive and mobile-first layout
-  Basic login/logout handling with `localStorage` token
-  Navigation using React Router
-  Centralized state management with Redux Toolkit

---

##  Preview

> _“Here’s what you’ll experience when you fire it up:”_

| Feature | Screenshot |
|--------|------------|
|  Desktop View | *[Insert screenshot here]* |
|  Mobile Responsive Menu | *[Insert screenshot here]* |
|  Product Card UI | *[Insert screenshot here]* |

---

##  Tech Stack

| Tech | Purpose |
|------|---------|
| React | Frontend library |
| React Router DOM | Routing & navigation |
| Redux Toolkit | State management |
| Tailwind CSS | Styling |
| FakeStore API | Mock backend for products |
| Axios / Fetch | API requests |

---

##  Project Structure 

src/
├── app/ # Redux store setup
├── components/ # Reusable UI components
├── features/ # Redux slices (products, cart, favourites)
├── pages/ # Route-based pages like Home, ProductList, Cart, etc.
├── utils/ # Utility functions (e.g., debounce)
├── App.js # App entry with routing
└── index.js # Main render with Redux Provider

```bash
git clone https://github.com/yourusername/product-dashboard.git
cd product-dashboard