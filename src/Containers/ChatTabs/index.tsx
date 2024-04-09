import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import ChatTab from "../../Components/ChatTab"


import StyledChatTabs from "./styled"

function ChatTabs() {
    const tabsInChat = useSelector((state: RootReducer) => state.chatTabs.tabsInChat)
    const tabActiveUserID = useSelector((state: RootReducer) => state.chatTabs.tabActiveUserID)

    return (
        <StyledChatTabs>
            {tabsInChat.map(user => (
                <ChatTab
                    key={user.id}
                    profile_user_id={user.id}
                    profile_name={user.name}
                    profile_picture={user.img}
                    profile_status="on"
                    tab_status={tabActiveUserID === user.id ? "activated" : "deactivated"}
                />

            ))}
        </StyledChatTabs>
    )
}

export default ChatTabs