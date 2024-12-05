import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import HomePage from './Home/pages/HomePage'
import SignUpPage from './Authentication/SignUp/pages/SignUpPage'
import LoginPage from './Authentication/Login/pages/LoginPage'
import CommunityPage from './Community/pages/CommunityPage'
import CreatePostPage from './CreatePost/pages/CreatePostPage'
import EditPostPage from './EditPost/pages/EditPostPage'
import EditProfilePage from './EditProfile/pages/EditProfilePage'
import PostDetailsPage from './PostDetails/pages/PostDetailsPage'
import SearchPage from './Search/pages/SearchPage'
import UserProfilePage from './UserProfile/pages/UserProfilePage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
  { path: "/", element: <HomePage /> },
  { path: "/signup", element: <SignUpPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/community", element: <CommunityPage /> },
  { path: "/create", element: <CreatePostPage /> },
  { path: "/edit-post", element: <EditPostPage /> },
  { path: "/edit-profile", element: <EditProfilePage /> },
  { path: "/post", element: <PostDetailsPage /> },
  { path: "/search", element: <SearchPage /> },
  { path: "/profile", element: <UserProfilePage/>}
],
},
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);