import { Center, Input } from "@chakra-ui/react";

export const TextInput = ({ onChange }) => (
  <Center>
    <Input variant="outline" onChange={onChange} w={200} m={5} />
  </Center>
);
