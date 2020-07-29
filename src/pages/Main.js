import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { SafeAreaView, View, Text, Button, FlatList, Alert, Image } from 'react-native'

const Main = (props) => {

    const [loading, setLoading] = useState(false)
    const [userList, setUserList] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        setLoading(true)
        axios.get("https://randomuser.me/api/?results=10")
            .then(response => {
                setUserList(response.data.results)
                setLoading(false)

            })
            .catch(error => {
                setLoading(false)
                Alert.alert("My App", "Bir hata oluştu!")
            })

    }

    const renderItem = ({ item }) => {

        return (
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
<View style={{flexDirection: 'row'}}>
                <Image source={{ uri: `${item.picture.thumbnail}` }} style={{ width: 50, height: 50, borderRadius: 50 }} />
               <View>

               <View style={{flexDirection: 'row'}}>
                <Text>{item.name.first} </Text>
                <Text>{item.name.last} </Text>
               </View>
                <Text> {item.email} </Text>
               </View>
</View>

                <Text> {item.gender} </Text>
            </View>
        )
    }

    return (
        <SafeAreaView>
            <View>
                <Text>Random Users</Text>
                <Button title="Detay" onPress={() => props.navigation.navigate("Details")} />
                <FlatList
                    loading={loading}
                    data={userList}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </SafeAreaView>
    )
}

export { Main }