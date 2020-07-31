import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { SafeAreaView, View, Text, Button, FlatList, Alert, Image, Pressable, ImageBackground, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

const Main = (props) => {
    const WIDTH = Dimensions.get("window").width
    const HEIGHT = Dimensions.get("window").height

    const [loading, setLoading] = useState(false)
    const [userList, setUserList] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    //fetchData fonksiyonunu direkt useEffect'e yazamıyorum çünkü asenkron fonksiyon yazdırmıyor.
    //O sebeple ayrı bir fonksiyon yazıp useEffect ile çağırdım.
    const fetchData = async () => {
        setLoading(true)
        axios.get("https://randomuser.me/api/?results=9")
            .then(response => {
                setUserList(response.data.results)
                setLoading(false)
            })
            .catch(error => {
                setLoading(false)
                Alert.alert("Fazla Gıda", "Bir hata oluştu!")
            })

    }

    const renderItem = ({ item }) => {

        return (
            <Pressable onPress={() => props.navigation.navigate("Details",
                {
                    name: item.name.first,
                    surname: item.name.last,
                    mail: item.email,
                    picture: item.picture.large,
                    mobile: item.cell,
                    phone: item.phone,
                    gender: item.gender,
                    //instagram kullanıcı adı gibi kullanmak üzere username aldım
                    username: item.login.username,
                    city: item.location.city,
                    country: item.location.country,
                })}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    borderWidth: 1,
                    borderColor: 'gray',
                    borderRadius: 5,
                    marginVertical: 5,
                    backgroundColor: 'rgba(255,255,255, 0.8)',
                    padding: 5,
                    width: WIDTH /1.2,
                }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={{ uri: `${item.picture.thumbnail}` }}
                            style={{ width: 50, height: 50, borderRadius: 50, marginHorizontal: 5 }} />
                        <View style={{ marginHorizontal: 5 }}>
                            <View style={{ flexDirection: 'row', }}>
                                <Text style={{fontSize: 16}}>{item.name.first} </Text>
                                <Text style={{fontSize: 16}}>{item.name.last} </Text>
                            </View>
                            <Text>{item.email}</Text>
                        </View>
                    </View>
                    {
                        item.gender == "female" ?
                            <Icon name="female-outline" size={30} style={{alignSelf: 'center'}} />
                            :
                            <Icon name="male-outline" size={30} style={{alignSelf: 'center'}} />

                    }

                </View>
            </Pressable>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
            <ImageBackground source={require("../assets/sky.jpg")}
                style={{
                    flex: 1,
                    width: WIDTH,
                    height: HEIGHT
                }}>
                <View style={{ flex: 1, alignItems: 'center' }}>

                    <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
                        <Icon name="star-half-outline" size={20} color="#ffffff" />
                        <Text style={{ margin: 5, marginVertical: 10, color: '#ffffff', fontSize: 16 }}>Find Your Random Star!</Text>
                        <Icon name="star-half-outline" size={20} color="#ffffff"/>
                    </View>
                    <FlatList
                        data={userList}
                        renderItem={renderItem}
                        //index'i string'e çeviriyoruz çünkü flatlist key olarak yalnızca string kabul ediyor.
                        keyExtractor={(item, index) => index.toString()}
                        refreshing={loading}
                        onRefresh={fetchData}
                    />
                    <Icon name="arrow-down-outline" size={20} color="#ffffff" />
                    <Text style={{ margin: 5, marginVertical: 10, color: '#ffffff', fontSize: 16 }}>Scroll Down to Keep Searching!</Text>

                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export { Main }