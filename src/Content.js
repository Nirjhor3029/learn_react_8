import { useState } from "react";
import { FaTrashAlt } from 'react-icons/fa';
export const Content = () => {

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

    return (
        <main>
            {(items.length) ? (
                <ul>
                    {items.map(item => (
                        <li className="item" key={item.id} >
                            <input type="checkbox" checked={item.checked} id={"item" + item.id} onChange={() => handleCheck(item.id)} />
                            <label htmlFor={"item" + item.id} className={(item.checked) ? 'line_through' : ''}>
                                {item.item}
                            </label>
                            <FaTrashAlt role={"button"} tabIndex={0} onClick={() => handleDelete(item.id)} />
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Your list is empty</p>
            )}


        </main>
    )
}
