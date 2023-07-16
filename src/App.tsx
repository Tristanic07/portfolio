import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import About from "./page/about/About";
import Home from "./page/home/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Project" element={<About />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
