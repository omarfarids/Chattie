import React, { useContext } from 'react';
import Message from './Message';
import MessageForm from './MessageForm';
import { AppContext } from './context';
import styles from '../styles/Messanger.module.css'



function Messanger() {
  const{messages , bottom} = useContext(AppContext)


  return (
    <div>
      <div className={`${styles.chat} scroll`}>
        {messages.map((message,index)=>{
          return <Message   message={message} key={index}/>
        })}
        <div ref={bottom}></div>
      </div>
      <MessageForm />
    </div>
  )
}

export default Messanger