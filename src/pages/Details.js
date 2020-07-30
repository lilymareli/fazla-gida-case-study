import React, {useEffect, useState} from 'react'
import {SafeAreaView, View, Text, Button, Linking} from 'react-native'

const Details = (props) => {
    const facebook = `https://www.facebook.com/search/top/?q=${props.route.params.name}%20${props.route.params.surname}`
    return(
    <SafeAreaView>
        <View>
            <Text>Details</Text>
            <Text> {props.route.params.name} </Text>
        <Button title="facebook" onPress={() => Linking.openURL(facebook) } />

        

        </View>
    </SafeAreaView>
    )
}

export {Details}