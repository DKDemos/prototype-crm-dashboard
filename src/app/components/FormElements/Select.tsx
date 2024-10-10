import { OptionType } from '@/app/lib/types';

type SelectType = {
  id: string;
  label: string;
  options: OptionType[];
  disabled?: boolean;
};

export default function Select({ id, label, options }: SelectType) {
  return (
    <div className='mb-5'>
      <label
        htmlFor={id}
        className='mb-3 block text-base font-medium text-gray-400'
      >
        {label}
      </label>
      <select
        name={id}
        id={id}
        className='w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
      >
        {options.map((option) => (
          <option key={option.id} value={option.value}>
            {option.title}
          </option>
        ))}
      </select>
    </div>
  );
}
