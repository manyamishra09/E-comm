import React , {useState}from 'react'
import Layout from '../../components/Layout/Layout'
import axios from 'axios'
import {  useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import "../../styles/AuthStyles.css";


const ForgotPassword = () => {

  const [email , setEmail] = useState("");
  const [newPassword , setNewPassword] = useState("");
  const [answer , setAnswer] = useState("");
 
 
  const navigate = useNavigate();


  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
        const res = await axios.post('/api/v1/auth/forgot-password', { email , newPassword , answer});
        
        if (res && res.data.success) {
         
          setTimeout(() => {
            toast.success(res.data.message);
          }, 100); // Delay by 100ms (adjust as needed)
          
          navigate("/login");
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

    <Layout title={'Forgot Password'}>
    <div className="form-container" >
    <form onSubmit={handleSubmit}>
      <h4 className="title">Reset Password</h4>
        

          <div  className="mb-3">               
            <input onChange={(e)=>setEmail(e.target.value)} value={email} type="text" className="form-control" id="exampleInputEmail"  placeholder='Email' required/>
          </div>

          <div  className="mb-3">               
            <input onChange={(e)=>setAnswer(e.target.value)} value={answer} type="text" className="form-control" id="exampleInputAnswer"  placeholder='What is yout Birth-Place?' required/>
          </div>

          <div  className="mb-3">                
            <input onChange={(e)=>setNewPassword(e.target.value)} value ={newPassword} type="password" className="form-control" id="exampleInputPassword" placeholder='Password' required/>
          </div>

          <button type="submit" className="btn btn-primary">Reset</button>
</form>

    </div>
    </Layout>

  )
}

export default ForgotPassword
