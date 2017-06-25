import React from 'react';
import { View, Text, TextInput, Dimensions } from 'react-native';
import styled from 'styled-components/native';

const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height
}

const MainContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    flex-wrap:wrap;
    background-color: #243342;
`;

export default class SignIn extends React.Component {
    static navigationOptions = {
        title: 'Sign Up',
    }
    
    render(){
        return(
            <MainContainer>
                <Text style={{ color: "white", fontSize:40,
                marginBottom: 100,
                paddingLeft: Screen.width / 4}}>
                Fitness Riot
                </Text>
            </MainContainer>
        );
    }
}