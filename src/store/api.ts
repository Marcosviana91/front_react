import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://127.0.0.1:8000'
        // endereço da API
    }),
    endpoints: (builder) => ({
        getCtxtUser: builder.query<getCtxtUserProps, void>({ // tipa o retorno e o envio
            query: () => ({
                url: 'graphql',
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    "query": `query { getCtxtUser{ id name email photo contactList } }`
                })
            })
        }),
        getMessageHistory: builder.query<getMessagehistoryProps, MSGProps>({ // tipa o retorno e o envio
            query: (msg: MSGProps) => ({
                url: 'graphql',
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    "query": `query { getCtxtMessagehistory( receiverId:${msg.receiverId}, lastMessage:"${msg.message}") { senderId timeStamp message } }`
                })
            })
        }),
        // getUserbyId: builder.query<getUserbyidProps, string>({ // tipa o retorno e o envio
        //     query: (user_id: string) => ({
        //         url: 'graphql',
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json",
        //             "Accept": "application/json"
        //         },
        //         body: JSON.stringify({
        //             "query": `query { getUserbyid(userId:${user_id}){ name email photo contactList } }`
        //         })
        //     })
        // }),
        getUsersbyIds: builder.query<getUsersbyidsProps, string[]>({ // tipa o retorno e o envio
            query: (users_ids: string[]) => ({
                url: 'graphql',
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    "query": `query { getUsersbyids(userIds:[${users_ids}]){ name photo } }`
                })
            })
        }),
        searchUsersbyName: builder.query<searchUsersbynameProps, string>({ // tipa o retorno e o envio
            query: (user_name: string) => ({
                url: 'graphql',
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    "query": `query { searchUsersbyname(userName:"${user_name}") { id name photo } }`
                })
            })
        }),
        // MUTATIONS
        addContact: builder.mutation<addContactProps, String>({
            query: (contact_id) => ({
                url: 'graphql',
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    "query":
                        `mutation { addContact( contactId:${contact_id}) { contactList } }`
                }
                )
            })
        }),
        removeContact: builder.mutation<removeContactProps, String>({
            query: (contact_id) => ({
                url: 'graphql',
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    "query":
                        `mutation { removeContact( contactId:${contact_id}) { contactList } }`
                }
                )
            })
        }),
        sendMessage: builder.mutation<newMessageProps, MSGProps>({
            query: (msg) => ({
                url: 'graphql',
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    "query":
                        `mutation { newMessage( receiverId:${msg.receiverId}, message:"${msg.message}"){ timeStamp senderId message } }`
                }
                )
            })
        })
    })
})

export const {
    useGetMessageHistoryQuery,
    useGetCtxtUserQuery,
    useGetUsersbyIdsQuery,
    useSendMessageMutation,
    useSearchUsersbyNameQuery,
    useAddContactMutation,
    useRemoveContactMutation
} = api
export default api