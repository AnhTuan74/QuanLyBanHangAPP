import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const ProfitAndLoss = () => {
    return (
        <View style={styles.container}>
            <View style={styles.viewButtonDate}>
                <TouchableOpacity style={styles.buttonDate}>
                    <Text style={styles.textButtonDate}>Hôm nay</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonDate}>
                    <Text style={styles.textButtonDate}>Hôm nay</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonDate}>
                    <Text style={styles.textButtonDate}>Hôm nay</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonDate}>
                    <Text style={styles.textButtonDate}>Hôm nay</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonDate}>
                    <Text style={styles.textButtonDate}>Hôm nay</Text>
                </TouchableOpacity>
            </View>
            {false ? (
                <View style={styles.viewImage}>
                    <Image
                        style={styles.imageNotFound}
                        source={{
                            uri: 'https://scontent.fdad3-6.fna.fbcdn.net/v/t1.15752-9/286177883_527827242147574_2296993902112961711_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=D9knBXbAQ-8AX-xA6dP&_nc_ht=scontent.fdad3-6.fna&oh=03_AVJ2-MpzmfpQ7nJJniYc8SU-wqWxFSwJiTSYt5B7obfwpw&oe=62C7AF23'
                        }}
                    />
                    <Text style={styles.textImage}>
                        Bạn chưa có dữ liệu bán hàng nào được ghi lại
                    </Text>
                    <TouchableOpacity style={styles.buttonImage}>
                        <Text style={styles.textButtonImage}>Tạo đơn hàng</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <View style={styles.viewReport}>
                    <View style={styles.profit}>
                        <Text style={styles.textProfit}>Lợi nhuận</Text>
                        <Text style={{ ...styles.textProfit, fontSize: 30, color: '#3C7BF4' }}>
                            13.000 VNĐ
                        </Text>
                    </View>
                    <View style={styles.reportDetail}>
                        <Text style={styles.textReportDetail}>Chi tiết báo cáo</Text>
                        <View style={styles.turnover}>
                            <Text style={styles.textTurnover}>Doanh thu</Text>
                            <Text style={{ ...styles.textTurnover, color: '#3C7BF4' }}>25.000</Text>
                        </View>
                    </View>
                </View>
            )}
        </View>
    )
}

export default ProfitAndLoss

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    viewButtonDate: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10
    },
    buttonDate: {
        backgroundColor: '#fff',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderWidth: 1,
        borderColor: '#E8E8E8'
    },
    imageNotFound: {
        width: 250,
        height: 200,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 20
    },
    textImage: {
        fontSize: 16,
        color: '#666',
        alignSelf: 'center'
    },
    buttonImage: {
        backgroundColor: '#3C7BF4',
        borderRadius: 10,
        marginTop: 15,
        paddingVertical: 10,
        alignSelf: 'center',
        alignItems: 'center',
        paddingHorizontal: 25
    },
    textButtonImage: {
        color: '#fff',
        fontSize: 16
    },
    profit: {
        padding: 20,
        backgroundColor: '#fff',
        marginTop: 10,
        marginHorizontal: 15,
        borderRadius: 5
    },
    textProfit: {
        fontSize: 16,
        color: '#666',
        alignSelf: 'center',
        marginBottom: 10
    },
    turnover: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        backgroundColor: '#F0F0F0',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    reportDetail: {
        padding: 20,
        backgroundColor: '#fff',
        marginTop: 10,
        marginHorizontal: 15,
        borderRadius: 5
    },
    textTurnover: {
        fontSize: 16
    },
    textReportDetail: {
        fontSize: 16,
        color: '#000',
        marginBottom: 10
    }
})
