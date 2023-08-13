import { render, screen } from '@testing-library/react-native'

import App from 'src/app/App'

describe('App', () => {
  it('should mount without errors', () => {
    expect(() => render(<App />)).not.toThrow()
  })

  it('should unmount without errors', () => {
    render(<App />)
    expect(() => screen.unmount()).not.toThrow()
  })
})
