import { useNavigate } from 'react-router-dom'
import '../styles/main.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Component1 from '../components/Component1'
import { Posts } from '../store/inputs'
import Component2 from '../components/Component2'

function SecondPage(){
    const navigate=useNavigate()
    const [data, setData]=useState<Posts[]>()
    
    useEffect(()=>{
        const name=localStorage.getItem('Name')
        const number=localStorage.getItem('Number')
        const email=localStorage.getItem('Email')
        if (name===null || number===null || email===null){
            console.log('yea')
            navigate('/', {state:{
                message:'Please enter the relevant details before accessing the second page.'
            }})
        }
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
            setData(response.data)
        })
    },[])

    if (data){
        return <div>
            <Component1 data={data}/>
            <Component2 />
        </div>
    }
    
    return <div className='align-screen-center loading'>
        Loading...
    </div>
}

export default SecondPage