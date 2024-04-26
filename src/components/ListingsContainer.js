import React, { useEffect, useState, useContext} from "react";
import ListingCard from "./ListingCard";
import { SearchContext } from "./SearchState";

function ListingsContainer() {
const [cards, setCards] = useState([])
const { search } = useContext(SearchContext)

useEffect (() => {
fetch('http://localhost:6001/listings')
.then(res=>res.json())
.then(data=>setCards(data))
}, [])

function handleDelete(deletedCardId) {
const updatedCards = cards.filter(card => deletedCardId !== card.id)
setCards(updatedCards)
}

const foundCards = cards.filter(card => {
  return card.description.toLowerCase().includes(search.toLowerCase())})

const cardsListed = foundCards.map(card => {
  return <ListingCard key={card.id} props={card} deleteCard={handleDelete}/>
})

  return (
    <main>
      <ul className="cards">
        {cardsListed}
      </ul>
    </main>
  );
}

export default ListingsContainer;
