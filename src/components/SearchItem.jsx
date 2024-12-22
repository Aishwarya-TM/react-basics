import React from 'react'

const SearchItem = ({search, setSearch}) => {
  return (
    <div>
        <form onSubmit={(e)=> e.preventDefault()}>
            <input type="text" 
            id="text" 
            placeholder='Search an item' 
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            />
        </form>
    </div>
  )
}

export default SearchItem