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
      <div className='flex justify-center items-center w-100 h-20'>
        <h1 className='text-3xl'>Chatbot</h1>
      </div>
      <div className='rounded-lg outline-dashed outline-black outline-2 outline-offset-4 p-2.5 my-0 mx-auto w-11/12'>
        <div className='w-full h-96 overflow-y-auto mb-2.5' >
          {chat.map((msg: any, index: any) => (
            <div key={index}>
              <p>
                <strong>{msg.role === 'user' ? 'You' : 'Jefe'}:</strong> {msg.content}
              </p>
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
