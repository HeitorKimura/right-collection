import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"

const styles = {
    global: props => ({
        body: {
            bg: mode('#68d2d0', '#202023')(props)
        }
    })
}

const components = {
    Heading: {
        variants: {
            'section-title': {
                // textDecoration: 'underline',
                fontSize: 30,
                textUnderlineOffset: 6,
                textDecorationColor: '#525252',
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4
            }
        }
    },
    Body: {
        variants: {
            'section-body': {
                textDecoration: 'underline',
                fontSize: 15,
                textUnderlineOffset: 6,
                textDecorationColor: '#525252',
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4
            }
        }
    },
    Link: {
        baseStyle: props => ({
            color: mode('#3d7aed', '#ff63c3')(props),
            textUnderlineOffset: 3
        })
    }
}

const fonts = {
     heading: `'Gill Sans Bold', sans-serif`,
     body: `'Gill Sans Regular', sans-serif`
}

const colors = {
    glassTeal: '#88ccca'
}

const config = {
    initialColorMode: 'light',
    useSystemColorMode: true
}

const theme = extendTheme({
    config,
    styles,
    components,
    fonts,
    colors
})

export default theme