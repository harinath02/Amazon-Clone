import MainPage from './components/HomePage/MainPage';
//import Checkout from './components/Checkout/Checkout';
import Checkout from './components/Checkout/Checkout';
import NavBar from './components/NavBar/Navigation';
import DisplayContent from './components/DisplayContent/DisplayContent';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import CartContextProvider from './components/CartContext';


function App() {
  return (
    <Router>
      <div className="App">
        <CartContextProvider>
          <NavBar></NavBar>
          <Switch key={window.location.pathname}>
            <Route path="/display">
              <DisplayContent></DisplayContent>
            </Route>
            <Route path="/order/:id" element>
              <PlaceOrder></PlaceOrder>
            </Route>
            <Route path="/checkout">
              <Checkout></Checkout>
            </Route>
            <Route path="">
              <MainPage></MainPage>
            </Route>
          </Switch>
        </CartContextProvider>
      </div>
    </Router>
  );
}

export default App;
