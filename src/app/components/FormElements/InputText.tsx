type InputTextType = {
  id: string;
  label: string;
  placeholder: string;
  disabled?: boolean;
};

export default function InputText({
  id,
  label,
  placeholder,
  disabled,
}: InputTextType) {
  return (
    <div className='mb-5'>
      <label
        htmlFor={id}
        className='mb-3 block text-base font-medium text-gray-400'
      >
        {label}
      </label>
      <input
        type='text'
        name={id}
        id={id}
        placeholder={placeholder}
        className='w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
        disabled={disabled}
      />
    </div>
  );
}
