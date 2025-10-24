// src/api/appointmentApi.ts

// Die Basis-URL Ihres deployten Servers (muss angepasst werden!)
const BASE_URL = "https://node-projekt-475112.ey.r.appspot.com";

import type { Appointment } from '../types/Appointment';

/**
 * Ruft Termine für einen bestimmten Zeitraum vom App Engine Server ab.
 * @param startDate Startdatum im Format YYYY-MM-DD
 * @param endDate Enddatum im Format YYYY-MM-DD
 * @returns Ein Array von Terminen
 */
export async function fetchAppointmentsByDate(startDate: string, endDate: string): Promise<Appointment[]> {
    if (!startDate || !endDate) {
        throw new Error("Start- und Enddatum sind erforderlich.");
    }
    
    // Die vollständige URL zum Backend-Endpunkt
    const apiUrl = `${BASE_URL}/api/calendar/${startDate}/${endDate}`;

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            // Wirft einen Fehler mit dem genauen HTTP-Status
            throw new Error(`HTTP error! Status: ${response.status}. Could not fetch appointments.`);
        }
        
        const result = await response.json(); 
        
        // Dein Backend gibt wahrscheinlich ein Objekt mit einer 'data'-Eigenschaft zurück
        if (result && result.data && Array.isArray(result.data)) {
             return result.data as Appointment[];
        }
        
        // Wenn das Backend das Array direkt zurückgibt:
        if (Array.isArray(result)) {
            return result as Appointment[];
        }
        
        throw new Error("Ungültiges Datenformat vom Server erhalten.");
        
    } catch (error) {
        console.error("API Fetch Error:", error);
        throw error;
    }
}