export default function Input({ name, type, id, placeholder }) {
  return (
    <input
      className="block w-full py-2 px-4 outline-none ring-0 border hover:border-zinc-400 focus:border-zinc-900 transition shadow-sm rounded-md overflow-hidden"
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
    />
  );
}
