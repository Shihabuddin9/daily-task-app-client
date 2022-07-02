import React, { useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Calendar = () => {
    const [date, setDate] = useState(new Date());

    let footer = <p>Please pick a day.</p>;
    if (date) {
        footer = <p>You picked {format(date, 'PP')}.</p>;
    }
    return (
        <div className='h-screen'>
            <div className='flex justify-center items-center mt-20'>
                <div>
                    <h1 className='text-xl'>Calendar</h1>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        footer={footer}
                    />
                </div>
            </div>
        </div>
    );
};

export default Calendar;