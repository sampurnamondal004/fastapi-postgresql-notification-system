import React from 'react';
import NotificationItem from './NotificationItem';

const NotificationList = ({ notifications, loading, error }) => {
  if (loading) {
    return <div className="text-center py-4 text-gray-500">Loading notifications...</div>;
  }

  if (error) {
    return <div className="text-center py-4 text-red-500">Error: {error}</div>;
  }

  if (notifications.length === 0) {
    return <div className="text-center py-4 text-gray-500">No notifications yet.</div>;
  }

  return (
    <div className="space-y-2">
      {notifications.map((notification) => (
        <NotificationItem key={notification.id} notification={notification} />
      ))}
    </div>
  );
};

export default NotificationList;