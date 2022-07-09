import React, { useState } from "react";
import AddTaskCard from "./AddTaskCard";
import CommonModal from "../../components/modals/commonModal";
import { User } from "firebase/auth";

const addIcon = "/assets/Icons/Add.svg";

interface Props {
  user: User;
}

const AddTaskModal: React.FC<Props> = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <CommonModal
        component={<img src={addIcon} alt="Add" className="mb-8" width={40} />}
        title="Add New Task ..."
        content={
          <AddTaskCard user={props.user} handleCloseModal={setModalOpen} />
        }
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
    </div>
  );
};

export default AddTaskModal;
