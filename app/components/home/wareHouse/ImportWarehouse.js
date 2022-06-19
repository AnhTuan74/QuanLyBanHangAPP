import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    FlatList,
    Image,
    ToastAndroid
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import RNProgressHud from 'progress-hud'
import { formatPrice } from './../Product/ChoiceProduct'
import Header from './../Product/components/Header'

const ImportWarehouse = ({ route }) => {
    const navigation = useNavigation()
    const [listProduct, setListProduct] = useState([])

    const getListsProduct = async () => {
        RNProgressHud.show()
        const user = await auth().currentUser
        const ref = firestore().collection(`users/${user.uid}/products`)
        const snapshot = await ref.get()
        const list = []
        snapshot.forEach((doc) => {
            list.push({
                id: doc.id,
                ...doc.data(),
                addWareHouse: 0
            })
        })
        setListProduct(list)
        RNProgressHud.dismiss()
    }

    useEffect(() => {
        getListsProduct()
    }, [])

    const findProduct = async () => {
        let barcodeProduct = route?.params?.barcode
        if (barcodeProduct) {
            if (listProduct.some((item) => item.barcode == barcodeProduct)) {
                let product = listProduct.find((item) => item.barcode == barcodeProduct)
                product.addWareHouse = product.addWareHouse + 1
                setListProduct([
                    product,
                    ...listProduct.filter((item) => item.barcode != barcodeProduct)
                ])
            } else {
                ToastAndroid.show('Không tìm thấy sản phẩm', ToastAndroid.SHORT)
            }
        }
    }
    useEffect(() => {
        if (route?.params?.barcode) {
            findProduct()
        }
    }, [route])

    const handleOnImportWare = async () => {
        RNProgressHud.show()
        const user = await auth().currentUser
        Promise.all(
            listProduct.map((item) => {
                if (item.addWareHouse > 0) {
                    return firestore()
                        .collection(`users/${user.uid}/products`)
                        .doc(item.id)
                        .update({
                            quantity: Number(item.quantity) + Number(item.addWareHouse)
                        })
                }
            })
        )
            .then(() => {
                firestore()
                    .collection(`users/${user.uid}/warehouseReceipt`)
                    .doc(`DON${(Math.random() + 1).toString(36).substring(7)}`)
                    .set({
                        createdAt: new Date().getTime(),
                        listProduct: listProduct.filter((item) => item.addWareHouse > 0),
                        total: listProduct.reduce(
                            (total, item) => total + item.addWareHouse * item.priceCapital,
                            0
                        )
                    })
                ToastAndroid.show('Nhập kho thành công', ToastAndroid.SHORT)
                navigation.navigate('Products')
            })
            .catch(() => {
                ToastAndroid.show('Lỗi khi nhập kho', ToastAndroid.SHORT)
            })
            .finally(() => {
                RNProgressHud.dismiss()
            })

        RNProgressHud.dismiss()
    }

    return (
        <View style={styles.container}>
            <Header screen='ImportWarehouse' title='Kho Hàng' icon={'barcode'} />
            <FlatList
                data={listProduct}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.barcode}
                renderItem={({ item }) => (
                    <View style={styles.itemProduct}>
                        <View style={styles.viewImage}>
                            <Image
                                style={styles.image}
                                source={{
                                    uri: item.image
                                }}
                            />
                        </View>
                        <View style={styles.viewInformation}>
                            <View>
                                <Text style={styles.nameProduct}>{item.name}</Text>
                                <Text style={styles.nameProduct}>
                                    {formatPrice(item.priceCapital)} VNĐ
                                </Text>
                            </View>
                            <View style={styles.viewAmount}>
                                <Text>Tồn kho:{item.quantity}</Text>
                                <View style={styles.amount}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            if (item.addWareHouse > 0) {
                                                item.addWareHouse--
                                                setListProduct([...listProduct])
                                            }
                                        }}
                                    >
                                        <Icon name='minus' />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.buttonAmount}>
                                        <TextInput
                                            style={styles.buttonAmount}
                                            value={item.addWareHouse.toString()}
                                            onChangeText={(text) => {
                                                item.addWareHouse = parseInt(text)
                                                setListProduct([...listProduct])
                                            }}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => {
                                            item.addWareHouse++
                                            setListProduct([...listProduct])
                                        }}
                                    >
                                        <Icon name='plus' />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                )}
            />
            <View style={styles.viewFooter}>
                <View style={styles.footer}>
                    <View style={styles.viewTextFooter}>
                        <Text style={{ ...styles.textFooter, fontSize: 16, fontWeight: 'bold' }}>
                            SL: {listProduct.reduce((total, item) => total + item.addWareHouse, 0)}{' '}
                            sản phẩm
                        </Text>
                        <Text style={styles.textFooter}>
                            Tổng chi:{' '}
                            {formatPrice(
                                listProduct.reduce(
                                    (total, item) => total + item.addWareHouse * item.priceCapital,
                                    0
                                )
                            )}
                        </Text>
                    </View>
                    <TouchableOpacity
                        style={styles.buttonFooter}
                        onPress={() => handleOnImportWare()}
                    >
                        <Text style={styles.textButtonFooter}>Tiếp tục</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ImportWarehouse

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F2F8'
    },
    icon: {
        color: '#666',
        fontSize: 18,
        paddingRight: 20
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 10
    },
    Information: {
        flex: 1
    },
    image: {
        width: 60,
        height: 60,
        resizeMode: 'contain'
    },
    itemProduct: {
        padding: 20,
        backgroundColor: '#fff',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8',
        marginTop: 10
    },
    viewInformation: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    amount: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 10
    },
    buttonAmount: {
        borderWidth: 1,
        borderColor: '#E8E8E8',
        borderRadius: 10,
        padding: 0,
        textAlign: 'center',
        width: 40,
        height: 20,
        marginHorizontal: 5,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewFooter: {
        padding: 15,
        backgroundColor: '#fff'
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    buttonFooter: {
        backgroundColor: '#3C7BF4',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 40
    },
    textFooter: {
        color: '#666',
        fontSize: 16,

        paddingHorizontal: 10
    },
    textButtonFooter: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    }
})
