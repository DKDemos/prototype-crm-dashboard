'use client';
import { useState } from 'react';
import { categories, groups } from '../lib/fakedb';
import { addUserIcon, descriptionIcon } from '../lib/svgs';

export default function Page() {
  const [description, showDescription] = useState<boolean>(false);

  return categories.map((category) => {
    return (
      <div key={category.id} className='flex flex-col'>
        <h2 className='mb-5 text-lg font-bold text-slate-300'>
          {category.title}
        </h2>
        <div className='mb-5 grid grid-cols-5 flex-wrap justify-center gap-5'>
          {category.groups.map((group) => {
            const g = groups.find((g) => g.id === group);
            return (
              g && (
                <div
                  key={g.id}
                  className='col-span-1 flex min-h-20 flex-col space-y-2 rounded-md bg-slate-900 px-3 py-2 text-slate-300'
                >
                  <h3 className='text-md font-semibold'>{g.title}</h3>
                  <p className='font-mono text-sm'>Users: {g.users}</p>
                  <div className='flex flex-row gap-2'>
                    <button
                      className='rounded-md bg-slate-500 p-1 text-slate-900'
                      onClick={() => showDescription(!description)}
                    >
                      {descriptionIcon}
                    </button>
                    <button className='rounded-md bg-slate-500 p-1 text-slate-900'>
                      {addUserIcon}
                    </button>
                    <div
                      className={`${description ? 'flex' : 'hidden'} absolute bottom-0 left-0 right-0 top-1/4 justify-center`}
                    >
                      <div className='relative max-h-64 max-w-64 rounded-md bg-white p-3 text-black'>
                        <svg
                          onClick={() => showDescription(!description)}
                          className='absolute right-1 top-1 h-8 w-8 hover:cursor-pointer'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 24 24'
                        >
                          <path
                            fill='currentColor'
                            d='m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z'
                          />
                        </svg>
                        <p className='max-h-64 overflow-y-auto'>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Error fugiat voluptas eveniet rem fuga quibusdam
                          asperiores aspernatur, eligendi et ex, quae provident
                          enim nesciunt voluptatibus tempora eos cum
                          reprehenderit beatae. Lorem ipsum dolor sit amet
                          consectetur adipisicing elit. Error fugiat voluptas
                          eveniet rem fuga quibusdam asperiores aspernatur,
                          eligendi et ex, quae provident enim nesciunt
                          voluptatibus tempora eos cum reprehenderit beatae.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>
    );
  });
}
