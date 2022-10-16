import {
  Heading,
  Progress,
  Stack,
  Text,
  Button,
  Divider,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { AiTwotoneStar, AiOutlineStar } from "react-icons/ai";
import { MdVerified } from "react-icons/md";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";

export default function RatingReview() {
  return (
    <Stack direction="row" >
      <Stack>
        <Heading>4.8</Heading>
        <Stack direction="row">
          <AiTwotoneStar />
          <AiTwotoneStar />
          <AiTwotoneStar />
          <AiTwotoneStar />
          <AiOutlineStar />
        </Stack>
        <Text>(1,968 Rating)</Text>
      </Stack>
      <Stack>
        <Stack direction="row">
          <Text>5</Text>
          <AiOutlineStar />
          <Progress value={80} />
          <Text>80%</Text>
        </Stack>
        <Stack direction="row">
          <Text>5</Text>
          <AiOutlineStar />
          <Progress value={80} />
          <Text>80%</Text>
        </Stack>
        <Stack direction="row">
          <Text>5</Text>
          <AiOutlineStar />
          <Progress value={80} />
          <Text>80%</Text>
        </Stack>
        <Stack direction="row">
          <Text>5</Text>
          <AiOutlineStar />
          <Progress value={80} />
          <Text>80%</Text>
        </Stack>
        <Stack direction="row">
          <Text>5</Text>
          <AiOutlineStar />
          <Progress value={80} />
          <Text>80%</Text>
        </Stack>
      </Stack>
      <Stack>
        <Button>Write A Review</Button>
      </Stack>
    
     
    </Stack>
  );
}
