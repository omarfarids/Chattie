import React, { useContext } from 'react'
import { AppContext } from './context'
import styles from '../styles/Sign.module.css';
import { AiOutlineClose } from 'react-icons/ai';

function CreateUser() {
    const {user , setUser ,createNewUser, setSignup  ,sender ,setSender} = useContext(AppContext)

  return (
    <form className={styles.signForm + ' dark'} onSubmit={createNewUser}>
        <input type='text' value={sender} placeholder='username' onChange={(e)=>setSender(e.target.value)} required/>
        <input type='text' value={user.userID} placeholder='userID' onChange={(e)=>setUser({...user,userID:e.target.value})} required  minLength='8' maxLength='40'/>
        <input type='password' value={user.password} placeholder='password' onChange={(e)=>setUser({...user,password:e.target.value})} required  minLength='8' maxLength='40'/>
        <button className='btn btn-primary' type='submit'>Create New User</button>
        <button onClick={()=>setSignup(false)} className={`${styles.closeBtn} btn-danger`} ><AiOutlineClose /></button>
    </form>
  )
}

export default CreateUser