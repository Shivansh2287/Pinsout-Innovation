import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { AiFillStar, AiTwotoneStar, AiOutlineStar } from "react-icons/ai";
import { FaShippingFast } from "react-icons/fa";

export default function RelatedProducts() {
  return (
    <Stack>
      <Stack direction="row" justifyContent="center" spacing={30}>
        <Text size="5xl" color="black">
          <u>Description</u>
        </Text>
        <Text>Specifications</Text>
        <Text>Review</Text>
      </Stack>
      <Stack direction="row" marginTop={10}>
        <Stack width="40%" marginRight="30%">
          <Text>About This Products</Text>
          <Text>
            Keep your home organized, yet elegant with storage cabinets by H&N
            Patio Furniture. These cabinets not only make a great storage units,
            but also bring a great decorative accent to your decor.
            Traditionally designed, they are perfect to be used in the hallway,
            living room, bedroom, office or any place where you need to store or
            display things. Made of high quality materials, they are sturdy and
            durable for years. Bring one-of-a-kind look to your interior with
            furniture from H&N Patio Furniture!
          </Text>
          <Text>Indochine Style</Text>
          <Text>
            Indochine style Interior design is a mix of traditional Asian
            nostalgia and French romance. This skillfully crafted cabinet will
            perfectly enhance your indoor furnishing, while leaving a
            long-lasting impression and a traditional accent.
          </Text>
          <Text>Features Products</Text>
          <Text>
            Explore the many possibilities of transforming your home with our
            Decor Transfers. Exceptionally detailed, gorgeously composed and
            effortlessly easy to apply, these transfers will transform your
            living space.
          </Text>
        </Stack>
        <Stack>
          <Stack direction="row" spacing={20}>
            <Text>Rating</Text>
            <Stack direction="row">
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiOutlineStar />
              <Text>(1,234 review)</Text>
            </Stack>
          </Stack>
          <Stack direction="row" spacing={20}>
            <Text>Outer Shell</Text>
            <Text>100% polyester</Text>
          </Stack>
          <Stack direction="row" spacing={20}>
            <Text>Linking</Text>
            <Text>100% polyurethane</Text>
          </Stack>
          <Stack direction="row" spacing={20}>
            <Text>Size</Text>
            <Text>S,M,L,XL</Text>
          </Stack>
          <Stack direction="row" spacing={20}>
            <Text>Colors</Text>
            <Text>Grey, Red, Blue, Black</Text>
          </Stack>
        </Stack>
      </Stack>
      <Stack direction='row' spacing={60}>
        <Stack height="30%" width="10%">
          <FaShippingFast />
          <Text>Shipping Faster</Text>
          <Text>
            Use on walls, furniture, doors and many more surfaces. The
            possibilities are endless.
          </Text>
        </Stack>
        <Stack height="30%" width="10%">
          <FaShippingFast />
          <Text>Shipping Faster</Text>
          <Text>
            Use on walls, furniture, doors and many more surfaces. The
            possibilities are endless.
          </Text>
        </Stack>
        <Stack height="30%" width="10%">
          <FaShippingFast />
          <Text>Shipping Faster</Text>
          <Text>
            Use on walls, furniture, doors and many more surfaces. The
            possibilities are endless.
          </Text>
        </Stack>
        <Stack height="30%" width="10%">
          <FaShippingFast />
          <Text>Shipping Faster</Text>
          <Text>
            Use on walls, furniture, doors and many more surfaces. The
            possibilities are endless.
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
}
