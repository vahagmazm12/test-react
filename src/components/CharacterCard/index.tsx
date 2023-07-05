import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import { memo } from "react";
import { Character } from "../../types";

interface CharacterCardProps {
  character: Character;
  id: number;
  expanded?: boolean;
  onCardClick?: (id: number) => void;
}

const CharacterCard = ({
  character,
  id,
  expanded,
  onCardClick,
}: CharacterCardProps) => {
  const handleClick = () => {
    onCardClick && onCardClick(id);
  };

  return (
    <Grid item>
      <Card onClick={handleClick}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {character.name}
          </Typography>
          {expanded && (
            <>
              <Typography color="textSecondary">
                Gender: {character.gender}
              </Typography>
              <Typography color="textSecondary">
                Height: {character.height} cm
              </Typography>
              <Typography color="textSecondary">
                Mass: {character.mass} kg
              </Typography>
              <Typography color="textSecondary">
                Hair color: {character.hair_color}
              </Typography>
              <Typography color="textSecondary">
                Skin color: {character.skin_color}
              </Typography>
              <Typography color="textSecondary">
                Eye color: {character.eye_color}
              </Typography>
            </>
          )}
        </CardContent>
      </Card>
    </Grid>
  );
};

export default memo(CharacterCard);
