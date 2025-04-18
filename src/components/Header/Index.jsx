import { Container, Flex } from "@chakra-ui/react";
import React from "react";
import Logo from "./Logo";
import NavtItems from "./NavtItems";
import CTAButtons from "./CTAButtons";

const Header = () => {
  return (
    <Container as={"header"} shadow={"2xl"} py={2}>
      <Flex justify={"space-between"} align={"center"}>
        <Logo />
        <NavtItems />
        <CTAButtons />
      </Flex>
    </Container>
  );
};

export default Header;
