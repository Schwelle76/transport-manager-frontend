import { useState } from 'react'
import Calendar from '../components/Calendar'

function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | undefined>()

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date)
  }

  const handleCurrentDateChange = (newDate: Date) => {
    setCurrentDate(newDate)
    setSelectedDate(undefined)
  }

  return (
    <div>
      <Calendar
        currentDate={currentDate}
        onCurrentDateChange={handleCurrentDateChange}
        selectedDate={selectedDate}
        onDateSelect={handleDateSelect}
      />
    </div>
  )
}

export default CalendarPage
