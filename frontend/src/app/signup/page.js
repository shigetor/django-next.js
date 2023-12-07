import Link from 'next/link';
import { fontMain } from '@/fonts';

export const metadata = {
  title: 'Sign up',
};

export default function Page() {
  return (
    <section
      className="h-screen flex flex-col justify-center items-center text-zinc-900"
      style={fontMain.style}
    >
      <div>
        <div className="text-9xl font-black">SIGN UP</div>
        <Link href="/"> Index </Link>
      </div>
    </section>
  );
}
