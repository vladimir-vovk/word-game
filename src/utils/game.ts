import { MIN_WIDTH, SCREEN_RATIO, Spacing } from 'src/constants'
import { WORD_LENGTH, WORDS } from 'src/constants/game'

export const initWords = (): string[] => Array(WORD_LENGTH + 1).fill('')

export type LetterType = 'empty' | 'incorrect' | 'misplaced' | 'correct'
type LetterTypeArgs = {
  letter: string
  index: number
  correctWord: string
}

export const letterType = ({ letter, index, correctWord }: LetterTypeArgs): LetterType => {
  if (!letter || letter === ' ') {
    return 'empty'
  }

  if (!correctWord.includes(letter)) {
    return 'incorrect'
  }

  if (correctWord[index] === letter) {
    return 'correct'
  }

  return 'misplaced'
}

export type UsedLettersTypes = {
  [key: string]: LetterType
}

type UsedLettersTypesArgs = {
  words: string[]
  correctWord: string
}

export const usedLettersTypes = ({
  words,
  correctWord
}: UsedLettersTypesArgs): UsedLettersTypes => {
  const lettersTypes: UsedLettersTypes = {}

  words.forEach((word: string) => {
    word.split('').forEach((letter, i) => {
      const nextType = letterType({ letter, index: i, correctWord })
      const currentType = lettersTypes[letter]

      if (!currentType || currentType === 'empty') {
        lettersTypes[letter] = nextType
      } else if (currentType === 'incorrect' && ['misplaced', 'correct'].includes(nextType)) {
        lettersTypes[letter] = nextType
      } else if (currentType === 'misplaced' && nextType === 'correct') {
        lettersTypes[letter] = nextType
      }
    })
  })

  return lettersTypes
}

export const random = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)]

export const happyEmojie = (): string =>
  random(['🥳', '🎉', '🌟', '😻', '🌈', '🐟', '🎏', '☀️', '😺', '✨', '🐶', '🐈'])

export const sadEmojie = (): string =>
  random(['🥲', '😭', '🥹', '🙀', '😿', '💔', '🌧️', '😾', '❤️‍🩹', '😪'])

export const randomWord = (): string => {
  return random(WORDS)
}

type PluralArgs = {
  n: number
  singular: string
  plural: string
}

export const plural = ({ n, singular, plural }: PluralArgs): string =>
  `${n} ${n === 1 ? singular : plural}`

export const letterSize = (screenHeight: number): number => {
  const width = Math.max(MIN_WIDTH, screenHeight * SCREEN_RATIO)
  const size = Math.floor((width - 2 * Spacing.md - Spacing.sm * WORD_LENGTH) / WORD_LENGTH)
  return size
}
