import React from 'react';
import Bar from './Bar';

export default function ExpensesFilterBar(props) {

    const charDatapoints = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sept', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 }
    ];

    for (const expense of props.expenses) {
        const expensesMonth = expense.date.getMonth();
        charDatapoints[expensesMonth].value += expense.amount;
    }

    const dataPointValues = charDatapoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);

    return (
        <section className='bg-slate-100 p-4 rounded-lg shadow-md w-full flex justify-between'>
            {charDatapoints.map(dataPoint => (
                <Bar 
                    key={dataPoint.label} 
                    label={dataPoint.label} 
                    value={dataPoint.value} 
                    maxValue={totalMaximum} 
                />
            ))}
        </section>
    );
}
