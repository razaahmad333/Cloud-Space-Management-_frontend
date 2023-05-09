import Categories from "@/Components/Tables/Categories";
import CloudServices from "@/Components/Tables/CloudServices";

export default function Home() {
  return (
    <div className="p-2">
      <Categories />
      <CloudServices />
    </div>
  );
}
