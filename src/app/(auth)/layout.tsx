import { Logo, Devlinks } from "@/components/Icons";
export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col justify-center items-center bg-white">
      <div className="flex flex-col flex-shrink-0 items-start self-stretch">
        <div className="flex flex-col flex-grow flex-shrink-0 items-start gap-12 p-8 self-stretch">
          {/* logo container */}
          <div className="h-10 -full">
            <Logo className="inline-block flex-shrink-0 w-10 h-10 fill-purple" />
            <Devlinks className="inline-block flex-shrink-0 pl-1 h-[1.64rem] fill-darkGrey" />
          </div>
          {/* form container */}
          {children}
        </div>
      </div>
    </div>
  );
}
