import PrettyLink from "@/ui/PrettyLink";
import Title from '@/ui/Title';

export default function Index() {
  return (
    <section className="h-screen flex flex-col justify-evenly items-center text-zinc-900">
      <div className="flex flex-col justify-evenly h-full">
        <Title>django-next.js</Title>
        <div className="flex flex-col gap-3">
          <PrettyLink href="/signin">Sign In</PrettyLink>
          <PrettyLink href="/signup">Sign Up</PrettyLink>
        </div>
      </div>
    </section>
  );
}
