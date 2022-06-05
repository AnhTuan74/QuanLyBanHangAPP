import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

const CustomerDetail = () => {
    return (
        <View style={styles.container}>
            <View
                style={{
                    padding: 20,
                    backgroundColor: '#fff',
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderBottomWidth: 1,
                    borderBottomColor: '#E8E8E8',
                    justifyContent: 'space-between'
                }}
            >
                <TouchableOpacity>
                    <Icon style={styles.icon} name='arrow-back-outline' />
                </TouchableOpacity>
                <Text style={styles.text}>Chi tiết khách hàng</Text>
                <Icon style={styles.icon} name='checkmark-outline' color='transparent' />
            </View>
            <View style={styles.viewInformation}>
                <View style={styles.Information}>
                    <Text style={styles.textInformation}>Tên khách hàng:</Text>
                </View>
                <View style={styles.Information}>
                    <Text style={styles.textInformation}>Số điện thoại:</Text>
                </View>
                <View style={styles.Information}>
                    <Text style={styles.textInformation}>Địa chỉ:</Text>
                </View>
                <View style={styles.Information}>
                    <Text style={styles.textInformation}>Email:</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>Xóa khách hàng</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CustomerDetail

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    icon: {
        color: '#666',
        fontSize: 25,
        marginVertical: 10
    },
    text: {
        color: '#666',
        fontSize: 20,
        fontWeight: 'bold'
    },
    viewInformation: {
        padding: 20,
        backgroundColor: '#fff',
        marginTop: 15
    },
    textInformation: {
        fontSize: 16,
        color: '#666'
    },
    Information: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8',
        marginBottom: 25,
        paddingVertical: 10
    },
    button: {
        backgroundColor: '#fff',
        borderRadius: 15,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        width: 153,
        borderWidth: 1,
        borderColor: '#f44',
        alignSelf: 'center'
    },
    textButton: {
        color: '#f44',
        fontSize: 16
    }
})
