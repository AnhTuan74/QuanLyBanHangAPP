import { StyleSheet, Text, View, TouchableOpacity, Dimensions, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Icon } from 'react-native-vector-icons/Ionicons'

const list = [
    {
        id: 1,
        name: 'Hôm nay',
        type: 'today'
    },
    {
        id: 2,
        name: 'Hôm qua',
        type: 'yesterday'
    },
    {
        id: 3,
        name: 'Tháng này',
        type: 'thisMonth'
    },
    {
        id: 4,
        name: 'Tháng trước',
        type: 'lastMonth'
    }
]

const Turnover = () => {
    const [selected, setSelected] = useState(list[0])

    return (
        <View style={styles.container}>
            <View style={styles.viewButtonDate}>
                <FlatList
                    data={list}
                    horizontal
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={{
                                ...styles.buttonDate,
                                backgroundColor: selected.type == item.type ? 'blue' : '#fff'
                            }}
                            onPress={() => {
                                setSelected(item)
                            }}
                        >
                            <Text style={styles.textButtonDate}>{item.name}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
            <View style={styles.report}>
                <TouchableOpacity>
                    <Text style={styles.textReport}>Tháng này</Text>
                </TouchableOpacity>
                <View style={styles.viewReport}>
                    <View
                        style={{
                            ...styles.itemReport,
                            borderRightWidth: 1,
                            borderRightColor: '#E8E8E8'
                        }}
                    >
                        <Text style={styles.textItemReport}>Tổng thu</Text>
                        <Text style={styles.textItemPrice}> VNĐ </Text>
                    </View>
                    <View style={styles.itemReport}>
                        <Text style={styles.textItemReport}>Tổng chi</Text>
                        <Text style={styles.textItemPrice}>VNĐ</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Turnover

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    report: {
        backgroundColor: '#fff',
        paddingVertical: 10,
        borderRadius: 5,
        marginHorizontal: 20,
        marginTop: 20
    },
    textReport: {
        color: '#666',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8',
        paddingBottom: 10
    },
    viewReport: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        paddingVertical: 14
    },
    itemReport: {
        flex: 1
    },
    textItemReport: {
        textAlign: 'center',
        color: '#666',
        paddingHorizontal: 10,
        fontSize: 16
    },
    textItemPrice: {
        color: '#3C7BF4',
        textAlign: 'center',
        fontSize: 16
    },
    viewButtonDate: {
        flexDirection: 'row',
        marginTop: 10
    },
    buttonDate: {
        backgroundColor: '#fff',
        borderRadius: 5,
        width: (Dimensions.get('window').width - 50) / 4,
        height: 40,
        paddingVertical: 5,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E8E8E8'
    }
})
