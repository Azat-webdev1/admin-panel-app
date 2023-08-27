import { FC, PropsWithChildren, createContext, useState } from 'react'

import { IContext, TypeUserState } from './auth-interfaces'

export const AuthContext = createContext({} as IContext)


const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const [user, setUser] = useState<TypeUserState>(null)

  return (
    <AuthContext.Provider value={{user, setUser}}>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthProvider