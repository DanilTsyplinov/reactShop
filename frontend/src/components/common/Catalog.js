import React from 'react';

import './Catalog.css';

import Products from '../products/Products';

function Catalog(props) {
  return (
    <div className="Catalog">
        <h2>Каталог автомобилей</h2>

        <Products 
          setCountCart={props.setCountCart}
          countCart={props.countCart}
        />
    </div>
  );
}

export default Catalog;