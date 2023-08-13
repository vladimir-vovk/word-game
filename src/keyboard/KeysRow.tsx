import { ReactElement } from 'react'

import { Row } from 'src/ui'
import { UsedLettersTypes } from 'src/utils'

import { Key } from './Key'

type Props = {
  keys: string[]
  width: number
  height: number
  onPress: (key: string) => void
  usedLetters: UsedLettersTypes
}

export const KeysRow = ({ keys, width, height, onPress, usedLetters }: Props): ReactElement => (
  <Row>
    {keys.map((key, i) => (
      <Key {...{ key, width, height, mr: i !== keys.length - 1, onPress, usedLetters }}>{key}</Key>
    ))}
  </Row>
)
