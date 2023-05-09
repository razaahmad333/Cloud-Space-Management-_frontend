export interface ICloudServiceCategory {
  id: string;
  name: string;
  description: string;
}

export type IResource = string;

export interface ICloudService {
  id: string;
  name: string;
  category: ICloudServiceCategory | string;
  description: string;
  resources: IResource[];
}
