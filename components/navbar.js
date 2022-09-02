import Logo from './logo'
import NextLink from 'next/link'
import { Box, Container, Heading, Link, Stack, Flex, useColorModeValue, Menu, MenuButton, IconButton, MenuList, MenuItem } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button.js'

const LinkItem = ({ href, path, children }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
    return (
        <NextLink href={href}>
            <Link
                p={2}
                borderRadius='md'
                bg={active ? 'whiteAlpha.500' : undefined}
                color={active ? 'gray200' : inactiveColor}
            >
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const { path } = props

    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue('#ffffff40', 'whiteAlpha.200')}
            style={{backdropFilter:'blur(10px)'}}
            zIndex={1}
            {...props}
        >
            <Container 
                display="flex" 
                p={2} 
                maxW="container.md" 
                wrap="wrap" 
                align="center" 
                justify="space-between"
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                        <Logo />
                    </Heading>
                </Flex>

            <Stack
                direction={{base: 'column', md: 'row'}}
                display={{base: 'none', md: 'flex'}}
                width={{base: 'full', md: 'auto'}}
                alignItems="center"
                flexGrow={1}
                mt={{ base: 4, nmd: 0 }}
            >
                <LinkItem href="/" path={path}>
                    About
                </LinkItem>
                <LinkItem href="/works" path={path}>
                    Works
                </LinkItem>
                <LinkItem href="/posts" path={path}>
                    Posts
                </LinkItem>
            </Stack>

                <Box flex={1} align="right">
                    <ThemeToggleButton />
                    <Box ml={2} display={{base: 'inline-block', md:'none'}}>
                        <Menu>
                            <MenuButton 
                                as={IconButton} 
                                icon={<HamburgerIcon />} 
                                variant="outline" 
                                aria-label="Options" 
                            />
                            <MenuList>
                                <NextLink href="/" passHref>
                                    <MenuItem as={Link}>About</MenuItem>
                                </NextLink>
                                <NextLink href="/works" passHref>
                                    <MenuItem as={Link}>Works</MenuItem>
                                </NextLink>
                                <NextLink href="/posts" passHref>
                                    <MenuItem as={Link}>Posts</MenuItem>
                                </NextLink>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar