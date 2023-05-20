'use client'
import { useRouter } from 'next/navigation';
import React, { FormEvent, useState, useEffect } from 'react'

export default function page() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('');

    const handleSubmit = async (event: FormEvent<HTMLElement>) => {
        event.preventDefault();

        if (!username || !password) {
          setError('Username and password are required!');
          return;
        }

        if (username.trim().length <= 0) {
          setError('Username cannot be all whitespace!');
          return;
        }

        if (password.trim().length <= 0) {
          setError('Password cannot be all whitespace!');
          return;
        }

        console.log("JSON STRINGIFY " + JSON.stringify({ username, password }))

        const response = await fetch('http://localhost:8000/api/auth/login?username=' + username + '&password=' + password, {
            method: 'GET',
            credentials: 'include',
        });
        const data = await response.json();

        try {
            if (response.ok) {
                const authCookie = response.headers.get('auth-cookie');

                document.cookie = authCookie ? authCookie : "";

                console.log('debug:', data.message);
                setError('');

                window.location.href = '/';

            } else {
                const msg = data.message

                setError(msg);
                console.error('Login failed:', msg);
            }

        } catch (error) {
            const msg = data.message

            setError('An error occurred during login: ' + msg);
            console.error('An error occurred during login:', error);
        }
    };

    const page =  (
        <div className='gridH2'>
            {/* <PageTitle title='Login' /> */}

            <form onSubmit={handleSubmit} className="fullW fullH flex r borrad5 pad30 boxedEl1 verti gap30">
                <span className='em1_5 r b'> PixelHive™ </span>

                <div className="flex verti gap10">
                    Username
                    <input className='pad10 borrad5'
                           type="text" name="username" id="username"
                           value={username}
                           onChange={(event) => setUsername(event.target.value)} />
                </div>
                <div className="flex verti gap10">
                    Password
                    <input className='pad10 borrad5'
                           type="text" name="password" id="password"
                           value={password}
                           onChange={(event) => setPassword(event.target.value)} />
                </div>

                <div>
                    {error && <p>{error}</p>}
                </div>

                <button type='submit' className='greenButton pad15 borrad5 ptr'> Log In </button>
            </form>
        </div>
    )

    return page
}
