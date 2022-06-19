import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Linking } from 'react-native'
import React, { useState } from 'react'
import { CheckBox } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons'
import auth from '@react-native-firebase/auth'
import { useNavigation } from '@react-navigation/native'
import firestore from '@react-native-firebase/firestore'

const validateEmail = (email) => {
    var re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
}

const Register = () => {
    const navigation = useNavigation()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [check1, setCheck1] = useState(false)
    const [check, setCheck] = useState(true)

    const handleOnClickRegister = () => {
        if (!name) {
            Alert.alert('Thông báo', 'Vui lòng nhập tên')
        } else if (email == '') {
            Alert.alert('Thông báo', 'Vui lòng nhập email')
        } else if (!validateEmail(email.trim())) {
            Alert.alert('Thông báo', 'Email không hợp lệ')
        } else if (password.length < 6) {
            Alert.alert('Thông báo', 'Mật khẩu phải có ít nhất 6 ký tự')
        } else if (!check1) {
            Alert.alert('Thông báo', 'Vui lòng đồng ý điều khoản')
        } else {
            handleOnRegister()
        }
    }

    const handleOnRegister = () => {
        auth()
            .createUserWithEmailAndPassword(email.trim(), password)
            .then(() => {
                Alert.alert('Thông báo', 'Đăng ký thành công')
                handleUpdateUser()
                navigation.navigate('Login')
            })
            .catch((error) => {
                if (error.code === 'auth/email-already-in-use') {
                    Alert.alert('Thông báo', 'Email đã được sử dụng')
                }
                if (error.code === 'auth/invalid-email') {
                    Alert.alert('Thông báo', 'Email không hợp lệ')
                }
            })
    }

    const handleUpdateUser = () => {
        const user = auth().currentUser
        if (user) {
            firestore()
                .collection('users')
                .doc(user.uid)
                .set({
                    name: name,
                    uid: user.uid,
                    email: email.trim(),
                    password: password
                })
                .then(() => {
                    console.log('Đã thêm thành công')
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }
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
                placeholder='Họ và tên'
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
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingVertical: 20,
                    paddingRight: 10
                }}
            >
                <CheckBox
                    containerStyle={styles.checkBox}
                    center
                    checked={check1}
                    onPress={() => setCheck1(!check1)}
                />
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        flex: 1,
                        flexWrap: 'wrap'
                    }}
                >
                    <Text>Tôi đồng ý với các </Text>
                    <TouchableOpacity
                        onPress={() => {
                            Linking.openURL(
                                'https://pages.flycricket.io/quan-ly-ban-hang/terms.html'
                            )
                        }}
                    >
                        <Text style={{ color: 'blue' }}> Điểu Khoản sử dụng dịch vụ</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => handleOnClickRegister()}>
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
        marginHorizontal: 16,
        borderRadius: 5,
        paddingLeft: 20,
        padding: 0,
        margin: 0
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
