import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { message } = await req.json(); // Get the user input from the request body

    const response = await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_REACT_APP_OPENAI_API_KEY}`, // Using environment variable for API key
      },
      body: JSON.stringify({
        model: 'ft:babbage-002:personal::AHE372x8',
        prompt: message,
        max_tokens: 150,
        temperature: 0.7,
      }),
    });

    const data = await response.json();

    // Check if the response is okay before proceeding
    if (!response.ok) {
      console.error('Error from OpenAI API:', data);
      return NextResponse.json({ error: 'Failed to fetch from OpenAI API' }, { status: response.status });
    }

    // Return the response from OpenAI API to the client
    return NextResponse.json({ reply: data.choices[0].text });

  } catch (error) {
    console.error('Detailed Error Information:', error); // Log the full error object and stack trace
    return NextResponse.json({ error: 'Something went wrong', details: error.message }, { status: 500 });
  }
}
