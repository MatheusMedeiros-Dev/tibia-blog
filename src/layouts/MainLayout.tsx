import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col">
      <Navbar />

      <main className="bg-[url('../public/background.jpg')] bg-cover bg-center min-h-screen">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
