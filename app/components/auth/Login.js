import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const Login = ({ navigation }) => {
    const [text, onChangeText] = useState('')
    const [pass, onChangePass] = useState('')
    const [check, setCheck] = useState(true)
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Đăng nhập</Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => onChangeText(text)}
                value={text}
                placeholder='Email'
                placeholderTextColor={'#BDBDBD'}
            />

            <View style={styles.viewPasswords}>
                <TextInput
                    style={styles.inputPassword}
                    onChangeText={(pass) => onChangePass(pass)}
                    secureTextEntry={check}
                    value={pass}
                    placeholder='Password'
                    placeholderTextColor={'#BDBDBD'}
                />
                <TouchableOpacity onPress={() => setCheck(!check)}>
                    <Text style={styles.textHide}>Hiện</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    navigation.navigate('TabBarNavigation')
                }}
            >
                <Text style={styles.textButton}>Đăng nhập</Text>
            </TouchableOpacity>
            <Text style={styles.textForgotPassword}>Quên mật khẩu?</Text>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Register')
                }}
            >
                <Text style={styles.textForgotPassword}>Đăng ký</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    text: {
        color: '#000',
        fontSize: 30,
        textAlign: 'center',
        marginTop: 100,
        fontWeight: 'bold'
    },
    input: {
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
        marginTop: 167,
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
    }
})
