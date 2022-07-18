import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { Tabs } from './tabs'

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Tabs />
        </NavigationContainer>
    )
}