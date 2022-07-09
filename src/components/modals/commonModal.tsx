import * as React from "react";
import Modal from "@mui/material/Modal";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import "./modal.css";
import CancelIcon from "@mui/icons-material/Cancel";
import { useEffect } from "react";

interface Props {
  component: ReactJSXElement;
  title?: string;
  content: ReactJSXElement;
  modalOpen: boolean;
  setModalOpen: Function;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  minHeight: 300,
  backgroundColor: "#fff",
  borderRadius: "10px",
  border: "none",
  outline: "none",
  padding: "0px 0px 20px 0px ",
};

export default function CommonModal(props: Props) {
  const handleOpen = () => {
    props.setModalOpen(true);
  };
  const handleClose = () => {
    props.setModalOpen(false);
  };

  return (
    <div>
      <div onClick={handleOpen}>{props.component}</div>
      <Modal
        open={props.modalOpen}
        onClose={handleClose}
        sx={{ backdropFilter: "blur(5px)" }}
        hideBackdrop
      >
        <div style={style} className="modal-area">
          {props.title && (
            <div className="w-full modalTitle ">{props.title}</div>
          )}
          <div
            className="float-right -mt-9 mr-2"
            onClick={() => {
              handleClose();
            }}
          >
            <CancelIcon sx={{ color: "#ffcdd2" }} />
          </div>

          <div className="modalContentBox">{props.content}</div>
        </div>
      </Modal>
    </div>
  );
}
