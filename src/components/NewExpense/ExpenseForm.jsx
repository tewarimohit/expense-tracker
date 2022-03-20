import React, { useState } from "react";
import "../Styles/ExpenseForm.css";

const ExpenseForm = props => {
	const [enteredTitle, setEnteredTitle] = useState("");
	const [enteredAmount, setEnteredAmount] = useState("");
	const [enteredDate, setEnteredDate] = useState("");
	// const [userInput, setUserInput] = useState({
	// 	enteredTitle: "",
	// 	enteredAmount: "",
	// 	enteredDate: "",
	// });

	const titleChangeHandler = event => {
		setEnteredTitle(event.target.value);

		// setUserInput({ ...userInput, enteredTitle: event.target.value }); not to be updated like this

		// instead use this method
		// setUserInput(prevState => {
		// 	return { ...prevState, enteredTitle: event.target.value };
		// }); always a safer way
	};
	const amountChangeHandler = event => {
		setEnteredAmount(event.target.value);

		// setUserInput({ ...userInput, enteredAmount: event.target.value });
	};
	const dateChangeHandler = event => {
		setEnteredDate(event.target.value);

		// setUserInput({ ...userInput, enteredDate: event.target.value });
	};

	const submitHandler = event => {
		event.preventDefault();

		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate),
		};

		props.onSaveExpenseData(expenseData);
		setEnteredAmount("");
		setEnteredDate("");
		setEnteredTitle("");
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input
						type="text"
						value={enteredTitle}
						onChange={titleChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						min="0.1"
						step="0.1"
						value={enteredAmount}
						onChange={amountChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						min="2020-01-01"
						max="2024-12-31"
						value={enteredDate}
						onChange={dateChangeHandler}
					/>
				</div>
				<div className="new-expense__actions">
					<button type="submit">Add Expense</button>
				</div>
			</div>
		</form>
	);
};

export default ExpenseForm;
