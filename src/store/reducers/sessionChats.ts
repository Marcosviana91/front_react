import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type sessionChatState = {
    contacts: string[]
}

const initialState: sessionChatState = {
    contacts: []
}

const sessionChatSlice = createSlice({
    name: 'sessionChat',
    initialState,
    reducers: {
        addSessionChat: (state, action: PayloadAction<string[]>) => {
            const contact = action.payload
            state.contacts = contact
        },
    }
})

export const { addSessionChat } = sessionChatSlice.actions
// exporta todas as actions
export default sessionChatSlice.reducer
// exporta o próprio reducer como padrão