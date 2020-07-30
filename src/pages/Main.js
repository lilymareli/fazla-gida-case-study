import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { SafeAreaView, View, Text, Button, FlatList, Alert, Image, Pressable } from 'react-native'

const Main = (props) => {

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
                picture: item.picture.medium,
                mobile: item.cell,
                phone: item.phone,
                gender: item.gender,
                })}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={{ uri: `${item.picture.thumbnail}` }}
                            style={{ width: 50, height: 50, borderRadius: 50 }} />
                        <View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text>{item.name.first} </Text>
                                <Text>{item.name.last} </Text>
                            </View>
                            <Text> {item.email} </Text>
                        </View>
                    </View>
                    <Text> {item.gender} </Text>
                </View>
            </Pressable>
        )
    }

    return (
        <SafeAreaView>
            <View>
                <Text>Random Users</Text>
                <FlatList
                    data={userList}
                    renderItem={renderItem}
                    //index'i string'e çeviriyoruz çünkü flatlist key olarak yalnızca string kabul ediyor.
                    keyExtractor={(item, index) => index.toString()}
                    refreshing={loading}
                    onRefresh={fetchData}
                />
                <Text>Scroll Down to Refresh!</Text>
            </View>
        </SafeAreaView>
    )
}

export { Main }