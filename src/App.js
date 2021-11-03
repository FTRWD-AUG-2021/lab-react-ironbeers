import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home.js';
import Beers from './components/Beers.js';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer.js';
import { Switch, Route, Link } from 'react-router-dom';
import BeerDetails from './components/BeerDetails';

function App() {
  return (
    <div className="App">
      {/* so here we build our home page. our home page is going to have 4 buttons. each button will display our beers in a different way. we are working with apis in our components. */}
      <nav>
        <ul>
          <Link to="/">Home</Link>
          {/* here are our buttons. which are actually links. we create our link as well as the path to that link. */}
          <Link to="/Beers">Beers</Link>
          {/* we create our beers link. when we click this button, we will link to /beers */}
          <Link to="/RandomBeer">Random Beer</Link>

          <Link to="/NewBeer">New Beer</Link>
        </ul>
      </nav>
      <Switch>
        {/* here is where we make our SPA magic happen. whenever we go to a different link we want to switch the component being used on that page. each page will have its own uniue data display
      /functionality. we use use the switch route method to switch the component being used when we click to another link and display instead the component associated with that route. */}
        <Route exact path="/" component={Home} />
        {/* here when create our routes. when we go to / we want to display the home component.*/}
        <Route exact path="/Beers" component={Beers} />
        {/* when we go to the /beers  we are routing to a component that will get the beer api and display each beer with a link tag thats mapped down the page.*/}
        <Route exact path="/RandomBeer" component={RandomBeer} />
        {/* when we click the Random beer link whos path goes to /RandomBeer, we simultaentously are now switching and routing to the Radombeer component. */}
        <Route exact path="/NewBeer" component={NewBeer} />
        <Route exact path="/beer/:beerId" component={BeerDetails} />
        {/* here we have created a new route for each :beerID/ whenever we route to a new :beerId, we take that beerId as a prop and pass it into the BeerDetails component when routing to it.
        the prop is taken in by the component and then displays the appropriate beer. */}
      </Switch>
    </div>
  );
}

export default App;
