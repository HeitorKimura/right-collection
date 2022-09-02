import { Container, Box, Heading, Image, useColorModeValue, Link, Button, SimpleGrid, List, ListItem, Icon, Text, Stack, ChakraProvider, Center } from '@chakra-ui/react'
import Section from '../components/section'

export default function Home({props}) {
  return (
    <Container centerContent='true'>
      <Center width='100vw'>
      <Box bg={useColorModeValue('whiteAlpha.800', 'whiteAlpha.300')} 
           backgroundImage='../public/images/temp-thumbnail.png'
           backgroundRepeat='repeat-x'>
          <Stack direction='row' margin='5vw' spacing='3vw'>
              <Stack>
                  <Heading fontSize='350%' fontWeight='extrabold'>It's nice to meet you :)</Heading>
                  <Heading fontSize='100%'>Don't get us wrong ;)</Heading>
              </Stack>
              <Box maxWidth='60%'>
                  <Text fontWeight='bold' align='justify'>
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
      </Center>
      <Section delay={0.1} direction='column'>
          <Heading as="h2" variant="section-title" fontSize='400%' color='whiteAlpha.900'>
              The right Team:
          </Heading>
          <Heading as="h2" variant="section-title" fontSize='150%' color='whiteAlpha.900' textAlign='center'>
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
      <Center>
      <Section delay={0.2}>
          <Stack direction = 'row' spacing='4vw'>
              <Box>
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
              <Box>
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
                      Zé Lootinho <br></br>
                      Tilt
              </Text>
              </Box>
              <Box>
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
                      Vava <br></br>
                      Player
              </Text>
              </Box>
              <Box>
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
                      Cabeçudo <br></br>
                      Dms
              </Text>
              </Box>
              <Box>
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
                      Mono Lux <br></br>
                      Tiltado
              </Text>
              </Box>
          </Stack>
      </Section>
      </Center>
      <Center width='100vw'>
          <Section delay={0.2}>
              <Box bg={useColorModeValue('whiteAlpha.800', 'whiteAlpha.300')}>
                  <Stack width='100vw' padding='2vw'>
                      <Heading fontSize='250%' fontWeight='extrabold'>Our Projects</Heading>
                      <Heading fontSize='100%'>You are in the right place!</Heading>
                  </Stack>
              </Box>
          </Section>
      </Center>
      {/* <Section delay={0.3}>
          <Stack>
              <Stack>
                  
              </Stack>
          </Stack>
      </Section> */}
  </Container>
  )
}
