import { Container, Box, Heading, Image, useColorModeValue, Link, Button, SimpleGrid, List, ListItem, Icon, Text, Stack, ChakraProvider } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import NextLink from 'next/link'
import Layout from '../components/layouts/article'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import { GridItem } from '../components/grid-item'
import {
    IoLogoTwitter,
    IoLogoInstagram,
    IoLogoGithub,
    IoLogoDiscord,
} from 'react-icons/io5'

// export function getStaticProps({ locale }) {
//     return {
//         props: {
//             locale: JSON.parse(JSON.stringify(locale))
//         }
//     }
// }

function roundImage(src_path) {
    <Box display={{ md:'flex' }}>
                    <Box 
                        flexShrink={0} 
                        mt={{base: 4, md: 0}}
                        ml={{md: 6}} 
                        align="center"
                        >
                        <Image 
                            borderColor="whiteAlpha.800" 
                            borderWidth={2} 
                            borderStyle="solid" 
                            maxWidth="150px" 
                            display="inline-block" 
                            borderRadius="full" 
                            src={src_path}
                            alt="Profile Image"
                        />
                    </Box>
                </Box>
}

const Page = (components) => {
    return (
            <Container maxWidth='100vw' position='absolute' left={0}>
                <Box borderRadius="none" bg={useColorModeValue('whiteAlpha.800', 'whiteAlpha.300')} w='100%' h='auto' align="center" marginTop='20px'>
                    <Stack spacing='0px' direction='row' align='center' padding={4}>
                        <Stack spacing={4} direction='column' width='30vw' paddingRight='0px'>
                            <Heading textAlign='left' fontSize='350%' fontWeight='extrabold' ml='3vw'>It's nice to meet you :)</Heading>
                            <Heading textAlign='center' fontSize='100%'>Don't get us wrong ;)</Heading>
                        </Stack>
                        <Box position='relative' left='10%' top='1vw'>
                            <Text width='50vw' mt='0.7vw' textAlign='justify' mr='2px'>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                                nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                                volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                                Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et
                                accumsan et iusto odio dignissim qui blandit praesent luptatum zzril
                                delenit augue duis dolore te feugait nulla facilisi.
                            </Text>
                        </Box>
                    </Stack>
                </Box>
{/* 
                <Box display={{ md:'flex' }}>
                    <Box 
                        flexShrink={0} 
                        mt={{base: 4, md: 0}}
                        ml={{md: 6}} 
                        align="center"
                        >
                        <Image 
                            borderColor="whiteAlpha.800" 
                            borderWidth={2} 
                            borderStyle="solid" 
                            maxWidth="150px" 
                            display="inline-block" 
                            borderRadius="full" 
                            src="/images/perfil.png" 
                            alt="Profile Image"
                        />
                    </Box>
                </Box> */}
                <Section delay={0.1}>
                    <Heading as="h2" variant="section-title" textAlign='center' fontSize='400%' color='whiteAlpha.900'>
                        The right Team:
                    </Heading>
                    <Heading as="h2" variant="section-title" textAlign='center' fontSize='150%' color='whiteAlpha.900'>
                        Meet the gang
                    </Heading>
                    {/* <Box align="center" my={4}>
                        <NextLink href="/works">
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                                My portfolio
                            </Button>
                        </NextLink>
                    </Box> */}
                </Section>
                <Section delay={0.2}>
                    <Stack direction='row' spacing='15%'>
                        <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md: 6}}>
                            <Image 
                                borderColor="whiteAlpha.800" 
                                borderWidth={2} 
                                borderStyle="solid" 
                                maxWidth="150px" 
                                display="inline-block" 
                                borderRadius="full" 
                                src="/images/footprint.png" 
                                alt="Temp Image"
                            />
                        <Text fontSize='25px' fontFamily='Arial' fontWeight='extrabold' align='center' color='white'>
                             Supletivo <br></br>
                             Supletivo
                        </Text>
                        </Box>
                        <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md: 6}}>
                            <Image 
                                borderColor="whiteAlpha.800" 
                                borderWidth={2} 
                                borderStyle="solid" 
                                maxWidth="150px" 
                                display="inline-block" 
                                borderRadius="full" 
                                src="/images/footprint.png" 
                                alt="Temp Image"
                            />
                        </Box>
                        <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md: 6}}>
                            <Image 
                                borderColor="whiteAlpha.800" 
                                borderWidth={2} 
                                borderStyle="solid" 
                                maxWidth="150px" 
                                display="inline-block" 
                                borderRadius="full" 
                                src="/images/footprint.png" 
                                alt="Temp Image"
                            />
                        </Box>
                        <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md: 6}}>
                            <Image 
                                borderColor="whiteAlpha.800" 
                                borderWidth={2} 
                                borderStyle="solid" 
                                maxWidth="150px" 
                                display="inline-block" 
                                borderRadius="full" 
                                src="/images/footprint.png" 
                                alt="Temp Image"
                            />
                        </Box>
                    </Stack>
                </Section>
            </Container>
    )
}

export default Page