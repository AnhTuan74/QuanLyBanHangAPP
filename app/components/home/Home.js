import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Avatar } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import Header from './components/Header'

const list = [
    {
        id: 1,
        name: 'Chờ duyệt'
    },
    {
        id: 2,
        name: 'Chờ thanh toán'
    },
    {
        id: 3,
        name: 'Chờ lấy hàng'
    },
    {
        id: 4,
        name: 'Chờ giao hàng'
    }
]
const Home = () => {
    const navigation = useNavigation()

    const infoUser = useSelector((state) => state.user.data)

    return (
        <View style={styles.container}>
            <Header />
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
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('WareHouse')
                    }}
                >
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
            </View>
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center'
                }}
            >
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
    report: {
        backgroundColor: '#fff',
        paddingVertical: 10,
        borderRadius: 5,
        marginHorizontal: 20,
        marginTop: -20
    },
    textReport: {
        color: '#000',
        fontSize: 16,
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
        paddingHorizontal: 10,
        fontSize: 16
    },
    textItemPrice: {
        color: '#3C7BF4',
        textAlign: 'center',
        fontSize: 16
    },
    order: {
        backgroundColor: '#fff',
        marginTop: 15,
        padding: 15,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    viewContent: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        justifyContent: 'space-evenly'
    },
    textOrder: {
        color: '#666666',
        fontSize: 14,
        marginVertical: 5,
        textAlign: 'center'
    },
    addProduct: {
        backgroundColor: '#3C7BF4',
        borderRadius: 20,
        marginTop: 15,
        paddingVertical: 10,
        alignSelf: 'flex-end',
        marginRight: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    textAddProduct: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingLeft: 5
    },
    handling: {
        color: '#000',
        fontSize: 16,
        marginTop: 15,
        marginLeft: 25,
        marginBottom: 10
    },
    viewHandling: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 5,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8',
        paddingHorizontal: 15,
        paddingVertical: 15
    },
    textHandling: {
        color: '#666',
        fontSize: 16,
        flex: 1
    },
    textHandling1: {
        color: '#000',
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginLeft: 10,
        marginRight: 10
    }
})
