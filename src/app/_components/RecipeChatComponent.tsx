'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const RecipeChatComponent = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse]:any = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    setLoading(true);
    setResponse(''); // Clear previous response

    try {
      const res = await fetch('/api/recipes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message })
      });

      const data = await res.json();
      setResponse(data); // Set GPT's response
      console.log(data);
    } catch (error) {
      setResponse('Error: Could not get a response.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className='flex p-5'>
        <input
          value={message}
          className='border-2 border-dashed border-black p-2'
          onChange={(e) => setMessage(e.target.value)}
          placeholder='Type your message...' />
        <button onClick={sendMessage} disabled={!message || loading} className='rounded bg-black text-white w-24 ml-4'>
          {loading ? 'Sending...' : 'Send'}
        </button>
      </div>
      {response && (
        <div className='p-8 border-2 border-dashed border-black max-w-5xl mx-auto'>
          <p>{response.reply}</p>
          <div className='flex flex-col md:flex-row flex-wrap gap-x-2 gap-y-8 justify-center items-start max-w-full mx-auto py-12'>
            {response.recipes.map((i:any, k: string | number) => (
              <div
                key={k}
                className='basis-1/3 shrink-0 text-center shadow-xl rounded-xl bg-white overflow-hidden'
              >
                <div className='w-full h-44 overflow-hidden'>
                  <Image
                    src={i.image}
                    alt={`Take a look at the ${i.title} recipe.`}
                    className='mx-auto h-48 w-full object-cover object-center'
                    width={312}
                    height={231}
                  />
                </div>
                <div className='h-20 flex justify-center items-center'>

                <Link href={`/recipes/${i.id}`} title={i.title} aria-label={`View the ${i.title} recipe.`} className='text-xl block py-4 cursor-pointer'>
                  {i.title}
                </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default RecipeChatComponent;
