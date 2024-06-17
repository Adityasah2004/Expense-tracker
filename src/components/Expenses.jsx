import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from './ExpensesFilter';

export default function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2020');
    const [filterInfoText, setFilterInfoText] = useState('2019, 2021 and 2022');

    const filterChangeHandler = selectedYear => {
        if (selectedYear === '2019') {
            setFilteredYear(selectedYear);
            setFilterInfoText("2020, 2021 and 2022");
        }
        else if (selectedYear === '2020') {
            setFilteredYear(selectedYear);
            setFilterInfoText('2019, 2021 and 2022');
        }
        else if (selectedYear === '2021') {
            setFilteredYear(selectedYear);
            setFilterInfoText('2019, 2020 and 2022');
        }
        else {
            setFilteredYear(selectedYear);
            setFilterInfoText('2019, 2020 and 2021');
        }
    }

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    return (
        <div className="bg-white p-6 rounded-lg shadow-md mx-6 my-4">
            <ExpensesFilter selected={filteredYear} filterYear={filterChangeHandler} expenses={filteredExpenses} />
            <p className='text-center my-2 text-gray-700 text-lg'>Data for years {filterInfoText} is hidden</p>
            {filteredExpenses.length === 0 
                ? 
                    <p className='text-center my-2 text-gray-700 text-lg'>No expenses found.</p> 
                :
                filteredExpenses.map((element) => {
                    return (
                        <ExpenseItem title={element.title} date={element.date} amount={element.amount} key={element.id} />
                    )
                }) 
            }
        </div>
    )
};
