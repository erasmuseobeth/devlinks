import { Logo, User, LinkIcon, Eye, Devlinks } from "@/components/Icons";
import Link from "next/link";

export default function ProfileNav() {
  return (
    <div className="flex flex-col items-start gap-2 bg-white p-4 rounded-xl w-screen font-heading-s text-base overflow-hidden">
      <div className="flex flex-row justify-between items-center self-stretch">
        {/* Logo Section */}
        <div className="flex flex-row justify-start items-center gap-2">
          <Logo className="flex-shrink-0 w-8 h-8 fill-purple" />
          <Devlinks className="flex-shrink-0 hidden h-5 fill-darkGrey" />
        </div>

        {/* Navigation Items */}
        <div className="flex flex-row justify-start items-start">
          <div className="flex flex-row justify-start items-center gap-2 bg-lightPurple px-6 py-2.5 rounded-lg">
            <LinkIcon className="w-5 h-5 fill-purple" />
            <div className="sm:block hidden font-instrument font-semibold text-base text-purple not-italic">
              Links
            </div>
          </div>
          <div className="flex flex-row justify-start items-center gap-2 px-6 py-2.5 rounded-lg">
            <User className="w-5 h-5" />
            <div className="sm:block hidden font-instrument font-semibold text-base text-grey italic not">
              Profile Details
            </div>
          </div>
        </div>

        {/* Preview Button */}
        <div className="sm:flex flex-col justify-start items-start gap-2 border-[1px] border-purple px-4 py-2.5 border-solid rounded-lg">
          <Eye className="hw-5 -5 fill-purple" />
          <div className="hidden font-semibold leading-9">Preview</div>
        </div>
      </div>
    </div>
  );
}
