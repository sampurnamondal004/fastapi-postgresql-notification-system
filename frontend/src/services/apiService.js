const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

export const sendNotification = async (notificationData) => {
  const response = await fetch(`${API_BASE_URL}/api/notifications/send`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(notificationData)
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

export const getNotifications = async (userId) => {
  const response = await fetch(`${API_BASE_URL}/api/notifications/${userId}`);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};
