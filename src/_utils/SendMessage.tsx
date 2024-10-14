import React from 'react';

export async function sendMessage(message: string, setLoading:React.Dispatch<React.SetStateAction<boolean>>, setResponse: React.Dispatch<React.SetStateAction<string | boolean>>) {
    setLoading(true);
    setResponse('');

    try {
      const res = await fetch('/api/recipes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message })
      });

      const data = await res.json();
      setResponse(data);
    } catch (error) {
      setResponse('Error: Could not get a response.');
    } finally {
      setLoading(false);
    }
  };
