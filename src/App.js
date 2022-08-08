
import './App.css';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import HighlightsItem from './components/HighlightsItem';
import Video from './components/Video';
import { extendTheme, ChakraProvider, CSSReset } from '@chakra-ui/react'
import { mode } from "@chakra-ui/theme-tools";

function App() {
  const customTheme = extendTheme({
    styles: {
      global: () => ({
        body: {
          bg: "#4ED2C7",
        },
      }),
    },

    radii: {
      none: '0',
      sm: '0.125rem',
      base: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      full: '9999px',
    },

    semanticTokens: {
      colors: {
        error: 'red.500',
        success: 'green.500',
        primary: {
          default: 'red.500',
          _dark: 'red.400',
        },
        secondary: {
          default: 'red.800',
          _dark: 'red.700',
        },
      },
    },

  })

  return (
    <ChakraProvider theme={customTheme} >
      <CSSReset />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/video/:key" element={<Video />}/>
      </Routes>
    </ChakraProvider>
  );
}

export default App;
