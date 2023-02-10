import { Heading } from "@chakra-ui/react";
import { useState } from "react";
import { RecipeSearch } from "../components/RecipeSearch";
import { RecipeChoice } from "../components/RecipeChoice";

export const RecipesPage = () => {
  const [userRecipe, setUserRecipe] = useState();
  const greeting = "Winc Recipe Checker";

  return (
    <div className="recipesPage">
      {userRecipe ? (
        <>
          <RecipeChoice item={userRecipe} onClick={setUserRecipe} />
        </>
      ) : (
        <>
          <Heading textAlign="center" m={8} fontSize={"5xl"} color={"blue.200"}>
            {greeting}
          </Heading>
          <RecipeSearch onClick={setUserRecipe} />
        </>
      )}
    </div>
  );
};
