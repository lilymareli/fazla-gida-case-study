import React, { useEffect, useState } from 'react'
import { SafeAreaView, View, Text, Button, Linking, Image, Alert, ImageBackground, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

const Details = (props) => {
    const WIDTH = Dimensions.get("window").width
    const HEIGHT = Dimensions.get("window").height
    function pressFacebook() {
        const facebook = `https://www.facebook.com/search/top/?q=${props.route.params.name}%20${props.route.params.surname}`
        facebook == null ?
            Alert.alert("Fazla Gıda", "Facebook bulunamadı!")
            :
            Linking.openURL(facebook)
    }

    function pressInstagram() {
        const instagram = `https://www.instagram.com/${props.route.params.username}/`
        instagram == null ?
            Alert.alert("Fazla Gıda", "Instagram bulunamadı!")
            :
            Linking.openURL(instagram)
    }

    /*

            name: item.name.first,
            surname: item.name.last,
            mail: item.email,
            picture: item.picture.medium,
            mobile: item.cell,
            phone: item.phone,
            gender: item.gender,
            username: item.login.username
            city: item.city,
            country: item.country

*/
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground source={require("../assets/night.png")}
                style={{
                    width: WIDTH,
                    height: HEIGHT / 3,
                    flex: 1
                }} >
                <View>

                    <Icon name="chevron-back-outline" size={35} color="#ffffff"
                        onPress={() => props.navigation.goBack()}
                        style={{ margin: 10, marginBottom: 30 }}
                    />
                    <View style={{
                        marginTop: HEIGHT / 6,
                        width: WIDTH / 1.1,
                        backgroundColor: 'rgba(255,255,255, 1)',
                        borderRadius: 5,
                        alignSelf: 'center',
                        alignItems: 'center',
                    }}
                    >
                        <Image source={{ uri: (`${props.route.params.picture}`) }}
                            style={{
                                height: 200, width: 200, borderRadius: 200, alignSelf: 'center',
                                position: 'absolute', top: -100,
                            }} />

                        <View style={{
                            flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
                            marginTop: 120, marginBottom: 10, 
                        }}>
                            <Text style={{ fontSize: 21 }} >{props.route.params.name} </Text>
                            <Text style={{ fontSize: 21 }}>{props.route.params.surname}</Text>
                        </View>
                        <View style={{ 
                            flexDirection: 'row', alignItems: 'center', 
                            justifyContent: 'space-between'

                            }} >

                            <View style={{ alignItems: 'flex-start' }} >
                                <View style={{ margin: 5, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <Icon name="mail-outline" size={20} style={{ alignSelf: 'center' }} />
                                    <Text> {props.route.params.mail} </Text>
                                </View>
                                <View style={{ margin: 5, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <Icon name="call-outline" size={20} style={{ alignSelf: 'center' }} />
                                    <Text> {props.route.params.phone} </Text>
                                </View>
                                <View style={{ margin: 5, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

                                    <Icon name="location-outline" size={20} style={{ alignSelf: 'center' }} />

                                    <Text>{props.route.params.city}, </Text>
                                    <Text>{props.route.params.country}</Text>
                                </View>
                            </View>
                            {
                                props.route.params.gender == "female" ?
                                    <Icon name="female-outline" size={30} style={{ alignSelf: 'center' }} />
                                    :
                                    <Icon name="male-outline" size={30} style={{ alignSelf: 'center' }} />
                            }
                        </View>
                        <Button title="facebook" onPress={() => pressFacebook} />
                        <Button title="facebook" onPress={() => pressFacebook} />
                        <Button title="facebook" onPress={() => pressFacebook} />
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView >
    )
}

export { Details }