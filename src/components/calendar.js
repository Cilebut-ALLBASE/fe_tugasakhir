import React, { useState } from 'react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, isSameMonth, isToday } from 'date-fns';
import { addDays, startOfWeek, endOfWeek } from 'date-fns';
import '../styles/calendar-style.css';

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const header = () => {
        const dateFormat = 'MMMM yyyy';
        return (
            <div className="header ">
                <div className="column col-start">
                    <div className="icon" onClick={prevMonth}>
                        <svg className='panah' xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none" transform="scale(-1, 1)">
                            <path d="M5.81689 12.325L9.6419 8.50000L5.8169 4.67500L7.00023 3.50000L12.0002 8.50000L7.00023 13.5000L5.81689 12.325Z" fill="#848A95" />
                        </svg>
                    </div>
                </div>
                <div className="column col-center">
                    <span>{format(currentDate, dateFormat)}</span>
                </div>
                <div className="column col-end" onClick={nextMonth}>
                    <div className="icon">
                        <svg className='panah' xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                            <path d="M5.81689 12.325L9.6419 8.50000L5.8169 4.67500L7.00023 3.50000L12.0002 8.50000L7.00023 13.5000L5.81689 12.325Z" fill="#848A95" />
                        </svg>
                    </div>
                </div>
            </div>
        );
    };

    const daysOfWeek = () => {
        const dateFormat = 'eee';
        const days = [];

        let startDate = startOfMonth(currentDate);

        for (let i = 0; i < 7; i++) {
            days.push(
                <div className="column col-center" key={i}>
                    {format(addDays(startDate, i), dateFormat)}
                </div>
            );
        }

        return <div className="days row">{days}</div>;
    };

    const cells = () => {
        const monthStart = startOfMonth(currentDate);
        const startDate = startOfWeek(monthStart, {weekStartsOn: 0})
        const dateFormat = 'd';
        const rows = [];
    
        let days = [];
        let day = startDate;
        let formattedDate = '';
    
        while (day <= endOfMonth(monthStart)) {
            for (let i = 0; i < 7; i++) {
                formattedDate = format(day, dateFormat);
                const cloneDay = day;
                days.push(
                    <div
                        className={`column cell ${!isSameMonth(day, monthStart) ? 'disabled' : isToday(day) ? 'today' : ''}`}
                        key={day}
                        onClick={() => onDateClick(cloneDay)}
                    >
                        <span className="number">{formattedDate}</span>
                    </div>
                );
                day = addDays(day, 1);
            }
    
            rows.push(
                <div className="row" key={day}>
                    {days}
                </div>
            );
            days = [];
        }
        return <div className="body">{daysOfWeek()}{rows}</div>;
    };

    const prevMonth = () => {
        setCurrentDate(subMonths(currentDate, 1));
    };

    const nextMonth = () => {
        setCurrentDate(addMonths(currentDate, 1));
    };

    const onDateClick = (day) => {
        console.log('Selected Date:', day);
    };

    return (
        <div className="calendar">
            {header()}
            {cells()}
        </div>
    );
};

export default Calendar;
