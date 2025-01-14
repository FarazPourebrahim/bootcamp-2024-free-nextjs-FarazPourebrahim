"use client";

import { useState } from "react";
import styles from "./Sort.module.css";

export default function Sort() {
  const [selectedOption, setSelectedOption] = useState<string>("price-asc");

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className={styles.sort}>
      <label htmlFor="sort" className={styles.label}>
        مرتب‌ سازی بر اساس:
      </label>
      <select
        id="sort"
        value={selectedOption}
        onChange={handleSortChange}
        className={styles.dropdown}
      >
        <option value="price-asc">قیمت (کم به زیاد)</option>
        <option value="price-desc">قیمت (زیاد به کم)</option>
        <option value="duration-asc">مدت زمان (کم به زیاد)</option>
        <option value="duration-desc">مدت زمان (زیاد به کم)</option>
        <option value="popularity">محبوبیت</option>
        <option value="rating">امتیاز</option>
      </select>
    </div>
  );
}
