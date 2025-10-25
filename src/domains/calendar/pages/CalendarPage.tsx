import { useState } from 'react'
import Calendar from '../components/Calendar'
import AppointmentList from '../components/AppointmentList'
import { useAppointments } from '../hooks/useAppointments'
import { formatDateToYMD } from '../../../utils/DateParser'
import type { Appointment } from '../../../types/Appointment'

function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | undefined>()
  const { appointments, loading, error } = useAppointments('2025', '2026');

  const blockedDays = appointments?.reduce((acc, appointment) => {
    acc[appointment.date] = 'red';
    return acc;
  }, {} as Record<string, string>) || {};

  console.log(appointments, loading, error, blockedDays);

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date)
  }

  const handleCurrentDateChange = (newDate: Date) => {
    setCurrentDate(newDate)
    setSelectedDate(undefined)
  }

  let visibleAppointments: Appointment[] = [];
  
  if (selectedDate){
    const selectedYMD = formatDateToYMD(selectedDate)
    if(appointments)
      visibleAppointments = appointments.filter((a) => a.date === selectedYMD).sort((a, b) => Number(a.startTime.replace(':', '')) - Number(b.startTime.replace(':', '')))
  }

  return (
    <div>
      <Calendar
        currentDate={currentDate}
        onCurrentDateChange={handleCurrentDateChange}
        selectedDate={selectedDate}
        onDateSelect={handleDateSelect}
        markedDates={blockedDays}
        unmarkedDatesColor="#49c849ff"
      />
      {selectedDate && (
        <AppointmentList appointments={visibleAppointments} />
      )}
    </div>
  )
}

export default CalendarPage
