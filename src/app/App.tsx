import { ReactElement, useState } from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import { WORD_LENGTH } from 'src/constants'
import { GameOver } from 'src/game-over'
import { GuessSlots } from 'src/guess-slots'
import { Keyboard } from 'src/keyboard'
import { ThemeProvider } from 'src/theme'
import { Text } from 'src/ui'
import { initWords, randomWord } from 'src/utils'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  text: {
    marginBottom: 8
  }
})

export default function App(): ReactElement {
  const [correctWord, setCorrectWord] = useState(randomWord())
  const [words, setWords] = useState<string[]>(initWords())
  const [row, setRow] = useState(0)
  const [isGameOver, setGameOver] = useState(false)
  const [isPlayerWin, setPlayerWin] = useState(false)

  const onPressKey = (key: string) => {
    const word = words[row]
    if (!word.length && key === 'backspace') {
      return
    }

    if (word.length !== WORD_LENGTH && key === 'enter') {
      return
    }

    if (word.length === WORD_LENGTH && !['enter', 'backspace'].includes(key)) {
      return
    }

    if (word.length === WORD_LENGTH && key === 'enter') {
      if (word === correctWord) {
        setGameOver(true)
        setPlayerWin(true)
      } else if (row === WORD_LENGTH) {
        setGameOver(true)
        setPlayerWin(false)
      }

      setRow(row + 1)
      return
    }

    const updatedWord = key === 'backspace' ? `${words[row].slice(0, -1)}` : `${words[row]}${key}`
    const updatedWords = [...words]
    updatedWords[row] = updatedWord
    setWords(updatedWords)
  }

  const onRestartGame = () => {
    setGameOver(false)
    setPlayerWin(false)
    setWords(initWords())
    setCorrectWord(randomWord())
    setRow(0)
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <SafeAreaView style={styles.container}>
          <Text style={styles.text} size="xxlg">
            Cats 🐈 Word Game
          </Text>
          <GuessSlots {...{ words, row, correctWord, isGameOver }} />
          {isGameOver ? (
            <GameOver {...{ isPlayerWin, numberOfGuesses: row, correctWord, onRestartGame }} />
          ) : (
            <Keyboard onPress={onPressKey} words={words.slice(0, row)} correctWord={correctWord} />
          )}
        </SafeAreaView>
      </ThemeProvider>
    </SafeAreaProvider>
  )
}
