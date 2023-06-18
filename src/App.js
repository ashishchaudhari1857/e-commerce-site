import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Header/Footer";
import Items from "./components/Items/Items";
import Contex_provider from "./components/Store/Contex_provider";

import About from "./components/About/About";
import { BrowserRouter, Routes,Route } from "react-router-dom";
function App() {
  return (
    
      <Contex_provider>
        <Header />
          <Routes>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/item" element={<Items/>}></Route>
        </Routes>
        {/* <Items /> */}
        <Footer />
      </Contex_provider>
    
  );
}

export default App;
