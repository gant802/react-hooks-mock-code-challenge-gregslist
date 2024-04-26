import React, { useEffect, useState, useContext} from "react";
import ListingCard from "./ListingCard";
import { SearchContext } from "./SearchState";

function ListingsContainer({cards, setCards}) {
const [sortClicked, setSortClicked] = useState(false)
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

  const sortedCardsAZ = [...foundCards].sort(function(a, b) {
    const nameA = a.location.toUpperCase();
    const nameB = b.location.toUpperCase(); 
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    // names must be equal
    return 0;
  });

const cardListSorted = sortedCardsAZ.map(card => {
  return <ListingCard key={card.id} props={card} deleteCard={handleDelete}/>
})

const cardListUnSorted = foundCards.map(card => {
  return <ListingCard key={card.id} props={card} deleteCard={handleDelete}/>
})
const toSortOrNot = sortClicked ? cardListSorted : cardListUnSorted

  return (
    <main>
      <button onClick={() => setSortClicked(!sortClicked)}>Sort Alphabetically by Location</button>
      <ul className="cards">
        {toSortOrNot}
      </ul>
    </main>
  );
}

export default ListingsContainer;
