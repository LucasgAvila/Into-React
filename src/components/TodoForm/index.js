import React, { useContext, useState } from "react";
import { TodoContext } from '../../TodoContext'
import './styles.css'

function TodoForm(){
    const [newTodoValue, setNewTodoValue] = useState('')
    const {
        addTodo,
        setOpenModal,
    } = useContext(TodoContext)

    const onChange = (event) => {
        setNewTodoValue( event.target.value)
    }

    const onCancel = () => {
        setOpenModal(false)
    }
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false)
    }
   return (
    <form onSubmit={onSubmit}>
        <label >Escribe tu nuevo TODO</label>
        <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="El rojo es mi pasion"
        />
            <div className="TodoForm-buttonContainer">
                <button
                type="button"
                className="TodoForm-button TodoForm-button-cancel"
                onClick={onCancel}>
                    Cancelar
                </button>
                <button
                type="submit"
                className="TodoForm-button TodoForm-button-add"
                >
                    Añadir
                </button>
            </div>
    </form>
)
}

export { TodoForm }