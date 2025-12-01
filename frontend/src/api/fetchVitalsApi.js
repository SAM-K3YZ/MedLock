import { API_BASE_URL } from '@env';

// Dummy patient ID until auth is implemented
const DUMMY_PATIENT_ID = '69145f5a7c6d8dcc86793866';

export const fetchVitals = async ({ patientId = DUMMY_PATIENT_ID } = {}) => {
  const params = new URLSearchParams();
  if (patientId) params.append('patientId', patientId);

  const url = `${API_BASE_URL}/vitals${params.toString() ? '?' + params.toString() : ''}`;
  console.log('Fetching vitals URL:', url);

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(timeout);

    if (!response.ok) return [];

    const { data } = await response.json();
    return data?.vitals || [];
  } catch (error) {
    console.error('fetchVitals error:', error);
    return [];
  }
};
