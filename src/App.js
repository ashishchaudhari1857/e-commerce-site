import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Header/Footer";
import Items from "./components/Items/Items";
import Contex_provider from "./components/Store/Contex_provider";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Contex_provider>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Items />} />
        </Route>
      </Routes>
      <Footer />
    </Contex_provider>
  );
}

export default App;
