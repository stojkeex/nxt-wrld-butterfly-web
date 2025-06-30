// components/AdminPanel.tsx
import React, { useState } from 'react';

const AdminPanel = ({ onSend }: { onSend: (msg: string) => void }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      localStorage.setItem('live_announcement', message);
      window.dispatchEvent(new Event('storage'));
      setMessage('');
      onSend(message);
    }
  };

  return (
    <div className="p-4 bg-black text-white border border-white max-w-md mx-auto mt-10 rounded-xl">
      <h2 className="text-xl font-bold mb-4">Admin Announcement Panel</h2>
      <textarea
        className="w-full p-2 bg-gray-800 rounded-md"
        placeholder="Write announcement..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        onClick={handleSend}
        className="mt-2 bg-primary hover:bg-pink-500 text-black px-4 py-2 rounded"
      >
        Send Announcement
      </button>
    </div>
  );
};

export default AdminPanel;
