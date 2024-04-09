declare type UserProps = {
  id: string
  name: string
  img: string
  contactList?: string[]
  authId?: string
}

declare type MSGProps = {
  senderId?: string
  receiverId?: string
  message: string
  timeStamp?: string
}

// RETORNOS DA API

declare type getCtxtUserProps = {
  data:{
    getCtxtUser: {
      id?: string | null = null
      name: string
      photo: string
      email?: string
      contactList?: string[]
      authId?: string
    }
  }
}

declare type getUsersbyidsProps = {
  data:{
    getUsersbyids: {
      name: string
      photo: string
    }[]
  }
}

declare type searchUsersbynameProps = {
  data:{
    searchUsersbyname: {
      id: string
      name: string
      photo: string
    }[]
  }
}

declare type addContactProps = {
  data:{
    addContact: {
      contactList: string[]
    }
  }
}

declare type removeContactProps = {
  data:{
    removeContact: {
      contactList: string[]
    }
  }
}

declare type newMessageProps = {
  data:{
    newMessage: MSGProps
  }
}

declare type getMessagehistoryProps = {
  data:{
    getCtxtMessagehistory: [MSGProps]
  }
}

