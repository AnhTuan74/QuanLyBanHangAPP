import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
const AddProduct = () => {
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
                <Icon style={styles.icon} name='times' />
                <Text style={styles.text}>Thêm sản phẩm</Text>
                <Icon style={styles.icon} name='check' />
            </View>
            <View style={styles.addImage}>
                <Icon style={styles.iconImage} name='camera' />
            </View>
            <View style={styles.viewProblems}>
                <View style={styles.problems}>
                    <Text style={styles.textProblems}>Tên sản phẩm</Text>
                    <View style={styles.barCode}>
                        <Text style={styles.textProblems1}>Mã sản phẩm</Text>
                        <Icon style={styles.iconImage} name='barcode' />
                    </View>
                    <View style={styles.barCode}>
                        <Text style={styles.textProblems1}>Barcode</Text>
                        <Icon style={styles.iconImage} name='barcode' />
                    </View>
                    <View style={styles.problems1}>
                        <Text style={styles.textProblems2}>Khối lượng (0)</Text>
                        <Text style={styles.textProblems2}>Đơn vị tính</Text>
                    </View>
                </View>
            </View>
            <View>
                
            </View>
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
        paddingHorizontal: 85
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
    }
})
