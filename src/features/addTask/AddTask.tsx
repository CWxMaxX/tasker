import { Button, TextField } from "@mui/material";
import { useState } from "react";
import DateField from "../../components/input/DateField";

import { SectionColumn, SectionRow } from "../../components/sections/sections";

interface AddTaskProps {}

const AddTask = (props: AddTaskProps) => {
	const [date, setDate] = useState<string | undefined>("");
	console.log("Upper Date ====", date);
	const handleSubmit = () => {};
	return (
		<div>
			<SectionColumn className='w-full flex flex-col justify-between  overflow-auto'>
				<SectionColumn
					className='h-full w-full overflow-auto'
					style={{ minHeight: "200px", maxHeight: "450px" }}>
					<TextField
						id='standard-basic'
						label='Task Title'
						variant='standard'
						size='small'
						className='!mb-3'
					/>

					<TextField
						id='standard-basic'
						label='Description'
						variant='standard'
						multiline
						size='small'
						className='!mb-3'
					/>
					<SectionRow className='w-44'>
						<DateField setDate={setDate} />
					</SectionRow>
					{/* <SectionRow className='w-1/2'></SectionRow> */}
				</SectionColumn>
				<SectionRow className='justify-end items-end w-full '>
					<div>
						<Button variant='contained' sx={{ mr: 3 }} onClick={handleSubmit}>
							Submit
						</Button>
					</div>
				</SectionRow>
			</SectionColumn>
		</div>
	);
};

export default AddTask;
