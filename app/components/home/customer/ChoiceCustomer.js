import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native'
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import RNProgressHud from 'progress-hud'
const ChoiceCustomer = () => {
    const navigation = useNavigation()
    const [totalCount, setTotalCount] = useState(0)
    const [listCustomer, setListCustomer] = useState([])

    const getListCustomer = async () => {
        RNProgressHud.show()
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
        RNProgressHud.dismiss()
    }

    useEffect(() => {
        getListCustomer()
    }, [])

    useEffect(() => {
        navigation.addListener('focus', () => {
            getListCustomer()
        })
    }, [])

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
                    <Text style={styles.text}>Khách hàng</Text>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('AddCustomer')
                        }}
                    >
                        <Icon style={styles.icon} name='plus' />
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
                    <TouchableOpacity>
                        <Icon style={styles.icon1} name='barcode' />
                    </TouchableOpacity>
                </View>
            </View>
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
                                    navigation.navigate('AddOrders', {
                                        phone: item.phone
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

export default ChoiceCustomer

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
        fontSize: 16,
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
        resizeMode: 'contain'
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
    nameCustomer: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 5
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
    phoneNumber: {
        fontSize: 16,
        color: '#3C7BF4'
    },
    nameCustomer: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 5
    }
})
