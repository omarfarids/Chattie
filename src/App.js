import Messanger from './component/Messanger';
import Signin from './component/Signin';
import { useContext } from 'react';
import { AppContext } from './component/context';
import ChatRoom from './component/ChatRoom';
import Loading from './component/Loading';
import Header from './component/Header';
import './styles/globel.css';



function App() {
  const {isSignIn,messages,chatUser} = useContext(AppContext)


  if(!messages && !chatUser){
    return <Loading />
  }

  if(!isSignIn){
    return <>
              <ChatRoom />
              <Signin />
            </>
    
  }
      
  return (
    <div className="App">
      <Header />
      <Messanger />
    </div>
  );
  
}

export default App;
