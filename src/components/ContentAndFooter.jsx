import { Circle, InputGroup, VStack, Input, Box, Flex, HStack } from '@chakra-ui/react'
import { FaPaperPlane, FaSmile, FaCamera } from 'react-icons/fa';
import { FiPaperclip } from 'react-icons/fi';
import React from 'react'

class ContentAndFooter extends React.Component {
    state = {
        user: [
            {
                name: '', 
                message: ''
            }
        ]
    }

    sendMessage = () => {
        
        const newMessage= {
            name: this.state.name,
            message: this.state.message
        }
        
        const actualMessages = [...this.state.user, newMessage]

        this.setState({ user: actualMessages })

    }
        
    inputName = (e) => this.setState({ name: e.target.value })
    inputMsg = (e) => this.setState({ message: e.target.value})
    
    enterToSend = (e) => {
        if(e.keyCode === 13){
          this.sendMessage()
        }
    }

    render() {
        const messageList = this.state.user.map((user, index) => {
            // user content: name + message
            return(
                <Flex
                  key={user}
                  id={index}
                  margin='10px'
                  fontSize={'14px'}
                  borderRadius={'5px'}
                  paddingLeft={'2px'}
                  >
                    <Box
                      as='text'
                      fontSize={'14px'}
                      fontWeight={800}
                      color='#44bd32'
                      marginRight={'10px'}
                      >
                        {user.name}
                    </Box>
                    <Box 
                      fontSize={'1.1rem'}
                      fontWeight={500}
                      bg='white'
                      borderRadius={'5px'}
                      wordBreak='break-word' //break line
                      boxShadow={'0px 3px 3px 0px rgba(0, 0, 0, 0.2)'}
                      position='relative'
                      maxWidth='20vw'
                      alignSelf={'center'}
                      >
                        {user.message}
                    </Box>
                </Flex>
            ) 
        })
        return(
            <>
            <VStack 
              w='full'
              h='full'
              spacing={5}
              p={4}
              direction='column-reverse'
              justify={'flex-start'}
              overflow='auto'
              >
                {messageList} 
            </VStack>
            <HStack 
              w='45vw'
              h='5rem'
              position='absolute'
              bottom='0'
              p={4}
              >
                <FaSmile size='3rem'/>
                <InputGroup>
                    <Input 
                      value={this.state.user.name}
                      onChange={this.inputName}
                      onKeyDown={this.enterToSend}
                      placeholder='Usuário'

                      _placeholder={{ color: 'gray' }}
                      w='10rem'
                      border='2px'
                      borderColor='#128C7E'
                      marginRight={2}
                    />
                    <Input 
                      value={this.state.user.message}
                      onChange={this.inputMsg}
                      onKeyDown={this.enterToSend}
                      placeholder='Mensagem...'

                      _placeholder={{ color: 'gray' }}
                      border='2px'
                      borderColor='#128C7E'
                    /> 
                </InputGroup>             
                <FiPaperclip size='3rem'  />
                <FaCamera size='3rem'/>
                <Circle
                  onClick={this.sendMessage}
                  onKeyDown={this.enterToSend}

                  as='button' 
                  size='4rem' 
                  bg='#128C7E'
                  boxShadow='dark-lg'
                  border='1px'
                  borderColor={'white'}
                    >
                      <FaPaperPlane size='2rem' />
                </Circle>              
            </HStack>
            </>
        )
    }
}

export default ContentAndFooter