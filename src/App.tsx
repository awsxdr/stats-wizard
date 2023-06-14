import { Routes } from './Routes';
import './App.scss'
import { DarkThemeContextProvider } from './contexts';

function App() {
  return (
    <DarkThemeContextProvider>
      <Routes />
    </DarkThemeContextProvider>
  )
}

export default App
