import { createSlice, PayloadAction } from '@reduxjs/toolkit'


type userListState = {
    users: UserProps[]
}

const initialState: userListState = {
    users: []
}

const userListSlice = createSlice({
    name: 'userList',
    initialState,
    reducers: {
        setUserList: (state, action: PayloadAction<UserProps[]>) => {
            const users = action.payload
            state.users = users 
        }
    }
})

export const { setUserList } = userListSlice.actions
// exporta todas as actions
export default userListSlice.reducer
// exporta o próprio reducer como padrão