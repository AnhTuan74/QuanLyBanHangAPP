import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native'
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import RNProgressHud from 'progress-hud'
import { formatPrice } from '../Product/Products'
import { format } from 'date-fns'
import Header from './../Product/components/Header'

const Order = () => {
    const navigation = useNavigation()
    const [totalCount, setTotalCount] = useState(0)
    const [listOrder, setListOrder] = useState([])

    const getListsOrder = async () => {
        RNProgressHud.show()
        const user = await auth().currentUser
        const ref = firestore().collection(`users/${user.uid}/orders`)
        const snapshot = await ref.get()
        const list = []
        setTotalCount(snapshot.size)
        snapshot.forEach((doc) => {
            list.push({
                id: doc.id,
                ...doc.data()
            })
        })
        setListOrder(list)
        RNProgressHud.dismiss()
    }

    useEffect(() => {
        getListsOrder()
    }, [])

    useEffect(() => {
        navigation.addListener('focus', () => {
            getListsOrder()
        })
    }, [])

    return (
        <View style={styles.container}>
            <Header title='Đơn hàng' screen='order' icon='add-circle-outline' />
            <Text style={styles.text2}>{totalCount} đơn hàng</Text>
            {listOrder.length == 0 ? (
                <View style={styles.noProducts}>
                    <Text style={styles.textNoProduct}>Chưa có đơn hàng</Text>
                    <TouchableOpacity
                        style={styles.addProduct}
                        onPress={() => {
                            navigation.navigate('AddOrders')
                        }}
                    >
                        <Icon name='plus' size={13} color='#fff' />
                        <Text style={styles.textAddProduct}>Tạo đơn hàng</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <FlatList
                    data={listOrder}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('OrderDetail', { data: item })
                            }}
                        >
                            <View style={styles.viewOrder}>
                                <View style={styles.textOder1}>
                                    <Text
                                        style={{
                                            fontSize: 15,
                                            fontWeight: 'bold',
                                            color: '#333',
                                            marginBottom: 5
                                        }}
                                    >
                                        {item.id}
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: 15,
                                            color: '#333',
                                            marginBottom: 5
                                        }}
                                    >
                                        {item?.createdAt &&
                                            format(item.createdAt, 'dd/MM/yyyy HH:mm')}
                                    </Text>
                                </View>
                                <View style={styles.textOder2}>
                                    <Text
                                        style={{
                                            fontSize: 15,
                                            color: '#666',
                                            marginBottom: 5
                                        }}
                                    >
                                        {formatPrice(item.totalPrice)} VNĐ
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: 12,
                                            color: '#666'
                                        }}
                                    >
                                        Hoàn thành
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            )}
        </View>
    )
}

export default Order

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F2F8'
    },
    icon: {
        color: '#666',
        fontSize: 15
    },
    text: {
        color: '#666',
        fontSize: 14,
        fontWeight: 'bold'
    },
    button: {
        flexDirection: 'row',
        backgroundColor: '#E8EBEB',
        paddingVertical: 10,
        borderRadius: 15,
        marginTop: 25,
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    viewHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    icon1: {
        color: '#666',
        fontSize: 15
    },
    text2: {
        color: '#666',
        fontSize: 14,
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    text1: {
        // borderColor: '#E8E8E8',
        // backgroundColor: '#F6F6F6',
        borderRadius: 5,
        flex: 1,
        marginHorizontal: 16,
        paddingLeft: 16,
        color: '#000'
    },
    look: {
        // flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#E8E8E8',
        backgroundColor: '#F6F6F6',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        borderRadius: 20,
        paddingHorizontal: 20,
        marginVertical: 10,
        marginTop: 15
    },
    viewOrder: {
        padding: 20,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8',
        justifyContent: 'space-between'
    },
    textOder1: {
        flex: 1
    },
    addProduct: {
        backgroundColor: '#3C7BF4',
        borderRadius: 20,
        marginTop: 15,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    textAddProduct: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingLeft: 5
    },
    noProducts: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
