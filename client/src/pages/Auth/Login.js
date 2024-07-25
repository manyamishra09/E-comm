import React , {useState}from 'react'
import Layout from '../../components/Layout/Layout'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import "../../styles/AuthStyles.css";
import { useAuth } from '../../context/auth'


const Login = () => {


  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [auth , setAuth] = useAuth();
 
  const navigate = useNavigate();
  const location = useLocation()

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
        const res = await axios.post('/api/v1/auth/login', { email , password});
        
        if (res && res.data.success) {
         
          setTimeout(() => {
            toast.success(res.data.message);
          }, 100); // Delay by 100ms (adjust as needed)
          setAuth({
            ...auth,
            user: res.data.user,
            token : res.data.token
            }
          )
          localStorage.setItem('auth', JSON.stringify(res.data))
          navigate(location.state||"/");
        }
        
        else {
          toast.error(res.data.message);
        }
    }    
    catch(error){
      console.log(error);
      toast.error('Something went wrong');
    }
  }
  return (
    <Layout title= 'Register now'>
    <div className="form-container" >
    <form onSubmit={handleSubmit}>
      <h4 className="title">Login</h4>
        

          <div  className="mb-3">               
            <input onChange={(e)=>setEmail(e.target.value)} value={email} type="text" className="form-control" id="exampleInputEmail"  placeholder='Email' required/>
          </div>

          <div  className="mb-3">                
            <input onChange={(e)=>setPassword(e.target.value)} value ={password} type="password" className="form-control" id="exampleInputPassword" placeholder='Password' required/>
          </div>

          <div className="mb-3">
          <button type="button" className="btn btn-link forgot-btn" onClick={()=>{navigate('/forgot-password')}}>Forgot Password?</button>
          </div>

          <button type="submit" className="btn btn-primary">Login</button>
</form>

    </div>
</Layout>
  )
}

export default Login
