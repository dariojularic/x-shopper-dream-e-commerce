import './App.css'
import SharedLayout from "./layouts/shared/SharedLayout.tsx"
import { pageContext } from './PageContext.tsx'
import { useState } from 'react'

function App() {
  const [activePage, setActivePage] = useState("Home")

  return (
    <pageContext.Provider value={{activePage, setActivePage}}>
      <SharedLayout/>
    </pageContext.Provider>
  )
}

export default App
