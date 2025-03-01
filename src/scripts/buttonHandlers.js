document.getElementById('signupButton').addEventListener('click', async () => {
    const payload = { email: "user@example.com", password: "password123" };
    const res = await fetch('/api/signup', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const data = await res.json();
    console.log('Sign Up Response:', data);
  });
  
  document.getElementById('exploreClosetsButton').addEventListener('click', async () => {
    const res = await fetch('/api/products', { method: 'GET' });
    const data = await res.json();
    console.log('Products:', data);
  });

document.getElementById('get-started-btn').addEventListener('click', () => {
  window.location.href = '/signup'; // consfudedddddddd but it works
});

document.getElementById('explore-closets-btn').addEventListener('click', () => {
  window.location.href = '/thecloset';
});