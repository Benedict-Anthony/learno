import {
  Box,
  Container,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaRecordVinyl, FaWifi } from "react-icons/fa";
import ReactPlayer from "react-player";
import { AiOutlineAudio } from "react-icons/ai";

const DemoVideo = () => {
  return (
    <Container as={"section"}>
      <VStack justify={"center"} align={"center"} w={"100%"}>
        <Box w={["100%", "700px"]} textAlign={"center"} pb={7}>
          <Heading
            py={5}
            fontSize={["18px", "25px"]}
            fontWeight={["500", "700"]}
          >
            High quality video, audio & live classes
          </Heading>
          <Text>
            High-definition video is video of higher resolution and quality than
            standard-definition. While there is no standardized meaning for
            high-definition, generally any video image with considerably more
            than 480 vertical scan lines or 576 vertical lines is considered
            high-definition.
          </Text>
        </Box>
        <Box w={["100%", "900px"]} textAlign={"center"} pb={7}>
          <ReactPlayer
            url={"https://youtu.be/NG5Vi8zrqMM?si=uI-5jrpiJ3T3B4Aw"}
            width={"100%"}
          />
        </Box>

        <HStack
          w={["100%", "500px"]}
          justify={"center"}
          align={"center"}
          gap={["3", "7"]}
        >
          <HStack>
            <AiOutlineAudio size={25} color="#FF6652" />
            <Text>Audio classes</Text>
          </HStack>
          <HStack>
            <FaWifi size={25} color="green" />
            <Text>Live classes</Text>
          </HStack>
          <HStack>
            <FaRecordVinyl size={25} color="#FF6652" />
            <Text>Recorded classes</Text>
          </HStack>
        </HStack>
      </VStack>
    </Container>
  );
};

export default DemoVideo;
