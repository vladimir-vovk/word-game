import { ReactElement, useMemo } from 'react'
import { StyleSheet, useWindowDimensions, View } from 'react-native'

import { useAppState } from 'src/app/AppContext'
import { MIN_WIDTH, SCREEN_RATIO, Spacing } from 'src/constants'
import { Divider } from 'src/ui'
import { usedLettersTypes } from 'src/utils'

import { KeysRow } from './KeysRow'

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: Spacing.md,
    paddingBottom: Spacing.xlg
  }
})

export const Keyboard = (): ReactElement => {
  const { height: screenHeight } = useWindowDimensions()

  const { state, dispatch } = useAppState()
  const { words: allWords, row, correctWord } = state
  const words = allWords.slice(0, row)

  const onPress = (key: string) => dispatch({ type: 'keypress', key })

  const usedLetters = useMemo(() => {
    return usedLettersTypes({ words, correctWord })
  }, [words, correctWord])

  const firstRow = 'qwertyuiop'
  const secondRow = 'asdfghjkl'
  const thirdRow = ['enter', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'backspace']

  const screenWidth = Math.max(MIN_WIDTH, screenHeight * SCREEN_RATIO)
  const width = Math.floor(
    (screenWidth - 2 * Spacing.md - (firstRow.length - 1) * Spacing.xsm) / firstRow.length
  )
  const height = Math.floor(width * 1.3)

  return (
    <View style={styles.container}>
      <KeysRow keys={firstRow.split('')} {...{ width, height, onPress, usedLetters }} />
      <Divider size="sm" />

      <KeysRow keys={secondRow.split('')} {...{ width, height, onPress, usedLetters }} />
      <Divider size="sm" />

      <KeysRow keys={thirdRow} {...{ width, height, onPress, usedLetters }} />
    </View>
  )
}
