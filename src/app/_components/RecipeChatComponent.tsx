'use client';
import { sendMessage } from '@/_utils/SendMessage';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const RecipeChatComponent = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse]:any = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <section>
      <div className='flex p-5'>
        <input
          value={message}
          className='border-2 border-dashed border-black p-2'
          onChange={(e) => setMessage(e.target.value)}
          placeholder='Type your message...' />
        <button onClick={async () => await sendMessage(message, setLoading, setResponse)} disabled={!message || loading} className='rounded bg-black text-white w-24 ml-4'>
          {loading ? 'Sending...' : 'Send'}
        </button>
      </div>
      {response && (
        <div className='p-4 border-2 border-dashed border-black mx-auto'>
          <p>{response.reply}</p>
          <div className='flex flex-col md:flex-row flex-wrap gap-x-2 gap-y-4 justify-center items-start max-w-full mx-auto py-12'>
            {response.recipes.map((i:any, k: string | number) => (
              <div
                key={k}
                className='basis-1/4 shrink-0 text-center shadow-xl rounded-xl bg-white overflow-hidden'
              >
                <div className='w-full h-44 overflow-hidden'>
                  <Image
                    src={i.image}
                    alt={`Take a look at the ${i.title} recipe.`}
                    className='mx-auto h-60 w-full object-cover object-center'
                    width={312}
                    height={231}
                  />
                </div>
                <div className='min-h-24 flex justify-center items-center'>
                  <Link href={`/recipes/${i.id}`} title={i.title} aria-label={`View the ${i.title} recipe.`} className='block text-xl p-4 cursor-pointer truncate overflow-hidden'>
                    {i.title}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default RecipeChatComponent;
