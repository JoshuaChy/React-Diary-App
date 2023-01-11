import React, { useState, useEffect } from "react";
import { v4 as uuid4 } from "uuid";
import { ColorModeScript } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import {
  IconButton,
  Flex,
  Heading,
  Text,
  useColorMode,
  useColorModeValue
} from "@chakra-ui/react";

import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import FilterTodos from "./FilterTodos";

const TodoApp = () => {
  const initTodos = [
    {
      id: 1,
      title: "Unimportant Things",
      type: 1,
      finished: false
    },
    {
      id: 2,
      title: "Important Things",
      type: 2,
      finished: false
    }
  ];

  const { colorMode, toggleColorMode } = useColorMode();
  const [todoTypeFilter, setTodoTypeFilter] = useState("0");
  const [todoTitle, setTodoTitle] = useState("");
  const [todoType, setTodoType] = useState(1);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [todoTitleIsInvalid, setTodoTitleIsInvalid] = useState(false);
  const [todos, setTodos] = useState(() => {
    const localTodos = JSON.parse(localStorage.getItem("todos")) || initTodos;
    return localTodos;
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  let todosFiltered = todos;
  if (todoTypeFilter > 0) {
    todosFiltered = todos.filter(
      (todo) => todo.type === parseInt(todoTypeFilter)
    );
  }
  todosFiltered.sort((t1, t2) => t2.type - t1.type);

  const onTodoTypeFilterChange = (value) => {
    setTodoTypeFilter(value);
  };

  const addTodo = () => {
    if (todoTitle === "") {
      setTodoTitleIsInvalid(true);
    } else {
      const todo = {
        id: uuid4(),
        title: todoTitle,
        type: todoType,
        finished: false
      };
      setTodos([...todos, todo]);
      setDrawerOpen(false);
    }
  };

  const toggleTodoFinished = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, finished: !todo.finished } : todo
      )
    );
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Flex direction="column" minH="100vh" justifyContent="space-between">
      {/* header */}
      <Flex
        w="70%"
        bg={useColorModeValue("white", "gray")}
        direction="column"
        zIndex={100}
        position="fixed"
        as="header"
        align="center"
        justifyContent="center"
        boxShadow="lg"
      >
        <Flex
          justify="space-between"
          p={4}
          w="full"
          bgGradient="linear(to-r, cyan.200, purple.500)"
        >
          <Box w="full" textAlign="center">
            <Heading color={useColorModeValue("white", "white")} as="h1">
              Todo List
            </Heading>
          </Box>
        </Flex>

        <AddTodo
          drawerOpen={drawerOpen}
          todoTitleIsInvalid={todoTitleIsInvalid}
          addTodo={addTodo}
          setTodoTitle={setTodoTitle}
          setTodoType={setTodoType}
          setDrawerOpen={setDrawerOpen}
        />

        <FilterTodos
          todoTypeFilter={todoTypeFilter}
          onTodoTypeFilterChange={onTodoTypeFilterChange}
        />
      </Flex>

      {/* main */}
      <Flex
        mt={{ base: "240px", md: "270px" }}
        w="full"
        direction="column"
        as="main"
        flexGrow={1}
        overflow="auto"
        p={4}
      >
        <TodoList
          todosFiltered={todosFiltered}
          toggleTodoFinished={toggleTodoFinished}
          deleteTodo={deleteTodo}
        />
      </Flex>
    </Flex>
  );
};
export default TodoApp;
