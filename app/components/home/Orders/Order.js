import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native'
const Order = () => {
    const navigation = useNavigation()
    const [listProduct, setListProduct] = useState([
        {
            name: '11111',
            barcode: '1111',
            priceCapital: '1000',
            priceSale: '2000',
            description: 'Moo ta'
        },
        {
            name: '2222',
            barcode: '2222',
            priceCapital: '1000',
            priceSale: '2000',
            description: 'Moo ta'
        },
        {
            name: '3333',
            barcode: '3333',
            priceCapital: '1000',
            priceSale: '2000',
            description: 'Moo ta'
        }
    ])
    return (
        <View style={styles.container}>
            <View
                style={{
                    padding: 25,
                    backgroundColor: '#fff',
                    borderBottomWidth: 1,
                    borderBottomColor: '#E8E8E8'
                }}
            >
                <View style={styles.viewHeader}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon style={styles.icon} name='arrow-left' />
                    </TouchableOpacity>
                    <Text style={styles.text}>Đơn hàng</Text>
                    <TouchableOpacity>
                        <Icon
                            style={styles.icon}
                            name='plus'
                            onPress={() => {
                                navigation.navigate('AddOrders')
                            }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.look}>
                    <TouchableOpacity>
                        <Icon style={styles.icon1} name='search' />
                    </TouchableOpacity>
                    <TextInput
                        style={styles.text1}
                        placeholder='Tìm kiếm'
                        placeholderTextColor={'#BDBDBD'}
                    />
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Scan')
                        }}
                    >
                        <Icon style={styles.icon1} name='barcode' />
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={styles.text2}>1 đơn hàng</Text>
            {true ? (
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
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('OrderDetail')
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
                                DON00001
                            </Text>
                            <Text
                                style={{
                                    fontSize: 12,
                                    color: '#666',
                                    marginBottom: 5
                                }}
                            >
                                Khách lẻ
                            </Text>
                            <Text
                                style={{
                                    fontSize: 12,
                                    color: '#666'
                                }}
                            >
                                DON00001
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
                                20,000
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
