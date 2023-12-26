import { ReactElement } from 'react'
import { useWindowDimensions } from 'react-native'

import { useAppState } from 'src/app/AppContext'
import { WORD_LENGTH } from 'src/constants'
import { Divider, Row } from 'src/ui'
import { letterSize, letterType } from 'src/utils'

import { Letter } from './Letter'

type Props = {
  children: string
  isInput: boolean
}

export const Word = ({ children, isInput }: Props): ReactElement => {
  const { state } = useAppState()
  const { correctWord, isGameOver } = state

  const { height: screenHeight } = useWindowDimensions()
  const size = letterSize(screenHeight)

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
