import { useParams } from "react-router-dom";
import { useSetPageTitle } from "../../../../state/pageTitle/usePageTitle";

export default function TrackDetails() {
  //
  const { trackId } = useParams();
  useSetPageTitle(`Track name using id: ${trackId}`);

  return <div>TrackDetails</div>;
}
