



export const createWordGuessedSoFar = (word: string, guesses: string[]): string => {
  let wordGuessedSoFar = ''

  for (let i = 0; i < word.length; i++) {
    const letter = word[i]

    if (guesses.includes(letter)) {
      wordGuessedSoFar += letter
    } else {
      wordGuessedSoFar += '_'
    }    
  }

  return wordGuessedSoFar
}