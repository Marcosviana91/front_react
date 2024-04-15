import { useSelector } from "react-redux";
import { RootReducer } from "../../store";

import useHandleWebSocketEvents from "../../Hooks";

import StyledChat from "./styled"
import ChatContent from "../../Containers/ChatContent";
import ChatTabs from '../../Containers/ChatTabs'
import ContactsList from '../../Containers/ContactsList';
import Notifications from "../../Containers/Notifications";

function ChatPage() {
    const tabsInChat = useSelector((state: RootReducer) => state.chatTabs.tabsInChat)
    const tabActiveUserID = useSelector((state: RootReducer) => state.chatTabs.tabActiveUserID)
    useHandleWebSocketEvents()
    

    return (
        <StyledChat>
            <ContactsList />
            <div id="chat_box">
                <ChatTabs />
                {
                    tabsInChat.map(chat => {
                        return (
                            <ChatContent key={chat.id} receiverId={chat.id} isVisible={chat.id === tabActiveUserID} />
                        )
                    })
                }
            </div>
            <Notifications />
        </StyledChat>
    )
}

export default ChatPage