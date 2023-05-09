import { useParams } from "react-router-dom";

export default function Service() {
  const { name } = useParams();
  return (
    <div>
      <h1>Service {name} </h1>
    </div>
  );
}
