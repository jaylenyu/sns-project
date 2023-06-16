import React, { useState } from "react";
import { Input, Button, Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    GithubAuthProvider
} from 'firebase/auth';
import { authService } from "fbase";

const Auth = () => {
const auth = getAuth();
const [userInputValue, setUserInputValue] = useState({
    email: '',
    password: ''
})
const [newAccount ,setNewAccount] = useState(true)
const [error, setError] = useState('')
const onChange = (e) => {
    const {name, value} = e.target
    setUserInputValue({ ...userInputValue, [name]:value})
}
const onSocialLogin = async (e) => {
    const {target : { name }} = e
    let provider
        if (name === 'Google') provider = new GoogleAuthProvider();
        if (name === 'Github') provider = new GithubAuthProvider();
    const data = await signInWithPopup(authService, provider);
    console.log(data);
}

const submit = async(e) => {
    try {
        let data
        if (newAccount) {
            data = await createUserWithEmailAndPassword(auth, userInputValue.email, userInputValue.password)
        }  
        if (!newAccount) {
            data = await signInWithEmailAndPassword(auth, userInputValue.email, userInputValue.password)
        }
        console.log(data)
        setNewAccount(false)
        setUserInputValue({
            email: '',
            password: ''
        });
    } catch(error) {
        setError(error.message);
    }
  };

return (
    <div className="Auth">
        <Input onChange={onChange} name="email" value={userInputValue.email} placeholder="email" />
        <Input onChange={onChange} name="password" value={userInputValue.password} placeholder="password" />
        {error ? <Alert status='error'>
            <AlertIcon />
            <AlertTitle>{error}</AlertTitle>
        </Alert> : <></>}
        <Button onClick={submit}>{newAccount ? "Create Account" : "Login"}</Button>
        <Button onClick={onSocialLogin} name='Google'>Continue with Google</Button>
        <Button onClick={onSocialLogin} name='Github'>Continue with Github</Button>
    </div>
    )
}

export default Auth