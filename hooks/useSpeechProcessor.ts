import { useState } from 'react';
import { processSpeech } from '@/utils/speechProcessing';
import * as Speech from 'expo-speech';

export default function useSpeechProcessor() {
    const [transcript, setTranscript] = useState('');

    const processAndSpeak = (text: string): string => {
        const formalizedText = processSpeech(text);
        Speech.speak(formalizedText);
        setTranscript(formalizedText);
        return formalizedText;
    };

    return { transcript, processAndSpeak };
}
