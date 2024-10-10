import { UserType } from '@/app/lib/types';
import WorkerButton from '../ui/WorkerButton';
import React from 'react';

type AcquaintedType = {
  id: string;
  label: string;
  color?: string;
  actionColor?: string;
  icon?: React.JSX.Element;
  users: UserType[];
  removeAcquainted: (id: number) => void;
};

export default function Acquainted({
  id,
  label,
  color,
  actionColor,
  icon,
  users,
  removeAcquainted,
}: AcquaintedType) {
  return (
    users?.length > 0 && (
      <div className='mb-5 rounded-md border-2 border-gray-400 p-2'>
        <label
          htmlFor={id}
          className='mb-3 block text-base font-medium text-gray-400'
        >
          {label}
        </label>
        <div id={id} className='flex flex-row flex-wrap gap-4'>
          {users.map((person) => (
            <WorkerButton
              color={color}
              actionColor={actionColor}
              key={person.id}
              id={person.id}
              title={`${person.firstname} ${person.lastname}`}
              onClick={() => removeAcquainted(person.id)}
              icon={icon}
            />
          ))}
        </div>
      </div>
    )
  );
}
