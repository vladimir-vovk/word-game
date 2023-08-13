import { ReactElement } from 'react'
import { StyleSheet, Text } from 'react-native'

import { BorderRadius, Spacing } from 'src/constants'
import { Theme, useTheme } from 'src/theme'
import { Touchable } from 'src/ui'
import { UsedLettersTypes } from 'src/utils'

import { KeyIcon } from './KeyIcon'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: BorderRadius.sm
  },
  key: {
    fontSize: 17,
    fontWeight: '500',
    textTransform: 'uppercase'
  },
  mr: {
    marginRight: Spacing.xsm
  }
})

const stylesFn = ({ colors }: Theme) => ({
  container: {
    backgroundColor: colors.key.unselected.background
  },
  incorrect: {
    backgroundColor: colors.key.incorrect.background
  },
  misplaced: {
    backgroundColor: colors.key.misplaced.background
  },
  correct: {
    backgroundColor: colors.key.correct.background
  },
  textUnselected: {
    color: colors.key.unselected.color
  },
  textIncorrect: {
    color: colors.key.incorrect.color
  },
  textMisplaced: {
    color: colors.key.misplaced.color
  },
  textCorrect: {
    color: colors.key.correct.color
  }
})

type Props = {
  children: string
  width: number
  height: number
  mr?: boolean
  onPress: (key: string) => void
  usedLetters: UsedLettersTypes
}

export const Key = ({ children, width, height, mr, onPress, usedLetters }: Props): ReactElement => {
  const tStyles = useTheme(stylesFn)
  const isEnter = children === 'enter'
  const isBackspace = children === 'backspace'
  const isSpecial = isEnter || isBackspace

  const onPressKey = () => onPress(children)
  const letterType = usedLetters[children]

  return (
    <Touchable
      onPress={onPressKey}
      style={[
        styles.container,
        tStyles.container,
        letterType === 'incorrect' && tStyles.incorrect,
        letterType === 'misplaced' && tStyles.misplaced,
        letterType === 'correct' && tStyles.correct,
        { width: isSpecial ? width * 1.6 : width, height },
        mr && styles.mr
      ]}
    >
      {isSpecial ? (
        <KeyIcon name={children} />
      ) : (
        <Text
          style={[
            styles.key,
            letterType === 'empty' && tStyles.textUnselected,
            letterType === 'incorrect' && tStyles.textIncorrect,
            letterType === 'misplaced' && tStyles.textMisplaced,
            letterType === 'correct' && tStyles.textCorrect
          ]}
        >
          {children}
        </Text>
      )}
    </Touchable>
  )
}
