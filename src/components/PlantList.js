import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, onDeletePlant, onUpdatePlant }) {
  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard key={plant.id} id={plant.id} name={plant.name} image={plant.image} price={plant.price} onDeletePlant={onDeletePlant} onUpdatePlant={onUpdatePlant}/>
      ))}
    </ul>
  );
}

export default PlantList;
