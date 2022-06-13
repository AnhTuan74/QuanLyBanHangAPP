import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    TextInput,
    ToastAndroid
} from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import HeaderAdd from './../Product/components/HeaderAdd'
import { useNavigation } from '@react-navigation/native'
import firestore from '@react-native-firebase/firestore'
import ActionSheet from 'react-native-actionsheet'
import ImagePicker from 'react-native-image-crop-picker'
import storage from '@react-native-firebase/storage'
import auth from '@react-native-firebase/auth'
import RNProgressHud from 'progress-hud'

const AddCustomer = ({ route }) => {
    const navigation = useNavigation()
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')

    const _refActionSheet = useRef()

    // const onShowImageActionSheet = () => {
    //     _refActionSheet.current?.show(true)
    // }
    useEffect(() => {
        setPhone(route?.params?.phone || '')
    }, [route])

    const handleOnSave = async () => {
        if (!name) {
            ToastAndroid.show('Vui lòng nhập tên khách hàng', ToastAndroid.SHORT)
            return
        }
        if (!phone) {
            ToastAndroid.show('Vui lòng nhập số điện thoại', ToastAndroid.SHORT)
            return
        }
        if (!email) {
            ToastAndroid.show('Vui lòng nhập email', ToastAndroid.SHORT)
            return
        }
        if (!address) {
            ToastAndroid.show('Vui lòng nhập địa chỉ', ToastAndroid.SHORT)
            return
        }
        RNProgressHud.show()
        // let url = await addImageToStorage(image?.path)
        const customer = {
            name,
            phone,
            email,
            address
        }
        firestore()
            .collection('customers')
            .where('phone', '==', phone)
            .get()
            .then((querySnapshot) => {
                if (querySnapshot.size > 0) {
                    Alert.alert('Thông báo', 'Khách hàng đã tồn tại')
                } else {
                    handleAddCustomer(customer)
                }
            })
            .catch((error) => {
                console.log('Error getting documents: ', error)
            })
            .finally(() => {
                RNProgressHud.dismiss()
            })
    }
    const handleAddCustomer = (customer) => {
        firestore()
            .collection('users')
            .doc(auth().currentUser.uid)
            .collection('customers')
            .doc(phone)
            .set(customer)
            .then(() => {
                ToastAndroid.show('Thêm khách hàng thành công', ToastAndroid.SHORT)
                navigation.navigate('Home')
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <View style={styles.container}>
            <HeaderAdd title={'Thêm khách hàng'} />
            <ScrollView>
                <View style={styles.viewProblems}>
                    <View style={styles.problems}>
                        <TextInput
                            style={styles.textProblems}
                            placeholder='Tên khách hàng'
                            value={name}
                            onChangeText={setName}
                            placeholderTextColor='#A9A9A9'
                        />
                        <View style={styles.barCode}>
                            <TextInput
                                style={styles.textProblems1}
                                placeholder='Số điện thoại'
                                value={phone}
                                onChangeText={setPhone}
                                keyboardType='numeric'
                                placeholderTextColor='#A9A9A9'
                            />
                        </View>
                        <View style={styles.barCode}>
                            <TextInput
                                style={styles.textProblems1}
                                placeholder='Email'
                                value={email}
                                onChangeText={setEmail}
                                placeholderTextColor='#A9A9A9'
                            />
                        </View>
                        <View style={styles.barCode}>
                            <TextInput
                                style={styles.textProblems1}
                                placeholder='Địa chỉ'
                                value={address}
                                onChangeText={setAddress}
                                placeholderTextColor='#A9A9A9'
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    handleOnSave()
                }}
            >
                <Text style={styles.textButton}>Lưu</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AddCustomer

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F2F8'
    },
    viewImage: {
        flexDirection: 'row',
        marginTop: 10
    },
    addImage: {
        backgroundColor: '#fff',
        paddingVertical: 20,
        borderRadius: 10,
        width: 60,
        height: 60,
        alignItems: 'center',

        marginHorizontal: 10
    },
    iconImage: {
        color: '#3C7BF4',
        fontSize: 20
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 10
    },
    viewProblems: {
        backgroundColor: '#fff',
        borderRadius: 5,
        marginTop: 10,
        paddingVertical: 10,
        marginHorizontal: 10
    },
    textProblems: {
        color: '#666',
        fontSize: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8',
        paddingHorizontal: 10,
        paddingVertical: 5,
        margin: 10
    },
    barCode: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8',
        marginHorizontal: 10,
        marginVertical: 5
    },
    textProblems1: {
        color: '#666',
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginVertical: 5
    },
    problems1: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textProblems2: {
        color: '#666',
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8',
        marginHorizontal: 10
    },
    ViewProblems1: {
        backgroundColor: '#fff',
        borderRadius: 5,
        marginTop: 10,
        paddingVertical: 10,
        marginHorizontal: 10
    },
    problems3: {
        flexDirection: 'row'
    },
    button: {
        backgroundColor: '#3C7BF4',
        marginHorizontal: 16,
        borderRadius: 15,
        height: 51,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
    },
    textButton: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    }
})
