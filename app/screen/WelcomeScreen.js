import React from 'react';
import { ImageBackground,Text, Image, StyleSheet, View } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
            source={require('../assets/back.jpg')}
            style={styles.background}
        >
            <View style={styles.logoContainer}>
                <Image 
                    source={require('../assets/logo.png')}
                    style={styles.logo}></Image>
                <Text style={styles.text}>Sell What You Don't Need</Text>
            </View>
            <View style={styles.loginButton }/>
            <View style={styles.registerButton }/>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
        background: {
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center" 
        },
        loginButton: {
            width: "100%",
            height: 70,
            backgroundColor: "#fc5c65",
        },
        registerButton: {
            width: "100%",
            height: 70,
            backgroundColor: "#4ecdc4"
        },
        logo: {
            width: 200,
            height: 200,
            backgroundColor: "#4ecdc4"

        },logoContainer: {
                position: 'absolute',
                top: 70, 
                alignItems: "center"
        },
        text: {
            backgroundColor: "#4ecdc4",
            position: 'absolute',
            bottom: 8
        }
})

export default WelcomeScreen;