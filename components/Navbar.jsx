import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Divider,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { FiSearch, FiHeart, FiShoppingCart, FiUser } from "react-icons/fi";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <>
      <Stack direction="row">
        <Accordion defaultIndex={[0]} allowMultiple>
          <Stack direction="row">
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Section 1 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Section 2 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          </Stack>
        </Accordion>
      </Stack>
      <Divider />
      <Stack direction="row">
        <Stack direction="row">
          <Image src={logo} width={100} height={20} />
          <Button>Home</Button>
          <Button>School Uniform</Button>
          <Button>Corporate</Button>
          <Button>Sports</Button>
          <Button>Blog</Button>
        </Stack>
        <Stack direction="row">
          <FiSearch size="30px" />
          <FiHeart size="30px" />
          <FiShoppingCart size="30px" />
          <FiUser size="30px" />
        </Stack>
      </Stack>
      <Stack
        direction="row"
        backgroundColor="black"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <Text>Free Delivery on orders above Rs. 1000, DON’T MISS</Text>
        <Button>SHOP NOW</Button>
      </Stack>
      <Stack>
        <Text>
          Home/Category Sports/<span color="black">Football Shirt</span>
        </Text>
      </Stack>
    </>
  );
}
