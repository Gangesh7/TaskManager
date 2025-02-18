# Task Manager App

## 📝 Overview
This is a **Task Manager App** built using the **MERN stack** (MongoDB, Express.js, React, Node.js). It allows users to **Create, Read, Update, and Delete (CRUD)** tasks efficiently. The app provides a user-friendly interface for task management with authentication and authorization features.

---

## 🚀 Features
- 🔐 **User Authentication** (Register, Login, Logout)
- ✅ **CRUD Operations** (Create, Read, Update, Delete Tasks)
- 🔎 **Search Functionality** to find tasks easily
- 📌 **Task Status Management** (Pending, In-Progress, Completed)
- 🖥️ **Responsive UI** built with React & Tailwind CSS
- 🔄 **Persistent Data Storage** using MongoDB
- 🏗 **Protected Routes** with JWT Authentication

---

## 🏗 Tech Stack
### Frontend:
- ⚛️ **React.js** (Vite-based setup)
- 🎨 **Tailwind CSS** (For styling)
- 🔄 **Axios** (For API requests)

### Backend:
- 🌐 **Node.js** (Runtime environment)
- 🚀 **Express.js** (Backend framework)
- 🔐 **JWT Authentication** (For user authentication)
- 🛢 **MongoDB & Mongoose** (Database & ORM)

---

## 🛠 Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/task-manager.git
cd task-manager
```

### 2️⃣ Install Dependencies
```sh
# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
```

### 3️⃣ Setup Environment Variables
Create a `.env` file in the `server` directory and add:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

### 4️⃣ Run the Application
```sh
# Start Backend Server
cd server
npm run dev

# Start Frontend React App
cd ../client
npm run dev
```

The backend will run on `http://localhost:5000` and the frontend on `http://localhost:5173`

---

## 📌 API Endpoints

### **Authentication Routes**
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login and get a token
- `GET /api/auth/verify` - Verify user authentication

### **Task Routes** (Protected)
- `POST /api/tasks` - Create a task
- `GET /api/tasks` - Get all tasks
- `PUT /api/tasks/:id` - Update a task
- `DELETE /api/tasks/:id` - Delete a task

Live Demo

The application is deployed on Netlify. You can access it here:
🔗 https://singular-bonbon-b5b342.netlify.app  Task Manager App

## 📷 Screenshots
🚀 *Coming Soon*

---

## 🏆 Future Enhancements
- 📅 Add **Task Due Dates & Reminders**
- 📊 Implement **Drag & Drop Task Sorting**
- 📱 Improve **Mobile Responsiveness**

---

## 🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss the proposed changes.

---

## 📜 License
This project is licensed under the **MIT License**.

---

## 💬 Contact

- 🔗 GitHub: https://github.com/Gangesh7/TaskManager

*Happy Coding! 🚀*

