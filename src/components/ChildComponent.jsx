import React from 'react'
import { TbTrashXFilled } from "react-icons/tb";
const ChildComponent = ({items, handleChange, handleDelete}) => {
  return (
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
  )
}

export default ChildComponent