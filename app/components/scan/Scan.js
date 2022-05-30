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
// import Ionicons from 'react-native-vector-icons/Ionicons'
// import RNProgressHud from 'progress-hud'
import { StackActions, useNavigation, useRoute } from '@react-navigation/core'
// import Util from '../../controller/Utli'

const bgColor = 'rgba(0, 0, 0, 0.2)'

const FunctionItem = ({ source, title, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.funcView}>
            <Image source={source} style={styles.funcIcon} />
            <View style={{ flex: 1 }} />
            <Text style={styles.funcTitle}>{title}</Text>
        </TouchableOpacity>
    )
}

const Scan = () => {
    const navigation = useNavigation()
    const cameraRef = useRef()
    const route = useRoute()
    const isScanning = useRef(true)

    const _onBarCodeRead = (event) => {
        if (!isScanning.current) {
            return
        }
        try {
            const data = JSON.parse(event?.data ?? {})
            if (data?.type != null) {
                handleQRCodeData(data)
                isScanning.current = false
                return
            }
        } catch (error) {
            console.log('error')
        }
    }

    const _onStatusChange = (event) => {}

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
                onStatusChange={_onStatusChange}
            >
                <View style={styles.cameraView}>
                    <View style={styles.backView}>
                        <TouchableOpacity
                            // onPress={didClickBack}
                            style={{
                                ...styles.closeButton
                                // paddingTop: Util.getTopSafeArea() > 0 ? Util.getTopSafeArea() : 23,
                            }}
                        >
                            {/* <Image source={Constant.icons.back} /> */}
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
                                <Text style={styles.titleText}>Nexus Point Scan</Text>
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
        width: Constant.screen.width - 120,
        height: Constant.screen.width - 120
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
