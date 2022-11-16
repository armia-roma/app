import React from "react";
import { View } from "react-native";
import AppButton from "../components/AppButton";
function TestPage() {
    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems:  "center"
        }}>  
            <AppButton title="login" onPress={() => console.log("Press")}/>
        </View>
    )
}
export default TestPage;