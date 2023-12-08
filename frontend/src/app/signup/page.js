import PrettyLink from '@/ui/PrettyLink';
import Title from '@/ui/Title';
import Input from '@/ui/Input';
import Button from '@/ui/Button';

export const metadata = {
  title: 'Sign up',
};

export default function Page() {
  return (
    <section className="h-screen w-fit mx-auto flex flex-col justify-center items-center gap-4 text-zinc-900">
      <Title>SIGN UP</Title>
      <form className="w-full flex flex-col gap-3">
        <Input
          type="text"
          name="username"
          id="username"
          placeholder="username"
        />
        <Input type="email" name="email" id="email" placeholder="email" />
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="password"
        />
        <Button>Sign Up</Button>
      </form>
      <div className="w-full py-2 text-center flex justify-between gap-4">
        <PrettyLink href="/">Index</PrettyLink>
        <PrettyLink href="/signin">Sign in instead</PrettyLink>
      </div>
    </section>
  );
}
