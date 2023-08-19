import { TextField, Button } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import '../styles/main.css'

function FirstPage() {
  const navigate=useNavigate()
  const location=useLocation()

  useEffect(()=>{
    if (location.state!==null){
      alert(location.state.message)
      navigate(location.pathname, {})
    }
  }, [])

  const [name, setName]=useState<string>()
  const [number, setNumber]=useState<string>()
  const [email, setEmail]=useState<string>()

  const saveUserDetails=()=>{
    if (name===undefined || number===undefined || email===undefined){
      alert('Please enter every detail.')
      return
    }
    localStorage.setItem('Name', name)
    localStorage.setItem('Number', number)
    localStorage.setItem('Email', email)
    navigate('/secondPage')
  }

  return <div className='align-screen-center'>
    <div className='form'>
      <TextField 
        id="outlined-basic" 
        label="Name" type='text' 
        variant="outlined" 
        onChange={(e)=>setName(e.target.value)}
      />
      <TextField 
        id="outlined-basic" 
        label="Phone Number" 
        type='number' 
        variant="outlined" 
        onChange={(e)=>setNumber(e.target.value)}
      />
      <TextField 
        id="outlined-basic" 
        label="Email" 
        type='email' 
        variant="outlined" 
        onChange={(e)=>setEmail(e.target.value)}
      />
      <Button 
        variant="contained"
        onClick={()=>{
          saveUserDetails()
        }}  
      >
        Submit
      </Button>
    </div>
  </div> 
}

export default FirstPage
