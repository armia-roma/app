import React from 'react';
import { ImageBackground,Text, Image, StyleSheet, View } from 'react-native';
import AppButton from '../components/AppButton';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
        blurRadius={10}
            source={require('../assets/back.jpg')}
            style={styles.background}
        >
            <View style={styles.logoContainer}>
                <Image 
                    source={require('../assets/logo.png')}
                    style={styles.logo}></Image>
                <Text style={styles.text}>Sell What You Don't Need</Text>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title="Login"/>
                <AppButton title="Register" color='secondary'/>

            </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
        background: {
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center" 
        },
        // loginButton: {
        //     width: "100%",
        //     height: 70,
        //     backgroundColor: "#fc5c65",
        // },
        // registerButton: {
        //     width: "100%",
        //     height: 70,
        //     backgroundColor: "#4ecdc4"
        // },
        logo: {
            width: 200,
            height: 200,
            backgroundColor: "#4ecdc4",
            borderRadius: 30,

        },logoContainer: {
                position: 'absolute',
                top: 70, 
                alignItems: "center"
        },
        text: {
            backgroundColor: "#4ecdc4",
            position: 'absolute',
            bottom: 8,
            fontSize: 15,
            fontWeight: "600"
        },
        buttonContainer: {
            padding: 20,
            width: "100%"
        }
})

export default WelcomeScreen;