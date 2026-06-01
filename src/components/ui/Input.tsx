"use client";

export function Input({ 
  label, 
  value, 
  onChange, 
  name, 
  type = "text", 
  required = false,
  placeholder 
}: { 
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-neutral-300">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="px-4 py-2 rounded-2xl border border-[#3b2b14] bg-[#23180d] py-2 bg-neutral-800 border border-neutral-700 rounded text-white focus:outline-none focus:border-blue-500"
      />
    </div>
  );
}