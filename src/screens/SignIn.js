import React from 'react';
import { View, Text,TextInput,Dimensions,Animated,Easing,TouchableHighlight } from 'react-native';
import styled from 'styled-components/native';


const Screen = { //Used in some calculations for screen size
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height
}

let firstSlideX = new Animated.Value(0) //Needed for animating the slides
let secondSlideX = new Animated.Value(500)      

//Styles the main view
const MainContainer = styled.View` 
    flex: 1;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    flex-wrap:wrap;
    background-color: #243342;
`;

class UserInput extends React.Component {  
    render() {
        return( 
            <TextInput style={{ color: "white", height:75,width:400,fontSize:20,
            paddingBottom: Screen.width / 8, paddingLeft: Screen.width / 4}}
            placeholder={this.props.Message} 
            onChange={(event) => saveInfo(event.nativeEvent.text,this.props.Type)} >
            </TextInput>
        )
    }
}

class SubmitBox extends React.Component {
    render() {
        return( 
            <TouchableHighlight underlayColor={"transparent"} style={{
            paddingBottom: Screen.width / 8, paddingLeft: Screen.width / 4}}
            onPress={() => {nextSlide()}}>
                <Text style={{color:'white', fontSize:20,}}>Submit</Text>
            </TouchableHighlight>
        )
    }
}

export default class SignIn extends React.Component { //Main code to be displayed
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
                <View style={{flexDirection: "row"}}>
                    <Animated.View style={{transform: [{translateX: firstSlideX}]}}>
                        <UserInput Type={'Name'} Message={'Enter your name'}/>
                        <UserInput Type={'Email'} Message={'Enter your email address'}/>
                        <SubmitBox />
                    </Animated.View>
                    <Animated.View style={{transform: [{translateX: secondSlideX}]}}>
                        <UserInput Type={'Age'} Message={'Enter your age'}/>
                        <UserInput Type={'Weight'} Message={'Enter your weight'}/>
                        <SubmitBox />
                    </Animated.View>
                </View>
            </MainContainer>
        );
    }
}

function nextSlide() { //Animation code
Animated.timing(
    firstSlideX,
    {
        toValue: -500,
        duration: 200,
        easing: Easing.linear
    }
    ).start() 
Animated.timing(
    secondSlideX,
    {
        toValue: -400,
        duration: 200,
        easing: Easing.linear
    }
    ).start() 
}

function saveInfo(info,type) { //Code for saving the text from TextInput
    if (type === 'Name') {
        try {
            AsyncStorage.setItem('@name:key', info);
        } catch (error) {
        // Error saving data
        }
    }
    if (type === 'Email') {
        try {
            AsyncStorage.setItem('@email:key', info);
        } catch (error) {
        // Error saving data
        }
    }
    if (type === 'Age') {
        try {
            AsyncStorage.setItem('@age:key', info);
        } catch (error) {
        // Error saving data
        }
    }
    if (type === 'Weight') {
        try {
            AsyncStorage.setItem('@weight:key', info);
        } catch (error) {
        // Error saving data
        }
    }
}