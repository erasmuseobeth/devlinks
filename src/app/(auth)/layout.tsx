import { Logo, Devlinks } from "@/components/Icons";
export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className="w-screen h-screen overflow-hidden flex flex-col items-start self-stretch box-border p-8 flex-shrink-0 flex-grow 
        md:h-[64rem] md:text-[1.125rem] md:text-black md:font-barlow 
        lg:h-[61.5rem] lg:text-[0.875rem] lg:text-white lg:font-gotham-bold 
        bg-light-grey"
    >
      {/* form container wrapper */}
      <div className="flex flex-col gap-16 items-center justify-start">
        {/* logo container */}
        <div
          className="relative w-full h-[2.5rem] 
            sm:w-[12rem] sm:h-[3rem] 
            md:w-[14rem] md:h-[3.5rem] 
            lg:w-[16rem] lg:h-[4rem]"
        >
          <Logo
            className="overflow-hidden 
              sm:w-[3rem] sm:h-[3rem] 
              md:w-[3.5rem] md:h-[3.5rem] 
              lg:w-[4rem] lg:h-[4rem]"
          />

          <Devlinks
            className="absolute top-[0.391rem] left-[2.969rem] w-[8.438rem] h-[1.644rem] 
              sm:top-[0.5rem] sm:left-[3.5rem] sm:w-[9rem] sm:h-[1.8rem] 
              md:top-[0.6rem] md:left-[4rem] md:w-[10rem] md:h-[2rem] 
              lg:top-[0.75rem] lg:left-[4.5rem] lg:w-[11rem] lg:h-[2.2rem]"
          />
        </div>
        {/* form container */}
        {children}
      </div>
    </div>
  );
}
