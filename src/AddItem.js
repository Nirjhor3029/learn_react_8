import { useRef } from 'react';
import { FaPlus } from 'react-icons/fa';
const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
    const inputRef = useRef(null);

    return (
        <form className='addForm' onSubmit={handleSubmit}>
            <label htmlFor="add_item">Add Item</label>
            <input
                autoFocus
                type="text"
                id="add_item"
                placeholder='Add Item'
                onChange={(e) => { setNewItem(e.target.value) }}
                value={newItem}
                ref={inputRef}
                required
            />
            <button
                onClick={() => { inputRef.current.focus() }}
                type='submit'
            >
                <FaPlus />
            </button>
        </form>
    )
}

export default AddItem
