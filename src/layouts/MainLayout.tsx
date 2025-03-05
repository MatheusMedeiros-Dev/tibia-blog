import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className=" bg-[url('../public/background.jpg')] bg-cover bg-center min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
