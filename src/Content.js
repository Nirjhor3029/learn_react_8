import { useState } from "react";

export const Content = () => {
    const [name, setName] = useState("Nirjhor");
    const [count, setCount] = useState(0)
    const handleNameChange = () => {
        const names = ['Bob', 'Kevin', 'Dave',"Nirjhor", "Sazzad", "Hossain"];
        const int = Math.floor(Math.random() * names.length);
        setName(names[int]);
    }
    const handleClick = () =>{
        setCount(count+1);
        setCount(count+1);
        setCount(count+1);
        setCount(count+1);
        setCount(count+1);
        setCount(count+1);
        console.log(count);
    }
    return (
        <main>
            <p>
                Hello {name}!
                <br/>
                <button onClick={handleNameChange}>Change Name</button>
                <button onClick={handleClick}>Count +</button>
            </p>
        </main>
    )
}
