"use client";

import { useState, useContext } from "react";
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
import Card from "@/app/search/components/Card/Card";
import { mockTours } from "@/mocks/mockTours";

function PageContent() {
  const { filters } = useContext(FiltersContext);

  const [sortOption, setSortOption] = useState<string>("price-asc");

  const handleSortChange = (option: string) => {
    setSortOption(option);
  };

  const filteredMockTours = mockTours.filter((item) => {
    return (
      (filters.type === "All" || filters.type.includes(item.type)) &&
      item.price >= filters.min &&
      item.price <= filters.max &&
      (!filters.guide || (filters.guide && item.guideAvailable)) &&
      item.duration >= filters.duration[0] &&
      item.duration <= filters.duration[1]
    );
  });

  const sortedMockTours = [...filteredMockTours].sort((a, b) => {
    switch (sortOption) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "duration-asc":
        return a.duration - b.duration;
      case "duration-desc":
        return b.duration - a.duration;
      case "popularity":
        return b.popularity - a.popularity; // Assuming `popularity` exists
      case "rating":
        return b.rating - a.rating; // Assuming `rating` exists
      default:
        return 0;
    }
  });

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
          <p className={styles.count}>{sortedMockTours.length} نتیجه پیدا شد</p>
          <Sort selectedOption={sortOption} onSortChange={handleSortChange} />
        </div>
        <div className={styles.result}>
          {sortedMockTours.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              location={item.location}
              price={item.price}
              duration={item.duration}
              guideAvailable={item.guideAvailable}
              type={item.type}
              image={item.image}
            />
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
