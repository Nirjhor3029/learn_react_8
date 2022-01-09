import { useState } from "react";
import WithCounter from "../HOC/WithCounter";

const Button = (props) => {
    // const [count, setCount] = useState(0);
    // function increment() {
    //     console.log("inc");
    //     setCount(count+1);
    // }

    const {count,increment} = props;

    return (
        <div>
            <button onClick={increment}>Click {count} times</button>
        </div>
    )
}

export default WithCounter(Button);
