import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './../auth/Login'
import Register from './../auth/Register'
import React from 'react'
import Home from './../home/Home'
import profile from './../home/Profile'
import AddProduct from './../home/Product/AddProduct'

const Stack = createNativeStackNavigator()

const RootNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Register' component={Register} />
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Profile' component={profile} />
            <Stack.Screen name='AddProduct' component={AddProduct} />
        </Stack.Navigator>
    )
}

export default RootNavigation
