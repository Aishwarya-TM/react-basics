import React, { Children, useState } from 'react'
import { TbTrashXFilled } from "react-icons/tb";

const TodoList = () => {
    const [items, setItems] = useState([
        { id: 1, name: 'Reading', checked: true },
        { id: 2, name: 'jogging', checked: false },
        { id: 3, name: 'listening', checked: false },
        { id: 4, name: 'sleeping', checked: true },
        { id: 5, name: 'learing', checked: false },
    ])

    const handleChange = (id) =>{
        const list = items.map(item => item.id === id ? {...item, checked: !item.checked} : item)
        setItems(list)
    }
    const handleDelete = (id) => {
        const list = items.filter(item => item.id !== id)
        setItems(list)
    }
  return (
    <div>
        <h1>Todo List</h1>
        {items.length ? (
        <ul>
            {items.map(item => 
           
                <li key={item.id}>
                    <input type="checkbox" checked={item.checked} onChange={() => handleChange(item.id)}/>
                    <label onDoubleClick={()=>handleChange(item.id)} style={(item.checked) ? {textDecoration:"line-through"}:null}>
                        {item.name}
                        </label>
                    <TbTrashXFilled 
                    onClick={() => handleDelete(item.id)}/>
                </li>
            )}
        </ul>
        ):(
            <p>Your list is empty</p>
        )
    }
    </div>
    )
  
}

export default TodoList