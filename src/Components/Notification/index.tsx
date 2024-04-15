import ContactCard from "../ContactCard"
import StyledNotification from "./styled"

type Props = {
    type: "newMessage" | "addContact"
    content: {
        from?: string
        message?: MSGProps
    }
}

function Notification(props: Props) {

    return (
        <StyledNotification>
            <div id="timer-bar"></div>
            <button>X</button>
            {props.type === "newMessage" ?
                <>
                    <h3>Nova mensagem de <strong>Marcos</strong></h3>
                    <hr />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus pariatur eaque exercitationem!</p>
                </> :
                <>
                    <h3><strong>Marcos</strong> adicionou vc aos contatos</h3>
                    <hr />
                    <ContactCard profile_id={props.content.message?.senderId!} profile_name="Marcos" profile_picture="" profile_status="on" profile_status_msg="Te esperando" />
                </>}
        </StyledNotification>
    )
}

export default Notification