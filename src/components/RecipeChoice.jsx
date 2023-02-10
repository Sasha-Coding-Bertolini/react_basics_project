import {
  Center,
  Heading,
  Image,
  Text,
  Flex,
  Button,
  Container,
} from "@chakra-ui/react";

import { healthLabelItems, cautionsLabels, dietLabels } from "./Labels";

export const RecipeChoice = ({ item, onClick }) => {
  return (
    <Center flexDirection="column">
      <Heading fontSize={"3xl"} color="blue.200">
        {item.recipe.label}
      </Heading>

      <Image
        margin="5"
        borderRadius="20"
        boxSize="300px"
        src={item.recipe.image}
      />
      <Flex flexDirection={{ base: "column", md: "row" }}>
        <Container maxWidth={{ base: "80%", md: "50%" }}>
          <Text textAlign="center" fontSize="lg">
            Dish: <b>{String(item.recipe.dishType)}</b>
          </Text>
          <br />
          <Text as="samp" color="gray" textAlign="center" fontSize="lg">
            {item.recipe.mealType}
          </Text>
          <br />
          <Text as="samp" color="gray" textAlign="center" fontSize="lg">
            Total cooking time: <b>{item.recipe.totalTime + " Minutes"}</b>
          </Text>
          <br />
          <Text as="samp" color="gray" textAlign="center" fontSize="lg">
            Servings: <b>{item.recipe.yield}</b>
          </Text>
          <br />
          <Text as="samp" color="gray" textAlign="center" fontSize="lg">
            Ingredients:
          </Text>
          <br />
          <Text listStylePosition="inside" style={{ whiteSpace: "pre-line" }}>
            <ul>
              {item.recipe.ingredients.map((x) => (
                <li key={x.text}>{x.text + "\n"}</li>
              ))}
            </ul>
          </Text>
        </Container>

        <Container
          maxWidth={{ base: "80%", md: "50%" }}
          bg="gray.100"
          rounded="5"
          m="auto"
        >
          <Text color="black" textAlign="center" fontSize="lg">
            Health labels:
          </Text>
          {healthLabelItems(item)}
          {String(item.recipe.cautions).length !== 0 && (
            <>
              <Text color="black" textAlign="center" fontSize="lg" mt="4">
                Cautions:
              </Text>
              {cautionsLabels(item)}
            </>
          )}
          {String(item.recipe.dietLabels).length !== 0 && (
            <>
              <Text color="black" textAlign="center" fontSize="lg" mt="4">
                Diet:
              </Text>
              {dietLabels(item)}
            </>
          )}

          <Text color="black" textAlign="center" fontSize="lg" mt="4">
            Total nutrients:
          </Text>
          <Flex justifyContent="space-evenly" flexWrap="wrap" columnGap="3">
            <Text>
              {Math.round(item.recipe.totalNutrients.ENERC_KCAL.quantity) +
                " kcal"}{" "}
              <br /> {"CALORIES"}
            </Text>
            <Text>
              {Math.round(item.recipe.totalNutrients.FAT.quantity) + " g"}{" "}
              <br /> {"FAT"}
            </Text>
            <Text>
              {Math.round(item.recipe.totalNutrients.CHOCDF.quantity) + " g"}{" "}
              <br /> {"CARBS"}
            </Text>
            <Text>
              {Math.round(item.recipe.totalNutrients.PROCNT.quantity) + " g"}{" "}
              <br /> {"PROTEIN"}
            </Text>
            <Text>
              {Math.round(item.recipe.totalNutrients.CHOLE.quantity) + " mg"}{" "}
              <br /> {"CHOLESTEROL"}
            </Text>
            <Text>
              {Math.round(item.recipe.totalNutrients.NA.quantity) + " mg"}{" "}
              <br /> {"SODIUM"}
            </Text>
          </Flex>
        </Container>
      </Flex>

      <Button
        left="1"
        top="1"
        position="fixed"
        onClick={() => onClick()}
        variant="solid"
      >
        &laquo;
      </Button>
    </Center>
  );
};
