import { Outlet } from "react-router-dom";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-base-200 text-base-content">
      <Header />

      <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-6">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;