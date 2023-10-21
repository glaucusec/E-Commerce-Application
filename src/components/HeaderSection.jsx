import React from "react";
import { Icon } from "@chakra-ui/react";
import { AiOutlineShoppingCart, AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { Flex, Box, Card, Heading, Button, ButtonGroup, Text } from "@chakra-ui/react";

export default function HeaderSection() {
  return (
    <Box m={"10px"} height={"50px"}>
      <Flex justifyContent={"space-between"} alignItems={"center"} flexWrap={"wrap"}>
        <Box>
          <Heading as="h3" size="lg">
            Shopify
          </Heading>
        </Box>
        <Box>
          <Flex gap={"10px"}>
            <Box>
              <Heading size={"md"}>Men</Heading>
            </Box>
            <Box>
              <Heading size={"md"}>Women</Heading>
            </Box>
          </Flex>
        </Box>
        <Box>
          <ButtonGroup gap="2">
            <Icon as={AiOutlineSearch} boxSize={8} />
            <Icon as={AiOutlineShoppingCart} boxSize={8} />
            <Icon as={AiOutlineUser} boxSize={8} />
          </ButtonGroup>
        </Box>
      </Flex>
    </Box>
  );
}
