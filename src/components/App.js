import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import ItemForm from "./ItemForm";

function App() {
  const [cards, setCards] = useState([])

  function handleNewCard(newCard) {
    fetch('http://localhost:6001/listings', {
      method: 'POST', 
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newCard)
    })
    .then(res => res.json())
    .then(data =>  listUpdate(data)) 
  }

  const listUpdate = (newCard) => setCards([...cards, newCard])
  

  return (
    <div className="app">
       <Header />
       <ItemForm handleNewCard={handleNewCard}/>
       <ListingsContainer cards={cards} setCards={setCards}/>
    </div>
  );
}

export default App;
