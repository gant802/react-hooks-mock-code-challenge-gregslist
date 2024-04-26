import React, { useState } from "react"

function ItemForm({handleNewCard}) {
    const [isClicked, setIsClicked] = useState(false)
    const [formData, setFormData] = useState({
        description: "",
        image: "",
        location: ""
    })
    

    function handleChange(e){
        setFormData({ 
            ...formData, 
            [e.target.name]: e.target.value
          })
    }

    function handleSubmit(e){
        e.preventDefault()
        handleNewCard(formData)
        setFormData({
            description: "",
            image: "",
            location: ""
        })
        setIsClicked(() => !isClicked)
    }

    return (
        <div className="itemFormContainer">
        <button id="addItemButton" onClick={() => setIsClicked(!isClicked)}>Add New Item</button>
        {isClicked ? <form id="newItemForm" onSubmit={handleSubmit}>
            <label>Description:
                <input name="description" value={formData.description} onChange={handleChange}/>
            </label>
            <label>Image URL:
                <input name="image" value={formData.image} onChange={handleChange}/>
            </label>
            <label>Location:
                <input name="location" value={formData.location} onChange={handleChange}/>
            </label>
            <button type="submit">Add to List</button>
        </form> : null}
        </div>
    )
}

export default ItemForm