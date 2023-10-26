import React from "react";
import { Container, Box } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter, Text } from "@chakra-ui/react";
import { Heading, Center } from "@chakra-ui/react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Flex,
  Button,
  Stack,
  SimpleGrid,
  Select,
  Divider,
} from "@chakra-ui/react";
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import ProductCard from "../components/ui/ProductCard";

export default function Men() {
  const menProducts = [
    {
      imageURL: "https://demo.evershop.io/assets/catalog/8247/2126/plv1439-White-list.png",
      name: "Strutter shoes",
      price: "$422.40",
    },
    {
      imageURL: "https://demo.evershop.io/assets/catalog/7659/2021/plv1120-White-list.png",
      name: "Nizza trefoil shoes",
      price: "$217.80",
    },
    {
      imageURL: "https://demo.evershop.io/assets/catalog/1441/5452/plv4117-Blue-list.png",
      name: "Hacked fashion chuck taylor all star",
      price: "$882.20",
    },
    {
      imageURL: "https://demo.evershop.io/assets/catalog/7599/6547/plv3643-Blue-list.png",
      name: "Seasonal color chuck 70",
      price: "$185.90",
    },
    {
      imageURL: "https://demo.evershop.io/assets/catalog/1034/3600/plv7632-Green-list.png",
      name: "Nike air zoom pegasus 35",
      price: "$452.10",
    },
    {
      imageURL: "https://demo.evershop.io/assets/catalog/5800/1660/plv5407-Black-list.png",
      name: "Nike react infinity run flyknit",
      price: "$597.30",
    },
    {
      imageURL: "https://demo.evershop.io/assets/catalog/4477/5876/plv3335-Pink-list.png",
      name: "Nike react phantom run flyknit 2",
      price: "$789.80",
    },
    {
      imageURL: "https://demo.evershop.io/assets/catalog/5761/1580/plv5236-Black-list.png",
      name: "Nike react phantom run flyknit 2",
      price: "$789.80",
    },
  ];
  return (
    <Box m={"20px"}>
      <Box marginBottom={"10px"}>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">Men</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Card variant={"filled"} colorScheme={"twitter"}>
        <CardBody>
          <Heading>Men</Heading>
        </CardBody>
      </Card>
      <Box marginTop={"10px"} marginBottom={"10px"}>
        <Flex justifyContent={"space-between"} alignItems={"center"} flexWrap={"wrap"}>
          <Heading as="h6" size="xs">
            SHOP BY
          </Heading>
          <Stack spacing={3}>
            <Select variant="filled" placeholder="Default">
              <option value="price">Price</option>
              <option value="name">Name</option>
            </Select>
          </Stack>
        </Flex>
      </Box>
      <Flex justifyContent={"space-between"}>
        <Box width={["0px", "0px", "300px", "400px"]}>
          <Heading as="h6" size="sm">
            Price
          </Heading>
          <RangeSlider aria-label={["min", "max"]} defaultValue={[10, 30]} marginBottom={"10px"}>
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb index={0} />
            <RangeSliderThumb index={1} />
          </RangeSlider>

          <Heading as="h6" size="xs" marginBottom={"10px"}>
            COLOR
          </Heading>
          <Divider />
          <Flex flexDirection={"column"}>
            <Checkbox>White</Checkbox>
            <Checkbox>Black</Checkbox>
            <Checkbox>Grey</Checkbox>
            <Checkbox>Blue</Checkbox>
            <Checkbox>Brown</Checkbox>
            <Checkbox>Green</Checkbox>
            <Checkbox>Pink</Checkbox>
            <Checkbox>Red</Checkbox>
          </Flex>
          <Heading as="h6" size="xs" marginBottom={"10px"}>
            SIZE
          </Heading>
          <Divider />
          <Flex flexDirection={"column"}>
            <Checkbox>L</Checkbox>
            <Checkbox>XL</Checkbox>
            <Checkbox>M</Checkbox>
            <Checkbox>S</Checkbox>
            <Checkbox>X</Checkbox>
          </Flex>
          <Heading as="h6" size="xs" marginBottom={"10px"}>
            BRAND
          </Heading>
          <Divider />
          <Flex flexDirection={"column"}>
            <Checkbox>Converse</Checkbox>
            <Checkbox>Nike</Checkbox>
          </Flex>
        </Box>

        <SimpleGrid spacing={4} columns={[2, 2, 3, 4]}>
          {menProducts.map((collection) => (
            <ProductCard
              title={collection.name}
              price={collection.price}
              imageURL={collection.imageURL}
              variant={"outline"}
            />
          ))}
        </SimpleGrid>
      </Flex>
    </Box>
  );
}
