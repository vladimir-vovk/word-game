import { createContext, ReactElement, useContext, useReducer } from 'react'

import { WORD_LENGTH } from 'src/constants'
import { initWords, randomWord } from 'src/utils'

type ActionKeyPress = {
  type: 'keypress'
  key: string
}

type Action =
  | {
      type: 'restart'
    }
  | ActionKeyPress

type AppState = {
  correctWord: string
  words: string[]
  row: number
  isGameOver: boolean
  isPlayerWin: boolean
}

const initialAppState: AppState = {
  correctWord: randomWord(),
  words: initWords(),
  row: 0,
  isGameOver: false,
  isPlayerWin: false
}

type OnKeyPressArgs = {
  state: AppState
  action: ActionKeyPress
}

const onKeyPress = ({ state, action }: OnKeyPressArgs): AppState => {
  const { words, row, correctWord } = state
  const word = words[row]
  const { key } = action

  if (!word.length && key === 'backspace') {
    return state
  }

  if (word.length !== WORD_LENGTH && key === 'enter') {
    return state
  }

  if (word.length === WORD_LENGTH && !['enter', 'backspace'].includes(key)) {
    return state
  }

  if (word.length === WORD_LENGTH && key === 'enter') {
    const isPlayerWin = word === correctWord
    const isLastRow = row === WORD_LENGTH

    return {
      ...state,
      row: row + 1,
      isGameOver: isPlayerWin || isLastRow,
      isPlayerWin
    }
  }

  const updatedWord = key === 'backspace' ? `${words[row].slice(0, -1)}` : `${words[row]}${key}`
  const updatedWords = [...words]
  updatedWords[row] = updatedWord
  return {
    ...state,
    words: updatedWords
  }
}

const reducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case 'restart':
      return {
        ...initialAppState,
        correctWord: randomWord()
      }
    case 'keypress':
      return onKeyPress({ state, action })
  }

  return state
}

type AppContextType = {
  state: AppState
  dispatch: (action: Action) => void
}

const AppContext = createContext<AppContextType>({
  state: initialAppState,
  dispatch: () => {}
})

type Props = {
  children: ReactElement | ReactElement[]
}

export const AppContextProvider = ({ children }: Props): ReactElement => {
  const [state, dispatch] = useReducer(reducer, initialAppState)

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppState = () => useContext(AppContext)
