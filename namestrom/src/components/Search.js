const Search = ({ handleOnChange }) => {
    return (
        <div className='search'>
            <i className="fa fa-search fa-lg icon"></i>
            <input onChange={(e) => { handleOnChange(e.target.value) }} className="search-input"
                type="text"
                placeholder="Type Keyword" />
        </div>
    )
}

export default Search
