import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/navbar";
import Footer from "./Components/Pages/Footer";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <>
      <div>
        <ScrollToTop />
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
