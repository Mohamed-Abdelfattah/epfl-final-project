import { useParams } from "react-router-dom";
import { useSetPageTitle } from "../../../../state/pageTitle/usePageTitle";
import { useEffect } from "react";

export default function TraineeDetails() {
  //
  const { traineeId } = useParams();
  useSetPageTitle(`Trainee name using id: ${traineeId}`);

  return <div>TraineeDetails</div>;
}
