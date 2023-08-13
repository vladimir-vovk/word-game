import { Ionicons } from '@expo/vector-icons'
import { ReactElement } from 'react'
import { StyleSheet, View } from 'react-native'

import { Spacing } from 'src/constants'
import { Alert, Button, Divider } from 'src/ui'
import { happyEmojie, sadEmojie } from 'src/utils'

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

type Props = {
  isPlayerWin: boolean
  numberOfGuesses: number
  correctWord: string
  onRestartGame: () => void
}

export const GameOver = ({
  isPlayerWin,
  numberOfGuesses,
  correctWord,
  onRestartGame
}: Props): ReactElement => {
  return (
    <View style={styles.container}>
      {isPlayerWin ? (
        <Alert status="success">{`Congratulations! ${happyEmojie()}\nYou got it in ${numberOfGuesses} ${
          numberOfGuesses === 1 ? 'guess' : 'guesses'
        }.`}</Alert>
      ) : (
        <Alert status="error">{`Sorry! ${sadEmojie()}\nThe correct answer is ${correctWord.toUpperCase()}.`}</Alert>
      )}
      <>
        <Divider size="lg" />
        <Button
          onPress={onRestartGame}
          rightIcon={<Ionicons name="ios-game-controller-outline" color="yellowgreen" size={32} />}
        >
          Restart
        </Button>
      </>
    </View>
  )
}
