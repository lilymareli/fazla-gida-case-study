import React, { useEffect, useState } from 'react'
import { SafeAreaView, View, Text, Button, Linking, Image, Alert, ImageBackground, Dimensions, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../styles'

const UserDetail = (props) => {
    const WIDTH = Dimensions.get("window").width
    const HEIGHT = Dimensions.get("window").height

    /*
name,surname,onPressEmail,email,onPressCall,phone,onPressMap,location,
gender,onPressFacebook,onPressInstagram,onPressTwitter

    */
    return (
        <View
        style={{
            width: WIDTH / 1.3
        }}
        >
            <View style={styles.Details.textContainer}>
                <Text style={{ fontSize: 21 }} >{props.name} </Text>
                <Text style={{ fontSize: 21 }} >{props.surname}</Text>
            </View>

            <View style={styles.Details.contactContainer} >

                <View style={{ alignItems: 'flex-start' }} >

                    <Pressable
                        onPress={props.onPressEmail}
                        style={styles.Details.contacts}
                    >
                        <Icon name="mail-outline" size={20} style={{ alignSelf: 'center' }} />
                        <Text> {props.email}</Text>
                    </Pressable>

                    <Pressable
                        onPress={props.onPressCall}
                        style={styles.Details.contacts} >
                        <Icon name="call-outline" size={20} style={{ alignSelf: 'center' }} />
                        <Text> {props.phone}</Text>
                    </Pressable>

                    <Pressable
                        onPress={props.onPressMap}
                        style={styles.Details.contacts} >
                        <Icon name="location-outline" size={20} style={{ alignSelf: 'center' }} />
                        <Text>{props.city}, </Text>
                        <Text>{props.country}</Text>
                    </Pressable>

                </View>

                {
                    props.gender == "female" ?
                        <Icon name="female-outline" size={30} style={{ alignSelf: 'center' }} />
                        :
                        <Icon name="male-outline" size={30} style={{ alignSelf: 'center' }} />
                }

            </View>

            <View style={styles.Details.logoContainer}>
                <Icon
                    name="logo-facebook"
                    size={30}
                    color="#3b5998"
                    onPress={props.onPressFacebook}
                    style={{ margin: 5 }}
                />
                <Icon
                    name="logo-instagram"
                    size={30}
                    color="#E1306C"
                    onPress={props.onPressInstagram}
                    style={{ margin: 5 }}
                />
                <Icon
                    name="logo-twitter"
                    size={30}
                    color="#00acee"
                    onPress={props.onPressTwitter}
                    style={{ margin: 5 }}
                />
            </View>
        </View>
    )
}

export default UserDetail