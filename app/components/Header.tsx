import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>FalaFormal</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#0a7ea4',
        padding: 20,
        alignItems: 'center',
    },
    title: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default Header;
