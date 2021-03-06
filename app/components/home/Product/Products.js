import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native'
import Header from './components/Header'
import storage from '@react-native-firebase/storage'
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import RNProgressHud from 'progress-hud'
import Search from './components/Search'

export const formatPrice = (price) => {
    return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}

const Products = ({ route }) => {
    const navigation = useNavigation()
    const [totalCount, setTotalCount] = useState(0)
    const [listProduct, setListProduct] = useState([])
    const [valueSearch, setValueSearch] = useState('')

    const getListsProduct = async () => {
        RNProgressHud.show()
        const user = await auth().currentUser
        const ref = firestore().collection(`users/${user.uid}/products`)
        const snapshot = await ref.get()
        const list = []
        setTotalCount(snapshot.size)
        snapshot.forEach((doc) => {
            list.push({
                id: doc.id,
                ...doc.data()
            })
        })
        setListProduct(list)
        RNProgressHud.dismiss()
    }

    useEffect(() => {
        getListsProduct()
    }, [])

    useEffect(() => {
        navigation.addListener('focus', () => {
            getListsProduct()
        })
    }, [])

    const findProduct = () => {
        const res = firestore()
            .collection(`users/${auth().currentUser.uid}/products`)
            .where('barcode', '==', route?.params?.barcode)
            .get()
        res.then((snapshot) => {
            if (snapshot.empty) {
                alert('Không tìm thấy sản phẩm')
            } else {
                snapshot.forEach((doc) => {
                    navigation.navigate('ProductDetail', {
                        product: {
                            id: doc.id,
                            ...doc.data()
                        }
                    })
                    return
                })
            }
        })
    }
    useEffect(() => {
        if (route?.params?.barcode) {
            findProduct()
        }
    }, [route])

    const handleOnSearch = (search) => {
        const list = listProduct.filter((item) => {
            return item.name.toLowerCase().includes(search.toLowerCase())
        })
        setListProduct(list)
    }

    return (
        <View style={styles.container}>
            <Header screen='product' />
            <Search screen='SearchProducts' />
            {listProduct.length == 0 ? (
                <View style={styles.noProducts}>
                    <Text style={styles.textNoProduct}>Chưa có sản phẩm</Text>
                    <TouchableOpacity
                        style={styles.addProduct}
                        onPress={() => {
                            navigation.navigate('AddProduct')
                        }}
                    >
                        <Icon name='plus' size={13} color='#fff' />
                        <Text style={styles.textAddProduct}>Thêm sản phẩm</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <View style={styles.listProduct}>
                    <Text style={styles.textTitle}>{totalCount} sản phẩm</Text>
                    <FlatList
                        data={listProduct}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item) => item.barcode}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={styles.itemProduct}
                                onPress={() => {
                                    navigation.navigate('ProductDetail', {
                                        product: item
                                    })
                                }}
                            >
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
                                            {formatPrice(item.priceSale)} VNĐ
                                        </Text>
                                        <Text
                                            style={{
                                                color: '#3C7BF4'
                                            }}
                                        >
                                            Tồn kho: {item.quantity}
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            )}
            {listProduct.length != 0 && (
                <View style={styles.viewButton}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            navigation.navigate('ImportWarehouse')
                        }}
                    >
                        <Text style={styles.textButton}>Nhập hàng</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    )
}

export default Products

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F2F8'
    },
    listProduct: {
        flex: 1
    },
    icon: {
        color: '#666',
        fontSize: 15
    },
    text: {
        color: '#666',
        fontSize: 16,
        fontWeight: 'bold'
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
    },
    textNoProduct: {
        color: '#666',
        fontSize: 18,
        textAlign: 'center'
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
        padding: 20,
        backgroundColor: '#fff',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8'
    },
    priceCapital: {
        paddingRight: 10,
        color: '#F44336'
    },
    viewInformation: {
        flex: 1,
        marginLeft: 10
    },
    nameProduct: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 5
    },
    viewButton: {
        flexDirection: 'row',
        paddingVertical: 10
    },
    button: {
        backgroundColor: '#3C7BF4',
        borderRadius: 10,
        paddingVertical: 14,
        paddingHorizontal: 20,
        marginHorizontal: 20,
        flex: 1,
        alignItems: 'center'
    },
    textButton: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    }
})
