import { ReactElement } from 'react'
import { StyleSheet, View } from 'react-native'

import { BorderRadius, Spacing } from 'src/constants'
import { Theme, useTheme } from 'src/theme'
import { Text } from 'src/ui'

import { Cursor } from './Cursor'

const styles = StyleSheet.create({
  container: {
    borderWidth: 0,
    borderRadius: BorderRadius.sm,
    justifyContent: 'center',
    alignItems: 'center'
  },
  mr: {
    marginRight: Spacing.sm
  }
})

const stylesFn = ({ colors }: Theme) => ({
  empty: {
    borderColor: colors.letter.empty.border,
    borderWidth: 2
  },
  incorrect: {
    backgroundColor: colors.letter.incorrect.background
  },
  misplaced: {
    backgroundColor: colors.letter.misplaced.background
  },
  correct: {
    backgroundColor: colors.letter.correct.background
  },
  text: {
    color: colors.letter.correct.color,
    textTransform: 'uppercase'
  },
  textEmpty: {
    color: colors.letter.empty.color
  }
})

type Props = {
  children: string
  size: number
  mr?: boolean
  type: 'empty' | 'incorrect' | 'misplaced' | 'correct'
  isCursor?: boolean
}

export const Letter = ({ children, size, mr, type, isCursor }: Props): ReactElement => {
  // @ts-ignore
  const tStyles = useTheme(stylesFn)

  return (
    <View
      style={[
        styles.container,
        type === 'empty' && tStyles.empty,
        type === 'incorrect' && tStyles.incorrect,
        type === 'misplaced' && tStyles.misplaced,
        type === 'correct' && tStyles.correct,
        { width: size, height: size },
        mr && styles.mr
      ]}
    >
      {isCursor ? (
        <Cursor size={size} />
      ) : (
        <Text style={[tStyles.text, type === 'empty' && tStyles.textEmpty]} size="xxlg">
          {children}
        </Text>
      )}
    </View>
  )
}
