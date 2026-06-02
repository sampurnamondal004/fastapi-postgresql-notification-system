export const createWebSocket = (userId, onMessage, onOpen, onClose) => {
  const ws = new WebSocket(`wss://fastapi-postgresql-notification-system-production.up.railway.app/ws/${userId}`);

  ws.onopen = () => {
    console.log('WebSocket connected');
    if (onOpen) onOpen();
  };

  ws.onmessage = (event) => {
    try {
      const data = JSON.parse(event.data);
      if (onMessage) onMessage(data);
    } catch (error) {
      console.error('Error parsing WebSocket message:', error);
    }
  };

  ws.onclose = () => {
    console.log('WebSocket disconnected');
    if (onClose) onClose();
  };

  ws.onerror = (error) => {
    console.error('WebSocket error:', error);
  };

  return ws;
};
