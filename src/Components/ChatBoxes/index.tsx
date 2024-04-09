import { useEffect, useState } from 'react';

import { useGetMessageHistoryQuery } from '../../store/api'

import StyledChatBoxes from "./styled";
import ChatMsg from "../ChatMsg";

type Props = {
    receiverId: string,
    last_message: string,
    setLastTimeStamp: (lastTimeStamp: string)=> void
}

const PAGINATION = 10

function ChatBoxes({ receiverId, last_message, setLastTimeStamp }: Props) {
    const messagesFromHistory = useGetMessageHistoryQuery({ receiverId: receiverId, message: last_message }).data?.data.getCtxtMessagehistory
    const [msgs, setMsgs] = useState<MSGProps[]>([])
    let new_msg = []

    useEffect(() => {
        if (messagesFromHistory) {
            // console.log('EXISTE: ', messagesFromHistory)
            if (messagesFromHistory && (Number(messagesFromHistory.length) === 0 || messagesFromHistory.length < PAGINATION)) {
                // console.log(`EXISTE e é IGUAL A 0 ou MENOR QUE ${PAGINATION}: `, messagesFromHistory)
                // console.log('EOF')
                setLastTimeStamp('EOF')
            }

            else if (messagesFromHistory && messagesFromHistory.length > 0) {
                // console.log('EXISTE e é MAIOR QUE 0: ', messagesFromHistory)
                // console.log(messagesFromHistory[0].timeStamp as string)
                setLastTimeStamp(messagesFromHistory[0].timeStamp as string)
            }
            new_msg = messagesFromHistory.map(history_message => history_message)
            setMsgs(new_msg)
        }
    }, [messagesFromHistory])

    return (
        <StyledChatBoxes>
            {msgs.map((msg) => {
                return (<ChatMsg key={msg.timeStamp} timestamp={msg.timeStamp!} message={msg.message} sender={String(msg.senderId) === sessionStorage.getItem('user_id')! ? 'me' : 'others'} />)
            })}
        </StyledChatBoxes>
    )
}

export default ChatBoxes