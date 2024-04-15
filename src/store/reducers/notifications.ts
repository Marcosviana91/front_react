import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type notificationState = {
    contact: string[]
}

const initialState: notificationState = {
    contact: []
}

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        addNotification: (state, action: PayloadAction<string[]>) => {
            const contact = action.payload
            state.contact = contact
        },
        removeNotification: (state, action: PayloadAction<string[]>) => {
            const contact = action.payload
            state.contact = contact
        },
        setNotification: (state, action: PayloadAction<string[]>) => {
            const contact = action.payload
            state.contact = contact
        },
    }
})

export const { addNotification, removeNotification, setNotification } = notificationSlice.actions
// exporta todas as actions
export default notificationSlice.reducer
// exporta o próprio reducer como padrão