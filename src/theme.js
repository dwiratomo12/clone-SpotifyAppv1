import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    primary: {
      400: '#24cf88',// green
      500: '#949494',// gray
      600: '#007acc', //blue
      700: '#1d1f1dd5', //black
    }
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 500,
        borderRadius: 30,
      },
      variants: {
        solid: {
          bg: 'primary.500',
          color: 'white',
          _hover: {
            bg: 'primary.400',
          },
          _focus: {
            ring: 2,
            ringColor: 'primary.500',
          }
        },
        outline: {
          borderColor: 'primary.600',
          color: 'primary.600',
          _focus: {
            ring: 2,
            ringColor: 'primary.600',
          }
        }
      }
    },
    Input: {
      defaultProps: {
        focusBorderColor: 'primary.500',
      },
    },
    Textarea: {
      defaultProps: {
        focusBorderColor: 'primary.500',
      },
    },
    Heading: {
      baseStyle: {
        fontFamily: '"Poppins", sans-serif',
      }
    }
  }
})

export default theme;