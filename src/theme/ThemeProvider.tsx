import { createContext, ReactElement, useContext } from 'react'
import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { theme as defaultTheme } from './theme'
import { Colors, Theme } from './types'

type ThemeContextType = {
  theme: Theme
  isDark: boolean
}

const ThemeContext = createContext<ThemeContextType>({
  theme: defaultTheme.light,
  isDark: false
})

export const useColors = (): Colors => {
  const { theme } = useContext<ThemeContextType>(ThemeContext)
  return theme.colors
}

type CreateStyleFn<T> = (theme: Theme) => { [P in keyof T]: ViewStyle | TextStyle | ImageStyle }
type UseTheme = { [key: string]: (ViewStyle & TextStyle) | ImageStyle }

export const useTheme = (createStyleFn: CreateStyleFn<any>): UseTheme => {
  const { theme } = useContext<ThemeContextType>(ThemeContext)
  const styles = createStyleFn(theme)
  return StyleSheet.create(styles)
}

type Props = {
  children: ReactElement | ReactElement[]
}

export const ThemeProvider = ({ children }: Props): ReactElement => {
  // const isDark = useColorScheme() === 'dark'
  const isDark = false
  const theme = isDark ? defaultTheme.dark : defaultTheme.light

  return (
    <ThemeContext.Provider
      value={{
        theme,
        isDark
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
