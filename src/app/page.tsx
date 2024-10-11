'use client';

import { useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!message.trim()) return;

    const userMessage = { role: 'user', content: message };
    setChat((prev):any => [...prev, userMessage]);

    // Send message to API
    const res = await fetch('/api/gpt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    const data = await res.json();
    const botMessage = { role: 'assistant', content: data.reply };

    setChat((prev):any => [...prev, botMessage]);
    setMessage('');
  };

  return (
    <div>
      <h1>GPT Chatbot</h1>
      <div style={{ border: '1px solid #ddd', padding: '10px', width: '400px', margin: '0 auto' }}>
        <div style={{ height: '300px', overflowY: 'auto', marginBottom: '10px' }}>
          {chat.map((msg: any, index: any) => (
            <div key={index}>
              <strong>{msg.role === 'user' ? 'You' : 'GPT'}:</strong> {msg.content}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            style={{ width: '80%', marginRight: '10px'}}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
