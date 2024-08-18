# Help Center API

## Overview

This project is a fully responsive Help Center API built with the MERN stack (MongoDB, Express.js, React.js, Node.js) and styled using Tailwind CSS. It allows users to manage "Help Center" cards for sections like "Branches," "Manage Your Account," and "Manage Billing." The React frontend dynamically fetches and displays data from the server, with search functionality.

## Getting Started

### How to Use Locally

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/help-center-api.git
   cd help-center-api
   ```

2. **Set up the Backend:**

Navigate to the backend directory and install the dependencies:

```
cd backend
npm install
```

Start the backend server: `npm run dev`

The backend server will be running on: `http://localhost:5000.`

3. **Set up the Frontend:**

Navigate to the frontend directory and install the dependencies:

```
cd frontend
npm install
```

Start the frontend server: `npm run dev`

The frontend will be running on: `http://localhost:5173.`

4. **Technologies Used:**

   Frontend: `React.js`

   Backend: `Node.js + Express.js`

   Database: `MongoDB (mongoose)`

   Styling: `Tailwind CSS`

   **API Endpoint:**

   `GET /api/ping (cheking server)`

   `POST /api/cards (Adds a new card) `

   `GET /api/cards (Gets all card)`

   `GET /api/cards/:title (Gets specific card)`
