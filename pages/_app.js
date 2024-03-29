import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'
import Layout from '../components/layouts/main'
import { theme } from '../libs/theme.js'
import Fonts from '../components/fonts'
import { AnimatePresence } from 'framer-motion'

function Website({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route}/>
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  )
}

export default Website