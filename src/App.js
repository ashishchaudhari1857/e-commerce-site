import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Header/Footer';
import Items from './components/Items/Items';
import Contex_provider from './components/Store/Contex_provider';

function App() {
  return (
  <Contex_provider>
      <Header />
      <Items />
      <Footer />
      </Contex_provider>
  );
}

export default App;
