import React, { useState } from 'react'
import Cookies from 'js-cookie'

export const myState = React.createContext()

const Provider = props => {
  const [isDark, setTheme] = useState()

  const getTheme = () => {
    const getCookie = Cookies.get('isDark');

    console.log(isDark);
    console.log(getCookie);

    if (getCookie === "true") {
      console.log("Theme set to true")
      setTheme(false)
    } else if (getCookie === "false") {
      console.log("theme set to false")
      setTheme(true)
    }

  };

  React.useEffect(() => {
    getTheme();
  }, [])
  

  return (
    <myState.Provider value={{
      isDark,
      changeTheme: () => {
        setTheme(!isDark);
        isDark ? Cookies.set("isDark", true, {expires: 365}) : Cookies.set("isDark", false, {expires: 365})
        console.log(isDark)
      }
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