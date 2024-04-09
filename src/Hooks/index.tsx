import Cookies from "js-cookie";

function useHandleWebSocketEvents() {
    var authToken = Cookies.get("authToken");
    
    // alterar o user_name
    // const ws = new WebSocket(`ws${window.location.protocol === 'https:' ? 's' : ''}://${window.location.host}/ws/teste`)
    const ws = new WebSocket(`ws://127.0.0.1:8000/ws/${authToken}`)

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
    }

    return ws
}

export default useHandleWebSocketEvents