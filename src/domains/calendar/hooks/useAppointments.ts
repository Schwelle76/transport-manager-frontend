import { useState, useEffect } from 'react';
import { fetchAppointmentsByDate } from '../../../api/AppointmentApi';
import type { Appointment } from '../../../types/Appointment';

export function useAppointments(startDate: string, endDate: string) {
    const [appointments, setAppointments] = useState<Appointment[]>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | undefined>(undefined);

    useEffect(() => {
        if (!startDate || !endDate) return;

        async function loadAppointments() {
            setLoading(true);
            setError(undefined);
            try {
                const data = await fetchAppointmentsByDate(startDate, endDate);
                setAppointments(data);
            } catch (err) {
                if(err instanceof Error)
                    setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        loadAppointments();
    }, [startDate, endDate]); // Abhängigkeiten: Fetchen nur, wenn sich der Zeitraum ändert

    return { appointments, loading, error };
}