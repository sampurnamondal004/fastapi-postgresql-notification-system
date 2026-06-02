import React, { useState } from 'react';
import { useAuthContext } from '../../contexts/AuthContext';
import { sendNotification } from '../../services/apiService';
import { useNotificationContext } from '../../contexts/NotificationContext';

const SendNotificationForm = ({ onClose }) => {
  const { userId } = useAuthContext();
  const { loadNotifications } = useNotificationContext();
  const [recipientId, setRecipientId] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(null);
    setSubmitSuccess(false);
    setSubmitting(true);

    try {
      await sendNotification({
        user_id: parseInt(recipientId),
        message: message
      });
      setSubmitSuccess(true);
      // Clear form
      setRecipientId('');
      setMessage('');
      // Optionally reload notifications for current user
      if (userId) {
        loadNotifications(userId);
      }
      // Close modal after a short delay so user sees success message
      if (onClose) {
        setTimeout(() => onClose(), 900);
      }
    } catch (err) {
      setSubmitError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md w-full">
      <h2 className="text-xl font-bold mb-4 text-blue-600">Send Notification</h2>
      <div className="mb-4">
        <label htmlFor="recipientId" className="block text-sm font-medium mb-2">
          Recipient User ID:
        </label>
        <input
          type="number"
          id="recipientId"
          value={recipientId}
          onChange={(e) => setRecipientId(e.target.value)}
          required
          disabled={submitting}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message:
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          disabled={submitting}
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        disabled={submitting || !userId}
        className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
      >
        {submitting ? 'Sending...' : 'Send Notification'}
      </button>
      {submitError && (
        <div className="mt-3 p-3 bg-red-100 text-red-700 rounded-md">
          Error: {submitError}
        </div>
      )}
      {submitSuccess && (
        <div className="mt-3 p-3 bg-green-100 text-green-700 rounded-md">
          Notification sent successfully!
        </div>
      )}
    </form>
  );
};

export default SendNotificationForm;