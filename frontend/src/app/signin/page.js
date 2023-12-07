import Link from 'next/link';
import { fontMain } from '@/fonts';

export const metadata = {
  title: 'Sign in',
};

export default function Page() {
  return (
    <section
      className="h-screen flex flex-col justify-center items-center text-zinc-900"
      style={fontMain.style}
    >
      <div>
        <div className="text-9xl font-black">SIGN IN</div>
        <Link href="/"> Index </Link>
      </div>
    </section>
  );
}
