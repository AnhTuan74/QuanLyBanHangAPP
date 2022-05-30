import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './../auth/Login'
import Register from './../auth/Register'
import React from 'react'
import Home from './../home/Home'
import profile from './../home/Profile'
import AddProduct from './../home/Product/AddProduct'
import TabBarNavigation from './TabBarNavigation'
import ProductDetail from './../home/Product/ProductDetail'
import Products from './../home/Product/Products'
import AddOrders from './../home/Orders/AddOrders'

const Stack = createNativeStackNavigator()

const RootNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName='Login'
        >
            <Stack.Screen name='TabBarNavigation' component={TabBarNavigation} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Register' component={Register} />
            <Stack.Screen name='AddProduct' component={AddProduct} />
            <Stack.Screen name='ProductDetail' component={ProductDetail} />
            <Stack.Screen name='Products' component={Products} />
            <Stack.Screen name='AddOrders' component={AddOrders} />
        </Stack.Navigator>
    )
}

export default RootNavigation
