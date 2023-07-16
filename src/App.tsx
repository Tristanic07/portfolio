import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Contact from "./page/Contact";
import About from "./page/about/About";
import Home from "./page/home/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
