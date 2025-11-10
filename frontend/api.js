import { API_BASE_URL } from "@env";

export const fetchCategories = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/categories`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Fetched categories:", data);
    //for full detatils, run below
    //console.log("Fetched categories:", JSON.stringify(data, null, 2));
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
};
