import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import {
    Alert,
    BackHandler,
    Image,
    Linking,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'
import { RNCamera } from 'react-native-camera'
import Constant from '../../controller/Constant'
import Icon from 'react-native-vector-icons/Ionicons'

import { StackActions, useNavigation, useRoute } from '@react-navigation/core'

const bgColor = 'rgba(0, 0, 0, 0.2)'

const Scan = () => {
    const navigation = useNavigation()
    const cameraRef = useRef()
    const route = useRoute()
    const isScanning = useRef(true)
    const screen = useRef(route?.params?.screen)
    console.log('screen', screen.current)
    const _onBarCodeRead = (event) => {
        try {
            if (!isScanning.current) {
                return
            }
            if (screen.current == 'AddProduct') {
                navigation.navigate('AddProduct', {
                    barcode: event?.data
                })
            } else if (screen.current == 'AddOrders') {
                navigation.navigate('AddOrders', {
                    barcode: event?.data
                })
            }
            isScanning.current = false
        } catch (error) {
            console.log('error', error)
        }
    }

    const _onStatusChange = (event) => {}
    useEffect(() => {
        navigation.addListener('focus', () => {
            isScanning.current = true
        })
    }, [])

    const didClickBack = () => {
        if (screen.current === 'Barcode') {
            navigation.navigate('TabBarNavigation', { screen: 'Home' })
            return
        }
        navigation.goBack()
    }

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => {
            didClickBack()
            return true
        })
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <RNCamera
                ref={cameraRef}
                style={styles.camera}
                captureAudio={false}
                autoFocus='on'
                androidCameraPermissionOptions={{
                    title: 'Cấp quyền truy cập camera',
                    message: 'Vui lòng cấp quyền truy cập camera để sử dụng chức năng này!',
                    buttonPositive: 'Đồng ý',
                    buttonNegative: 'Hủy'
                }}
                onBarCodeRead={_onBarCodeRead}
                // onStatusChange={_onStatusChange}
            >
                <View style={styles.cameraView}>
                    <View style={styles.backView}>
                        <TouchableOpacity
                            style={{
                                ...styles.closeButton
                            }}
                            onPress={() => {
                                if (screen.current === 'Barcode') {
                                    navigation.navigate('TabBarNavigation', { screen: 'Home' })
                                }
                            }}
                        >
                            <Icon name='arrow-back-outline' size={30} color='#fff' />
                            <Text style={styles.scanText}>Scan</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 1, backgroundColor: bgColor }} />
                        <View
                            style={{
                                flexDirection: 'row'
                            }}
                        >
                            <View style={{ flex: 1, backgroundColor: bgColor }} />
                            <View style={styles.contentView}>
                                <Image style={styles.scanFrameImg} />
                                <Text style={styles.titleText}>Quản lý bán hàng</Text>
                            </View>
                            <View style={{ flex: 1, backgroundColor: bgColor }} />
                        </View>
                        <View style={{ flex: 1, backgroundColor: bgColor }} />
                    </View>
                    <View style={{ backgroundColor: bgColor, paddingBottom: 24 }} />
                </View>
            </RNCamera>
        </View>
    )
}

export default Scan

const styles = StyleSheet.create({
    scanFrameImg: {
        width: Constant.screen.width - 32,
        height: Constant.screen.width - 160
    },
    closeButton: {
        paddingLeft: 12,
        paddingTop: 28,
        flexDirection: 'row',
        alignItems: 'center'
    },
    bottomView: {
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: bgColor
    },
    funcIcon: {
        height: 48,
        width: 48
    },
    funcTitle: {
        fontSize: 16,
        color: 'white'
    },
    funcView: {
        alignItems: 'center'
    },
    camera: {
        flex: 1
    },
    contentView: {},
    titleText: {
        fontSize: 16,
        color: 'white',
        paddingTop: 10,
        backgroundColor: bgColor,
        textAlign: 'center'
    },
    cameraView: {
        flex: 1
    },
    backView: {
        backgroundColor: bgColor
    },
    scanText: {
        fontSize: 30,
        color: 'white',
        marginLeft: 12
    }
})
