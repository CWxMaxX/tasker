import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import "./modal.css";

interface Props {
	component: ReactJSXElement;
	title?: string;
	content: ReactJSXElement;
	handleSubmit?: () => void;
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
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<div>
			<div onClick={handleOpen}>{props.component}</div>
			<Modal open={open} onClose={handleClose} sx={{ backdropFilter: "blur(5px)" }} hideBackdrop>
				<div style={style} className='modal-area'>
					{props.title && <div className='w-full modalTitle '>{props.title}</div>}
					<div className='modalContentBox'>{props.content}</div>
					<div className='w-full flex flex-row justify-end '>
						<Button sx={{ mr: 3 }} color='error' variant='outlined' onClick={() => setOpen(false)}>
							Close
						</Button>
						<Button variant='contained' sx={{ mr: 3 }} onClick={props.handleSubmit}>
							Submit
						</Button>
					</div>
				</div>
			</Modal>
		</div>
	);
}
