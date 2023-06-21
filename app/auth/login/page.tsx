'use client'
import { useRouter } from 'next/navigation';
import React, { FormEvent, useState, useEffect } from 'react'
import cookie from 'cookie';
import PageTitle from '@/app/components/PageTitle';

export default function page() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setError] = useState('');
    const setCookie = (name: any, value: any, options = {}) => {
        const serializedCookie = cookie.serialize(name, value, options);
        document.cookie = serializedCookie;
    };

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

        var formdata = new FormData();
        formdata.append("username", username);
        formdata.append("password", password);

        const response = await fetch('http://localhost:8000/api/auth/login', {
            method: 'POST',
            body: formdata,
            credentials: 'include'
        });

        const data = await response.json();

        try {
            if (response.ok) {
                setCookie('jwt', data.access_token, {
                    maxAge: 3600,
                    path: '/',
                    sameSite: 'lax',
                });
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

    const page = (
        <>
            {/* <PageTitle title='Login' /> */}

            <div className='fullW fullH centerHori flex centerVerti martom30 padtom30'>

                <form onSubmit={handleSubmit} className="flex r borrad10 pad30 boxedEl1 verti gap30" style={{"width": "500px"}}>
                    <img src="https://video-public.canva.com/VAFAiJOBbnk/v/968cca7ada.gif" alt="" style={{"width": "50px", "marginBottom": "-15px"}} />
                    <span className='em1_5 r b'> Login to PixelHive™ </span>

                    <div className="flex verti gap10">
                        Username
                        <input className='pad10 borrad5 boxedEl1'
                            type="text" name="username" id="username"
                            value={username}
                            onChange={(event) => setUsername(event.target.value)} />
                    </div>
                    <div className="flex verti gap10">
                        Password
                        <input className='pad10 borrad5 boxedEl1'
                            type="password" name="password" id="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)} />
                    </div>

                    <div>
                        {errors && <p style={{ color: "red", padding: "10px" }}>{errors}</p>}
                    </div>

                    <button type='submit' className='greenButton pad15 borrad5 ptr'> Log In </button>
                </form>
            </div>
        </>
    )

    return page
}
