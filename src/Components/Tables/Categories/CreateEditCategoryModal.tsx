import React from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Label,
} from "reactstrap";

import { ICloudServiceCategory } from "@/services/interface";
import { createCategory, updateCategory } from "@/services/category";

interface IProps {
  isOpen: boolean;
  toggle: () => void;
  category?: ICloudServiceCategory;
}

export default function CreateEditCategoryModal({
  isOpen,
  toggle,
  category,
}: IProps) {
  const [name, setName] = React.useState<ICloudServiceCategory["name"]>(
    category?.name || ""
  );
  const [description, setDescription] = React.useState<
    ICloudServiceCategory["description"]
  >(category?.description || "");

  console.log(category);
  const handleSubmit = () => {
    if (category) {
      onUpdate();
    } else {
      onCreate();
    }
  };

  const onUpdate = () => {
    const updatedCategory: ICloudServiceCategory = {
      id: category!.id,
      name,
      description,
    };

    updateCategory(updatedCategory);
  };

  const onCreate = () => {
    const newCategory: Omit<ICloudServiceCategory, "id"> = {
      name,
      description,
    };

    createCategory(newCategory);
  };

  return (
    <div>
      <Modal isOpen={isOpen} toggle={toggle} centered size="lg">
        <ModalHeader toggle={toggle}>
          {category ? "Edit" : "Create"} Category
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
            color={category ? "warning" : "success"}
            onClick={handleSubmit}
            className="text-white"
          >
            {category ? "Update" : "Create"}
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
