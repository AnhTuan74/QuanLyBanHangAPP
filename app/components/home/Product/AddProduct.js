import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
const AddProduct = ({ navigation }) => {
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
                <Icon style={styles.icon} name='close-outline' />
                <Text style={styles.text}>Thêm sản phẩm</Text>
                <Icon style={styles.icon} name='checkmark-outline' />
            </View>
            <ScrollView>
                <View style={styles.addImage}>
                    <Icon style={styles.iconImage} name='camera-outline' />
                </View>
                <View style={styles.viewProblems}>
                    <View style={styles.problems}>
                        <TextInput style={styles.textProblems}>Tên sản phẩm</TextInput>
                        <View style={styles.barCode}>
                            <TextInput style={styles.textProblems1}>Mã sản phẩm</TextInput>
                            <Icon style={styles.iconImage} name='barcode-outline' />
                        </View>
                        <View style={styles.barCode}>
                            <TextInput style={styles.textProblems1}>Barcode</TextInput>
                            <Icon style={styles.iconImage} name='barcode-outline' />
                        </View>
                        <View style={styles.problems1}>
                            <TextInput style={styles.textProblems2}>Khối lượng (0)</TextInput>
                            <TextInput style={styles.textProblems2}>Đơn vị tính</TextInput>
                        </View>
                    </View>
                </View>
                <View style={styles.ViewProblems1}>
                    <View style={styles.problems1}>
                        <TextInput style={styles.textProblems2}>Tồn kho ban đầu</TextInput>
                        <TextInput style={styles.textProblems2}>Giá vốn</TextInput>
                    </View>
                    <View style={styles.problems1}>
                        <TextInput style={styles.textProblems2}>Giá bán lẻ</TextInput>
                        <TextInput style={styles.textProblems2}>Giá bán buôn</TextInput>
                    </View>
                    <View style={styles.problems1}>
                        <TextInput style={styles.textProblems2}>Giá nhập</TextInput>
                    </View>
                </View>
                <View style={styles.ViewProblems1}>
                    <View style={styles.problems}>
                        <TextInput style={styles.textProblems}>Giá nhập</TextInput>
                        <TextInput style={styles.textProblems}>Mô tả</TextInput>
                    </View>
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        navigation.navigate('ProductDetail')
                    }}
                >
                    <Text style={styles.textButton}>Lưu</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default AddProduct

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
    viewProblems: {
        backgroundColor: '#fff',
        borderRadius: 5,
        marginTop: 10,
        paddingVertical: 10,
        marginHorizontal: 10
    },
    textProblems: {
        color: '#666',
        fontSize: 13,
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginHorizontal: 10,
        marginVertical: 10
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
        fontSize: 13,
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
        fontSize: 13,
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
        fontSize: 15,
        fontWeight: 'bold'
    }
})
