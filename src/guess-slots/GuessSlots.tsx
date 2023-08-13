import { ReactElement } from 'react'
import { StyleSheet, View } from 'react-native'

import { Spacing } from 'src/constants'

import { Word } from './Word'

const styles = StyleSheet.create({
  container: {
    padding: Spacing.md
  }
})

type Props = {
  words: string[]
  row: number
  correctWord: string
  isGameOver: boolean
}

export const GuessSlots = ({ words, correctWord, row, isGameOver }: Props): ReactElement => {
  return (
    <View style={styles.container}>
      {words.map((word, i) => (
        <Word key={i} correctWord={correctWord} isInput={row === i} isGameOver={isGameOver}>
          {word}
        </Word>
      ))}
    </View>
  )
}
