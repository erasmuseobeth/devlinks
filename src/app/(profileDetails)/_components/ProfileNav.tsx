import { Logo, User, Link, Eye, Devlinks } from "@/components/Icons";
export default function ProfileNav() {
  return (
    <div className="w-full relative rounded-xl bg-white overflow-hidden flex flex-col items-start justify-start p-4 text-left text-base text-purple font-heading-s sm:p-6 md:p-8">
      <div className="self-stretch flex flex-row items-center justify-between gap-4">
        {/* Logo Section */}
        <div className="w-[3.25rem] sm:w-[9.125rem] flex items-center justify-start relative h-[2rem]">
          <Logo className="w-[2rem] h-[2rem] sm:absolute sm:top-0 sm:left-0" />
          <Devlinks className="hidden sm:absolute sm:top-0.5 sm:left-[2.375rem] sm:w-[6.75rem] sm:h-[1.313rem]" />
        </div>

        {/* Navigation Items */}
        <div className="flex flex-row items-start justify-start gap-2 sm:gap-4">
          <div className="rounded-lg bg-light-purple flex flex-row items-center justify-start py-2 px-4 gap-2">
            <Link className="w-5 h-5" />
            <div className="hidden sm:block text-sm font-semibold">Links</div>
          </div>
          <div className="rounded-lg flex flex-row items-center justify-start py-2 px-4 gap-2 text-grey">
            <User className="w-5 h-5" />
            <div className="hidden sm:block text-sm font-semibold">
              Profile Details
            </div>
          </div>
        </div>

        {/* Preview Button */}
        <div className="hidden sm:flex flex-col items-start justify-start py-2 px-4 border border-purple">
          <div className="w-[3.75rem] h-[1.5rem]">
            <div className="leading-[150%] font-semibold">Preview</div>
          </div>
        </div>
      </div>
    </div>
  );
}
