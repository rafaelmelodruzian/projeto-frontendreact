import './App.css';
import Cart from './Componentes/ShoppingCart/Cart/Cart';
import Home from './Componentes/ProductList/Home/Home';
import Filters from './Componentes/Filters/Filters';

function App() {
  return (
    <div>
      <Filters/>
      <Home />
      <Cart />
    </div>
  );
}

export default App;
