import { ReactElement, useEffect, useRef } from 'react'
import { Animated, Easing, StyleSheet } from 'react-native'

import { Theme, useTheme } from 'src/theme'

const styles = StyleSheet.create({
  cursor: {
    width: 2,
    opacity: 0.5
  }
})

const styleFn = ({ colors }: Theme) => ({
  cursor: {
    backgroundColor: colors.key.unselected.color
  }
})

type Props = {
  size: number
}

export const Cursor = ({ size }: Props): ReactElement => {
  const cursorHeight = (size / 10) * 6
  const height = useRef(new Animated.Value(cursorHeight)).current

  const tStyles = useTheme(styleFn)

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(height, {
          toValue: 0,
          duration: 800,
          easing: Easing.quad,
          useNativeDriver: false
        }),
        Animated.timing(height, {
          toValue: cursorHeight,
          duration: 800,
          useNativeDriver: false
        })
      ])
    ).start()
  }, [height, cursorHeight])

  return <Animated.View style={[styles.cursor, { height }, tStyles.cursor]} />
}
