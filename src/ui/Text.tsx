import { ReactElement } from 'react'
import { Text as RNText, StyleProp, StyleSheet, TextStyle } from 'react-native'

import { FontWeight } from 'src/constants'

const styles = StyleSheet.create({
  xxlg: {
    fontSize: 28,
    lineHeight: 34,
    fontWeight: FontWeight.semibold
  },
  xlg: {
    fontSize: 21,
    lineHeight: 26,
    fontWeight: FontWeight.regular
  },
  lg: {
    fontSize: 19,
    lineHeight: 24,
    fontWeight: FontWeight.regular
  },
  md: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: FontWeight.light
  },
  sm: {
    fontSize: 14,
    lineHeight: 19,
    fontWeight: FontWeight.light
  },
  xs: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: FontWeight.light
  }
})

type Props = {
  children: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xlg' | 'xxlg'
  style?: StyleProp<TextStyle>
  numberOfLines?: number
  textAlign?: 'left' | 'right' | 'center' | 'justify'
}

export const Text = ({
  children,
  size = 'md',
  style,
  numberOfLines,
  textAlign = 'left'
}: Props): ReactElement => (
  <RNText style={[styles[size], { textAlign }, style]} {...{ numberOfLines }}>
    {children}
  </RNText>
)
