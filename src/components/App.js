import React, { useState, useEffect } from "react";
import AppRouter from "./Router";
import { authService } from "../fbase";
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const App = () => {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser)
  const [userInfo, setUserInfo] = useState(null)
  
  setInterval(() => {
    console.log(authService.currentUser);
  }, 3000)
  
  useEffect(() => {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
          if (user) setIsLoggedIn(true); setUserInfo(user);
          if (!user) setIsLoggedIn(false);
      setInit(true);
      });
  }, [])
  console.log(userInfo)
  return (
    <>
      {init ? <AppRouter isLoggedIn={isLoggedIn} /> : 'Initializing...'}
    </>
  );
}

export default App;