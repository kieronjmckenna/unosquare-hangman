import { createWordGuessedSoFar } from "./create-word-guessed-so-far"

describe('createWordGuessedSoFar test suite', () => {
  test('createWordGuessedSoFar', () => {
    expect(createWordGuessedSoFar('hello', ['e', 'l'])).toBe('_ell_')
  })
})