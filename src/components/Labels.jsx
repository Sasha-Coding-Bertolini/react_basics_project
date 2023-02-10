import { Container, Text } from "@chakra-ui/react";

export const healthLabelItems = (item) => {
  const healthLabelItem = item.recipe.healthLabels.map((x) => (
    <Text
      as="mark"
      bg="orange.200"
      rounded="5"
      textAlign="center"
      m="2"
      key={item.recipe.healthLabels[x]}
      whiteSpace="nowrap"
    >
      {x}
    </Text>
  ));
  return <Container>{healthLabelItem}</Container>;
};

export const cautionsLabels = (item) => {
  const cautionLabelItem = item.recipe.cautions.map((x) => (
    <Text
      as="mark"
      bg="red.200"
      rounded="5"
      textAlign="center"
      m="2"
      key={item.recipe.cautions[x]}
      whiteSpace="nowrap"
    >
      {x}
    </Text>
  ));
  return <Container>{cautionLabelItem}</Container>;
};

export const dietLabels = (item) => {
  const dietLabelItem = item.recipe.dietLabels.map((x) => (
    <Text
      as="mark"
      bg="green.200"
      rounded="5"
      textAlign="center"
      m="2"
      key={item.recipe.dietLabels[x]}
      whiteSpace="nowrap"
    >
      {x}
    </Text>
  ));
  return <Container>{dietLabelItem}</Container>;
};
