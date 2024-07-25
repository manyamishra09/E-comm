import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import UserMenu from '../../components/Layout/UserMenu'

import { useAuth } from '../../context/auth';
import axios from 'axios';
import toast from 'react-hot-toast';

const Profile = () => {
  const [auth, setAuth] = useAuth()


  const [name , setName] = useState("");
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [phone , setPhone] = useState("");
  const [address , setAddress] = useState("");
  const [answer , setAnswer] = useState("");

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
        const {data} = await axios.put('/api/v1/auth/profile', {name , email , address , phone , password });
        
        if(data?.error){
          toast.error(data?.error)
        }
        else{
          setAuth({...auth ,user : data?.updatedUser})
          let ls = localStorage.getItem("auth")
          ls = JSON.parse(ls)
          ls.user = data.updatedUser
          localStorage.setItem("auth" , JSON.stringify(ls))
          toast.success("Profile updated")
        }
          
    }    
    catch(error){
      console.log(error);
      toast.error('Something went wrong');
    }
  }

  useEffect(()=>{
    const {email , name , phone ,address ,  password } = auth .user
    setName(name)
    setEmail(email)
    setAddress(address)
    setPhone(phone)
    
  },[auth?.user])
 
  return (
    <Layout title={'Your Profile'}>
         <div className="container-fluid m-3 p-3">
        <div className="row">
        <div className="col-md-3">
            <UserMenu/>
        </div>
        <div className="col-md-9">
        <div className="form-container" >
        <form onSubmit={handleSubmit}>
          <h4 className="title">Profile</h4>
              <div className="mb-3">
                
                <input onChange={(e)=>setName(e.target.value)} value={name} type="text" className="form-control" id="exampleInputName" placeholder='Name' />
              </div>

              <div  className="mb-3">               
                <input onChange={(e)=>setEmail(e.target.value)} value={email} type="text" className="form-control" id="exampleInputEmail"  placeholder='Email'  disabled/>
              </div>

              <div  className="mb-3">                
                <input onChange={(e)=>setPassword(e.target.value)} value ={password} type="password" className="form-control" id="exampleInputPassword" placeholder='Password' />
              </div>

              <div className="mb-3">                
                <input onChange={(e)=>setPhone(e.target.value)} value= {phone} type="text" className="form-control" id="exampleInputPhone" placeholder='Mobile Number' />
              </div>

              <div className="mb-3">                
                <input onChange={(e)=>setAddress(e.target.value)} value={address} type="text" className="form-control" id="exampleInputAddress"  placeholder='Address' />
              </div>

             
             
              <button type="submit" className="btn btn-primary">UPDATE</button>
</form>

        </div>
        </div>
         </div>
        </div>

    </Layout>
  )
}

export default Profile
