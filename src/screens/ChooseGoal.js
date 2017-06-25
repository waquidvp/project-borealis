import React from 'react';
import { View, Text } from 'react-native';

export default class ChooseGoal extends React.Component {
    static navigationOptions = {
        title: 'ChooseGoal',
    }
    
    render() {
        return(
            <View>
                <Text>Choose your goal here</Text>
            </View>
        );
    }
}