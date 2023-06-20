import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Make a request to your Laravel API to authenticate or perform other actions
    const response = await fetch('http://localhost:8000/api/auth/login', {
        method: 'POST',
        headers: {
            'username': "Vinn",
            'password': "abc",
        },
        body: JSON.stringify({ username: 'your-username', password: 'your-password' }),
    });

    // Check if the request was successful
    if (response.ok) {
        // Retrieve the cookie from the Laravel API response
        const cookie = response.headers.get('set-cookie');

        // Assign the cookie in the Next.js response
        res.setHeader('Set-Cookie', cookie ? cookie : "");
        res.status(200).end();
    } else {
        // Handle unsuccessful request
        res.status(response.status).json({ error: 'Login failed' });
    }
}
