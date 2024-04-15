import Cookies from "js-cookie";
import { useDispatch } from 'react-redux';
import { addSessionChat } from "../store/reducers/sessionChats";

function useHandleWebSocketEvents() {
    const dispatch = useDispatch();
    var authToken = Cookies.get("authToken");
    
    // alterar o user_name// const ws = new WebSocket(`ws${window.location.protocol === 'https:' ? 's' : ''}://${window.location.host}/ws`)
    const ws = new WebSocket(`ws://127.0.0.1:8000/ws`)

    ws.onopen = function(e) {
        ws.send(
            JSON.stringify({
                "connectionParams": {
                    "authToken": authToken
                }
            })
        )
    }

    ws.onmessage = async function ({ data }) {
        let payload = JSON.parse(data)
        console.log("Payload: ", payload) //Mostra DATA
        if ("type" in payload) {
            switch (payload.type) {
                case "newMessage":
                    console.log("Mensagem recebida:")
                    console.log(payload["content"]["message"])
                    console.log(payload["content"]["message"]["senderId"])
                    dispatch(addSessionChat({...payload["content"]["message"], receiverId:String(payload["content"]["message"]["senderId"])}))
                    break;
            
                default:
                    break;
            }
        }
    }

    return ws
}

export default useHandleWebSocketEvents