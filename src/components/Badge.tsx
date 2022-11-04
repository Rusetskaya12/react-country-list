// import React, { ReactNode } from "react";
import { Color } from "../types/colors";
import { BadgeLabel } from "../types/labelTypes";

interface IBadge {
	label: BadgeLabel;
	count: number;
	color: Color;

}
export const Badge = ({ label, color, count }: IBadge) => {
	return (<span className={`badge bg-${color} px-4 col-2 `}>
		{label}: {count}</span>
	);
};
