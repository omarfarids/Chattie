import React, {useContext } from 'react'
import { AppContext } from './context';
import styles from '../styles/MessageForm.module.css'
import { FiSend } from 'react-icons/fi';

function MessageForm() {
  

  const { texting , setTexting , sendMessage} = useContext(AppContext)


  return (
      <form className={styles.messageForm} onSubmit={sendMessage}>
        <input className={styles.inputField} type='text' placeholder='Message ...' value={texting} onChange={(element)=>setTexting(element.target.value)} />
        <button className={styles.inputButton} type='submit'><FiSend /></button>
      </form>
  )
}

export default MessageForm