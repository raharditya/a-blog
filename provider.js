import React, { useState } from 'react'

export const myState = React.createContext()

const Provider = props => {
  const [isDark, setTheme] = useState(false)

  return (
    <myState.Provider value={{
      isDark,
      changeTheme: () => setTheme(!isDark)
    }}>
      {props.children}
    </myState.Provider>
  )
}

export default ({ element }) => (
  <Provider>
    {element}
  </Provider>
)