import { useParams } from "react-router-dom";
import { useSetPageTitle } from "../../../../state/pageTitle/usePageTitle";
import { useEffect } from "react";

export default function TraineeDetails() {
  //
  const { traineeId } = useParams();
  console.log("@traineeDetails ---- traineeId =", traineeId);
  useSetPageTitle(`Trainee name using id: ${traineeId}`);

  // useEffect(() => {
  //   console.log("@traineeDetails ---- useEffect ---- traineeId =", traineeId);
  // }, [traineeId]);

  return <div>TraineeDetails</div>;
}
