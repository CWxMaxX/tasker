import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { SectionRow } from "../sections/sections";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
	setDate: (date: string | undefined) => void;
}

const DateField = (props: Props) => {
	const utc = new Date();
	const [taskDate, setTaskDate] = useState<Date | null>(utc);
	const [borderColor, setBorderColor] = useState("black");

	useEffect(() => {
		return () => {
			props.setDate(taskDate?.toLocaleDateString());
		};
	}, [props, taskDate]);

	return (
		<SectionRow
			className='w-full my-2 border-b border-gray-500 hover:border-black hover:border-b-2 '
			style={{ borderColor: `${borderColor}` }}>
			<span className='text-gray-500'>Date : </span>
			<div className='ml-2 '>
				<DatePicker
					selected={taskDate}
					onChange={(date) => {
						setTaskDate(date);
						props.setDate(date?.toLocaleDateString());
						setBorderColor("#4B5563");
					}}
					onFocus={() => {
						setBorderColor("#1B67B1");
					}}
					onBlur={() => {
						setBorderColor("#4B5563");
					}}
					className='w-24'
				/>
			</div>
			{taskDate && (
				<CloseIcon
					className='float-right text-gray-300 hover:text-gray-700'
					onClick={() => {
						props.setDate(undefined);
						setTaskDate(null);
					}}
				/>
			)}
		</SectionRow>
	);
};

export default DateField;
