import axios from "axios";

import { ICloudServiceCategory } from "@/services/interface";

export const createCategory = async (
  category: Omit<ICloudServiceCategory, "id">
) => {
  return await axios.post("/api/category/create", category);
};

export const updateCategory = async (category: ICloudServiceCategory) => {
  return await axios.post(`/api/category/edit`, category);
};

export const getCategories = async () => {
  return await axios.get<ICloudServiceCategory[]>("/api/category/list");
};
