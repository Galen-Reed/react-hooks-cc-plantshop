import React, { useState } from "react";

function PlantCard({ name, image, price, id, onDeletePlant, onUpdatePlant }) {

  const [inStock, setInStock] = useState(true);
  const [newPrice, setNewPrice] = useState(price);

  function handleClick() {
    setInStock(!inStock);
  }

  function handlePriceChange(event) {
    setNewPrice(event.target.value);
  }

  function handleUpdateClick() {
    onUpdatePlant(id, parseFloat(newPrice));
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: 
        <input
        type="number"
          value={newPrice}
          onChange={handlePriceChange}
        />
        </p>
      <button onClick={handleUpdateClick}>Update Price</button>
      <button className={inStock ? "primary" : ""} onClick={handleClick}>
        {inStock ? "In Stock" : "Out of Stock"}
      </button>
      <button onClick={() => onDeletePlant(id)}>Delete</button>
    </li>
  );
}

export default PlantCard;
