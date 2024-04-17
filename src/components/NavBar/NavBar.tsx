import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.webp";
import ColorModeSwitch from "../ColorModeSwitch";
import SearchInput from "../SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack paddingY="30px" paddingX={5}>
      <Link to="/vilabran">
        <Image src={logo} boxSize="60px" objectFit="cover"></Image>
      </Link>
      <SearchInput></SearchInput>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
