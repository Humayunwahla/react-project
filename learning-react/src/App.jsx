import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Count from './components/Count'

function App() {
  const [color, setColor] = useState('olive')

  return (
    <div className=" w-screen h-screen duration-200" style={{ backgroundColor: color }}>
    <Count/>
    <div className=' fixed  flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full'>
        <button className=' outline-none px-4 py-1 text-white rounded-full shadow-lg'
        onClick={()=>setColor("red")}
          style={{ backgroundColor: "red" }}
        >Red</button>

        <button className=' outline-none px-4 py-1 text-white rounded-full shadow-lg'
        onClick={()=>setColor("green")}
          style={{ backgroundColor: "green" }}
        >green</button>


        <button className=' outline-none px-4 py-1 text-black rounded-full shadow-lg'
        onClick={()=>setColor("yellow")}
          style={{ backgroundColor: "yellow" }}
        >yellow</button>

        <button className=' outline-none px-4 py-1 text-white rounded-full shadow-lg'
        onClick={()=>setColor("black")}
          style={{ backgroundColor: "black" }}
        >black</button>

        <button className=' outline-none px-4 py-1 text-white rounded-full shadow-lg'
        onClick={()=>setColor("orange")}
          style={{ backgroundColor: "orange" }}
        >orange</button>
        <button className=' outline-none px-4 py-1 text-white rounded-full shadow-lg'
        onClick={()=>setColor("pink")}
          style={{ backgroundColor: "pink" }}
        >pink</button>
      </div>
    </div>

  </div>
  )
}

export default App
