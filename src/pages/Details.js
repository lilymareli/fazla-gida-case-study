import React, { useEffect, useState } from 'react'
import { SafeAreaView, View, Text, Button, Linking, Image, Alert, ImageBackground, Dimensions, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../styles'

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

    function pressCall() {
        const phone = "tel://" + props.route.params.phone
        Linking.openURL(phone)
    }

    function pressInstagram() {
        const instagram = `https://www.instagram.com/${props.route.params.username}/`
        instagram == null ?
            Alert.alert("Fazla Gıda", "Instagram bulunamadı!")
            :
            Linking.openURL(instagram)
    }

    function pressTwitter() {
        const twitter = `https://twitter.com/${props.route.params.username}`
        twitter == null ?
            Alert.alert("Fazla Gıda", "Twitter bulunamadı!")
            :
            Linking.openURL(twitter)
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground source={require("../assets/stars.png")}
                style={styles.Details.imageBackg} >
                <Image source={require("../assets/lights.png")}
                    style={{ position: "absolute" }}
                />
                <View>

                    <Icon name="chevron-back-outline" size={35} color="#ffffff"
                        onPress={() => props.navigation.goBack()}
                        style={{
                            margin: 10,
                            marginBottom: 30
                        }}
                    />
                    <View style={styles.Details.container} >
                        <Image source={{ uri: (`${props.route.params.picture}`) }}
                            style={styles.Details.image} />

                        <View style={styles.Details.textContainer}>
                            <Text style={{ fontSize: 21 }} >{props.route.params.name} </Text>
                            <Text style={{ fontSize: 21 }}>{props.route.params.surname}</Text>
                        </View>
                        <View style={styles.Details.contactContainer} >

                            <View style={{ alignItems: 'flex-start' }} >
                                <Pressable
                                    onPress={() => Linking.openURL("mailto:" + props.route.params.email)}
                                    style={styles.Details.contacts} >
                                    <Icon name="mail-outline" size={20} style={{ alignSelf: 'center' }} />
                                    <Text> {props.route.params.mail} </Text>
                                </Pressable>
                                <Pressable
                                    onPress={() => pressCall()}
                                    style={styles.Details.contacts} >
                                    <Icon name="call-outline" size={20} style={{ alignSelf: 'center' }} />
                                    <Text> {props.route.params.phone} </Text>
                                </Pressable>
                                <Pressable
                                    onPress={() => Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${props.route.params.city},+${props.route.params.country}`)}
                                    style={styles.Details.contacts} >
                                    <Icon name="location-outline" size={20} style={{ alignSelf: 'center' }} />

                                    <Text>{props.route.params.city}, </Text>
                                    <Text>{props.route.params.country}</Text>
                                </Pressable>
                            </View>
                            {
                                props.route.params.gender == "female" ?
                                    <Icon name="female-outline" size={30} style={{ alignSelf: 'center' }} />
                                    :
                                    <Icon name="male-outline" size={30} style={{ alignSelf: 'center' }} />
                            }
                        </View>
                        <View style={styles.Details.logoContainer}>
                            <Icon name="logo-facebook" size={30} color="#3b5998" onPress={() => pressFacebook()}
                                style={{ margin: 5 }} />
                            <Icon name="logo-instagram" size={30} color="#E1306C" onPress={() => pressInstagram()}
                                style={{ margin: 5 }} />
                            <Icon name="logo-twitter" size={30} color="#00acee" onPress={() => pressTwitter()}
                                style={{ margin: 5 }} />
                        </View>

                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView >
    )
}

export { Details }