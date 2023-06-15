import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Home from 'routes/Home';
import Profile from 'routes/Profile';

const Navigation = () => {

    return (
        <>
            <Tabs isFitted variant='enclosed'>
                <TabList mb='1em'>
                    <Tab>Home</Tab>
                    <Tab>Profile</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Home />
                    </TabPanel>
                    <TabPanel>
                        <Profile />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    )
}

export default Navigation