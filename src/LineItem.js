import { FaTrashAlt } from 'react-icons/fa';

const LineItem = ({ item, handleCheck, handleDelete }) => {
    return (
        <li className="item" key={item.id} >
            <input type="checkbox" checked={item.checked} id={"item" + item.id} onChange={() => handleCheck(item.id)} />
            <label htmlFor={"item" + item.id} className={(item.checked) ? 'line_through' : ''}>
                {item.item}
            </label>
            <FaTrashAlt
                role={"button"} 
                tabIndex={0} 
                onClick={() => handleDelete(item.id)}
                aria-label={`Delete ${item.item}`}
            />
        </li>
    )
}

export default LineItem
