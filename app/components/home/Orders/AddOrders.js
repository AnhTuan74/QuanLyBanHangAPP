import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    TextInput,
    ScrollView
} from 'react-native'

import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native'
import Header from './../Product/components/Header'
import { formatPrice } from './../Product/Products'
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import RNProgressHud from 'progress-hud'

const AddOrders = ({ route }) => {
    const navigation = useNavigation()
    const [listProduct, setListProduct] = useState([])

    const findProduct = async () => {
        let barcodeProduct = route?.params?.barcode
        if (barcodeProduct) {
            if (listProduct.some((item) => item.barcode == barcodeProduct)) {
                RNProgressHud.showErrorWithStatus('Sản phẩm đã có trong danh sách')
                setTimeout(() => {
                    RNProgressHud.dismiss()
                }, 1000)
                return
            }
            RNProgressHud.show()
            await firestore()
                .collection(`users/${auth().currentUser.uid}/products`)
                .where('barcode', '==', barcodeProduct)
                .get()
                .then((querySnapshot) => {
                    if (querySnapshot.docs.length > 0) {
                        let product = querySnapshot.docs[0].data()
                        setListProduct([
                            ...listProduct,
                            {
                                ...product,
                                count: 1
                            }
                        ])
                    } else {
                        alert('Không tìm thấy sản phẩm')
                    }
                })
            RNProgressHud.dismiss()
        }
    }

    useEffect(() => {
        findProduct()
    }, [route])

    const totalPrice = () => {
        return listProduct.reduce((total, item) => {
            return total + Number(item.priceSale) * item.count
        }, 0)
    }

    const creatOrderSuccess = (order) => {
        RNProgressHud.showSuccessWithStatus('Tạo đơn hàng thành công')
        setTimeout(() => {
            RNProgressHud.dismiss()
            navigation.navigate('OrderDetail', { order })
        }, 1000)
    }

    const handleOnCreatOrdersProduct = () => {
        RNProgressHud.show()
        let user = auth().currentUser
        let order = {
            listProduct,
            totalPrice: totalPrice(),
            status: 'Hoàn thành',
            createdAt: new Date().getTime()
        }
        firestore()
            .collection(`users/${user.uid}/orders`)
            .doc(`DON${(Math.random() + 1).toString(36).substring(7)}`)
            .set(order)
            .then(() => {
                creatOrderSuccess(order)
            })
            .catch(() => {
                RNProgressHud.dismiss()
                alert('Có lỗi xảy ra')
            })
    }

    return (
        <View style={styles.container}>
            <Header title='Tạo đơn hàng' icon='barcode' screen='AddOrders' />
            <ScrollView>
                {listProduct.length == 0 ? (
                    <View style={styles.pickProduct}>
                        <Image
                            style={styles.imageNoProduct}
                            source={{
                                uri: 'https://scontent.fdad3-4.fna.fbcdn.net/v/t1.15752-9/278540589_4997073913748529_122472978450654907_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=4S0vsamRQgYAX-vNWSy&_nc_ht=scontent.fdad3-4.fna&oh=03_AVIl1J_zjkQSn6x6DFiuZupSJebHBndzUV1yKLDiN7hPEw&oe=62BA4C02'
                            }}
                        />
                        <Text style={styles.text3}>Đơn hàng của bạn chưa có sản phẩm nào!</Text>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('ChoiceProduct')
                            }}
                        >
                            <Text style={styles.text4}>Chọn sản phẩm</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <View style={styles.listProduct}>
                        <Text style={styles.titleListProduct}>Danh sách sản phẩm</Text>
                        {listProduct.map((item) => (
                            <View style={styles.itemProduct} key={item.barcode}>
                                <Image
                                    style={styles.image}
                                    source={{
                                        uri: item.image
                                    }}
                                />
                                <View style={styles.viewInformation}>
                                    <Text style={styles.nameProduct}>{item.name}</Text>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <Text style={styles.priceCapital}>
                                            {formatPrice(Number(item.priceSale))} VNĐ
                                        </Text>
                                    </View>
                                </View>
                                <View style={styles.viewCount}>
                                    <TouchableOpacity
                                        style={styles.btnAdd}
                                        onPress={() => {
                                            if (item.count > 1) {
                                                item.count--
                                                setListProduct([...listProduct])
                                            } else if (item.count == 1) {
                                                setListProduct(
                                                    listProduct.filter(
                                                        (i) => i.barcode !== item.barcode
                                                    )
                                                )
                                            }
                                        }}
                                    >
                                        <Icon name='minus' size={20} color='#000' />
                                    </TouchableOpacity>
                                    <Text style={styles.textCountProduct}>{item.count}</Text>
                                    <TouchableOpacity
                                        style={styles.btnAdd}
                                        onPress={() => {
                                            if (Number(item.quantity) > Number(item.count)) {
                                                item.count++
                                                setListProduct([...listProduct])
                                            }
                                        }}
                                    >
                                        <Icon name='plus' size={20} color='#000' />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))}
                    </View>
                )}
                <View style={{ ...styles.totalPrice, marginTop: 20 }}>
                    <Text style={styles.textTotalPrice}>Tổng tiền:</Text>
                    <Text style={styles.countTotalPrice}>{formatPrice(totalPrice())} VNĐ</Text>
                </View>
                <View style={styles.totalPrice}>
                    <Text style={styles.textTotalPrice}>Phí giao:</Text>
                    <Text style={styles.countTotalPrice}>0 VNĐ</Text>
                </View>
            </ScrollView>
            <View style={styles.footer}>
                <View style={{ ...styles.totalPrice, paddingHorizontal: 0 }}>
                    <Text style={styles.textTotalPrice}>Tạm tính:</Text>
                    <Text style={styles.countTotalPrice}>{formatPrice(totalPrice())} VNĐ</Text>
                </View>
                <View style={styles.Information6}>
                    <TouchableOpacity
                        style={{
                            ...styles.button,
                            backgroundColor: listProduct.length == 0 ? '#999' : '#3c7bf4'
                        }}
                        onPress={() => {
                            handleOnCreatOrdersProduct()
                        }}
                        disabled={listProduct.length == 0}
                    >
                        <Text style={styles.textButton}>Tạo đơn</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default AddOrders

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F2F8'
    },
    icon: {
        color: '#666',
        fontSize: 15,
        marginVertical: 10
    },
    text: {
        color: '#666',
        fontSize: 14,
        fontWeight: 'bold'
    },
    text2: {
        color: '#666',
        fontSize: 14,
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    pickProduct: {
        backgroundColor: '#fff',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8'
    },
    imageNoProduct: {
        width: 150,
        height: 100,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    text3: {
        color: '#666',
        fontSize: 14,
        textAlign: 'center'
    },
    text4: {
        color: '#3C7BF4',
        fontSize: 14,
        textAlign: 'center'
    },
    viewInformation: {
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        backgroundColor: '#fff',
        marginLeft: 10
    },
    Information: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    button: {
        marginTop: 10,
        backgroundColor: '#5FC1F9',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center'
    },
    textButton: {
        color: '#fff',
        fontSize: 16
    },
    calculate: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 5
    },
    listProduct: {
        paddingVertical: 10,
        backgroundColor: '#fff'
    },
    titleListProduct: {
        paddingHorizontal: 20,
        paddingBottom: 10,
        fontSize: 16,
        color: '#000'
    },
    amount: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonAmount: {
        borderWidth: 1,
        borderColor: '#E8E8E8',
        borderRadius: 10,
        width: 40,
        height: 20,
        marginHorizontal: 5,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewCount: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textCountProduct: {
        fontSize: 16,
        color: '#000',
        marginHorizontal: 8,
        fontWeight: 'bold'
    },
    totalPrice: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 10
    },
    textTotalPrice: {
        fontSize: 18,
        color: '#000',
        flex: 1,
        fontWeight: 'bold'
    },
    countTotalPrice: {
        fontSize: 14,
        color: 'red',
        fontWeight: 'bold'
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 4,
        resizeMode: 'contain'
    },
    textTitle: {
        fontSize: 15,
        padding: 10,
        paddingHorizontal: 20
    },
    itemProduct: {
        paddingHorizontal: 20,
        marginBottom: 10,
        backgroundColor: '#fff',
        flexDirection: 'row'
    },
    priceCapital: {
        paddingRight: 10,
        color: '#F44336'
    },
    nameProduct: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 5
    },
    footer: {
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingBottom: 10
    }
})
