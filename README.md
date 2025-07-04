# Falcon E-commerce Platform

This project is a recreation of parts of an e-commerce platform, specifically focusing on the Product Details Page and the Cart Page, based on a provided Figma design and a set of APIs.

---

## Live Demo

- **Live Application:** [https://falcon-steadfast.vercel.app/](https://falcon-steadfast.vercel.app/)
- **Product Page Example:** [https://falcon-steadfast.vercel.app/products/mr-noodles-korean-super-spicy-8pcs](https://falcon-steadfast.vercel.app/products/mr-noodles-korean-super-spicy-8pcs)
- **My Cart Page:** [https://falcon-steadfast.vercel.app/myCart](https://falcon-steadfast.vercel.app/myCart)
- **Proxy Backend Deployment:** [https://vercel.com/md-sojib-hossain-cses-projects/proxy-backend](https://vercel.com/md-sojib-hossain-cses-projects/proxy-backend)

---

## Project Overview

The core requirement was to design and implement two key pages: the **Product Details Page** and the **My Cart Page**, adhering to a given Figma design and utilizing provided APIs. The project also addressed challenges related to API security and mixed content issues during deployment.

---

## Features

### 1. Product Details Page

- **Product Image Gallery:** Displays a main product image along with thumbnails for other variations.
- **Relevant Details:** Shows product information fetched from the API, including name, price, and other specifications.
- **Quantity Selector:** Allows users to select the desired quantity of a product.
- **Add to Cart Functionality:** An "Add to Cart" button with relevant interactions. Cart data is persistently stored using **Local Storage**.
- **Description and Specification:** Dedicated sections for product description and specifications, featuring a **"Show More" toggle** for expandable content.
- **Category Display:** Shows the product's category fetched from the category API.

### 2. Cart Page

- **Cart Item Display:** Clearly lists all items in the cart, showing product **image, name, color, size, quantity, and individual prices**.
- **Order Summary:** A sidebar displaying the **subtotal** and **total amount** of the cart. (Note: Coupon functionality was mentioned in the requirement but not explicitly implemented in the provided description, assuming it's part of the future scope or omitted for brevity).
- **Quantity Update:** Users can easily **change the quantity** of items directly within the cart.
- **Item Removal:** Functionality to **delete a single item or selected items** from the cart.
- **Terms & Conditions:** A checkbox to signify agreement with terms and conditions.
- **Proceed to Checkout:** The "Proceed to Checkout" button is **enabled only when the terms and conditions checkbox is checked**.

---

## Tech Stack

- **Framework/Library:** **React.js**
- **State Management:** **Redux.js** (utilizing Redux Toolkit)
- **UI Library:** **Tailwind CSS** for styling and responsive design.
- **API Integration:** **RTK Query** for efficient API calls and state management integration.
- **Routing:** **React Router** for client-side navigation.
- **Image Optimization/CDN:** **ImageKit.io** was used to handle image display issues and provide a reliable CDN service, especially for images from insecure API endpoints.
- **Proxy Server:** A custom **proxy backend** was built and deployed to overcome mixed content errors and enable secure communication with the provided insecure API endpoints.

---

## API Endpoints Used

- **Category API:** `http://157.230.240.97:9999/api/v1/categories`
- **Products API:** `http://157.230.240.97:9999/api/v1/shop/products`
- **Single Product API:** `http://157.230.240.97:9999/api/v1/product/iphone-15-plus` (Dynamic product slugs are used for actual product fetching)

**Note:** Due to the insecure nature of the provided API endpoints (HTTP), a proxy server (`https://vercel.com/md-sojib-hossain-cses-projects/proxy-backend`) was implemented to avoid mixed content issues during deployment on secure hosting services.

---

## Installation and Setup

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-link>
    cd <your-project-folder>
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```
3.  **Start the development server:**
    ```bash
    npm start
    # or
    yarn start
    ```

The application should now be running on `http://localhost:3000` (or another port if 3000 is occupied).

---

## Challenges Faced & Solutions

- **Insecure API Endpoints & Mixed Content Errors:** The primary challenge was the use of `http` APIs, which are not accepted by modern deployment services (like Vercel) when the application itself is served over `https`.
  - **Solution:** A dedicated **proxy server** was developed and deployed. All API calls from the React application are routed through this secure proxy, which then forwards the requests to the original insecure endpoints, effectively bypassing the mixed content issue.
- **Image Loading Issues:** Even with a proxy, direct image URLs from the insecure API could still lead to broken images or security warnings if not handled.
  - **Solution:** **ImageKit.io**, a cloud CDN service, was utilized. Image URLs from the API were transformed to use ImageKit's CDN, ensuring reliable and secure image delivery.

---

## Figma Design

The project was implemented based on the following Figma design:
[https://www.figma.com/design/e6YDoYufKcyxMTqKPZEfty/Design-Task--001?node-id=0-1&t=wuZcE1AYRDfgMzWs-1](https://www.figma.com/design/e6YDoYufKcyxMTqKPZEfty/Design-Task--001?node-id=0-1&t=wuZcE1AYRDfgMzWs-1)

---

## Submission Details

This project has been submitted via the Google Form provided as part of the task.

---

## Next Steps

Upon successful review of this task, I look forward to the technical interview at Steadfast Corporate Office.

Best regards,

Md. Sojib Hossain
