import React from 'react'
import ChildComponent from './ChildComponent';
const Props = ({items, setItems, handleChange, handleDelete}) => { // (props) ipdi potta we need to specify each attribute separately like props.items, where as we can another mehtods like obj destructuring ({items,setItems}) like this
    //the props are received from app to props component, we can also send props from props (parents) to their child component
    return (
      <>
          <h1>Todo List</h1>
          {items.length ? (
          <ChildComponent 
          items = {items}
          handleChange = {handleChange}
          handleDelete = {handleDelete} // passing to another child component, where the current comp is acting as parent component
          />
          ):(
              <p>Your list is empty</p>
          )
      }
      </>
      )
}

export default Props