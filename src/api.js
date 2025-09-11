// src/api.js

const backendUrl = process.env.REACT_APP_BACKEND_URL || "https://hack-app-backend-4.onrender.com";

export const fetchCourses = async () => {
  try {
    const response = await fetch(`${backendUrl}/api/courses`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
};
