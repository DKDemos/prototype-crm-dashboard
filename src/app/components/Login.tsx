export default function Login({ onClick }: { onClick: () => void }) {
  return (
    <div className='absolute bottom-0 left-0 right-0 top-0 flex h-screen w-screen flex-col items-center justify-center bg-gray-900/95 backdrop-blur-sm'>
      <div className='relative z-10 w-1/4 rounded-md bg-gray-700 p-5 text-gray-100'>
        <svg
          onClick={onClick}
          className='absolute right-1 top-1 h-8 w-8 hover:cursor-pointer'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
        >
          <path
            fill='currentColor'
            d='m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z'
          />
        </svg>
        <div className='mb-5 flex flex-col space-y-2'>
          <label className='text-lg font-semibold' htmlFor='email'>
            Email
          </label>
          <input
            className='rounded-md p-2 text-gray-900'
            type='text'
            name='email'
            id='email'
            placeholder='mykola@mail.com.ua'
          />
        </div>
        <div className='mb-5 flex flex-col space-y-2'>
          <label className='text-lg font-semibold' htmlFor='password'>
            Email
          </label>
          <input
            className='rounded-md p-2 text-gray-900'
            type='password'
            name='password'
            id='password'
            placeholder='Password'
          />
        </div>
        <div className='flex flex-col'>
          <button className='hover:shadow-form w-full rounded-md bg-gray-800 px-8 py-3 text-center text-base font-semibold text-white outline-none'>
            Login
          </button>
        </div>
      </div>
      <div className='absolute h-full w-full' onClick={onClick}></div>
    </div>
  );
}
