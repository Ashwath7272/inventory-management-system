# Inventory Management System

A simple full-stack Inventory Management System built using React, Node.js, Express.js, and MongoDB.

## Features

* Add products
* View all products
* Update products
* Delete products
* Search products by name
* Filter products by category
* Highlight low-stock products
* REST APIs for product management
* MongoDB database persistence

## Technologies Used

* React
* Vite
* Node.js
* Express.js
* MongoDB
* Mongoose
* CSS

## REST APIs

| Method | Endpoint              | Description            |
| ------ | --------------------- | ---------------------- |
| POST   | `/products`           | Add a product          |
| GET    | `/products`           | Get all products       |
| PUT    | `/products/:id`       | Update a product       |
| DELETE | `/products/:id`       | Delete a product       |
| GET    | `/products/low-stock` | Get low-stock products |

## Product Fields

Each product contains:

* `id`
* `name`
* `category`
* `price`
* `quantity`
* `minStock`
* `createdAt`

MongoDB automatically generates the product `_id`, which is used as the product identifier.

## Project Structure

```text
inventory-management-system/
│
├── backend/
│   ├── models/
│   │   └── Product.js
│   ├── routes/
│   │   └── productRoutes.js
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── ProductForm.jsx
│   │   ├── ProductList.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   ├── package.json
│   └── package-lock.json
│
├── .gitignore
└── README.md
```

## Setup

### Backend

Open a terminal and navigate to the backend:

```bash
cd backend
npm install
```

Create a `.env` file inside `backend`:

```env
MONGO_URI=mongodb://127.0.0.1:27017/inventoryDB
PORT=5000
```

Start MongoDB locally, then start the backend:

```bash
npm start
```

The backend runs at:

```text
http://localhost:5000
```

### Frontend

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

The frontend runs at:

```text
http://localhost:5173
```

## Low Stock Logic

A product is considered low stock when:

```text
quantity <= minStock
```

Low-stock products are highlighted in the interface.

The backend also provides:

```text
GET /products/low-stock
```

which returns only low-stock products.

## Error Handling

The application includes error handling for:

* Invalid product data
* Product not found
* Database errors
* Failed API requests
* Invalid update/delete operations

## Assumptions

* The application is intended to run locally.
* MongoDB is used as the local database.
* Product price, quantity, and minimum stock are numeric values.
* A product is considered low stock when its quantity is less than or equal to its minimum stock.
* MongoDB's generated `_id` is used as the product ID.

## Future Improvements

Possible future improvements include:

* User authentication
* Product images
* Inventory transaction history
* Stock-in and stock-out tracking
* Dashboard statistics
* Pagination
* Sorting
* CSV/Excel export
* Supplier management
* Automated low-stock notifications
* Cloud deployment

## Demo

A demo video will demonstrate:

1. Adding a product
2. Viewing products
3. Searching by name
4. Filtering by category
5. Editing a product
6. Deleting a product
7. Low-stock highlighting

## Conclusion

This project demonstrates a complete full-stack inventory management workflow using React, Node.js, Express.js, and MongoDB.
