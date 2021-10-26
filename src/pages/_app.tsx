import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'

// Import Swiper styles
import 'swiper/css'
//import 'swiper/css/bundle'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
//import '../styles/slider.css'
import '../styles/styles.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
export default MyApp
