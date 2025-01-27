import { ReactElement } from "react";
import { MockTour, mockTours } from "@/mocks/mockTours";
import { notFound } from "next/navigation";

type Props = {
  params: { id: string };
};

export default function page({ params }: Props): ReactElement {
  const tour: MockTour | undefined = mockTours.find(
    (x) => x.id === Number(params.id),
  );

  if (!tour) {
    return notFound();
  }

  return <p>Hello{tour?.title}</p>;
}
