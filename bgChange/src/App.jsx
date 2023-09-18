import { useState } from 'react'

import './App.css'
import Buttons from './component/Buttons'

function App() {
   const [color, setColor] = useState("red")

  return (
    <>
    <div className='w-full h-screen ' style={{backgroundColor:color}}>
    <Buttons setColor={setColor} />
    </div>
      
    </>
  )
}

export default App
