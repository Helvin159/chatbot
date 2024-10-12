import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { message } = await req.json();

    const spoonacularResponse = await fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${message}&number=6&apiKey=${process.env.NEXT_PUBLIC_REACT_APP_SPOONACULAR_API_KEY}`
    );
    const recipes = await spoonacularResponse.json();
    const recipeList = recipes.map((recipe) => recipe.title).join(', ');
    const openAiPrompt = `Given the ingredients ${message}, here are some recipes you can try: ${recipeList}. Can you suggest which one would be the easiest?`;

    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_REACT_APP_OPENAI_API_RECIPES_KEY}` // Using environment variable for API key
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content:
              'You are an assistant that helps users with recipes based on ingredients.'
          },
          { role: 'user', content: openAiPrompt }
        ],
        max_tokens: 100
      })
    });

    const openAiData = await res.json();
    // console.log(openAiData)
    const reply = openAiData.choices[0].message.content.trim();

    // console.log(res)
    // Return the combined response
    return NextResponse.json({ "reply": reply, "recipes": recipes });

  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { error: 'An error occurred while fetching recipes.' },
      { status: 500 }
    );
  }
}
