import "./App.css";
import './Pages/CSS/ecommerce.css';
import './Pages/CSS/fonts.css';
import './Pages/CSS/style.css';

import Card1 from "./Pages/Card1/Card1";
import "bootstrap/dist/css/bootstrap.min.css";
import Card2 from "./Pages/Card2/Card2";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createContext, useState, useEffect } from "react";
import productImg0 from "./Image/shopping-0.jpg";
import productImg1 from "./Image/shopping-1.jpg";
import productImg2 from "./Image/shopping-2.jpg";
import productImg3 from "./Image/shopping-3.jpg";
import productImg4 from "./Image/shopping-4.jpg";
import productImg5 from "./Image/shopping-5.jpg";
import productImg6 from "./Image/shopping-6.jpg";
import productImg7 from "./Image/shopping-7.jpg";

export const productsContext = createContext();
function App() {
  const product = [
    {
      id: 1,
      name: "Grey Messenger Bag",
      price: "11.99",
      img: productImg0,
      quantity: 2,
    },
    {
      id: 2,
      name: "Grey Messenger Bag",
      price: "11.99",
      img: productImg1,
      quantity: 2,
    },
    {
      id: 3,
      name: "Grey Messenger Bag",
      price: "11.99",
      img: productImg2,
      quantity: 2,
    },
    {
      id: 4,
      name: "Grey Messenger Bag",
      price: "11.99",
      img: productImg3,
      quantity: 2,
    },
    {
      id: 5,
      name: "Grey Messenger Bag",
      price: "11.99",
      img: productImg4,
      quantity: 2,
    },
    {
      id: 6,
      name: "Grey Messenger Bag",
      price: "11.99",
      img: productImg5,
      quantity: 2,
    },
    {
      id: 6,
      name: "Grey Messenger Bag",
      price: "11.99",
      img: productImg6,
      quantity: 2,
    },
    {
      id: 6,
      name: "Grey Messenger Bag",
      price: "11.99",
      img: productImg7,
      quantity: 2,
    },
  ];

  const [products, setProducts] = useState({ pds: product, cart: [] });

  useEffect(() => {
    if (localStorage.getItem("cart")) {
      const cart = JSON.parse(localStorage.getItem("cart"));
      setProducts({ ...products, cart: cart });
    }
  }, []);
  return (
    <productsContext.Provider value={{ products, setProducts }}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/card1">Card-1</Link>
              </li>
              <li>
                <Link to="/card2">Card-2</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/home">
              <Card2 />
            </Route>
            <Route path="/card1">
              <Card1 />
            </Route>
            <Route path="/card2">
              <Card2 />
            </Route>
            <Route exact path="/"></Route>
          </Switch>
        </div>
      </Router>
    </productsContext.Provider>
  );
}

export default App;
