import AppointmentEntry from './AppointmentEntry'
import styles from './AppointmentList.module.css'
import { mockAppointments } from '../../../types/Appointment'
import type { Appointment } from '../../../types/Appointment'

type Props = {
  selectedDate: Date
}

function formatDateToYMD(d: Date) {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

export default function AppointmentList({ selectedDate }: Props) {
  const ymd = formatDateToYMD(selectedDate)
  const items: Appointment[] = mockAppointments.filter((a) => a.date === ymd)

  if (items.length === 0) {
    return null
  }

  return (
    <div className={styles.list}>
      {items.map((appt, idx) => (
        <AppointmentEntry key={`${appt.clientId}-${appt.startTime}-${idx}`} appointment={appt} />
      ))}
    </div>
  )
}
