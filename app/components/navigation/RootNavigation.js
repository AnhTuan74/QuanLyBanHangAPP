import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './../auth/Login'
import Register from './../auth/Register'
import React, { useState, useEffect } from 'react'
import Home from './../home/Home'
import profile from './../home/Profile'
import AddProduct from './../home/Product/AddProduct'
import TabBarNavigation from './TabBarNavigation'
import ProductDetail from './../home/Product/ProductDetail'
import Products from './../home/Product/Products'
import AddOrders from './../home/Orders/AddOrders'
import Scan from './../scan/Scan'
import EditProduct from './../home/Product/EditProduct'
import Order from './../home/Orders/Order'
import OrderDetail from './../home/Orders/OrderDetail'
import { NavigationContainer } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import StorageManager from '../../controller/StorageManager'
import { setInfoUser } from '../../redux/userSlice'
import WareHouse from './../home/wareHouse/WareHouse'
import Customer from './../home/customer/Customer'
import AddCustomer from './../home/customer/AddCustomer'
import CustomerDetail from './../home/customer/CustomerDetail'
import ImportWarehouse from './../home/wareHouse/ImportWarehouse'

const Stack = createNativeStackNavigator()

const RootNavigation = () => {
    const dispatch = useDispatch()
    const [initialRouteName, setInitialRouteName] = useState('TabBarNavigation')
    const [initial, setInitial] = useState(true)

    const getData = async () => {
        // lấy thông tin user từ local
        await StorageManager.getData('user').then((user) => {
            if (user) {
                dispatch(setInfoUser(user)) // set thông tin user vào redux
                setInitialRouteName('TabBarNavigation') // chuyển về tabbar nếu đã đăng nhập
            } else {
                setInitialRouteName('Login') // chuyển về login nếu chưa đăng nhập
            }
        })
        if (initial) {
            setInitial(false)
        }
    }
    useEffect(() => {
        getData()
    }, [])

    if (initial) {
        return null
    }
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={initialRouteName}
            >
                <Stack.Screen name='TabBarNavigation' component={TabBarNavigation} />
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='Register' component={Register} />
                <Stack.Screen name='AddProduct' component={AddProduct} />
                <Stack.Screen name='ProductDetail' component={ProductDetail} />
                <Stack.Screen name='Products' component={Products} />
                <Stack.Screen name='AddOrders' component={AddOrders} />
                <Stack.Screen name='Scan' component={Scan} />
                <Stack.Screen name='EditProduct' component={EditProduct} />
                <Stack.Screen name='Order' component={Order} />
                <Stack.Screen name='OrderDetail' component={OrderDetail} />
                <Stack.Screen name='WareHouse' component={WareHouse} />
                <Stack.Screen name='Customer' component={Customer} />
                <Stack.Screen name='AddCustomer' component={AddCustomer} />
                <Stack.Screen name='CustomerDetail' component={CustomerDetail} />
                <Stack.Screen name='ChoiceProduct' component={ChoiceProduct} />
                <Stack.Screen name='ImportWarehouse' component={ImportWarehouse} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigation
