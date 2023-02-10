import { Container } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { cautionsLabels, dietLabels } from "./Labels";

export const RecipeItem = ({ item, onClick }) => {
  const veganAndVegetarian = ["Vegan", "Vegetarian"];

  return (
    <>
      <Container
        borderRadius="20"
        bg="gray.100"
        mb="5"
        display="flex"
        flexDirection="column"
        width="200px"
        alignItems="center"
        cursor={"pointer"}
        onClick={() => onClick(item)}
      >
        <Image
          margin="5"
          borderRadius="20"
          boxSize="100px"
          src={item.recipe.image}
        />

        <Text as="samp" color="gray" textAlign="center" fontSize="lg">
          {item.recipe.mealType}
        </Text>

        <Text as="b" mb="2" textAlign="center" fontSize="xl">
          {item.recipe.label}
        </Text>
        {veganAndVegetarian.some((term) =>
          String(item.recipe.healthLabels).includes(term)
        ) && (
          <>
            <Text mb="2" textAlign="center" fontSize="lg">
              {String(
                item.recipe.healthLabels.filter((term) =>
                  veganAndVegetarian.includes(term)
                )
              ).replaceAll(",", ", ")}
            </Text>
          </>
        )}

        {dietLabels(item)}

        <Text m="2" textAlign="center" fontSize="lg">
          Dish: <b>{String(item.recipe.dishType)}</b>
        </Text>
        {String(item.recipe.cautions).length !== 0 && (
          <>
            <Text mb="2" textAlign="center" fontSize="lg">
              Cautions:
            </Text>

            {cautionsLabels(item)}
          </>
        )}
      </Container>
    </>
  );
};
