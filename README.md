# YouTube Clone

A full-stack YouTube clone application built with React and Node.js, featuring user authentication, video upload, comments, and a modern responsive UI.

## 🎯 Features

### Frontend

- **Modern UI/UX**: Responsive design with dark/light theme support
- **Video Management**: Upload, watch, and browse videos
- **User Authentication**: Sign up, sign in, and Google OAuth integration
- **Interactive Features**:
  - Like/dislike videos
  - Comment on videos
  - Subscribe to channels
  - Search functionality
  - Video recommendations
- **State Management**: Redux Toolkit for centralized state
- **Real-time Updates**: Dynamic video views and engagement metrics

### Backend

- **RESTful API**: Express.js server with organized routes
- **Authentication**: JWT-based authentication with secure password hashing
- **Database**: MongoDB with Mongoose ODM
- **User Management**: User profiles with subscription system
- **Video Operations**: CRUD operations for videos
- **Comments System**: Full comment management with user association

## 🛠️ Tech Stack

### Frontend

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Material-UI (MUI)** - Component library
- **Redux Toolkit** - State management
- **React Router** - Navigation
- **Firebase** - Google authentication
- **Styled Components** - CSS-in-JS styling
- **Axios** - HTTP client

### Backend

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **Cookie Parser** - Cookie handling
- **CORS** - Cross-origin resource sharing

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher)
- **npm** or **yarn** package manager
- **MongoDB** (local installation or MongoDB Atlas account)
- **Firebase Account** (for Google authentication)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/NewtonY-dev/youtube-clone.git
cd youtube-clone
```

### 2. Install Dependencies

#### Frontend

```bash
cd frontend
npm install
```

#### Backend

```bash
cd server
npm install
```

### 3. Environment Variables

#### Backend (.env in `/server` directory)

Create a `.env` file in the `server` directory:

```env
MONGO=your_mongodb_connection_string
JWT=your_jwt_secret_key
```

**Example:**

```env
MONGO=mongodb://localhost:27017/youtube-clone
# or for MongoDB Atlas:
# MONGO=mongodb+srv://username:password@cluster.mongodb.net/youtube-clone?retryWrites=true&w=majority
JWT=your_super_secret_jwt_key_here
```

#### Frontend (.env in `/frontend` directory)

Create a `.env` file in the `frontend` directory:

```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
```

### 4. Run the Application

#### Start the Backend Server

```bash
cd server
npm start
```

The server will run on `http://localhost:8080`

#### Start the Frontend Development Server

Open a new terminal:

```bash
cd frontend
npm run dev
```

The frontend will run on `http://localhost:5173` (or the next available port)

## 📁 Project Structure

```
youtube-clone/
├── frontend/
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   │   ├── Card.jsx      # Video card component
│   │   │   ├── Comment.jsx   # Comment component
│   │   │   ├── Comments.jsx  # Comments section
│   │   │   ├── Menu.jsx        # Sidebar menu
│   │   │   ├── Navbar.jsx     # Navigation bar
│   │   │   ├── Recommendation.jsx
│   │   │   └── Upload.jsx    # Video upload component
│   │   ├── pages/            # Page components
│   │   │   ├── Home.jsx      # Home page
│   │   │   ├── Video.jsx     # Video player page
│   │   │   ├── Search.jsx    # Search results page
│   │   │   └── SignIn.jsx    # Authentication page
│   │   ├── redux/            # Redux store and slices
│   │   │   ├── store.js
│   │   │   ├── userSlice.js
│   │   │   └── videoSlice.js
│   │   ├── utils/            # Utility functions
│   │   │   └── Theme.jsx     # Theme configuration
│   │   ├── firebase.js       # Firebase configuration
│   │   ├── App.jsx           # Main app component
│   │   └── main.jsx          # Entry point
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── controllers/          # Route controllers
│   │   ├── auth.js
│   │   ├── user.js
│   │   ├── video.js
│   │   └── comment.js
│   ├── models/               # Mongoose models
│   │   ├── User.js
│   │   ├── Video.js
│   │   └── Comment.js
│   ├── routes/               # Express routes
│   │   ├── auth.js
│   │   ├── users.js
│   │   ├── videos.js
│   │   └── comments.js
│   ├── verifyToken.js        # JWT verification middleware
│   ├── error.js              # Error handling
│   ├── index.js              # Server entry point
│   └── package.json
│
├── .gitignore
└── README.md
```

## 🔌 API Endpoints

### Authentication

- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/signin` - Sign in existing user
- `POST /api/auth/google` - Google OAuth authentication

### Users

- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user
- `PUT /api/users/sub/:id` - Subscribe/Unsubscribe to user

### Videos

- `GET /api/videos` - Get all videos
- `GET /api/videos/:id` - Get video by ID
- `POST /api/videos` - Create new video (requires auth)
- `PUT /api/videos/:id` - Update video (requires auth)
- `DELETE /api/videos/:id` - Delete video (requires auth)
- `PUT /api/videos/view/:id` - Increment video views
- `GET /api/videos/trend` - Get trending videos
- `GET /api/videos/random` - Get random videos
- `GET /api/videos/sub` - Get subscribed channels' videos (requires auth)
- `GET /api/videos/tags` - Get videos by tags
- `GET /api/videos/search` - Search videos

### Comments

- `GET /api/comments/:videoId` - Get comments for a video
- `POST /api/comments` - Create a comment (requires auth)
- `DELETE /api/comments/:id` - Delete a comment (requires auth)

## 🎨 Features in Detail

### User Authentication

- Secure password hashing with bcryptjs
- JWT token-based authentication
- Google OAuth integration via Firebase
- Cookie-based session management

### Video Features

- Upload videos with metadata (title, description, tags)
- Video thumbnails and preview images
- View count tracking
- Like/dislike functionality
- Tag-based categorization
- Search and filter capabilities

### Social Features

- User subscriptions
- Comment system with user association
- Channel subscriber counts
- Video recommendations based on tags

## 🧪 Development

### Frontend Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Backend Scripts

```bash
npm start        # Start server with nodemon (auto-reload)
```

## 📝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Contribution Guidelines

- Follow the existing code style
- Write clear commit messages
- Test your changes thoroughly
- Update documentation if needed
- Ensure ESLint passes without errors

## 🐛 Troubleshooting

### Common Issues

**MongoDB Connection Error**

- Ensure MongoDB is running locally or your Atlas connection string is correct
- Check that your `.env` file has the correct `MONGO` variable

**Port Already in Use**

- Change the port in `server/index.js` (currently 8080)
- Or kill the process using the port: `npx kill-port 8080`

**Firebase Authentication Not Working**

- Verify all Firebase environment variables are set correctly
- Check Firebase console for API key and project configuration

**CORS Errors**

- Ensure backend CORS is properly configured
- Check that frontend proxy settings in `vite.config.js` are correct

**Module Not Found**

- Delete `node_modules` and `package-lock.json`
- Run `npm install` again in both frontend and server directories

## 📄 License

This project is licensed under the MIT License.

Copyright (c) 2025 Newton Yetsedaw

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## 👤 Author

**Newton Yetsedaw**

- GitHub: [@NewtonY-dev](https://github.com/NewtonY-dev)
- Repository: [youtube-clone](https://github.com/NewtonY-dev/youtube-clone)

## 🙏 Acknowledgments

- YouTube for design inspiration
- All open-source contributors and libraries used in this project

---

⭐ If you find this project helpful, please consider giving it a star!
