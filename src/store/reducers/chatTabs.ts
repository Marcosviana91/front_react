import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type chatTabsState = {
    tabsInChat: UserProps[]
    tabActiveUserID: string
}

const initialState: chatTabsState = {
    tabsInChat: [],
    tabActiveUserID: ''
}

const chatTabsSlice = createSlice({
    name: 'chatTabs',
    initialState,
    reducers: {
        adicionar: (state, action: PayloadAction<UserProps>) => {
            if (state.tabsInChat.find(user => (user.id === action.payload.id)) === undefined) {
                const tab = action.payload
                state.tabsInChat.push(tab)
            }
            state.tabActiveUserID = action.payload.id
        },
        remover: (state, action: PayloadAction<string>) => {
            const temp_array = state.tabsInChat.filter(user => user.id !== action.payload)
            state.tabsInChat = temp_array

            if(action.payload === state.tabActiveUserID) {
                try {
                    state.tabActiveUserID = temp_array[0].id
                }
                catch {
                    state.tabActiveUserID = '0'
                }
            }
        },
        setTabActiveUserID: (state, action: PayloadAction<string>) => {
            state.tabActiveUserID = action.payload
        }
    }
})

export const { adicionar, remover, setTabActiveUserID } = chatTabsSlice.actions
// exporta todas as actions
export default chatTabsSlice.reducer
// exporta o próprio reducer como padrão