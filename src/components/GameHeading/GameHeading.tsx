import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../../App";
import useGenres from "../../hooks/useGenres";
import usePlatforms from "../../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const genre = genres.results.find((genre) => genre.id === gameQuery.genreId);

  const { data: platforms } = usePlatforms();
  const platform = platforms.results.find(
    (platform) => platform.id === gameQuery.platformId
  );

  const title = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" my={3} fontSize="5xl">
      {title}
    </Heading>
  );
};

export default GameHeading;
