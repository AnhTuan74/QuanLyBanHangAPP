import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import RNProgressHud from 'progress-hud'
import { formatPrice } from './../home/Product/Products'

const list = [
    {
        id: 1,
        name: 'Hôm nay',
        type: 'today'
    },
    {
        id: 2,
        name: 'Hôm qua',
        type: 'yesterday'
    },
    {
        id: 3,
        name: 'Tháng này',
        type: 'thisMonth'
    },
    {
        id: 4,
        name: 'Tháng trước',
        type: 'lastMonth'
    }
]
const ProfitAndLoss = () => {
    const [report, setReport] = useState({
        sell: 0,
        cost: 0
    })

    const [selected, setSelected] = useState(list[0])

    const getCC = async () => {
        const user = auth().currentUser
        let ref = firestore().collection(`users/${user.uid}/orders`)
        if (selected.type === 'today') {
            var snapshot = await ref.where('createdAt', '>=', new Date().setHours(0, 0, 0, 0)).get()
        } else if (selected.type === 'yesterday') {
            var snapshot = await ref
                .where('createdAt', '>=', new Date().setHours(0, 0, 0, 0) - 24 * 60 * 60 * 1000)
                .where('createdAt', '<', new Date().setHours(0, 0, 0, 0))
                .get()
        } else if (selected.type === 'thisMonth') {
            console.log('thisMonth')
            var snapshot = await ref
                .where(
                    'createdAt',
                    '>=',
                    new Date().setHours(0, 0, 0, 0) - 30 * 24 * 60 * 60 * 1000
                )
                .get()
        } else if (selected.type === 'lastMonth') {
            var snapshot = await ref
                .where(
                    'createdAt',
                    '>=',
                    new Date().setHours(0, 0, 0, 0) -
                        30 * 24 * 60 * 60 * 1000 -
                        30 * 24 * 60 * 60 * 1000
                )
                .where('createdAt', '<', new Date().setHours(0, 0, 0, 0) - 30 * 24 * 60 * 60 * 1000)
                .get()
        } else {
            var snapshot = await ref.get()
        }
        let sell = 0,
            cost = 0
        snapshot.forEach((doc) => {
            cost += doc.data().totalCost
            sell += doc.data().totalPrice
        })
        setReport({
            cost,
            sell
        })
    }
    useEffect(() => {
        getCC()
    }, [selected])
    return (
        <View style={styles.container}>
            <View style={styles.viewButtonDate}>
                <FlatList
                    data={list}
                    horizontal
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={{
                                ...styles.buttonDate,
                                backgroundColor: selected.type == item.type ? 'blue' : '#fff'
                            }}
                            onPress={() => {
                                setSelected(item)
                            }}
                        >
                            <Text style={styles.textButtonDate}>{item.name}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
            {false ? (
                <View style={styles.viewImage}>
                    <Image
                        style={styles.imageNotFound}
                        source={{
                            uri: 'https://scontent.fdad3-6.fna.fbcdn.net/v/t1.15752-9/286177883_527827242147574_2296993902112961711_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=D9knBXbAQ-8AX-xA6dP&_nc_ht=scontent.fdad3-6.fna&oh=03_AVJ2-MpzmfpQ7nJJniYc8SU-wqWxFSwJiTSYt5B7obfwpw&oe=62C7AF23'
                        }}
                    />
                    <Text style={styles.textImage}>
                        Bạn chưa có dữ liệu bán hàng nào được ghi lại
                    </Text>
                    <TouchableOpacity style={styles.buttonImage}>
                        <Text style={styles.textButtonImage}>Tạo đơn hàng</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <View style={styles.viewReport}>
                    <View style={styles.profit}>
                        <Text style={styles.textProfit}>Lợi nhuận</Text>
                        <Text style={{ ...styles.textProfit, fontSize: 30, color: '#3C7BF4' }}>
                            {formatPrice(report.sell - report.cost)} VNĐ
                        </Text>
                    </View>
                    <View style={styles.reportDetail}>
                        <Text style={styles.textReportDetail}>Chi tiết báo cáo</Text>
                        <View style={styles.turnover}>
                            <Text style={styles.textTurnover}>Doanh thu</Text>
                            <Text style={{ ...styles.textTurnover, color: '#3C7BF4' }}>
                                {formatPrice(report.sell)} VNĐ
                            </Text>
                        </View>
                        <View style={styles.turnover}>
                            <Text style={styles.textTurnover}>Giá vốn</Text>
                            <Text style={{ ...styles.textTurnover, color: '#DC143C' }}>
                                {formatPrice(report.cost)} VNĐ
                            </Text>
                        </View>
                    </View>
                </View>
            )}
        </View>
    )
}

export default ProfitAndLoss

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    viewButtonDate: {
        flexDirection: 'row',
        marginTop: 10
    },
    buttonDate: {
        backgroundColor: '#fff',
        borderRadius: 5,
        width: (Dimensions.get('window').width - 50) / 4,
        height: 40,
        paddingVertical: 5,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E8E8E8'
    },
    imageNotFound: {
        width: 250,
        height: 200,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 20
    },
    textImage: {
        fontSize: 16,
        color: '#666',
        alignSelf: 'center'
    },
    buttonImage: {
        backgroundColor: '#3C7BF4',
        borderRadius: 10,
        marginTop: 15,
        paddingVertical: 10,
        alignSelf: 'center',
        alignItems: 'center',
        paddingHorizontal: 25
    },
    textButtonImage: {
        color: '#fff',
        fontSize: 16
    },
    profit: {
        padding: 20,
        backgroundColor: '#fff',
        marginTop: 10,
        marginHorizontal: 15,
        borderRadius: 5
    },
    textProfit: {
        fontSize: 16,
        color: '#666',
        alignSelf: 'center',
        marginBottom: 10
    },
    turnover: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        backgroundColor: '#F0F0F0',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    reportDetail: {
        padding: 20,
        backgroundColor: '#fff',
        marginTop: 10,
        marginHorizontal: 15,
        borderRadius: 5
    },
    textTurnover: {
        fontSize: 16
    },
    textReportDetail: {
        fontSize: 16,
        color: '#000',
        marginBottom: 10
    }
})
