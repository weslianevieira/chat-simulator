import { Text, Spacer, Avatar, HStack } from '@chakra-ui/react'
import { BsCameraVideo, BsTelephone, BsThreeDotsVertical } from 'react-icons/bs';
import { TiArrowLeftOutline } from 'react-icons/ti';
import React from 'react' 

class Header extends React.Component {

    render() {
        return(
            <HStack 
              w='full'
              h='4rem'
              spacing={5 }
              p={4}
              bg='#128C7E'
              >
                <TiArrowLeftOutline 
                  size='40px'
                  color='white'
                />
                <Avatar /> 

                <Text 
                  fontSize='20px' 
                  fontWeight='800'
                  color='white'
                  >
                    Fulano(a)
                </Text>
                <Spacer />         
                <BsCameraVideo 
                  size='40px' 
                  color='white'
                />
                <BsTelephone 
                  size='35px'
                  color='white'
                />
                <BsThreeDotsVertical 
                  size='40px'
                  color='white' 
                />             
            </HStack>
        )
    }
}

export default Header