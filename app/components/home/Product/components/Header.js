import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

const Header = ({ title = 'Sản phẩm', screen, icon = 'add', dataProduct }) => {
    const navigation = useNavigation()

    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon size={20} name='arrow-back-outline' color='#666' />
            </TouchableOpacity>
            <Text style={styles.text}>{title}</Text>
            <TouchableOpacity
                onPress={() => {
                    if (screen == 'product') {
                        navigation.navigate('AddProduct')
                    } else if (screen == 'productDetail') {
                        navigation.navigate('EditProduct', { product: dataProduct })
                    } else if (screen == 'AddOrders') {
                        navigation.navigate('Scan', { screen: 'AddOrders' })
                    } else if (screen == 'ImportWarehouse') {
                        navigation.navigate('Scan', { screen: 'ImportWarehouse' })
                    } else if (screen == 'customer') {
                        navigation.navigate('AddCustomer')
                    } else if (screen == 'order') {
                        navigation.navigate('AddOrders')
                    }
                }}
            >
                <Icon size={23} name={icon} color='#666' />
            </TouchableOpacity>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        padding: 20,
        height: 56,
        paddingVertical: 10,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        fontSize: 25
    },
    text: {
        color: '#666',
        fontSize: 18,
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold'
    }
})
