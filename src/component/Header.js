import React, { useContext } from 'react'
import { AppContext } from './context'
import styles from '../styles/Header.module.css'

function Header() {
  const {setIsSignIn} = useContext(AppContext)

  return (
    <header className={styles.header}>
      <h1>Chattie</h1>
      <button className='btn btn-danger' onClick={()=>setIsSignIn(false)} >Sign out</button>
    </header>
  )
}

export default Header