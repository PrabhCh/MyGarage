import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='grid-2 text-center'>
      <div>
        <Link className='large box-buy' to='/buy'>
          Buy Car
        </Link>
      </div>
      <div>
        <Link className='large text-danger box-sell' to='/sell'>
          Sell Car
        </Link>
      </div>
    </div>
  );
};

export default Home;
