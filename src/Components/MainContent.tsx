import { Routes, Route } from "react-router-dom";
import Service from "@/Components/Service";
import Home from "@/Components/Home";
import Categories from "@/Components/Tables/Categories";
export default function MainContent() {
  return (
    <div
      style={{
        height: "88vh",
        overflowY: "scroll",
        overflowX: "hidden",
        padding: "0 1rem",
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service/:name" element={<Service />} />
        <Route path="/category" element={<Categories />} />
      </Routes>
    </div>
  );
}
