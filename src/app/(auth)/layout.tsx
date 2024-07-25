import { Logo, Devlinks } from "@/components/Icons";
export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className="w-screen h-screen overflow-hidden justify-center flex flex-col items-start font-instrument self-stretch box-border p-8 flex-shrink-0 flex-grow bg-white
      md:bg-lightGrey md:items-center md:justify-center md:inline-flex
        lg:items-center lg:justify-center lg:bg-lightGrey overflow-y-auto
        "
    >
      {/* form container wrapper */}
      <div 
        className="flex flex-col gap-16 items-center justify-start sm:justify-center
          md:gap-[3.18rem] md:justify-center">

        {/* logo container */}
        <div
          className="relative w-full  
            sm:w-[12rem] sm:h-[3rem] 
            md:w-[14rem] md:h-[3.5rem] 
            lg:w-[16rem] lg:h-[4rem]"
        >
          <Logo
            className="overflow-hidden 
              sm:w-10 sm:h-10
              lg:w-[4rem] lg:h-[4rem]"
          />

          <Devlinks
            className="absolute top-[0.39rem] left-12 w-[8.43rem] h-[1.64rem] 
              sm:top-[0.5rem] sm:left-[3.5rem] sm:w-36 sm:h-[1.8rem] 
              md:top-[0.6rem] md:left-[4rem] md:w-[8.43rem] md:h-[1.64rem] 
              lg:top-[0.75rem] lg:left-[4.5rem] lg:w-[11rem] lg:h-[2.2rem]"
          />
        </div>

        {/* form container */}
        {children}
      </div>
    </div>
  );
}
