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
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon style={styles.icon} name='close-outline' />
                </TouchableOpacity>
                <Text style={styles.text}>Thêm sản phẩm</Text>
                <Icon style={styles.icon} name='checkmark-outline' />
            </View>
            <ScrollView>
                <View style={styles.addImage}>
                    <Icon style={styles.iconImage} name='camera-outline' />
                </View>
                <View style={styles.viewProblems}>
                    <View style={styles.problems}>
                        <TextInput
                            style={styles.textProblems}
                            placeholder='Tên sản phẩm'
                            placeholderTextColor={'#666'}
                        />
                        <View style={styles.barCode}>
                            <TextInput
                                style={styles.textProblems1}
                                placeholder='SKU'
                                placeholderTextColor={'#666'}
                            />
                            <Icon style={styles.iconImage} name='barcode-outline' />
                        </View>
                        <View style={styles.barCode}>
                            <TextInput
                                style={styles.textProblems1}
                                placeholder='BarCode'
                                placeholderTextColor={'#666'}
                            />
                            <Icon style={styles.iconImage} name='barcode-outline' />
                        </View>
                        <View style={styles.problems1}>
                            <TextInput
                                style={styles.textProblems2}
                                placeholder='Khối lượng'
                                placeholderTextColor={'#666'}
                            />
                            <TextInput
                                style={styles.textProblems2}
                                placeholder='Đơn vị tính'
                                placeholderTextColor={'#666'}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.ViewProblems1}>
                    <View style={styles.problems1}>
                        <TextInput
                            style={styles.textProblems2}
                            placeholder='Tồn kho ban đầu'
                            placeholderTextColor={'#666'}
                        />
                        <TextInput
                            style={styles.textProblems2}
                            placeholder='Giá vốn'
                            placeholderTextColor={'#666'}
                        />
                    </View>
                    <View style={styles.problems1}>
                        <TextInput
                            style={styles.textProblems2}
                            placeholder='Giá bán lẻ              '
                            placeholderTextColor={'#666'}
                        />
                        <TextInput
                            style={styles.textProblems2}
                            placeholder='Giá bán buôn'
                            placeholderTextColor={'#666'}
                        />
                    </View>
                    <View style={styles.problems1}>
                        <TextInput
                            style={styles.textProblems2}
                            placeholder='Giá nhập        '
                            placeholderTextColor={'#666'}
                        />
                    </View>
                </View>
                <View style={styles.ViewProblems1}>
                    <View style={styles.problems}>
                        <TextInput
                            style={styles.textProblems}
                            placeholder='Danh mục sản phẩm'
                            placeholderTextColor={'#666'}
                        />
                        <TextInput
                            style={styles.textProblems}
                            placeholder='Mô tả'
                            placeholderTextColor={'#666'}
                        />
                    </View>
                </View>
            </ScrollView>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    navigation.navigate('ProductDetail')
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
    icon: {
        color: '#666',
        fontSize: 25
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
