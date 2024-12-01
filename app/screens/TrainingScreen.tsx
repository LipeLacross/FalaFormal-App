import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import * as Speech from 'expo-speech';
import { getConectivos } from '../utils/sqlite';

const TrainingScreen = () => {
    const [conectivos, setConectivos] = useState<any[]>([]);
    const [currentFrase, setCurrentFrase] = useState<any>(null);
    const [feedback, setFeedback] = useState('');

    useEffect(() => {
        getConectivos((rows) => {
            setConectivos(rows);
            setCurrentFrase(rows[0]);
        });
    }, []);

    const falarFrase = (frase: string) => {
        Speech.speak(frase, { language: 'pt' });
    };

    const avaliarFala = () => {
        // Simulação de reconhecimento de fala para fins de exemplo
        if (currentFrase.frase_exemplo === 'frase correta') {
            setFeedback('Fala correta!');
        } else {
            setFeedback('Tente novamente.');
        }
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {currentFrase && (
                <>
                    <Text>{currentFrase.tipo}: {currentFrase.conectivo}</Text>
                    <Text>{currentFrase.frase_exemplo}</Text>
                    <Button title="Ouça a frase" onPress={() => falarFrase(currentFrase.frase_exemplo)} />
                    <Button title="Avaliar minha fala" onPress={avaliarFala} />
                    {feedback && <Text>{feedback}</Text>}
                </>
            )}
        </View>
    );
};

export default TrainingScreen;
