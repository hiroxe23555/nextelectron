import { extendTheme } from "@chakra-ui/react"
/*
const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor:"black",
        color:"white"
      },
      p: {
        fontSize: { base: "md", md: "lg" },
        lineHeight: "tall"
      }
    }
  }
});

export default theme;
*/


// NB: Chakra gives you access to `colorMode` and `theme` in `props`
const theme = extendTheme({
  styles: {
    global: (props) => ({
      'html, body': {
        fontSize: 'sm',
        color: props.colorMode === 'dark' ? 'white' : 'gray.600',
        lineHeight: 'tall',
        padding: 0,
        margin: 0,
      },
      a: {
        color: props.colorMode === 'dark' ? 'white' : 'gray.600',
        textDecoration: 'none',
      },
    }),
  }
});

export default theme;
