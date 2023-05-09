import React from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Label,
} from "reactstrap";

import { ICloudService, ICloudServiceCategory } from "@/services/interface";
import {
  createCloudService,
  updateCloudService,
} from "@/services/cloudService";
import { getCategories } from "@/services/category";
import { categories as demoCategories } from "@/demoData";

interface IProps {
  isOpen: boolean;
  toggle: () => void;
  cloudService?: ICloudService;
}

export default function CreateEditCloudServiceModal({
  isOpen,
  toggle,
  cloudService,
}: IProps) {
  const [name, setName] = React.useState<ICloudService["name"]>(
    cloudService?.name || ""
  );
  const [description, setDescription] = React.useState<
    ICloudService["description"]
  >(cloudService?.description || "");

  const [category, setCategory] = React.useState<ICloudServiceCategory>(
    (cloudService?.category || {}) as ICloudServiceCategory
  );

  const [categories, setCategories] = React.useState<ICloudServiceCategory[]>(
    []
  );

  React.useEffect(() => {
    getCategories()
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
        setCategories(demoCategories);
      });
  }, []);

  const handleSubmit = () => {
    if (cloudService) {
      onUpdate();
    } else {
      onCreate();
    }
  };

  const onUpdate = () => {
    const updatedCloudService: ICloudService = {
      id: cloudService!.id,
      name,
      description,
      category: "1",
      resources: [],
    };

    updateCloudService(updatedCloudService);
  };

  const onCreate = () => {
    const newCategory: Omit<ICloudService, "id"> = {
      name,
      description,
      category: "1",
      resources: [],
    };

    createCloudService(newCategory);
  };

  return (
    <div>
      <Modal isOpen={isOpen} toggle={toggle} centered size="lg">
        <ModalHeader toggle={toggle}>
          {cloudService ? "Edit" : "Create"} Service
        </ModalHeader>
        <ModalBody>
          <div className="form-group mb-3">
            <Label for="name">Name</Label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter name"
              value={name}
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group mb-3">
            <Label for="category">Category</Label>
            <select
              className="form-control"
              id="category"
              value={category.id}
              onChange={(e) =>
                setCategory(
                  categories.find((category) => category.id === e.target.value)!
                )
              }
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group mb-3">
            <Label for="description">Description</Label>
            <textarea
              className="form-control"
              placeholder="Enter description"
              id="description"
              value={description}
              rows={5}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color={cloudService ? "warning" : "success"}
            onClick={handleSubmit}
            className="text-white"
          >
            {cloudService ? "Update" : "Create"}
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
