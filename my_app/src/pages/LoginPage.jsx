import {useNavigate} from 'react-router-dom'
const LoginPage = () => {
    const navigate=useNavigate();
    const login=()=>{
        navigate('/account')

    }
  return (
    <div>
        <h1>Login Page</h1>
        <button onClick={login}>Login</button>
    </div>
  )
}

export default LoginPage