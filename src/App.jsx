import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import products from "./data/Products";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import TopBar from "./components/TopBar";
import Home from "./pages/Home";
import Products from "./pages/Products";

function App() {
  const location = useLocation();

  const [searchText, setSearchText] = useState("");

  return (
    <div className="overflow-hidden">
      <TopBar
        offerCount={2}
        className="from-[#8f6abd] via-[#7e446f] to-[#b73d47]"
      />
      <Header searchText={searchText} setSearchText={setSearchText} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products/:slug?"
          element={
            <Products searchText={searchText} setSearchText={setSearchText} />
          }
        />
      </Routes>

      <Footer
        className={`${location.pathname === "/" ? "pt-50 -mt-35" : "pt-15"}`}
      />
    </div>
  );
}

export default App;
