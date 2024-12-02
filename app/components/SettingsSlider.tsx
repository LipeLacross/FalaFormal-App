import React from 'react';
import { View, Text, Slider, StyleSheet } from 'react-native';

interface SettingsSliderProps {
    value: number;
    onValueChange: (value: number) => void;
}

const SettingsSlider = ({ value, onValueChange }: SettingsSliderProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Velocidade da fala</Text>
            <Slider
                style={styles.slider}
                minimumValue={0.1}
                maximumValue={2}
                value={value}
                onValueChange={onValueChange}
                step={0.1}
            />
            <Text style={styles.value}>{value.toFixed(1)}x</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 10,
    },
    slider: {
        width: '100%',
    },
    value: {
        textAlign: 'center',
        fontSize: 16,
    },
});

export default SettingsSlider;
