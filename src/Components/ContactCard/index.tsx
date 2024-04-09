
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux"
import { adicionar } from "../../store/reducers/chatTabs"
import { setContactList } from "../../store/reducers/contactList";
import { useAddContactMutation, useRemoveContactMutation } from '../../store/api'
import StyledContactCard from "./styled"

import { RiUserAddLine, RiUserUnfollowLine, RiEditLine, RiRefreshLine } from "react-icons/ri";

interface ContactCardProps {
    profile_id: string
    profile_picture: string
    profile_name: string
    profile_status: | 'on' | 'busy' | 'off'
    profile_status_msg: string
    isMyContact?: boolean
}

function ContactCard(props: ContactCardProps) {

    const dispatch = useDispatch()
    const [addContact, { data: addDataResponse }] = useAddContactMutation()
    const [removeContact, { data: removeDataResponse }] = useRemoveContactMutation()
    const [editing, setEditing] = useState(false)

    useEffect(()=>{
        if (addDataResponse && addDataResponse.data.addContact !== null){
            // console.log(addDataResponse)
            dispatch(setContactList(addDataResponse.data.addContact.contactList))
        }
    },[ addDataResponse])

    useEffect(()=>{
        if (removeDataResponse && removeDataResponse.data.removeContact !== null){
            // console.log(removeDataResponse)
            dispatch(setContactList(removeDataResponse.data.removeContact.contactList))
        }
    },[removeDataResponse])

    return (
        <StyledContactCard
            onClick={() => {
                if (props.isMyContact) {
                    dispatch(adicionar({ id: props.profile_id, img: props.profile_picture, name: props.profile_name }))
                }
            }}
        >
            <img src={props.profile_picture} alt="Foto do contato" className={props.profile_status} />
            <div>
                <h3 id="contact_name">{props.profile_name}</h3>
                <div id="contact_status_message">{props.profile_status_msg}</div>
            </div>
            <div id="action-buttons">
                {!props.isMyContact && !(String(props.profile_id) === sessionStorage.getItem('user_id')) && (
                    <button
                        title="Adicionar aos contatos"
                        onClick={() => {
                            addContact( props.profile_id )
                        }}
                    >
                        <RiUserAddLine />
                    </button>
                )}
                {props.isMyContact && (
                    <button
                        title="Remover dos contatos"
                        onClick={(evt) => {
                            evt.stopPropagation()
                            removeContact( props.profile_id )
                            // console.log(removeDataResponse)
                        }}
                    >
                        <RiUserUnfollowLine />
                    </button>
                )}
                {editing && <button title="Atualizar dados do perfil">
                    <RiRefreshLine />
                </button>}
                {String(props.profile_id) === sessionStorage.getItem('user_id')! && <button onClick={() => setEditing(true)} title="Editar perfil">
                    <RiEditLine />
                </button>}
            </div>
        </StyledContactCard>
    )
}

export default ContactCard