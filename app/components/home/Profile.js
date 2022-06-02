import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Avatar } from 'react-native-elements'
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
const Profile = ({ navigation: { goBack }, navigation }) => {
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
                <Icon
                    style={styles.icon}
                    name='arrow-left'
                    onPress={() => goBack()}
                    title='Go back from Home'
                />
                <Text style={styles.text}>Thông tin cá nhân</Text>
            </View>
            <View style={styles.viewInformation}>
                <View style={styles.view}>
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
                <View style={styles.viewText}>
                    <Text style={styles.text1}>TuanAT</Text>
                    <Text style={styles.text2}>0363520471</Text>
                    <TouchableOpacity>
                        <Text style={styles.text3}>Chỉnh sửa thông tin</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {list.map((item, index) => (
                <TouchableOpacity>
                    <View style={styles.problem}>
                        <Text style={styles.textProblems}>{item.name}</Text>
                        <Icon style={styles.iconHandling} name='angle-right' size={15} />
                    </View>
                </TouchableOpacity>
            ))}
            <TouchableOpacity>
                <View style={styles.problems1}>
                    <Text
                        style={styles.textProblems1}
                        onPress={() => {
                            navigation.navigate('Login')
                        }}
                    >
                        Đăng xuất
                    </Text>
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
        paddingHorizontal: 80
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
