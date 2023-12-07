import Link from 'next/link';
import { fontMain } from '@/fonts';

export default function Index() {
  return (
    <section
      className="h-screen flex flex-col justify-evenly items-center text-zinc-900"
      style={fontMain.style}
    >
      <div className="flex flex-col justify-evenly h-full">
        <div className="text-9xl font-black">django-next.js</div>
        <div className="flex flex-col gap-3">
          <Link href="/signin" className="underline-offset-8 hover:underline">Sign In</Link>
          <Link href="/signup" className="underline-offset-8 hover:underline">Sign Up</Link>
        </div>
      </div>
    </section>
  );
}
