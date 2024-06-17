import React, { useState } from 'react';
import "./ExpenseForm.css"

export default function ExpenseForm(props){

    const [enteredTitle, setEnteredTitle] = useState('');
    const [formToggle, setFormToggle] = useState(false);

    const showForm = () => {
        setFormToggle(!formToggle);
    }

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const [enteredAmount, setEnteredAmount] = useState('');

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const [enteredDate, setEnteredDate] = useState('');

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault(); // dont reload page
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData);
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('');
        setFormToggle(!formToggle);
    }

    return (
        <>
            {
                formToggle ?
                <form onSubmit={submitHandler} className="bg-white p-6 rounded-lg shadow-md">
                    <div className='new-expense__controls'>
                        <div className="new-expense__control">
                            <label htmlFor="title" className="text-gray-700">Title</label>
                            <input type="text" id="title" className='text-gray-700 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500' onChange={titleChangeHandler} value={enteredTitle} />
                        </div>
                        <div className="new-expense__control">
                            <label htmlFor="amount" className="text-gray-700">Amount</label>
                            <input type="number" id="amount" min="0.01" step="0.01" className='text-gray-700 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500' onChange={amountChangeHandler} value={enteredAmount} />
                        </div>
                        <div className="new-expense__control">
                            <label htmlFor="date" className="text-gray-700">Date</label>
                            <input type="date" id="date" min="2019-01-01" max="2022-12-31" className='text-gray-700 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500' onChange={dateChangeHandler} value={enteredDate} />
                        </div>
                    </div>
                    <div className="new-expense__actions flex justify-end gap-4 mt-4">
                        <button type="button" onClick={showForm} className='py-2 px-4 bg-gray-300 rounded-lg hover:bg-gray-400'>Cancel</button>
                        <button type="submit" className='py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700'>Add Expense</button>
                    </div>
                </form>
                :
                <div className="new-expense__actions flex justify-center mt-4">
                    <button onClick={showForm} className='py-2 px-6 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700'>Add New Expense</button>
                </div>
            }
        </>
    )
}
