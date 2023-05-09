import { Table, Button } from "reactstrap";
import {
  AiFillDelete as DeleteIcon,
  AiFillEdit as EditIcon,
} from "react-icons/ai";

import { ICloudService, ICloudServiceCategory } from "@/services/interface";

interface IProps {
  cloudServices: ICloudService[];
  onEdit: (cloudService: ICloudService) => void;
  onDelete: (cloudService: ICloudService) => void;
}
export default function CategoryTable({
  cloudServices,
  onDelete,
  onEdit,
}: IProps) {
  return (
    <Table striped bordered>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Category</th>
          <th style={{ width: "400px" }}>Description</th>
          <th style={{ width: "200px" }}>Resources</th>
          <th style={{ width: "120px" }}> Actions</th>
        </tr>
      </thead>
      <tbody>
        {cloudServices.map((cloudService) => (
          <tr key={cloudService.id}>
            <td>{cloudService.id}</td>
            <td>{cloudService.name}</td>
            <td>{(cloudService.category as ICloudServiceCategory).name}</td>
            <td>{cloudService.description.slice(0, 200)}...</td>
            <td>{cloudService.resources.join(", ")}</td>
            <td>
              <Button
                color="primary"
                className="mx-1"
                onClick={() => onEdit(cloudService)}
              >
                <EditIcon />
              </Button>
              <Button color="danger" onClick={() => onDelete(cloudService)}>
                <DeleteIcon />
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
