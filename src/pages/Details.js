import React, { useEffect, useState } from 'react'
import { SafeAreaView, View, Text, Button, Linking, Image, Alert } from 'react-native'

const Details = (props) => {
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
   
    return (
        <SafeAreaView>
            <View>
                <Text>Details</Text>
                <Image source={{ uri: (`${props.route.params.picture}`) }}
                style={{height: 200, width: 200, borderRadius:200}} />
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <Text> {props.route.params.name} </Text>
            <Text> {props.route.params.surname} </Text>
                </View>

            <Button title="facebook" onPress={() => pressFacebook} />

        

        </View>
    </SafeAreaView >
    )
}

export { Details }