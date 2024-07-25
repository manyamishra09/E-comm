import React , {useState}from 'react'
import Layout from '../../components/Layout/Layout'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import "../../styles/AuthStyles.css";


const Register = () => {

  const [name , setName] = useState("");
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [phone , setPhone] = useState("");
  const [address , setAddress] = useState("");
  const [answer , setAnswer] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
        const res = await axios.post('/api/v1/auth/register', {name , email , address , phone , password , answer});
        
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
    <Layout title= 'Register now'>
        <div className="form-container" >
        <form onSubmit={handleSubmit}>
          <h4 className="title">Register</h4>
              <div className="mb-3">
                
                <input onChange={(e)=>setName(e.target.value)} value={name} type="text" className="form-control" id="exampleInputName" placeholder='Name' required/>
              </div>

              <div  className="mb-3">               
                <input onChange={(e)=>setEmail(e.target.value)} value={email} type="text" className="form-control" id="exampleInputEmail"  placeholder='Email' required/>
              </div>

              <div  className="mb-3">                
                <input onChange={(e)=>setPassword(e.target.value)} value ={password} type="password" className="form-control" id="exampleInputPassword" placeholder='Password' required/>
              </div>

              <div className="mb-3">                
                <input onChange={(e)=>setPhone(e.target.value)} value= {phone} type="text" className="form-control" id="exampleInputPhone" placeholder='Mobile Number' required/>
              </div>

              <div className="mb-3">                
                <input onChange={(e)=>setAddress(e.target.value)} value={address} type="text" className="form-control" id="exampleInputAddress"  placeholder='Address' required/>
              </div>

              <div className="mb-3">                
                <input onChange={(e)=>setAnswer(e.target.value)} value={answer} type="text" className="form-control" id="exampleInputAddress"  placeholder='What is your birth-place name?' required/>
              </div>
             
              <button type="submit" className="btn btn-primary">Register</button>
</form>

        </div>
    </Layout>
  )
}

export default Register
