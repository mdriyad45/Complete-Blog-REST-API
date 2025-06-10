# Complete Blog REST API

A comprehensive RESTful API for a blog application built with Node.js, Express.js, and MongoDB. This API provides complete functionality for user authentication, blog post management, categorization, and file uploads.

## 🚀 Features

- **User Authentication**: Secure signup and login with JWT tokens
- **User Management**: Complete CRUD operations for user profiles
- **Blog Posts**: Create, read, update, and delete blog posts
- **Categories**: Organize posts with category management
- **File Upload**: Image upload functionality with Multer
- **Authorization**: Protected routes with JWT middleware
- **Query Support**: Filter posts by username and category
- **Password Security**: Bcrypt hashing for secure password storage

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JSON Web Tokens (JWT)
- **Password Hashing**: bcrypt
- **File Upload**: Multer
- **CORS**: Cross-Origin Resource Sharing enabled
- **Logging**: Morgan HTTP request logger

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn package manager

## ⚙️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Complete-Blog-REST-API
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment variables**
   
   Create a `.env` file in the root directory and add the following variables:
   ```env
   PORT=3000
   DATABASE_URI=mongodb://localhost:27017/blog-api
   PRIVET_KEY=your-jwt-secret-key
   ```

4. **Create upload directory**
   ```bash
   mkdir Image
   ```

5. **Start the server**
   ```bash
   npm start
   ```

The server will start running on `http://localhost:3000`

## 📚 API Endpoints

### Authentication

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/signup` | Register a new user | No |
| POST | `/api/login` | Login user | No |

### Users

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/users` | Get all users | Yes |
| PUT | `/api/users/:userId` | Update user profile | Yes |
| DELETE | `/api/users/:userId` | Delete user account | Yes |

### Posts

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/posts` | Create a new post | Yes |
| GET | `/api/posts` | Get all posts (supports query filters) | Yes |
| GET | `/api/posts/:postId` | Get single post by ID | Yes |
| PUT | `/api/posts/:postId` | Update a post | Yes |
| DELETE | `/api/posts/:postId` | Delete a post | Yes |

### Categories

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/category` | Create a new category | Yes |
| GET | `/api/category` | Get all categories | Yes |

### File Upload

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/upload` | Upload image file | No |

## 🔍 Query Parameters

### Posts Filtering

- **Filter by username**: `GET /api/posts?username=john_doe`
- **Filter by category**: `GET /api/posts?category=technology`

## 📝 Request Examples

### User Signup
```json
POST /api/signup
{
  "name": "John Doe",
  "username": "john_doe",
  "email": "john@example.com",
  "password": "securepassword123",
  "profile": "profile.jpg"
}
```

### User Login
```json
POST /api/login
{
  "username": "john_doe",
  "password": "securepassword123"
}
```

### Create Post
```json
POST /api/posts
Authorization: Bearer <jwt-token>
{
  "title": "My First Blog Post",
  "body": "This is the content of my blog post...",
  "username": "john_doe",
  "category": ["technology", "programming"],
  "photo": "post-image.jpg"
}
```

### Create Category
```json
POST /api/category
Authorization: Bearer <jwt-token>
{
  "name": "Technology"
}
```

## 🔐 Authentication

This API uses JWT (JSON Web Tokens) for authentication. After successful login, include the token in the Authorization header:

```
Authorization: Bearer <your-jwt-token>
```

Tokens expire after 24 hours and need to be refreshed by logging in again.

## 📁 Project Structure

```
Complete-Blog-REST-API/
├── config/
│   └── connectDB.js          # Database connection configuration
├── Controllers/
│   ├── authjControllers/
│   │   ├── login.js          # Login controller
│   │   └── signup.js         # Signup controller
│   ├── categroyController.js # Category management
│   ├── postController.js     # Post management
│   └── userController.js     # User management
├── middlewire/
│   └── auth.js               # JWT authentication middleware
├── models/
│   ├── categoryModel.js      # Category schema
│   ├── postModel.js          # Post schema
│   └── userModel.js          # User schema
├── Routes/
│   ├── auth/
│   │   ├── loginRoute.js     # Login routes
│   │   └── signupRoute.js    # Signup routes
│   ├── categoryRoute.js      # Category routes
│   ├── postRoutes.js         # Post routes
│   └── userRoute.js          # User routes
├── Image/                    # Upload directory for images
├── index.js                  # Main application file
└── README.md                 # Project documentation
```

## 🚨 Error Handling

The API returns appropriate HTTP status codes and error messages:

- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `404` - Not Found
- `500` - Internal Server Error

## 🔧 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Server port number | `3000` |
| `DATABASE_URI` | MongoDB connection string | `mongodb://localhost:27017/blog-api` |
| `PRIVET_KEY` | JWT secret key | `your-secret-key` |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.



