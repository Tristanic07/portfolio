import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import About from "./page/about/About";
import Home from "./page/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Project" element={<About />} />
        <Route path="/Aabout" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
