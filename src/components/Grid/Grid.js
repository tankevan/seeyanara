import _ from "lodash";
import { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import MiniGrid from "minigrid";

// Components
import Card from "../Card";

// Data
import content from "../../content";

const renderGrid = () => {
  const grid = new MiniGrid({
    container: ".grid",
    item: ".card",
    gutter: 20,
  });
  grid.mount();
};

export default function Grid(props) {
  useEffect(() => {
    renderGrid()

    // Minigrid doesn't automatically re-render on resize
    window.addEventListener("resize", renderGrid);
  }, []);

  const cardData = content.cards;

  const renderCards = _.map(cardData, (cardProps, idx) => {
    return (
      <Card {...cardProps} key={`card-${idx}`} renderGrid={renderGrid} />
    );
  })

  return (
    <Box className="grid" w="100%">
      {renderCards}
    </Box>
  );
}
