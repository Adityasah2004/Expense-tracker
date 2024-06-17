import React from 'react';

export default function Bar(props) {

    let barHeightFill = '0%';

    if (props.maxValue > 0) {
        barHeightFill = Math.round((props.value / props.maxValue) * 100) + "%";
    }

    return (
        <div className='flex flex-col items-center w-1/12'>
            <div className='my-2 w-full h-40 bg-gray-200 rounded-lg overflow-hidden flex items-end'>
                <div 
                    className="charBarFill bg-indigo-500 w-full transition-all duration-500 ease-in-out" 
                    style={{ height: barHeightFill }}>
                </div>
            </div>
            <p className='text-sm text-gray-700'>{props.label}</p>
        </div>
    );
}
