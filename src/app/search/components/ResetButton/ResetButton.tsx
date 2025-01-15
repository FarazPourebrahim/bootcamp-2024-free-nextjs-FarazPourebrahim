"use client";

import { useContext, useMemo } from "react";
import styles from "./ResetButton.module.css";
import { FiltersContext } from "@/app/search/providers/filters/filters.provider";

export default function ResetButton() {
  const { filters, clearAll } = useContext(FiltersContext);

  const initialFilters = {
    min: 0,
    max: 10000000,
    type: "All",
    guide: false,
    duration: [1, 30],
  };

  const hasFiltersChanged = useMemo(() => {
    return JSON.stringify(filters) !== JSON.stringify(initialFilters);
  }, [filters]);

  return (
    <button
      className={`${styles.resetButton} ${!hasFiltersChanged ? styles.disabled : ""}`}
      onClick={clearAll}
      disabled={!hasFiltersChanged}
    >
      بازنشانی فیلترها
    </button>
  );
}
