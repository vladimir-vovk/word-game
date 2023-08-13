import { ReactElement } from 'react'
import { StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

type Props = {
  children: ReactElement | (ReactElement | null | undefined)[] | null
}

export const Row = ({ children }: Props): ReactElement => {
  return <View style={styles.container}>{children}</View>
}
