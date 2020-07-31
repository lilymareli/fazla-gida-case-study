import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { SafeAreaView, View, Text, Button, FlatList, Alert, Image, Pressable, ImageBackground, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../styles';

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
        axios.get("https://randomuser.me/api/?results=10")
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
                    //instagram&twitter kullanıcı adı gibi kullanmak üzere username aldım
                    username: item.login.username,
                    city: item.location.city,
                    country: item.location.country,
                })}>
                <View style={styles.Main.itemContainer}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={{ uri: `${item.picture.thumbnail}` }}
                            style={styles.Main.itemImage} />
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
            <ImageBackground source={require("../assets/sky.jpg")} style={styles.Main.imageBackg}>
                <View style={{ flex: 1, alignItems: 'center' }}>

                    <View style={styles.Main.descriptionContainer}>
                        <Icon name="star-half-outline" size={20} color="#ffffff" />
                        <Text style={styles.Main.descriptionText}>Find Your Random Star!</Text>
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
                    <Text style={styles.Main.descriptionText}>Scroll Down to Keep Searching!</Text>

                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export { Main }