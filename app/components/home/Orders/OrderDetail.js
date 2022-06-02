import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

const OrderDetail = () => {
    return (
        <View style={styles.container}>
            <View
                style={{
                    padding: 25,
                    backgroundColor: '#fff',
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderBottomWidth: 1,
                    borderBottomColor: '#E8E8E8',
                    justifyContent: 'space-between'
                }}
            >
                <TouchableOpacity>
                    <Icon style={styles.icon} name='close-outline' />
                </TouchableOpacity>
                <Text style={styles.text}>DON00001</Text>
                <Icon style={styles.icon} name='checkmark-outline' />
            </View>
            <View style={styles.viewProducts}>
                <Text
                    style={{
                        fontSize: 15,
                        fontWeight: 'bold',
                        color: '#000',
                        marginBottom: 10
                    }}
                >
                    Sản phẩm
                </Text>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}
                >
                    <View style={styles.imageProducts}>
                        <Image
                            style={styles.image}
                            source={{
                                uri: 'https://th.bing.com/th/id/R.149244a480a45a0736cdba574ba9147e?rik=mYWnOVTopKTpCw&pid=ImgRaw&r=0'
                            }}
                        />
                    </View>
                    <View style={styles.informationProducts}>
                        <Text style={{}}>Áo Hoodie</Text>
                        <Text style={{ marginTop: 5 }}>SKU:PNV001</Text>
                        <Text style={{ marginTop: 5 }}>250,000</Text>
                    </View>
                    <View style={styles.informationProducts1}>
                        <Text
                            style={{
                                fontSize: 15,
                                fontWeight: 'bold',
                                color: '#000'
                            }}
                        >
                            250,000
                        </Text>
                    </View>
                </View>
            </View>
            <View>
                
            </View>
        </View>
    )
}

export default OrderDetail

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
    image: {
        width: 60,
        height: 60,
        resizeMode: 'contain'
    },
    viewProducts: {
        padding: 20,
        backgroundColor: '#fff',
        marginTop: 10
    },
    informationProducts: {
        flex: 1,
        marginLeft: 5
    }
})
