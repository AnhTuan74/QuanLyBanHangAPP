import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Turnover from './Turnover'
import ProfitAndLoss from './ProfitAndLoss'
const Tab = createMaterialTopTabNavigator()
const MyTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Lãi lỗ' component={ProfitAndLoss} />
            <Tab.Screen name='Thu chi' component={Turnover} />
        </Tab.Navigator>
    )
}

export default MyTab

const styles = StyleSheet.create({})
