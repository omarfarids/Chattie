import React, { createContext , useState , useRef, useEffect} from "react";
import { initializeApp } from "firebase/app";
import { getFirestore , collection, addDoc , serverTimestamp ,query, orderBy, limit } from "firebase/firestore";
import { useCollectionData } from 'react-firebase-hooks/firestore';





// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1u0DvN4e_J2lKrLQONtnt9izXyZJdvO4",
  authDomain: "chattie-f1f16.firebaseapp.com",
  projectId: "chattie-f1f16",
  storageBucket: "chattie-f1f16.appspot.com",
  messagingSenderId: "921154741139",
  appId: "1:921154741139:web:19f60764775d0e99a73e66",
  measurementId: "G-DBVH2DK922"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);




// send data 
const AppContext = createContext();



function AppProvider({children}){
    // state hooks 
    const [texting , setTexting] = useState('')
    const [user , setUser] = useState({
        userID:'',
        password:''
    })
    const [isSignIn,setIsSignIn] = useState(false)
    const [signup , setSignup] = useState(false)
    const [sender , setSender] = useState('')
    const [chatRoom , setChatRoom] = useState('messages')
    const [isDarkMode , setIsDarkMode] = useState(false)
    
    
    // app refs 
    const bottom = useRef();



    // messages data 
    const colRef = collection(db , chatRoom);
    const order = query(colRef, orderBy("createdAt"), limit(200));
    const [messages] = useCollectionData(order,{idField:'id'})
    


    // users data 
    const userRef = collection(db,'users');
    const [chatUser] = useCollectionData(userRef);
    

    // functions 
    const login = (e) =>{
        e.preventDefault()
        if(chatUser){
            for(let i = 0;i < chatUser.length;i++){
                if(chatUser[i].id === user.userID.toLowerCase() && chatUser[i].password === user.password){
                    setSender(chatUser[i].sender)
                    setIsSignIn(true)
                }
            }
        }
        setUser({
            userID:'',
            password:''
        })
    }

    
    const createNewUser = (e) =>{
        e.preventDefault();
        addDoc(userRef,{
            sender:sender + Math.floor((Math.random()+1)*100_000),
            id:user.userID.toLowerCase(),
            password:user.password
        })
        localStorage.setItem(user.userID,user.password);
        setSignup(false)
        setUser({
            userID:'',
            password:''
        })
    }

    const sendMessage = (e) =>{
        e.preventDefault();
        addDoc(colRef,{
            text:texting,
            createdAt:serverTimestamp(),
            sender
        })
        setTexting('')
        bottom.current.scrollIntoView({behavior: 'smooth'})
    }
    
    useEffect(()=>{
        setTimeout(()=>{
            bottom.current.scrollIntoView({behavior: 'smooth'})
        },10)
    },[isSignIn,texting])

    return <AppContext.Provider value={{
                                        texting,
                                        setTexting,
                                        user,
                                        setUser,
                                        isSignIn,
                                        setIsSignIn,
                                        login,
                                        createNewUser,
                                        signup,
                                        setSignup,
                                        messages,
                                        sendMessage,
                                        sender,
                                        setSender,
                                        setChatRoom,
                                        chatUser,
                                        bottom,
                                        isDarkMode,
                                        setIsDarkMode}}>
        {children}
    </AppContext.Provider>
}

export {AppContext,AppProvider}