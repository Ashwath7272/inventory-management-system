# Inventory Management System

A full-stack Inventory Management System built using React, Node.js, Express.js, and MongoDB.

The application allows users to manage products, track inventory levels, search products, filter products by category, and identify low-stock products.

## Features

### Product Management
- Add new products
- View all products
- Update existing products
- Delete products
- Store product information in MongoDB

### Search and Filtering
- Search products by name
- Filter products by category
- Display matching products dynamically

### Inventory Monitoring
- Minimum stock level can be defined for each product
- Low-stock products are automatically highlighted
- Dedicated REST API available for retrieving low-stock products

### REST APIs

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/products` | Add a new product |
| GET | `/products` | Get all products |
| PUT | `/products/:id` | Update a product |
| DELETE | `/products/:id` | Delete a product |
| GET | `/products/low-stock` | Get low-stock products |

## Product Data Model

Each product contains:

- `id`
- `name`
- `category`
- `price`
- `quantity`
- `minStock`
- `createdAt`

## Technologies Used

### Frontend
- React
- Vite
- JavaScript
- CSS

### Backend
- Node.js
- Express.js
- REST API

### Database
- MongoDB
- Mongoose

## Project Structure

```text
inventory-management-system/
│
├── backend/
│   ├── models/
│   │   └── Product.js
│   │
│   ├── routes/
│   │   └── productRoutes.js
│   │
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── ProductForm.jsx
│   │   ├── ProductList.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
└── README.md