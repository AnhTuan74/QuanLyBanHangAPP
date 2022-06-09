import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const NoProduct = () => {
    const navigation = useNavigation()

    return (
        <View style={styles.pickProduct}>
            <Image
                style={styles.imageNoProduct}
                source={{
                    uri: 'https://scontent.fdad3-4.fna.fbcdn.net/v/t1.15752-9/278540589_4997073913748529_122472978450654907_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=4S0vsamRQgYAX-vNWSy&_nc_ht=scontent.fdad3-4.fna&oh=03_AVIl1J_zjkQSn6x6DFiuZupSJebHBndzUV1yKLDiN7hPEw&oe=62BA4C02'
                }}
            />
            <Text style={styles.text3}>Đơn hàng của bạn chưa có sản phẩm nào!</Text>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('ChoiceProduct')
                }}
            >
                <Text style={styles.text4}>Chọn sản phẩm</Text>
            </TouchableOpacity>
        </View>
    )
}

export default NoProduct

const styles = StyleSheet.create({
    pickProduct: {
        backgroundColor: '#fff',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8'
    },
    imageNoProduct: {
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
    text4: {
        color: '#3C7BF4',
        fontSize: 14,
        textAlign: 'center'
    }
})
