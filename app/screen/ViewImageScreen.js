import React from 'react';
import { View, Image , StyleSheet} from 'react-native';
import colors from '../config/colors';
import {MaterialCommunityIcons } from "@expo/vector-icons"
function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons name="close" color="white" size={35}/>
            </View>
            <View style={styles.deleteIcon} >
                <MaterialCommunityIcons name="delete" color="white" size={35}/>
            </View>
            <Image 
                resizeMode="contain"
                style={styles.image} 
                source={require('../assets/chairr.jpeg')}/>            
        </View>
    );
}
const styles = StyleSheet.create({
    closeIcon: {
        position: "absolute",
        top: 40,
        left: 30
    },
    deleteIcon: {
        position: "absolute",
        top: 40,
        right: 30
    },
    container : {
        backgroundColor: "#000",
        flex: 1
    },
    image: {

        width: "100%",
        height: "100%"
    }
})
export default ViewImageScreen;