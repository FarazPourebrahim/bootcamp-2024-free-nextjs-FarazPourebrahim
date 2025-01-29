"use client";

import React, { ReactElement, useState } from "react";
import styles from "./TourDetails.module.css";
import Overview from "@/app/tour/[id]/components/Overview/Overview";
import Details from "@/app/tour/[id]/components/Details/Details";
import Review from "@/app/tour/[id]/components/Review/Review";

type Props = {
  tourId: number;
};

type Tab = {
  title: string;
  value: string;
  renderContent: (tourId: number | undefined) => React.JSX.Element;
};

export default function TourDetails({ tourId }: Props): ReactElement {
  const [activeTab, setActiveTab] = useState("Overview");

  const tabs: Tab[] = [
    {
      title: "اطلاعات کلی",
      value: "Overview",
      renderContent: (tourId) => <Overview tourId={tourId} />,
    },
    { title: "جزئیات", value: "Details", renderContent: () => <Details /> },
    {
      title: "نظرات",
      value: "Review",
      renderContent: (tourId) => <Review tourId={tourId} />,
    },
  ];

  const renderContent = () => {
    const activeTabObject = tabs.find((tab) => tab.value === activeTab);
    return activeTabObject ? (
      activeTabObject.renderContent(tourId)
    ) : (
      <Overview tourId={tourId} />
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <button
            key={tab.value}
            className={`${styles.button} ${
              activeTab === tab.value ? styles.active : ""
            }`}
            onClick={() => setActiveTab(tab.value)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className={styles.content}>{renderContent()}</div>
    </div>
  );
}
