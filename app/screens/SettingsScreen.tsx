import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SettingsSlider from '../components/SettingsSlider';

const SettingsScreen = () => {
    const [speed, setSpeed] = useState(1.0);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Configurações</Text>
            <SettingsSlider value={speed} onValueChange={setSpeed} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});

export default SettingsScreen;
