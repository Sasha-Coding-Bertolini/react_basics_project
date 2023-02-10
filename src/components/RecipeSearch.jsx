import { useState } from "react";
import { TextInput } from "./ui/TextInput";
import { RecipeItems } from "./RecipeItems";
import { availableRecipes } from "../utils/availableRecipes";
import { Center, Text } from "@chakra-ui/react";

export const RecipeSearch = ({ onClick }) => {
  const [searchField, setSearchField] = useState("");

  const handleChange = (event) => setSearchField(event.target.value);

  const matchedRecipes = availableRecipes.filter((item) => {
    return item.recipe.label.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <>
      <Center>
        <Text fontSize="lg">Search for a recipe</Text>
        <TextInput onChange={handleChange} />
      </Center>

      <RecipeItems items={matchedRecipes} onClick={onClick} />
    </>
  );
};
