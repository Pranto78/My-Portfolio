import { Outlet } from "react-router";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import OpeningLoading from "../components/OpeningLoading/OpeningLoading";


const Root = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200); // adjust if needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <OpeningLoading />;
  }

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
