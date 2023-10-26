import React from "react";
import { Icon } from "@chakra-ui/react";
import { BiLogoVisa, BiLogoMastercard, BiLogoPaypal } from "react-icons/bi";
import { FaGooglePay } from "react-icons/fa";
import { Box, Flex, Spacer, Heading } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box bg="gray.500" w="100%" p={2} color="white">
      <Flex gap={"10px"} alignItems={"center"}>
        <Icon as={BiLogoVisa} boxSize={8} />
        <Icon as={BiLogoMastercard} boxSize={8} />
        <Icon as={FaGooglePay} boxSize={8} />
        <Icon as={BiLogoPaypal} boxSize={8} />
        <Spacer />
        <Heading size={"sm"}>2023@ All Rights Reserved</Heading>
      </Flex>
    </Box>
  );
}
