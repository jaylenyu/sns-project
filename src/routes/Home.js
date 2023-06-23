import React, { useEffect, useState } from "react";
import { Input, Button, FormControl, FormLabel, Card, CardBody, Text } from "@chakra-ui/react";
import { DBfirebase } from "fbase";
import { addDoc, collection, getDocs } from "firebase/firestore";

const Home = () => {
    const [text, setText] = useState("");
    const [messageData, setMessageData] = useState([]);
    console.log(messageData)
    const getMessageData = async () => {
        const DBMessage = await getDocs(collection(DBfirebase, "SNS"))
        DBMessage.forEach(document => {
            const textObject = {
                ...document.data(),
                id : document.id,
            }
            setMessageData((prev) => [textObject, ...prev])
        })
    }
    useEffect(() => {
        getMessageData()
    }, [])

    const onTextChange = (e) => {
        const { target: { value }} = e
        setText(value)
    }

    const onSubmitChange = async (e) => {
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(DBfirebase, "SNS"), {
                text: text,
                createdAt : Date.now()
            })
            console.log("Document written with ID: ", docRef.id);
            setText('')
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    }

    return (
    <>
        <FormControl>
            <FormLabel>What's your mind?</FormLabel>
            <Input type="text" value={text} onChange={onTextChange} placeholder="here" maxLength={30} />
            <Button onClick={onSubmitChange} type="submit" colorScheme='teal' variant='solid'>
                submit
            </Button>
        </FormControl>
        {messageData.map((text) => 
            <Card key={text.id}>
                <CardBody>
                    <Text>{text.text}</Text>
                </CardBody>
            </Card>
        )}
    </>
    )
}
export default Home;