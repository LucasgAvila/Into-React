import React, { useContext } from "react";
import { TodoContext } from "../../TodoContext";
import './styles.css'

function TodoCounter() {
  const { totalTodos, completedTodos } = useContext(TodoContext)  
  
  return(
      <h2>Has completado {completedTodos} de {totalTodos} TODOs</h2>
    )
}

export { TodoCounter };