import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import TodoList from './components/TodoList';
import Props from './components/Props';
import AddNewItem from './components/AddNewItem';
import SearchItem from './components/SearchItem';
import axios from 'axios';
import apiRequest from './components/apiRequest';

const App = () => {
  const API_URL = "http://localhost:3500/items"
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)


  //useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL); // axios will automatically parses the data to json which is key difference between the fetch and axios. fetch will not automatically parses the json so we need to use a method called .json()
      setItems(response.data);
        setError(null)
      }
      catch(error){
        setError(error.message)

      }
      finally{
        setIsLoading(false)
      }
      
    }
    setTimeout(()=>{
      (async () => fetchData())()
    },2000)
  }, [])



  // Add a new item to the list
  const addNewItems = async(item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addItem = { id, name: item, checked: false };
    const list = [...items, addItem];
    setItems(list);


    // sending a data using postmethod
    const postOption = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(addItem)
    }
    const result = await apiRequest(API_URL, postOption) // error value default ah null la irukum, it result variable has a value means it should a error bcoz we are returning an error in the apireq method
    if(result) setError(result)
  };

  // Toggle the checked state
  const handleChange = async(id) => {
    const list = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(list);

    //updating the data using patch
    const myItem = list.filter(item => item.id === id)
    const upadateOption = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({checked: myItem[0].checked})
    }
    const result = await apiRequest(API_URL+'/'+id, upadateOption) // update pandrom na nambluku athooda id venum en na oru particular item ah dha update pannvom so we need id athuku dha API_URL+'/'+id
    if(result) setError(result)
  };

  // Delete an item
  const handleDelete = async(id) => {
    const list = items.filter((item) => item.id !== id);
    setItems(list);

    // deleting an item using delete method
    const deleteOption = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' } // delete panna id mattum podhum, so unnecessary ah edhuvum poda venam
  };
  const result = await apiRequest(API_URL+'/'+id, deleteOption) 
  if(result) setError(result)
}

  // Handle new item submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addNewItems(newItem);
    setNewItem('');
  };

  return (
    <>
      <Header />
      <Content />
      <Footer />

      {/* TodoList with search functionality */}
      <TodoList
        items={items.filter(item =>
          item.name.toLowerCase().includes(search.toLowerCase())
        )}
      />
    
      {/* Props Component */}
      <main>
        {isLoading && <p>Items are loading....</p>} {/* items are loading nu varum and list is empty num varum apdi vara kodathu naa, loading aagum podhu list empty vara kodathu nu maathanum*/}
        {error && <p>{`Error: ${error}`}</p>}
       {!isLoading && !error && <Props 
        items={items}
        setItems={setItems}
        handleChange={handleChange}
        handleDelete={handleDelete}
      />} {/* loading aagadha appo and  error illadha appo indha component ah render pannunga nu soldrom*/}
      </main>
      

      {/* Add New Item Component */}
      <AddNewItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />

      {/* Search Item Component */}
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
    </>
  );
};

export default App;
