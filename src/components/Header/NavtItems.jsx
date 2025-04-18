import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";

const CTAButtons = () => {
  return (
    <Flex justify={"start"} gap={"2"}>
      <Button variant={"outline"}>Login</Button>
      <Button display={["none", "block"]}>Sign up</Button>
    </Flex>
  );
};

export default CTAButtons;
