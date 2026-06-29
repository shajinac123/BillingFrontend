const API_URL = "http://localhost:5000/api/staff";

// Get all staff
export const getAllStaff = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch staff");
  }

  return response.json();
};

// Get staff by ID
export const getStaffById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch staff");
  }

  return response.json();
};

// Add new staff
export const addStaff = async (staffData) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(staffData),
  });

  if (!response.ok) {
    throw new Error("Failed to add staff");
  }

  return response.json();
};

// Update staff
export const updateStaff = async (id, staffData) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(staffData),
  });

  if (!response.ok) {
    throw new Error("Failed to update staff");
  }

  return response.json();
};

// Delete staff
export const deleteStaff = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete staff");
  }

  return response.json();
};