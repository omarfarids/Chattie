import React, { useContext } from 'react';
import { AppContext } from './context';
import styles from '../styles/ChatRoom.module.css'

function ChatRoom() {
    const {setChatRoom} = useContext(AppContext)

  return (
    <section className={styles.chatRoomSelector}>
        <select name='room' onChange={(e) => setChatRoom(e.target.value)}>
            <option value='messages'>Chitchat</option>
            <option value='english'>English club</option>
            <option value='coding'>Coding geeks</option>
            <option value='football'>Football</option>
            <option value='travel'>Travel</option>
        </select>
    </section>
  )
}

export default ChatRoom