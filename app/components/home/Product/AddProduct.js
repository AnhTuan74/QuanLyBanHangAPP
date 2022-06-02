import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    TouchableOpacity,
    ToastAndroid,
    Alert
} from 'react-native'
import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import firestore from '@react-native-firebase/firestore'
import Header from './components/Header'
const AddProduct = ({ route }) => {
    const navigation = useNavigation()
    const [name, setName] = useState('')
    const [barcode, setBarcode] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [priceCapital, setPriceCapital] = useState('')
    const [priceSale, setPriceSale] = useState('')

    useEffect(() => {
        setBarcode(route?.params?.barcode || '')
    }, [route])

    const handleOnSave = () => {
        const product = {
            name,
            barcode,
            priceCapital,
            priceSale,
            description
        }
        firestore()
            .collection('products')
            .where('barcode', '==', barcode)
            .get()
            .then((querySnapshot) => {
                if (querySnapshot.size > 0) {
                    Alert.alert('Thông báo', 'Sản phẩm đã tồn tại')
                } else {
                    handleAddProduct(product)
                }
            })
            .catch((error) => {
                console.log('Error getting documents: ', error)
            })
    }

    const handleAddProduct = (product) => {
        firestore()
            .collection('products')
            .doc(barcode)
            .set(product)
            .then(() => {
                ToastAndroid.show('Thêm sản phẩm thành công', ToastAndroid.SHORT)
                navigation.navigate('Home')
            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <View style={styles.container}>
            <Header title={'Thêm sản phẩm'} />
            <ScrollView>
                <View style={styles.addImage}>
                    <Icon style={styles.iconImage} name='camera-outline' />
                </View>
                <View style={styles.viewProblems}>
                    <View style={styles.problems}>
                        <TextInput
                            style={styles.textProblems}
                            placeholder='Tên sản phẩm'
                            value={name}
                            onChangeText={setName}
                            placeholderTextColor='#e5e5e5'
                        />
                        <View style={styles.barCode}>
                            <TextInput
                                style={styles.textProblems1}
                                placeholder='Mã sản phẩm'
                                value={barcode}
                                onChangeText={setBarcode}
                                placeholderTextColor='#e5e5e5'
                            />
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate('Scan', { screen: 'AddProduct' })
                                }}
                            >
                                <Icon style={styles.iconImage} name='barcode-outline' />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.ViewProblems1}>
                    <TextInput
                        style={styles.textProblems2}
                        placeholder='Giá nhập'
                        value={priceCapital}
                        onChangeText={setPriceCapital}
                        placeholderTextColor='#e5e5e5'
                    />
                    <TextInput
                        style={styles.textProblems2}
                        placeholder='Giá bán'
                        value={priceSale}
                        onChangeText={setPriceSale}
                        placeholderTextColor='#e5e5e5'
                    />
                </View>
                <View style={styles.ViewProblems1}>
                    <View style={styles.problems}>
                        <TextInput
                            style={styles.textProblems}
                            placeholder='Mô tả'
                            value={description}
                            onChangeText={setDescription}
                            placeholderTextColor='#e5e5e5'
                        />
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

export default AddProduct

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F2F8'
    },
    addImage: {
        backgroundColor: '#fff',
        paddingVertical: 20,
        borderRadius: 10,
        width: 60,
        height: 60,
        alignItems: 'center',
        marginTop: 10,
        marginHorizontal: 10
    },
    iconImage: {
        color: '#3C7BF4',
        fontSize: 18
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
        marginHorizontal: 10,
        marginRight: 50
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
