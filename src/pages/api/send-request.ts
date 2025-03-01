import type { APIRoute } from 'astro';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(import.meta.env.SUPABASE_URL, import.meta.env.SUPABASE_ANON_KEY);

export const post: APIRoute = async ({ request }) => {
  const { fromUserId, toUserId, clothingId, message } = await request.json();
  if (!fromUserId || !toUserId || !clothingId) {
    return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
  }
  const { data, error } = await supabase.from('friend_requests').insert([
    { from_user_id: fromUserId, to_user_id: toUserId, clothing_id: clothingId, message }
  ]);
  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 400 });
  }
  return new Response(JSON.stringify({ success: true, message: 'Request sent', data }), { status: 200 });
};
