import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { RecipesPage } from "./pages/RecipesPage";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <RecipesPage />
    </ChakraProvider>
  </React.StrictMode>
);
