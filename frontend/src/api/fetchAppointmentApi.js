import { API_BASE_URL } from '@env';
// Dummy patient ID until auth is implemented
const DUMMY_PATIENT_ID = '69145f5a7c6d8dcc86793866';

/**
 * Fetch all appointments or a single appointment
 */
export const fetchAppointments = async ({
  patientId = DUMMY_PATIENT_ID,
  appointmentId,
} = {}) => {
  const params = new URLSearchParams();
  if (patientId) params.append('patientId', patientId);
  if (appointmentId) params.append('id', appointmentId);

  const url = `${API_BASE_URL}/appointments${params.toString() ? '?' + params.toString() : ''}`;
  console.log('Fetching appointments URL:', url);

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(timeout);

    if (!response.ok) return [];

    const { data } = await response.json();
    return data?.appointments || [];
  } catch (error) {
    console.error('fetchAppointments error:', error);
    return [];
  }
};
