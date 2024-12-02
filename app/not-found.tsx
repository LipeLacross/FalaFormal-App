import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NotFoundScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Página não encontrada</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        color: '#ff0000',
    },
});

export default NotFoundScreen;
