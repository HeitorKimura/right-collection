import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Container, Box, Heading, Image, useColorModeValue, Link, Button, SimpleGrid, List, ListItem, Icon, Text, Stack, ChakraProvider, Center, LinkOverlay, LinkBox, IconButton, color } from '@chakra-ui/react'
import Section from '../components/section'
import { FaDiscord, FaTwitter } from 'react-icons/fa'

const ProjIconHeight = '150px';
const ProjIconWidth = '150px';
const TwitterPath = '/twitter';
const DiscordPath = '/discord';

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
                      src="/images/supletivo.png" 
                      alt="Supletivo Profile Image"
                      bg='whiteAlpha.500'
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
                      src="/images/ze lootinho.png" 
                      alt="Ze Lootinho Profile Image"
                      bg='whiteAlpha.500'
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
                      src="/images/vava.png" 
                      alt="Vava Player Profile Image"
                      bg='whiteAlpha.500'
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
                      src="/images/cabecudo.png" 
                      alt="Cabecudo Profile Image"
                      bg='whiteAlpha.500'
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
                      src="/images/monolux.png" 
                      alt="Mono Lux Profile Image"
                      bg='whiteAlpha.500'
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
            <Stack mt='-10' direction='row' spacing='5%' width='100vw' padding='1.7vw'>
                <IconButton 
                    icon={
                        <ChevronLeftIcon
                            h={ProjIconHeight}
                            w={ProjIconWidth}
                            color='gray'
                        />
                        }
                    h={ProjIconHeight}
                    w={ProjIconWidth}
                />
                <LinkBox>
                    <LinkOverlay href='/beanimals'>
                        <Image
                            borderColor="transparent"
                            backgroundColor='#68d2d0' 
                            borderWidth={2} 
                            borderStyle="solid" 
                            height={ProjIconHeight}
                            width={ProjIconWidth}
                            // maxWidth="150px" 
                            display="inline-block" 
                            borderRadius='2xl'
                            src="../images/logo beanimals.svg" 
                            alt="Beanimals"
                        />
                    </LinkOverlay>
                </LinkBox>
                <LinkBox>
                    <LinkOverlay href='/povo-polvo'>
                        <Image
                            borderColor='transparent'
                            backgroundColor={useColorModeValue(props)} 
                            borderWidth={2} 
                            borderStyle="solid" 
                            height={ProjIconHeight}
                            width={ProjIconWidth}
                            display="inline-block" 
                            borderRadius='2xl' 
                            src="../images/povo_polvo_logo.png" 
                            alt="Povo Polvo"
                        />
                    </LinkOverlay>
                </LinkBox>
                <LinkBox>
                    <LinkOverlay href='/hntbah'>
                        <Image
                            borderColor='transparent'
                            backgroundColor={useColorModeValue(props)} 
                            borderWidth={2} 
                            borderStyle="solid"
                            height={ProjIconHeight}
                            width={ProjIconWidth} 
                            display="inline-block" 
                            borderRadius='2xl' 
                            src="../images/NFTgame_logo_quadrado.jpg" 
                            alt="How Not to be a Hero"
                        />
                    </LinkOverlay>
                </LinkBox>
                <IconButton position='relative' alignContent='end'
                    icon={
                        <ChevronRightIcon
                            h={ProjIconHeight}
                            w={ProjIconWidth}
                            color='gray'
                        />
                        }
                    h={ProjIconHeight}
                    w={ProjIconWidth}
                />
            </Stack>
              </Box>
          </Section>
      </Center>
      <Section delay={0.3}>
        <Stack width='100vw' align='left' ml='200px'>
            <Text fontWeight='bold' color='whiteAlpha.900'>
            What's left?
            </Text>
            <Stack direction='row' spacing='2%'>
            <Text fontSize='40px' fontWeight='extrabold' color='whiteAlpha.900'>
            Connect with us!
            </Text>
            <LinkBox>
                <LinkOverlay href={TwitterPath}>
                <IconButton
                    mt='-4'
                    icon={<FaTwitter 
                            size='50%' 
                            color={useColorModeValue('#68d2d0', '#202023')}
                            />}
                    bgColor='white'
                    borderRadius='full'
                    width='80px'
                    height='80px'
                />
            </LinkOverlay>
            </LinkBox>
            <LinkBox>
                <LinkOverlay href={DiscordPath}>
                <IconButton
                    mt='-4'
                    icon={<FaDiscord 
                            size='50%'
                            color={useColorModeValue('#68d2d0', '#202023')}
                            />}
                    bgColor='white'
                    borderRadius='full'
                    width='80px'
                    height='80px'
                />
            </LinkOverlay>
            </LinkBox>
            </Stack>
        </Stack>
      </Section>
      <Box 
        align='center' 
        bg={useColorModeValue('whiteAlpha.800', 'whiteAlpha.300')}
        width='100vw' 
        height='3vw'
        mb='-10'>
            <Text mt='1%' fontWeight='bold'>
                All rights reserved, {new Date().getFullYear()}
            </Text>
        </Box>
  </Container>
  )
}
