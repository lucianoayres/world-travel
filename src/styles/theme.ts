import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    light: {
      'Headings and Text': '#F5F8FA',
      info: '#DADADA'
    },
    dark: {
      'Headings and Text': '#47585B',
      info: '#999999'
    },
    highlight: {
      full: '#FFBA08',
      half: 'rgb(255, 186, 8, .5)'
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: 'gray.100'
      }
    }
  }
})
