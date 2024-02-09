import { useState } from 'react';
import './App.css'
import { Button,TextField } from '@mui/material'

function App() {

  const[color,setColor]= useState('red')
  const click = (color) =>{
    setColor(color)
  }
  const[inColor,setInColor]= useState('red')
  const handleChange = (e) =>{
    setInColor(e.value)
    console.log(e.value);
  }

  return (
    <>
      <div style={{width:'100%',height:'100vh',backgroundColor:color}} className='d-flex flex-column justify-content-center align-items-center'>
        <h1 className='text-white'>Background Color Change</h1>
        <div>
        <Button className='m-4 py-2' variant="contained" onClick={()=>click('red')}>RED</Button>
        <Button className='m-4 py-2' variant="contained" onClick={()=>click('blue')}>BLUE</Button>
        <Button className='m-4 py-2' variant="contained" onClick={()=>click('green')}>GREEN</Button>
        <Button className='m-4 py-2' variant="contained" onClick={()=>click('purple')}>PURPLE</Button>
        </div>
        <div className="p-3 rounded bg-white d-flex">
          <TextField className='w-100' id="outlined-basic" label="Enter a Color" variant="outlined" onChange={e=> handleChange(e.target)}/>
          <Button className='bb ms-3' variant="contained" onClick={()=>click(inColor)}>Change Color</Button>
          </div>
      </div>
    </>
  )
}

export default App
