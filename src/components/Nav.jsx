import { Box, Button, useMediaQuery } from '@chakra-ui/react';
import React from 'react'
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { Link as HrefLink } from '@chakra-ui/react'
import { SiGithub, SiMinutemailer, SiLinkedin } from "react-icons/si";
import { MdOutlineContactSupport } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { Icon, Flex, Modal,useDisclosure, ModalOverlay, ModalContent, ModalFooter, ModalHeader, ModalCloseButton, ModalBody,keyframes, usePrefersReducedMotion } from '@chakra-ui/react';



function Nav() {
  const spin = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(8px);
  100% { transform: translateY(0); }
`

  const prefersReducedMotion = usePrefersReducedMotion();
  const animation = prefersReducedMotion
  ? undefined
  : `${spin} infinite 4s linear`

  const animationDelay1s = prefersReducedMotion
  ? undefined
  : `${spin} infinite 4s 1s linear`

  const animationDelay2s = prefersReducedMotion
  ? undefined
  : `${spin} infinite 4s 2s linear`

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [size, setSize] = React.useState('md')

  const handleModal = (size) => {
    setSize(size)
    onOpen()
  }

  return (
    <Box m={12} display="flex" alignItems="center" justifyContent="space-between"  flexDirection={{sm: "column", md: "row"}} gap={{sm: "5"}}>
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>


      <Flex>
            <Link to="/">
              <Button colorScheme='teal' size='md' ml={{sm: "0", md: "10"}}>
                <Icon as={AiOutlineHome} w={5} h={5} mr={2} />
                Home
              </Button>
            </Link>

            <Box justifyContent={{sm: "center"}}>
              <Button colorScheme='teal' size='md' ml={{sm: "1", md: "10"}} onClick={() => handleModal("md")}
                key={"md"}>
                <Icon as={MdOutlineContactSupport} w={5} h={5} mr={2}/>
                Contact
              </Button>


                <Modal onClose={onClose} size={size} isOpen={isOpen}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Contact</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Flex justifyContent="center" gap="6">
                    <HrefLink href='mailto:dan.angelin@hotmail.com' isExternal>
                      <Icon animation={animation}  w={9} h={9} as={SiMinutemailer} />
                    </HrefLink>
                    <HrefLink href='https://github.com/DanAngelin' isExternal>
                      <Icon animation={animationDelay1s} w={9} h={9} as={SiGithub} />
                    </HrefLink>
                    <HrefLink href='https://www.linkedin.com/in/angelindan/' isExternal>
                      <Icon animation={animationDelay2s} w={9} h={9} as={SiLinkedin} />
                      </HrefLink>
                    </Flex>
                  </ModalBody>
                  <ModalFooter>
                    <Button onClick={onClose}>Close</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Box >
        </Flex>

      
    </Box>
  )
}

export default Nav