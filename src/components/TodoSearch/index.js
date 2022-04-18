import React, { useContext } from 'react';
import { TodoContext } from '../../TodoContext';
import '../TodoSearch/styles.css';

function TodoSearch() {
  const {searchValue, setSearchValue} = useContext(TodoContext)

   const onSearchValueChange = (event) => {
    console.log(event.target.value)
    setSearchValue(event.target.value)
  }

  return [
    <input
    className="TodoSearch" 
    placeholder="Independiente"
    value={searchValue}
    onChange={onSearchValueChange}
    />,
    
  ];
}

export { TodoSearch };