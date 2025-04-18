import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { FaBookOpen } from "react-icons/fa";

const Logo = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      gap={"1"}
      alignItems={"center"}
    >
      <FaBookOpen size={25} color="#FF6652" />
      <Text fontWeight={"700"} fontSize={"x-large"}>
        Learno
      </Text>
    </Box>
  );
};

export default Logo;
