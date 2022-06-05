import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
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

const listBody = [
    {
        id: 1,
        name: 'Tạo đơn',
        screen: 'AddOrders',
        icon: 'cart-plus',
        color: '#000'
    },
    {
        id: 2,
        name: 'Sản phẩm',
        screen: 'Products',
        icon: 'cube',
        color: '#000'
    },
    {
        id: 3,
        name: 'Kho hàng',
        screen: 'WareHouse',
        icon: 'warehouse',
        color: '#000'
    },
    {
        id: 4,
        name: 'Đơn Hàng',
        screen: 'Order',
        icon: 'home',
        color: '#000'
    },
    {
        id: 5,
        name: 'Báo cáo',
        screen: 'AddOrders',
        icon: 'cart-plus',
        color: '#000'
    },
    {
        id: 6,
        name: 'Khách hàng',
        screen: 'Customer',
        icon: 'cube',
        color: '#000'
    },
    {
        id: 7,
        name: 'Quà tặng',
        screen: 'WareHouse',
        icon: 'warehouse',
        color: '#000'
    },
    {
        id: 8,
        name: 'Xem thêm',
        screen: 'Order',
        icon: 'home',
        color: '#000'
    }
]

const Home = () => {
    const navigation = useNavigation()
    const infoUser = useSelector((state) => state.user.data)

    return (
        <ScrollView style={styles.container}>
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
                {listBody.map((item) => (
                    <TouchableOpacity
                        key={item.id}
                        style={styles.itemContent}
                        onPress={() => {
                            navigation.navigate(item.screen)
                        }}
                    >
                        <Icon name={item.icon} size={24} color={item.color} />
                        <Text style={styles.textOrder} numberOfLines={1}>
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                ))}
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
            <View style={{}}>
                <Text style={styles.handling}>ĐƠN HÀNG CHỜ XỬ LÝ</Text>
                <View style={styles.viewList}>
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
        </ScrollView>
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
        textAlign: 'center',
        marginTop: 10
    },
    viewReport: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8',
        justifyContent: 'space-between',
        paddingVertical: 14
    },
    itemReport: {
        flex: 1
    },
    textItemReport: {
        textAlign: 'center',
        color: '#000',
        paddingHorizontal: 10
    },
    textItemPrice: {
        color: '#3C7BF4',
        textAlign: 'center',
        fontSize: 16
    },
    viewContent: {
        paddingHorizontal: 20,
        paddingRight: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 15
    },
    itemContent: {
        alignItems: 'center',
        justifyContent: 'center',
        width: (Dimensions.get('window').width - 70) / 4,
        height: (Dimensions.get('window').width - 70) / 4,
        marginRight: 10,
        marginTop: 10,
        backgroundColor: '#fff',
        borderRadius: 10
    },
    textOrder: {
        color: '#666666',
        fontSize: 14,
        marginTop: 6,
        textAlign: 'center'
    },
    addProduct: {
        backgroundColor: '#3C7BF4',
        borderRadius: 20,
        marginTop: 15,
        paddingVertical: 10,
        alignSelf: 'flex-end',
        marginRight: 20,
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
    viewList: {
        backgroundColor: '#fff',
        borderRadius: 5,
        marginHorizontal: 20,
        marginBottom: 20
    },
    viewHandling: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8',
        padding: 15
    },
    textHandling: {
        color: '#000',
        fontSize: 16,
        flex: 1
    }
})
