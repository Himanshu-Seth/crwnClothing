import "./App.css";
import { Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.comopent";
import ShopPage from "./pages/shop/shop.comonent.jsx";

function App() {
  return (
    <div>
      <switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </switch>
    </div>
  );
}

export default App;
