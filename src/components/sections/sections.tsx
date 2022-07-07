import React from "react";

interface SectionProps {
	className?: string;
	children?: JSX.Element | any;
	style?: React.CSSProperties;
}

export const SectionRow = (props: SectionProps) => {
	const { className, children, style } = props;
	return (
		<div className={`flex flex-row flex-wrap ${className}`} style={style}>
			{children}
		</div>
	);
};
export const SectionColumn = (props: SectionProps) => {
	const { className, children, style } = props;
	return (
		<div className={`flex flex-col  ${className}`} style={style}>
			{children}
		</div>
	);
};
