import { Routes } from './Routes';
import './App.css'
import { DarkThemeContextProvider } from './contexts';

function App() {
  return (
    <DarkThemeContextProvider>
      <Routes />
    </DarkThemeContextProvider>
  )
}

export default App
