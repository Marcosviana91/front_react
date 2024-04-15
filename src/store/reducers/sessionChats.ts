import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type sessionChatState = {
    contactChat: [
        {
            id: string,
            messages: MSGProps[]
        }?
    ]
}

const initialState: sessionChatState = {
    contactChat: [
        {
            id: "4",
            messages: [
                {
                    timeStamp: "0000000000000",
                    message: "teste do Store",
                    senderId: "4",
                },
                {
                    timeStamp: "111111111111",
                    message: "teste 01",
                    senderId: "4"
                }
            ]
        }
    ]
}

const sessionChatSlice = createSlice({
    name: 'sessionChat',
    initialState,
    reducers: {
        addSessionChat: (state, action: PayloadAction<MSGProps>) => {
            const newMessage = action.payload
            var isChatting = false
            state.contactChat.map(chat => {
                if (chat?.id === String(newMessage.receiverId)) {
                    chat.messages = [...chat.messages, newMessage]
                    isChatting = true
                }
                if (!isChatting) {
                    state.contactChat.push({
                        id: String(newMessage.receiverId),
                        messages: [newMessage]
                    })
                    isChatting = true
                }
                return chat
            })
        },
    }
})

export const { addSessionChat } = sessionChatSlice.actions
// exporta todas as actions
export default sessionChatSlice.reducer
// exporta o próprio reducer como padrão