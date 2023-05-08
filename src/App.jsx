import { useState } from 'react'
import Login from './login';
import Welcome from './welcome';

function App() {

  let[isLogged,setIsLogged] = useState(false);
  let[user,setUser] = useState({username:'',password:''});

  return (
    <>
     
     { isLogged ? <Welcome user={user}/> : <Login user={user} setUser={setUser}  setIsLogged={setIsLogged}/> }
    </>
  )
}

export default App
