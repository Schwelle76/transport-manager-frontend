export type Appointment = {
  clientId: string;
  date: string;       // YYYY-MM-DD
  startTime: string;  // HH:MM
  endTime: string;    // HH:MM
}


export const mockAppointments: Appointment[] = [
  // --- OCTOBER 2025 ---
  {
    clientId: "client-456",
    date: "2025-10-08", // Wednesday
    startTime: "09:00",
    endTime: "10:30",
  },
  {
    clientId: "client-789",
    date: "2025-10-10", // Friday
    startTime: "11:00",
    endTime: "12:00",
  },
  {
    clientId: "client-789",
    date: "2025-10-10", // Friday
    startTime: "12:00",
    endTime: "13:00",
  },
  {
    clientId: "client-789",
    date: "2025-10-10", // Friday
    startTime: "14:00",
    endTime: "16:00",
  },
  {
    clientId: "client-101",
    date: "2025-10-15", // Wednesday
    startTime: "14:00",
    endTime: "16:00",
  },
  {
    clientId: "client-202",
    date: "2025-10-27", // Monday
    startTime: "08:00",
    endTime: "09:30",
  },
  
  // --- NOVEMBER 2025 ---
  {
    clientId: "client-303",
    date: "2025-11-05", // Wednesday
    startTime: "10:00",
    endTime: "11:00",
  },
  {
    clientId: "client-404",
    date: "2025-11-06", // Thursday
    startTime: "15:30",
    endTime: "17:00",
  },
  {
    clientId: "client-505",
    date: "2025-11-18", // Tuesday
    startTime: "09:30",
    endTime: "11:30",
  },
  {
    clientId: "client-606",
    date: "2025-11-21", // Friday
    startTime: "13:00",
    endTime: "14:00",
  },
];