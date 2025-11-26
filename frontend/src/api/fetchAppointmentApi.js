import { API_BASE_URL } from '@env';

// Fallback dummy patient ID until authentication is implemented
const DUMMY_PATIENT_ID = '69145f5a7c6d8dcc86793866';

/**
 * Fetch appointments from API.
 * @param {string} patientId Optional: fetch appointments for a specific patient.
 * @param {string} appointmentId Optional: fetch a single appointment by ID.
 */
export const fetchAppointments = async ({ patientId, appointmentId } = {}) => {
  const queryParams = new URLSearchParams();

  if (appointmentId) queryParams.append('id', appointmentId);
  if (patientId) queryParams.append('patientId', patientId);

  const url = `${API_BASE_URL}/appointments${queryParams.toString() ? '?' + queryParams.toString() : ''}`;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000); // 10s timeout

  try {
    console.log('Fetching URL:', url);
    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(timeout);

    if (!response.ok) {
      const text = await response.text().catch(() => null);
      console.error(
        'fetchAppointments non-ok response:',
        response.status,
        text,
      );
      throw new Error(`HTTP ${response.status}`);
    }

    const result = await response.json();
    console.log('Raw API response:', result);

    return result?.data?.appointments || [];
  } catch (error) {
    console.error('fetchAppointments error:', error);
    return [];
  }
};
