import axios from "axios";

export const createResource = async (resource: any) => {
  return await axios.post("/api/resource/create", resource);
};

export const getResources = async () => {
  return await axios.get("/api/resource/list");
};

export const getResource = async (id: string) => {
  return await axios.get(`/api/resource/${id}`);
};

export const updateResource = async (id: string, resource: any) => {
  return await axios.put(`/api/resource/${id}`, resource);
};

export const deleteResource = async (id: string) => {
  return await axios.delete(`/api/resource/${id}`);
};
