import { useState } from "react";

import SearchUsersResult from "./searchUsersResult";
import StyledSearchUsers from "./styled"

type SearchUsersProps = {
    user_name: string
    closeSearch: ()=> void
}

function SearchUsers(props: SearchUsersProps) {
    const [searchFilter, setSearchFilter] = useState(props.user_name)

    return (
        <StyledSearchUsers onClick={()=> props.closeSearch()}>
            <div onClick={(evt) => {evt.stopPropagation()}}>
                <div id="search-bar">
                    <label>
                        Buscar
                    </label>
                    <input type="text" value={searchFilter} onChange={(evt) => setSearchFilter(evt.target.value)} />
                </div>
                {/* RESULTADO AQUI */}
                <SearchUsersResult filter={searchFilter} />
            </div>
        </StyledSearchUsers>
    )
}

export default SearchUsers