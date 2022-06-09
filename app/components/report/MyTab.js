import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Report from './Report'
import Turnover from './Turnover'
import HeaderAdd from './../home/Product/components/HeaderAdd'
const Tab = createMaterialTopTabNavigator()
const MyTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Lãi lỗ' component={Report} />
            <Tab.Screen name='Thu chi' component={Turnover} />
        </Tab.Navigator>
    )
}

export default MyTab

const styles = StyleSheet.create({})
