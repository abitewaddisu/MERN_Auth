import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const SignupScreen = () => {
  const usernameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  const signupHandler = async () => {
    setIsLoading(true)
    try {
    const res = await fetch('/api/auth/signup', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: usernameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value
      })
    })
    const data = await res.json()
    setError(data.message)
    } catch (err) {
      console.log(err)
      setError(err.message || 'Something went wrong!')
    }
    setIsLoading(false)
  }
  return (
    <div className='flex flex-col justify-center space-y-4 max-w-xs mx-auto my-4'>
      <h1 className='text-center text-xl font-semibold'>Sign Up</h1>
      {error && <p className='text-red-800 text-center bg-red-100 p-2 relative'>
        {error}
        <button className='absolute right-2 top-0 py-0.5 px-2' onClick={() => setError(false)}>x</button>
      </p>}
      <div className='flex flex-col gap-1'>
        <label className='font-medium' htmlFor="username">Username</label>
        <input className='outline outline-slate-300 bg-slate-50 rounded-sm p-2' type="text" placeholder="usename" id='username' ref={usernameRef} />
      </div>
      <div className='flex flex-col gap-1'>
        <label className='font-medium' htmlFor="email">Email</label>
        <input className='outline outline-slate-300 bg-slate-50 rounded-sm p-2' type="email" placeholder="email" id='email' ref={emailRef} />
      </div>
      <div className='flex flex-col gap-1'>
        <label className='font-medium' htmlFor="password">Password</label>
        <input className='outline outline-slate-300 bg-slate-50 rounded-sm p-2'type="password" placeholder="password" id='password' ref={passwordRef} />
      </div>
      <button className='bg-blue-900 text-white rounded-md py-2' onClick={signupHandler} disabled={isLoading}>{isLoading ? 'SENDING DATA..' : 'SIGN UP'}</button>
      <button className='bg-red-900 text-white rounded-md py-2'>CONTINUE WITH GOOGLE</button>
      <p>Have an account? <Link className='text-blue-500' to='/sign-in'>Sign in</Link></p>
    </div>
  )
}

export default SignupScreen
