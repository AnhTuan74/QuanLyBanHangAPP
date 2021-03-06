import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Home from './../home/Home'
import Barcode from './../barcode/Barcode'
import Profile from './../home/Profile'
import Icon from 'react-native-vector-icons/Ionicons'
import Scan from './../scan/Scan'
import ProfitAndLoss from './../report/ProfitAndLoss'
import Report from './../report/Report'
import Products from '../home/Product/Products'
import Order from './../home/Orders/Order'

const Tab = createMaterialBottomTabNavigator()

const TabBarNavigation = () => {
    return (
        <Tab.Navigator
            barStyle={{ backgroundColor: '#3C7BF4', color: '#000' }}
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName
                    let focusedColor = focused ? '#fff' : '#000'
                    if (route.name === 'Home') {
                        iconName = 'home'
                    } else if (route.name === 'Report') {
                        iconName = 'receipt-outline'
                    } else if (route.name === 'Order') {
                        iconName = 'file-tray-full-outline'
                    } else {
                        iconName = 'person-circle-outline'
                    }
                    return <Icon name={iconName} size={25} color={focusedColor} />
                }
            })}
        >
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Report' component={Report} />
            <Tab.Screen name='Order' component={Order} />
            <Tab.Screen name='Profile' component={Profile} />
        </Tab.Navigator>
    )
}

export default TabBarNavigation

const styles = StyleSheet.create({})
