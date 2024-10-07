import React, {useState} from 'react'
 

function Count() {
    let [counter, setcounter] = useState(0)

    const add = ()=>{
        counter = counter+1;
        setcounter(counter)
    }
    const deleteValue = ()=>{
        if (counter == 0){
            alert("counter is already 0")
        }
        else{

            counter = counter-1;
            setcounter(counter)
        }
    }
  return (
    <div className='p-4 gap-3 justify-center px-4'>
      <h1 >counter: {counter}</h1>
      <button className='m-3' onClick={add}>add</button>
      <button className='m-3' onClick={deleteValue}>delete</button>
    </div>
  )
}

export default Count
