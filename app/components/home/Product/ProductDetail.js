import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native'

const ProductDetail = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View
                style={{
                    padding: 25,
                    backgroundColor: '#fff',
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderBottomWidth: 1,
                    borderBottomColor: '#E8E8E8'
                }}
            >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon style={styles.icon} name='times' />
                </TouchableOpacity>
                <Text style={styles.text}>Chi tiết sản phẩm</Text>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('EditProduct')
                    }}
                >
                    <Icon style={styles.icon} name='edit' />
                </TouchableOpacity>
            </View>
            <View style={styles.addImage}>
                <Icon style={styles.iconImage} name='camera' />
            </View>
            <View style={styles.viewInformation}>
                <View style={styles.information}>
                    <Text style={styles.textInformation}>Tên sản phẩm</Text>
                </View>
                <View style={styles.information1}>
                    <Text style={styles.textInformation1}>SKU:</Text>
                    <Text style={styles.textInformation1}>Mã</Text>
                </View>
                <View style={styles.information1}>
                    <Text style={styles.textInformation1}>Barcode:</Text>
                    <Text style={styles.textInformation1}>Mã</Text>
                </View>
                <View style={styles.information1}>
                    <Text style={styles.textInformation1}>Khối lượng:</Text>
                    <Text style={styles.textInformation1}>Mã</Text>
                </View>
                <View style={styles.information1}>
                    <Text style={styles.textInformation1}>Đơn vị tính:</Text>
                    <Text style={styles.textInformation1}>Mã</Text>
                </View>
                <View style={styles.information1}>
                    <Text style={styles.textInformation1}>Kích thước</Text>
                    <Text style={styles.textInformation1}>Mã</Text>
                </View>
            </View>
            <View style={styles.viewInformation}>
                <View style={styles.information2}>
                    <Text style={styles.textInformation2}>Kho hàng</Text>
                    <View style={styles.info}>
                        <Text style={styles.textInformation2}>Tồn kho:</Text>
                        <Text style={styles.textInformation2}>Có thể bán:</Text>
                    </View>
                </View>
                <View style={styles.information3}>
                    <View style={styles.info2}>
                        <Text style={styles.textInformation3}>Giá bán lẻ</Text>
                        <Text style={styles.textInformation3}>0</Text>
                    </View>
                    <View style={styles.info3}>
                        <Text style={styles.textInformation3}>Giá bán buôn</Text>
                        <Text style={styles.textInformation3}>0</Text>
                    </View>
                </View>
                <View style={styles.information4}>
                    <Text style={styles.textInformation4}>Giá nhập</Text>
                    <Text style={styles.textInformation4}>0</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.button}>
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
    icon: {
        color: '#666',
        fontSize: 15
    },
    text: {
        color: '#666',
        fontSize: 14,
        fontWeight: 'bold',
        paddingHorizontal: 100
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
    viewInformation: {
        backgroundColor: '#fff',
        borderRadius: 5,
        marginTop: 10,
        marginHorizontal: 10
    },
    information: {
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    textInformation: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold'
    },
    information1: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    textInformation1: {
        color: '#666'
    },
    information2: {
        flexDirection: 'row',
        paddingVertical: 10,
        justifyContent: 'space-between',
        marginHorizontal: 10,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8'
    },
    info: {
        marginHorizontal: 30
    },
    textInformation2: {
        color: '#666',
        fontSize: 14
    },
    information3: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 10,
        justifyContent: 'space-between'
    },
    info3: {
        marginHorizontal: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8'
    },
    information4: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8',
        marginBottom: 20,
        marginHorizontal: 10
    },
    info2: {
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8'
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
