import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    FlatList,
    Image,
    ScrollView
} from 'react-native'
import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native'

const WareHouse = () => {
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
                    <Text style={styles.text}>Kho hàng</Text>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('AddProduct')
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
            <ScrollView style={{ flex: 1 }}>
                {false ? (
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
                        <Text
                            style={{
                                fontSize: 15,
                                padding: 10
                            }}
                        >
                            3 sản phẩm
                        </Text>
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
                                        </View>
                                        <View>
                                            <Text>Tồn kho:</Text>
                                            <Text
                                                style={{
                                                    color: '#3C7BF4'
                                                }}
                                            >
                                                {item.priceSale} VNĐ
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            )}
                        />
                    </View>
                )}
            </ScrollView>
            <View style={styles.viewButton}>
                <TouchableOpacity
                    style={{ ...styles.button, backgroundColor: '#B22222' }}
                    onPress={() => {
                        navigation.navigate('ImportWarehouse')
                    }}
                >
                    <Text style={styles.textButton}>Xuất hàng</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        navigation.navigate('ImportWarehouse')
                    }}
                >
                    <Text style={styles.textButton}>Nhập hàng</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default WareHouse

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
        marginLeft: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
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
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginHorizontal: 10,
        marginTop: 20,
        flex: 1,
        alignItems: 'center'
    },
    textButton: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    }
})
