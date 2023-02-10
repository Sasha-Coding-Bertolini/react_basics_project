import { RecipeItem } from "./RecipeItem";
import { Flex } from "@chakra-ui/react";

export const RecipeItems = ({ items, onClick }) => {
  return (
    <>
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="center"
        flexWrap="wrap"
      >
        {items.map((item) => (
          <RecipeItem key={item.recipe.label} item={item} onClick={onClick} />
        ))}
      </Flex>
    </>
  );
};
