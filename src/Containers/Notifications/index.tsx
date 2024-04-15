import Notification from "../../Components/Notification";

import StyledNotifications from "./styled";

function Notifications() {

    return (
        <StyledNotifications>
            <Notification type="addContact" content={{from: "1"}} /> 
            <Notification type="newMessage" content={{message: {message:"Oba",senderId:"1", timeStamp:""}}} /> 
            <Notification type="newMessage" content={{message: {message:"Voce",senderId:"1", timeStamp:""}}} /> 
            <Notification type="newMessage" content={{message: {message:"Legal",senderId:"1", timeStamp:""}}} /> 
        </StyledNotifications>
    )
}

export default Notifications