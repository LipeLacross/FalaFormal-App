import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { processSpeech } from '@/utils/speechProcessing';
import * as Speech from 'expo-speech';

export default function TrainingScreen() {
  const [input, setInput] = useState('');
  const [formalOutput, setFormalOutput] = useState('');

  const handleProcess = () => {
    const formalizedText = processSpeech(input);
    setFormalOutput(formalizedText);
    Speech.speak(formalizedText);
  };

  return (
      <View style={styles.container}>
        <Text style={styles.title}>Treine sua Fala Formal</Text>
        <TextInput
            style={styles.input}
            placeholder="Digite algo informal..."
            value={input}
            onChangeText={setInput}
        />
        <Button title="Converter e Falar" onPress={handleProcess} />
        {formalOutput ? <Text style={styles.output}>Formalizado: {formalOutput}</Text> : null}
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
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
    marginBottom: 16,
  },
  output: {
    marginTop: 16,
    fontSize: 16,
    fontStyle: 'italic',
  },
});
