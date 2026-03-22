import { Pagination, Group, Center } from "@mantine/core";
import { memo } from "react";
import classes from "./PaginationBar.module.css";

type Props = {
  page: number;
  total: number;
  onChange: (page: number) => void;
};

export const PaginationBar = memo<Props>(({ page, total, onChange }) => {
  if (total <= 1) return null;

  return (
    <Center>
      <Pagination.Root
        className={classes.pagination}
        total={total}
        value={page}
        onChange={onChange}
        color="black.2"
        autoContrast
        aria-label="Пагинация списка вакансий"
      >
        <Group className={classes["pagination__group"]} gap={5}>
          <Pagination.First aria-label="Первая страница" />
          <Pagination.Previous aria-label="Предыдущая страница" />
          <Pagination.Items />
          <Pagination.Next aria-label="Следующая страница" />
          <Pagination.Last aria-label="Последняя страница" />
        </Group>
      </Pagination.Root>
    </Center>
  );
});

PaginationBar.displayName = "PaginationBar";