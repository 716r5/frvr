import type { APIRoute } from 'astro';

const users: { email: string; password: string }[] = [];

export const post: APIRoute = async ({ request }) => {
    const { email, password } = await request.json();
    if (!email || !password) {
        return new Response(JSON.stringify({ error: 'Missing email or password' }), { status: 400 });
    }

    users.push({ email, password });

    return new Response(
        JSON.stringify({ success: true, message: 'Login successful', data: { email, password } }),
        { status: 200 }
    );
};
