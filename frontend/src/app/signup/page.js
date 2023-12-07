import Link from 'next/link';
import Title from '@/ui/Title';

export const metadata = {
  title: 'Sign up',
};

export default function Page() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-zinc-900">
      <div>
        <Title>SIGN UP</Title>
        <Link href="/"> Index </Link>
      </div>
    </section>
  );
}
