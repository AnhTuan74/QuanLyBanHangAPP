import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import RNProgressHud from 'progress-hud'
import { formatPrice } from './Products'
import HeaderAdd from './../Product/components/HeaderAdd'
import FormSearch from './../Product/FormSearch'
import { useNavigation } from '@react-navigation/native'

const SearchCustomer = () => {
    const navigation = useNavigation()
    const [valueSearch, setValueSearch] = useState('')
    const [totalCount, setTotalCount] = useState(0)
    const [listCustomer, setListCustomer] = useState([])

    const getListsCustomer = async () => {
        const user = await auth().currentUser
        const ref = firestore().collection(`users/${user.uid}/customers`)
        const snapshot = await ref.get()
        const list = []
        setTotalCount(snapshot.size)
        snapshot.forEach((doc) => {
            list.push({
                id: doc.id,
                ...doc.data()
            })
        })
        setListCustomer(list)
    }

    useEffect(() => {
        getListsCustomer()
    }, [])

    const handleOnSearch = (search) => {
        if (!search) {
            getListsCustomer()
            return
        }
        const list = listCustomer.filter((item) => {
            return (
                item.name.toLowerCase().includes(search.toLowerCase()) ||
                item.phone.toLowerCase().includes(search.toLowerCase())
            )
        })
        setListCustomer(list)
    }

    return (
        <View style={styles.container}>
            <HeaderAdd title='Tìm kiếm khách hàng' />
            <FormSearch
                valueSearch={valueSearch}
                setValueSearch={setValueSearch}
                handleOnSearch={handleOnSearch}
                isShowBarcode={false}
            />
            {listCustomer.length == 0 ? (
                <View style={styles.noProducts}>
                    <Text style={styles.textNoProduct}>Chưa có khách hàng</Text>
                    <TouchableOpacity
                        style={styles.addProduct}
                        onPress={() => {
                            navigation.navigate('AddCustomer')
                        }}
                    >
                        <Icon name='plus' size={13} color='#fff' />
                        <Text style={styles.textAddProduct}>Thêm khách hàng</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <View style={styles.listCustomer}>
                    <Text
                        style={{
                            fontSize: 15,
                            padding: 10
                        }}
                    >
                        {totalCount} khách hàng
                    </Text>
                    <FlatList
                        data={listCustomer}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item) => item.phone}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={styles.itemCustomer}
                                onPress={() => {
                                    navigation.navigate('CustomerDetail', {
                                        customer: item
                                    })
                                }}
                            >
                                <View style={styles.itemProduct}>
                                    <View style={styles.viewInformation}>
                                        <Text style={styles.nameCustomer}>{item.name}</Text>
                                        <View style={{}}>
                                            <Text style={styles.phoneNumber}>{item.phone}</Text>
                                        </View>
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

export default SearchCustomer

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
    },
    nameCustomer: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 5
    },
    phoneNumber: {
        fontSize: 16,
        color: '#3C7BF4'
    }
})
