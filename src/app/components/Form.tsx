'use client';

import { useState } from 'react';
import { getFormattedDate } from '@/app/lib/utils';
import { UserType } from '@/app/lib/types';
import InputText from './FormElements/InputText';
import InputDate from './FormElements/InputDate';
import TextArea from './FormElements/TextArea';
// import { fetchUsers } from '../actions/get-users';
import Acquainted from './FormElements/Acquainted';
import Select from './FormElements/Select';
import { orderStatuses } from '../lib/constants';
import InputSearch from './FormElements/InputSearchUsers';
import { users } from '../lib/fakedb';

type PlaceholderType = {
  author: string;
  creationDate: string;
  users: UserType[];
  shouldAcquainted: UserType[];
  activeAcquainted: UserType[];
  declinedAcquainted: UserType[];
};

const removeIcon = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='h-6 w-6'
    viewBox='0 0 24 24'
  >
    <path
      fill='currentColor'
      d='M7 21q-.825 0-1.412-.587T5 19V6q-.425 0-.712-.288T4 5t.288-.712T5 4h4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5t-.288.713T19 6v13q0 .825-.587 1.413T17 21zm3-4q.425 0 .713-.288T11 16V9q0-.425-.288-.712T10 8t-.712.288T9 9v7q0 .425.288.713T10 17m4 0q.425 0 .713-.288T15 16V9q0-.425-.288-.712T14 8t-.712.288T13 9v7q0 .425.288.713T14 17'
    />
  </svg>
);

export default function Form() {
  const [placeholder, setPlaceholder] = useState<PlaceholderType>({
    author: 'Kyrylo Budanov',
    creationDate: getFormattedDate(),
    users: users,
    shouldAcquainted: [],
    activeAcquainted: [],
    declinedAcquainted: [],
  });

  const addAcquainted = (id: number | string) => {
    placeholder.shouldAcquainted.push(
      placeholder.users.find((person) => person.id === id)!
    );
    placeholder.users.filter((person, index, arr) => {
      if (person.id === id) {
        arr.splice(index, 1);
        return true;
      } else {
        return false;
      }
    });
    console.log(placeholder.shouldAcquainted);
    setPlaceholder({
      ...placeholder,
      shouldAcquainted: placeholder.shouldAcquainted,
    });
  };

  const removeAcquainted = (id: number | string) => {
    placeholder.users.push(
      placeholder.shouldAcquainted.find((person) => person.id === id)!
    );
    placeholder.shouldAcquainted.filter((person, index, arr) => {
      if (person.id === id) {
        arr.splice(index, 1);
        return true;
      } else {
        return false;
      }
    });
    console.log(placeholder.users);
    setPlaceholder({ ...placeholder, users: placeholder.users });
  };

  return (
    <div className='flex items-center justify-center'>
      <div className='mx-auto w-full max-w-[550px] rounded bg-gray-900 p-4 text-gray-400'>
        <h1 className='my-5 text-2xl font-extrabold text-white'>
          Create order
        </h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <InputText id={'title'} label={'Title'} placeholder={'Title'} />
          <InputText
            id={'author'}
            label={'Author'}
            placeholder={placeholder.author}
            disabled
          />
          <InputDate
            id={'creation-date'}
            label={'Creation Date'}
            defaultValue={placeholder.creationDate}
            disabled
          />
          <InputText
            id={'facility'}
            label={'Facility'}
            placeholder={'Facility'}
          />
          <InputText id={'object'} label={'Object'} placeholder={'Search'} />
          <InputText
            id={'connection'}
            label={'Connection'}
            placeholder={'Search'}
          />
          <TextArea id={'order'} label={'Order'} placeholder={'Order'} />
          <InputSearch
            id={'acquainted-user'}
            label={'Worker'}
            placeholder={'Find workers'}
            users={placeholder.users.sort((a, b) =>
              a.firstname.localeCompare(b.firstname)
            )}
            addAcquainted={addAcquainted}
          />
          <Acquainted
            id={'acquainted-should'}
            label={'Should get acquainted'}
            color='bg-orange-800 text-white'
            actionColor='bg-red-800 hover:bg-red-700 ring-red-700 text-white'
            icon={removeIcon}
            users={placeholder.shouldAcquainted}
            removeAcquainted={removeAcquainted}
          />
          <Acquainted
            id={'acquainted-active'}
            label={'Acquainted'}
            color='bg-green-800'
            users={placeholder.activeAcquainted}
            removeAcquainted={removeAcquainted}
          />
          <Acquainted
            id={'acquainted-declined'}
            label={'Acquainted with decline'}
            color='bg-red-800'
            users={placeholder.declinedAcquainted}
            removeAcquainted={removeAcquainted}
          />
          <Select id={'status'} label={'Status'} options={orderStatuses} />
          <div>
            <button className='hover:shadow-form w-full rounded-md bg-gray-800 px-8 py-3 text-center text-base font-semibold text-white outline-none'>
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
