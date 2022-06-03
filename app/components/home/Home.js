import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Avatar } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

const list = [
    {
        id: 1,
        name: 'Tổng số lượng'
    },
    {
        id: 2,
        name: 'Tổng tiền hàng'
    },
    {
        id: 3,
        name: 'Chiết khấu'
    },
    {
        id: 4,
        name: 'Phí giao hàng'
    }
]
const Home = () => {
    const navigation = useNavigation()

    const infoUser = useSelector((state) => state.user.data)
    return (
        <View style={styles.container}>
            <View
                style={{
                    padding: 30,
                    backgroundColor: '#3C7BF4',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.avatar}>
                        <Avatar
                            source={{
                                uri: 'https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg'
                            }}
                            rounded
                            onPress={() => {
                                navigation.navigate('Profile')
                            }}
                            size={40}
                        />
                    </View>
                    <View style={styles.viewHeader}>
                        <Text style={styles.text}>{infoUser.name}</Text>
                        <Text style={styles.text1}>{infoUser.phone}</Text>
                    </View>
                </View>
                <View style={styles.viewIcon}>
                    <Icon name='comment' size={20} color='#fff' style={{ marginHorizontal: 10 }} />
                    <Icon name='bell' size={20} color='#fff' />
                </View>
            </View>
            <View style={styles.report}>
                <View style={styles.viewReport}>
                    <View
                        style={{
                            ...styles.itemReport,
                            borderRightWidth: 1,
                            borderRightColor: '#E8E8E8'
                        }}
                    >
                        <Text style={styles.textItemReport}>Doanh thu hôm nay </Text>
                        <Text style={styles.textItemPrice}>0đ </Text>
                    </View>
                    <View style={styles.itemReport}>
                        <Text style={styles.textItemReport}>Đã giao </Text>
                        <Text style={styles.textItemPrice}>0 </Text>
                    </View>
                </View>
                <TouchableOpacity>
                    <Text style={styles.textReport}>Báo cáo lãi lỗ</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.viewContent}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('AddOrders')
                    }}
                >
                    <View style={styles.order}>
                        <Icon name='cart-plus' size={25} color='#3C7BF4' />
                        <Text style={styles.textOrder}>Tạo đơn</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Products')
                    }}
                >
                    <View style={styles.order}>
                        <Icon name='cube' size={25} color='#C92424' />
                        <Text style={styles.textOrder}>Sản phẩm</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.order}>
                        <Icon name='warehouse' size={25} color='#23874B' />
                        <Text style={styles.textOrder}>Kho hàng</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Order')
                    }}
                >
                    <View style={styles.order}>
                        <Icon name='home' size={25} color='#C92424' />
                        <Text style={styles.textOrder}>Đơn hàng</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.viewContent}>
                <TouchableOpacity>
                    <View style={styles.order}>
                        <Icon name='cart-plus' size={25} color='#3C7BF4' />
                        <Text style={styles.textOrder}>Báo cáo</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.order}>
                        <Icon name='cube' size={25} color='#C92424' />
                        <Text style={styles.textOrder}>Khách hàng</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.order}>
                        <Icon name='warehouse' size={25} color='#C92424' />
                        <Text style={styles.textOrder}>Quà tặng</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.order}>
                        <Icon name='home' size={25} color='#C92424' />
                        <Text style={styles.textOrder}>Xem thêm</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity
                    style={styles.addProduct}
                    onPress={() => {
                        navigation.navigate('AddProduct')
                    }}
                >
                    <Icon name='plus' size={13} color='#fff' />
                    <Text style={styles.textAddProduct}>Thêm sản phẩm</Text>
                </TouchableOpacity>
                <Text style={styles.handling}>ĐƠN HÀNG CHỜ XỬ LÝ</Text>
                {list.map((item, index) => (
                    <TouchableOpacity key={index}>
                        <View style={styles.viewHandling}>
                            <Text style={styles.textHandling}>{item.name}</Text>

                            <Icon style={styles.iconHandling} name='angle-right' size={15} />
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F2F8'
    },
    text: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold'
    },
    text1: {
        color: '#fff',
        fontSize: 12
    },
    viewHeader: {
        marginHorizontal: 10
    },
    viewIcon: {
        flexDirection: 'row'
    },
    report: {
        backgroundColor: '#fff',
        paddingVertical: 10,
        borderRadius: 5,
        marginHorizontal: 20,
        marginTop: -20
    },
    textReport: {
        color: '#000',
        fontSize: 14,
        marginLeft: 10,
        textAlign: 'center',
        marginVertical: 10
    },

    viewReport: {
        flexDirection: 'row',
        paddingHorizontal: 35,
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8',
        justifyContent: 'space-between',
        paddingVertical: 14
    },
    textItemReport: {
        color: '#666666',
        paddingHorizontal: 10
    },
    textItemPrice: {
        color: '#3C7BF4',
        textAlign: 'center'
    },
    order: {
        backgroundColor: '#fff',
        borderRadius: 5,
        marginTop: 15,
        paddingVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        height: 70,
        borderRadius: 10
    },
    viewContent: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        justifyContent: 'space-evenly'
    },
    textOrder: {
        color: '#666666',
        fontSize: 12,
        marginVertical: 5,
        textAlign: 'center'
    },
    addProduct: {
        backgroundColor: '#3C7BF4',
        borderRadius: 20,
        marginTop: 15,
        paddingVertical: 10,
        marginLeft: 200,
        marginRight: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent: 'space-evenly'
    },
    textAddProduct: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    handling: {
        color: '#000',
        fontSize: 14,
        marginTop: 15,
        marginLeft: 25,
        marginBottom: 10
    },
    viewHandling: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 5,
        paddingVertical: 5,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8',
        paddingHorizontal: 10,
        paddingVertical: 13
    },
    textHandling: {
        color: '#000',
        fontSize: 14,
        flex: 1
    },
    textHandling1: {
        color: '#000',
        fontSize: 14,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginLeft: 10,
        marginRight: 10
    }
})
