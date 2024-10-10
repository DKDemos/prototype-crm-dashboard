type InputDateType = {
  id: string;
  label: string;
  defaultValue?: string;
  disabled?: boolean;
};

export default function InputDate({
  id,
  label,
  defaultValue,
  disabled,
}: InputDateType) {
  return (
    <div className='mb-5'>
      <label
        htmlFor={id}
        className='mb-3 block text-base font-medium text-gray-400'
      >
        {label}
      </label>
      <input
        type='datetime-local'
        name={id}
        id={id}
        defaultValue={defaultValue}
        className='w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
        disabled={disabled}
      />
    </div>
  );
}
