import { API_BASE_URL } from '@env';

const TEST_PATIENT_ID = '69145f5a7c6d8dcc86793866';

export const fetchVitals = async () => {
  try {
    console.log('API_BASE_URL:', API_BASE_URL);
    const url = `${API_BASE_URL}/vitals?patientId=${TEST_PATIENT_ID}`;
    console.log('fetchVitals calling URL:', url);
    const response = await fetch(url, { timeout: 10000 });
    if (!response.ok) {
      const text = await response.text().catch(() => null);
      console.error('fetchVitals non-ok response:', response.status, text);
      throw new Error(`HTTP ${response.status}`);
    }
    const result = await response.json();
    console.log('Backend response (vitals):', result);
    return result?.data?.vitals || result?.vitals || [];
  } catch (error) {
    console.error('fetchVitals error:', error);
    return [];
  }
};
