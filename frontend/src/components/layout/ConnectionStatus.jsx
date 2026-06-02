import React from 'react';

const ConnectionStatus = ({ status }) => {
  let statusText = '';
  let bgColor = '';
  let dotColor = '';

  switch (status) {
    case 'connected':
      statusText = 'Connected';
      bgColor = 'bg-green-100';
      dotColor = 'bg-green-500';
      break;
    case 'connecting':
      statusText = 'Connecting...';
      bgColor = 'bg-yellow-100';
      dotColor = 'bg-yellow-500';
      break;
    case 'disconnected':
    default:
      statusText = 'Disconnected';
      bgColor = 'bg-red-100';
      dotColor = 'bg-red-500';
      break;
  }

  return (
    <div className={`flex items-center px-3 py-1 rounded-full text-sm font-medium ${bgColor}`}>
      <span className={`w-2 h-2 rounded-full ${dotColor}`} />
      <span className="mx-2">{statusText}</span>
    </div>
  );
};

export default ConnectionStatus;