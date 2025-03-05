import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import MainLayout from "../layouts/MainLayout";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default AppRoutes;
