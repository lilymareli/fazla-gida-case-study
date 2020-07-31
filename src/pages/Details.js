import React, { useEffect, useState } from 'react'
import { SafeAreaView, View, Text, Button, Linking, Image, Alert, ImageBackground, Dimensions, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../styles'
import UserDetail from '../components/UserDetail'

const Details = (props) => {

    const WIDTH = Dimensions.get("window").width
    const HEIGHT = Dimensions.get("window").height

    function pressCall() {
        const phone = "tel://" + props.route.params.phone
        Linking.openURL(phone)
    }

    function pressEmail() {
        const email = "mailto:" + props.route.params.email
        Linking.openURL(email)
    }

    function pressMap() {
        const map = `https://www.google.com/maps/search/?api=1&query=${props.route.params.city},+${props.route.params.country}`
        Linking.openURL(map)
    }

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

    function pressTwitter() {
        const twitter = `https://twitter.com/${props.route.params.username}`
        twitter == null ?
            Alert.alert("Fazla Gıda", "Twitter bulunamadı!")
            :
            Linking.openURL(twitter)
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <ImageBackground
                source={require("../assets/stars.png")}
                style={styles.Details.imageBackg}
            >
                <Image
                    source={require("../assets/lights.png")}
                    style={{ position: "absolute" }}
                />

                <View>
                    <Icon
                        name="chevron-back-outline"
                        size={35}
                        color="#ffffff"
                        onPress={() => props.navigation.goBack()}
                        style={{
                            margin: 10,
                            marginBottom: 30
                        }}
                    />
                    <View style={styles.Details.container} >
                        <Image
                            source={{ uri: (`${props.route.params.picture}`) }}
                            style={styles.Details.image}
                        />
                        <UserDetail
                            name={props.route.params.name}
                            surname={props.route.params.surname}
                            email={props.route.params.mail}
                            phone={props.route.params.phone}
                            city={props.route.params.city}
                            country={props.route.params.country}
                            gender={props.route.params.gender}
                            onPressEmail={() => pressEmail()}
                            onPressCall={() => pressCall()}
                            onPressMap={() => pressMap()}
                            onPressFacebook={() => pressFacebook()}
                            onPressInstagram={() => pressInstagram()}
                            onPressTwitter={() => pressTwitter()}
                        />

                    </View>

                </View>
            </ImageBackground>
        </SafeAreaView >
    )
}

export { Details }