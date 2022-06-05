import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    TouchableOpacity,
    ToastAndroid,
    Alert,
    LogBox,
    Image
} from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import firestore from '@react-native-firebase/firestore'
import HeaderAdd from './components/HeaderAdd'
import ActionSheet from 'react-native-actionsheet'
import ImagePicker from 'react-native-image-crop-picker'
import storage from '@react-native-firebase/storage'
import auth from '@react-native-firebase/auth'
import RNProgressHud from 'progress-hud'

LogBox.ignoreLogs(['Animated: `useNativeDriver`', 'componentWillReceiveProps'])

const EditProduct = ({ route }) => {
    const product = route?.params?.product || {}
    const navigation = useNavigation()
    const [name, setName] = useState(product.name)
    const [barcode, setBarcode] = useState(product.barcode)
    const [description, setDescription] = useState(product.description)
    const [image, setImage] = useState({
        path: product.image
    })
    const [priceCapital, setPriceCapital] = useState(product.priceCapital)
    const [priceSale, setPriceSale] = useState(product.priceSale)

    const _refActionSheet = useRef()

    const onShowImageActionSheet = () => {
        _refActionSheet.current?.show(true)
    }

    const handleOnSave = async () => {
        if (!name) {
            ToastAndroid.show('Vui lòng nhập tên sản phẩm', ToastAndroid.SHORT)
            return
        }
        if (!barcode) {
            ToastAndroid.show('Vui lòng nhập mã sản phẩm', ToastAndroid.SHORT)
            return
        }
        if (!description) {
            ToastAndroid.show('Vui lòng nhập mô tả sản phẩm', ToastAndroid.SHORT)
            return
        }
        if (!priceCapital) {
            ToastAndroid.show('Vui lòng nhập giá nhập', ToastAndroid.SHORT)
            return
        }
        if (!priceSale) {
            ToastAndroid.show('Vui lòng nhập giá bán', ToastAndroid.SHORT)
            return
        }
        if (!image) {
            ToastAndroid.show('Vui lòng chọn ảnh sản phẩm', ToastAndroid.SHORT)
            return
        }
        RNProgressHud.show()
        if (!image.path.includes('firebasestorage')) {
            var url = await addImageToStorage(image?.path)
        } else {
            var url = image.path
        }
        const product = {
            name,
            barcode,
            priceCapital,
            priceSale,
            description,
            image: url
        }
        handleOnUpdateProduct(product)
    }

    const addImageToStorage = async (uri) => {
        const imageName = `${Date.now()}`
        const imageRef = storage().ref(`images/${imageName}`)
        await imageRef.putFile(uri)
        let url = await storage().ref(`images/${imageName}`).getDownloadURL()
        return url
    }

    const handleOnUpdateProduct = (product) => {
        firestore()
            .collection('users')
            .doc(auth().currentUser.uid)
            .collection('products')
            .doc(barcode)
            .set(
                {
                    ...product
                },
                { merge: true }
            )
            .then(() => {
                ToastAndroid.show('Cập nhật sản phẩm thành công', ToastAndroid.SHORT)
                navigation.navigate('Products')
                RNProgressHud.dismiss()
            })
            .catch((error) => {
                console.log(error)
                RNProgressHud.dismiss()
            })
    }

    const openCamera = () => {
        ImagePicker.openCamera({
            mediaType: 'photo',
            width: 1000,
            height: 1000,
            cropping: true
        })
            .then((image) => {
                setImage(image)
            })
            .catch((err) => {})
    }

    const openLibrary = () => {
        ImagePicker.openPicker({
            mediaType: 'photo',
            width: 1000,
            height: 1000,
            cropping: true
        })
            .then((image) => {
                setImage(image)
            })
            .catch((err) => {})
    }

    const handlePickerImage = (index) => {
        if (index == 0) {
            openCamera()
        } else if (index == 1) {
            openLibrary()
        }
    }

    return (
        <View style={styles.container}>
            <HeaderAdd title={'Sửa sản phẩm'} />
            <ScrollView>
                <View style={styles.viewImage}>
                    <TouchableOpacity style={styles.addImage} onPress={onShowImageActionSheet}>
                        <Icon style={styles.iconImage} name='camera-outline' />
                    </TouchableOpacity>
                    <Image style={styles.image} source={{ uri: image?.path }} />
                </View>
                <View style={styles.viewProblems}>
                    <View style={styles.problems}>
                        <Text style={styles.textTitle}>Tên sản phẩm:</Text>
                        <TextInput
                            style={styles.textProblems}
                            placeholder='Tên sản phẩm'
                            value={name}
                            onChangeText={setName}
                            placeholderTextColor='#A9A9A9'
                        />
                        <Text style={styles.textTitle}>Mã sản phẩm:</Text>
                        <View style={styles.barCode} pointerEvents='none'>
                            <TextInput
                                style={styles.textProblems1}
                                placeholder='Mã sản phẩm'
                                value={barcode}
                                onChangeText={setBarcode}
                                placeholderTextColor='#A9A9A9'
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.ViewProblems1}>
                    <Text style={styles.textTitle}>Giá nhập:</Text>

                    <TextInput
                        style={styles.textProblems}
                        placeholder='Giá nhập'
                        value={priceCapital}
                        keyboardType='numeric'
                        onChangeText={setPriceCapital}
                        placeholderTextColor='#A9A9A9'
                    />
                    <Text style={styles.textTitle}>Giá bán:</Text>
                    <TextInput
                        style={styles.textProblems}
                        placeholder='Giá bán'
                        keyboardType='numeric'
                        value={priceSale}
                        onChangeText={setPriceSale}
                        placeholderTextColor='#A9A9A9'
                    />
                </View>
                <View style={styles.ViewProblems1}>
                    <Text style={styles.textTitle}>Mô tả:</Text>
                    <View style={styles.problems}>
                        <TextInput
                            style={styles.textProblems}
                            placeholder='Mô tả'
                            value={description}
                            onChangeText={setDescription}
                            placeholderTextColor='#A9A9A9'
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
                <Text style={styles.textButton}>Cập nhật</Text>
            </TouchableOpacity>
            <ActionSheet
                ref={_refActionSheet}
                title={'Chọn ảnh'}
                options={['Camera', 'Thư viện ảnh', 'Huỷ']}
                cancelButtonIndex={2}
                onPress={handlePickerImage}
            />
        </View>
    )
}

export default EditProduct

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
        margin: 10,
        marginTop: 6
    },
    barCode: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8',
        backgroundColor: '#e5e5e5',
        borderRadius: 10,
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
    },
    textTitle: {
        fontSize: 16,
        color: '#000',
        paddingHorizontal: 20,
        marginTop: 10
    }
})
