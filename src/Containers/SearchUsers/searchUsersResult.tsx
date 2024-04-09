
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootReducer } from "../../store";
import { useSearchUsersbyNameQuery } from "../../store/api";

import ContactCard from "../../Components/ContactCard";


type SearchUsersResultProps = {
    filter:string
}

function SearchUsersResult(props: SearchUsersResultProps){
    const { data: dataSearchUsersbyName, isLoading } = useSearchUsersbyNameQuery(props.filter)
    const [dataSearchUsersbyNameResult, setDataSearchUsersbyNameResult] = useState<searchUsersbynameProps["data"]["searchUsersbyname"]>([])
    const contacts = useSelector((state: RootReducer) => state.contactsList.contacts) // lista com IDs dos contatos
    
    useEffect(() => {
        if (!isLoading && dataSearchUsersbyName) {
            // console.log(dataSearchUsersbyName.data)
            setDataSearchUsersbyNameResult(dataSearchUsersbyName.data.searchUsersbyname)
        }
    }, [dataSearchUsersbyName])

    
    return (
        <div id="search-result">
                    {dataSearchUsersbyNameResult.map(user => {
                        if(String(user.id) === sessionStorage.getItem('user_id')) return null

                        if(user.name.toLocaleLowerCase().includes(props.filter.toLocaleLowerCase())) {
                            // console.log(contacts.find( id => id === user.id) !== undefined)
                            return (
                                <ContactCard
                                    key={user.id}
                                    profile_id={user.id}
                                    profile_name={user.name}
                                    profile_picture={user.photo}
                                    profile_status="on"
                                    profile_status_msg="asdasd"
                                    isMyContact={(contacts.find( id => id === user.id) !== undefined)}
                                />
                            )
                        }
                        return null
                    })
                    }

                    {/* Máximo 10 cards */}

                </div>
    )

}

export default SearchUsersResult