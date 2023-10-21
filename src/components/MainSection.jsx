import React from "react";
import UICards from "./Chakra/CategoryCards";
import FeaturedCards from "./Chakra/FeaturedCards";
import { Flex, Box, Center, Heading } from "@chakra-ui/react";

export default function MainSection() {
  const collections = [
    {
      title: "Men shoes collection",
      description:
        "Constructed from luxury nylons, leathers, and custom hardware, featuring sport details such as hidden breathing vents, waterproof + antimicrobial linings, and more.",
      button: "Shop Kids",
      imageURL: "https://demo.evershop.io/assets/homepage/banner/men-shoes.jpeg",
    },
    {
      title: "Women shoes collection",
      description:
        "Constructed from luxury nylons, leathers, and custom hardware, featuring sport details such as hidden breathing vents, waterproof + antimicrobial linings, and more.",
      button: "Shop Women",
      imageURL: "https://demo.evershop.io/assets/homepage/banner/women-shoes.jpeg",
    },
    {
      title: "Men shoes collection",
      description:
        "Constructed from luxury nylons, leathers, and custom hardware, featuring sport details such as hidden breathing vents, waterproof + antimicrobial linings, and more.",
      button: "Shop Men",
      imageURL: "https://demo.evershop.io/assets/homepage/banner/kid-shoes.jpeg",
    },
  ];
  const featuredCollections = [
    {
      imageURL: "https://demo.evershop.io/assets/catalog/1034/3600/plv7632-Green-list.png",
      title: "Nike air zoom pegasus 35",
      price: "$452.10",
    },
    {
      imageURL: "https://demo.evershop.io/assets/catalog/5059/3470/plv4547-Grey-list.png",
      title: "Mix and match chuck taylor all star",
      price: "$877.80",
    },
    {
      imageURL: "https://demo.evershop.io/assets/catalog/4056/5908/plv3360-Black-list.png",
      title: "Geography class chuck taylor all star",
      price: "$275.00",
    },
    {
      imageURL: "https://demo.evershop.io/assets/catalog/3241/9300/plv1517-Pink-list.png",
      title: "Swift run x shoes",
      price: "$370.70",
    },
  ];
  return (
    <Box>
      <Box>
        <Flex justifyContent={"center"} gap={"10px"}>
          {collections.map((collection) => (
            <UICards
              title={collection.title}
              description={collection.description}
              button={collection.button}
              imageURL={collection.imageURL}
            />
          ))}
        </Flex>
      </Box>
      <Center h="50px">
        <Heading size={"md"}>Featured Products</Heading>
      </Center>
      <Flex justifyContent={"center"} gap={"5px"}>
        {featuredCollections.map((collection) => (
          <FeaturedCards
            title={collection.title}
            price={collection.price}
            imageURL={collection.imageURL}
          />
        ))}
      </Flex>
    </Box>
  );
}
