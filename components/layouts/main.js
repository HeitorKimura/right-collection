import Head from 'next/head'
import { Box, ChakraProvider, Container, Heading, Image, useColorModeValue, Stack } from '@chakra-ui/react'
import Fonts from '../fonts'
import Navbar from '../navbar'
import theme from '../../libs/theme'

const Main = ({ children, router, props }) => {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <Box as ="main" pb={8} bg={useColorModeValue(props)}>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    
                    <title>The Right Collection</title>
                </Head>

                <Navbar path={router.asPath}/>
                <Container maxW="container.md" pt={14}>
                <Box 
                    flexShrink={0} 
                    mt={{base: 4, md: 0}}
                    ml={{md: 6}}
                    mb='30px' 
                    align="center"
                    >
                    <Heading fontSize='7vmin' mt='3vmin' mb='3vmin'>Welcome to</Heading>
                <Image  
                    // borderColor="whiteAlpha.800" 
                    // borderWidth={2} 
                    // borderStyle="solid" 
                    maxWidth="700px" 
                    display="inline-block"  
                    src="../images/Logo_TRC.svg" 
                    alt="The Right Collection Logo"
                    />
                </Box>
                {children}
            </Container>
            </Box>
        </ChakraProvider>
    )
}

export default Main