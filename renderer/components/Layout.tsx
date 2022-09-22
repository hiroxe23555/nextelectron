import { HamburgerIcon,SettingsIcon,MoonIcon, SunIcon } from "@chakra-ui/icons";
import { 
    useDisclosure,
    Flex,
    Button,
    IconButton,
    Heading,
    Box,
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent, 
    DrawerFooter,
    useColorMode,
    useColorModeValue
  } from "@chakra-ui/react";
import { memo, VFC } from "react";
import Link from 'next/link'
import React from "react";


export const Layout: VFC = memo(() => {

const { colorMode, toggleColorMode } = useColorMode()
const bgGradient = useColorModeValue("linear(to-l, blue.400, #7928CA,#FF0080)", "linear(to-r, blue.400, #7928CA,#FF0080)")
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef()
  return (
      <>
      <Box sx={{ position: 'sticky', top: '0', }}>
      <Flex 
        as="nav"
        color="gray.100"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
        pos="relative"
        position="static" //固定fixed 
      >
      
        <Flex align="center" as="a" me={14} _hover={{ cursor: "pointer" }}>
        <Heading
        mb={8}
        bgClip="text"
        bgGradient={bgGradient}
        fontSize="6xl"
        fontWeight="extrabold"
        >
        Home
        </Heading>    
        </Flex>
        <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          display={{ base: "none", md: "flex" }}
        >
        <IconButton
        // _focus={{_focus: "none"}} //周りの青いアウトラインが気になる場合に消す方法
        mb={10}
        aria-label="DarkMode Switch"
        icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon  />} //自分の好みでSunアイコンはreact-iconsを使用しています
        onClick={toggleColorMode}
        />
          <Box p={10} >
            <Link href = "/">
            <Heading
            mb={3}
            bgClip="text"
            bgGradient={bgGradient}
            fontSize="xl"
            fontWeight="extrabold"
            >
             請求書
            </Heading>  
              </Link>
          </Box>
          <Box p={10} >
          <Link href = "/about">
          <Heading
            mb={3}
            bgClip="text"
            bgGradient={bgGradient}
            fontSize="xl"
            fontWeight="extrabold"
            >
             車検書
            </Heading> 
             </Link>
          </Box>
        </Flex>
        <IconButton
          aria-label="メニューボタン"
          icon={<HamburgerIcon />}
          size="right"
          variant="unstyled"
          onClick={onOpen}
        />
        
      </Flex>
      </Box>
      <Drawer placement="top" isOpen={isOpen} onClose={onClose} finalFocusRef= {btnRef} >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody p={10} bg="black">
              <Button w="100%" bg ="linear-gradient(45deg, red, black)" color ="white">Top</Button>
              <Button w="100%" bg ="linear-gradient(45deg, red, black)" color ="white"><Link href = "/">請求書</Link></Button>
              <Button w="100%" bg ="linear-gradient(45deg, red, black)" color ="white"><Link href = "/about">車検書</Link></Button>
              <Button w="100%" bg ="linear-gradient(45deg, red, black)" color ="white"><Link href = "/initial-props">設定</Link></Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
      </>
  );
});
//linear-gradient(45deg, teal, purple)
export default Layout
