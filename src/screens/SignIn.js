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

const InputBox = styled.TextInput`
    color: white;
    fontSize:20;
`;

class UserInput extends React.Component {
    render() {
        return( 
            <InputBox style={{ color: "white",
            paddingBottom: Screen.width / 8, paddingLeft: Screen.width / 4}}
            placeholder={this.props.Message} 
            onChange={(text) => this.setState({text})} >
            </InputBox>
        )
    }
}

export default class SignIn extends React.Component {
    static navigationOptions = {
        title: 'Sign In',
    }
    
    render(){
        return(
            <MainContainer>
                <Text style={{ color: "white", fontSize:40,
                marginBottom: 100,
                paddingLeft: Screen.width / 4}}
                >Fitness Riot</Text>
                <View>
                    <UserInput Message={'Enter your email address'}/>
                    <UserInput Message={'Enter a password'}/>
                    <UserInput Message={'Enter your password again'}/>
                </View>
            </MainContainer>
        );
    }
}