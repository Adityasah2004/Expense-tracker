import React from 'react';
import './ExpensesFilter.css';
import ExpensesFilterBar from './ExpensesFilterBar';

export default function ExpensesFilter(props) {

    const dropdownChangeHandler = (event) => {
        props.filterYear(event.target.value);
    }

    return (
        <div className='expenses-filter flex flex-col items-center bg-white p-4 rounded-lg shadow-md w-full'>
            <div className='expenses-filter__control w-4/5 flex justify-between items-center mb-4'>
                <label className='text-gray-800 font-semibold'>Filter by year</label>
                <select value={props.selected} onChange={dropdownChangeHandler} className='bg-slate-800 text-white cursor-pointer py-2 px-4 rounded-md'>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
            <ExpensesFilterBar expenses={props.expenses} />
        </div>
    );
}
