import Loader from "../../components/Loader";
import { useGetPeopleQuery } from "../../services/characterApi";

import CharacterCardList from "../../containers/CharacterCardList";

const Home = () => {
  const { data: characters, isLoading } = useGetPeopleQuery("");

  return isLoading ? <Loader /> : <CharacterCardList data={characters} />;
};

export default Home;
