import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native'
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import RNProgressHud from 'progress-hud'

const Search = ({ screen }) => {
    const navigation = useNavigation()
    const [search, setSearch] = useState('')

    return (
        <View style={styles.look}>
            <TouchableOpacity>
                <Icon style={styles.icon1} name='search' />
            </TouchableOpacity>
            <TextInput
                // onBlur={() => {
                //     handleOnSearch(search)
                // }}
                // onEndEditing={() => {
                //     handleOnSearch(search)
                // }}
                value={search}
                onChangeText={(text) => setSearch(text)}
                style={styles.text1}
                placeholder='Tìm kiếm'
                placeholderTextColor={'#BDBDBD'}
            />
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Scan')
                }}
            >
                <Icon style={styles.icon1} name='barcode' />
            </TouchableOpacity>
        </View>
    )
}

export default Search

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
        fontSize: 18,
        fontWeight: 'bold'
    },

    viewHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    icon1: {
        color: '#666',
        fontSize: 15
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
        // flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#E8E8E8',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        borderRadius: 20,
        paddingHorizontal: 20,
        marginVertical: 10,
        marginTop: 15
    }
})
