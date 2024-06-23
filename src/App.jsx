import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>This is AI resume builder web app</h1>
      <Button>Resume</Button>
    </>
  )
}
 
export default App
