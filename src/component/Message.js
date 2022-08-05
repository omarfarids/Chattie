import React, { useContext } from 'react'
import { AppContext } from './context'

function Message({message}) {
  const { sender } = useContext(AppContext)

  const senderName = message.sender.split('').slice(0 , message.sender.length-6).join('');
  const messageClass = message.sender === sender? 'sent' : 'received';

  return (
    <div className={messageClass}>
      <span className='user-name'>{senderName}</span>
      <p>{message.text}</p>
    </div>
  )
}

export default Message