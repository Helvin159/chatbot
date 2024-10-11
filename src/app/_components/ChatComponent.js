import { useState } from 'react';

export default function ChatComponent() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    setLoading(true);
    setResponse(''); // Clear previous response

    try {
      const res = await fetch('/api/gpt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();
      setResponse(data.reply); // Set GPT's response
    } catch (error) {
      setResponse('Error: Could not get a response.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Chat with GPT</h1>

      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        rows="4"
        cols="50"
        style={{color:'black'}}
      />

      <br />
      <button onClick={sendMessage} disabled={!message || loading}>
        {loading ? 'Sending...' : 'Send'}
      </button>

      {response && (
        <div style={{ marginTop: '20px' }}>
          <h3>Response:</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}
