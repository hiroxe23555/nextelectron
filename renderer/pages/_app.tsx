
import type { AppProps } from 'next/app'
import apolloClient from './lib/apollo'
import { ChakraProvider } from '@chakra-ui/react'
import theme from "./theme"; 
import Layout from '../components/Layout';


//      <CreateItemQuery crateItemMutation={crateItemMutation} />
function MyApp({ Component, pageProps}: AppProps) {
  return (
    <>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

      <ChakraProvider theme={theme}>
      <Layout />

        <Component {...pageProps} />
      </ChakraProvider>

    </>
  )
}

export default MyApp