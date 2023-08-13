import { ReactElement } from 'react'
import { useWindowDimensions } from 'react-native'

import { MIN_WIDTH, SCREEN_RATIO, Spacing, WORD_LENGTH } from 'src/constants'
import { Divider, Row } from 'src/ui'
import { letterType } from 'src/utils'

import { Letter } from './Letter'

type Props = {
  children: string
  correctWord: string
  isInput: boolean
  isGameOver: boolean
}

export const Word = ({ children, correctWord, isInput, isGameOver }: Props): ReactElement => {
  const { height: screenHeight } = useWindowDimensions()
  const width = Math.max(MIN_WIDTH, screenHeight * SCREEN_RATIO)
  const size = Math.floor((width - 2 * Spacing.md - Spacing.sm * WORD_LENGTH) / WORD_LENGTH)

  const word = `${children}      `.slice(0, WORD_LENGTH)
  const cursorIndex = children.length

  return (
    <>
      <Row>
        {word.split('').map((letter, i) => (
          <Letter
            key={i}
            size={size}
            mr={i !== WORD_LENGTH - 1}
            type={isInput ? 'empty' : letterType({ index: i, letter, correctWord })}
            isCursor={isInput && !isGameOver && i === cursorIndex}
          >
            {letter}
          </Letter>
        ))}
      </Row>
      <Divider size="sm" />
    </>
  )
}
