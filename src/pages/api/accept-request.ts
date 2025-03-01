import type { APIRoute } from 'astro';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(import.meta.env.SUPABASE_URL, import.meta.env.SUPABASE_ANON_KEY);

export const post: APIRoute = async ({ request }) => {
  const { requestId, accept } = await request.json();
  if (!requestId) {
    return new Response(JSON.stringify({ error: 'Missing request ID' }), { status: 400 });
  }
  const { data, error } = await supabase
    .from('friend_requests')
    .update({ accepted: true })
    .eq('id', requestId);
  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 400 });
  return new Response(JSON.stringify({ success: true, message: 'Request accepted', data }), { status: 200 });
};
