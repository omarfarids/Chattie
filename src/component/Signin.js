import React, { useContext} from 'react';
import { AppContext } from './context';
import CreateUser from './CreateUser';
import styles from '../styles/Sign.module.css';


function Signin() {
  const {login , user , setUser , setSignup , signup , setSender } = useContext(AppContext)
  
  if(signup){
    return <CreateUser/>
  }

  return (
    <form className={styles.signForm} onSubmit={login}>
      <h3>Login</h3>
      <p className='read-only'>For quick try use "random12" as ID & PW</p>
      <input type='text' value={user.userID} placeholder='username' onChange={(e)=>setUser({...user,userID:e.target.value})} required  minLength='8' maxLength='40'/>
      <input type='password' value={user.password} placeholder='password' onChange={(e)=>setUser({...user,password:e.target.value})} required  minLength='8' maxLength='40'/>
      <button className='btn btn-primary' type='submit'>Login</button>
      <button className='btn btn-outline-primary' onClick={()=>{setSignup(true);setUser({userID:'',password:''});setSender('')}}>Sign up</button>
    </form>
  )
}

export default Signin