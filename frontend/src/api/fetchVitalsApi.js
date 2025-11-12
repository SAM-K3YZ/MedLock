import { API_BASE_URL } from '@env';

export const fetchVitals = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/vitals`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result.data; // Assuming your backend returns { status, data }
  } catch (error) {
    console.error('Error fetching vitals:', error);
    return null; // optional fallback
  }
};
