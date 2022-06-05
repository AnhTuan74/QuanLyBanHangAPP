import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native'

const Header = () => {
    const navigation = useNavigation()

    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon size={15} name='arrow-left' color='#666' />
            </TouchableOpacity>
            <Text style={styles.text}>Sản phẩm</Text>
            <TouchableOpacity onPress={() => navigation.navigate('AddProduct')}>
                <Icon size={15} name='plus' color='#666' />
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
