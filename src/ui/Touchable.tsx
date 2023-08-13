import { ReactElement } from 'react'
import { Pressable, StyleProp, ViewStyle } from 'react-native'

type Props = {
  children: ReactElement | ReactElement[]
  style?: StyleProp<ViewStyle>
  onPress?: () => void
}

export const Touchable = ({ children, style, onPress }: Props): ReactElement => {
  return (
    <Pressable style={({ pressed }) => [style, { opacity: pressed ? 0.7 : 1 }]} onPress={onPress}>
      {children}
    </Pressable>
  )
}
