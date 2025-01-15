"use client";

import {
  createContext,
  PropsWithChildren,
  ReactElement,
  useState,
} from "react";
import { FiltersType } from "@/app/search/types/filters.type";

type ContextValue = {
  filters: FiltersType;
  changeFilter: <TKey extends keyof FiltersType>(
    key: TKey,
    value: FiltersType[TKey],
  ) => void;
  removeFilter: <TKey extends keyof FiltersType>(key: TKey) => void;
  clearAll: () => void;
};

export const FiltersContext = createContext<ContextValue>({
  filters: {
    min: 0,
    max: 10000000,
    type: "All",
    guide: false,
    duration: [1, 30],
  },
  changeFilter: () => {},
  removeFilter: () => {},
  clearAll: () => {},
});

type Props = PropsWithChildren;

export default function FiltersProvider({ children }: Props): ReactElement {
  const [filters, setFilters] = useState<FiltersType>({
    min: 0,
    max: 10000000,
    type: "All",
    guide: false,
    duration: [1, 30],
  });

  const changeFilter = <TKey extends keyof FiltersType>(
    key: TKey,
    value: FiltersType[TKey],
  ): void => {
    setFilters((old) => ({ ...old, [key]: value }));
  };

  const removeFilter = <TKey extends keyof FiltersType>(key: TKey): void => {
    setFilters((old) => {
      const clone = { ...old };
      delete clone[key];
      return clone;
    });
  };

  const clearAll = (): void => {
    setFilters({
      min: 0,
      max: 10000000,
      type: "All",
      guide: false,
      duration: [1, 30],
    });
  };

  return (
    <FiltersContext.Provider
      value={{ filters, changeFilter, removeFilter, clearAll }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
