import './App.css';
import Cart from './Componentes/ShoppingCart/Cart/Cart';
import Home from './Componentes/ProductList/Home/Home';
import Filters from './Componentes/Filters/Filters';
import AppStyle from './appStyle';



function App() {
  return (
    <AppStyle>


      <Filters />
      <Home />
      <Cart />

  
    </AppStyle>
  );
}

export default App;

// codigo para que os itens não ultrapassem o tamanho dos cont
// border-sizing: border-box;