import React, { useState } from 'react';
import Expenses from "./components/Expenses";
import NewExpense from './components/NewExpense';

const initial_expenses = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14)
    },
    {
        id: 'e2',
        title: 'New TV',
        amount: 799.49,
        date: new Date(2021, 2, 12)
    },
    {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28)
    },
    {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12)
    }
];

function App() {

    const [expenses, setExpenses] = useState(initial_expenses);

    const addExpenseHandler = expense => {
        setExpenses((preExpenses) => {
            return [expense, ...preExpenses];
        });
        // console.log("in app.js");
        // console.log(expense);
    }

    return (
        <div className="h-screen">
            <h1 className="text-4xl">Let's get the Expense!</h1>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses expenses={expenses}/>
        </div>
    );
}

export default App;
