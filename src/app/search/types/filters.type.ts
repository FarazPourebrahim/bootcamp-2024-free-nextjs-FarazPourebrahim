type Type = {
  types:
    | "Relaxation"
    | "Cultural"
    | "Adventure"
    | "Luxury"
    | "Family"
    | "Nature"
    | "Historical"
    | "Sports";
};

export type FiltersType = {
  type: "All" | Type["types"][];
  min: number;
  max: number;
  duration: [1, 3] | [4, 7] | [8, 14] | [15, 30] | [1, 30];
  guide: boolean;
};
