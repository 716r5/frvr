import type { APIRoute } from 'astro';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(import.meta.env.SUPABASE_URL, import.meta.env.SUPABASE_ANON_KEY);

export const post: APIRoute = async ({ request }) => {
  const { userId, imageUrl, link, description } = await request.json();
  if (!userId || (!imageUrl && !link)) {
    return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
  }
  const { data, error } = await supabase.from('clothes').insert([
    { user_id: userId, image_url: imageUrl, link, description }
  ]);
  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 400 });
  return new Response(JSON.stringify({ success: true, message: 'Clothing uploaded', data }), { status: 200 });
};
