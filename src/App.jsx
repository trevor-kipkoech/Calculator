import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {

  const [result, setResult] = useState("")
  const [num1, setNum1] = useState("")
  const [num2, setNum2] = useState("")
  const [operation, setOperation] = useState(null)
 

  const handleNumberOnClick = (num) => {

    if (result === "" || reset) {
      setNum1(num1 + num)
    
    } else {
      setNum2(num2 + num)

    }
  }
 

  function addNumbers() {
    setResult(num1 + num2)
  }

  function subtractNumbers() {
    setResult(num1 - num2)
  }



  function divideNumbers() {
    setResult(num1 / num2)
  }

  function multiplyNumbers() {
    setResult(num1 * num2)
  }

  return (
    <>

    <div className="calc-border">

      <div className="my-input-display">

       
       
 
    <h1> {result}</h1> 
      </div>
    <button>0</button>
    <button>1</button>
    <button>2</button>
    <button>3</button>
    <button>4</button>
    <br />
    <button>5</button>
    <button>6</button>
    <button>7</button>
    <button>8</button>
    <button>9</button>
    <br />
    <button  onClick='{addNumbers}'>+</button>
    <button onClick='{subtractNumbers}'>-</button>
    <button onClick='{multiplyNumbers}'>*</button>
    <button onClick='{divideNumbers}'>/</button>
    <button>DEL</button>
    <br />
    <button>=</button>
    </div>
      
    </>
  )
}

export default App
