import React from "react";
import { RadioGroup, Radio, Stack, Badge } from "@chakra-ui/react";

const FilterTodos = ({ todoTypeFilter, onTodoTypeFilterChange }) => {
  return (
    <RadioGroup value={todoTypeFilter} onChange={onTodoTypeFilterChange}>
      <Stack
        pb={4}
        align="center"
        justifyContent="center"
        spacing={4}
        flexWrap="wrap"
        direction="row"
      >
        <Radio size="lg" value="0">
          <Badge fontSize="lg">All</Badge>
        </Radio>
        <Radio size="lg" colorScheme="green" value="1">
          <Badge fontSize="lg" colorScheme="green">
            Not Urgent
          </Badge>
        </Radio>
        <Radio size="lg" colorScheme="blue" value="2">
          <Badge fontSize="lg" colorScheme="blue">
            Important
          </Badge>
        </Radio>
        <Radio size="lg" colorScheme="yellow" value="3">
          <Badge fontSize="lg" colorScheme="yellow">
            Urgent
          </Badge>
        </Radio>
        <Radio size="lg" colorScheme="red" value="4">
          <Badge fontSize="lg" colorScheme="red">
            Urgent + Important
          </Badge>
        </Radio>
      </Stack>
    </RadioGroup>
  );
};

export default FilterTodos;
