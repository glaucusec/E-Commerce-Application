import React from "react";
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Button } from "@chakra-ui/react";

export default function ProductCard({ imageURL, title, price, button, variant }) {
  return (
    <Card maxW="sm" variant={variant ? variant : ""}>
      <CardBody>
        <Image src={imageURL} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="sm">{title}</Heading>
          <Text>{price}</Text>
        </Stack>
      </CardBody>
      {button ? (
        <CardFooter>
          <Button variant="solid" colorScheme="gray">
            {button}
          </Button>
        </CardFooter>
      ) : (
        ""
      )}
    </Card>
  );
}
