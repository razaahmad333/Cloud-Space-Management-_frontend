import React from "react";
import { BsPlus as PlusIcon } from "react-icons/bs";

import { ICloudService } from "@/services/interface";
import { getCloudServices } from "@/services/cloudService";
import CloudServiceTable from "@/Components/Tables/CloudServices/CloudServiceTable";
import CreateEditCloudServiceModal from "@/Components/Tables/CloudServices/CreateEditCloudServiceModal";
import { cloudServices as demoCloudServices } from "@/demoData";

export default function CloudService() {
  const [cloudServices, setCloudServices] = React.useState<ICloudService[]>([]);
  const [selectedCloudService, setSelectedCloudService] = React.useState<
    ICloudService | undefined
  >(undefined);

  const [isCreateEditModalOpen, setIsCreateEditModalOpen] =
    React.useState<boolean>(false);

  const onEdit = (cloudService: ICloudService) => {
    setSelectedCloudService(cloudService);
    setIsCreateEditModalOpen(true);
  };

  const onDelete = (cloudService: ICloudService) => {
    console.log(cloudService);
  };

  const onCreate = () => {
    setSelectedCloudService(undefined);
    setIsCreateEditModalOpen(true);
  };

  React.useEffect(() => {
    getCloudServices()
      .then((res) => setCloudServices(res.data))
      .catch((err) => {
        setCloudServices(demoCloudServices);
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center my-2 px-1">
        <h3>Services</h3>
        <button className="btn btn-primary" onClick={onCreate}>
          <PlusIcon size={25} /> Create
        </button>
      </div>

      <CloudServiceTable
        cloudServices={cloudServices}
        onDelete={onDelete}
        onEdit={onEdit}
      />

      {isCreateEditModalOpen && (
        <CreateEditCloudServiceModal
          isOpen={isCreateEditModalOpen}
          toggle={() => setIsCreateEditModalOpen(!isCreateEditModalOpen)}
          cloudService={selectedCloudService}
        />
      )}
    </div>
  );
}
