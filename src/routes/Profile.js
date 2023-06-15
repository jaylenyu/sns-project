import React from "react";
import { Button, Stack } from '@chakra-ui/react'
import { authService } from "fbase";


const Profile = () => {
    const onClickLogout = () => {
        authService.signOut()
    }
    return (
        <div>
            <Stack direction='row' spacing={4}>
                <Button onClick={onClickLogout} colorScheme='teal' variant='outline'>
                    로그아웃
                </Button>
            </Stack>
        </div>
    )
}
export default Profile;