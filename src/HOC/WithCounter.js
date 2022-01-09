import { useState } from "react"

const WithCounter = (OriginalComponent) => {
    const NewComponent = (props) => {
        const [count, setCount] = useState(0)
        const increment = () => {
            setCount(count + 2);
        }
        return (
            <OriginalComponent {...props} count={count} increment={increment} />
        )
    }

    return NewComponent;
}

export default WithCounter
