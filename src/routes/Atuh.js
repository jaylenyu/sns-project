import React, { useState } from "react";
import { Input,Button } from "@chakra-ui/react";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from 'firebase/auth';

const Auth = () => {
const auth = getAuth();
const [userInputValue, setUserInputValue] = useState({
    email: '',
    password: ''
})
const [newAccount ,setNewAccount] = useState(true)
const onChange = (e) => {
    const {name, value} = e.target
    setUserInputValue({ ...userInputValue, [name]:value})
}

console.log(userInputValue);

const submit = async(e) => {
    try {
        let data
        if (newAccount) {
            data = await createUserWithEmailAndPassword(auth, userInputValue.email, userInputValue.password)
        } else {
            data = await signInWithEmailAndPassword(auth, userInputValue.email, userInputValue.password)
        }
        console.log(data)
        setUserInputValue({
        email: '',
        password: ''
        });
    } catch(error) {
        console.log(error);
    }
  };

return (
    <div className="Auth">
        <Input onChange={onChange} name="email" value={userInputValue.email} placeholder="email" />
        <Input onChange={onChange} name="password" value={userInputValue.password} placeholder="password" />
        <Button onClick={submit}>{newAccount ? "Create Account" : "Login"}</Button>
        <Button>Continue with Google</Button>
        <Button>Continue with Github</Button>
    </div>
    )
}

export default Auth