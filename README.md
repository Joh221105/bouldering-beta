# Bouldering Beta

A full-stack web application built using the MERN stack, Bouldering Beta is a reddit clone designed for climbers to connect, share, and discuss bouldering techniques, experiences, and tips. Users can join communities, create posts, comment, and interact with other climbers in a structured and secure environment.

## Features
- User Authentication: Secure login and signup functionality to manage user accounts.
- Community Interaction: Ability to join communities, create posts, and leave comments.
- Post Management: Users can edit or delete their posts.
- Search & Filter: Find specific posts and communities based on keywords and tags.

## Tech Stack
- Frontend: React, Tailwind CSS, React Router
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JSON Web Tokens (JWT) and bcrypt for secure authentication

## Getting Started

### Installation

1. Clone the repository:

```
git clone git@github.com:Joh221105/bouldering-beta.git
```
2. Navigate into the project directory:
   
```
cd bouldering-beta
```

3. Install frontend dependencies:

```
cd frontend
npm install
```

4. Install backend dependencies:

```
cd backend
npm install
```

5. Environment Variables

Create a .env file in the root directory and include the following variables:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

6. Starting the Application

Navigate to backend and run the backend server:
```
nodemon app.js
```
Navigate to frontend and run frontend
```
npm start
```
Frontend at http://localhost:3000, server running on http://localhost:5001
