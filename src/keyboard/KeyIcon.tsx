import { Ionicons } from '@expo/vector-icons'
import { ReactElement } from 'react'

type Props = {
  name: string
}

export const KeyIcon = ({ name }: Props): ReactElement | null => {
  switch (name) {
    case 'enter':
      return <Ionicons name="ios-return-down-back-sharp" size={24} />
    case 'backspace':
      return <Ionicons name="ios-backspace-outline" size={24} />
    default:
      return null
  }
}
