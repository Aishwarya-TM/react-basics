import React from 'react'
import { FaPlus } from 'react-icons/fa'

const AddNewItem = ({newItem, setNewItem, handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder='Add New item' 
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        />
        <button type="submit"><FaPlus/></button>
    </form>
  )
}

export default AddNewItem