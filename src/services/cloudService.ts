import axios from "axios";

import { ICloudService } from "@/services/interface";

export const createCloudService = async (
  cloudService: Omit<ICloudService, "id">
) => {
  return await axios.post("/api/cloudService/create", cloudService);
};

export const updateCloudService = async (cloudService: ICloudService) => {
  return await axios.post(`/api/cloudService/edit`, cloudService);
};

export const getCloudServices = async () => {
  return await axios.get<ICloudService[]>("/api/cloudService/list");
};
