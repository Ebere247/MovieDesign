import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AllMovies from './Components/AllMovies'


function App() {
  const [count, setCount] = useState(0)

  return (
  <AllMovies />
  )
}

export default App
