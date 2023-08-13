import { Theme, ThemeConfig } from './types'

const light: Theme = {
  colors: {
    background: 'white',

    key: {
      unselected: {
        color: 'black',
        background: 'rgb(211,	213, 217)'
      },
      incorrect: {
        color: 'white',
        background: 'rgb(56, 56, 56)'
      },
      misplaced: {
        color: 'white',
        background: 'rgb(142, 117, 32)'
      },
      correct: {
        color: 'white',
        background: 'rgb(27, 118, 73)'
      }
    },

    letter: {
      empty: {
        color: 'black',
        border: 'rgb(184, 184, 184)',
        background: 'white'
      },
      incorrect: {
        color: 'white',
        background: 'rgb(56, 56, 56)'
      },
      misplaced: {
        color: 'white',
        background: 'rgb(142, 117, 32)'
      },
      correct: {
        color: 'white',
        background: 'rgb(27, 118, 73)'
      }
    }
  }
}

export const theme: ThemeConfig = {
  light,
  dark: light
}
