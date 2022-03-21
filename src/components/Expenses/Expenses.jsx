import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem.js";
import "../Styles/Expenses.css";
import ExpensesFilter from "./ExpensesFilter.js";
import ExpensesChart from "./ExpensesChart.js";

const Expenses = props => {
	const [filteredYear, setFilteredYear] = useState("2022");

	const filterChangeHandler = selectedYear => {
		setFilteredYear(selectedYear);
	};
	const filteredExpenses = props.items.filter(expense => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	let expenseDisplay = <p>No Record Found...</p>;
	if (filteredExpenses.length > 0) {
		expenseDisplay = filteredExpenses.map(expense => (
			<ExpenseItem
				key={expense.id}
				title={expense.title}
				amount={expense.amount}
				date={expense.date}
			/>
		));
	}

	return (
		<div className="expenses">
			<ExpensesFilter
				selected={filteredYear}
				onChangeFilter={filterChangeHandler}
			/>
			<ExpensesChart expenses={filteredExpenses} />
			{expenseDisplay}
		</div>
	);
};

export default Expenses;
