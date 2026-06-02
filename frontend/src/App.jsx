import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { NotificationProvider } from './contexts/NotificationContext';
import { WebSocketProvider } from './contexts/WebSocketContext';
import Header from './components/layout/Header';
import MainContent from './components/MainContent';
import Footer from './components/layout/Footer';
// import './styles/globals.css';

function App() {
  return (
    <AuthProvider>
      <NotificationProvider>
        <WebSocketProvider>
          <div className="app min-h-screen bg-gray-50 text-gray-800">
            <Header />
            <MainContent />
            <Footer />
          </div>
        </WebSocketProvider>
      </NotificationProvider>
    </AuthProvider>
  );
}

export default App;