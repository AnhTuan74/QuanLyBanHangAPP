import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList, Image } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome5'
import React, { useState, useEffect } from 'react'

const ImportWarehouse = () => {
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
                    padding: 15,
                    backgroundColor: '#fff',
                    borderBottomWidth: 1,
                    borderBottomColor: '#E8E8E8',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}
            >
                <Icon style={styles.icon} name='arrow-left' />
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
            <View style={styles.viewButton}>
                <TouchableOpacity style={styles.button}>
                    <Icon style={styles.iconAddProduct} name='plus' />
                    <Text style={styles.textAddProduct}>Thêm sản phẩm</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={listProduct}
                keyExtractor={(item) => item.barcode}
                renderItem={({ item }) => (
                    <View style={styles.itemProduct}>
                        <View style={styles.viewImage}>
                            <Image
                                style={styles.image}
                                source={{
                                    uri: 'https://th.bing.com/th/id/R.149244a480a45a0736cdba574ba9147e?rik=mYWnOVTopKTpCw&pid=ImgRaw&r=0'
                                }}
                            />
                        </View>
                        <View style={styles.viewInformation}>
                            <View>
                                <Text style={styles.nameProduct}>{item.name}</Text>
                                <Text style={styles.nameProduct}>{item.name}</Text>
                            </View>
                            <View style={styles.viewAmount}>
                                <Text>Tồn kho:{item.priceSale}</Text>
                                <View style={styles.amount}>
                                    <TouchableOpacity>
                                        <Icon name='minus' />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.buttonAmount}>
                                        <Text style={styles.text2}>1</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Icon name='plus' />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                )}
            />
            <View style={styles.viewFooter}>
                <View style={styles.footer}>
                    <View style={styles.viewTextFooter}>
                        <Text style={{ ...styles.textFooter, fontSize: 16, fontWeight: 'bold' }}>
                            SL:
                        </Text>
                        <Text style={styles.textFooter}>1 sản phẩm</Text>
                    </View>
                    <TouchableOpacity style={styles.buttonFooter}>
                        <Text style={styles.textButtonFooter}>Tiếp tục</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ImportWarehouse

const styles = StyleSheet.create({
    container: {
        flex: 1
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
        flex: 1,
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
    icon: {
        color: '#666',
        fontSize: 18,
        paddingRight: 20
    },
    button: {
        backgroundColor: '#3C7BF4',
        borderRadius: 20,
        marginTop: 15,
        paddingVertical: 10,
        alignSelf: 'flex-end',
        marginRight: 20,
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    viewButton: {
        padding: 15,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8'
    },
    iconAddProduct: {
        color: '#fff',
        fontSize: 18
    },
    textAddProduct: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        paddingLeft: 10
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 10
    },
    Information: {
        flex: 1
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
    viewInformation: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    amount: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 10
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
    viewFooter: {
        padding: 15,
        backgroundColor: '#fff'
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    buttonFooter: {
        backgroundColor: '#3C7BF4',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 40
    },
    textFooter: {
        color: '#666',
        fontSize: 14,

        paddingHorizontal: 10
    },
    textButtonFooter: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    }
})
