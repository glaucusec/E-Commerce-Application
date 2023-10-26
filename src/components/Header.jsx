import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Icon } from "@chakra-ui/react";
import { AiOutlineShoppingCart, AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { Flex, Box, Card, Heading, Button, ButtonGroup, Text } from "@chakra-ui/react";
import {
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerContent,
  DrawerBody,
  DrawerFooter,
  Input,
  DrawerHeader,
} from "@chakra-ui/react";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box m={"10px"} height={"50px"}>
      <Flex justifyContent={"space-between"} alignItems={"center"} flexWrap={"wrap"}>
        <Box>
          <Heading as="h3" size="lg">
            <Link to="/">Shopify</Link>
          </Heading>
        </Box>
        <Box>
          <Flex gap={"10px"}>
            <Box>
              <Heading size={"md"}>
                <Link to="/men">Men</Link>
              </Heading>
            </Box>
            <Box>
              <Heading size={"md"}>
                <Link to="/women">Women</Link>
              </Heading>
            </Box>
          </Flex>
        </Box>
        <Box>
          <ButtonGroup gap="2">
            <Icon onClick={onOpen} as={AiOutlineSearch} boxSize={8} />
            <Icon as={AiOutlineShoppingCart} boxSize={8} />
            <Icon as={AiOutlineUser} boxSize={8} />
          </ButtonGroup>
        </Box>
      </Flex>
      <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Search Products</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Search here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Search</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
