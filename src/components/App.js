import React, { useState } from "react";
import AppRouter from "./Router";
import {authService} from "../fbase"

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser)
  console.log(isLoggedIn);
  console.log(authService.currentUser);
  return (
  <AppRouter isLoggedIn={isLoggedIn} />
  );
}

export default App;