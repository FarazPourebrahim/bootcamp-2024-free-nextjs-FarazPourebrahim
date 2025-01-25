"use client";

import { useState, useContext, useMemo } from "react";
import styles from "./page.module.css";

import FiltersProvider, {
  FiltersContext,
} from "@/app/search/providers/filters/filters.provider";
import ResetButton from "@/app/search/components/ResetButton/ResetButton";
import TourTypeFilter from "@/app/search/components/TourTypeFilter/TourTypeFilter";
import PriceRangeFilter from "@/app/search/components/PriceRangeFilter/PriceRangeFilter";
import DurationFilter from "@/app/search/components/DurationFilter/DurationFilter";
import TourGuideFilter from "@/app/search/components/TourGuideFilter/TourGuideFilter";
import SearchBox from "@/components/SearchBox/SearchBox";
import Sort from "@/app/search/components/Sort/Sort";
import Card from "@/components/Card/Card";
import { mockTours } from "@/mocks/mockTours";

function PageContent() {
  const { filters } = useContext(FiltersContext);

  const [sortOption, setSortOption] = useState<string>("price-asc");

  const handleSortChange = (option: string) => {
    setSortOption(option);
  };

  const filteredMockTours = useMemo(() => {
    return mockTours.filter((item) => {
      return (
        (filters.type === "All" || filters.type.includes(item.type)) &&
        item.price >= filters.min &&
        item.price <= filters.max &&
        (!filters.isGuideMandatory ||
          (filters.isGuideMandatory && item.guideAvailable)) &&
        item.duration >= filters.duration[0] &&
        item.duration <= filters.duration[1]
      );
    });
  }, [filters]);

  const sortedMockTours = useMemo(() => {
    return [...filteredMockTours].sort((a, b) => {
      switch (sortOption) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "duration-asc":
          return a.duration - b.duration;
        case "duration-desc":
          return b.duration - a.duration;
        default:
          return 0;
      }
    });
  }, [filteredMockTours, sortOption]);

  return (
    <div className={styles.page}>
      <div className={styles.filters}>
        <ResetButton />
        <TourTypeFilter />
        <PriceRangeFilter />
        <DurationFilter />
        <TourGuideFilter />
      </div>
      <div className={styles.main}>
        <SearchBox />
        <div className={styles["result-header"]}>
          <Sort selectedOption={sortOption} onSortChange={handleSortChange} />
          <p className={styles.count}>{sortedMockTours.length} نتیجه پیدا شد</p>
        </div>
        <div className={styles.result}>
          {sortedMockTours.map((tour) => (
            <Card key={tour.id} tour={tour} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <FiltersProvider>
      <PageContent />
    </FiltersProvider>
  );
}
