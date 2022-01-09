const Square = ({colorValue}) => {
    return (
        <section
            className="square"
            style={{background:colorValue}}
        >
            <h1>{colorValue? colorValue:"Empty Value"}</h1>
        </section>
    )
}

Square.defaultProps={
    colorValue:"Empty Color Value"
}

export default Square
