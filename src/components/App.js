import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import Container from './Container';
import Home from './Home';
import Bubbles from './Bubbles';
import Bundles from './Bundles';
import About from './About';
import Cart from './Cart';
import ProductItemDetails from './ProductItemDetails';
import Checkout from './Checkout';
import Delivery from './Delivery';
import Review from './Review';
import Pickup from './Pickup';

const App = () => {
    return (
    <div className="App">
      
      <NavigationBar />
      <Container>
        <Switch>
          <Route exact path="/" component={ Home }/>
          <Route exact path="/home" render={ () => <Redirect to="/"/>} />
          <Route exact path="/bubbles" component={ Bubbles } />
          <Route exact path="/bundles" component={ Bundles } />
          <Route exact path="/about" component={ About } />
          <Route exact path="/cart" component={ Cart } />
          <Route exact path="/bubbles/:productItemId" component={ ProductItemDetails } />
          <Route exact path="/checkout" component={ Checkout } />
          <Route exact path="/delivery" component={ Delivery } />
          <Route exact path="/review" component={ Review } />
          <Route exact path="/pickup" component={ Pickup } />
        </Switch>
      </Container>
    </div>
    
    
    
    );
};

export default App;
