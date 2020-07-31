import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'

const WIDTH = Dimensions.get("window").width
const HEIGHT = Dimensions.get("window").height

const styles = {
    Main: StyleSheet.create({
        descriptionContainer: {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center'
        },
        descriptionText: {
            margin: 5,
            marginVertical: 10,
            color: '#ffffff',
            fontSize: 16
        },
        itemContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderRadius: 5,
            marginVertical: 5,
            backgroundColor: 'rgba(255,255,255, 0.8)',
            padding: 5,
            width: WIDTH / 1.2,
            height: HEIGHT / 14
        },
        itemImage: { 
            width: 50, 
            height: 50, 
            borderRadius: 50, 
            marginHorizontal: 5 
        },
        imageBackg: { 
            flex: 1, 
            width: WIDTH, 
            height: HEIGHT 
        },
    }),

    Details: StyleSheet.create({
        imageBackg: {
            width: WIDTH,
            //    height: HEIGHT / 3,
            flex: 1
        },
        container: {
            marginTop: HEIGHT / 6,
            width: WIDTH / 1.1,
            height: HEIGHT / 1.5,
            backgroundColor: 'rgba(255,255,255, 1)',
            borderRadius: 5,
            alignSelf: 'center',
            alignItems: 'center',

        },
        image: {
            height: 200, 
            width: 200, 
            borderRadius: 200, 
            alignSelf: 'center',
            position: 'absolute', 
            top: -100,
        },
        textContainer: {
            flexDirection: 'row', 
            alignItems: 'center', 
            justifyContent: 'center',
            marginTop: 120, 
            marginBottom: 10,
        },
        contactContainer: {
            flexDirection: 'row', 
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        contacts: { 
            margin: 5, 
            flexDirection: 'row', 
            justifyContent: 'center', 
            alignItems: 'center' 
        },
        logoContainer: {
            flexDirection: 'row', 
            justifyContent: 'space-between',
            width: 170, 
            alignItems: 'center', 
            marginTop: 40
        },
    })
}

export default styles
