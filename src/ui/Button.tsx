import { ReactElement } from 'react'
import { StyleSheet, View } from 'react-native'

import { BorderRadius, Spacing } from 'src/constants'
import { Row } from 'src/ui/Row'
import { Text } from 'src/ui/Text'
import { Touchable } from 'src/ui/Touchable'

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: 'yellowgreen',
    borderRadius: BorderRadius.md,
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.lg,
    alignSelf: 'center'
  },
  label: {
    color: 'yellowgreen'
  },
  rightIcon: {
    marginLeft: Spacing.sm
  }
})

type Props = {
  children: string
  onPress: () => void
  rightIcon?: ReactElement
}

export const Button = ({ children, onPress, rightIcon }: Props): ReactElement => {
  return (
    <Touchable style={styles.container} onPress={onPress}>
      <Row>
        <Text style={styles.label} size="lg">
          {children}
        </Text>
        {rightIcon ? <View style={styles.rightIcon}>{rightIcon}</View> : null}
      </Row>
    </Touchable>
  )
}
