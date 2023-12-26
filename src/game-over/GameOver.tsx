import { Ionicons } from '@expo/vector-icons'
import { ReactElement } from 'react'
import { StyleSheet, useWindowDimensions, View } from 'react-native'

import { useAppState } from 'src/app/AppContext'
import { Spacing, WORD_LENGTH } from 'src/constants'
import { Alert, Button, Divider } from 'src/ui'
import { happyEmojie, letterSize, plural, sadEmojie } from 'src/utils'

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: Spacing.md,
    paddingBottom: Spacing.xlg,
    paddingHorizontal: Spacing.md,
    alignItems: 'center'
  }
})

export const GameOver = (): ReactElement => {
  const { height } = useWindowDimensions()
  const { state, dispatch } = useAppState()
  const { row: numberOfGuesses, correctWord, isPlayerWin } = state

  const onRestartGame = () => dispatch({ type: 'restart' })

  const guesses = plural({ n: numberOfGuesses, singular: 'guess', plural: 'guesses' })
  const winMessage = `Congratulations! ${happyEmojie()}\nYou got it in ${guesses}.`
  const looseMessage = `Sorry! ${sadEmojie()}\nThe correct answer is ${correctWord.toUpperCase()}.`

  const alertWidth = letterSize(height) * WORD_LENGTH + (WORD_LENGTH - 1) * Spacing.sm

  return (
    <View style={styles.container}>
      <View style={{ width: alertWidth }}>
        {isPlayerWin ? (
          <Alert status="success">{winMessage}</Alert>
        ) : (
          <Alert status="error">{looseMessage}</Alert>
        )}

        <Divider size="lg" />

        <Button
          onPress={onRestartGame}
          rightIcon={<Ionicons name="ios-game-controller-outline" color="yellowgreen" size={32} />}
        >
          Restart
        </Button>
      </View>
    </View>
  )
}
