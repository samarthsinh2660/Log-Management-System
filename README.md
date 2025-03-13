
# Log System Project

This project is a digital log system application built using the PERN stack:
- **PostgreSQL** for the database
- **Express** and **Node.js** for the backend server
- **React** (with Vite) for the frontend

The application is designed to log and display daily operational entries with a focus on a clean, responsive interface and scalable architecture.

## Project Structure

```
project-root/
│
├── frontend/               # React Vite application
│   ├── public/
│   ├── src/
│   │   ├── App.jsx         # Main React component
│   │   └── App.css         # Component styles
│   ├── .env                # Frontend environment variables (e.g., VITE_BACKEND_URL)
│   └── package.json
│
└── backend/                # Express backend server
    ├── server.js           # Express server with nodemon support
    ├── .env                # Backend environment variables (database credentials, PORT, etc.)
    └── package.json
```

## Prerequisites

- [Node.js](https://nodejs.org/en/) (v14 or higher recommended)
- npm or yarn package manager
- PostgreSQL database

## Setup Instructions

### 1. Clone the Repository

Clone this repository to your local machine:

```bash
git clone <repository-url>
cd project-root
```

### 2. Backend Setup

1. **Navigate to the `backend` folder:**

   ```bash
   cd backend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

   The backend dependencies include `express`, `cors`, `pg`, `dotenv`, and `nodemon`.

3. **Configure Environment Variables:**

   Create a `.env` file in the `backend` folder with the following content (adjust the values accordingly):

   ```dotenv
   PORT=3000
   PGUSER=your_username
   PGHOST=localhost
   PGDATABASE=your_database
   PGPASSWORD=your_password
   PGPORT=5432
   ```

4. **Database Setup:**

   Ensure that PostgreSQL is running, and create the necessary database and `logs` table. For example:

   ```sql
   CREATE TABLE logs (
       id SERIAL PRIMARY KEY,
       message TEXT NOT NULL,
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```

5. **Run the Backend Server:**

   To start the server with live reloading (using nodemon), run:

   ```bash
   npm run dev
   ```

   *(Make sure the `dev` script in your `backend/package.json` is set to use nodemon, e.g., `"dev": "nodemon server.js"`.)*

### 3. Frontend Setup

1. **Navigate to the `frontend` folder:**

   ```bash
   cd ../frontend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure Environment Variables:**

   Create a `.env` file in the `frontend` folder with the following content (adjust as needed):

   ```dotenv
   VITE_BACKEND_URL=http://localhost:3000
   ```

4. **Run the Frontend App:**

   Start the development server using Vite:

   ```bash
   npm run dev
   ```

   The frontend app will typically run on a different port (e.g., 5173) and connect to the backend using the URL specified in your `.env` file.

## Application Overview

- **Backend:**  
  The Express server exposes RESTful endpoints (e.g., `/api/logs`) to fetch and add log entries. It connects to a PostgreSQL database and uses environment variables for configuration.

- **Frontend:**  
  The React application fetches log data from the backend and displays it. The project structure separates component logic (`App.jsx`) from styling (`App.css`).



## Future Enhancements

- **AI Integration:** Add features such as automated log summarization, anomaly detection, and a conversational log assistant.
- **Blockchain:** Consider integrating blockchain for tamper-proof record keeping and smart contracts for automated compliance.
- **Enhanced UI/UX:** Further improve the user interface and experience using modern design frameworks.

