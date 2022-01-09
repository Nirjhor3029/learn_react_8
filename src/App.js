// import logo from './logo.svg';
// import './App.css';
import { useEffect, useState } from 'react';
import AddItem from './AddItem';
import apiRequest from './apiRequest';
import { Content } from './Content';
import Footer from './Footer';
import Header from './Header';
import SearchItem from './SearchItem';
// import Button from './components/Button';
// import Hover from './components/Hover';

function App() {
  const arrayOfItems = JSON.parse(localStorage.getItem('shopping_list'));

  const [items, setItems] = useState(arrayOfItems || []);
  const [newItem, setNewItem] = useState('');
  const [searchItem, setSearchItem] = useState('')
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null)

  const API_URL = "http://localhost:3500/items";

  useEffect(() => {
    console.log("render");
    // localStorage.setItem('shopping_list', JSON.stringify(items));

    const fetchItem = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Server Not Found");
        const listItem = await response.json();
        console.log(listItem);
        setItems(listItem);
        setFetchError(null);
      } catch (error) {
        console.log(error.message);
        setFetchError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchItem();

    // setTimeout(() => {
    //   fetchItem();
    // }, 1000);

  }, [])



  const setAndSaveItems = (items) => {
    setItems(items);
  }




  // For Content.js- start
  const handleCheck =async (id) => {
    // const listItems = items.map((item)=>{
    //     return (item.id === id)? {...item,checked: !item.checked} : item;
    // });
    const listItems = items.map((item) => (
      (item.id === id) ? { ...item, checked: !item.checked } : { ...item } //item
    ));
    setAndSaveItems(listItems);

    const myItem = listItems.filter((item) => item.id === id);
    console.log(myItem);

    // DB - Update Item
    const reqUrl = `${API_URL}/${id}`;
    const updateOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ checked: myItem[0].checked })
    }
    const result = await apiRequest(reqUrl, updateOptions);
    if (result) setFetchError(result);
  }


  const handleDelete = async (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems);

    // DB - Delete Item
    const reqUrl = `${API_URL}/${id}`;
    const deleteOptions = {method: 'DELETE'}
    const result = await apiRequest(reqUrl, deleteOptions);
    if (result) setFetchError(result);
  }
  // For Content.js- end
  // For AddItem.js
  const addItem = async (item) => {
    const id = items.length ? (items[items.length - 1].id + 1) : 1;
    const myNewItem = {
      id,
      checked: false,
      item: item
    };
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);

    // DB - Add Item
    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(myNewItem)
    }
    const result = await apiRequest(API_URL, postOptions);
    if (result) setFetchError(result);

  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newItem) {
      console.log("no new item");
      return;
    }
    console.log(newItem);
    // Add Item
    addItem(newItem)

    //Empty the text field
    setNewItem("");
    // const listItems = items.filter((item) => item.id !== id);
    // setItems(listItems);
    // localStorage.setItem('shopping_list', JSON.stringify(listItems));
  }

  const handleSearch = () => {
    console.log("Search");
  }

  return (
    <div className="App">

      <Header title="Grocery list" />
      <SearchItem
        searchItem={searchItem}
        setSearchItem={setSearchItem}
        handleSearch={handleSearch}
      />
      <main>
        {isLoading && <p>Loading Data .....</p>}
        {fetchError && <p style={{ color: 'red' }}>{fetchError}</p>}

        {
          !fetchError &&
          !isLoading &&
          <Content
            items={items.filter(item => ((item.item).toLowerCase()).includes(searchItem.toLowerCase()))}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        }

      </main>


      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />

      <Footer length={items.length} />

      {/* <Button newProp={"new"}/>
      <Hover/> */}
    </div>
  );
}

export default App;
