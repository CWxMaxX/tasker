import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarCard = () => {
	const [value, onChange] = useState(new Date());

	return (
		<div className='mr-8 rounded-2xl overflow-clip'>
			<Calendar onChange={onChange} value={value} className=' text-gray-700' />
		</div>
	);
};

export default CalendarCard;
