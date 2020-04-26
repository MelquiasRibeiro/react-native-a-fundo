/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import '../config/ReactotronConfig';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: '#7159c1',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    footer: {
        flex: 1,
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
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
