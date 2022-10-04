import React from 'react'
import { Box } from '@chakra-ui/react'
import ContentAndFooter from './components/ContentAndFooter'
import Header from './components/Header'


class App extends React.Component {
    render() {
        return(
            <Box
              border='2px'
              borderColor='black'
              m='0 auto'
              w='45vw' 
              h='100vh' 
              bg='#f5ece5'
              boxShadow='dark-lg'
              >
                <Header />
                <ContentAndFooter />
            </Box>
        )
    }
}

export default App
