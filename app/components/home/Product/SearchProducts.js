import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import HeaderAdd from './components/HeaderAdd'
import FormSearch from './FormSearch'
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import RNProgressHud from 'progress-hud'
import { formatPrice } from './Products'

const SearchProducts = () => {
    const [valueSearch, setValueSearch] = useState('')
    const [totalCount, setTotalCount] = useState(0)
    const [listProduct, setListProduct] = useState([])

    const getListsProduct = async () => {
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
    }

    useEffect(() => {
        getListsProduct()
    }, [])

    const handleOnSearch = (search) => {
        if (!search) {
            getListsProduct()
            return
        }
        const list = listProduct.filter((item) => {
            return item.name.toLowerCase().includes(search.toLowerCase())
        })
        setListProduct(list)
    }

    return (
        <View style={styles.container}>
            <HeaderAdd title='Tìm kiếm sản phẩm' />
            <FormSearch
                valueSearch={valueSearch}
                setValueSearch={setValueSearch}
                handleOnSearch={handleOnSearch}
            />
            {listProduct.length == 0 ? (
                <View style={styles.noProducts}>
                    <Text style={styles.textNoProduct}>Không có sản phẩm nào</Text>
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
        </View>
    )
}

export default SearchProducts

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
