
import './App.css';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import { extendTheme, ChakraProvider, CSSReset } from '@chakra-ui/react'

function App() {
  const customTheme = extendTheme({
    semanticTokens: {
      colors: {
        error: 'red.500',
        success: 'green.500',
        primary: {
          default: 'red.500',
          _dark: 'red.400',
        },
        fonts: {
          heading: '"Roboto", sans-serif',
          body: '"Roboto", sans-serif',
        },
        secondary: {
          default: 'red.800',
          _dark: 'red.700',
        },
      },
    },
  })
  return (
    <ChakraProvider theme={customTheme}>
    <CSSReset />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </ChakraProvider>
  );
}

export default App;
