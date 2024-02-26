import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar/Navbar'
import Footer from './Footer'

function App() {

 let [clicks,setClicks] = useState(0); 

const changeCounter = ()=>{
 setClicks(clicks+1)

}



  return (
    <>
      <button onClick={changeCounter}> Faris {clicks} </button>



    </>
  )
}

export default App
