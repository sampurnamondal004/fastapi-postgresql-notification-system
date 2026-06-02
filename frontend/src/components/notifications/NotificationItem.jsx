import React from 'react';
import moment from 'moment';

const NotificationItem = ({ notification }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 border-l-4 border-blue-500">
      <div className="flex items-start justify-between">
        <p className="font-medium text-gray-800">{notification.message}</p>
      </div>
      <div className="flex justify-between text-xs text-gray-500 mt-2">
        <span>{moment(notification.created_at).format('YYYY-MM-DD HH:mm:ss')}</span>
        <span>User ID: {notification.user_id}</span>
      </div>
    </div>
  );
};

export default NotificationItem;