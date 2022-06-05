import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import RNProgressHud from 'progress-hud'
import Header from './components/Header'

const ProductDetail = ({ route }) => {
    const { product } = route?.params || {}
    const navigation = useNavigation()

    const handleOnDeleteProduct = () => {
        RNProgressHud.show()
        const user = auth().currentUser
        firestore()
            .collection(`users/${user.uid}/products`)
            .doc(product.id)
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
        RNProgressHud.showSuccessWithStatus('Xóa sản phẩm thành công')
        setTimeout(() => {
            RNProgressHud.dismiss()
            navigation.navigate('Products')
        }, 1000)
    }
    return (
        <View style={styles.container}>
            <Header screen='productDetail' title='Chi tiết sản phẩm' dataProduct={product} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.viewImage}>
                    <Image style={styles.image} source={{ uri: product.image }} />
                </View>
                <View style={styles.viewProblems} pointerEvents='none'>
                    <View style={styles.problems}>
                        <Text style={styles.textTitle}>Tên sản phẩm:</Text>
                        <TextInput
                            style={styles.textProblems}
                            placeholder='Tên sản phẩm'
                            value={product.name}
                            placeholderTextColor='#A9A9A9'
                        />
                        <Text style={styles.textTitle}>Mã sản phẩm:</Text>
                        <View style={styles.barCode} pointerEvents='none'>
                            <TextInput
                                style={styles.textProblems1}
                                placeholder='Mã sản phẩm'
                                value={product.barcode}
                                placeholderTextColor='#A9A9A9'
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.ViewProblems1} pointerEvents='none'>
                    <Text style={styles.textTitle}>Giá nhập:</Text>

                    <TextInput
                        style={styles.textProblems}
                        placeholder='Giá nhập'
                        value={product.priceCapital}
                        keyboardType='numeric'
                        placeholderTextColor='#A9A9A9'
                    />
                    <Text style={styles.textTitle}>Giá bán:</Text>
                    <TextInput
                        style={styles.textProblems}
                        placeholder='Giá bán'
                        keyboardType='numeric'
                        value={product.priceSale}
                        placeholderTextColor='#A9A9A9'
                    />
                </View>
                <View style={styles.ViewProblems1}>
                    <Text style={styles.textTitle}>Mô tả:</Text>
                    <View style={styles.problems} pointerEvents='none'>
                        <TextInput
                            style={styles.textProblems}
                            placeholder='Mô tả'
                            value={product.description}
                            multiline={true}
                            placeholderTextColor='#A9A9A9'
                        />
                    </View>
                </View>
            </ScrollView>
            <TouchableOpacity style={styles.button} onPress={() => handleOnDeleteProduct()}>
                <Text style={styles.textButton}>Xóa sản phẩm</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ProductDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F2F8'
    },
    viewImage: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    addImage: {
        backgroundColor: '#fff',
        paddingVertical: 20,
        borderRadius: 10,
        width: 100,
        height: 100,
        alignItems: 'center',

        marginHorizontal: 10
    },
    iconImage: {
        color: '#3C7BF4',
        fontSize: 20
    },
    image: {
        width: 100,
        height: 100,
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
    },
    button: {
        backgroundColor: '#fff',
        marginHorizontal: 111,
        borderRadius: 15,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        width: 153,
        alignContent: 'center',
        borderWidth: 1,
        borderColor: '#f44'
    },
    textButton: {
        color: '#f44',
        fontSize: 16,
        fontWeight: 'bold'
    }
})
