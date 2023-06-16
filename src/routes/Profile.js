import React from "react";
import { authService } from "fbase";
import { Stack, Button } from "@chakra-ui/react";

const Profile = () => {
    const onClickLogout = () => {
        authService.signOut()
    }
    return (
            <Stack direction='row' spacing={4}>
                <Button onClick={onClickLogout} colorScheme='teal' variant='outline'>
                    로그아웃
                </Button>
            </Stack>
    )
}
export default Profile;