import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../../App";
import usePlatform from "../../hooks/usePlatform";
import useGenre from "../../hooks/useGenre";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenre(gameQuery.genreId);
  const platform = usePlatform(gameQuery.platformId);

  const title = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" my={3} fontSize="5xl">
      {title}
    </Heading>
  );
};

export default GameHeading;
