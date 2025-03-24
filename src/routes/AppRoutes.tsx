import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CreatePost from "../pages/CreatePost";
import Dashdorad from "../pages/Dashdorad";
import { useAuthValue } from "../context/AuthContext";
const AppRoutes = () => {
  const { user } = useAuthValue();
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/register"
            element={!user ? <Register /> : <Navigate to="/" />}
          />
          <Route
            path="/posts/create"
            element={user ? <CreatePost /> : <Navigate to="/login" />}
          />
          <Route
            path="/dashboard"
            element={user ? <Dashdorad /> : <Navigate to="/login" />}
          />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default AppRoutes;
