import { ReactElement } from 'react'
import { Platform, StyleSheet } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import { useAppState } from 'src/app/AppContext'
import { Spacing } from 'src/constants'
import { GameOver } from 'src/game-over'
import { GuessSlots } from 'src/guess-slots'
import { Keyboard } from 'src/keyboard'
import { ThemeProvider } from 'src/theme'
import { Text } from 'src/ui'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  text: {
    marginBottom: 8,
    marginTop: Platform.OS === 'web' ? Spacing.lg : Spacing.sm
  }
})

export default function App(): ReactElement {
  const { state } = useAppState()
  const { isGameOver } = state

  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <SafeAreaView style={styles.container}>
          <Text style={styles.text} size="xxlg">
            Cats 🐈 Word Game
          </Text>

          <GuessSlots />

          {isGameOver ? <GameOver /> : <Keyboard />}
        </SafeAreaView>
      </ThemeProvider>
    </SafeAreaProvider>
  )
}
