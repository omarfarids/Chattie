import React, { useContext } from 'react';
import { AppContext } from './context';
import { BsFillSunFill , BsFillMoonFill } from 'react-icons/bs';
import styles from '../styles/ChatRoom.module.css'

function ChatRoom() {
    const {setChatRoom , isDarkMode , setIsDarkMode} = useContext(AppContext)

    const turnToDarkMode = () =>{
      setIsDarkMode(!isDarkMode);
      document.body.classList.toggle('dark');
    }


  return (
    <section className={styles.chatRoomSelector}>
        <select className={`${isDarkMode ? ' dark' : ''}`} name='room' onChange={(e) => setChatRoom(e.target.value)}>
            <option value='messages'>Chitchat</option>
            <option value='english'>English club</option>
            <option value='coding'>Coding geeks</option>
            <option value='football'>Football</option>
            <option value='travel'>Travel</option>
        </select>
      <div className='dark-mode'>
        <input value={isDarkMode} onChange={turnToDarkMode} type="checkbox" className="checkbox" id="checkbox"/>
        <label htmlFor="checkbox" className="label">
          <BsFillSunFill />
          <BsFillMoonFill />
          <div className='ball'/>
        </label>
      </div>
    </section>
  )
}

export default ChatRoom