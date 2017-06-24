import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';

const MainContainer = styled.View`
    flex: 1;
    background-color: red;
    width: ${props => props.small ? 45 : 50}
`;

export default class SignIn extends React.Component {
    render(){
        return(
            <MainContainer small>

            </MainContainer>
        );
    }
}