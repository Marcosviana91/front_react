import { useDispatch } from 'react-redux';
import { setTabActiveUserID, remover } from '../../store/reducers/chatTabs'

import StyledChatTab from "./styled"

// Icons
import { FaRegWindowClose } from "react-icons/fa";

interface ChatTabProps {
    profile_user_id: string
    profile_picture: string
    profile_name: string
    profile_status: | 'on' | 'busy' | 'off'
    tab_status: | 'activated' | 'deactivated'
}

function ChatTab(props: ChatTabProps) {
    const dispatch = useDispatch()

    return (
        <StyledChatTab title={props.profile_user_id}
        className={props.tab_status}>
            <span 
            id='user_data'
            onClick={()=> dispatch(setTabActiveUserID(props.profile_user_id))}
            >
                <img src={props.profile_picture} alt='' className={props.profile_status} />
                <h3 id="contact_name">{props.profile_name}</h3>
            </span>
            <span onClick={()=> dispatch(remover(props.profile_user_id))}><FaRegWindowClose /></span>
            <div id="chat_tab_active" />
        </StyledChatTab>
    )
}

export default ChatTab