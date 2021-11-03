import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import BeerDetails from './BeerDetails';
import { Link } from 'react-router-dom';

function Beers() {
  const [beers, setBeers] = useState([]);
  // so here our main objective is to display the all of the beers we have for selection. first we have to grab our data from the api. so we use axios.get('our api link ').then(what we want the computer
  //to do with that information) so we do axios.get('beersapi).then(we are going to create a function so each time this is initated we have our new values otherwise we will not be able to manipulate
  //).then((resApi)=> setBeers(resApi.data))when we get the data, we assign a variable name to it so we can access it. that name is resApi. we then console.log and find that the information we are looking for
  // is saved in data.
  useEffect(() => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers`).then((resApi) => {
      console.log(resApi);
      setBeers(resApi.data);
    });
    // now that we have the data we want to show it. so we create a showBeers component. we want to display a list of our beers that are all Links. when clicked each link should fo to the approprite path
    // const showBeers =()=>{ return((first we make the div structure for what we want mapped out)
    //<ul>{beers.map((beer)=> return <Link key={beer.Id} to='/beer/{beer.id}><li onClick={BeerDetails>{beer.name}<li>})}  }
    // what did we do here? we grabbed our API fro our link, when we grabbed it we axios.get(api).then((resApi)=> setBeers(resApi.data))
    // okay now that we have the data placed in our beers variable, we want to use/ map it. traditionally this means we are going to create a show function, which in our case will be known as showBeers.
    // in showBeers we will grab our beer variable containing all the data and we will map it. const showBeers = return( <ul>{beers.map((Beer)=> return <Link key={Beer.id} to='/beer/{beer.id}><li onClick={BeerDetails}>{beer.name}</Link>  )}<ul>
  }, []);
  const ShowBeers = () => {
    return (
      <ul>
        {beers.map((beer) => {
          return (
            <Link key={beer._id} to={`/beer/${beer._id}`}>
              {' '}
              <li onClick={BeerDetails}>{beer.name}</li>;{' '}
            </Link>
          );
        })}
      </ul>
    );
  };
  return (
    <div>
      <h1>Beers</h1>
      <ShowBeers />
    </div>
  );
}

export default Beers;
