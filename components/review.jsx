import React from 'react'
import { AiTwotoneStar, AiOutlineStar } from "react-icons/ai";
import { MdVerified } from "react-icons/md";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import {
  Heading,
  Progress,
  Stack,
  Text,
  Button,
  Divider,
} from "@chakra-ui/react";
import Image from 'next/image';

export default function Review() {
  return (
    <Stack marginTop="5%">
      <Stack direction="row">
        <Image
          src={p1}
          width={50}
          height={50}
          style={{
            borderRadius: "50%",
          }}
        />
        <Text>Viola Lucas</Text>
        <MdVerified />
        <Text>August 13, 2022</Text>
        <Stack direction="row">
          <AiTwotoneStar />
          <AiTwotoneStar />
          <AiTwotoneStar />
          <AiTwotoneStar />
          <AiOutlineStar />
        </Stack>
        <Text>
          Its really easy to use and it is exactly what I am looking for. A lot
          of good looking templates & its highly customizable. Live support is
          helpful, solved my issue in no time.
        </Text>
      </Stack>
    </Stack>
  );
}
