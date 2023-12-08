import Link from 'next/link';

export default function PrettyLink({ children, href }) {
  return (
    <Link
      className="underline-offset-[6px] underline text-zinc-500 hover:text-zinc-900 transition"
      href={href}
    >
      {children}
    </Link>
  );
}
