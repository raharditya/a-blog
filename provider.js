import React, { useState } from 'react'
import Cookies from 'js-cookie'

export const myState = React.createContext()

const Provider = props => {
  const [isDark, setTheme] = useState(false)

  const getTheme = () => {
    const getCookie = Cookies.get("isDark");

    if (getCookie) {
      setTheme(true)
    } else {setTheme(false)}
  };

  React.useEffect(() => {
    getTheme();
  }, [])
  

  return (
    <myState.Provider value={{
      isDark,
      changeTheme: () => {setTheme(!isDark); Cookies.set("isDark", {isDark}, {expires: 365})}
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