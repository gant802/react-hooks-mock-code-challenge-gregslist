import React, {useState} from "react";

function ListingCard({props, deleteCard}) {
const [isClicked, setIsClicked] = useState(false)

function handleClick(e){
  if (e.target.className === "emoji-button delete") {
    fetch(`http://localhost:6001/listings/${props.id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => deleteCard(props.id))
  } else {
    setIsClicked(()=>!isClicked)
  }
}
  
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={props.image} alt={"description"} />
      </div>
      <div className="details">
        {isClicked ? (
          <button onClick={handleClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{props.description}</strong>
        <span> · {props.location}</span>
        <button onClick={handleClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;




// {
//   "listings": [
//     {
//       "id": 1,
//       "description": "heater",
//       "image": "./images/heater.jpg",
//       "location": "BROOKLYN"
//     },
//     {
//       "id": 2,
//       "description": "2019 Toyota Tacoma grill",
//       "image": "./images/toyota-grill.jpg",
//       "location": "Williamsburg"
//     },
//     {
//       "id": 3,
//       "description": "Free Braun 3735 Electric Toothbrush charger",
//       "image": "./images/toothbrush-charger.jpg",
//       "location": "Williamsburg"
//     },
//     {
//       "id": 4,
//       "description": "FREE Hundreds of DVD/CD Cases - Different Sizes and Colors",
//       "image": "./images/dvd-cases.jpg",
//       "location": "Prospect Heights"
//     },
//     {
//       "id": 5,
//       "description": "wood",
//       "image": "./images/wood.jpg",
//       "location": "Greenpoint"
//     },
//     {
//       "id": 6,
//       "description": "Beautiful couch",
//       "image": "./images/couch.jpg",
//       "location": "Bay Ridge"
//     },
//     {
//       "id": 7,
//       "description": "Treadmill Parts For Free",
//       "image": "./images/treadmill.jpg",
//       "location": "East Flatbush"
//     }
//   ]
// }