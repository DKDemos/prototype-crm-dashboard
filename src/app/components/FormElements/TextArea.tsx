type TextAreaType = {
  id: string;
  label: string;
  placeholder: string;
  disabled?: boolean;
};

export default function TextArea({
  id,
  label,
  placeholder,
  disabled,
}: TextAreaType) {
  return (
    <div className='mb-5'>
      <label
        htmlFor={id}
        className='mb-3 block text-base font-medium text-gray-400'
      >
        {label}
      </label>
      <textarea
        name={id}
        id={id}
        placeholder={placeholder}
        className='h-64 w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
        disabled={disabled}
      />
    </div>
  );
}
