const Input = ({ colorValue, setColorValue }) => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="add_color">Add Color Name:</label>
            <input
                type="text"
                id="add_color"
                placeholder="Add color name"
                value={colorValue}
                onChange={(e)=>setColorValue(e.target.value)}
            />
        </form>
    )
}

export default Input
