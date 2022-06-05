import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome5'

const Header = () => {
    const navigation = useNavigation()
    const infoUser = useSelector((state) => state.user.data)

    return (
        <View
            style={{
                padding: 30,
                backgroundColor: '#3C7BF4',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}
        >
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.avatar}>
                    <Avatar
                        source={{
                            uri: 'https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg'
                        }}
                        rounded
                        onPress={() => {
                            navigation.navigate('Profile')
                        }}
                        size={40}
                    />
                </View>
                <View style={styles.viewHeader}>
                    <Text style={styles.textName}>{infoUser?.name}</Text>
                    <Text style={styles.textPhone}>{infoUser?.phone}</Text>
                </View>
            </View>
            <View style={styles.viewIcon}>
                <Icon name='comment' size={20} color='#fff' style={{ marginHorizontal: 10 }} />
                <Icon name='bell' size={20} color='#fff' />
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    textName: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },
    textPhone: {
        color: '#fff',
        fontSize: 14
    },
    viewHeader: {
        marginHorizontal: 10
    },
    viewIcon: {
        flexDirection: 'row'
    }
})
