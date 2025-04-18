import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import landingImage from "../../assets/landing.png";
const Landing = () => {
  return (
    <Container>
      <Flex
        justify={"space-between"}
        direction={["column", "row"]}
        alignItems={"center"}
        py={10}
      >
        <Box w={"100%"}>
          <Heading fontSize={["20px", "47px"]} lineHeight={["normal", "1.2"]}>
            Grow up your skills by online courses with Learno
          </Heading>
          <Text
            mt={4}
            lineBreak={".5"}
            fontSize={["16px", "20px"]}
            w={["100%", "80%"]}
          >
            Learno is a Global training provider based across the world that
            specialises in accredited and bespoke training courses. We crush the
            barriers togetting a degree.
          </Text>
          <Flex justify={"start"} align={"center"} gap={"3"} mt={10}>
            <Button size={["xl", "2xl"]}>Get started</Button>
            <Button size={["xl", "2xl"]}>Request a demo</Button>
          </Flex>
        </Box>
        <Box w={"100%"}>
          <Image src={landingImage} w={"100%"} h={"100%"} />
        </Box>
      </Flex>
    </Container>
  );
};

export default Landing;
