import {useLocation} from 'react-router-dom';
const RegisterPage = () => {
    const location=useLocation()
    console.log(location);
  return (
    <div>RegisterPage</div>
  )
}

export default RegisterPage