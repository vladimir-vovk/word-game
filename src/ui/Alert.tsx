import { ReactElement } from 'react'
import { StyleSheet, View } from 'react-native'

import { BorderRadius, Spacing } from 'src/constants'

import { Text } from './Text'

const styles = StyleSheet.create({
  container: {
    borderRadius: BorderRadius.md,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: Spacing.lg,
    paddingHorizontal: Spacing.md,
    width: '100%'
  },
  success: {
    backgroundColor: 'yellowgreen'
  },
  error: {
    backgroundColor: 'coral'
  },
  text: {
    color: 'white',
    textAlign: 'center'
  }
})

type Props = {
  children: string
  status?: 'success' | 'error'
}

export const Alert = ({ children, status = 'success' }: Props): ReactElement => {
  return (
    <View
      style={[
        styles.container,
        status === 'success' && styles.success,
        status === 'error' && styles.error
      ]}
    >
      <Text style={styles.text} size="lg">
        {children}
      </Text>
    </View>
  )
}
