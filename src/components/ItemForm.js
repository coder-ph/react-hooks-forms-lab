import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemSubmit}) {

  const [itemName, setItemName] = useState('')
  const[itemCategory, setItemCategory] = useState('Produce')

  function handleNameChange(e){
    setItemName(e.target.value)
  }

  function handleCategoryChange(e) {
    setItemCategory(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    const newItem={
      id: uuid(),
      name: itemName,
      category :itemCategory,
    }
    onItemSubmit(newItem)
    setItemName('')
    setItemCategory('Produce')
  }
  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input
          type="text"
          onChange={handleNameChange}
          value={itemName}
          name="name"
          onSubmit={handleSubmit}
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          onChange={handleCategoryChange}
          value={itemCategory}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
