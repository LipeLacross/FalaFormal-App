export const processSpeech = (speechText: string): string => {
  const informalToFormalMap: { [key: string]: string } = {
    'vou': 'irei',
    'quero': 'desejo',
    'tá': 'está',
    'pra': 'para',
    'você': 'o senhor(a)',
    'gente': 'nós',
  };

  let formalSpeech = speechText.trim().toLowerCase();

  Object.entries(informalToFormalMap).forEach(([informal, formal]) => {
    const regex = new RegExp(`\\b${informal}\\b`, 'g');
    formalSpeech = formalSpeech.replace(regex, formal);
  });

  return formalSpeech.charAt(0).toUpperCase() + formalSpeech.slice(1);
};
