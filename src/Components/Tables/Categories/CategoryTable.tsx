import React from "react";
import { Table, Button } from "reactstrap";
import {
  AiFillDelete as DeleteIcon,
  AiFillEdit as EditIcon,
} from "react-icons/ai";

import { MdOutlineRocketLaunch as LaunchIcon } from "react-icons/md";

import { ICloudServiceCategory } from "@/services/interface";
import CreateEditCloudServiceModal from "@/Components/Tables/CloudServices/CreateEditCloudServiceModal";

interface IProps {
  categories: ICloudServiceCategory[];
  onEdit: (category: ICloudServiceCategory) => void;
  onDelete: (category: ICloudServiceCategory) => void;
}
export default function CategoryTable({
  categories,
  onDelete,
  onEdit,
}: IProps) {
  const [createServiceModalOpen, setCreateServiceModalOpen] =
    React.useState(false);

  return (
    <div>
      <Table striped bordered>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
            <th>Service</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id}>
              <td>{category.id}</td>
              <td>{category.name}</td>

              <td>{category.description}</td>
              <td>
                <Button
                  color="dark"
                  outline
                  className="mx-1 "
                  onClick={() => {
                    setCreateServiceModalOpen(true);
                  }}
                >
                  <LaunchIcon style={{ color: "white" }} /> Launch
                </Button>
              </td>
              <td>
                <Button
                  color="primary"
                  className="mx-1"
                  onClick={() => onEdit(category)}
                >
                  <EditIcon />
                </Button>
                <Button color="danger" onClick={() => onDelete(category)}>
                  <DeleteIcon />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {createServiceModalOpen && (
        <CreateEditCloudServiceModal
          isOpen={createServiceModalOpen}
          toggle={() => setCreateServiceModalOpen(!createServiceModalOpen)}
        />
      )}
    </div>
  );
}
