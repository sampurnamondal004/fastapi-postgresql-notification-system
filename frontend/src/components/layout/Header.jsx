import React from 'react';
import { useAuthContext } from '../../contexts/AuthContext';

const Header = () => {
  const { userId, setUserId } = useAuthContext();

  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 shadow">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 gap-3">
        <h1 className="text-2xl font-bold">Realtime Notification System</h1>
        <div className="flex items-center space-x-3">
          <label htmlFor="userId" className="text-sm">User ID:</label>
          <input
            type="number"
            id="userId"
            value={userId || ''}
            onChange={(e) => setUserId(parseInt(e.target.value) || null)}
            placeholder="Enter user ID"
            className="border border-indigo-200 bg-white text-gray-800 rounded px-2 py-1 w-28 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
          {!userId && <span className="text-yellow-200 text-sm">Please select a user</span>}
        </div>
      </div>
    </header>
  );
};

export default Header;