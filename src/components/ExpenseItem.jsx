import React from 'react';
import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate";

export default function ExpenseItem(props) {    

    return (
        <div className="expense-item bg-white shadow-lg rounded-xl p-4 mx-6 my-4 flex items-center">
            <ExpenseDate propsDate={props.date} />
            <div className="expense-item__description flex-1 flex justify-between items-center">
                <h2 className="text-gray-800 font-semibold text-lg">{props.title}</h2>
                <div className="expense-item__price bg-indigo-600 text-white px-4 py-2 rounded-md shadow-md">${props.amount}</div>
            </div>
        </div>
    );
};
