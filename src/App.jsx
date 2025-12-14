import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import * as utils from './scripts/Util.jsx'

function App() {

  const [count, setCount] = useState(5)

  return (
    <>
      <h1>
        {utils.apiKey}
      </h1>
      <h1>
        {utils.apiKey1}
      </h1>
      <h1>
        {utils.apiKey2}
      </h1>
    </>
  )
}

export default App
