
import ItemList from "./ItemList";
export const Content = ({ items, handleCheck, handleDelete }) => {
    // const [{items,handleCheck,handleDelete}] = ...props;
    // const [...props] = props;
    // console.log(props);

    return (
        <main>
            {(items.length) ? (
                <ItemList
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ) : (
                <p>Your list is empty</p>
            )}


        </main>
    )
}
