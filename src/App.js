import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Utitlities/Context/AuthProvider";
import About from "./Utitlities/Pages/About/About";
import Blogs from "./Utitlities/Pages/Blogs/Blogs";
import AddPost from "./Utitlities/Pages/Dashboard.js/AddPost";
import Dashboard from "./Utitlities/Pages/Dashboard.js/Dashboard";
import ManageAllPost from "./Utitlities/Pages/Dashboard.js/ManageAllPost";
import MyPost from "./Utitlities/Pages/Dashboard.js/MyPost";
import RequestedPosts from "./Utitlities/Pages/Dashboard.js/RequestedPosts";
import Review from "./Utitlities/Pages/Dashboard.js/Review";
import UpdateBlog from "./Utitlities/Pages/Dashboard.js/UpdateBlog";
import Users from "./Utitlities/Pages/Dashboard.js/Users";
import Home from "./Utitlities/Pages/Home/Home";
import Login from "./Utitlities/Pages/Login/Login";
import Register from "./Utitlities/Pages/Login/Register/Register";
import AdminRoute from "./Utitlities/Pages/Routes/AdminRoute";
import PrivateRoute from "./Utitlities/Pages/Routes/PrivateRoute";
import SingleBlogs from "./Utitlities/Pages/Shared/SingleBlogs";
import Error from "./Utitlities/Pages/Error/Error";

function App() {
  return (
    <div className="relative">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route
              path="/blogs/:id"
              element={
                <PrivateRoute>
                  <SingleBlogs />
                </PrivateRoute>
              }
            />

            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            >
              <Route path="/dashboard" element={<MyPost />} />
              <Route path="add-post" element={<AddPost />} />
              <Route path="review" element={<Review />} />
              <Route
                path="users"
                element={
                  <AdminRoute>
                    <Users />
                  </AdminRoute>
                }
              />
              <Route
                path="manage-post"
                element={
                  <AdminRoute>
                    <ManageAllPost />
                  </AdminRoute>
                }
              />
              <Route path="manage-post/:id" element={<UpdateBlog />} />
              <Route
                path="requested-post"
                element={
                  <AdminRoute>
                    <RequestedPosts />
                  </AdminRoute>
                }
              />
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
