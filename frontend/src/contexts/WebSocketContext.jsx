import React, { createContext, useContext, useState, useEffect } from 'react';
import { createWebSocket } from '../services/websocketService';

const WebSocketContext = createContext();

export const WebSocketProvider = ({ children }) => {
  const [status, setStatus] = useState('disconnected'); // connected, disconnected, connecting
  const [ws, setWs] = useState(null);

  useEffect(() => {
    return () => {
      if (ws) {
        ws.close();
      }
    };
  }, [ws]);

  const connect = (userId, onMessage) => {
    if (!userId) return;
    setStatus('connecting');
    const newWs = createWebSocket(
      userId,
      onMessage,
      () => setStatus('connected'),
      () => setStatus('disconnected')
    );
    setWs(newWs);
  };

  const disconnect = () => {
    if (ws) {
      ws.close();
      setWs(null);
      setStatus('disconnected');
    }
  };

  return (
    <WebSocketContext.Provider value={{ status, connect, disconnect }}>
      {children}
    </WebSocketContext.Provider>
  );
};

export const useWebSocketContext = () => {
  const context = useContext(WebSocketContext);
  if (!context) {
    throw new Error('useWebSocketContext must be used within a WebSocketProvider');
  }
  return context;
};
