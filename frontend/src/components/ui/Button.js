export default function Button({ children }) {
  return (
    <button className="block w-full py-2 px-4 text-white text-center bg-zinc-900 hover:bg-zinc-700 transition shadow-sm rounded-md overflow-hidden">
      {children}
    </button>
  );
}
