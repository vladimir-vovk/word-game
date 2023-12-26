import App from 'src/app/App'
import { AppContextProvider } from 'src/app/AppContext'

export default () => (
  <AppContextProvider>
    <App />
  </AppContextProvider>
)
