import { StyleSheet, Text, View, TouchableOpacity, Alert, ToastAndroid } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Avatar } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import { setInfoUser } from '../../redux/userSlice'
import { useDispatch, useSelector } from 'react-redux'

const list = [
    {
        id: 1,
        name: 'Đóng góp ý kiến'
    },
    {
        id: 2,
        name: 'Về ứng dụng'
    },
    {
        id: 3,
        name: 'Quy chế hoạt động'
    },
    {
        id: 4,
        name: 'Chính sách bảo mật'
    },
    {
        id: 4,
        name: 'Giải quyết khiếu nại'
    }
]

const Profile = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const infoUser = useSelector((state) => state.user.data)

    const handleOnClickLogout = () => {
        Alert.alert('Thông báo', 'Bạn có chắc chắn muốn đăng xuất?', [
            {
                text: 'Cancel',
                onPress: () => {
                    console.log('Cancel Pressed')
                }
            },
            {
                text: 'OK',
                onPress: () => {
                    handleOnLogout()
                }
            }
        ])
    }

    const handleOnLogout = () => {
        auth()
            .signOut()
            .then(() => {
                ToastAndroid.show('Đăng xuất thành công', ToastAndroid.SHORT)
            })
        navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }]
        })
        dispatch(setInfoUser(null))
    }

    return (
        <View style={styles.container}>
            <View
                style={{
                    padding: 30,
                    backgroundColor: '#3C7BF4',
                    flexDirection: 'row',
                    alignItems: 'center'
                }}
            >
                <Text style={styles.text}>Thông tin cá nhân</Text>
            </View>
            <View style={styles.viewInformation}>
                <View style={styles.view}>
                    <Avatar
                        source={{
                            uri: 'https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg'
                        }}
                        rounded
                        size={40}
                    />
                </View>
                <View style={styles.viewText}>
                    <Text style={styles.text1}>{infoUser.name}</Text>
                    <Text style={styles.text2}>{infoUser.phone}</Text>
                    <TouchableOpacity>
                        <Text style={styles.text3}>Chỉnh sửa thông tin</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {list.map((item, index) => (
                <TouchableOpacity key={index}>
                    <View style={styles.problem}>
                        <Text style={styles.textProblems}>{item.name}</Text>
                        <Icon style={styles.iconHandling} name='angle-right' size={15} />
                    </View>
                </TouchableOpacity>
            ))}
            <TouchableOpacity
                onPress={() => {
                    handleOnClickLogout()
                }}
            >
                <View style={styles.problems1}>
                    <Text style={styles.textProblems1}>Đăng xuất</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F2F8'
    },
    icon: {
        color: '#fff',
        fontSize: 15
    },
    text: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
        alignItems: 'center'
    },
    viewInformation: {
        backgroundColor: '#fff',
        paddingVertical: 20,
        borderRadius: 10,
        marginHorizontal: 20,
        marginTop: -20,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        marginBottom: 20
    },
    viewText: {
        paddingHorizontal: 20
    },
    text1: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000',
        marginVertical: 2
    },
    text2: {
        fontSize: 14,
        color: '#666666',
        marginVertical: 2
    },
    text3: {
        fontSize: 14,
        color: '#3C7BF4',
        marginVertical: 2
    },
    problem: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 5,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8'
    },
    problems1: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 5,
        paddingVertical: 5,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 15,
        marginTop: 15
    },
    textProblems: {
        color: '#000',
        fontSize: 14
    },
    textProblems1: {
        color: '#000',
        fontSize: 14
    }
})
