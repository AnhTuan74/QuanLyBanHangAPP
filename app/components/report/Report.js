import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderAdd from './../home/Product/components/HeaderAdd'

const Report = () => {
    return (
        <View style={styles.container}>
            <HeaderAdd title='Báo cáo' />
            <View>
                <Text>Lãi lỗ</Text>
            </View>
        </View>
    )
}

export default Report

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
