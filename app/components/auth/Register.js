import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { CheckBox } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons'

const Register = ({ navigation }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [check1, setCheck1] = useState(false)
    const [check, setCheck] = useState(true)
    return (
        <View style={styles.container}>
            <View style={styles.viewText}>
                <Text style={styles.text}>Đăng ký</Text>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Login')
                    }}
                >
                    <Text style={styles.text1}>Đăng nhập</Text>
                </TouchableOpacity>
            </View>
            <TextInput
                style={styles.inputName}
                onChangeText={setName}
                value={name}
                placeholder='Tên đăng nhập'
                placeholderTextColor={'#BDBDBD'}
            />
            <TextInput
                style={styles.inputText}
                onChangeText={setEmail}
                value={email}
                placeholder='Email'
                placeholderTextColor={'#BDBDBD'}
            />

            <View style={styles.viewPasswords}>
                <TextInput
                    style={styles.inputPassword}
                    onChangeText={setPassword}
                    secureTextEntry={check}
                    value={password}
                    placeholder='Password'
                    placeholderTextColor={'#BDBDBD'}
                />
                <TouchableOpacity onPress={() => setCheck(!check)}>
                    <Text style={styles.textHide}>Hiện</Text>
                </TouchableOpacity>
            </View>
            <CheckBox
                containerStyle={styles.checkBox}
                center
                title='Tôi đồng ý với các điều khoản sử dụng dịch vụ'
                checked={check1}
                onPress={() => setCheck1(!check1)}
            />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>Đăng ký</Text>
            </TouchableOpacity>
            <Text style={styles.textForgotPassword}>Quên mật khẩu?</Text>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    text: {
        color: '#000',
        fontSize: 30,
        fontWeight: 'bold'
    },
    inputName: {
        borderWidth: 1,
        borderColor: '#E8E8E8',
        backgroundColor: '#F6F6F6',
        marginTop: 32,
        borderRadius: 5,
        height: 50,
        marginHorizontal: 16,
        paddingLeft: 16,
        color: '#000'
    },
    textHide: {
        color: '#3C7BF4',
        paddingRight: 15
    },
    inputPassword: {
        flex: 1,
        backgroundColor: '#F6F6F6',
        borderRadius: 5,
        height: 50,
        paddingLeft: 16,
        color: '#000'
    },
    viewPasswords: {
        borderWidth: 1,
        borderColor: '#E8E8E8',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: '#F6F6F6',
        marginHorizontal: 16,
        borderRadius: 5
    },
    button: {
        backgroundColor: '#3C7BF4',
        marginTop: 100,
        marginHorizontal: 16,
        borderRadius: 100,
        height: 51,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButton: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },
    textForgotPassword: {
        color: '#3C7BF4',
        fontSize: 16,
        marginTop: 16,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    inputText: {
        borderWidth: 1,
        borderColor: '#E8E8E8',
        backgroundColor: '#F6F6F6',
        marginTop: 20,
        borderRadius: 5,
        height: 50,
        marginHorizontal: 16,
        paddingLeft: 16,
        color: '#000'
    },
    checkBox: {
        borderWidth: 0,
        backgroundColor: '#fff',
        marginTop: 20,
        marginHorizontal: 16,
        borderRadius: 5,
        paddingLeft: 20
    },
    text1: {
        color: '#3C7BF4',
        fontSize: 16,
        marginTop: 16,
        fontWeight: 'bold'
    },
    viewText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 100,
        marginHorizontal: 16,
        alignItems: 'center'
    }
})
