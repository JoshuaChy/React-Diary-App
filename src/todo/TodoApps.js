import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./../theme";

import React from "react";
import TodoApp from "./TodoApp";

const TodoApps = () => {
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <TodoApp />
    </ChakraProvider>
  );
};

export default TodoApps;
