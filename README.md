# 🎓 Course Management System (Backend API)

This project is a **Course Management System Backend API** built with **Express.js** and **MongoDB**.  
It allows users to register, log in, manage their profiles, and perform CRUD operations on courses.  
Authentication is implemented using **JWT + Cookie**, and essential security middlewares like **helmet**, **hpp**, **cors**, and **cookie-parser** are used.

---

## 🚀 Features

- User registration and login (JWT + cookie authentication)
- Get & Update user profile
- Create, read, update, delete (CRUD) courses
- Protected routes using custom authentication middleware
- Error handling and route not found middleware
- Secure API using helmet, hpp, cors, and cookie-parser

---

## 🧠 Tech Stack

| Category | Technology |
|-----------|-------------|
| Backend Framework | Express.js |
| Database | MongoDB (Mongoose ODM) |
| Authentication | JWT (JSON Web Token) + Cookie |
| Security | Helmet, HPP, CORS, Cookie-Parser |
| Environment | dotenv |
| Error Handling | Custom `errorHandler` and `routeNotFound` middleware |

---

## ⚙️ Folder Structure

```
src/
 ├── controllers/
 │    ├── user.controller.js
 │    └── course.controller.js
 │
 ├── middlewares/
 │    ├── auth.middleware.js
 │    ├── routeNotFound.js
 │    └── errorHandler.js
 │
 ├── models/
 │    ├── user.model.js
 │    └── course.model.js
 │
 ├── routes/
 │    ├── user.route.js
 │    └── course.route.js
 │
 ├── config/
 │    └── db.js
 │
 └── server.js
```

---

## 🧩 API Endpoints

### 👤 User APIs

| Method | Endpoint | Description | Auth Required |
|--------|-----------|--------------|----------------|
| POST | `/api/users/register` | Register a new user | ❌ |
| POST | `/api/users/login` | Login user & set JWT cookie | ❌ |
| GET | `/api/users/profile` | Get logged-in user profile | ✅ |
| PUT | `/api/users/profile` | Update user profile | ✅ |

---

### 📚 Course APIs

| Method | Endpoint | Description | Auth Required |
|--------|-----------|--------------|----------------|
| POST | `/api/courses/profile` | Create a new course | ✅ |
| GET | `/api/courses/profile` | Get all courses | ✅ |
| GET | `/api/courses/profile/:id` | Get a single course by ID | ✅ |
| PUT | `/api/courses/profile/:id` | Update a course by ID | ✅ |
| DELETE | `/api/courses/profile/:id` | Delete a course by ID | ✅ |

---

## 🧾 Example JSON Request

### ➕ Register
```json
{
  "name": "Salman Hossen",
  "email": "salman@example.com",
  "password": "123456",
  "phoneNumber": "01700000000"
}
```

### 🔐 Login
```json
{
  "email": "salman@example.com",
  "password": "123456"
}
```

### 🎓 Create Course
```json
{
  "title": "React.js and Next.js Masterclass",
  "description": "Learn full MERN stack development",
  "price": "1000",
  "duration": "10 weeks",
  "category": "Web Development",
  "instructorName": "Salman Hossen",
  "courseImage": "https://i.ibb.co.com/SFTHcB7/react.png"
}
```

---

## 🧱 Middlewares

- **auth.middleware.js** → verifies JWT token from cookies and attaches `req.user`
- **routeNotFound.js** → handles invalid or undefined routes
- **errorHandler.js** → handles application-level and server errors

---

## 🔒 Security Setup

- **Helmet** → protects against common web vulnerabilities
- **HPP** → prevents HTTP Parameter Pollution
- **CORS** → enables cross-origin resource sharing
- **cookie-parser** → parses cookies in request

---

## 🧰 Environment Variables

Create a `.env` file in root directory:

```
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key
NODE_ENV=development
```

---

## ▶️ Run Locally

```bash
# Install dependencies
npm install

# Start server (development)
npm run dev

# Or production mode
npm start
```

Server will run on  
👉 **http://localhost:5000**

---

## 🧪 Testing with Postman

1. Import your collection:  
   **File → Export → Collection → JSON**
2. Set `Authorization` header as:  
   ```
   Key: Authorization  
   Value: Bearer <your_token>
   ```
3. Use token from login response or cookie.

---

## 👨‍💻 Developer

**Name:** Salman Hossen  
**University:** United International University (UIU)  
**Backend Stack:** Node.js, Express.js, MongoDB  
**Security Focused:** JWT, Cookie, Helmet, HPP, CORS  

---
