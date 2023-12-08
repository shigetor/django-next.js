import PrettyLink from '@/ui/PrettyLink';
import Title from '@/ui/Title';
import Input from '@/ui/Input';
import Button from '@/ui/Button';

export const metadata = {
  title: 'Sign in',
};

export default function Page() {
  return (
    <section className="h-screen w-fit mx-auto flex flex-col justify-center items-center gap-4 text-zinc-900">
      <Title>SIGN IN</Title>
      <form className="w-full flex flex-col gap-3">
        <Input type="email" name="email" id="email" placeholder="email" />
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="password"
        />
        <Button>Sign In</Button>
      </form>
      <div className="w-full py-2 text-center flex justify-between gap-4">
        <PrettyLink href="/">Index</PrettyLink>
        <PrettyLink href="/signup">Create an account</PrettyLink>
      </div>
    </section>
  );
}
