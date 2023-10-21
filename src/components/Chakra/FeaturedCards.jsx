import React from "react";
import { Card, CardBody, Image, Stack, Heading, Text } from "@chakra-ui/react";

export default function FeaturedCards({ title, price, imageURL }) {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image src={imageURL} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="sm">{title}</Heading>
          <Text>{price}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
}
