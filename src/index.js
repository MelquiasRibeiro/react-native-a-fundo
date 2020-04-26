import 'react-native-gesture-handler';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import * as React from 'react';
import './config/ReactotronConfig';
import { StatusBar } from 'react-native';
import Routes from './routes';

export default function App() {
    return (
        <>
            <StatusBar backgroundColor="#7159c1" barStyle="light-content" />
            <Routes />
        </>
    );
}
