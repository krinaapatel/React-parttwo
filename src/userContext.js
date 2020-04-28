import React from 'react'

// step 1 create user context using the createcontext method
const UserContext = React.createContext('React Tutorial') // default context value

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export { UserProvider, UserConsumer }
export default UserContext