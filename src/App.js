
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
