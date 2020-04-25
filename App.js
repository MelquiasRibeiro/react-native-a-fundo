/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: '#7159c1',
    },
    footer: {
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
});
export default function App() {
    return (
        <>
            <View style={styles.scrollView}>
                <Text style={styles.footer}>Ok ta funcinando</Text>
            </View>
        </>
    );
}
