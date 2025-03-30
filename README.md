BlogFirebaseFullstackApp
BlogFirebaseFullstackApp is a full-stack blogging platform built using React and Firebase. It allows users to create, edit, and delete blog posts while providing a secure authentication system. The app is designed for real-time data updates and scalability.

🔥 Features
✅ User Authentication
Sign up and log in with email/password authentication using Firebase Auth

Store and retrieve user profiles (profile picture, name, email)

Persistent login session

📝 Blog Management (CRUD)
Create: Write and publish new blog posts

Read: View all blog posts from all users

Update: Edit an existing blog post

Delete: Remove a blog post (only the author can delete)

⚡ Real-time Database (Firestore)
Blog posts are stored in Firebase Firestore

Changes appear instantly across all clients (real-time updates)

🎨 Modern UI & Responsive Design
Clean and user-friendly React UI

Fully responsive (works on desktop & mobile)

Material UI / Tailwind CSS for styling

🔥 Firebase Hosting & Storage
Firebase Storage: Upload and display images for blog posts

Firebase Hosting: Deploy the app directly on Firebase

🚀 Fast & Scalable
Vite for fast React development

Firebase Functions (optional) for backend logic

📂 Project Structure
csharp
Copy
Edit
BlogFirebaseFullstackApp/
├── public/               # Public assets
│   └── index.html
├── src/                  # Source code
│   ├── assets/           # Images, styles, etc.
│   ├── components/       # Reusable components
│   │   ├── Auth/         # Authentication (Login, Register)
│   │   ├── Blog/         # Blog functionalities (List, Post, Form)
│   │   ├── Header.jsx    # Navigation bar
│   │   ├── Footer.jsx    # Footer
│   ├── contexts/         # React Context API (AuthContext)
│   ├── pages/            # Main pages (Home, Dashboard, NotFound)
│   ├── services/         # Firebase services (Auth, Firestore, Storage)
│   ├── App.jsx           # Main App component
│   ├── main.jsx          # Entry point
│   └── styles/           # Global styles
├── .gitignore
├── firebase.json         # Firebase configuration
├── package.json
├── README.md
└── vite.config.js
🚀 How It Works
🔐 Authentication Flow
User signs up or logs in using Firebase Authentication.

Authenticated users can create and manage their own blog posts.

Authentication status is stored using React Context API.

If logged in, the user can access their profile and blog posts.

📝 Blog Post Flow
Users can write and publish blog posts with images.

Blog data is stored in Firebase Firestore.

Posts update in real time across all connected devices.

Users can edit or delete their own posts.

🛠️ Setup & Installation
1️⃣ Clone the Repository
bash
Copy
Edit
git clone https://github.com/savagrujic/BlogFirebaseFullstackApp.git
cd BlogFirebaseFullstackApp
2️⃣ Install Dependencies
bash
Copy
Edit
npm install
3️⃣ Configure Firebase
Create a project in the Firebase Console

Enable Authentication (Email/Password)

Enable Firestore Database

Enable Firebase Storage

Copy your Firebase config and add it to a .env file:

env
Copy
Edit
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
4️⃣ Start Development Server
bash
Copy
Edit
npm run dev
Open http://localhost:3000

🎯 Future Improvements
✔️ Comments section for blog posts
✔️ Like system for posts
✔️ Profile page with user bio
✔️ Dark mode support

💡 Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.

📜 License
This project is doesnt have licence.
