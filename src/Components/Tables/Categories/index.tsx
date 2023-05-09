import React from "react";
import { BsPlus as PlusIcon } from "react-icons/bs";

import { ICloudServiceCategory } from "@/services/interface";
import { getCategories } from "@/services/category";
import CategoryTable from "@/Components/Tables/Categories/CategoryTable";
import CreateEditCategoryModal from "@/Components/Tables/Categories/CreateEditCategoryModal";

import { categories as demoCategories } from "@/demoData";

export default function Categories() {
  const [categories, setCategories] = React.useState<ICloudServiceCategory[]>(
    []
  );
  const [selectedCategory, setSelectedCategory] = React.useState<
    ICloudServiceCategory | undefined
  >(undefined);

  const [isCreateEditModalOpen, setIsCreateEditModalOpen] =
    React.useState<boolean>(false);

  const onEdit = (category: ICloudServiceCategory) => {
    setSelectedCategory(category);
    setIsCreateEditModalOpen(true);
  };

  const onDelete = (category: ICloudServiceCategory) => {
    console.log(category);
  };

  const onCreate = () => {
    setSelectedCategory(undefined);
    setIsCreateEditModalOpen(true);
  };

  React.useEffect(() => {
    getCategories()
      .then((res) => setCategories(res.data))
      .catch((err) => {
        setCategories(demoCategories);
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center my-2 px-1">
        <h3>Categories</h3>
        <button className="btn btn-primary" onClick={onCreate}>
          <PlusIcon size={25} /> Create
        </button>
      </div>

      <CategoryTable
        categories={categories}
        onDelete={onDelete}
        onEdit={onEdit}
      />

      {isCreateEditModalOpen && (
        <CreateEditCategoryModal
          isOpen={isCreateEditModalOpen}
          toggle={() => setIsCreateEditModalOpen(!isCreateEditModalOpen)}
          category={selectedCategory}
        />
      )}
    </div>
  );
}
