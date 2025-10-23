import type { Appointment } from '../../../types/Appointment'
import styles from './AppointmentEntry.module.css'

type Props = {
  appointment: Appointment
}

export default function AppointmentEntry({ appointment }: Props) {
  return (
    <div className={styles.entry}>
      <div className={styles.header}>{appointment.clientId}</div>
      <div className={styles.time}>{appointment.startTime} — {appointment.endTime}</div>
    </div>
  )
}
