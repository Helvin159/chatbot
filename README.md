
# MLB Chatbot using Next.js

This is a simple GPT-powered chatbot built using **Next.js** (App Router) and the **OpenAI API**. It allows users to input queries and receive responses from the GPT-3.5 model using the OpenAI `chat/completions` endpoint.

## Features

- **Next.js (App Router)**: Handles both the frontend and API routes.
- **OpenAI GPT-3.5 API**: Provides AI-powered responses.
- **Server-Side API Protection**: The API key is securely handled on the server-side.
- **Spoonacular**: https://spoonacular.com/food-api/docs

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/gpt-chatbot.git
   cd gpt-chatbot
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory and add your **OpenAI API Key**:
   ```bash
   OPENAI_API_KEY=your_openai_api_key
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to interact with the chatbot.

## API

### POST `/api/gpt`

The API route `POST /api/gpt` accepts user queries and forwards them to the OpenAI API. The response is sent back as a JSON object containing the AI-generated reply.

- **Request Body**:
  ```json
  {
    "message": "Your query here"
  }
  ```

- **Response**:
  ```json
  {
    "reply": "GPT's response here"
  }
  ```

## Project Structure

- **app/api/gpt/route.js**: Handles requests to the GPT API securely using the server-side environment variable.
- **app/page.js**: Contains the frontend UI that allows users to interact with the chatbot.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more information.
