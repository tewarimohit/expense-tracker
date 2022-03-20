import Expenses from "./components/Expenses/Expenses.jsx";
import NewExpense from "./components/NewExpense/NewExpense.js";
import { useState } from "react";

const dummyExpenses = [
	{
		id: "e1",
		title: "Car",
		amount: 4000000,
		date: new Date(2022, 1, 14),
	},
	{ id: "e2", title: "New TV", amount: 110000, date: new Date(2022, 2, 12) },
	{
		id: "e3",
		title: "Vehicle Insurance",
		amount: 5000,
		date: new Date(2022, 2, 19),
	},
	{
		id: "e4",
		title: "New Desk (Wooden)",
		amount: 4500,
		date: new Date(2022, 2, 12),
	},
];

const App = () => {
	const [expenses, setExpenses] = useState(dummyExpenses);

	const addExpenseHandler = expenses => {
		setExpenses(prevExpenses => {
			return [...prevExpenses, expenses];
		});
	};

	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />

			<Expenses items={expenses} />
		</div>
	);
};

export default App;
