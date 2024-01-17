import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [input, setinput]=useState(1);

  let temp=0;
  for(let i=0; i<=input; i++){
    temp=i+temp
  }
  return (
    <div>
      <input type="text" onChange={(e)=>{
       setinput(e.target.value);
}} placeholder={'enter number'}/>

  the sum of 1 to {input} is { temp }

  <button onClick={
    ()=>{
      setCount(count+1);
    }
  }>counter ({count})</button>
</div>
  )

   

  
   
}

export default App
