export type Colors = {
  background: string

  key: {
    unselected: {
      color: string
      background: string
    }
    incorrect: {
      color: string
      background: string
    }
    misplaced: {
      color: string
      background: string
    }
    correct: {
      color: string
      background: string
    }
  }

  letter: {
    empty: {
      color: string
      border: string
      background: string
    }
    incorrect: {
      color: string
      background: string
    }
    misplaced: {
      color: string
      background: string
    }
    correct: {
      color: string
      background: string
    }
  }
}

export type Theme = {
  colors: Colors
}

export type ThemeConfig = {
  light: Theme
  dark: Theme
}
