import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import RNProgressHud from 'progress-hud'
import Header from './../Orders/components/Header'

const CustomerDetail = ({ route }) => {
    const { customer } = route?.params || {}
    const navigation = useNavigation()

    const handleOnDeleteProduct = () => {
        RNProgressHud.show()
        const user = auth().currentUser
        firestore()
            .collection(`users/${user.uid}/customers`)
            .doc(customer.id)
            .delete()
            .then(() => {
                deleteProductSuccess()
            })
            .catch(() => {
                RNProgressHud.dismiss()
                alert('Có lỗi xảy ra')
            })
    }
    const deleteProductSuccess = () => {
        RNProgressHud.showSuccessWithStatus('Xóa khách hàng thành công')
        setTimeout(() => {
            RNProgressHud.dismiss()
            navigation.navigate('Customer')
        }, 1000)
    }
    return (
        <View style={styles.container}>
            <Header title='Chi tiết khách hàng' />
            <View style={styles.viewInformation}>
                <View style={styles.Information} pointerEvents='none'>
                    <Text style={styles.textTitle}>Tên khách hàng:</Text>
                    <TextInput
                        style={styles.textProblems}
                        // placeholder='Tên sản phẩm'
                        value={customer.name}
                        placeholderTextColor='#A9A9A9'
                    />
                    <Text style={styles.textTitle}>Số điện thoại:</Text>
                    <TextInput
                        style={styles.textProblems}
                        // placeholder='Tên sản phẩm'
                        value={customer.phone}
                        placeholderTextColor='#A9A9A9'
                    />
                    <Text style={styles.textTitle}>Email:</Text>
                    <TextInput
                        style={styles.textProblems}
                        // placeholder='Tên sản phẩm'
                        value={customer.email}
                        placeholderTextColor='#A9A9A9'
                    />
                    <Text style={styles.textTitle}>Địa chỉ</Text>
                    <TextInput
                        style={styles.textProblems}
                        placeholder='Tên sản phẩm'
                        value={customer.address}
                        placeholderTextColor='#A9A9A9'
                    />
                </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => handleOnDeleteProduct()}>
                <Text style={styles.textButton}>Xóa khách hàng</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CustomerDetail

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    icon: {
        color: '#666',
        fontSize: 25,
        marginVertical: 10
    },
    text: {
        color: '#666',
        fontSize: 20,
        fontWeight: 'bold'
    },
    viewInformation: {
        backgroundColor: '#fff',
        marginTop: 15
    },
    textInformation: {
        fontSize: 16,
        color: '#666'
    },
    Information: {
        marginBottom: 25,
        paddingVertical: 10
    },
    button: {
        backgroundColor: '#fff',
        borderRadius: 15,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        width: 153,
        borderWidth: 1,
        borderColor: '#f44',
        alignSelf: 'center'
    },
    textButton: {
        color: '#f44',
        fontSize: 16
    },
    textTitle: {
        fontSize: 18,
        color: '#000',
        paddingHorizontal: 20,
        marginTop: 10
    },
    textProblems: {
        color: '#666',
        fontSize: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8',
        paddingHorizontal: 10,
        paddingVertical: 5,
        margin: 10,
        marginTop: 6
    }
})
