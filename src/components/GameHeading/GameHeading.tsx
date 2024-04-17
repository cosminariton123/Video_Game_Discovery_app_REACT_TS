import { Heading } from "@chakra-ui/react";
import usePlatform from "../../hooks/usePlatform";
import useGenre from "../../hooks/useGenre";
import useGameQueryStore from "../../store";

const GameHeading = () => {
  const genre = useGenre(useGameQueryStore((s) => s.gameQuery.genreId));
  const platform = usePlatform(
    useGameQueryStore((s) => s.gameQuery.platformId)
  );

  const title = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" my={3} fontSize="5xl">
      {title}
    </Heading>
  );
};

export default GameHeading;
