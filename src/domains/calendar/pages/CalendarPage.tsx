import { useState } from 'react'
import Calendar from '../components/Calendar'
import AppointmentList from '../components/AppointmentList'
import { useAppointments } from '../hooks/useAppointments'

function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | undefined>()
  const { appointments, loading, error } = useAppointments('2025', '2026');

  console.log(appointments, loading, error);

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
      {selectedDate && (
        <AppointmentList selectedDate={selectedDate} />
      )}
    </div>
  )
}

export default CalendarPage
