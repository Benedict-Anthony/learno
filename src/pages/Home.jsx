import { Container, Grid, GridItem, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Landing from "../components/Home/Landing";
import DemoVideo from "../components/Home/DemoVideo";
import Charts from "../components/Home/Charts";
import TextToSpeech from "../components/Home/TextToSpeech";

const Home = () => {
  return (
    <Stack>
      <Landing />
      <DemoVideo />
      <Container>
        <Text
          textAlign={"center"}
          fontSize={["20px", "50px"]}
          fontWeight={"black"}
          my={8}
        >
          Explore our uniquesness and value
        </Text>
        <Grid
          templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
          gap="6"
          w={"100%"}
        >
          <GridItem w={"100%"}>
            <TextToSpeech />
          </GridItem>
          <GridItem w={"100%"}>
            <Charts />
          </GridItem>
        </Grid>
      </Container>
    </Stack>
  );
};

export default Home;
