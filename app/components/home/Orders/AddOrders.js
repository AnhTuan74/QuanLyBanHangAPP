import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'

const AddOrders = () => {
    return (
        <View style={styles.container}>
            <View
                style={{
                    padding: 20,
                    backgroundColor: '#fff',
                    borderBottomWidth: 1,
                    borderBottomColor: '#E8E8E8'
                }}
            >
                <View style={styles.viewHeader}>
                    <Icon style={styles.icon} name='arrow-left' />
                    <View style={styles.look}>
                        <TouchableOpacity>
                            <Icon style={styles.icon1} name='search' />
                        </TouchableOpacity>
                        <TextInput
                            style={styles.text1}
                            placeholder='Tìm kiếm'
                            placeholderTextColor={'#BDBDBD'}
                        />
                        <TouchableOpacity>
                            <Icon style={styles.icon1} name='barcode' />
                        </TouchableOpacity>
                    </View>
                    <Icon style={styles.icon} name='ellipsis-v' />
                </View>
            </View>
            <View style={styles.pickProduct}>
                <Image
                    style={styles.image}
                    source={{
                        uri: 'https://scontent.fdad3-4.fna.fbcdn.net/v/t1.15752-9/278540589_4997073913748529_122472978450654907_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=4S0vsamRQgYAX-vNWSy&_nc_ht=scontent.fdad3-4.fna&oh=03_AVIl1J_zjkQSn6x6DFiuZupSJebHBndzUV1yKLDiN7hPEw&oe=62BA4C02'
                    }}
                />
                <Text style={styles.text3}>Đơn hàng của bạn chưa có sản phẩm nào!</Text>
                <Text style={styles.text4}>Chọn sản phẩm</Text>
            </View>
        </View>
    )
}

export default AddOrders

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F2F8'
    },
    icon: {
        color: '#666',
        fontSize: 15,
        marginVertical: 10
    },
    text: {
        color: '#666',
        fontSize: 14,
        fontWeight: 'bold'
    },
    viewHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    icon1: {
        color: '#666',
        fontSize: 15
    },
    text2: {
        color: '#666',
        fontSize: 14,
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    pickProduct: {
        backgroundColor: '#fff',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8'
    },
    text1: {
        // borderColor: '#E8E8E8',
        // backgroundColor: '#F6F6F6',
        borderRadius: 5,
        flex: 1,
        marginHorizontal: 16,
        paddingLeft: 16,
        color: '#000'
    },
    look: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#E8E8E8',
        backgroundColor: '#F6F6F6',
        justifyContent: 'space-between',
        marginHorizontal: 25,
        borderRadius: 20,
        paddingHorizontal: 20
    },
    image: {
        width: 150,
        height: 100,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    text3: {
        color: '#666',
        fontSize: 14,
        textAlign: 'center'
    },
    text4:{
        color: '#666',
    }
})
