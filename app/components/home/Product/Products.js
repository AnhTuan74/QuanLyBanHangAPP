import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
const Products = () => {
    return (
        <View style={styles.container}>
            <View
                style={{
                    padding: 35,
                    backgroundColor: '#fff',
                    borderBottomWidth: 1,
                    borderBottomColor: '#E8E8E8'
                }}
            >
                <View style={styles.viewHeader}>
                    <Icon style={styles.icon} name='arrow-left' />
                    <Text style={styles.text}>Sản phẩm</Text>
                    <Icon style={styles.icon} name='ellipsis-v' />
                </View>
                <TouchableOpacity style={styles.button}>
                    <Icon style={styles.icon1} name='search' />
                    <Text style={styles.text1}>Tên, Barcode</Text>

                    <Icon style={styles.icon1} name='barcode' />
                </TouchableOpacity>
            </View>
            <Text style={styles.text2}>0 sản phẩm</Text>
        </View>
    )
}

export default Products

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
        fontSize: 14,
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
    }
})
