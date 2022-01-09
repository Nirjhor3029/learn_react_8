// import logo from './logo.svg';
// import './App.css';
import { useState } from 'react';
import { Content } from './Content';
import Footer from './Footer';
import Header from './Header';
// import Button from './components/Button';
// import Hover from './components/Hover';

function App() {

  // For Content.js- start
  const arrayOfItems = [
    {
      id: 1,
      checked: false,
      item: "One half pound of bag of cocoa bla bla bla",
    },
    {
      id: 2,
      checked: true,
      item: "Item 2",
    },
    {
      id: 3,
      checked: false,
      item: "Bla bla bla 3",
    },
  ];

  const [items, setItems] = useState(arrayOfItems);


  const handleCheck = (id) => {
    // console.log(id);

    // const listItems = items.map((item)=>{
    //     return (item.id === id)? {...item,checked: !item.checked} : item;
    // });


    const listItems = items.map((item) => (
      (item.id === id) ? { ...item, checked: !item.checked } : { ...item } //item
    ));
    setItems(listItems);

    localStorage.setItem('shopping_list', JSON.stringify(listItems));
  }
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    // localStorage.setItem('shopping_list', JSON.stringify(listItems));
  }
  // For Content.js- end

  return (
    <div className="App">
      <Header title="Grocery list" />
      <Content 
        items = {items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length}/>

      {/* <Button newProp={"new"}/>
      <Hover/> */}
    </div>
  );
}

export default App;
