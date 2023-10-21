import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  Image,
} from "@chakra-ui/react";
export default function UICards({ title, description, button, imageURL }) {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image src={imageURL} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text>{description}</Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <Button variant="solid" colorScheme="gray">
          {button}
        </Button>
      </CardFooter>
    </Card>
  );
}
