import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    TextInput
} from 'react-native'
import React from 'react'
import HeaderAdd from './../Product/components/HeaderAdd'
import { useNavigation } from '@react-navigation/native'

const AddCustomer = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <HeaderAdd title={'Thêm khách hàng'} />
            <ScrollView>
                <View style={styles.viewProblems}>
                    <View style={styles.problems}>
                        <TextInput
                            style={styles.textProblems}
                            placeholder='Tên khách hàng'
                            placeholderTextColor='#A9A9A9'
                        />
                        <View style={styles.barCode}>
                            <TextInput
                                style={styles.textProblems1}
                                placeholder='Số điện thoại'
                                keyboardType='numeric'
                                placeholderTextColor='#A9A9A9'
                            />
                        </View>
                        <View style={styles.barCode}>
                            <TextInput
                                style={styles.textProblems1}
                                placeholder='Email'
                                placeholderTextColor='#A9A9A9'
                            />
                        </View>
                        <View style={styles.barCode}>
                            <TextInput
                                style={styles.textProblems1}
                                placeholder='Địa chỉ'
                                placeholderTextColor='#A9A9A9'
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    navigation.navigate('CustomerDetail')
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
