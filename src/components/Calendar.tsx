import { useState } from 'react';
import styles from './Calendar.module.css';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const monthNames = [
    'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
    'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'
  ];

  const daysOfWeek = ['M', 'D', 'M', 'D', 'F', 'S', 'S'];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    
    const days = [];
    const startOffset = firstDay.getDay();
    const endOffset = 6 - lastDay.getDay();
    
    // Füge leere Tage vom Vormonat hinzu
    for(let i = startOffset > 0 ? startOffset - 1 : 6; i > 0; i--) {
      days.push(null);
    }
    
    // Füge Tage des aktuellen Monats hinzu
    for(let day = 1; day <= lastDay.getDate(); day++) {
      days.push(day);
    }
    
    // Füge leere Tage vom Folgemonat hinzu
    for(let i = 0; i < endOffset; i++) {
      days.push(null);
    }

    return days;
  };

  const handlePreviousMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() - 1);
    setCurrentDate(newDate);
  };

  const handleNextMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + 1);
    setCurrentDate(newDate);
  };

  return (
    <div className={styles.calendarContainer}>
      <div className={styles.header}>
        <button onClick={handlePreviousMonth} className={styles.navButton}>{'<'}</button>
        <h2>{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</h2>
        <button onClick={handleNextMonth} className={styles.navButton}>{'>'}</button>
      </div>
      
      <div className={styles.weekDays}>
        {daysOfWeek.map((day, index) => (
          <div key={index} className={styles.dayHeader}>{day}</div>
        ))}
      </div>
      
      <div className={styles.daysGrid}>
        {getDaysInMonth(currentDate).map((day, index) => (
          <div 
            key={index}
            className={`${styles.dayCell} ${day ? styles.activeDay : ''}`}
          >
            {day || ''}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
