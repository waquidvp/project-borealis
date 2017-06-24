import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Progress extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Progess',
        tabBarIcon: () => (<Icon size={24} color='rgba(255,255,255,0.7)' name='trending-up' />)
    }    
    
    render(){
        return(
            <View>
                <Text>This is the progress page</Text>
            </View>
        ); 
    }
}