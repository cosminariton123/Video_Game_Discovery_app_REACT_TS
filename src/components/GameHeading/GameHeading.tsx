import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const title = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;

  return (
    <Heading as="h1" my={3} fontSize="5xl">
      {title}
    </Heading>
  );
};

export default GameHeading;
