import React, {useState} from 'react';

let Search = (props) => {

    let [search, setSearch] = useState('');

    let onSearchClick = () => {
        props.setSearchString(search);
    }

    return <div >
    <input value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
    <button onClick={onSearchClick}>Поиск</button>
</div>
}

export default Search;