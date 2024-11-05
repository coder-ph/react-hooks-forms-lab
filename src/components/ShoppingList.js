import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearchText] = useState('')
  const [itemList, setItemList] =useState(items)

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(e) {
    setSearchText(e.target.value);
  }

  function handleItemOnSubmit(newItem){
    setItemList ([...itemList, newItem])

  }
    const itemsToDisplay = itemList.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;
      const matchesSearch = item.name
        .toLowerCase()
        .includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });

  return (
    <div className="ShoppingList">
      <ItemForm onItemSubmit={handleItemOnSubmit}/>
      <Filter 
      onCategoryChange={handleCategoryChange}
      onSearchChange = {handleSearchChange}
      searchText={search}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
