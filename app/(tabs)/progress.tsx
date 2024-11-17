import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const sampleData = [
    { date: '2024-11-01', original: 'Vou lá amanhã', formal: 'Irei lá amanhã' },
    { date: '2024-11-02', original: 'Tá certo', formal: 'Está certo' },
];

export default function ProgressScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Seu Progresso</Text>
            <FlatList
                data={sampleData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.record}>
                        <Text>Data: {item.date}</Text>
                        <Text>Original: {item.original}</Text>
                        <Text>Formalizado: {item.formal}</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    record: {
        padding: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
    },
});
