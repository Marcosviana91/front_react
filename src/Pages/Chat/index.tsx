import { useState } from "react";
import { useSelector } from "react-redux";
import { RootReducer } from "../../store";

import useHandleWebSocketEvents from "../../Hooks";

import StyledChat from "./styled"
import ChatContent from "../../Containers/ChatContent";
import ChatTabs from '../../Containers/ChatTabs'
import ContactsList from '../../Containers/ContactsList';
import Notifications from "../../Containers/Notifications";

// Icons
import { BiSolidLeftArrow,BiSolidRightArrow  } from "react-icons/bi";

function ChatPage() {
    const [isShowContacts, setShowContacts] = useState(false)
    const tabsInChat = useSelector((state: RootReducer) => state.chatTabs.tabsInChat)
    const tabActiveUserID = useSelector((state: RootReducer) => state.chatTabs.tabActiveUserID)
    useHandleWebSocketEvents()


    return (
        <StyledChat>
            {isShowContacts && <ContactsList />}
            
            <div id="chat_box">
                <div id="chat-tabs-bar">
                    <button id="toggle-show-contacts" onClick={()=> setShowContacts(!isShowContacts)}>{ isShowContacts ? <BiSolidLeftArrow /> : <BiSolidRightArrow /> }</button>
                    <ChatTabs />
                </div>
                {
                    tabsInChat.map(chat => {
                        return (
                            <ChatContent key={chat.id} receiverId={chat.id} isVisible={chat.id === tabActiveUserID} />
                        )
                    })
                }
            </div>
            {/* <Notifications /> */}
        </StyledChat>
    )
}

export default ChatPage