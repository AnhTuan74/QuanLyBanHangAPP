import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import RootNavigation from './app/components/navigation/RootNavigation'
import { Provider } from 'react-redux'
import store from './app/redux/store'

const App = () => {
    return (
        <Provider store={store}>
            <RootNavigation />
        </Provider>
    )
}

export default App

const styles = StyleSheet.create({})
