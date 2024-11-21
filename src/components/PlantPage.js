import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredPlants, setFilteredPlants] = useState([]);

  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then((response) => response.json())
      .then((data) => {
        setPlants(data);
        setFilteredPlants(data); 
      });
  }, []);

  useEffect(() => {
    setFilteredPlants(plants.filter((plant) =>
      plant.name.toLowerCase().includes(search.toLowerCase())
    ));
  }, [plants, search]);

  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  function handleDeletePlant(plantId) {
    setPlants(plants.filter((plant) => plant.id !== plantId));

    fetch(`http://localhost:6001/plants/${plantId}`, {
      method: 'DELETE',
    })
  }

  function handleUpdatePlant(plantId, newPrice) {
    setPlants((prevPlants) =>
      prevPlants.map((plant) =>
        plant.id === plantId ? { ...plant, price: newPrice } : plant
      )
    );

    fetch(`http://localhost:6001/plants/${plantId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ price: newPrice }),
    })
  }

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search setSearch={setSearch}/>
      <PlantList plants={filteredPlants} onDeletePlant={handleDeletePlant} onUpdatePlant={handleUpdatePlant}/>
    </main>
  );
}

export default PlantPage;
