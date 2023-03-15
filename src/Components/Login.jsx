import React,{useState} from 'react'

const Login = () => {
  const[userFname,setUserFname]=useState('')
  const[password,setPassword]=useState('')
  return (
    
    <div className='container-app'>
      <div className='form-content mt-4'>
        <h2 className='text-light'>User Information</h2>
        <input type="text" className='form-control mb-2' onChange={(e)=>{setUserFname(e.target.value)}} value={userFname} placeholder='Email/UserName' required /> 
        <input type="password" className='form-control mb-2' onChange={(e)=>{setPassword(e.target.value)}} value={password} placeholder='Password' required />
        <button className='btn btn-primary'>Login</button>
      </div>
    </div>
  )
}


export default Login