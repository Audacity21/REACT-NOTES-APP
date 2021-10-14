import React from "react";
import { MdSearch } from "react-icons/md";

const Search = ({handleSearchNote}) => {
    return(
        <div className="search">
            <MdSearch className='search-name' size='1.3em' />
            <input 
                onChange={(event)=>
                    handleSearchNote(event.target.value)
                } 
                type="text" placeholder="Type to search something..." />
        </div>
    )
}

export default Search;