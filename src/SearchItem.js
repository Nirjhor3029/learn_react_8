const SearchItem = ({searchItem,setSearchItem}) => {
    return (
        <form className="searchForm" onSubmit={(e)=>e.preventDefault()}>
            <label htmlFor="search_item">Search Item</label>
            <input
                autoFocus
                type="text"
                id="search_item"
                placeholder='Search Item'
                onChange={(e) => { setSearchItem(e.target.value) }}
                value={searchItem}
                required
            />
        </form>
    )
}

export default SearchItem
