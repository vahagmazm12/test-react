import { Grid } from "@material-ui/core";
import { Pagination } from "@mui/material";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import CharacterCard from "../../components/CharacterCard";
import { CharacterState } from "../../services/characterApi";

interface CharacterCardListProps {
  data?: CharacterState;
}

function CharacterCardList({ data }: CharacterCardListProps) {
  const [page, setPage] = useState(1);
  const itemsPerPage = 3;
  const numPages = data?.results?.length
    ? Math.ceil(data?.results?.length / itemsPerPage)
    : 0;

  const navigate = useNavigate();

  const handleChangePage = useCallback(
    (event: React.ChangeEvent<unknown>, page: number) => setPage(page),
    []
  );

  const handleCardClick = useCallback(
    (id: number) => navigate(`details/${id}`),
    []
  );

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <div>
      <Grid container spacing={2}>
        {data?.results.slice(startIndex, endIndex).map((character, index) => (
          <CharacterCard
            character={character}
            key={character.name}
            id={startIndex + index + 1}
            onCardClick={handleCardClick}
          />
        ))}
      </Grid>
      <Pagination count={numPages} page={page} onChange={handleChangePage} />
    </div>
  );
}

export default CharacterCardList;
