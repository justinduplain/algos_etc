export const isPangram = (phrase: string): boolean => {
  
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  phrase = phrase.toLowerCase();

  for (const letter in alphabet) {
        if (!phrase.includes(letter)) {
          return false;
        }
  }
  
  // TODO: optimize with a set and provide early exit. 
  
  return true;
};