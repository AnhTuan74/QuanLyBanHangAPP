import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const Barcode = () => {
    const navigation = useNavigation()
    useEffect(() => {
        navigation.addListener('focus', () => {
            navigation.navigate('Scan', { screen: 'Barcode' })
        })
    }, [])
    return <View />
}

export default Barcode

const styles = StyleSheet.create({})
