import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type contactListState = {
    contacts: string[]
}

const initialState: contactListState = {
    contacts: []
}

const contactListSlice = createSlice({
    name: 'contactList',
    initialState,
    reducers: {
        setContactList: (state, action: PayloadAction<string[]>) => {
            const contact = action.payload
            state.contacts = contact
        },
    }
})

export const { setContactList } = contactListSlice.actions
// exporta todas as actions
export default contactListSlice.reducer
// exporta o próprio reducer como padrão