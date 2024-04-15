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
        try {
            console.log(payload["content"]["message"])
            dispatch(addSessionChat({...payload["content"]["message"], receiverId:"1"}))
        }
        catch (e) {
            console.log("ERRO NO WS")
        }
    }

    return ws
}

export default useHandleWebSocketEvents