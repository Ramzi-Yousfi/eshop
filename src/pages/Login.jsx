import React,{useState} from 'react'
import { Link , useNavigate } from 'react-router-dom'
import { auth } from '../provider/firebase';
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";

function Login() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    let history=useNavigate();
    const signIn=(e)=>{
        e.preventDefault()
         signInWithEmailAndPassword(auth,email,password)
        .then(auth=>{
            history('/')
        })
        .catch(err=>alert(err.message))
    }
    const register =(e)=>{
        e.preventDefault()
         createUserWithEmailAndPassword(auth,email,password)
        .then(auth=>{
            if(auth){
                history('/')
            }
        })
        .catch(err=>alert(err.message))}
  return (
    <div className="Login">
        <div className="container">
            <div className="row">
                <div className="col-md-6 login-left">
                    <h2>Welcome back</h2>
                    <p>Sign in to continue to your account</p>
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={signIn}>Sign In</button>
                    </form>
                </div>
                <div className="col-md-6 login-right">
                    <h2>New Customer</h2>
                    <p>Register with us to get access to your order history, and be able to track your orders.</p>
                    <Link to="/register" className="btn btn-primary"onClick={register}>Register</Link>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Login