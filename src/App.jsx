import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import TopBar from "./components/TopBar";
import Home from "./pages/Home";
import Products from "./pages/Products";

function App() {
  const location = useLocation();

  return (
    <div className="overflow-hidden">
      <TopBar
        offerCount={2}
        className="from-[#8f6abd] via-[#7e446f] to-[#b73d47]"
      />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:slug?" element={<Products />} />
      </Routes>

      <Footer className={`${location.pathname === "/" ? "pt-50 -mt-35" : "pt-15"}`} />
    </div>
  );
}

export default App;
