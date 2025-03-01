import type { APIRoute } from 'astro';

export const post: APIRoute = async ({ request }) => {
  const { clothingKeywords } = await request.json();
  if (!clothingKeywords) {
    return new Response(JSON.stringify({ error: 'Missing clothing keywords' }), { status: 400 });
  }
  const suggestedAmount = 10; // Replace with Google Gemini API call logic later
  return new Response(JSON.stringify({ success: true, amount: suggestedAmount, message: 'AI suggestion computed' }), { status: 200 });
};
