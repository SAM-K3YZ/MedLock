import { API_BASE_URL } from '@env';

const TEST_PATIENT_ID = '69145f5a7c6d8dcc86793866';

export const fetchPatient = async () => {
  try {
    const url = `${API_BASE_URL}/patients/${TEST_PATIENT_ID}`;
    console.log('Fetching patient from:', url);

    const response = await fetch(url);

    // === Check if request failed ===
    if (!response.ok) {
      let errorMessage = 'Network error';
      try {
        const errorText = await response.text();
        console.error('fetchPatient non-ok response text:', errorText);
        console.log('API_BASE_URL:', API_BASE_URL);
        errorMessage = errorText || `HTTP ${response.status}`;
      } catch (textError) {
        console.warn('Failed to read error text:', textError);
        errorMessage = `HTTP ${response.status}`;
      }
      throw new Error(errorMessage);
    }

    const result = await response.json();
    console.log('Backend response (patient):', result);

    // Backend returns { data: { patient } } for single patient
    // but older endpoints might return patients directly — handle both.
    const patient =
      result?.data?.patient ||
      result?.data?.patients ||
      result?.patients ||
      result;

    if (!patient) {
      console.warn('No patient found in response');
      return null;
    }

    // If patient is an array, pick first
    const p = Array.isArray(patient) ? patient[0] : patient;

    // Combine first + last name
    const fullName = [p.firstname, p.lastname].filter(Boolean).join(' ').trim();

    return {
      name: fullName || 'User',
      firstname: p.firstname,
      lastname: p.lastname,
      email: p.email,
    };
  } catch (error) {
    console.error('fetchPatient error:', error.message || error);
    return null;
  }
};
