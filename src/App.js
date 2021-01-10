import React from 'react';
import "./App.css";
import { Switch, Route } from 'react-router-dom';
import Header from './component/header/header.component.jsx';
import HomePage from './pages/homepage/homepage.comopent.jsx';
import ShopPage from './pages/shop/shop.comonent.jsx';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
