import { configureStore } from '@reduxjs/toolkit'

import chatTabsReducer from './reducers/chatTabs'
import usersListReducer from './reducers/usersList'
import contactListReducer from './reducers/contactList'

import api from './api'

export const store = configureStore({
    reducer: {
        chatTabs: chatTabsReducer,
        usersList: usersListReducer,
        contactsList: contactListReducer,
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>