import React, { useState } from 'react'
import { createContext } from 'react';

export const contextAut = createContext()

const AuthContext = ({children}) => {

const [login, setLogin] = useState({
  email:'',
  senha:'',
})

const [botaoHabilitado, setBotaoHabilitado] = useState(true);



  return (
    <contextAut.Provider value={{login, setLogin, botaoHabilitado, setBotaoHabilitado}}>
      {children}
    </contextAut.Provider>
  )
}

export default AuthContext

