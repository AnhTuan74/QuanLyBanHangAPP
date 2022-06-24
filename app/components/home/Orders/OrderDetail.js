import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import RNProgressHud from 'progress-hud'
import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import Header from './components/Header'
import { format } from 'date-fns'

export const formatPrice = (price) => {
    return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}

const OrderDetail = ({ route }) => {
    const order = route?.params?.data || {}
    console.log(order)
    const navigation = useNavigation()
    const [listProduct, setListProduct] = useState(route?.params?.data?.listProduct || [])

    const handleOnDeleteProduct = () => {
        RNProgressHud.show()
        const user = auth().currentUser
        firestore()
            .collection(`users/${user.uid}/orders`)
            .doc(order.id)
            .delete()
            .then(() => {
                deleteProductSuccess()
            })
            .catch(() => {
                RNProgressHud.dismiss()
                alert('Có lỗi xảy ra')
            })
    }

    const deleteProductSuccess = () => {
        RNProgressHud.showSuccessWithStatus('Xóa đơn hàng thành công')
        setTimeout(() => {
            RNProgressHud.dismiss()
            navigation.goBack()
        }, 1000)
    }

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.viewProducts}>
                <Text
                    style={{
                        fontSize: 15,
                        fontWeight: 'bold',
                        color: '#000',
                        marginBottom: 10
                    }}
                >
                    Sản phẩm
                </Text>

                {listProduct.length > 0 &&
                    listProduct.map((product, index) => (
                        <View
                            key={index}
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginBottom: 10
                            }}
                        >
                            <View style={styles.imageProducts}>
                                <Image
                                    style={styles.image}
                                    source={{
                                        uri: product.image
                                    }}
                                />
                            </View>
                            <View style={styles.informationProducts}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text
                                        style={{ fontSize: 16, color: '#3C7BF4', paddingRight: 5 }}
                                    >
                                        {product.name}
                                    </Text>
                                    <Text style={{ fontSize: 16, color: '#3C7BF4' }}>
                                        ({product.count})
                                    </Text>
                                </View>
                                <Text style={{ marginTop: 5, fontSize: 16, color: '#f44' }}>
                                    {formatPrice(product.priceSale)}
                                </Text>
                            </View>
                            <View style={styles.informationProducts1}>
                                <Text
                                    style={{
                                        fontSize: 16,
                                        fontWeight: 'bold',
                                        color: '#000'
                                    }}
                                >
                                    {formatPrice(product.priceSale * product.count)} VNĐ
                                </Text>
                            </View>
                        </View>
                    ))}
            </View>
            <View style={styles.customer}>
                <Text style={{ ...styles.textCustomer, fontWeight: 'bold' }}>
                    {order?.customer?.name}
                </Text>
                <Text style={{ ...styles.textCustomer, color: '#3C7BF4' }}>
                    {order?.customer?.phone}
                </Text>
            </View>
            <View style={styles.viewAbate}>
                <View style={styles.Abate}>
                    <Text style={styles.textPrice}>Tổng tiền hàng</Text>
                    <Text style={styles.textPrice}>{formatPrice(order.totalPrice)} VNĐ</Text>
                </View>
                <View style={styles.Abate}>
                    <Text style={styles.textPrice}>Phí giao hàng</Text>
                    <Text style={styles.textPrice}>0</Text>
                </View>
                <View style={styles.Abate}>
                    <Text
                        style={{
                            fontWeight: 'bold',
                            fontSize: 16
                        }}
                    >
                        Khách hàng phải trả
                    </Text>
                    <Text
                        style={{
                            fontWeight: 'bold',
                            fontSize: 16
                        }}
                    >
                        {formatPrice(order.totalPrice)} VNĐ
                    </Text>
                </View>
            </View>
            <View style={styles.viewPrice}>
                <View style={styles.Price}>
                    <Icon style={styles.iconCheck} name='checkmark-circle-outline' />
                    <Text
                        style={{
                            fontWeight: 'bold',
                            fontSize: 16,
                            marginLeft: 10
                        }}
                    >
                        Đã thanh toán
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: 10
                    }}
                >
                    <View style={styles.Price2}>
                        <Text
                            style={{
                                fontWeight: 'bold',
                                marginBottom: 5,
                                fontSize: 16
                            }}
                        >
                            Tiền mặt
                        </Text>
                        <Text>{format(order.createdAt, 'dd/MM/yyyy HH:mm')}</Text>
                    </View>
                    <View style={styles.Price3}>
                        <Text
                            style={{
                                fontWeight: 'bold',
                                marginBottom: 5,
                                fontSize: 16
                            }}
                        >
                            {formatPrice(order.totalPrice)} VNĐ
                        </Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => handleOnDeleteProduct()}>
                <Text style={styles.textButton}>Xóa đơn hàng</Text>
            </TouchableOpacity>
        </View>
    )
}

export default OrderDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F2F8'
    },
    icon: {
        color: '#666',
        fontSize: 25
    },
    text: {
        color: '#666',
        fontSize: 16,
        fontWeight: 'bold',
        paddingHorizontal: 100
    },
    image: {
        width: 60,
        height: 60,
        resizeMode: 'contain'
    },
    viewProducts: {
        padding: 20,
        backgroundColor: '#fff',
        marginTop: 10
    },
    informationProducts: {
        flex: 1,
        marginLeft: 10
    },
    viewAbate: {
        padding: 20,
        backgroundColor: '#fff',
        marginTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8'
    },
    Abate: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    iconCheck: {
        color: '#3C7BF4',
        fontSize: 25
    },
    viewPrice: {
        padding: 20,
        backgroundColor: '#fff',
        marginTop: 20
    },
    Price: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8',
        paddingBottom: 10
    },
    button: {
        backgroundColor: '#fff',
        borderRadius: 15,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        width: 153,
        borderWidth: 1,
        borderColor: '#f44',
        alignSelf: 'center'
    },
    textButton: {
        color: '#f44',
        fontSize: 16
    },
    customer: {
        padding: 20,
        backgroundColor: '#fff',
        marginTop: 20
    },
    textCustomer: {
        fontSize: 16,
        marginBottom: 5
    },
    textPrice: {
        fontSize: 16
    }
})
