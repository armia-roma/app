import React from 'react';
import ListItem from './../components/ListItem'
import { FlatList,StyleSheet, View } from 'react-native';
import Screen from '../components/Screen';
import ListItemSeparator from '../components/ListItemSeparator';
const messages = [
    {
        id: 1,
        title: "T1",
        description: 'D1',
        image: require('../assets/person.jpg')
    },

    {
        id: 2,
        title: "T2",
        description: 'D2',
        image: require('../assets/person.jpg')
    }
]
function MessagesScreen(props) {
    return (
        <Screen>
            <FlatList 
                data={messages} 
                keyExtractor={message => message.id.toString( )}
                renderItem={({ item }) => 
                    <ListItem 
                        title={item.title}
                        subTitle={item.description} 
                        image={item.image} 
                        onPress={() => console.log(item)}/> }  
                        
                ItemSeparatorComponent={ListItemSeparator}
                        />
        </Screen> 
    );
}
const styles = StyleSheet.create({
    
})
export default MessagesScreen;