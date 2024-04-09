import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { RootReducer } from '../../store'
import { setContactList } from '../../store/reducers/contactList';
import { setUserList } from '../../store/reducers/usersList';

import { useGetCtxtUserQuery, useGetUsersbyIdsQuery } from '../../store/api'

import ContactCard from "../../Components/ContactCard"

import { RiUserSearchLine } from "react-icons/ri";
import { TbLogout2 } from "react-icons/tb";
import { SyncLoader } from "react-spinners";

import StyledContactsList, { StyledButton } from "./styled";
import SearchUsers from '../SearchUsers';

function ContactsList() {
    const dispatch = useDispatch()
    const { data: connectedUserData, isLoading: connectedUserDataLoading } = useGetCtxtUserQuery()
    const contacts = useSelector((state: RootReducer) => state.contactsList.contacts) // lista com IDs dos contatos
    const { data: contactsData } = useGetUsersbyIdsQuery(contacts)
    const users = useSelector((state: RootReducer) => state.usersList.users) // lista com os dados dos contatos

    const [contactNameFilter, setContactNameFilter] = useState('')
    const [isSearching, setIsSearching] = useState(false)

    useEffect(() => {
        if (connectedUserData && !connectedUserDataLoading) {
            dispatch(setContactList(connectedUserData.data.getCtxtUser.contactList!))
        }
    }, [connectedUserDataLoading])

    useEffect(() => {
        if (contactsData && contactsData.data.getUsersbyids.length > 0) {
            let tempArray: UserProps[] = []
            contacts.forEach((cont, index) => {
                tempArray.push({
                    id: cont,
                    name: contactsData.data.getUsersbyids[index].name,
                    img: contactsData.data.getUsersbyids[index].photo
                })
            })
            dispatch(setUserList(tempArray))
        }
    }, [contactsData])

    return (
        <StyledContactsList>
            <h2>SEUS CONTATOS</h2>
            <div id="contacts_filter">
                <input type="text" placeholder="Pesquisar contato" value={contactNameFilter} onChange={(evt) => setContactNameFilter(evt.target.value)} />
                <button type="button" onClick={() => setIsSearching(true)}>
                    <RiUserSearchLine />
                </button>
            </div>
            <div id='contact_list'>
                {
                    users.length > 0 && contacts.map(contact => {
                        let user_data = users.filter(user => (user.id === contact))[0]

                        if (user_data && user_data.name.toLowerCase().includes(contactNameFilter.toLowerCase())) {
                            return (
                                <ContactCard key={contact} profile_id={contact} profile_name={user_data.name} profile_status="on" profile_status_msg="Te esperando" profile_picture={user_data.img} isMyContact={true} />
                            )
                        }
                        return null
                    }
                    )
                }
            </div>
            <div id='about-me'> {/* Exibe o perfil de quem está conectado */}
                <hr />
                {connectedUserDataLoading ?
                    <span id='loader-animation'>
                        <SyncLoader />
                    </span>
                    :
                    (
                        <span>
                            <ContactCard
                                profile_id={connectedUserData!.data.getCtxtUser.id!}
                                profile_name={connectedUserData!.data.getCtxtUser.name}
                                profile_picture={connectedUserData!.data.getCtxtUser.photo}
                                profile_status='on'
                                profile_status_msg='ON LINE'
                            />
                            <div id='details'>
                                <h3>Detalhes</h3>
                                <p>ID: <strong>{sessionStorage.getItem('user_id')!}</strong> - {connectedUserData!.data.getCtxtUser.email}</p>
                                <p></p>
                                <br />
                                {/* <label>
                                    <input type='text' placeholder={'Sua mensagem de status'} value={'Fui almoçar'} />

                                </label> */}
                                {/* <div>
                                    <p>Disponibilidade</p>
                                    <label>online
                                        <input name='status' type="radio" value={'on'} />
                                    </label>
                                    <label>
                                        ocupado
                                        <input name='status' type="radio" value={'busy'} checked />
                                    </label>
                                    <label>
                                        offline
                                        <input name='status' type="radio" value={'off'} />
                                    </label>
                                </div> */}
                            </div>
                        </span>
                    )}
            </div>
            <a href="/logout">
                <StyledButton
                    id='btn_logout'
                    type="button"
                    title='Sair'
                >

                    <TbLogout2 />

                </StyledButton>
            </a>
            {isSearching && <SearchUsers user_name={contactNameFilter} closeSearch={() => setIsSearching(false)} />}
        </StyledContactsList>
    )
}

export default ContactsList