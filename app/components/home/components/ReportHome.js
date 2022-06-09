import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import storage from '@react-native-firebase/storage'
import auth from '@react-native-firebase/auth'
import RNProgressHud from 'progress-hud'
import firestore from '@react-native-firebase/firestore'
import { formatPrice } from './../Product/ChoiceProduct'

const ReportHome = () => {
    const navigation = useNavigation()
    const [todayRevenue, setTodayRevenue] = useState(0)
    const [todayOrder, setTodayOrder] = useState(0)

    const getTodayRevenue = async () => {
        // RNProgressHud.show()
        const user = await auth().currentUser
        const ref = firestore().collection(`users/${user.uid}/orders`)
        const snapshot = await ref.where('createdAt', '>=', new Date().setHours(0, 0, 0, 0)).get()
        let revenue = 0
        setTodayOrder(snapshot.size)
        snapshot.forEach((doc) => {
            revenue += doc.data().totalPrice
        })
        setTodayRevenue(revenue)
        RNProgressHud.dismiss()
    }
    useEffect(() => {
        navigation.addListener('focus', () => {
            getTodayRevenue()
        })
    }, [])

    return (
        <View style={styles.report}>
            <View style={styles.viewReport}>
                <View
                    style={{
                        ...styles.itemReport,
                        borderRightWidth: 1,
                        borderRightColor: '#E8E8E8'
                    }}
                >
                    <Text style={styles.textItemReport}>Doanh thu hôm nay </Text>
                    <Text style={styles.textItemPrice}>{formatPrice(todayRevenue)} VNĐ </Text>
                </View>
                <View style={styles.itemReport}>
                    <Text style={styles.textItemReport}>Đã giao </Text>
                    <Text style={styles.textItemPrice}>{todayOrder}</Text>
                </View>
            </View>
            <TouchableOpacity>
                <Text style={styles.textReport}>Báo cáo lãi lỗ</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ReportHome

const styles = StyleSheet.create({
    report: {
        backgroundColor: '#fff',
        paddingVertical: 10,
        borderRadius: 5,
        marginHorizontal: 20,
        marginTop: -20
    },
    textReport: {
        color: '#000',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 10
    },
    viewReport: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8',
        justifyContent: 'space-between',
        paddingVertical: 14
    },
    itemReport: {
        flex: 1
    },
    textItemReport: {
        textAlign: 'center',
        color: '#000',
        paddingHorizontal: 10
    },
    textItemPrice: {
        color: '#3C7BF4',
        textAlign: 'center',
        fontSize: 16
    }
})
