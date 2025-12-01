import { API_BASE_URL } from '@env';

/**
 * Fetch all doctors
 */
export const fetchDoctors = async () => {
  const url = `${API_BASE_URL}/doctors`;
  console.log('Fetching doctors URL:', url);

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(timeout);

    if (!response.ok) return [];

    const { data } = await response.json();
    return data?.doctors || [];
  } catch (error) {
    console.error('fetchDoctors error:', error);
    return [];
  }
};
