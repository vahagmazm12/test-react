import { useParams } from "react-router-dom";
import CharacterCard from "../../components/CharacterCard";
import Loader from "../../components/Loader";
import { useGetPersonQuery } from "../../services/characterApi";

const Details = () => {
  const { characterId } = useParams();
  const { data: character, isLoading } = useGetPersonQuery(`${characterId}`);

  return !isLoading ? (
    <CharacterCard character={character} id={Number(characterId)} expanded />
  ) : (
    <Loader />
  );
};

export default Details;
