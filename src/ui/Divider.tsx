import { StyleSheet, View } from 'react-native'

import { Spacing } from 'src/constants/layout'

const styles = StyleSheet.create({
  xsm: {
    marginBottom: Spacing.xsm
  },
  sm: {
    marginBottom: Spacing.sm
  },
  md: {
    marginBottom: Spacing.md
  },
  lg: {
    marginBottom: Spacing.lg
  },
  xlg: {
    marginBottom: Spacing.xlg
  }
})

type Props = {
  size?: 'xsm' | 'sm' | 'md' | 'lg' | 'xlg'
}

export const Divider = ({ size = 'md' }: Props) => <View style={styles[size]} />
