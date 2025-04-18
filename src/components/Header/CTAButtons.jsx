import React, { useState, useRef } from "react";
import { Flex, Text, Box, Button } from "@chakra-ui/react";
import { IoIosClose, IoIosMenu } from "react-icons/io";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const NavItems = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef();
  const containerRef = useRef();

  const toggleMenu = () => setIsOpen(!isOpen);

  useGSAP(() => {
    if (isOpen) {
      gsap.to(containerRef.current, {
        x: 0,
        duration: 0.5,
        ease: "power3.out",
        display: "flex",
      });
      gsap.fromTo(
        navRef.current.children,
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.3,
          stagger: 0.1,
          ease: "power3.out",
        }
      );
    } else {
      gsap.to(containerRef.current, {
        x: "-100%",
        duration: 0.4,
        ease: "power2.in",
      });
    }
  }, [isOpen]);

  return (
    <Box>
      {/* Toggle Button */}
      <Button
        variant={"outline"}
        aria-label="Toggle navigation"
        onClick={toggleMenu}
        zIndex={20}
        position="relative"
      >
        {isOpen ? (
          <IoIosClose color="#FF6652" />
        ) : (
          <IoIosMenu color="#FF6652" />
        )}
      </Button>

      <Flex
        ref={containerRef}
        position="fixed"
        top="0"
        left="0"
        height="100vh"
        width="70%"
        maxW="250px"
        bg="white"
        color={"#000"}
        direction="column"
        padding="4"
        gap="5"
        zIndex="10"
        transform="translateX(-100%)"
        display={{ base: "flex", md: "none" }}
        boxShadow="lg"
      >
        <Flex as="ul" ref={navRef} direction="column" gap="4">
          {["Home", "About", "Services", "Course"].map((item, index) => (
            <Text
              key={index}
              className="capitalize"
              fontWeight="medium"
              fontSize="lg"
              cursor="pointer"
            >
              {item}
            </Text>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default NavItems;
