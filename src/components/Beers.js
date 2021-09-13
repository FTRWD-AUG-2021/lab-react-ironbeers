import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Beers = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers`).then((resApi) => {
      console.log(resApi);
      setBeers(resApi.data);
    });
  }, []);
  const ShowBeers = () => {
    return (
      <ul>
        {beers.map((beer) => {
          return <li key={beer._id}>{beer.name}</li>;
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
};

export default Beers;
