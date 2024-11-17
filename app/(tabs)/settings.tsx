import React, { useState } from 'react';
import { View, Text, StyleSheet, Slider } from 'react-native';

export default function SettingsScreen() {
  const [speechRate, setSpeechRate] = useState(1.0);

  return (
      <View style={styles.container}>
        <Text style={styles.title}>Configurações</Text>
        <View style={styles.setting}>
          <Text>Velocidade da Fala: {speechRate.toFixed(1)}</Text>
          <Slider
              style={{ width: '100%' }}
              minimumValue={0.5}
              maximumValue={2.0}
              value={speechRate}
              onValueChange={(value) => setSpeechRate(value)}
          />
        </View>
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
  setting: {
    marginTop: 16,
  },
});
