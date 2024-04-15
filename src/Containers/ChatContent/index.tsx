import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../store';
import { addSessionChat } from '../../store/reducers/sessionChats';

import { useSendMessageMutation } from '../../store/api'

import { LuSendHorizonal } from "react-icons/lu";
import { MdCloudDownload } from "react-icons/md";

import StyledChatContent from "./styled";
import ChatMsg from '../../Components/ChatMsg'
import ChatBoxes from '../../Components/ChatBoxes'


function ChatContent(props: {receiverId: string, isVisible:boolean}) {
    const dispatch = useDispatch()
    // const [msgs, setMsgs] = useState<MSGProps[]>([])
    const msgs:MSGProps[] = useSelector((state: RootReducer) => state.sessionChats.contactChat).filter(chat => chat?.id===String(props.receiverId))[0]?.messages || []
    const [LastTimeStamp, setLastTimeStamp] = useState('')
    const [msgs_box, setMsgs_box] = useState<string[]>([''])
    const [sendMessage, { data: dataResponse }] = useSendMessageMutation()

    const [messageToSend, setMessageToSend] = useState('')


    let history_boxes = []

    // Preenche a message box temporária com a resposta da API
    useEffect(() => {
        if (dataResponse) {
            dispatch(addSessionChat({...dataResponse.data.newMessage, receiverId:props.receiverId}))
        }
    }, [dataResponse])

    // Atualiza o proximo "último" time stamp
    useEffect(()=>{
        if (LastTimeStamp) {
            let temp_array = [...msgs_box]
            temp_array[temp_array.length -1] = LastTimeStamp
            setMsgs_box([...temp_array])

        }
    },[LastTimeStamp])

    history_boxes.push(<ChatBoxes key={'initial'} receiverId={props.receiverId} last_message='' setLastTimeStamp={setLastTimeStamp} />)

    if (msgs_box.length > 1) {
        for (let box = 1; box < msgs_box.length; box++) {
            history_boxes.push(
                <ChatBoxes key={box} receiverId={props.receiverId} last_message={msgs_box[box - 1]} setLastTimeStamp={setLastTimeStamp} />
            )
        }
    }

    return (
        <StyledChatContent style={{display: props.isVisible ? 'flex': 'none'}}>
            <div id='msgs_box'>
                <div id='msg_box'>
                    {msgs && msgs.map((msg) => {
                        return (<ChatMsg key={msg.timeStamp} timestamp={msg.timeStamp!} message={msg.message} sender={String(msg.senderId) === sessionStorage.getItem('user_id')! ? 'me' : 'others'} />)
                    })}
                </div>
                {history_boxes.map(box => box)}
            </div>
            <form onSubmit={(evt) => {
                evt.preventDefault()
                if (messageToSend === '') {
                    // AVISO DE MENSAGEM VAZIA
                    console.log('vazio')
                } else {
                    sendMessage({ message: messageToSend, receiverId: props.receiverId })
                    setMessageToSend('')

                }
            }} id="chat_controls">
                <button
                    type="button"
                    title={(msgs_box[msgs_box.length - 1] === 'EOF') ? 'Não há mais mensagens' : 'Carregar mais mensagens'}
                    disabled={(msgs_box[msgs_box.length - 1] === 'EOF')}
                    onClick={() => {
                        setMsgs_box([...msgs_box, ''])
                    }}
                >
                    <MdCloudDownload />
                </button>
                <input type="text" value={messageToSend} onChange={(evt) => {
                    setMessageToSend(evt.target.value)
                }} />
                <button type="submit">
                    <LuSendHorizonal />
                </button>
            </form>
        </StyledChatContent>
    )
}

export default ChatContent