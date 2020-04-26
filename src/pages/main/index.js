import React from 'react';
import { View, Text } from 'react-native';
import { Container, Texto } from './styles';

export default function Main() {
    return (
        <Container>
            <Texto>Tela Main</Texto>
        </Container>
    );
}

Main.navigationOptions = {
    title: 'home',
};
