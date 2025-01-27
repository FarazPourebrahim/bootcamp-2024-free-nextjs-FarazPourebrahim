"use client";

import React, { ReactElement, useState } from "react";
import styles from "./TourDetails.module.css";
import Overview from "@/app/tour/[id]/components/Overview/Overview";
import Details from "@/app/tour/[id]/components/Details/Details";
import Review from "@/app/tour/[id]/components/Review/Review";

type Props = {
  tourId: number;
};

export default function TourDetails({ tourId }: Props): ReactElement {
  const [activeTab, setActiveTab] = useState("Overview");

  const tabs = [
    {
      label: "اطلاعات کلی",
      value: "Overview",
      component: <Overview tourId={tourId} />,
    },
    { label: "جزئیات", value: "Details", component: <Details /> },
    { label: "نظرات", value: "Review", component: <Review tourId={tourId} /> },
  ];

  const renderContent = () => {
    const activeTabObject = tabs.find((tab) => tab.value === activeTab);
    return activeTabObject ? (
      activeTabObject.component
    ) : (
      <Overview tourId={tourId} />
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.buttonGroup}>
        {tabs.map((tab) => (
          <button
            key={tab.value}
            className={`${styles.button} ${
              activeTab === tab.value ? styles.active : ""
            }`}
            onClick={() => setActiveTab(tab.value)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={styles.content}>{renderContent()}</div>
    </div>
  );
}
