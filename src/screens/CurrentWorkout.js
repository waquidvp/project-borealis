import React from 'react';
import { View, Text } from 'react-native';

export default class CurrentWorkout extends React.Component {    
    static navigationOptions = {
        title: 'Current Workout',
    }
    
    render(){
        return(
            <View>
                <Text>This is the Current Workout page</Text>
            </View>
        ); 
    }
}