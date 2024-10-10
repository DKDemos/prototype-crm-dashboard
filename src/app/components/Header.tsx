'use client';

import { useState } from 'react';
import Login from '@/app/components/Login';

export default function Header() {
  const [loginForm, setLoginForm] = useState<boolean>(false);

  return (
    <>
      <div className='fixed h-14 w-full bg-gray-900'>
        <nav className='flex flex-row space-x-2 p-2'>
          <button
            onClick={() => setLoginForm(!loginForm)}
            className='transform rounded-md bg-gray-700 px-3 py-2 font-semibold text-white ring-gray-800 transition duration-300 hover:bg-gray-600 focus:ring focus:ring-offset-2'
          >
            Login
          </button>
        </nav>
      </div>
      {loginForm && <Login onClick={() => setLoginForm(!loginForm)} />}
    </>
  );
}
