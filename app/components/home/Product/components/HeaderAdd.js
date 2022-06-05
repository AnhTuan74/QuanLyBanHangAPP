import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

const HeaderAdd = ({ title }) => {
    const navigation = useNavigation()
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon size={30} name='close-outline' color='black' />
            </TouchableOpacity>
            <Text style={styles.text}>{title}</Text>
            <Icon size={30} name='close' color='transparent' />
        </View>
    )
}

export default HeaderAdd

const styles = StyleSheet.create({
    header: {
        padding: 20,
        height: 56,
        paddingVertical: 10,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8'
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
