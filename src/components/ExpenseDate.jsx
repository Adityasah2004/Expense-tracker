import React from 'react';

export default function ExpenseDate(props) {
    const month = props.propsDate.toLocaleString('en-US', { month: 'long' });
    const day = props.propsDate.toLocaleString('en-US', { day: '2-digit' });
    const year = props.propsDate.getFullYear();

    return (
        <div className='bg-gray-100 p-2 rounded-lg text-center shadow-md w-24 border border-gray-300'>
            <p className="text-sm text-gray-600">{month}</p>
            <p className="text-xl font-semibold text-gray-900">{day}</p>
            <p className="text-sm text-gray-600">{year}</p>
        </div>
    );
}
