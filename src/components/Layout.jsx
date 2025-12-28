import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import ScrollToTopOnMount from "./ScrollToTopOnMount";

export default function Layout() {
  return (
    <>
      <ScrollToTopOnMount />
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollToTop />
    </>
  );
}

