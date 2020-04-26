import React from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';

export default function User() {
    return (
        <View>
            <Text>Tela de user</Text>
        </View>
    );
}
User.navigationOptions = {
    title: 'home',
};
