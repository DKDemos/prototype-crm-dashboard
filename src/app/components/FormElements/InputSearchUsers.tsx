'use client';

import { UserType } from '@/app/lib/types';
import React, { useState } from 'react';
import WorkerButton from '../ui/WorkerButton';

type InputSearchType = {
  id: string;
  label: string;
  placeholder: string;
  users?: UserType[];
  disabled?: boolean;
  addAcquainted: (id: number | string) => void;
};

const addIcon = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='h-6 w-6'
    viewBox='0 0 24 24'
  >
    <path
      fill='currentColor'
      d='M12 21q-.425 0-.712-.288T11 20v-7H4q-.425 0-.712-.288T3 12t.288-.712T4 11h7V4q0-.425.288-.712T12 3t.713.288T13 4v7h7q.425 0 .713.288T21 12t-.288.713T20 13h-7v7q0 .425-.288.713T12 21'
    />
  </svg>
);

export default function InputSearch({
  id,
  label,
  placeholder,
  users,
  disabled,
  addAcquainted,
}: InputSearchType) {
  const [search, setSearch] = useState<string>('');
  const [workers, setWorkers] = useState<UserType[]>(users || []);
  // const [loading, setLoading] = useState<boolean>(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     setWorkers(users || []);
  //     setLoading(false);
  //   };
  //   fetchData();
  // }, [users]);

  const handleWorker = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    const newWorkers = workers?.filter(
      (person) =>
        person.firstname.toLowerCase().includes(e.target.value.toLowerCase()) ||
        person.lastname.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setWorkers(newWorkers);
  };

  return (
    <div className='mb-5'>
      <label
        htmlFor={id}
        className='mb-3 block text-base font-medium text-gray-400'
      >
        {label}
      </label>
      <input
        type='search'
        name={id}
        id={id}
        placeholder={placeholder}
        className='mb-3 w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
        disabled={disabled}
        onChange={handleWorker}
        value={search}
      />
      <div className='flex max-h-40 w-full flex-row flex-wrap gap-4 overflow-y-scroll rounded-md p-2 font-semibold text-white'>
        {workers.map((person: UserType) => (
          <WorkerButton
            key={person.id}
            id={person.id}
            color={'bg-gray-300 text-gray-900'}
            title={`${person.firstname} ${person.lastname}`}
            onClick={addAcquainted}
            icon={addIcon}
            actionColor='bg-green-800 hover:bg-green-700 ring-green-700'
          />
        ))}
      </div>
    </div>
  );
}
