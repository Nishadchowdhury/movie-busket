
import { useState } from 'react'
import './App.css'
import { MovieContext, ThemeContext } from './contexts'
import Page from './Page'

function App() {

  const [cartData, setCartData] = useState([])
  const [darkMode, setDarkMode] = useState(true)


  return (
    <>
      <MovieContext.Provider value={{ cartData, setCartData }}>
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
          <Page />
        </ThemeContext.Provider>
      </MovieContext.Provider>
    </>
  )
}

export default App
