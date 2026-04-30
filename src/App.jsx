import Header from "./components/Header/Header";
import TopBar from "./components/TopBar";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <TopBar offerCount={2} className="from-[#8f6abd] via-[#7e446f] to-[#b73d47]" />
      <Header />
      <Home />
    </div>
  );
}

export default App;
