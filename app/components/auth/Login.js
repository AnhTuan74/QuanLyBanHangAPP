import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import auth from '@react-native-firebase/auth'
import { useNavigation } from '@react-navigation/native'

const validateEmail = (email) => {
    var re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
}

const Login = () => {
    const navigation = useNavigation()
    const [text, onChangeText] = useState('tuan@gmail.com')
    const [pass, onChangePass] = useState('123123')
    const [check, setCheck] = useState(true)

    const handleOnClickLogin = () => {
        if (!text) {
            Alert.alert('Thông báo', 'Vui lòng nhập email')
        } else if (!validateEmail(text.trim())) {
            Alert.alert('Thông báo', 'Email không hợp lệ')
        } else if (pass.length < 6) {
            Alert.alert('Thông báo', 'Mật khẩu phải có ít nhất 6 ký tự')
        } else {
            handleOnLogin()
        }
    }

    const handleOnLogin = () => {
        auth()
            .signInWithEmailAndPassword(text.trim(), pass)
            .then(() => {
                Alert.alert('Thông báo', 'Đăng nhập thành công', [
                    {
                        text: 'OK',
                        onPress: () => {
                            navigation.reset({
                                index: 0,
                                routes: [{ name: 'TabBarNavigation' }]
                            })
                        }
                    }
                ])
            })
            .catch((error) => {
                if (error.code === 'auth/user-not-found') {
                    Alert.alert('Thông báo', 'Email không tồn tại')
                }
                if (error.code === 'auth/wrong-password') {
                    Alert.alert('Thông báo', 'Mật khẩu không đúng')
                }
            })
    }
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
                    handleOnClickLogin()
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
