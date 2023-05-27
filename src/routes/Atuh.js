import React, { useState } from "react";
import { Input,Button } from "@chakra-ui/react";

const Auth = () => {
const [userInputValue, setUserInputValue] = useState({
    email: '',
    password: ''
})
const onChange = (e) => {
    const {name, value} = e.target
    setUserInputValue({ ...userInputValue, [name]:value})
}

console.log(userInputValue);

return (
    <div className="Auth">
        <Input onChange={onChange} name='email' placeholder="email" />
        <Input onChange={onChange} name="password" placeholder="password" />
        <Button>Login</Button>
        <Button>Create Account</Button>
        <Button>Continue with Google</Button>
        <Button>Continue with Github</Button>
    </div>
    )
}
export default Auth