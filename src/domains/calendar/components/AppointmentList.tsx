import AppointmentEntry from './AppointmentEntry'
import styles from './AppointmentList.module.css'
import type { Appointment } from '../../../types/Appointment'

type Props = {
  appointments: Appointment[]
}

export default function AppointmentList({appointments }: Props) {


  if (appointments.length === 0) {
    return null
  }

  return (
    <div className={styles.list}>
      {appointments.map((appt, idx) => (
        <AppointmentEntry key={`${appt.clientId}-${appt.startTime}-${idx}`} appointment={appt} />
      ))}
    </div>
  )
}
