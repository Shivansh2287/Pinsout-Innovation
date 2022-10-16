import {
  Box,
  Button,
  Divider,
  GridItem,
  Heading,
  Progress,
  SimpleGrid,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import main from "../assets/main.png";
import one from "../assets/1.png";
import two from "../assets/2.png";
import three from "../assets/3.png";
import four from "../assets/4.png";
import five from "../assets/5.png";
import { BsShareFill } from "react-icons/bs";
import { AiTwotoneStar, AiOutlineStar } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { IoSwapHorizontalSharp } from "react-icons/io5";
import { FaShippingFast } from "react-icons/fa";
import { TbReplace } from "react-icons/tb";

export default function ProductSection() {
  return (
    <SimpleGrid spacing={10} px={16} py={10} columns={2}>
      <GridItem >

     
      <Stack height="100%" width="100%">
        <Stack>
          <Image src={main} alt="logo"  />
        </Stack>
        <Stack direction="row" justifyContent='space-between'>
          <Image src={one} alt="logo" />
          <Image src={two} alt="logo" />
          <Image src={three} alt="logo" />
          <Image src={four} alt="logo" />
          <Image src={five} alt="logo" />
        </Stack>
      </Stack>
       </GridItem>
       <GridItem>
      <Stack>
        <Text>CLOTHING</Text>
        <Stack direction="row">
          <Heading>Leather Boots With Tall Leg</Heading>
          <BsShareFill />
        </Stack>
        <Stack direction="row">
          <Stack direction="row">
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiOutlineStar />
          </Stack>
          <Text>(1,234 review)</Text>
          <Text>
            <span color="black">SKU</span>: A515-56-36UT
          </Text>
          <Text color="#3DAB25">In Stock</Text>
        </Stack>
        <Stack direction="row">
          <Heading color="#F3692E">$68.00</Heading>
          <Text color="#A0A0A0">
            <del>$68.00</del>
          </Text>
          <Tooltip
            hasArrow
            label="Search places"
            bg="red.600"
            isOpen
            placement="right-end"
          >
            <Text>Save $12</Text>
          </Tooltip>
        </Stack>
        <Stack width="50%">
          <Text>
            The garments labelled as Committed are products that have been
            produced using sustainable fibres or processes, reducing their
            environmental impact.
          </Text>
        </Stack>
        <Divider />
        <Stack direction="row" width='100%' >
           <Box  width='50%'>
          <Heading>Sold It:</Heading>
          </Box>
          <Box  width='50%'>
            <Stack spacing={1}>

          <Progress value={80} />
           <Text>
            Avaliable:<span style={{color:"#3DAB25"}}>20</span>
          </Text>
            </Stack>
          </Box>
         
        </Stack>
        <Stack direction="row" spacing={20}>
          <Stack>
            <Text>Hurry Up!</Text>
            <Text>Offer Ends In:</Text>
          </Stack>
          <Stack direction="row">
            <Box background="#E5E5E5" color="black">
              <Text>12</Text>
              <Text>Days</Text>
            </Box>
            <Text>:</Text>
            <Box background="#E5E5E5" color="black">
              <Text>12</Text>
              <Text>Hours</Text>
            </Box>
            <Text>:</Text>
            <Box background="#E5E5E5" color="black">
              <Text>12</Text>
              <Text>Minutes</Text>
            </Box>
            <Text>:</Text>
            <Box background="#E5E5E5" color="black">
              <Text>12</Text>
              <Text>Seconds</Text>
            </Box>
          </Stack>
        </Stack>
        <Divider />
        <Stack>
          <Text>Size: M</Text>
          <Stack direction="row">
            <Box>XS</Box>
            <Box>S</Box>
            <Box>M</Box>
            <Box>L</Box>
            <Box>XL</Box>
            <Box>XXL</Box>
            <Text>
              <u>View Size Guide</u>
            </Text>
          </Stack>
        </Stack>
        <Stack>
          <Text>Quantity:</Text>
          <Stack direction="row">
            <Button>-</Button>
            <Text>1</Text>
            <Button background="linear-gradient(94.41deg, #FA6C58 8.77%, #FA9158 99.95%, #FA9258 99.96%, #FA9258 99.97%, rgba(250, 108, 88, 0) 99.98%, #FA6C58 99.99%);">
              +
            </Button>
            <Button background="linear-gradient(94.41deg, #FA6C58 8.77%, #FA9158 99.95%, #FA9258 99.96%, #FA9258 99.97%, rgba(250, 108, 88, 0) 99.98%, #FA6C58 99.99%);">
              Add to
            </Button>
            <Button>
              <IoSwapHorizontalSharp />
            </Button>
            <Button>
              <AiOutlineHeart />
            </Button>
          </Stack>
        </Stack>
        <Text>Ready to ship | Order today</Text>
        <Divider />
        <Stack>
          <Text color="black">Get It Today</Text>
          <Stack direction="row">
            <FaShippingFast />
            <Stack>
              <Text>Fast Shipping</Text>
              <Text>Free Delivery When order from $500.</Text>
            </Stack>
          </Stack>
          <Stack direction="row">
            <TbReplace />
            <Stack>
              <Text>100 - Day Returns</Text>
              <Text>
                Not impressed? Get a refund. You have 100 days to break our
                hearts.
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
        </GridItem>
    </SimpleGrid>
  );
}
