import React, { useState } from "react";
import "../Styles/ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";

const ExpenseItem = props => {
	const [title, setTitle] = useState(props.title);

	const clickHandler = () => {
		setTitle("Updated!");
	};
	return (
		<div className="expense-item">
			<ExpenseDate date={props.date} />
			<div className="expense-item__description">
				<h2>{title}</h2>
				<div className="expense-item__price">Rs {props.amount}</div>
			</div>
		</div>
	);
};

export default ExpenseItem;
