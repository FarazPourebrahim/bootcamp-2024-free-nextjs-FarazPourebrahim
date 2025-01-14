"use client";

import { useState } from "react";
import styles from "./DurationFilter.module.css";

export default function DurationFilter() {
  const options = [
    { label: "1 تا 3 روز", value: [1, 3] },
    { label: "4 تا 7 روز", value: [4, 7] },
    { label: "8 تا 14 روز", value: [8, 14] },
    { label: "15 تا 30 روز", value: [15, 30] },
  ];

  const [selectedOption, setSelectedOption] = useState(options[0].value);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = options[Number(event.target.value)].value;
    setSelectedOption(selectedValue);
  };

  return (
    <div className={styles.filter}>
      <label htmlFor="durationFilter" className={styles.label}>
        مدت زمان
      </label>
      <select
        id="durationFilter"
        className={styles.dropdown}
        onChange={handleChange}
        defaultValue="0"
      >
        {options.map((option, index) => (
          <option key={index} value={index}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
