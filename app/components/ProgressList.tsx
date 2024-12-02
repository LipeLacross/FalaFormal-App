import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ProgressListProps {
    progress: number;
}

const ProgressList = ({ progress }: ProgressListProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Progresso: {progress}%</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#f1f1f1',
        borderRadius: 5,
        marginTop: 20,
    },
    text: {
        fontSize: 18,
    },
});

export default ProgressList;
