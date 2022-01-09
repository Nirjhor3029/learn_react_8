import { useState } from "react"
import WithCounter from "../HOC/WithCounter"

const Hover = (props) => {
    // const [count, setCount] = useState(0)
    // function increment() {
    //     console.log("inc");
    //     setCount(count+1);
    // }
    const {count,increment} = props;

    return (
        <div>
            <h1 onMouseOver={increment}>Hover {count} times</h1>
        </div>
    )
}

export default WithCounter( Hover);
