import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    TextInput,
    ScrollView
} from 'react-native'

import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native'

const list = [
    {
        id: 1,
        name: 'Tổng số lượng',
        count: 0
    },
    {
        id: 2,
        name: 'Tổng tiền hàng',
        count: 0
    },
    {
        id: 3,
        name: 'Chiết khấu',
        count: 0
    },
    {
        id: 4,
        name: 'Phí giao hàng',
        count: 0
    }
]
const AddOrders = () => {
    const navigation = useNavigation()
    const [listProduct, setListProduct] = useState([
        {
            name: '11111',
            barcode: '1111',
            priceCapital: '1000',
            priceSale: '2000',
            description: 'Moo ta'
        }
    ])
    return (
        <View style={styles.container}>
            <View
                style={{
                    padding: 20,
                    backgroundColor: '#fff',
                    borderBottomWidth: 1,
                    borderBottomColor: '#E8E8E8'
                }}
            >
                <View style={styles.viewHeader}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon style={styles.icon} name='arrow-left' />
                    </TouchableOpacity>
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
                    <Icon style={styles.icon} name='ellipsis-v' />
                </View>
            </View>
            <ScrollView>
                {false ? (
                    <View style={styles.pickProduct}>
                        <Image
                            style={styles.image}
                            source={{
                                uri: 'https://scontent.fdad3-4.fna.fbcdn.net/v/t1.15752-9/278540589_4997073913748529_122472978450654907_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=4S0vsamRQgYAX-vNWSy&_nc_ht=scontent.fdad3-4.fna&oh=03_AVIl1J_zjkQSn6x6DFiuZupSJebHBndzUV1yKLDiN7hPEw&oe=62BA4C02'
                            }}
                        />
                        <Text style={styles.text3}>Đơn hàng của bạn chưa có sản phẩm nào!</Text>
                        <TouchableOpacity>
                            <Text style={styles.text4}>Chọn sản phẩm</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <View style={styles.listProduct}>
                        <View style={styles.textList}>
                            <Text
                                style={{
                                    fontSize: 16,
                                    fontWeight: 'bold',
                                    color: '#000',
                                    marginBottom: 10
                                }}
                            >
                                Áo Hoodie
                            </Text>
                            <Text
                                style={{
                                    color: '#666'
                                }}
                            >
                                Mã:123
                            </Text>
                            <Text>250,000</Text>
                        </View>
                        <View style={styles.viewAmount}>
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
                )}

                <View style={styles.viewInformation}>
                    <View style={styles.Information}>
                        <Icon style={styles.icon2} name='gift'></Icon>
                        <Text style={styles.text4}>Áp dụng khuyến mãi</Text>
                    </View>
                    {list.map((item, index) => (
                        <View style={styles.Information2}>
                            <Text style={styles.text5}>{item.name}</Text>
                            <Text style={styles.text5}>{item.count}</Text>
                        </View>
                    ))}
                </View>
                <View style={styles.viewInformation}>
                    <View style={styles.Information3}>
                        <Text>Khách hàng</Text>
                    </View>
                    <View style={styles.Information4}>
                        <TouchableOpacity style={styles.buttonAdd}>
                            <Icon style={styles.icon2} name='user' />

                            <Text style={styles.textUser}>Thêm khách hàng</Text>

                            <Icon style={styles.icon3} name='angle-right' />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.Information4}>
                        <TouchableOpacity style={styles.buttonAdd}>
                            <Icon style={styles.icon2} name='tag' />
                            <Text style={styles.textUser}>Giá bán lẻ</Text>
                            <Icon style={styles.icon3} name='angle-right' />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.viewInformation}>
                    <View style={styles.Information5}>
                        <TouchableOpacity style={styles.buttonAdd}>
                            <Icon style={styles.icon2} name='tag' />
                            <Text style={styles.textSell}>Chọn phương thức thanh toán</Text>
                            <Icon style={styles.icon3} name='angle-right' />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.viewInformation}>
                <View style={styles.Information6}>
                    <View style={styles.calculate}>
                        <Text>Tạm tính</Text>
                        <Text>0</Text>
                    </View>
                    <TouchableOpacity style={styles.button}>
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
    viewHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
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
    pickProduct: {
        backgroundColor: '#fff',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8'
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
        marginHorizontal: 25,
        borderRadius: 20,
        paddingHorizontal: 20
    },
    image: {
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
        backgroundColor: '#fff',
        padding: 20,
        marginVertical: 10
    },
    Information: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon2: {
        color: '#3C7BF4',
        marginRight: 10
    },
    Information2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 15
    },
    Information4: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10
    },
    textUser: {
        color: '#3C7BF4',
        flex: 1
    },
    Information5: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textSell: {
        color: '#3C7BF4',
        flex: 1
    },
    button: {
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
    buttonAdd: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    listProduct: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
        backgroundColor: '#fff'
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
    }
})
