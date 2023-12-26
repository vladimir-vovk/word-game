import { ReactElement } from 'react'
import { StyleSheet, View } from 'react-native'

import { useAppState } from 'src/app/AppContext'
import { Spacing } from 'src/constants'

import { Word } from './Word'

const styles = StyleSheet.create({
  container: {
    padding: Spacing.md
  }
})

export const GuessSlots = (): ReactElement => {
  const { state } = useAppState()
  const { words, row } = state

  return (
    <View style={styles.container}>
      {words.map((word, i) => (
        <Word key={i} isInput={row === i}>
          {word}
        </Word>
      ))}
    </View>
  )
}
